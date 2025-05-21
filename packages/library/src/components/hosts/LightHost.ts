import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import type { CoreHostProps, LightProps } from '@props';
import type { Light } from '@babylonjs/core';

type AugmentedLight = BabylonEntity<Light>;

export class LightHost {
    static createInstance(type: string, Class: any, props: CoreHostProps<LightProps>, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const scene = rootContainer.scene;
        const { cloneFrom } = props;
        if (cloneFrom) {
            cloneFn = () => {
                const original = scene.getLightById(cloneFrom);
                if (!original) {
                    throw new Error(`[Reactylon] - createInstance (clone) - ${cloneFrom} doesn't exist.`);
                }
                return original.clone(props.name);
            };
        }
        const element = Host.createInstance(type, Class, props, rootContainer, cloneFn);
        element.handlers = {};
        return element;
    }

    static addChild(parentInstance: BabylonEntity, child: AugmentedLight): void {}

    static removeChild(parentInstance: BabylonEntity, child: AugmentedLight): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedLight, updatePayload: UpdatePayload): void {}
}
