import * as fs from 'fs/promises';
import * as path from 'path';
//import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

//TODO: replace mock with import from MeshBuilder
const MeshBuilder = {
  CreateBox: null,
  CreateTiledBox: null,
  CreateSphere: null,
  CreateDisc: null,
  CreateIcoSphere: null,
  CreateRibbon: null,
  CreateCylinder: null,
  CreateTorus: null,
  CreateTorusKnot: null,
  CreateLineSystem: null,
  CreateLines: null,
  CreateDashedLines: null,
  ExtrudeShape: null,
  ExtrudeShapeCustom: null,
  CreateLathe: null,
  CreateTiledPlane: null,
  CreatePlane: null,
  CreateGround: null,
  CreateTiledGround: null,
  CreateGroundFromHeightMap: null,
  CreatePolygon: null,
  ExtrudePolygon: null,
  CreateTube: null,
  CreatePolyhedron: null,
  CreateGeodesic: null,
  CreateGoldberg: null,
  CreateDecal: null,
  CreateCapsule: null,
  CreateText: null,
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

const jxsElements: Record<string, Array<string>> = {
  imports: [],
  declarations: []
}

const deprecatedElements = [
  'boxBuilder',
  'capsuleBuilder',
  'cylinderBuilder',
  'decalBuilder',
  'discBuilder',
  'groundBuilder',
  'hemisphereBuilder',
  'icoSphereBuilder',
  'latheBuilder',
  'linesBuilder',
  'planeBuilder',
  'polygonBuilder',
  'polyhedronBuilder',
  'ribbonBuilder',
  'screenSpaceReflectionPostProcess',
  'shapeBuilder',
  'sphereBuilder',
  'tiledBoxBuilder',
  'tiledPlaneBuilder',
  'torusBuilder',
  'torusKnotBuilder',
  'tubeBuilder'
];

const constantsNotClasses = [
  // 'meshBuilder',
  'copyTools',
  'domManagement',
  'environmentTextureTools',
  'fileTools',
  'screenshotTools',
  'stringTools',
  'textureTools'
];

async function createJsxDeclarations(directoryPath: string, basePath: string = ''): Promise<void> {

  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    if (file === 'index.d.ts') {
      continue; // Skip index.d.ts
    }
    const filePath = path.join(directoryPath, file);
    const stats = await fs.stat(filePath);
    const relativeFileName = getRelativeFileName(basePath, file);
    if (stats.isDirectory()) {
      await createJsxDeclarations(filePath, relativeFileName);
    }
    else if (file.endsWith('.d.ts')) {
      const jsxElementName = file.split('.')[0];
      if (deprecatedElements.includes(jsxElementName)) {
        continue;
      }
      if (file === 'meshBuilder.d.ts') {
        Object.keys(MeshBuilder).forEach(key => {
          const className = key;
          const jsxElementName = lowercaseFirstLetter(key.replace('Create', ''));
          const importStatement = `import { ${className} } from '@babylonjs/core/Meshes/Builders';`;
          const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<{options: Parameters<typeof ${className}>[1]} & ReturnType<typeof ${className}>>, any>;`;
          jxsElements.imports.push(importStatement);
          jxsElements.declarations.push(declarationStatement);
        })
        continue;
      }
      let className = capitalizeFirstLetter(jsxElementName);
      // remove .d.ts extension
      const fileNameWithoutExtension = relativeFileName.slice(0, relativeFileName.length - 5);
      const importStatement = `import { ${className} } from '@babylonjs/core/${fileNameWithoutExtension}';`;
      // deal with constants not classes
      if (constantsNotClasses.includes(jsxElementName)) {
        className = `typeof ${className}`;
      }
      const declarationStatement = `${jsxElementName}: React.DetailedHTMLProps<BabylonProps<${className}>, any>;`;

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
import { type BabylonProps } from './types';
${jxsElements.imports.join('\n')}

export interface JSXElements {
  ${jxsElements.declarations.join('\n  ')}
}
`;
  try {
    const fileName = path.join(__dirname, '../src/types/declaration.ts');
    await fs.writeFile(fileName, content);
    console.log('File created successfully');
  }
  catch (error) {
    console.log(`Error creating file: ${error}`);
  }
})();
