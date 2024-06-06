import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { Material, Mesh, MultiMaterial } from '@babylonjs/core';

type AugmentedMaterial = ComponentInstance<Material & JSX.IntrinsicElements['material']>;

export class MaterialHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedMaterial, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const { cloneBy } = props;
        if (cloneBy) {
            cloneFn = () => {
                const scene = rootContainer.scene;
                const original = scene.getMaterialById(cloneBy);
                if (!original) {
                    throw new Error(`Reactylon: Material - ${cloneBy} doesn't exist.`);
                }
                return original.clone(props.name);
            };
        }
        const element = Host.createInstance(isBuilder, Class, props, rootContainer, cloneFn);
        element.handlers = {
            addChild: MaterialHost.addChild,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance<Mesh | MultiMaterial>, child: AugmentedMaterial): void {
        if (parentInstance instanceof MultiMaterial) {
            parentInstance.subMaterials.push(child);
        } else {
            parentInstance.material = child;
        }
    }

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMaterial, updatePayload: UpdatePayload): void {}
}
