import { ActionManager, ExecuteCodeAction } from '@babylonjs/core';
import { getFunctionParams, getClassConstructorParams } from '../../utils';
import { RootContainer } from '../../types/types';

export class Host {
    static createInstance(isBuilder: boolean, Class: any, props: any, rootContainer: RootContainer, cloneFn?: Function) {
        let element: any;

        const paramNames = isBuilder ? getFunctionParams(Class) : getClassConstructorParams(Class);
        const paramValues = paramNames.map(param => {
            return props[param];
        });
        if (cloneFn) {
            element = cloneFn();
        } else {
            element = isBuilder ? Class(...paramValues) : new Class(...paramValues);
        }
        // set non-constructor props
        Object.keys(props)
            .filter(propName => !paramNames.includes(propName) && propName !== 'children')
            .forEach(key => {
                element[key] = props[key];
            });

        // TODO: set here other listeners (or in specialized subclasses)
        if (props.onClick) {
            const actionManager = new ActionManager(rootContainer.scene);
            actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, props.onClick));
            element.actionManager = actionManager;
        }

        return element;
    }
}
