import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { ActionEvent, ActionManager, ExecuteCodeAction, Mesh, PhysicsAggregate, Scene } from '@babylonjs/core';
import { Triggerable, MeshTriggers, MeshProps } from '../../types/props';

function handleEvents(props: AugmentedMesh, scene: Scene) {
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

type AugmentedMesh = ComponentInstance<Mesh & JSX.IntrinsicElements['mesh'] & MeshProps>;

export class MeshHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedMesh, rootContainer: RootContainer) {
        let cloneFn = undefined;
        const scene = props.scene as any; // || rootContainer.scene;
        const { name, cloneFrom, instanceFrom, physicsAggregate } = props;
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
        if (physicsAggregate) {
            element.physicsAggregate = new PhysicsAggregate(element, physicsAggregate.type, physicsAggregate._options);
        }
        element.actionManager = handleEvents(props, scene);
        element.handlers = {
            // add here your custom handlers for meshes
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance<Mesh>, child: AugmentedMesh): void {}

    static removeChild(parentInstance: ComponentInstance, child: AugmentedMesh): void {
        if (child.physicsAggregate) {
            // @ts-ignore
            child.physicsAggregate.dispose();
        }
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedMesh, updatePayload: UpdatePayload): void {}
}
