import React, { useEffect, useRef } from 'react';
import { Scene as BabylonScene, SceneOptions, WebXRDefaultExperienceOptions, HavokPlugin, Vector3, Nullable, Camera } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { SceneContext, Store, createBabylonStore } from './store';
import { RootContainer, type EngineContext } from '@types';
import Reactylon from '../reconciler';
import { type ContextBridge, useContextBridge } from 'its-fine';
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
    _context?: EngineContext;
}>;

//FIXME: replace global var with a singleton Manager
export let activeScene: BabylonScene | null = null;

export const Scene: React.FC<SceneProps> = ({ children, sceneOptions, onSceneReady, isGui3DManager, xrDefaultExperienceOptions, physicsOptions, _context, ...rest }) => {
    const { engine, isMultipleCanvas, isMultipleScene, disposeEngine } = _context as EngineContext;
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

                        canvas.onclick = () => {
                            if (activeScene !== scene) {
                                activeScene?.detachControl();
                                engine.inputElement = canvas;
                                scene.attachControl();
                                activeScene = scene;
                            }
                        };
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
            Reactylon.unmount(rootContainer.current!, disposeEngine);
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
            }
        } else {
            isFirstRender.current = false;
        }
    });

    return null;
};
