import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { Mesh } from '@babylonjs/core';

type AugmentedMesh = ComponentInstance<Mesh & JSX.IntrinsicElements['mesh']>;

export class MeshHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedMesh, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const scene = rootContainer.scene;
        const { cloneBy } = props;
        if (cloneBy) {
            cloneFn = () => {
                const original = scene.getMeshById(cloneBy);
                if (!original) {
                    throw new Error(`[Reactylon] - createInstance (clone) - ${cloneBy} doesn't exist.`);
                }
                return original.clone(props.name, null);
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
