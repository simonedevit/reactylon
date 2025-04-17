import { useEffect } from 'react';
import { suspend, clear } from 'suspend-react';
import type { ISceneLoaderAsyncResult, ImportMeshOptions } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core/Loading/sceneLoader.js';
import { useScene } from './store';

function dispose(model: ISceneLoaderAsyncResult) {
    Object.values(model).forEach(attribute => {
        if (Array.isArray(attribute)) {
            attribute.forEach(item => item.dispose?.(false, true));
        }
    });
}

/**
 * Custom hook to load a model using Babylon.js's ImportMeshAsync function.
 *
 * @remarks This hook activates suspense.
 *
 * @param url the URL or file or ArrayBufferView of the model to load.
 * @param options optional parameters for importing the model.
 * @param onCreate the callback function to execute when the model is loaded.
 * @returns the result of the model import.
 */
export function useModel(url: string | File | ArrayBufferView, options?: ImportMeshOptions, onCreate?: (model: ISceneLoaderAsyncResult) => void): ISceneLoaderAsyncResult {
    const scene = useScene();

    const model = suspend(
        async () => {
            const result = await ImportMeshAsync(url, scene, options);
            if (onCreate) {
                onCreate(result);
            }
            return result;
        },
        [url, scene, options] /*{ equal: isEqual }*/,
    );

    useEffect(() => {
        return () => {
            dispose(model);
            clear([url, scene, options]);
        };
    }, []);

    return model;
}
