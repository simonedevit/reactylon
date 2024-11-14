import { RootContainer } from '@types';
import { GuiHost, type Params } from './GuiHost';
import { AdvancedDynamicTexture } from '@babylonjs/gui';
import { AdvancedDynamicTextureProps, GuiHostProps } from '@props';

const Builder = {
    createFullscreenUI: AdvancedDynamicTexture.CreateFullscreenUI,
    createForMesh: AdvancedDynamicTexture.CreateForMesh,
};

type BuilderProps = AdvancedDynamicTextureProps['createForMesh'] | AdvancedDynamicTextureProps['createFullscreenUI'];

export class AdvancedDynamicTextureHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: GuiHostProps<AdvancedDynamicTextureProps>, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const { kind } = props;
        const scene = rootContainer.scene;

        const params = Object.entries(props[kind] as keyof BuilderProps).reduce(
            (result, [key, value]) => {
                const newValue = kind === 'createForMesh' && key === 'mesh' ? scene.getMeshById(value as string) : value;
                result.paramsNames.push(key);
                result.paramsValues.push(newValue);
                return result;
            },
            {
                paramsNames: [],
                paramsValues: [],
            } as Params,
        );
        // add scene in third position
        if (kind === 'createFullscreenUI') {
            params.paramsNames.splice(2, 0, 'scene');
            params.paramsValues.splice(2, 0, scene);
        }
        const element = GuiHost.createInstance(type, isBuilder, Builder[kind].bind(Class), props, rootContainer, cloneFn, params);
        return element;
    }
}
