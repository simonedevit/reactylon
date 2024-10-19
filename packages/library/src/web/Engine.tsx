import React, { useEffect, Children, useState, useRef } from 'react';
import { Engine as BabylonEngine, type EngineOptions, Scene, EventState } from '@babylonjs/core';
import CustomLoadingScreen from './CustomLoadingScreen';
import { FiberProvider } from 'its-fine';
import { EngineContextType } from '../core/hooks';
import { Logger } from '@dvmstudios/reactylon-common';

export type EngineProps = React.PropsWithChildren<{
    antialias?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loader?: React.FC;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ antialias, engineOptions, adaptToDeviceRatio, loader, ...rest }) => {
    const [context, setContext] = useState<EngineContextType | null>(null);
    const engineRef = useRef<{
        engine: BabylonEngine;
        onResizeWindow: () => void;
    }>({ engine: {} as BabylonEngine, onResizeWindow: () => {} });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const children = Children.toArray(rest.children) as Array<React.ReactElement>;
    const isMultipleScene = children.length > 1;

    useEffect(() => {
        async function initializeScene() {
            let canvas = null;
            if (!isMultipleScene) {
                canvas = canvasRef.current;
            } else {
                React.Children.forEach(rest.children, child => {
                    if (React.isValidElement(child)) {
                        if (!child.props.canvas) {
                            Logger.error(
                                `Engine - initializeScene - Each Scene component requires a corresponding canvas element. Ensure that you provide one canvas for every Scene you are using.`,
                            );
                        }
                    }
                });
                // fake canvas to work with multiple scenes (Babylon.js constraint)
                canvas = document.createElement('canvas');
            }

            /* --------------------------------------------------------------------------------------- */
            /* ENGINE
            ------------------------------------------------------------------------------------------ */
            const engine = new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
            if (loader) {
                engine.loadingScreen = new CustomLoadingScreen(canvas as HTMLCanvasElement, loader);
            }
            engine.runRenderLoop(() => {
                const camera = engine!.activeView?.camera;
                engine!.scenes.forEach(scene => {
                    if (!scene.activeCamera) {
                        // meantime you are setting a camera
                        Logger.warn('Engine - runRenderLoop - There is no active camera...');
                    }
                    if (scene.cameras?.length > 0) {
                        if (!isMultipleScene || scene.activeCamera === camera) {
                            scene.render();
                        }
                    }
                });
            });

            engineRef.current.engine = engine;
            engineRef.current.onResizeWindow = () => engine.resize();
            window.addEventListener('resize', engineRef.current.onResizeWindow);

            setContext({ engine, isMultipleScene });
        }
        initializeScene();

        return () => {
            if (engineRef.current.engine) {
                window.removeEventListener('resize', engineRef.current.onResizeWindow);
                engineRef.current.engine.dispose();
            }
        };
    }, []);

    return (
        <>
            {!isMultipleScene ? <canvas id='reactylon-canvas' ref={canvasRef} /> : null}
            {context ? (
                <FiberProvider>
                    {React.Children.map(rest.children, (child: any) => {
                        return React.cloneElement(child, { context });
                    })}
                </FiberProvider>
            ) : null}
        </>
    );
};
