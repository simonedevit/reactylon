import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getClassConstructorParams, getClonableProp, getFunctionParams, getMeshProps, isClass, lowercaseFirstLetter } from '@dvmstudios/reactylon-common';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

type Constructor<T> = new (...args: any[]) => T;
type Function = (...args: any[]) => void;

function getConstructorProps<T>(Class: Constructor<T> | Function, className: string, isConstructor: boolean) {
    const params = isConstructor ? getClassConstructorParams(Class as Constructor<T>) : getFunctionParams(Class as Function);
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

// FIXME: handle duplicates
async function createJsxDeclarations(): Promise<void> {
    const index = await import('@babylonjs/core/index.js');
    Object.entries(index).forEach(([key, value]) => {
        try {
            if (isClass(value)) {
                const Class = value as Constructor<typeof value>;
                const importStatement = `import { ${key} } from '@babylonjs/core';`;
                const result = getConstructorProps(Class, key, true);
                const ConstructorProps = result
                    ? `, {
${result}
    }`
                    : '';

                // check if "clone" method exists, if it exists will be added cloneBy prop
                const isClonable = Class.prototype.clone;

                const ElementType = key;
                const jsxElementName = lowercaseFirstLetter(key);
                const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getClonableProp(isClonable)}${ConstructorProps},${ElementType}>, any>;`;

                jxsElements.imports.push(importStatement);
                jxsElements.declarations.push(declarationStatement);
            } else {
                // exclude objects, constants and other stuff
                if (typeof value === 'function') {
                    // get builder (i.e. CreateBox)
                    if (key.startsWith('Create')) {
                        const Builder = value as Function;
                        const importStatement = `import { ${key} } from '@babylonjs/core';`;
                        const result = getConstructorProps(Builder, key, false);
                        const FunctionProps = result
                            ? `, {
        ${result}
            }`
                            : '';
                        const ElementType = `ReturnType<typeof ${key}>`;
                        const jsxElementName = lowercaseFirstLetter(key.replace('Create', ''));
                        const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getMeshProps()}${FunctionProps},${ElementType}>, any>;`;

                        jxsElements.imports.push(importStatement);
                        jxsElements.declarations.push(declarationStatement);
                    } else if (key.startsWith('Extrude')) {
                        // handle Extruded meshesh
                    }
                }
            }
        } catch (error) {
            // the following classes don't have constructor
            console.log(key);
        }
    });
}

(async () => {
    await createJsxDeclarations();
    const content = `
//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
import { type MeshProps, type Clonable } from './props';
${jxsElements.imports.join('\n')}

export interface JSXElements {
  ${jxsElements.declarations.join('\n  ')}
}
`;
    try {
        const fileName = 'declaration.ts';
        const fullPathFileName = path.join(__dirname, `../../library/src/types/${fileName}`);
        await writeFile(fullPathFileName, content);
        console.log(`\n${fileName} created successfully`);
    } catch (error) {
        console.log(`Error creating file: ${error}`);
    }
})();
