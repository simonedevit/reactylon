import React, { useEffect, useRef } from 'react';
import { Scene as BabylonScene, SceneOptions, WebXRDefaultExperienceOptions, HavokPlugin, Vector3, Camera, Nullable } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { SceneContext, useEngine } from './hooks';
import { RootContainer } from '@types';
import Reactylon from '../../reconciler';
import { type ContextBridge, useContextBridge } from 'its-fine';

type SceneProps = React.PropsWithChildren<{
    canvas: HTMLCanvasElement;
    sceneOptions?: SceneOptions;
    onSceneReady?: (scene: BabylonScene) => void;
    isGui3DManager?: boolean;
    xrDefaultExperienceOptions?: WebXRDefaultExperienceOptions;
    physicsOptions?: {
        gravity?: Parameters<BabylonScene['enablePhysics']>[0];
        plugin?: Parameters<BabylonScene['enablePhysics']>[1];
    };
}>;

//FIXME: replace global var with a singleton Manager
export let activeScene: BabylonScene | null = null;

export const Scene: React.FC<SceneProps> = ({ children, sceneOptions, onSceneReady, isGui3DManager = true, xrDefaultExperienceOptions, physicsOptions, canvas }) => {
    const { engine, isMultipleScene } = useEngine();
    const rootContainer = useRef<Nullable<RootContainer>>(null);

    // Returns a bridged context provider that forwards context
    const Bridge: ContextBridge = useContextBridge();

    useEffect(() => {
        (async () => {
            if (engine) {
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

                if (isMultipleScene) {
                    engine.registerView(canvas, scene.activeCamera as Camera);
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

                /* --------------------------------------------------------------------------------------- */
                /* RECONCILER
                ------------------------------------------------------------------------------------------ */
                rootContainer.current = {
                    scene,
                    metadata: {
                        children: [],
                    },
                };

                // Renders children with bridged context into a secondary renderer
                Reactylon.render(
                    <Bridge>
                        <SceneContext.Provider value={{ scene, xrExperience, canvas }}>{children}</SceneContext.Provider>
                    </Bridge>,
                    rootContainer.current,
                );
            }
        })();

        return () => {
            Reactylon.render(null, rootContainer.current!);
            rootContainer.current = null;
        };
    }, []);

    return null;
};

// USE IT ONLY IF YOU ARE UPDATING Engine COMPONENT (e.g. setting state) AND YOU NEED TO RE-RENDER PROVIDERS
/*useEffect(() => {
        useEffect(() => {
        Reactylon.render(
            <EngineContext.Provider value={{ engine: engine.current, isMultipleScene: isMultipleScene.current, activeScene, setActiveScene }}>
                {rest.children}
            </EngineContext.Provider>, rootContainer.current as RootContainer
        );
    }, [yourDep]); */
