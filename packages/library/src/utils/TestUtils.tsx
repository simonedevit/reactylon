import React from 'react';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { Engine } from '../web/Engine';
import { Scene } from '../core/Scene';
import type { Scene as BabylonScene } from '@babylonjs/core';
import { NullEngine } from '@babylonjs/core/Engines/nullEngine.js';

type WrapperProps = React.PropsWithChildren<{
    context: {
        scene: BabylonScene;
    };
}>;

const Wrapper: React.FC<WrapperProps> = ({ children, context }) => {
    return (
        <Engine antialias _nullEngine={new NullEngine()}>
            <Scene
                onSceneReady={scene => {
                    scene.createDefaultCameraOrLight(true, undefined);
                    context.scene = scene;
                }}>
                {children}
            </Scene>
        </Engine>
    );
};

const customRender = (component: React.ReactNode, options?: Omit<RenderOptions, 'wrapper'>): RenderResult & { scene: BabylonScene } => {
    const context: WrapperProps['context'] = { scene: {} as BabylonScene };
    const rendered = render(component, { wrapper: props => <Wrapper context={context}>{props.children}</Wrapper>, ...options });
    return {
        ...rendered,
        scene: context.scene,
    };
};

export * from '@testing-library/react';
export { customRender as render };
