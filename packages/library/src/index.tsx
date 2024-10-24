import { JSXElements as CoreJSXElements } from './_generated/babylon.core.declarations';
import { JSXElements as GuiJSXElements } from './_generated/babylon.gui.declarations';
import { TextureProps, MaterialProps, AdvancedDynamicTextureProps } from '@props';

declare global {
    namespace JSX {
        // CORE
        interface IntrinsicElements extends CoreJSXElements {
            texture: CoreJSXElements['texture'] & TextureProps;
            dynamicTexture: CoreJSXElements['dynamicTexture'] & TextureProps;
            videoTexture: CoreJSXElements['videoTexture'] & TextureProps;
            cubeTexture: CoreJSXElements['cubeTexture'] & TextureProps;
            equiRectangularCubeTexture: CoreJSXElements['equiRectangularCubeTexture'] & TextureProps;
            hDRCubeTexture: CoreJSXElements['hDRCubeTexture'] & TextureProps;
            mirrorTexture: CoreJSXElements['mirrorTexture'] & TextureProps;
            refractionTexture: CoreJSXElements['refractionTexture'] & TextureProps;
            // add other materials when you study them (e.g. PBRMaterial, etc..)
            standardMaterial: CoreJSXElements['standardMaterial'] & MaterialProps;
            // add here other custom props
        }
        // GUI
        interface IntrinsicElements extends GuiJSXElements {
            advancedDynamicTexture: Omit<GuiJSXElements['advancedDynamicTexture'], 'name'> & AdvancedDynamicTextureProps;
        }
    }
}

export * from './core';
export { default as Reactylon } from './reconciler';
export { BabylonElements } from '@props';
