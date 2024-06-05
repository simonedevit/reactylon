import { ComponentInstance, RootContainer, UpdatePayload } from 'src/types/types';
import { Host } from './Host';

export class MaterialHost {
    static createInstance(isBuilder: boolean, Class: any, props: ComponentInstance, rootContainer: RootContainer) {
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

    static addChild(parentInstance: ComponentInstance, child: ComponentInstance): void {
        // handle multimaterial
        parentInstance.material = child;
    }

    static removeChild(parentInstance: ComponentInstance, child: ComponentInstance): void {}

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(): void {}
}
