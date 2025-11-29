/* PROPS USED BY JSX ELEMENTS GENERATOR */

import type { Engine as WebGLEngine, WebGPUEngine, Node, Nullable, Scene, WebXRDefaultExperience } from '@babylonjs/core';
import { BabylonPackages } from '@dvmstudios/reactylon-common';
import type { CommonProps } from './props';
import type { EngineStore } from '../core/store';

type Only<T, U> = {
    [P in keyof T]: T[P];
} & {
    [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

// no readonly props
type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>;
}[keyof T];

export type ReadonlyKeys<T> = {
    [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>;
}[keyof T];

// no _private props (i.e. _someProp)
type WithoutPrivateAttributes<T> = {
    [P in keyof T as P extends `_${infer K}` ? never : P]: T[P];
};

// all props except readonly and _private props
export type ExcludeReadonlyAndPrivate<Props> = WithoutPrivateAttributes<Pick<Props, WritableKeys<Props>>>;

type UndefinedProps<T> = {
    [P in keyof T]: undefined extends T[P] ? P : never;
}[keyof T];

type RemoveUndefined<T> = {
    [P in keyof T]: undefined extends T[P] ? NonNullable<T[P]> : never;
};

type MarkUndefinedAsOptional<T> = Omit<T, UndefinedProps<T>> & Partial<RemoveUndefined<Pick<T, UndefinedProps<T>>>>;

export type BabylonProps<Props, ConstructorProps, Element> = {
    // all props of returned instance
    [P in keyof Props]?: Props[P];
    // transform undefined constructor props into optional props (to avoid to explicitely pass prop={undefined})
} & MarkUndefinedAsOptional<ConstructorProps> & {
        children?: React.ReactNode;
    } & CommonProps<Element>;

/* PROPS USED BY RENDERER */

export type BabylonEntity<T = unknown> = Pick<Node, 'name' | 'uniqueId' | 'dispose'> & {
    parent?: unknown;
    handlers?: Partial<{
        addChild(parentInstance: BabylonEntity<T> | RootContainer, child: BabylonEntity<T>, context?: any): void;
        removeChild(parentInstance: BabylonEntity<T> | undefined, child: BabylonEntity<T>, context?: any): void;
        prepareUpdate(): UpdatePayload;
        commitUpdate(instance: BabylonEntity<T>, updatePayload: UpdatePayload): void;
    }>;
} & T;

export type Instance = {
    type: string;
    props: any;
    rootContainer: RootContainer;
    babylonPackage: BabylonPackages | null;
    entity: BabylonEntity | null;
    parent: Instance | null;
    children: Array<Instance>;
    //handlers: any;
    name: string;
};

export type UpdatePayload = {
    [key: string]: unknown;
};

export type RootContainer = {
    engine: WebGLEngine | WebGPUEngine;
    scene: Scene;
    canvas: HTMLCanvasElement | WebGLRenderingContext;
    isMultipleCanvas: boolean;
    isMultipleScene: boolean;
    xrExperience: Nullable<WebXRDefaultExperience>;
    name: Symbol;
    children: Array<Instance>;
};

export type EngineContext = EngineStore & {
    disposeEngine: () => void;
};
