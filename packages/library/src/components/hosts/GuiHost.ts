import { Logger, invokeClassOrFunction, isInstanceOf } from '@dvmstudios/reactylon-common';
import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import { type GuiHostProps, type GuiTriggerable, GuiTriggers } from '@props';
import { TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
import guiConstructors from '../../_generated/babylon.gui.constructors';
import type { Vector2WithInfo, GUI3DManager, Control, Container, Button3D } from '@babylonjs/gui';
import type { Observable } from '@babylonjs/core';

// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';

function handleEvents(props: GuiHostProps, element: any) {
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
    paramsNames: Array<string | undefined>;
    paramsValues: Array<unknown>;
};

type GuiComponent = Pick<Container, 'addControl' | 'removeControl'> & GuiTriggerable;

const excludedProps = ['children', 'onCreate', 'cloneFrom', 'propertiesFrom', 'ref', ...Object.keys(GuiTriggers)];

export class GuiHost {
    static createInstance(type: string, Class: any, props: GuiHostProps, rootContainer: RootContainer, cloneFn?: Function, params?: Params) {
        let element = null;
        let isCloned = false;
        const scene = rootContainer.scene;
        const propsWithScene = { ...props, scene };

        let paramsNames = [];
        let paramsValues = [];

        if (!params) {
            paramsNames = guiConstructors[type];
            paramsValues = paramsNames.map(param => {
                return propsWithScene[param as keyof GuiHostProps];
            });
            // AdvancedDynamicTexture
        } else {
            paramsNames = params.paramsNames;
            paramsValues = params.paramsValues;
        }
        if (cloneFn) {
            element = cloneFn();
            isCloned = true;
        } else {
            element = invokeClassOrFunction(Class, paramsValues);
        }

        element.uniqueId = scene.getUniqueId();

        let anchor = null;
        // StackPanel3D, volumeBasedPanel, etc...
        if (isInstanceOf(element, 'Container3D') || isInstanceOf(element, 'HolographicSlate') || isInstanceOf(element, 'Button3D')) {
            const gui3DManager = scene.metadata.gui3DManager as GUI3DManager;
            gui3DManager.addControl(element);
            // @ts-ignore
            anchor = new AbstractMesh(`${props.name || element.uniqueId}-anchor`);
            element.linkToTransformNode(anchor);
        }

        // set non-constructor props (set constructor props only if element is cloned)
        Object.keys(props)
            .filter(propName => (isCloned ? true : !paramsNames.includes(propName)) && !excludedProps.includes(propName))
            .forEach(_key => {
                const key = _key as keyof GuiHostProps;
                const value = props[key];
                if (key in TransformKeysMap) {
                    ObjectUtils.set(anchor || element, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
                } else {
                    element[key] = value;
                }
            });

        // execute custom code as soon the object is created
        props.onCreate?.(element);

        handleEvents(props, element);

        element.handlers = {
            addChild: GuiHost.addChild,
            removeChild: GuiHost.removeChild,
            // add here your custom handlers
        };

        return element;
    }

    static addChild(parentInstance: BabylonEntity<GuiComponent>, child: BabylonEntity<Control>): void {
        if (isInstanceOf(parentInstance, 'DynamicTexture') && isInstanceOf(child, 'DynamicTexture')) {
            Logger.error(`GUIHost - addChild - You cannot have an AdvancedDynamicTexture (i.e. ${child.name}) in an AdvancedDynamicTexture (i.e. ${parentInstance.name})`);
        }
        if (isInstanceOf(parentInstance, 'Button3D') && !isInstanceOf(parentInstance, 'HolographicButton')) {
            (parentInstance as unknown as Button3D).content = child;
        } else {
            // ensure that addControl function exists (parentInstance could be transformNode)
            parentInstance.addControl?.(child);
        }
    }

    static removeChild(parentInstance: BabylonEntity<GuiComponent> | undefined, child: BabylonEntity<Control>): void {
        if (parentInstance) {
            parentInstance.removeControl?.(child);
        }
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: BabylonEntity<Control>, updatePayload: UpdatePayload): void {}
}
