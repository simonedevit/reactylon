import React, { useEffect, useRef } from 'react';
import { Scene as BabylonScene, SceneOptions, WebXRDefaultExperienceOptions, HavokPlugin, Vector3, Nullable, Camera } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { SceneContext, EngineStore, Store, createBabylonStore } from './store';
import { RootContainer } from '@types';
import Reactylon from '../reconciler';
import { type ContextBridge, useContextBridge } from 'its-fine';
import { type CameraProps } from '@props';
import { type StoreApi } from 'zustand';

type SceneProps = React.PropsWithChildren<{
    /**
     * This prop must be set only when you have multiple scenes.
     */
    canvas?: HTMLCanvasElement;
    sceneOptions?: SceneOptions;
    onSceneReady?: (scene: BabylonScene) => void;
    isGui3DManager?: boolean;
    xrDefaultExperienceOptions?: WebXRDefaultExperienceOptions;
    physicsOptions?: {
        gravity?: Parameters<BabylonScene['enablePhysics']>[0];
        plugin?: Parameters<BabylonScene['enablePhysics']>[1];
    };
    /**
     * @internal
     * This prop is only for internal use and should not be passed to this component.
     */
    _context?: EngineStore;
}>;

//FIXME: replace global var with a singleton Manager
export let activeScene: BabylonScene | null = null;

export const Scene: React.FC<SceneProps> = ({ children, sceneOptions, onSceneReady, isGui3DManager, xrDefaultExperienceOptions, physicsOptions, _context, ...rest }) => {
    const { engine, isMultipleCanvas, isMultipleScene } = _context as EngineStore;
    const rootContainer = useRef<Nullable<RootContainer>>(null);
    const isFirstRender = useRef(false);

    const store = useRef<StoreApi<Store>>();

    // Returns a bridged context provider that forwards context
    const Bridge: ContextBridge = useContextBridge();

    useEffect(() => {
        (async () => {
            if (engine) {
                const canvas = rest.canvas as HTMLCanvasElement;

                /* --------------------------------------------------------------------------------------- */
                /* SCENE
                ------------------------------------------------------------------------------------------ */
                const scene = new BabylonScene(engine, sceneOptions);
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
                let xrExperience = null;
                // enable xr experience
                if (xrDefaultExperienceOptions) {
                    xrExperience = await scene.createDefaultXRExperienceAsync(xrDefaultExperienceOptions);
                }

                if (isMultipleCanvas) {
                    if (isMultipleScene) {
                        // consumer is using scene.createDefaultCamera
                        if (scene.activeCamera) {
                            engine.registerView(canvas, scene.activeCamera as Camera);
                        }

                        scene.detachControl();

                        scene.onNewCameraAddedObservable.add(camera => {
                            // HACK: ensure that camera.dispose() is invoked on old camera before to unregister and register new canvas and camera
                            setTimeout(() => {
                                const view = (engine.views || []).find(view => view.target === canvas);
                                if (view) {
                                    engine.unRegisterView(canvas);
                                }
                                engine.registerView(canvas, camera);
                            }, 0);
                        });

                        canvas.onclick = () => {
                            if (activeScene !== scene) {
                                activeScene?.detachControl();
                                engine.inputElement = canvas;
                                scene.attachControl();
                                activeScene = scene;
                            }
                        };
                    } else {
                        scene.onNewCameraAddedObservable.add(camera => {
                            const augmentedCamera = camera as Camera & CameraProps;
                            const canvas = augmentedCamera.canvas!;
                            engine.registerView(canvas, camera);

                            canvas.onclick = () => {
                                if (scene.activeCamera !== camera) {
                                    scene.activeCamera?.detachControl();
                                    engine.inputElement = canvas;
                                    scene.activeCamera = camera;
                                    camera.attachControl();
                                }
                            };
                        });
                    }
                }

                /* --------------------------------------------------------------------------------------- */
                /* RECONCILER
                ------------------------------------------------------------------------------------------ */
                store.current = createBabylonStore({
                    engine,
                    scene,
                    canvas,
                    isMultipleCanvas,
                    isMultipleScene,
                    xrExperience,
                });

                rootContainer.current = {
                    ...store.current.getState(),
                    metadata: {
                        children: [],
                    },
                };

                // Renders children with bridged context into a secondary renderer
                Reactylon.render(
                    <Bridge>
                        <SceneContext.Provider value={store.current}>{children}</SceneContext.Provider>
                    </Bridge>,
                    rootContainer.current!,
                );
                isFirstRender.current = true;
            }
        })();

        return () => {
            Reactylon.unmount(rootContainer.current!);
            rootContainer.current = null;
        };
    }, []);

    useEffect(() => {
        if (!isFirstRender.current) {
            if (store.current) {
                // Renders children with bridged context into a secondary renderer
                Reactylon.render(
                    <Bridge>
                        <SceneContext.Provider value={store.current}>{children}</SceneContext.Provider>
                    </Bridge>,
                    rootContainer.current!,
                );
            } else {
                isFirstRender.current = false;
            }
        }
    });

    return null;
};
