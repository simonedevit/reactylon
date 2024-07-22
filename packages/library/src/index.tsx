import { JSXElements as CoreJSXElements } from './types/core.declarations';
import { JSXElements as GuiJSXElements } from './types/gui.declarations';
import { TextureProps, MaterialProps, AdvancedDynamicTextureProps } from './types/props';

declare global {
    namespace JSX {
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
        interface IntrinsicElements extends GuiJSXElements {
            advancedDynamicTexture: Omit<GuiJSXElements['advancedDynamicTexture'], 'name'> & AdvancedDynamicTextureProps;
        }
    }
}

export * from './components/core';
export { default as Reactylon } from './reconciler';
export { BabylonElements } from './types/props';
