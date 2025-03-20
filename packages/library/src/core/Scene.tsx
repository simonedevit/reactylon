import React, { useEffect, useRef } from 'react';
import { Scene as BabylonScene, SceneOptions, WebXRDefaultExperienceOptions, Nullable, Camera, Engine, Vector3 } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui';
import { SceneContext, Store, createBabylonStore } from './store';
import { RootContainer, type EngineContext } from '@types';
import Reactylon from '../reconciler';
import { useContextBridge } from 'its-fine';
import { type StoreApi } from 'zustand';

export type SceneProps = React.PropsWithChildren<{
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
        plugin: Parameters<BabylonScene['enablePhysics']>[1];
    };
    /**
     * @internal
     * This prop is only for internal use and should not be passed to this component.
     */
    _context?: EngineContext;
}>;

//FIXME: replace global var with a singleton Manager
export let activeScene: BabylonScene | null = null;

export const Scene = ({ children, sceneOptions, onSceneReady, isGui3DManager, xrDefaultExperienceOptions, physicsOptions, _context, ...rest }: SceneProps) => {
    const { engine, isMultipleCanvas, isMultipleScene, disposeEngine } = _context as EngineContext;
    const rootContainer = useRef<Nullable<RootContainer>>(null);
    const isFirstRender = useRef(false);

    const reconciler = useRef(Reactylon());
    const store = useRef<StoreApi<Store>>(null);

    // Returns a bridged context provider that forwards context
    const Bridge = useContextBridge();

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
                    const { gravity, plugin } = physicsOptions;
                    scene.enablePhysics(gravity || new Vector3(0, -9.8, 0), plugin);
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
                        canvas.onclick = () => {
                            if (!activeScene) {
                                // disable audio on all scenes but no current
                                engine.scenes.forEach(_scene => {
                                    if (_scene !== scene) {
                                        if (_scene.audioEnabled) {
                                            _scene.audioEnabled = false;
                                        }
                                    }
                                });
                            }
                            if (activeScene !== scene) {
                                if (activeScene?.audioEnabled) {
                                    // disabled audio on previous scene
                                    activeScene.audioEnabled = false;
                                }
                                activeScene?.detachControl();
                                engine.inputElement = canvas;
                                scene.attachControl();
                                // set listener to camera position of current scene
                                if (Engine.audioEngine) {
                                    scene.audioEnabled = true;
                                    const listener = Engine.audioEngine.audioContext?.listener;
                                    if (listener) {
                                        const camPos = scene.activeCamera!.position;
                                        listener.setPosition(camPos.x, camPos.y, camPos.z);
                                    }
                                }
                                activeScene = scene;
                            }
                        };
                    }
                }

                /* --------------------------------------------------------------------------------------- */
                /* RENDERER
                ------------------------------------------------------------------------------------------ */
                store.current = createBabylonStore({
                    engine,
                    scene,
                    canvas,
                    isMultipleCanvas,
                    isMultipleScene,
                    xrExperience,
                    physicsEngine: scene.getPhysicsEngine(),
                });

                rootContainer.current = {
                    ...store.current.getState(),
                    metadata: {
                        children: [],
                    },
                };

                // Renders children with bridged context into a secondary renderer
                reconciler.current.render(
                    <Bridge>
                        <SceneContext.Provider value={store.current}>{children}</SceneContext.Provider>
                    </Bridge>,
                    rootContainer.current!,
                );
                isFirstRender.current = true;
            }
        })();

        return () => {
            reconciler.current.unmount(rootContainer.current!, () => {
                activeScene = null;
                disposeEngine();
            });
            rootContainer.current = null;
        };
    }, []);

    useEffect(() => {
        if (!isFirstRender.current) {
            if (store.current) {
                // Renders children with bridged context into a secondary renderer
                reconciler.current.render(
                    <Bridge>
                        <SceneContext.Provider value={store.current}>{children}</SceneContext.Provider>
                    </Bridge>,
                    rootContainer.current!,
                );
            }
        } else {
            isFirstRender.current = false;
        }
    });

    return null;
};
