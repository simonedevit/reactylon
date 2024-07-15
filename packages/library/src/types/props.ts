import { ActionEvent, ActionManager, StandardMaterial } from '@babylonjs/core';
import { type Either } from './types';

type TransformType = 'position' | 'rotation' | 'scaling';
type Axis = 'X' | 'Y' | 'Z';
export type TransformKeys = Record<`${TransformType}${Axis}`, `${TransformType}.${Lowercase<Axis>}`>;
export type TransformProps = Record<`${TransformType}${Axis}`, number>;

export enum BabylonElements {
    MESH = 0,
    NODE = 1,
    LIGHT = 2,
    CAMERA = 3,
    TEXTURE = 4,
    MATERIAL = 5,
}

/* Define here the custom props and add them in JSX namespace */

export type CommonProps<T = unknown> = Partial<TransformProps> & {
    onCreate?: (element: T) => void;
    propertiesFrom?: Array<{
        property: string;
        source: string;
        type: BabylonElements;
    }>;
};

export enum Triggers {
    onPick = ActionManager.OnPickTrigger,
    onDoublePick = ActionManager.OnDoublePickTrigger,
    onPickDown = ActionManager.OnPickDownTrigger,
    onPickUp = ActionManager.OnPickUpTrigger,
    onPickOut = ActionManager.OnPickOutTrigger,
    onLeftPick = ActionManager.OnLeftPickTrigger,
    onRightPick = ActionManager.OnRightPickTrigger,
    onCenterPick = ActionManager.OnCenterPickTrigger,
    onLongPress = ActionManager.OnLongPressTrigger,
    onPointerOver = ActionManager.OnPointerOverTrigger,
    onPointerOut = ActionManager.OnPointerOutTrigger,
    onIntersectionEnter = ActionManager.OnIntersectionEnterTrigger,
    onIntersectionExit = ActionManager.OnIntersectionExitTrigger,
}

// only meshes
export type Triggerable = {
    [key in keyof typeof Triggers]?: (evt: ActionEvent) => void;
} & {
    // only with onIntersectionEnter and onIntersectionExit
    intersectionMeshId?: string;
};

export type Clonable = {
    cloneFrom: string;
};

// only meshes
export type Instanceable = {
    instanceFrom: string;
};

export type TextureProps = {
    // add here other texture when you get it, (string & {}) is used to allow also strings without losing typing
    kind:
        | keyof Pick<
              StandardMaterial,
              'diffuseTexture' | 'specularTexture' | 'emissiveTexture' | 'ambientTexture' | 'bumpTexture' | 'opacityTexture' | 'reflectionTexture' | 'refractionTexture'
          >
        | (string & {});
};

export type MaterialProps = {
    assignTo?: Array<string>;
};

// you don't need to add it to JSX namespace because it is dynamically done in generator (due to multitude of mesh components)
export type MeshProps = Either<Clonable, Instanceable> &
    Triggerable & {
        // add here other mesh props (e.g. "onDrag")
    };
