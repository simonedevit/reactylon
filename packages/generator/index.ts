import { writeFile, readdir, stat } from 'fs/promises';
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
    getAdditionalProps,
} from '@dvmstudios/reactylon-common';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

type Constructor<T> = new (...args: any[]) => T;
type Function = (...args: any[]) => void;

function getConstructorProps<T>(Class: Constructor<T> | Function, className: string, isConstructor: boolean): [string, Array<string>] {
    const params = isConstructor ? getClassConstructorParams(Class as Constructor<T>) : getFunctionParams(Class as Function);
    const parameterType = isConstructor ? 'ConstructorParameters' : 'Parameters';
    if (params.length) {
        const props = params.reduce((type: string, prop: string, index: number) => {
            const attribute = `${prop}: ${parameterType}<typeof ${className}>[${index}];`;
            type += `${attribute}\n    `;
            return type;
        }, '');
        return [props, params];
    }
    return ['', []];
}

type JsxElementsInfo = {
    imports: Array<string>;
    declarations: Array<string>;
    constructorArguments: Record<string, Array<string>>;
    importPaths: Record<string, [string, boolean]>;
};

async function createJsxBabylonElements(index: string, babylonPackage: BabylonPackages): Promise<JsxElementsInfo> {
    const jsxElements: JsxElementsInfo = {
        imports: [],
        declarations: [],
        constructorArguments: {},
        importPaths: {},
    };

    let classesInError = 0;

    async function processBabylonJsFiles(dirPath: string, basePath: string): Promise<any> {
        const files = await readdir(dirPath);
        for (const file of files) {
            const fullPath = path.join(dirPath, file);
            if ((await stat(fullPath)).isDirectory()) {
                // skip legacy modules
                if (file === 'Legacy' || file === 'legacy') {
                    continue;
                }
                await processBabylonJsFiles(fullPath, basePath);
            } else {
                if (file.endsWith('.js')) {
                    const result = file.split('.');
                    if (result.length === 2) {
                        const [name] = result;
                        if (name !== 'index') {
                            const importPath = `${index}/${path.relative(basePath, fullPath)}`;
                            const importPathWithoutExtension = path.join(index, path.relative(basePath, fullPath).replace(path.extname(fullPath), ''));
                            const module = await import(importPath);
                            Object.entries(module).forEach(([key, value]) => {
                                let isMeshBuilder = false;
                                try {
                                    if (isClass(value)) {
                                        const Class = value as Constructor<typeof value>;
                                        const importStatement = `import { ${key} } from '${importPathWithoutExtension}';`;
                                        const ElementType = key;
                                        let jsxElementName = lowercaseFirstLetter(key);
                                        if (CollidingComponents[ElementType]) {
                                            jsxElementName = CollidingComponents[ElementType];
                                        }
                                        const [props, constructorArguments] = getConstructorProps(Class, key, true);
                                        const ConstructorProps = props
                                            ? `, {
                        ${props}
                            }`
                                            : ', {}';

                                        // check if "clone" method exists, if it exists will be added cloneFrom prop
                                        const isClonable = Class.prototype.clone;

                                        const GuiProps = babylonPackage === BabylonPackages.GUI ? getGuiProps() : '';
                                        const AdditionalProps = getAdditionalProps(jsxElementName, Class);
                                        const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getClonableProp(isClonable)}${ConstructorProps}${GuiProps}${AdditionalProps},${ElementType}>, any>;`;

                                        // handle duplicates
                                        if (!(jsxElementName in jsxElements.constructorArguments)) {
                                            jsxElements.imports.push(importStatement);
                                            jsxElements.declarations.push(declarationStatement);
                                            jsxElements.constructorArguments[jsxElementName] = constructorArguments;
                                            jsxElements.importPaths[jsxElementName] = [importPathWithoutExtension, isMeshBuilder];
                                        }
                                    } else {
                                        // exclude objects, constants and other stuff
                                        if (typeof value === 'function') {
                                            isMeshBuilder = importPathWithoutExtension.includes('/Meshes/Builders/');
                                            let prefix = 'Create';
                                            // get builder (i.e. CreateBox or ExtrudePolygon)
                                            /* if (key.startsWith('Extrude')) {
                                                prefix = 'Extrude';
                                            }*/
                                            const Builder = value as Function;
                                            const importStatement = `import { ${key} } from '${importPathWithoutExtension}';`;
                                            const keyWithoutPrefix = key.replace(prefix, '');
                                            let jsxElementName = lowercaseFirstLetter(keyWithoutPrefix);
                                            if (CollidingComponents[keyWithoutPrefix]) {
                                                jsxElementName = CollidingComponents[keyWithoutPrefix];
                                            }
                                            const [props, constructorArguments] = getConstructorProps(Builder, key, false);
                                            const FunctionProps = props
                                                ? `, {
                                ${props}
                                    }`
                                                : ', {}';
                                            const ElementType = `ReturnType<typeof ${key}>`;
                                            const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getMeshProps()}${FunctionProps},${ElementType}>, any>;`;

                                            // handle duplicates
                                            if (!(jsxElementName in jsxElements.constructorArguments)) {
                                                jsxElements.imports.push(importStatement);
                                                jsxElements.declarations.push(declarationStatement);
                                                jsxElements.constructorArguments[jsxElementName] = constructorArguments;
                                                jsxElements.importPaths[jsxElementName] = [importPathWithoutExtension, isMeshBuilder];
                                            }
                                        }
                                    }
                                } catch (error) {
                                    classesInError++;
                                    // the following classes don't have constructor
                                    console.log(key);
                                }
                            });
                        }
                    }
                }
            }
        }
    }

    await processBabylonJsFiles(`../../node_modules/${index}`, `../../node_modules/${index}`);

    //console.log('Total classes in error: ', classesInError);
    return jsxElements;
}

