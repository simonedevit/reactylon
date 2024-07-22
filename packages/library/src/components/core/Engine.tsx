import React, { useEffect, createContext, useContext, useRef } from 'react';
import { type Nullable, Engine as BabylonEngine, type EngineOptions, Scene, EventState, SceneOptions } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';
import { RootContainer } from '@types';
import { Inspector } from '@babylonjs/inspector';
import Reactylon from '../../reconciler';
import { GUI3DManager } from '@babylonjs/gui';

export type EngineCanvasContextType = {
    engine: Nullable<BabylonEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
};

export const EngineCanvasContext = createContext<EngineCanvasContextType>({
    engine: null,
    canvas: null,
});

/**
 * Get the engine from the context.
 */
export const useEngine = (): BabylonEngine => useContext(EngineCanvasContext).engine as BabylonEngine;

/**
 * Get the canvas DOM element from the context.
 */
export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(EngineCanvasContext).canvas;

export type SceneContextType = {
    scene: Nullable<Scene>;
    sceneReady: boolean;
};

export const SceneContext = createContext<SceneContextType>({
    scene: null,
    sceneReady: false,
});

export const useScene = (): Scene => useContext(SceneContext).scene as Scene;

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
        isInteractiveInspector?: boolean;
        onSceneReady?: (scene: Scene) => void;
        isGui3DManager?: boolean;
    };
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ engine: engineProps, scene: sceneProps, children }) => {
    const { antialias, engineOptions, adaptToDeviceRatio, loader, canvasId } = engineProps;
    const { sceneOptions, onSceneReady, isInteractiveInspector = false, isGui3DManager = true } = sceneProps || {};

    const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null);
    const engine = useRef<Nullable<BabylonEngine>>(null);

    const scene = useRef<Nullable<Scene>>(null);
    const rootContainer = useRef<Nullable<RootContainer>>(null);

    useEffect(() => {
        if (canvasRef.current) {
            // engine code
            engine.current = new BabylonEngine(canvasRef.current, antialias, engineOptions, adaptToDeviceRatio);
            if (loader) {
                engine.current.loadingScreen = new CustomLoadingScreen(canvasRef.current, loader);
            }
            engine.current.runRenderLoop(() => {
                engine.current!.scenes.forEach(scene => {
                    if (!scene.activeCamera) {
                        // @babylonjs/core throws an error if you attempt to render with no active camera.
                        // if we attach as a child React component we have frames with no active camera.
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

            // scene code
            scene.current = new Scene(engine.current, sceneOptions);
            // enable/disable inspector
            if (isInteractiveInspector) {
                document.addEventListener(
                    'keydown',
                    event => {
                        const { ctrlKey, code } = event;
                        if (ctrlKey && code === 'KeyI') {
                            Inspector.IsVisible ? Inspector.Hide() : Inspector.Show(scene.current!, {});
                        }
                    },
                    false,
                );
            }
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

            onSceneReady?.(scene.current);

            Reactylon.render(
                <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
                    <SceneContext.Provider value={{ scene: scene.current, sceneReady: true }}>{children}</SceneContext.Provider>
                </EngineCanvasContext.Provider>,
                rootContainer.current,
            );

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
