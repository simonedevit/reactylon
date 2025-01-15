import React, { useEffect, Children, useState, useRef, isValidElement, cloneElement } from 'react';
import { Engine as BabylonEngine, NullEngine, type EngineOptions, Scene, EventState, type NullEngineOptions } from '@babylonjs/core';
import CustomLoadingScreen from './CustomLoadingScreen';
import { FiberProvider } from 'its-fine';
import { EngineContextType } from '../core/hooks';
import { Logger } from '@dvmstudios/reactylon-common';

export type EngineProps = React.PropsWithChildren<{
    antialias?: boolean;
    isMultipleCanvas?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loader?: React.FC;
    /**
     * This property is typically not required and has no effect when using multiple scenes.
     * @default 'reactylon-canvas'
     */
    canvasId?: string;
    /**
     * @internal
     * This prop is only for testing purpose and should not be passed to this component.
     */
    _nullEngineOptions?: NullEngineOptions;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    loader,
    canvasId = 'reactylon-canvas',
    _nullEngineOptions,
    isMultipleCanvas,
    ...rest
}) => {
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
            if (!isMultipleCanvas) {
                canvas = canvasRef.current;
            } else {
                if (isMultipleScene) {
                    Children.forEach(rest.children, child => {
                        if (isValidElement(child)) {
                            if (!child.props.canvas) {
                                Logger.error(
                                    `Engine - initializeScene - Each Scene component requires a corresponding canvas element. Ensure that you provide one canvas for every Scene you are using.`,
                                );
                            }
                        }
                    });
                }
                // fake canvas to work with multiple scenes (Babylon.js constraint)
                canvas = document.createElement('canvas');
            }

            /* --------------------------------------------------------------------------------------- */
            /* ENGINE
            ------------------------------------------------------------------------------------------ */
            const engine = process.env.NODE_ENV === 'test' ? new NullEngine(_nullEngineOptions) : new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
            if (loader) {
                engine.loadingScreen = new CustomLoadingScreen(canvas as HTMLCanvasElement, loader);
            }
            engine.runRenderLoop(() => {
                const camera = engine!.activeView?.camera;
                engine!.scenes.forEach(scene => {
                    if (!scene.activeCamera) {
                        // meantime you are setting a camera
                        Logger.warn('Engine - runRenderLoop - Waiting for active camera...');
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

            setContext({ engine, isMultipleCanvas: !!isMultipleCanvas, isMultipleScene });
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
            {!isMultipleCanvas ? <canvas id={canvasId} ref={canvasRef} /> : null}
            {context ? (
                <FiberProvider>
                    {Children.map(rest.children, (child: any) => {
                        return cloneElement(child, { _context: context, canvas: child.props.canvas || canvasRef.current });
                    })}
                </FiberProvider>
            ) : null}
        </>
    );
};
