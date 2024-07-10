import { ActionEvent, StandardMaterial } from '@babylonjs/core';
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

export type Clickable = {
    onClick?: (evt: ActionEvent) => void;
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
    Clickable & {
        // add here other mesh props (e.g. "onDrag")
    };
