import { JSXElements } from './types/declaration';
import { TextureProps } from './types/props';
export type { JSXElements };

declare global {
    namespace JSX {
        interface IntrinsicElements extends JSXElements {
            texture: JSXElements['texture'] & TextureProps;
            // add here other custom props
        }
    }
}

export * from './components/core';
export { default as Reactylon } from './reconciler';
