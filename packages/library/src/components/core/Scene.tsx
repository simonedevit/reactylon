import { createContext, useContext, useRef, useEffect, useState } from 'react';
import { Scene as BabylonScene, type Nullable, SceneOptions } from '@babylonjs/core';
import Reactylon from '../../reconciler';
import { RootContainer } from '@types';
import { useEngine } from './Engine';
import { Inspector } from '@babylonjs/inspector';

export type SceneContextType = {
    scene: Nullable<BabylonScene>;
    sceneReady: boolean;
};

export const SceneContext = createContext<SceneContextType>({
    scene: null,
    sceneReady: false,
});

export const useScene = (): BabylonScene => useContext(SceneContext).scene as BabylonScene;

export type SceneProps = React.PropsWithChildren<{
    sceneOptions?: SceneOptions;
    isInteractiveInspector?: boolean;
    onSceneReady?: (scene: BabylonScene) => void;
    isReactylonRender?: boolean;
}>;

export const Scene: React.FC<SceneProps> = ({ sceneOptions, onSceneReady, isReactylonRender, isInteractiveInspector = false, children }) => {
    const engine = useEngine();
    const rootContainer = useRef<Nullable<RootContainer>>(null);
    const scene = useRef<Nullable<BabylonScene>>(null);
    const [isSceneReady, setIsSceneReady] = useState<boolean>(false);

    useEffect(() => {
        scene.current = new BabylonScene(engine, sceneOptions);
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
                elements: [],
                // customProps: {},
                hostInstance: scene.current,
                metadata: {
                    className: 'root',
                },
                // observers: {},
                parent: null,
            },
        };
        // updateScene()

        setIsSceneReady(true);
        onSceneReady?.(scene.current);

        // some observable, check https://github.com/brianzinn/react-babylonjs/blob/master/packages/react-babylonjs/src/Scene.tsx#L123

        if (isReactylonRender) {
            Reactylon.render(<SceneContext.Provider value={{ scene: scene.current, sceneReady: isSceneReady }}>{children}</SceneContext.Provider>, rootContainer.current);

            return () => {
                // cleanup observable
                Reactylon.render(null, rootContainer.current!);
                rootContainer.current = null;
                // scene.current = null;
            };
        }
    }, []);

    useEffect(() => {
        if (scene.current === null || rootContainer.current === null) {
            return;
        }

        // updateScene()
        if (isReactylonRender) {
            Reactylon.render(<SceneContext.Provider value={{ scene: scene.current, sceneReady: isSceneReady }}>{children}</SceneContext.Provider>, rootContainer.current);
        }
    });

    return isReactylonRender ? null : <SceneContext.Provider value={{ scene: scene.current, sceneReady: isSceneReady }}>{isSceneReady && children}</SceneContext.Provider>;
};
