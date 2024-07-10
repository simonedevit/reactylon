import { JSXElements } from './types/declaration';
import { TextureProps, MaterialProps } from './types/props';
export type { JSXElements };

declare global {
    namespace JSX {
        interface IntrinsicElements extends JSXElements {
            texture: JSXElements['texture'] & TextureProps;
            dynamicTexture: JSXElements['dynamicTexture'] & TextureProps;
            videoTexture: JSXElements['videoTexture'] & TextureProps;
            cubeTexture: JSXElements['cubeTexture'] & TextureProps;
            equiRectangularCubeTexture: JSXElements['equiRectangularCubeTexture'] & TextureProps;
            hDRCubeTexture: JSXElements['hDRCubeTexture'] & TextureProps;
            mirrorTexture: JSXElements['mirrorTexture'] & TextureProps;
            refractionTexture: JSXElements['refractionTexture'] & TextureProps;
            // add other materials when you study them (e.g. PBRMaterial, etc..)
            standardMaterial: JSXElements['standardMaterial'] & MaterialProps;
            // add here other custom props
        }
    }
}

export * from './components/core';
export { default as Reactylon } from './reconciler';
export { BabylonElements } from './types/props';
