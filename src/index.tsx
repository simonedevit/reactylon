import { JSXElements } from './types/declaration';
export type { JSXElements };
export * from './components/core';
export { default as Reactylon } from './reconciler';

declare global {
    namespace JSX {
        interface IntrinsicElements extends JSXElements {}
    }
}
