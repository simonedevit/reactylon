import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { Material, Mesh, MultiMaterial } from '@babylonjs/core';

// add other materials when you study them (e.g. PBRMaterial, etc..) - see packages/library/src/index.tsx
type AugmentedMaterial = ComponentInstance<Material & JSX.IntrinsicElements['standardMaterial']>;

export class MaterialHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedMaterial, rootContainer: RootContainer) {
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
        const element = Host.createInstance(isBuilder, Class, props, rootContainer, cloneFn);
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
