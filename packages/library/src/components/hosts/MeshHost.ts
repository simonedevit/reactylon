import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { Mesh } from '@babylonjs/core';
import { type Instanceable } from '../../types/props';

type AugmentedMesh = ComponentInstance<Mesh & JSX.IntrinsicElements['mesh']> & Partial<Instanceable>;

export class MeshHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedMesh, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const scene = rootContainer.scene;
        const { name, cloneFrom, instanceFrom } = props;
        const meshId = cloneFrom || instanceFrom;
        if (meshId) {
            cloneFn = () => {
                const original = scene.getMeshById(meshId) as Mesh;
                if (!original) {
                    throw new Error(`[Reactylon] - createInstance (clone/instance) - ${meshId} doesn't exist.`);
                }
                if (cloneFrom) {
                    return original.clone(name, null);
                } else {
                    return original.createInstance(name);
                }
            };
        }
        const element = Host.createInstance(isBuilder, Class, props, rootContainer, cloneFn);
        element.handlers = {
            // add here your custom handlers for meshes
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance<Mesh>, child: AugmentedMesh): void {}

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMesh, updatePayload: UpdatePayload): void {}
}
