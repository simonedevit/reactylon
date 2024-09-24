import React, { useEffect, useRef } from 'react';
import { type Nullable, Engine as BabylonEngine, type EngineOptions, Scene, EventState, SceneOptions, WebXRDefaultExperienceOptions, HavokPlugin, Vector3 } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { RootContainer } from '@types';
import Reactylon from '../../reconciler';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { EngineCanvasContext, SceneContext } from './hooks';

export type EngineProps = React.PropsWithChildren<{
    engine: {
        canvasId: string;
        antialias?: boolean;
        engineOptions?: EngineOptions;
        adaptToDeviceRatio?: boolean;
        loader?: React.FC;
    };
    scene?: {
        sceneOptions?: SceneOptions;
        onSceneReady?: (scene: Scene) => void;
        isGui3DManager?: boolean;
        xrDefaultExperienceOptions?: WebXRDefaultExperienceOptions;
        physicsOptions?: {
            gravity?: Parameters<Scene['enablePhysics']>[0];
            plugin?: Parameters<Scene['enablePhysics']>[1];
        };
    };
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ engine: engineProps, scene: sceneProps, children }) => {
    const { antialias, engineOptions, adaptToDeviceRatio, loader, canvasId } = engineProps;
    const { sceneOptions, onSceneReady, isGui3DManager = true, xrDefaultExperienceOptions, physicsOptions } = sceneProps || {};

    const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null);
    const engine = useRef<Nullable<BabylonEngine>>(null);

    const scene = useRef<Nullable<Scene>>(null);
    const rootContainer = useRef<Nullable<RootContainer>>(null);

    useEffect(() => {
        async function initializeScene() {
            // canvasId should be an Array of canvas
            // useScene will have an optional parameter to get the scene by Id (default will return the first one)

            if (canvasRef.current) {
                /* --------------------------------------------------------------------------------------- */
                /* ENGINE
                ------------------------------------------------------------------------------------------ */
                engine.current = new BabylonEngine(canvasRef.current, antialias, engineOptions, adaptToDeviceRatio);
                if (loader) {
                    engine.current.loadingScreen = new CustomLoadingScreen(canvasRef.current, loader);
                }
                engine.current.runRenderLoop(() => {
                    engine.current!.scenes.forEach(scene => {
                        if (!scene.activeCamera) {
                            // meantime you are setting a camera
                            console.warn('no active camera..');
                        }
                        if (scene.cameras?.length > 0) {
                            scene.render();
                        }
                    });
                });

                const onResizeWindow = () => {
                    engine.current!.resize();
                };
                window.addEventListener('resize', onResizeWindow);

                /* --------------------------------------------------------------------------------------- */
                /* SCENE
                ------------------------------------------------------------------------------------------ */
                scene.current = new Scene(engine.current, sceneOptions);
                onSceneReady?.(scene.current);

                // enable physics
                if (physicsOptions) {
                    scene.current.enablePhysics(
                        physicsOptions?.gravity || new Vector3(0, -9.8, 0),
                        physicsOptions?.plugin ||
                            new HavokPlugin(
                                true,
                                await HavokPhysics({
                                    // TODO: serve .wasm file from your own server
                                    locateFile: file => {
                                        return `https://preview.babylonjs.com/havok/${file}`;
                                    },
                                }),
                            ),
                    );
                }
                // enable xr experience
                let xrExperience = null;
                if (xrDefaultExperienceOptions) {
                    xrExperience = await scene.current.createDefaultXRExperienceAsync(xrDefaultExperienceOptions);
                }

                /* --------------------------------------------------------------------------------------- */
                /* RECONCILER
                ------------------------------------------------------------------------------------------ */
                rootContainer.current = {
                    scene: scene.current,
                    rootInstance: {
                        // customProps: {},
                        hostInstance: scene.current,
                        metadata: {
                            children: [],
                            gui3DManager: isGui3DManager ? new GUI3DManager(scene.current) : undefined,
                            // className: 'root',
                        },
                        // observers: {},
                        parent: null,
                    },
                };

                // you should put Array of canvas and array of Scene
                // children should have each one his proper scene

                Reactylon.render(
                    <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
                        <SceneContext.Provider value={{ scene: scene.current, sceneReady: true, xrExperience: xrExperience }}>{children}</SceneContext.Provider>
                    </EngineCanvasContext.Provider>,
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
        }
        initializeScene();
    }, [canvasRef]);

    // USE IT ONLY IF YOU ARE UPDATING Engine COMPONENT (e.g. setting state) AND YOU NEED TO RE-RENDER PROVIDERS
    /*useEffect(() => {
        if (scene.current === null || rootContainer.current === null) {
            return;
        }
        Reactylon.render(
            <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
                <SceneContext.Provider value={{ scene: scene.current, sceneReady: true }}>{children}</SceneContext.Provider>
            </EngineCanvasContext.Provider>
            , rootContainer.current
        );
    });*/

    return <canvas ref={canvasRef} id={canvasId} />;
};
