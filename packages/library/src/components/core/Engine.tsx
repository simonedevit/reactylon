import React, { useEffect, useRef, Children } from 'react';
import { type Nullable, Engine as BabylonEngine, type EngineOptions, Scene, EventState } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { RootContainer } from '@types';
import Reactylon from '../../reconciler';
import { EngineContext } from './hooks';

export type EngineProps = React.PropsWithChildren<{
    antialias?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loader?: React.FC;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ antialias, engineOptions, adaptToDeviceRatio, loader, ...rest }) => {
    const engine = useRef<Nullable<BabylonEngine>>(null);
    const rootContainer = useRef<Nullable<RootContainer>>(null);
    const isMultipleScene = useRef(false);

    useEffect(() => {
        async function initializeScene() {
            const children = Children.toArray(rest.children) as Array<React.ReactElement>;
            isMultipleScene.current = children.length > 1;
            const canvas = isMultipleScene.current ? document.createElement('canvas') : children[0].props.canvas;

            /* --------------------------------------------------------------------------------------- */
            /* ENGINE
            ------------------------------------------------------------------------------------------ */
            engine.current = new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
            if (loader) {
                engine.current.loadingScreen = new CustomLoadingScreen(canvas, loader);
            }
            engine.current.runRenderLoop(() => {
                const camera = engine.current!.activeView?.camera;
                engine.current!.scenes.forEach(scene => {
                    if (!scene.activeCamera) {
                        // meantime you are setting a camera
                        console.warn('no active camera..');
                    }
                    if (scene.cameras?.length > 0) {
                        if (!isMultipleScene.current || scene.activeCamera === camera) {
                            scene.render();
                        }
                    }
                });
            });

            const onResizeWindow = () => {
                engine.current!.resize();
            };
            window.addEventListener('resize', onResizeWindow);

            /* --------------------------------------------------------------------------------------- */
            /* RECONCILER
            ------------------------------------------------------------------------------------------ */
            rootContainer.current = {
                rootInstance: {
                    // customProps: {},
                    metadata: {
                        children: [],
                        // className: 'root',
                    },
                    // observers: {},
                    parent: null,
                },
            };

            Reactylon.render(
                <EngineContext.Provider value={{ engine: engine.current, isMultipleScene: isMultipleScene.current }}>{children}</EngineContext.Provider>,
                rootContainer.current,
            );

            /* --------------------------------------------------------------------------------------- */

            return () => {
                // engine code
                window.removeEventListener('resize', onResizeWindow);
                engine.current!.dispose();
                // scene code
                // cleanup observable
                Reactylon.render(null, rootContainer.current!);
                rootContainer.current = null;
                // scene.current = null;
            };
        }
        initializeScene();
    }, []);

    // USE IT ONLY IF YOU ARE UPDATING Engine COMPONENT (e.g. setting state) AND YOU NEED TO RE-RENDER PROVIDERS
    /*useEffect(() => {
        useEffect(() => {
        Reactylon.render(
            <EngineContext.Provider value={{ engine: engine.current, isMultipleScene: isMultipleScene.current, activeScene, setActiveScene }}>
                {rest.children}
            </EngineContext.Provider>, rootContainer.current as RootContainer
        );
    }, [yourDep]); */

    return null;
};
