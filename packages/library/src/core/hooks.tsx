import { createContext, useContext } from 'react';
import { type Nullable, Engine, Scene, WebXRDefaultExperience } from '@babylonjs/core';

export type EngineContextType = {
    engine: Nullable<Engine>;
    isMultipleScene: boolean;
};

export type SceneContextType = EngineContextType & {
    scene: Nullable<Scene>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    xrExperience: Nullable<WebXRDefaultExperience>;
    //sceneReady: boolean;
};

export const SceneContext = createContext<SceneContextType>({
    engine: null,
    isMultipleScene: false,
    scene: null,
    canvas: null,
    xrExperience: null,
    //sceneReady: false,
});
SceneContext.displayName = 'SceneContext';

/**
 * Get the engine from the context.
 */
export const useEngine = (): Engine => useContext(SceneContext).engine as Engine;

/**
 * Get the scene from the context.
 */
export const useScene = (): Scene => useContext(SceneContext).scene as Scene;

/**
 * Get the canvas DOM element from the context.
 */
export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(SceneContext).canvas;

/**
 * Get the XR experience from the context.
 */
export const useXrExperience = (): WebXRDefaultExperience => useContext(SceneContext).xrExperience as WebXRDefaultExperience;
