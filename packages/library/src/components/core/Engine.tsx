import React, { useEffect, Children, useState } from 'react';
import { Engine as BabylonEngine, type EngineOptions, Scene, EventState } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { EngineContext, EngineContextType } from './hooks';

export type EngineProps = React.PropsWithChildren<{
    antialias?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loader?: React.FC;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ antialias, engineOptions, adaptToDeviceRatio, loader, ...rest }) => {
    const [context, setContext] = useState<EngineContextType | null>(null);

    useEffect(() => {
        async function initializeScene() {
            const children = Children.toArray(rest.children) as Array<React.ReactElement>;
            const isMultipleScene = children.length > 1;
            const canvas = isMultipleScene ? document.createElement('canvas') : children[0].props.canvas;

            /* --------------------------------------------------------------------------------------- */
            /* ENGINE
            ------------------------------------------------------------------------------------------ */
            const engine = new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
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

            const onResizeWindow = () => {
                engine!.resize();
            };
            window.addEventListener('resize', onResizeWindow);

            setContext({ engine, isMultipleScene });

            return () => {
                window.removeEventListener('resize', onResizeWindow);
                engine.dispose();
            };
        }
        initializeScene();
    }, []);

    return context ? <EngineContext.Provider value={context}>{rest.children}</EngineContext.Provider> : null;
};
