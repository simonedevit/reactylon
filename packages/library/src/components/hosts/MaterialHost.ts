import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import type { Material, Mesh, MultiMaterial } from '@babylonjs/core';
import type { MeshProps, MaterialProps, CoreHostProps } from '@props';
import { isInstanceOf } from '@dvmstudios/reactylon-common';

type AugmentedMaterial = BabylonEntity<MaterialProps & Material>;

export class MaterialHost {
    static createInstance(type: string, Class: any, props: CoreHostProps<MaterialProps>, rootContainer: RootContainer) {
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
        const element = Host.createInstance(type, Class, props, rootContainer, cloneFn);
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

    static addChild(parentInstance: BabylonEntity<(Mesh & MeshProps) | MultiMaterial>, child: AugmentedMaterial): void {
        if (isInstanceOf(parentInstance, 'MultiMaterial')) {
            (parentInstance as MultiMaterial).subMaterials.push(child);
        } else {
            (parentInstance as Mesh).material = child;
        }
    }

    static removeChild(parentInstance: BabylonEntity, child: AugmentedMaterial): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMaterial, updatePayload: UpdatePayload): void {}
}
