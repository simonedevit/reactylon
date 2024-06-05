import { ActionManager, ExecuteCodeAction } from '@babylonjs/core';
import { getFunctionParams, getClassConstructorParams } from '@utils';
import { ComponentInstance, RootContainer } from '@types';

const excludedProps = ['children', 'onCreate'];
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
            .forEach(key => {
                element[key] = props[key as keyof ComponentInstance];
            });

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
