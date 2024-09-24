/* PROPS USED BY JSX ELEMENTS GENERATOR */

import { Node, Scene } from '@babylonjs/core';
import { Clonable, CommonProps } from './props';
import { BabylonPackages } from '@dvmstudios/reactylon-common';

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

/* PROPS USED BY RECONCILER */

export type ComponentInstance<T = unknown> = CommonProps &
    Partial<Clonable> &
    Pick<Node, 'name' | 'uniqueId' | 'dispose'> & {
        children?: any;
        // use this field to skip cloning
        metadata: {
            children: Array<ComponentInstance<T>>;
            babylonPackage: BabylonPackages;
            // [key: string]: string;
        };
        handlers?: Partial<{
            addChild(parentInstance: ComponentInstance<T> | RootContainer, child: ComponentInstance<T>): void;
            removeChild(parentInstance: ComponentInstance<T> | RootContainer, child: ComponentInstance<T>): void;
            prepareUpdate(): UpdatePayload;
            commitUpdate(instance: ComponentInstance<T>, updatePayload: UpdatePayload): void;
        }>;
    } & T;

export type UpdatePayload = {
    [key: string]: unknown;
};

export type RootContainer = {
    // always the main (first) scene
    scene: Scene;
    rootInstance: {
        hostInstance: Scene;
        metadata: {
            children: Array<ComponentInstance>;
            // [key: string]: string;
        };
        parent: null;
    };
};
