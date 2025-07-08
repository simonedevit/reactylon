import { parse } from 'acorn';
import { Material } from '@babylonjs/core/Materials/material.js';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture.js';
import { Camera } from '@babylonjs/core/Cameras/camera.js';

//TODO: move Logger in a separate file (pay attention to module resolution)
export class Logger {
    static prefix: string = '[Reactylon]';

    private static isEnabled() {
        return process.env.IS_LOGGING_ENABLED;
    }

    static log(...args: Array<any>) {
        if (Logger.isEnabled()) {
            const [first, ...rest] = args;
            console.log(`${this.prefix} - ${first}`, ...rest);
        }
    }

    static warn(...args: Array<any>) {
        const [first, ...rest] = args;
        console.warn(`${this.prefix} - ${first}`, ...rest);
    }

    static error(...args: Array<any>) {
        const [first, ...rest] = args;
        console.error(`${this.prefix} - ${first}`, ...rest);
    }

    static group(title: string, labels: Array<Array<any>>) {
        if (Logger.isEnabled()) {
            console.group(`${this.prefix} - ${title}`);
            labels.forEach(label => {
                console.log(...label);
            });
            console.groupEnd();
        }
    }
}

export const getClassConstructorParams = <T>(cls: { new (...args: any[]): T }): Array<string> => {
    const ast = parse(cls.toString(), {
        ecmaVersion: 2021,
    });
    //@ts-ignore
    const parameters = traverse(ast.body[0].body.body.find(x => x.type === 'MethodDefinition' && x.kind === 'constructor')?.value);
    return (parameters || []).filter((param: any) => param !== null); // Remove null values
};

function traverse(node: any) {
    if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
        return node.params.map((param: any) => {
            // Handle primitive types (string, number, etc.)
            if (typeof param.name === 'string') {
                return param.name;
            }

            // Handle object destructuring (pattern)
            if (param.type === 'AssignmentPattern') {
                return getDestructuredParameterName(param.left);
            }

            // Handle rest parameters (...rest)
            if (param.type === 'RestElement') {
                return getRestParameterName(param.argument);
            }

            // Handle default parameter values (optional)
            if (param.type === 'Identifier') {
                return param.name; // Might need further logic for default values
            }

            // Unknown parameter type (log or throw error)
            console.warn(`Unknown parameter type: ${param.type}`);
            return null;
        });
    }
    return null; // Not a function node
}

//FIXME: add strong typing
export const getFunctionParams = (fn: (...args: any[]) => void): Array<string> => {
    //@ts-ignore
    const ast = parse(fn, {
        ecmaVersion: 2021,
    });
    // Recursively traverse the AST
    const parameters = traverse(ast.body[0]);
    return (parameters || []).filter((param: any) => param !== null); // Remove null values
};

// Helper functions for destructuring and rest parameters
function getDestructuredParameterName(pattern: any) {
    if (pattern.type === 'Identifier') {
        return pattern.name;
    } else if (pattern.type === 'MemberExpression') {
        return getDestructuredParameterName(pattern.property); // Recurse for nested destructuring
    }
    return null; // Unknown destructuring pattern
}

function getRestParameterName(argument: any) {
    if (argument.type === 'Identifier') {
        return argument.name;
    }
    return null; // Unknown rest parameter type
}

export const isClass = (fn: any) => typeof fn === 'function' && Object.getOwnPropertyDescriptor(fn, 'prototype')?.writable === false;

