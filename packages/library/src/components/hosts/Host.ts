import { invokeClassOrFunction } from '@dvmstudios/reactylon-common';
import type { RootContainer } from '@types';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';
import coreConstructors from '../../_generated/babylon.core.constructors';
import type { CoreHostProps } from '@props';

const excludedProps = ['children', 'onCreate', 'assignTo', 'cloneFrom', 'instanceFrom', 'propertiesFrom', 'binding', 'ref'];

export class Host {
    static createInstance(type: string, Class: any, props: CoreHostProps, rootContainer: RootContainer, cloneFn?: Function) {
        let element = null;
        let isCloned = false;
        let isBinding = false;

        const scene = rootContainer.scene;
        const propsWithScene = { ...props, scene };
        const paramsNames = coreConstructors[type];
        const paramsValues = paramsNames.map(param => {
            return propsWithScene[param as keyof CoreHostProps];
        });
        if (cloneFn) {
            element = cloneFn();
            isCloned = true;
        }
        if (props.binding) {
            element = props.binding;
            isBinding = true;
        }
        if (!cloneFn && !isBinding) {
            element = invokeClassOrFunction(Class, paramsValues);
        }

        // set non-constructor props (set constructor props only if element is cloned or binded)
        Object.keys(props)
            .filter(propName => (isCloned || isBinding ? true : !paramsNames.includes(propName)) && !excludedProps.includes(propName))
            .forEach(_key => {
                const key = _key as keyof CoreHostProps;
                const value = props[key];
                if (key in TransformKeysMap) {
                    ObjectUtils.set(element, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
                } else {
                    element[key] = value;
                }
            });

        // propertiesFrom
        if (props.propertiesFrom) {
            props.propertiesFrom.forEach(({ property, source, type }) => {
                const sourceElement = scene[BabylonElementsRetrievalMap[type]](source);
                element[property] = sourceElement[property];
            });
        }

        // execute custom code as soon the object is created
        props.onCreate?.(element);
        return element;
    }
}
