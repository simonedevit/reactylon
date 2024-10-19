import { BabylonPackages } from '@dvmstudios/reactylon-common';
import { ComponentInstance, RootContainer } from '@types';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';
import coreConstructors from '../../_generated/babylon.core.constructors';

const excludedProps = ['children', 'onCreate', 'assignTo', 'cloneFrom', 'instanceFrom', 'propertiesFrom', 'physicsAggregate', 'highlightLayer'];
export class Host {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: ComponentInstance, rootContainer: RootContainer, cloneFn?: Function) {
        let element: any;

        const paramsNames = coreConstructors[type];
        const paramsValues = paramsNames.map(param => {
            return props[param as keyof ComponentInstance];
        });
        if (cloneFn) {
            element = cloneFn();
        } else {
            element = isBuilder ? Class(...paramsValues) : new Class(...paramsValues);
        }

        // set non-constructor props
        Object.keys(props)
            .filter(propName => !paramsNames.includes(propName) && !excludedProps.includes(propName))
            .forEach(_key => {
                const key = _key as keyof ComponentInstance;
                const value = props[key];
                if (key in TransformKeysMap) {
                    ObjectUtils.set(element, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
                } else {
                    element[key] = value;
                }
            });

        // propertiesFrom
        if (props.propertiesFrom) {
            const scene = rootContainer.scene;
            props.propertiesFrom.forEach(({ property, source, type }) => {
                const sourceElement = scene[BabylonElementsRetrievalMap[type]](source);
                element[property] = sourceElement[property];
            });
        }

        // use metadata to store children in reconciler
        if (!element.metadata) {
            element.metadata = {
                babylonPackage: BabylonPackages.CORE,
                props,
            };
        }

        // execute custom code as soon the object is created
        props.onCreate?.(element);
        return element;
    }
}
