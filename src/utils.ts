import { parse } from 'acorn';

export function capitalizeFirstLetter(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

// FIXME: test with other parameters
export const getClassConstructorParams = <T>(cls: { new(...args: any[]): T }) => {
    const ast = parse(cls.toString(), {
        ecmaVersion: 2020
    })
    //@ts-ignore
    return ast.body[0].body.body
        //@ts-ignore
        .find(x => {
            return x.type === 'MethodDefinition'
                && x.kind === 'constructor'
        })
        .value
        //@ts-ignore
        .params.map(x => x.name)
}


//FIXME: add strong typing
export const getFunctionParams = (fn: (...args: any[]) => void) => {
    //@ts-ignore
    const ast = parse(fn, {
        ecmaVersion: 2020,
    })

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

    // Recursively traverse the AST
    const parameters = traverse(ast.body[0]);
    return (parameters || []).filter((param: any) => param !== null); // Remove null values
}

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