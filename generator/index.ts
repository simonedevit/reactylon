//@ts-nocheck
import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder.js';
import { parse } from 'acorn';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export const getClassConstructorParams = <T>(cls: { new (...args: any[]): T }) => {
    const ast = parse(cls.toString(), {
        ecmaVersion: 2020,
    });
    //@ts-ignore
    const parameters = traverse(ast.body[0].body.body.find(x => x.type === 'MethodDefinition' && x.kind === 'constructor').value);
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
export const getFunctionParams = (fn: (...args: any[]) => void) => {
    //@ts-ignore
    const ast = parse(fn, {
        ecmaVersion: 2020,
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

function capitalizeFirstLetter(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function lowercaseFirstLetter(str: string): string {
    return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

function getRelativeFileName(basePath: string, file: string) {
    return basePath ? `${basePath}/${file}` : file;
}

function getClonableProp(isClonable: boolean) {
    return isClonable ? ' & { cloneBy: string }' : '';
}

function getConstructorProps<T>(Class: { new (...args: any[]): T }, className: string, isConstructor: boolean) {
    //@ts-ignore
    const params = isConstructor ? getClassConstructorParams(Class) : getFunctionParams(Class);
    const parameterType = isConstructor ? 'ConstructorParameters' : 'Parameters';
    if (params.length) {
        return params.reduce((type: string, prop: string, index: number) => {
            const attribute = `${prop}: ${parameterType}<typeof ${className}>[${index}];`;
            type += `${attribute}\n    `;
            return type;
        }, '');
    }
    return '';
}

const jxsElements: Record<string, Array<string>> = {
    imports: [],
    declarations: [],
};

const constantsNotClasses = [
    // 'meshBuilder',
    'copyTools',
    'domManagement',
    'environmentTextureTools',
    'fileTools',
    'screenshotTools',
    'stringTools',
    'textureTools',
];

async function createJsxDeclarations(directoryPath: string, basePath: string = ''): Promise<void> {
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
        const isAuxiliarFile = file.split('.').length > 3; // i.e. standardMaterial.decalMap.d.ts
        if (file === 'index.d.ts' || isAuxiliarFile) {
            continue; // Skip index.d.ts
        }
        const filePath = path.join(directoryPath, file);
        const stats = await fs.stat(filePath);
        const relativeFileName = getRelativeFileName(basePath, file);
        // if it is a directory, call it recursively
        if (stats.isDirectory()) {
            await createJsxDeclarations(filePath, relativeFileName);
        } else if (file.endsWith('.d.ts')) {
            // get file name without extension (i.e. standardMaterial)
            const jsxElementName = file.split('.')[0];
            let isClonable = false;
            if (file === 'meshBuilder.d.ts') {
                for (const key of Object.keys(MeshBuilder)) {
                    isClonable = true; // all meshes are clonable
                    const className = key;
                    const jsxElementName = lowercaseFirstLetter(key.replace('Create', ''));
                    const importStatement = `import { ${className} } from '@babylonjs/core/Meshes/Builders';`; // import { CreateBox } from '@babylonjs/core/Meshes/Builders';

                    const module = await import('@babylonjs/core/Meshes/Builders/index.js');
                    const Class = module[className];
                    try {
                        const result = getConstructorProps(Class, className, false);

                        const FunctionProps = result
                            ? `, {
        ${result}
            }`
                            : '';
                        const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ${className}>${getClonableProp(isClonable)}>${FunctionProps}>, any>;`;

                        jxsElements.imports.push(importStatement);
                        jxsElements.declarations.push(declarationStatement);
                        console.log(`${importStatement}\n${declarationStatement}\n`);
                    } catch (error) {
                        console.log(error);
                    }
                }
                continue;
            }
            let className = capitalizeFirstLetter(jsxElementName);
            // remove .d.ts extension
            const fileNameWithoutExtension = relativeFileName.split('.')[0];
            const importStatement = `import { ${className} } from '@babylonjs/core/${fileNameWithoutExtension}';`;
            const module = await import(`@babylonjs/core/${fileNameWithoutExtension}.js`);

            // deal with constants not classes
            if (constantsNotClasses.includes(jsxElementName)) {
                className = `typeof ${className}`;
            }

            const Class = module[className];
            // skip files can't be instantiated
            if (!Class) {
                continue;
            }
            let ConstructorProps;
            try {
                const result = getConstructorProps(Class, className, true);
                ConstructorProps = result
                    ? `, {
    ${result}
        }`
                    : '';
            } catch (error) {
                // all builders are Babylon deprecated classes
                // FIXME: investigate on other classes
                //console.log('Skipped class: ' + className);
                continue;
            }

            // check if "clone" method exists, if it exists will be added cloneBy prop
            isClonable = Class?.prototype?.clone;

            const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${className}${getClonableProp(isClonable)}>${ConstructorProps}>, any>;`;

            jxsElements.imports.push(importStatement);
            jxsElements.declarations.push(declarationStatement);

            //console.log(`${importStatement}\n${declarationStatement}\n`);
        }
    }
}

const directoryPath = path.join(__dirname, '../node_modules/@babylonjs/core');

(async () => {
    await createJsxDeclarations(directoryPath);
    const content = `
//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
${jxsElements.imports.join('\n')}

export interface JSXElements {
  ${jxsElements.declarations.join('\n  ')}
}
`;
    try {
        const fileName = 'declaration.ts';
        const fullPathFileName = path.join(__dirname, `../src/types/${fileName}`);
        await fs.writeFile(fullPathFileName, content);
        console.log(`\n${fileName} created successfully`);
    } catch (error) {
        console.log(`Error creating file: ${error}`);
    }
})();
