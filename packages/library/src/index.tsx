import type { JSXElements as CoreJSXElements } from './_generated/babylon.core.declarations';
import type { JSXElements as GuiJSXElements } from './_generated/babylon.gui.declarations';
import type { AdvancedDynamicTextureProps } from './types/props';
import type {} from 'react';
import type {} from 'react/jsx-runtime';
import type {} from 'react/jsx-dev-runtime';
export { BabylonPackages, builders, CollidingComponents, ReversedCollidingComponents } from '@dvmstudios/reactylon-common';

interface ReactylonCoreJSXElements extends Omit<CoreJSXElements, 'physicsAggregate'> {
    physicsAggregate: Omit<CoreJSXElements['physicsAggregate'], 'transformNode'>; // omit transformNode because it will be automatically injected
}

interface ReactylonGuiJSXElements extends Omit<GuiJSXElements, 'advancedDynamicTexture'> {
    advancedDynamicTexture: Omit<GuiJSXElements['advancedDynamicTexture'], 'name'> & AdvancedDynamicTextureProps;
}

interface ReactylonElements extends ReactylonCoreJSXElements, ReactylonGuiJSXElements {}

// React 18
declare global {
    namespace JSX {
        interface IntrinsicElements extends ReactylonElements {}
    }
}

// React 19
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements extends ReactylonElements {}
    }
}

declare module 'react/jsx-runtime' {
    namespace JSX {
        interface IntrinsicElements extends ReactylonElements {}
    }
}

declare module 'react/jsx-dev-runtime' {
    namespace JSX {
        interface IntrinsicElements extends ReactylonElements {}
    }
}

export * from './core';
export type { BabylonElements } from './types/props';
