import { EngineView, useEngine } from '@babylonjs/react-native';
import React from 'react';
import { EngineContext } from '../core/hooks';
import { FiberProvider } from 'its-fine';
import { Camera } from '@babylonjs/core';

type NativeEngineProps = React.PropsWithChildren<{
    camera: Camera;
}>;

export const NativeEngine: React.FC<NativeEngineProps> = ({ children, camera }) => {
    const engine = useEngine();

    return (
        <>
            <EngineView style={{ flex: 1 }} camera={camera} />
            {engine ? (
                <FiberProvider>
                    <EngineContext.Provider value={{ engine, isMultipleScene: false }}>{children}</EngineContext.Provider>
                </FiberProvider>
            ) : null}
        </>
    );
};
