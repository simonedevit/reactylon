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
};

async function createJsxBabylonElements(index: string, babylonPackage: BabylonPackages): Promise<JsxElementsInfo> {
    const jsxElements: JsxElementsInfo = {
        imports: [],
        declarations: [],
        constructorArguments: {},
    };

    let classesInError = 0;

    const entryPoint = await import(`${index}/index.js`);
    Object.entries(entryPoint).forEach(([key, value]) => {
        try {
            if (isClass(value)) {
                const Class = value as Constructor<typeof value>;
                const importStatement = `import { ${key} } from '${index}';`;
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
                const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<${ElementType}>${getClonableProp(isClonable)}${ConstructorProps}${GuiProps},${ElementType}>, any>;`;

                // handle duplicates
                if (!(jsxElementName in jsxElements.constructorArguments)) {
                    jsxElements.imports.push(importStatement);
                    jsxElements.declarations.push(declarationStatement);
                    jsxElements.constructorArguments[jsxElementName] = constructorArguments;
                }
            } else {
                // exclude objects, constants and other stuff
                if (typeof value === 'function') {
                    let prefix = 'Create';
                    // get builder (i.e. CreateBox or ExtrudePolygon)
                    /* if (key.startsWith('Extrude')) {
                        prefix = 'Extrude';
                    }*/
                    const Builder = value as Function;
                    const importStatement = `import { ${key} } from '${index}';`;
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
                    }
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

const packages = {
    core: {
        index: '@babylonjs/core',
        declarationsFilename: 'babylon.core.declarations.ts',
        constructorsFilename: 'babylon.core.constructors.ts',
        babylonPackage: BabylonPackages.CORE,
    },
    gui: {
        index: '@babylonjs/gui',
        declarationsFilename: 'babylon.gui.declarations.ts',
        constructorsFilename: 'babylon.gui.constructors.ts',
        babylonPackage: BabylonPackages.GUI,
    },
};

(async () => {
    Object.values(packages).forEach(async ({ index, declarationsFilename, constructorsFilename, babylonPackage }) => {
        const jsxElements = await createJsxBabylonElements(index, babylonPackage);
        const declarationsContent = `
//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from '../types/types';
import { type MeshProps, type GuiProps, type Clonable } from '../types/props';
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
        try {
            const declarationsFullPathFilename = path.join(__dirname, `../../library/src/_generated/${declarationsFilename}`);
            await writeFile(declarationsFullPathFilename, declarationsContent);
            console.log(`\n${declarationsFilename} created successfully`);

            const constructorsFullPathFilename = path.join(__dirname, `../../library/src/_generated/${constructorsFilename}`);
            await writeFile(path.join(constructorsFullPathFilename), constructorsContent);
            console.log(`\n${constructorsFilename} created successfully`);
        } catch (error) {
            console.log(`Error creating ${index}: ${error}`);
        }
    });
})();
