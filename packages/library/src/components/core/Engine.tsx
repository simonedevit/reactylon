import React, { useEffect, createContext, useContext, useRef, useState } from 'react';
import { type Nullable, Engine as BabylonEngine, type EngineOptions, Scene, EventState } from '@babylonjs/core';
import CustomLoadingScreen from '../CustomLoadingScreen';

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

export type EngineProps = React.PropsWithChildren<{
    canvasId: string;
    antialias?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loader?: React.FC;
}>;

export type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;

export const Engine: React.FC<EngineProps> = ({ antialias, engineOptions, adaptToDeviceRatio, loader, canvasId, children }) => {
    const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null);
    const engine = useRef<Nullable<BabylonEngine>>(null);
    const [isEngineReady, setIsEngineReady] = useState<boolean>(false);

    useEffect(() => {
        if (canvasRef.current) {
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
            setIsEngineReady(true);

            return () => {
                window.removeEventListener('resize', onResizeWindow);
                engine.current!.dispose();
            };
        }
    }, [canvasRef]);

    return (
        <EngineCanvasContext.Provider value={{ engine: engine.current, canvas: canvasRef.current }}>
            <canvas ref={canvasRef} id={canvasId} />
            {isEngineReady && children}
        </EngineCanvasContext.Provider>
    );
};