const packages = {
    core: {
        index: '@babylonjs/core',
        declarationsFilename: 'babylon.core.declarations.ts',
        constructorsFilename: 'babylon.core.constructors.ts',
        importsFilename: 'babylon.core.imports.ts',
        babylonPackage: BabylonPackages.CORE,
    },
    gui: {
        index: '@babylonjs/gui',
        declarationsFilename: 'babylon.gui.declarations.ts',
        constructorsFilename: 'babylon.gui.constructors.ts',
        importsFilename: 'babylon.gui.imports.ts',
        babylonPackage: BabylonPackages.GUI,
    },
};

(async () => {
    for (const { index, declarationsFilename, constructorsFilename, importsFilename, babylonPackage } of Object.values(packages)) {
        const jsxElements = await createJsxBabylonElements(index, babylonPackage);
        const declarationsContent = `
//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from '../types/types';
import { type MeshProps, type GuiProps, type Clonable, type WebXRCameraProps, type TextureProps, type MaterialProps, type CameraProps } from '../types/props';
${jsxElements.imports.join('\n')}
    
export interface JSXElements {
  ${jsxElements.declarations.join('\n  ')}
}
`;
        const constructorsContent = `const ConstructorsMap: Record<string, Array<string>> = {
${Object.entries(jsxElements.constructorArguments).reduce((result, [jsxElementName, constructorArguments]) => {
    result += `   ${jsxElementName}: ${JSON.stringify(constructorArguments)},\n`;
    return result;
}, '')}
}
export default ConstructorsMap;`;

        const importsContent = `const ImportsMap: Record<string, [Promise<any>, boolean]> = {
    ${Object.entries(jsxElements.importPaths).reduce((result, [jsxElementName, [importPath, isMeshBuilder]]) => {
        result += `   ${jsxElementName}: [import("${importPath}.js"), ${isMeshBuilder}],\n`;
        return result;
    }, '')}
    }
export default ImportsMap;`;
        try {
            // declarations
            const declarationsFullPathFilename = path.join(__dirname, `../../library/src/_generated/${declarationsFilename}`);
            await writeFile(declarationsFullPathFilename, declarationsContent);
            console.log(`\n${declarationsFilename} created successfully`);

            // constructors
            const constructorsFullPathFilename = path.join(__dirname, `../../library/src/_generated/${constructorsFilename}`);
            await writeFile(path.join(constructorsFullPathFilename), constructorsContent);
            console.log(`\n${constructorsFilename} created successfully`);

            // import paths
            const importsFullPathFilename = path.join(__dirname, `../../library/src/_generated/${importsFilename}`);
            await writeFile(path.join(importsFullPathFilename), importsContent);
            console.log(`\n${importsFilename} created successfully`);
            console.log();
        } catch (error) {
            console.log(`Error creating ${index}: ${error}`);
        }
    }
})();
