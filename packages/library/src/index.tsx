import { JSXElements as CoreJSXElements } from './_generated/babylon.core.declarations';
import { JSXElements as GuiJSXElements } from './_generated/babylon.gui.declarations';
import { AdvancedDynamicTextureProps } from './types/props';

declare global {
    namespace JSX {
        // CORE
        interface IntrinsicElements extends CoreJSXElements {
            physicsAggregate: Omit<CoreJSXElements['physicsAggregate'], 'transformNode'>; // omit transformNode because it will be automatically injected
            // add here other custom JSX elements
        }
        // GUI
        interface IntrinsicElements extends GuiJSXElements {
            advancedDynamicTexture: Omit<GuiJSXElements['advancedDynamicTexture'], 'name'> & AdvancedDynamicTextureProps;
        }
    }
}

export * from './core';
export { default as Reactylon } from './reconciler';
export { BabylonElements } from './types/props';