export function capitalizeFirstLetter(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function lowercaseFirstLetter(str: string): string {
    return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export function getRelativeFileName(basePath: string, file: string) {
    return basePath ? `${basePath}/${file}` : file;
}

export function getClonableProp(isClonable: boolean) {
    return isClonable ? ' & Clonable' : '';
}

export function getMeshProps() {
    return ' & MeshProps';
}

export function getGuiProps() {
    return ' & GuiProps';
}

export const CollidingComponents: Record<string, string> = {
    // GUI
    button2D: 'button',
    image2D: 'image',
    ellipse2D: 'ellipse',
    // CORE
    text3D: 'text',
    polygon3D: 'polygon',
};

export const builders = [
    'box',
    'tiledBox',
    'sphere',
    'disc',
    'icoSphere',
    'ribbon',
    'cylinder',
    'torus',
    'torusKnot',
    'lineSystem',
    'lines',
    'dashedLines',
    'lathe',
    'tiledPlane',
    'plane',
    'ground',
    'tiledGround',
    'groundFromHeightMap',
    'tube',
    'polyhedron',
    'geodesic',
    'goldberg',
    'decal',
    'capsule',
    'text',
    'polygon',
];

export const ReversedCollidingComponents = Object.entries(CollidingComponents).reduce((acc, [key, value]) => ((acc[value] = key), acc), {} as Record<string, string>);

export enum BabylonPackages {
    CORE,
    GUI,
}

/**
 * Retrieves the names of all base classes in the prototype chain of a given target, including the current class.
 *
 * @param target - The object or class whose base classes are to be retrieved.
 * @param isClass - Optional. A boolean indicating whether the target is a class (true) or an instance (false).
 *                  If true, the method will attempt to call `getClassName` on the prototype of the target and its ancestors.
 * @returns An array of strings representing the names of the base classes in the prototype chain.
 */
function getBaseClasses(target: any, isClass?: boolean): Array<string> {
    const names = [];
    if (isClass && target.prototype.getClassName) {
        names.push(target.prototype.getClassName());
    }
    let parent = Object.getPrototypeOf(target);
    while (parent) {
        const classNameGetter = isClass ? parent.prototype?.getClassName : parent.getClassName;
        if (classNameGetter) {
            names.push(isClass ? classNameGetter.call(parent.prototype) : classNameGetter.call(parent));
        }
        parent = Object.getPrototypeOf(parent);
    }
    return names;
}

type BabylonBaseClass =
    | 'Material'
    | 'Mesh'
    | 'DynamicTexture'
    | 'AbstractMesh'
    | 'Node'
    | 'Camera'
    | 'Light'
    | 'BaseTexture'
    | 'DynamicTexture'
    | 'Texture'
    | 'CubeTexture'
    | 'HighlightLayer'
    | 'Container3D'
    | 'HolographicSlate'
    | 'Button3D'
    | 'MultiMaterial'
    | 'HolographicButton'
    | 'Vector3'
    | 'Vector4'
    | 'WebXRCamera';

/**
 * Checks if the target is an instance of a class with the specified class name.
 * This method is used instead of the `instanceof` operator to avoid importing classes,
 * helping to reduce the bundle size.
 *
 * @param target - The object or class to check.
 * @param className - The name of the class to check against.
 * @returns A boolean indicating whether the target is an instance of the specified class.
 */
export function isInstanceOf(target: any, className: BabylonBaseClass, isClass?: boolean): boolean {
    const baseClasses = getBaseClasses(target, isClass);
    return baseClasses.includes(className);
}

// specific properties of a single component
export const AdditionalProps: Record<string, string> = {
    webXRCamera: ` & WebXRCameraProps`,
    mesh: ` & MeshProps`,
};

// specific properties for a category of components
export function getAdditionalProps(jsxElementName: string, Class: any) {
    if (jsxElementName in AdditionalProps) {
        return AdditionalProps[jsxElementName];
    }
    if (Class.prototype instanceof Material) {
        return ` & MaterialProps`;
    }
    if (Class.prototype instanceof BaseTexture) {
        return ` & TextureProps`;
    }
    if (Class.prototype instanceof Camera) {
        return ` & CameraProps`;
    }
    return '';
}
/**
 * Invokes a function or class constructor based on the type of target provided.
 *
 * @param target - the function or constructor to invoke
 * @param args - the arguments to pass to the function or constructor
 * @returns the result of the function invocation or the constructed class instance
 */
export function invokeClassOrFunction(target: Function, args: any[]) {
    if (typeof target === 'function' && target.prototype) {
        // constructor
        return Reflect.construct(target, args);
    } else {
        // function
        return target(...args);
    }
}
