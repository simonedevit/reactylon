import { EngineView, useEngine } from '@babylonjs/react-native';
import React from 'react';
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
                    {React.Children.map<any, any>(children, child => {
                        return React.cloneElement(child, {
                            _context: {
                                engine,
                                isMultipleCanvas: false,
                                isMultipleScene: false,
                            },
                        });
                    })}
                </FiberProvider>
            ) : null}
        </>
    );
};
