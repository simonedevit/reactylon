import { getFunctionParams, getClassConstructorParams, BabylonPackages, Logger } from '@dvmstudios/reactylon-common';
import { ComponentInstance, RootContainer, UpdatePayload } from '@types';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';
import { Button3D, Container, Container3D, Control, GUI3DManager, HolographicButton, HolographicSlate, Vector2WithInfo } from '@babylonjs/gui';
import { GuiTriggerable, GuiTriggers } from '../../types/props';
import { Observable, DynamicTexture, AbstractMesh } from '@babylonjs/core';

function handleEvents(props: ComponentInstance<GuiComponent>, element: any) {
    Object.entries(GuiTriggers).forEach(([_key, observableName]) => {
        const key = _key as keyof GuiTriggerable;
        //TODO: handle addOnce
        const handlerFn = props[key] as Parameters<Observable<Vector2WithInfo>['add']>[0];
        if (handlerFn) {
            element[observableName].add(handlerFn);
        }
    });
}

export type Params = {
    paramsNames: Array<string>;
    paramsValues: Array<unknown>;
};

type GuiComponent = Pick<Container, 'addControl' | 'removeControl'> & GuiTriggerable;

const excludedProps = ['children', 'onCreate', 'assignTo', 'cloneFrom', 'instanceFrom', 'propertiesFrom', ...Object.keys(GuiTriggers)];

export class GuiHost {
    static createInstance(isBuilder: boolean, Class: any, props: ComponentInstance, rootContainer: RootContainer, cloneFn?: Function, params?: Params) {
        let element: any;
        const scene = rootContainer.scene;

        let paramsNames = [];
        let paramsValues = [];

        if (!params) {
            paramsNames = isBuilder ? getFunctionParams(Class) : getClassConstructorParams(Class);
            paramsValues = paramsNames.map(param => {
                return props[param as keyof ComponentInstance];
            });
            // AdvancedDynamicTexture
        } else {
            paramsNames = params.paramsNames;
            paramsValues = params.paramsValues;
        }
        if (cloneFn) {
            element = cloneFn();
        } else {
            element = isBuilder ? Class(...paramsValues) : new Class(...paramsValues);
        }

        element.uniqueId = scene.getUniqueId();

        let anchor = null;
        // StackPanel3D, volumeBasedPanel, etc...
        if (element instanceof Container3D || element instanceof HolographicSlate || element instanceof Button3D) {
            const gui3DManager = rootContainer.rootInstance.metadata.gui3DManager as GUI3DManager;
            gui3DManager.addControl(element);
            // @ts-ignore
            anchor = new AbstractMesh(`${props.name || element.uniqueId}-anchor`);
            element.linkToTransformNode(anchor);
        }

        // set non-constructor props
        Object.keys(props)
            .filter(propName => !paramsNames.includes(propName) && !excludedProps.includes(propName))
            .forEach(_key => {
                const key = _key as keyof ComponentInstance;
                const value = props[key];
                if (key in TransformKeysMap) {
                    ObjectUtils.set(anchor || element, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
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

        // use metadata to store children in reconciler
        if (!element.metadata) {
            element.metadata = {
                babylonPackage: BabylonPackages.GUI,
            };
        }

        // execute custom code as soon the object is created
        props.onCreate?.(element);

        handleEvents(props as ComponentInstance<GuiComponent>, element);

        element.handlers = {
            addChild: GuiHost.addChild,
            removeChild: GuiHost.removeChild,
            // add here your custom handlers
        };

        return element;
    }

    static addChild(parentInstance: ComponentInstance<GuiComponent>, child: ComponentInstance<Control>): void {
        if (parentInstance instanceof DynamicTexture && child instanceof DynamicTexture) {
            Logger.error(`GUIHost - addChild - You cannot have an AdvancedDynamicTexture (i.e. ${child.name}) in an AdvancedDynamicTexture (i.e. ${parentInstance.name})`);
        }
        if (parentInstance instanceof Button3D && !(parentInstance instanceof HolographicButton)) {
            parentInstance.content = child;
        } else {
            parentInstance.addControl(child);
        }
    }

    static removeChild(parentInstance: ComponentInstance<GuiComponent>, child: ComponentInstance<Control>): void {
        // ensure that removeControl function exists (parentInstance could be root)
        parentInstance.removeControl?.(child);
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: ComponentInstance<Control>, updatePayload: UpdatePayload): void {}
}
