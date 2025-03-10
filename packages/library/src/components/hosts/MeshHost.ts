import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { ActionEvent, ActionManager, ExecuteCodeAction, HighlightLayer, Mesh, Scene } from '@babylonjs/core';
import { Triggerable, MeshTriggers, MeshProps, CoreHostProps } from '@props';

function handleEvents(props: CoreHostProps<MeshProps>, scene: Scene) {
    const isAtLeastOneTrigger = Object.keys(MeshTriggers).some(trigger => props[trigger as keyof Triggerable]);
    if (isAtLeastOneTrigger) {
        const actionManager = new ActionManager(scene);
        Object.entries(MeshTriggers).forEach(([_key, name]) => {
            const key = _key as keyof Triggerable;
            const handlerFn = props[key] as (evt: ActionEvent) => void;
            if (handlerFn) {
                const { intersectionMeshId } = props;
                actionManager.registerAction(
                    new ExecuteCodeAction(
                        {
                            trigger: name,
                            parameter: intersectionMeshId ? scene.getMeshById(intersectionMeshId) : undefined,
                        },
                        handlerFn,
                    ),
                );
            }
        });
        return actionManager;
    }
    return null;
}

type AugmentedMesh = ComponentInstance<MeshProps & Mesh>;

export class MeshHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps<MeshProps>, rootContainer: RootContainer) {
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
        const element = Host.createInstance(type, isBuilder, Class, props, rootContainer, cloneFn);
        element.actionManager = handleEvents(props, scene);
        element.handlers = {
            addChild: MeshHost.addChild,
            commitUpdate: MeshHost.commitUpdate,
            removeChild: MeshHost.removeChild,
            // add here your custom handlers for meshes
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance<Mesh | HighlightLayer>, child: AugmentedMesh): void {
        if (parentInstance instanceof HighlightLayer) {
            const { highlightLayer } = child;
            if (highlightLayer) {
                const { color, glowEmissiveOnly } = highlightLayer;
                parentInstance.addMesh(child, color, glowEmissiveOnly);
            }
        }
    }

    static removeChild(parentInstance: ComponentInstance, child: AugmentedMesh): void {
        // you don't need, automatically done by Babylon.js when you dispose a mesh
        /*if (parentInstance instanceof HighlightLayer){
            parentInstance.removeMesh(child);
        }*/
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMesh, updatePayload: UpdatePayload): void {
        const parent = instance.metadata.parent;
        if (parent instanceof HighlightLayer) {
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
