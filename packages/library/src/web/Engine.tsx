import React, { useEffect, Children, useState, useRef, isValidElement, cloneElement } from 'react';
import type { EngineOptions, NullEngine, ILoadingScreen } from '@babylonjs/core';
import { Engine as BabylonEngine } from '@babylonjs/core/Engines/engine.js';
import CustomLoadingScreen, { type LoadingScreenOptions } from './CustomLoadingScreen';
import { FiberProvider } from 'its-fine';
import { Logger } from '@dvmstudios/reactylon-common';
import type { EngineContext } from '@types';
import type { SceneProps } from '../core/Scene';

export type EngineProps = React.PropsWithChildren<{
    antialias?: boolean;
    isMultipleCanvas?: boolean;
    engineOptions?: EngineOptions;
    adaptToDeviceRatio?: boolean;
    loadingScreenOptions?: LoadingScreenOptions;
    /**
     * This property is typically not required and has no effect when using multiple scenes.
     * @default 'reactylon-canvas'
     */
    canvasId?: string;
    /**
     * @internal
     * This prop is only for testing purpose and should not be passed to this component.
     */
    _nullEngine?: NullEngine;
}>;

export const Engine = ({
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    loadingScreenOptions,
    canvasId = 'reactylon-canvas',
    _nullEngine,
    isMultipleCanvas,
    ...rest
}: EngineProps) => {
    const [context, setContext] = useState<EngineContext | null>(null);
    const engineRef = useRef<{
        engine: BabylonEngine;
        onResizeWindow: () => void;
    }>({ engine: {} as BabylonEngine, onResizeWindow: () => {} });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const children = Children.toArray(rest.children) as Array<React.ReactElement>;
    const isMultipleScene = children.length > 1;

    useEffect(() => {
        let canvas = null;
        if (!isMultipleCanvas) {
            canvas = canvasRef.current;
        } else {
            if (isMultipleScene) {
                Children.forEach(rest.children, child => {
                    if (isValidElement<SceneProps>(child)) {
                        if (!child.props.canvas) {
                            Logger.error(
                                `Engine - initializeEngine - Each Scene component requires a corresponding canvas element. Ensure that you provide one canvas for every Scene you are using.`,
                            );
                        }
                    }
                });
            }
            // fake canvas to work with multiple scenes (Babylon.js constraint)
            canvas = document.createElement('canvas');
        }

        /* --------------------------------------------------------------------------------------- */
        /* ENGINE
        ------------------------------------------------------------------------------------------ */
        const engine = process.env.NODE_ENV === 'test' ? (_nullEngine as NullEngine) : new BabylonEngine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        if (loadingScreenOptions) {
            const { component, animationStyle } = loadingScreenOptions;
            engine.loadingScreen = new CustomLoadingScreen(canvas as HTMLCanvasElement, component, animationStyle) as unknown as ILoadingScreen;
        }
        engine.runRenderLoop(() => {
            const camera = engine!.activeView?.camera;
            engine!.scenes.forEach(scene => {
                if (!scene.activeCamera) {
                    // meantime you are setting a camera
                    Logger.warn('Engine - runRenderLoop - Waiting for active camera...');
                }
                if (scene.cameras?.length > 0) {
                    if (!isMultipleScene || scene.activeCamera === camera) {
                        scene.render();
                    }
                }
            });
        });

        engineRef.current.engine = engine;
        engineRef.current.onResizeWindow = () => engine.resize();
        window.addEventListener('resize', engineRef.current.onResizeWindow);

        setContext({
            engine,
            isMultipleCanvas: !!isMultipleCanvas,
            isMultipleScene,
            disposeEngine: () => {
                window.removeEventListener('resize', engineRef.current.onResizeWindow);
                engineRef.current.engine.dispose();
            },
        });
    }, []);

    return (
        <>
            {!isMultipleCanvas ? <canvas id={canvasId} ref={canvasRef} /> : null}
            {context ? (
                <FiberProvider>
                    {Children.map(rest.children, (child: any) => {
                        return cloneElement(child, { _context: context, canvas: child.props.canvas || canvasRef.current });
                    })}
                </FiberProvider>
            ) : null}
        </>
    );
};
