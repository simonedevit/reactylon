import { parse } from 'acorn';

//TODO: move it in a separate file (pay attention to module resolution due to "nodeNext")

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

// TIP: what about call them {name}-XR ?
export const CollidingComponents: Record<string, string> = {
    // GUI
    Button: 'button2D',
    Image: 'image2D',
    // CORE
    Text: 'text3D',
    Polygon: 'polygon3D',
};

export const ReversedCollidingComponents = Object.entries(CollidingComponents).reduce((acc, [key, value]) => ((acc[value] = key), acc), {} as Record<string, string>);

export enum BabylonPackages {
    'CORE',
    'GUI',
}

export const CustomProps: Record<string, string> = {
    webXRCamera: ` & WebXRCameraProps`,
};
