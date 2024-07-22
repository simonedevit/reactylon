import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { Host } from './Host';
import { Node, TransformNode } from '@babylonjs/core';

type AugmentedTransformNode = ComponentInstance<TransformNode & JSX.IntrinsicElements['transformNode']>;

export class TransformNodeHost {
    static createInstance(isBuilder: boolean, Class: any, props: AugmentedTransformNode, rootContainer: RootContainer) {
        const element = Host.createInstance(isBuilder, Class, props, rootContainer);
        element.handlers = {
            addChild: TransformNodeHost.addChild,
            commitUpdate: TransformNodeHost.commitUpdate,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance, child: AugmentedTransformNode): void {
        //child.setParent(parentInstance as unknown as Node);
        child.parent = parentInstance as unknown as Node;
    }

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedTransformNode, updatePayload: UpdatePayload): void {}
}
