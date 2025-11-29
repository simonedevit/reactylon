import { useEffect, useRef } from 'react';
import { suspend, clear } from 'suspend-react';
import type { ISceneLoaderAsyncResult, ImportMeshOptions } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core/Loading/sceneLoader.js';
import { useScene } from './store';
import { isEqual } from 'lodash-es';

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
 * @remarks This hook activates suspense. The cache is invalidated when the url or key change.
 *
 * @param url the URL or file or ArrayBufferView of the model to load.
 * @param options optional parameters for importing the model.
 * @param onCreate the callback function to execute when the model is loaded.
 * @param key unique identifier to invalidate the cache.
 * @returns the result of the model import.
 */
export function useModel(
    url: string | File | ArrayBufferView,
    options?: ImportMeshOptions,
    onCreate?: (model: ISceneLoaderAsyncResult) => void,
    key?: string,
): ISceneLoaderAsyncResult {
    const scene = useScene();
    const _isInitialized = useRef(false);

    const model = suspend(
        async () => {
            const result = await ImportMeshAsync(url, scene, options);
            result.meshes.forEach(mesh => mesh.setEnabled(false));
            return result;
        },
        [url, scene, key],
        { equal: isEqual },
    );

    if (!_isInitialized.current) {
        model.meshes.forEach(mesh => mesh.setEnabled(true));
        onCreate?.(model);
        _isInitialized.current = true;
    }

    useEffect(() => {
        return () => {
            dispose(model);
            clear([url, scene, options]);
            _isInitialized.current = false;
        };
    }, [url, scene, key]);

    return model;
}
