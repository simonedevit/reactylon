import { ComponentInstance, RootContainer, UpdatePayload } from 'src/types/types';
import { Host } from './Host';

export class TextureHost {
    static createInstance(isBuilder: boolean, Class: any, props: ComponentInstance, rootContainer: RootContainer) {
        const element = Host.createInstance(isBuilder, Class, props, rootContainer);
        element.handlers = {
            addChild: TextureHost.addChild,
        };
        return element;
    }

    static addChild(parentInstance: ComponentInstance, child: ComponentInstance): void {
        parentInstance[child.type as string] = child;
    }

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(): void {}
}
