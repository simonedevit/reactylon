import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import type { ActionEvent, Mesh, Scene, HighlightLayer } from '@babylonjs/core';
import { ActionManager } from '@babylonjs/core/Actions/actionManager.js';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions.js';
import { MeshTriggers, type MeshProps, type CoreHostProps } from '@props';
import { isInstanceOf } from '@dvmstudios/reactylon-common';

type AugmentedMesh = BabylonEntity<MeshProps & Mesh> & {
    _triggerCallbacks: Partial<Record<keyof typeof MeshTriggers, (evt: ActionEvent) => void>>;
};

function handleEvents(scene: Scene, instance: AugmentedMesh) {
    const isAtLeastOneTrigger = Object.keys(MeshTriggers).some(trigger => instance._triggerCallbacks[trigger as keyof typeof MeshTriggers]);
    if (isAtLeastOneTrigger) {
        const actionManager = new ActionManager(scene);
        Object.entries(MeshTriggers).forEach(([_key, name]) => {
            const key = _key as keyof typeof MeshTriggers;
            if (instance._triggerCallbacks[key]) {
                actionManager.registerAction(
                    new ExecuteCodeAction(
                        {
                            trigger: name,
                            parameter: instance.intersectionMeshId ? scene.getMeshById(instance.intersectionMeshId) : undefined,
                        },
                        evt => instance._triggerCallbacks[key]?.(evt),
                    ),
                );
            }
        });
        return actionManager;
    }
    return null;
}

export class MeshHost {
    static createInstance(type: string, Class: any, props: CoreHostProps<MeshProps>, rootContainer: RootContainer) {
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
        const element = Host.createInstance(type, Class, props, rootContainer, cloneFn);
        // FIXME: Babylon.js clones the physics only for clones and not from instances so replicate logic also for instances
        if (instanceFrom && scene.getPhysicsEngine?.()) {
            const original = scene.getMeshById(instanceFrom) as Mesh;
            original.physicsBody?.clone(element);
        }

        element._triggerCallbacks = Object.keys(MeshTriggers).reduce(
            (acc, trigger) => {
                const key = trigger as keyof typeof MeshTriggers;
                if (element[key]) acc[key] = element[key];
                return acc;
            },
            {} as Partial<Record<keyof typeof MeshTriggers, (evt: ActionEvent) => void>>,
        );

        element.actionManager = handleEvents(scene, element);
        element.handlers = {
            addChild: MeshHost.addChild,
            commitUpdate: MeshHost.commitUpdate,
            removeChild: MeshHost.removeChild,
        };
        return element;
    }

    static addChild(parentInstance: BabylonEntity<Mesh | HighlightLayer>, child: AugmentedMesh): void {
        if (isInstanceOf(parentInstance, 'HighlightLayer')) {
            const { highlightLayer } = child;
            if (highlightLayer) {
                child.highlightLayerParent = parentInstance as BabylonEntity<HighlightLayer>;
                const { color, glowEmissiveOnly } = highlightLayer;
                (parentInstance as HighlightLayer).addMesh(child, color, glowEmissiveOnly);
            }
        }
    }

    static removeChild(parentInstance: BabylonEntity, child: AugmentedMesh): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMesh, updatePayload: UpdatePayload): void {
        // update trigger callbacks
        Object.keys(MeshTriggers).forEach(trigger => {
            const key = trigger as keyof typeof MeshTriggers;
            if (key in updatePayload) {
                instance._triggerCallbacks[key] = updatePayload[key] as (evt: ActionEvent) => void;
            }
        });

        const structuralChange = updatePayload.intersectionMeshId !== instance.intersectionMeshId;
        if (structuralChange) {
            instance.intersectionMeshId = updatePayload.intersectionMeshId as string;
            instance.actionManager?.dispose();
            instance.actionManager = handleEvents(instance.getScene(), instance);
        }

        // highlight layer
        const parent = instance.highlightLayerParent as BabylonEntity<HighlightLayer>;
        if (parent && isInstanceOf(parent, 'HighlightLayer')) {
            const highlightLayer = updatePayload.highlightLayer as MeshProps['highlightLayer'];
            if (highlightLayer) {
                const { color, glowEmissiveOnly } = highlightLayer;
                parent.addMesh(instance, color, glowEmissiveOnly);
            } else {
                parent.removeMesh(instance);
            }
        }
    }
}
