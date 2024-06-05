/* PROPS USED BY JSX ELEMENTS GENERATOR */

import { Scene } from '@babylonjs/core';
import { Clickable, Clonable, CommonProps } from './props';

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
    } & Pick<CommonProps<Element>, 'onCreate'>;

/* PROPS USED BY RECONCILER */

export type ComponentInstance<T = unknown> = T &
    CommonProps &
    Clickable &
    Partial<Clonable> & {
        name: string;
        uniqueId: string;
        dispose?: Function;
        children?: any;
        elements: Array<ComponentInstance<T>>;
        handlers?: Partial<{
            addChild(parentInstance: ComponentInstance<T>, child: ComponentInstance<T>): void;
            removeChild(parentInstance: ComponentInstance<T>, child: ComponentInstance<T>): void;
            prepareUpdate(): UpdatePayload;
            commitUpdate(instance: ComponentInstance<T>, updatePayload: UpdatePayload): void;
        }>;
    };

export type UpdatePayload = {
    [key: string]: unknown;
};

export type RootContainer = {
    scene: Scene;
    rootInstance: {
        elements: Array<ComponentInstance>;
        hostInstance: Scene;
        metadata: {
            [key: string]: string;
        };
        parent: null;
    };
};
