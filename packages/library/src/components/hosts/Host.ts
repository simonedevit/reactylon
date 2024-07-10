import { ActionManager, ExecuteCodeAction } from '@babylonjs/core';
import { getFunctionParams, getClassConstructorParams } from '@dvmstudios/reactylon-common';
import { ComponentInstance, RootContainer } from '@types';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';

const excludedProps = ['children', 'onCreate', 'assignTo', 'cloneFrom', 'instanceFrom', 'propertiesFrom'];
export class Host {
    static createInstance(isBuilder: boolean, Class: any, props: ComponentInstance, rootContainer: RootContainer, cloneFn?: Function) {
        let element: any;

        const paramNames = isBuilder ? getFunctionParams(Class) : getClassConstructorParams(Class);
        const paramValues = paramNames.map(param => {
            return props[param as keyof ComponentInstance];
        });
        if (cloneFn) {
            element = cloneFn();
        } else {
            element = isBuilder ? Class(...paramValues) : new Class(...paramValues);
        }

        // set non-constructor props
        Object.keys(props)
            .filter(propName => !paramNames.includes(propName) && !excludedProps.includes(propName))
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
            element.metadata = {};
        }

        // TODO: set here other listeners (or in specialized subclasses)
        if (props.onClick) {
            const actionManager = new ActionManager(rootContainer.scene);
            actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, props.onClick));
            element.actionManager = actionManager;
        }

        // execute custom code as soon the object is created
        props.onCreate?.(element);
        return element;
    }
}
