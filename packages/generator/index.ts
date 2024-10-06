import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    getClassConstructorParams,
    getClonableProp,
    getFunctionParams,
    getMeshProps,
    isClass,
    lowercaseFirstLetter,
    CollidingComponents,
    BabylonPackages,
    getGuiProps,
} from '@dvmstudios/reactylon-common';

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

// FIXME: handle duplicates
async function createJsxDeclarations(index: string, babylonPackage: BabylonPackages): Promise<Record<string, Array<string>>> {
    const jsxElements: Record<string, Array<string>> = {
        imports: [],
        declarations: [],
    };

    let classesInError = 0;

    const entryPoint = await import(`${index}/index.js`);
    Object.entries(entryPoint).forEach(([key, value]) => {
        try {
            if (isClass(value)) {
                const Class = value as Constructor<typeof value>;
                const importStatement = `import { ${key} } from '${index}';`;
                const result = getConstructorProps(Class, key, true);
                const ConstructorProps = result
                    ? `, {
${result}
    }`
                    : ', {}';

                // check if "clone" method exists, if it exists will be added cloneFrom prop
                const isClonable = Class.prototype.clone;

                const ElementType = key;
                let jsxElementName = lowercaseFirstLetter(key);
                if (CollidingComponents[ElementType]) {
                    jsxElementName = CollidingComponents[ElementType];
                }

                const GuiProps = babylonPackage === BabylonPackages.GUI ? getGuiProps() : '';
                const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getClonableProp(isClonable)}${ConstructorProps}${GuiProps},${ElementType}>, any>;`;

                jsxElements.imports.push(importStatement);
                jsxElements.declarations.push(declarationStatement);
            } else {
                // exclude objects, constants and other stuff
                if (typeof value === 'function') {
                    let prefix = 'Create';
                    // get builder (i.e. CreateBox or ExtrudePolygon)
                    if (key.startsWith('Extrude')) {
                        prefix = 'Extrude';
                    }
                    const Builder = value as Function;
                        const importStatement = `import { ${key} } from '${index}';`;
                        const result = getConstructorProps(Builder, key, false);
                        const FunctionProps = result
                            ? `, {
        ${result}
            }`
                            : ', {}';
                        const ElementType = `ReturnType<typeof ${key}>`;
                        const keyWithoutPrefix = key.replace(prefix, '');
                        let jsxElementName = lowercaseFirstLetter(keyWithoutPrefix);
                        if (CollidingComponents[keyWithoutPrefix]) {
                            jsxElementName = CollidingComponents[keyWithoutPrefix];
                        }
                        const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getMeshProps()}${FunctionProps},${ElementType}>, any>;`;

                        jsxElements.imports.push(importStatement);
                        jsxElements.declarations.push(declarationStatement);
                }
            }
        } catch (error) {
            classesInError++;
            // the following classes don't have constructor
            console.log(key);
        }
    });
    //console.log('Total classes in error: ', classesInError);
    return jsxElements;
}

const declarations = {
    core: {
        index: '@babylonjs/core',
        fileName: 'core.declarations.ts',
        babylonPackage: BabylonPackages.CORE,
    },
    gui: {
        index: '@babylonjs/gui',
        fileName: 'gui.declarations.ts',
        babylonPackage: BabylonPackages.GUI,
    },
};

(async () => {
    Object.values(declarations).forEach(async ({ index, fileName, babylonPackage }) => {
        const jsxElements = await createJsxDeclarations(index, babylonPackage);
        const content = `
//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
import { type MeshProps, type GuiProps, type Clonable } from './props';
${jsxElements.imports.join('\n')}
    
export interface JSXElements {
  ${jsxElements.declarations.join('\n  ')}
}
`;
        try {
            const fullPathFileName = path.join(__dirname, `../../library/src/types/${fileName}`);
            await writeFile(fullPathFileName, content);
            console.log(`\n${fileName} created successfully`);
        } catch (error) {
            console.log(`Error creating ${fileName}: ${error}`);
        }
    });
})();
