import { EngineView, useEngine } from '@babylonjs/react-native';
import React, { Children, cloneElement } from 'react';
import { FiberProvider } from 'its-fine';
import { Camera } from '@babylonjs/core';

type NativeEngineProps = React.PropsWithChildren<{
    camera: Camera;
}>;

export const NativeEngine = ({ children, camera }: NativeEngineProps) => {
    const engine = useEngine();

    return (
        <>
            <EngineView style={{ flex: 1 }} camera={camera} />
            {engine ? (
                <FiberProvider>
                    {Children.map<any, any>(children, child => {
                        return cloneElement(child, {
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
