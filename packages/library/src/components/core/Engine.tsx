import React, { useEffect, Children, useState, useRef } from 'react';
import { Engine as BabylonEngine, type EngineOptions, Scene, EventState } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { EngineContext, EngineContextType } from './hooks';
import { FiberProvider } from 'its-fine';

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
    }>();

    useEffect(() => {
        async function initializeScene() {
            const children = Children.toArray(rest.children) as Array<React.ReactElement>;
            const isMultipleScene = children.length > 1;
            const canvas = isMultipleScene ? document.createElement('canvas') : children[0].props.canvas;

            /* --------------------------------------------------------------------------------------- */
            /* ENGINE
            ------------------------------------------------------------------------------------------ */
            let engine = engineRef.current?.engine;
            engine = new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
            if (loader) {
                engine.loadingScreen = new CustomLoadingScreen(canvas, loader);
            }
            engine.runRenderLoop(() => {
                const camera = engine!.activeView?.camera;
                engine!.scenes.forEach(scene => {
                    if (!scene.activeCamera) {
                        // meantime you are setting a camera
                        console.warn('no active camera..');
                    }
                    if (scene.cameras?.length > 0) {
                        if (!isMultipleScene || scene.activeCamera === camera) {
                            scene.render();
                        }
                    }
                });
            });

            engineRef.current!.onResizeWindow = () => engine.resize();

            window.addEventListener('resize', engineRef.current!.onResizeWindow);

            setContext({ engine, isMultipleScene });
        }
        initializeScene();

        return () => {
            if (engineRef.current) {
                window.removeEventListener('resize', engineRef.current.onResizeWindow);
                engineRef.current.engine.dispose();
            }
        };
    }, []);

    return context ? (
        <FiberProvider>
            <EngineContext.Provider value={context}>{rest.children}</EngineContext.Provider>
        </FiberProvider>
    ) : null;
};
