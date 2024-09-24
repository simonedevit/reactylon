import { createContext, useContext } from 'react';
import { type Nullable, Engine as BabylonEngine, Scene, WebXRDefaultExperience } from '@babylonjs/core';

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
    xrExperience: Nullable<WebXRDefaultExperience>;
};

export const SceneContext = createContext<SceneContextType>({
    scene: null,
    sceneReady: false,
    xrExperience: null,
});

export const useScene = (): Scene => useContext(SceneContext).scene as Scene;

export const useXrExperience = (): WebXRDefaultExperience => useContext(SceneContext).xrExperience as WebXRDefaultExperience;
