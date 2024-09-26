import { createContext, useContext } from 'react';
import { type Nullable, Engine as BabylonEngine, Scene, WebXRDefaultExperience } from '@babylonjs/core';

export type EngineContextType = {
    engine: Nullable<BabylonEngine>;
    isMultipleScene: boolean;
};

export const EngineContext = createContext<EngineContextType>({
    engine: null,
    isMultipleScene: false,
});

/**
 * Get the engine from the context.
 */
export const useEngine = (): EngineContextType => useContext(EngineContext) as EngineContextType;

export type SceneContextType = {
    scene: Nullable<Scene>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    //sceneReady: boolean;
    xrExperience: Nullable<WebXRDefaultExperience>;
};

export const SceneContext = createContext<SceneContextType>({
    scene: null,
    canvas: null,
    //sceneReady: false,
    xrExperience: null,
});

/**
 * Get the canvas DOM element from the context.
 */
export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(SceneContext).canvas;

export const useScene = (): Scene => useContext(SceneContext).scene as Scene;

export const useXrExperience = (): WebXRDefaultExperience => useContext(SceneContext).xrExperience as WebXRDefaultExperience;
