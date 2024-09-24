import React, { useEffect, useRef } from 'react';
import {
    type Nullable,
    Engine as BabylonEngine,
    type EngineOptions,
    Scene,
    EventState,
    SceneOptions,
    WebXRDefaultExperienceOptions,
    HavokPlugin,
    Vector3,
    Camera,
} from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { RootContainer } from '@types';
import Reactylon from '../../reconciler';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { EngineContext, SceneContext } from './hooks';

export type EngineProps = React.PropsWithChildren<{
    engine: {
        antialias?: boolean;
        engineOptions?: EngineOptions;
        adaptToDeviceRatio?: boolean;
        loader?: React.FC;
    };
    scenes: Array<{
        canvas: HTMLCanvasElement;
        sceneOptions?: SceneOptions;
        onSceneReady?: (scene: Scene) => void;
        isGui3DManager?: boolean;
        xrDefaultExperienceOptions?: WebXRDefaultExperienceOptions;
        physicsOptions?: {
            gravity?: Parameters<Scene['enablePhysics']>[0];
            plugin?: Parameters<Scene['enablePhysics']>[1];
        };
    }>;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ engine: engineProps, scenes, children }) => {
    const { antialias, engineOptions, adaptToDeviceRatio, loader } = engineProps;

    const engine = useRef<Nullable<BabylonEngine>>(null);

    const scenesList = useRef<Array<Scene>>([]);
    const scenesProviders = useRef<Array<React.ReactElement>>([]);

    const attachedScene = useRef<Nullable<Scene>>(null);

    const rootContainer = useRef<Nullable<RootContainer>>(null);

    useEffect(() => {
        if (React.Children.toArray(children).length !== scenes.length) {
            throw new Error('Children and scene mapping is 1:1');
        }
        async function initializeScene() {
            const isMultipleScene = scenes.length > 1;
            const canvas = isMultipleScene ? document.createElement('canvas') : scenes[0].canvas;

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
                        if (!isMultipleScene || scene.activeCamera === camera) {
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
            /* SCENES
            ------------------------------------------------------------------------------------------ */
            for (const [index, currentChildren] of React.Children.toArray(children).entries()) {
                const { sceneOptions, onSceneReady, isGui3DManager = true, xrDefaultExperienceOptions, physicsOptions, canvas } = scenes[index];
                const scene = new Scene(engine.current, sceneOptions);
                scene.metadata = {
                    ...scene.metadata,
                    gui3DManager: isGui3DManager ? new GUI3DManager(scene) : undefined,
                };
                onSceneReady?.(scene);

                // enable physics
                if (physicsOptions) {
                    scene.enablePhysics(
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
                    xrExperience = await scene.createDefaultXRExperienceAsync(xrDefaultExperienceOptions);
                }
                scenesList.current.push(scene);
                scenesProviders.current.push(
                    <SceneContext.Provider key={index} value={{ scene, xrExperience, canvas }}>
                        {currentChildren}
                    </SceneContext.Provider>,
                );

                if (isMultipleScene) {
                    engine.current.registerView(canvas, scene.activeCamera as Camera);
                    scene.detachControl();

                    // attach first canvas/scene (UX)
                    /*if (index === 0) {
                        scene.attachControl();
                        engine.current.inputElement = canvas;
                        attachedScene.current = scene;
                    }*/
                    canvas.onclick = () => {
                        if (attachedScene.current !== scene) {
                            attachedScene.current?.detachControl();
                            engine.current!.inputElement = canvas;
                            scene.attachControl();
                            attachedScene.current = scene;
                        }
                    };
                }
            }

            /* --------------------------------------------------------------------------------------- */
            /* RECONCILER
            ------------------------------------------------------------------------------------------ */
            rootContainer.current = {
                // always the main (first) scene
                scene: scenesList.current[0],
                rootInstance: {
                    // customProps: {},
                    hostInstance: scenesList.current[0],
                    metadata: {
                        children: [],
                        // className: 'root',
                    },
                    // observers: {},
                    parent: null,
                },
            };

            // you should put Array of canvas and array of Scene
            // children should have each one his proper scene

            Reactylon.render(<EngineContext.Provider value={{ engine: engine.current }}>{scenesProviders.current}</EngineContext.Provider>, rootContainer.current);

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

    return null;
};
