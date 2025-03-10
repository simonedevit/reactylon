import { BabylonPackages } from '@dvmstudios/reactylon-common';
import { ComponentInstance, RootContainer } from '@types';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import ObjectUtils from '@utils/ObjectUtils';
// required for git hook (otherwise it can't resolve the augmented JSXElements)
import '../../index';
import coreConstructors from '../../_generated/babylon.core.constructors';
import { CoreHostProps } from '@props';

const excludedProps = ['children', 'onCreate', 'assignTo', 'cloneFrom', 'instanceFrom', 'propertiesFrom'];

export class Host {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps, rootContainer: RootContainer, cloneFn?: Function) {
        let element: ComponentInstance<any>;
        let isCloned = false;

        const scene = rootContainer.scene;
        const propsWithScene = { ...props, scene };
        const paramsNames = coreConstructors[type];
        const paramsValues = paramsNames.map(param => {
            return propsWithScene[param as keyof CoreHostProps];
        });
        if (cloneFn) {
            element = cloneFn();
            isCloned = true;
        } else {
            element = isBuilder ? Class(...paramsValues) : new Class(...paramsValues);
        }

        // set non-constructor props (set constructor props only if element is cloned)
        Object.keys(props)
            .filter(propName => (isCloned ? true : !paramsNames.includes(propName)) && !excludedProps.includes(propName))
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
                element[property as keyof ComponentInstance] = sourceElement[property];
            });
        }

        // use metadata to store children in renderer
        if (!element.metadata) {
            element.metadata = {
                babylonPackage: BabylonPackages.CORE,
                /* it would be very useful setting all props into metadata attribute but it can throw an error in Inspector ("RangeError: Maximum call stack size exceeded") if metadata create a loop
                https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/inspector/src/components/actionTabs/tabs/propertyGrids/metadata/metadataPropertyGridComponent.tsx#L197 - objectCanSafelyStringify */
            };
        }

        // execute custom code as soon the object is created
        props.onCreate?.(element);
        return element;
    }
}
