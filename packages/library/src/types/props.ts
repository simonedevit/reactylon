import { ActionEvent, StandardMaterial } from '@babylonjs/core';
import { type Either } from './types';

/* Define here the custom props and add them in JSX namespace */

export type CommonProps<T = unknown> = {
    onCreate?: (element: T) => void;
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
    type: keyof Pick<StandardMaterial, 'diffuseTexture' | 'specularTexture' | 'emissiveTexture' | 'ambientTexture' | 'bumpTexture' | 'opacityTexture'> | (string & {});
};

export type MaterialProps = {
    assignTo?: Array<string>;
};

// you don't need to add it to JSX namespace because it is dynamically done in generator (due to multitude of mesh components)
export type MeshProps = Either<Clonable, Instanceable> &
    Clickable & {
        // add here other mesh props (e.g. "onDrag")
    };
