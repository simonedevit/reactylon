import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { CubeTexture, Texture } from '@babylonjs/core';

type AugmentedTexture = ComponentInstance<Texture & JSX.IntrinsicElements['texture']>;

export class TextureHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedTexture, rootContainer: RootContainer) {
        const element = Host.createInstance(isBuilder, Class, props, rootContainer);
        element.handlers = {
            addChild: TextureHost.addChild,
            commitUpdate: TextureHost.commitUpdate,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance, child: AugmentedTexture): void {
        const textureType = child.kind as JSX.IntrinsicElements['texture']['kind'];
        //@ts-ignore
        parentInstance[textureType] = child;
    }

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedTexture | CubeTexture, updatePayload: UpdatePayload): void {
        const { url, rootUrl, extensionsOrOptions } = updatePayload;
        // check it, are you using it on consumer?
        if (instance instanceof CubeTexture) {
            instance.updateURL(rootUrl as string, undefined, undefined, undefined, undefined, extensionsOrOptions as any);
        } else {
            instance.updateURL((url || rootUrl) as string);
        }
    }
}
