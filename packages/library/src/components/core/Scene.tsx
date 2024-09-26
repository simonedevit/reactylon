import React, { useEffect, useState } from 'react';
import { Scene as BabylonScene, SceneOptions, WebXRDefaultExperienceOptions, HavokPlugin, Vector3, Camera } from '@babylonjs/core';
import { GUI3DManager } from '@babylonjs/gui';
import HavokPhysics from '@babylonjs/havok';
import { SceneContext, SceneContextType, useEngine } from './hooks';

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
    const [context, setContext] = useState<SceneContextType | null>(null);

    useEffect(() => {
        (async () => {
            if (engine) {
                const scene = new BabylonScene(engine, sceneOptions);
                // NON MI CONVINCE
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

                setContext({ scene, xrExperience, canvas });
            }
        })();
    }, []);

    return context ? <SceneContext.Provider value={context}>{children}</SceneContext.Provider> : null;
};
