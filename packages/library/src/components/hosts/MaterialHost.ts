import { ComponentInstance, RootContainer, UpdatePayload } from '@custom-types';
import { Host } from './Host';
import { Material, Mesh, MultiMaterial } from '@babylonjs/core';
import { type MeshProps, type MaterialProps, CoreHostProps } from '@props';

type AugmentedMaterial = ComponentInstance<MaterialProps & Material>;

export class MaterialHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps<MaterialProps>, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const scene = rootContainer.scene;
        const { cloneFrom, assignTo } = props;
        if (cloneFrom) {
            cloneFn = () => {
                const original = scene.getMaterialById(cloneFrom);
                if (!original) {
                    throw new Error(`[Reactylon] - createInstance (clone) - ${cloneFrom} doesn't exist.`);
                }
                return original.clone(props.name);
            };
        }
        const element = Host.createInstance(type, isBuilder, Class, props, rootContainer, cloneFn);
        if (assignTo) {
            assignTo.forEach(meshId => {
                const mesh = scene.getMeshById(meshId);
                if (!mesh) {
                    throw new Error(`[Reactylon] - createInstance (assignTo) - ${meshId} doesn't exist.`);
                }
                mesh.material = element;
            });
        }
        element.handlers = {
            addChild: MaterialHost.addChild,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance<(Mesh & MeshProps) | MultiMaterial>, child: AugmentedMaterial): void {
        if (parentInstance instanceof MultiMaterial) {
            parentInstance.subMaterials.push(child);
        } else {
            parentInstance.material = child;
        }
    }

    static removeChild(parentInstance: ComponentInstance, child: AugmentedMaterial): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMaterial, updatePayload: UpdatePayload): void {}
}
