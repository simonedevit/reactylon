import { Color3, MultiMaterial, StandardMaterial } from '@babylonjs/core';
import { render } from '@utils/TestUtils';

const materialName = 'material';

describe('Materials tests', () => {
    test('should create a new material', async () => {
        const { scene } = render(<standardMaterial name={materialName} />);
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        expect(material.name).toEqual(materialName);
    });

    test('should update the color of the material', async () => {
        const { scene, rerender } = render(<standardMaterial name={materialName} diffuseColor={Color3.Red()} />);
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        rerender(<standardMaterial name={materialName} diffuseColor={Color3.Yellow()} />);
        expect(material.diffuseColor.equals(Color3.Yellow())).toBeTruthy();
    });

    test('should dispose the material', async () => {
        const { scene, unmount } = render(<standardMaterial name={materialName} />);
        unmount();
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        expect(material).toBeNull();
    });

    test('should clone a material', async () => {
        const clonedMaterialName = `cloned-${materialName}`;
        const { scene } = render(
            <>
                <standardMaterial name={materialName} emissiveColor={Color3.Blue()} />
                <standardMaterial name={clonedMaterialName} cloneFrom={materialName} />
            </>,
        );
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        const clonedMaterial = scene.getMaterialByName(clonedMaterialName) as StandardMaterial;
        expect(clonedMaterial.emissiveColor.equals(material.emissiveColor)).toBeTruthy();
    });

    test('should set multiple materials in the parent instance', async () => {
        const boxName = 'box';
        const multiMaterialName = 'multi-material';
        const material1Name = 'material-1';
        const material2Name = 'material-2';
        const { scene } = render(
            <box name={boxName}>
                <multiMaterial name={multiMaterialName}>
                    <standardMaterial name={material1Name} />
                    <standardMaterial name={material2Name} />
                </multiMaterial>
            </box>,
        );
        const multiMaterial = scene.getMeshById(boxName)?.material as MultiMaterial;
        const material1 = scene.getMaterialById(material1Name) as StandardMaterial;
        const material2 = scene.getMaterialById(material2Name) as StandardMaterial;
        expect(multiMaterial.subMaterials).toContain(material1);
        expect(multiMaterial.subMaterials).toContain(material2);
    });
});
