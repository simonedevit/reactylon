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

export type BabylonProps<Props, ConstructorProps> = {
    // all props of returned instance
    [P in keyof Props]?: Props[P];
    // transform undefined props into optional props (to avoid to explicitely pass prop={undefined})
} & MarkUndefinedAsOptional<ConstructorProps> & {
        children?: React.ReactNode;
    };
