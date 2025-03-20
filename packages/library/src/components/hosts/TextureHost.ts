import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { CubeTexture, PBRMaterial, StandardMaterial, Texture } from '@babylonjs/core';
import { CoreHostProps, TextureProps } from '@props';

type AugmentedTexture = ComponentInstance<TextureProps & (Texture | CubeTexture)>;

export class TextureHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps<TextureProps>, rootContainer: RootContainer) {
        const element = Host.createInstance(type, isBuilder, Class, props, rootContainer);
        element.handlers = {
            addChild: TextureHost.addChild,
            commitUpdate: TextureHost.commitUpdate,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance, child: AugmentedTexture): void {
        const textureType = child.kind;
        if (textureType === 'detailMap') {
            (parentInstance as StandardMaterial | PBRMaterial).detailMap.texture = child;
        } else {
            //@ts-ignore - you could deal with a different materials that can (and can't) have this textureType attribute
            parentInstance[textureType] = child;
        }
    }

    static removeChild(parentInstance: ComponentInstance, child: AugmentedTexture): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedTexture, updatePayload: UpdatePayload): void {
        const { url, rootUrl, extensionsOrOptions, src } = updatePayload;
        // TODO: check it, are you using it on consumer? Probably not so you can directly use else condition
        if (instance instanceof CubeTexture) {
            instance.updateURL(rootUrl as string, undefined, undefined, undefined, undefined, extensionsOrOptions as any);
        } else if (instance instanceof Texture) {
            // texture || cubeTexture || videoTexture
            instance.updateURL((url || rootUrl || src) as string);
        }
    }
}
