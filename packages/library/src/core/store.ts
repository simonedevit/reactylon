import { createStore, StoreApi, useStore } from 'zustand';
import { type Nullable, Engine, Scene, WebXRDefaultExperience } from '@babylonjs/core';
import { createContext, useContext } from 'react';

export type EngineStore = {
    engine: Engine;
    isMultipleCanvas: boolean;
    isMultipleScene: boolean;
};

export type Store = EngineStore & {
    scene: Scene;
    canvas: HTMLCanvasElement | WebGLRenderingContext;
    xrExperience: Nullable<WebXRDefaultExperience>;
    //sceneReady: boolean;
};

export const SceneContext = createContext<StoreApi<Store> | null>(null);
SceneContext.displayName = 'SceneContext';

export const createBabylonStore = (initialProps: Store) => {
    return createStore<Store>()(_set => initialProps);
};

/**
 * Get the Babylon context.
 */
const useBabylonContext = <T>(selector: (state: Store) => T): T => {
    const store = useContext(SceneContext);
    if (!store) {
        throw new Error('Missing SceneContext.Provider in the tree');
    }
    return useStore(store, selector);
};

/**
 * Get the engine from the context.
 */
export function useEngine(): Engine;
export function useEngine<T>(selector: (engine: Engine) => T): T;

export function useEngine<T>(selector?: (engine: Engine) => T): T | Engine {
    return useBabylonContext(state => (selector ? selector(state.engine) : state.engine));
}

/**
 * Get the scene from the context.
 */
export function useScene(): Scene;
export function useScene<T>(selector: (scene: Scene) => T): T;

export function useScene<T>(selector?: (scene: Scene) => T): T | Scene {
    return useBabylonContext(state => (selector ? selector(state.scene) : state.scene));
}

/**
 * Get the canvas DOM element from the context.
 */
export const useCanvas = () => useBabylonContext(state => state.canvas);

/**
 * Get the XR experience from the context.
 */
export function useXrExperience(): WebXRDefaultExperience;
export function useXrExperience<T>(selector: (xrExperience: WebXRDefaultExperience) => T): T;

export function useXrExperience<T>(selector?: (xrExperience: WebXRDefaultExperience) => T): T | WebXRDefaultExperience {
    return useBabylonContext(state => (selector ? selector(state.xrExperience!) : state.xrExperience!));
}
