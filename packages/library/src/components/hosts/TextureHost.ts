import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import type { PBRMaterial, StandardMaterial, CubeTexture, Texture } from '@babylonjs/core';
import type { CoreHostProps, TextureProps } from '@props';
import { isInstanceOf } from '@dvmstudios/reactylon-common';

type AugmentedTexture = BabylonEntity<TextureProps & (Texture | CubeTexture)>;

export class TextureHost {
    static createInstance(type: string, Class: any, props: CoreHostProps<TextureProps>, rootContainer: RootContainer) {
        const element = Host.createInstance(type, Class, props, rootContainer);
        element.handlers = {
            addChild: TextureHost.addChild,
            commitUpdate: TextureHost.commitUpdate,
            removeChild: TextureHost.removeChild,
        };
        return element;
    }

    static addChild(parentInstance: BabylonEntity, child: AugmentedTexture): void {
        const textureType = child.kind;
        if (textureType === 'detailMap') {
            (parentInstance as StandardMaterial | PBRMaterial).detailMap.texture = child;
        } else {
            //@ts-ignore - you could deal with a different materials that can (and can't) have this textureType attribute
            parentInstance[textureType] = child;
        }
    }

    static removeChild(parentInstance: BabylonEntity, child: AugmentedTexture): void {
        const textureType = child.kind;
        if (textureType in parentInstance) {
            //@ts-ignore
            parentInstance[textureType] = null;
        }
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedTexture, updatePayload: UpdatePayload): void {
        const { url, rootUrl, extensionsOrOptions, src } = updatePayload;
        // TODO: check it, are you using it on consumer? Probably not so you can directly use else condition
        if (isInstanceOf(instance, 'CubeTexture')) {
            instance.updateURL(rootUrl as string, undefined, undefined, undefined, undefined, extensionsOrOptions as any);
        } else if (isInstanceOf(instance, 'Texture')) {
            // texture || cubeTexture || videoTexture
            instance.updateURL((url || rootUrl || src) as string);
        }
    }
}
