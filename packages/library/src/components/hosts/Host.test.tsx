import { Mesh, StandardMaterial, Texture, TransformNode } from '@babylonjs/core';
import { render } from '@utils/TestUtils';
import jest from 'jest-mock';

describe('Hosts tests', () => {
    test('should set a transform node as parent of a sphere (parent-child relationship)', async () => {
        const transformNodeName = 'transform-node';
        const sphereName = 'sphere';

        const { scene } = render(
            <transformNode name={transformNodeName}>
                <sphere name={sphereName} />
            </transformNode>,
        );
        const transformNode = scene.getTransformNodeById(transformNodeName) as TransformNode;
        const sphere = scene.getMeshById(sphereName) as Mesh;
        expect(sphere.parent).toEqual(transformNode);
    });

    test('should set a material in the parent mesh', async () => {
        const boxName = 'box';
        const materialName = 'material';
        const { scene } = render(
            <box name={boxName}>
                <standardMaterial name={materialName} />
            </box>,
        );
        const box = scene.getMeshById(boxName) as Mesh;
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        expect(box.material).toEqual(material);
    });

    test('should set a texture in the parent material', async () => {
        const materialName = 'material';
        const textureName = 'texture';
        const textureKind = 'diffuseTexture';
        const { scene } = render(
            <standardMaterial name={materialName}>
                <texture name={textureName} kind={textureKind} url={''} />
            </standardMaterial>,
        );
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        const texture = scene.getTextureByName(textureName) as Texture;
        expect(material[textureKind]).toEqual(texture);
    });

    test('should assign a material to multiple meshes', async () => {
        const boxName = 'box';
        const sphereName = 'sphere';
        const materialName = 'material';
        const { scene } = render(
            <>
                <box name={boxName} />
                <sphere name={sphereName} />
                <standardMaterial name={materialName} assignTo={[boxName, sphereName]} />
            </>,
        );
        const box = scene.getMeshById(boxName) as Mesh;
        const sphere = scene.getMeshById(sphereName) as Mesh;
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        expect(box.material).toEqual(material);
        expect(sphere.material).toEqual(material);
    });

    test('should dispose the box and his children material', async () => {
        const boxName = 'box';
        const materialName = 'material';
        const { scene, unmount } = render(
            <box name={boxName}>
                <standardMaterial name={materialName} />
            </box>,
        );
        unmount();
        const box = scene.getMeshById(boxName) as Mesh;
        const material = scene.getMaterialById(materialName) as StandardMaterial;
        expect(box).toBeNull();
        expect(material).toBeNull();
    });

    test('should invoke onCreate when the box has been created', async () => {
        const handleCreate = jest.fn();
        const boxName = 'box';
        render(<box name={boxName} onCreate={handleCreate} />);
        expect(handleCreate).toHaveBeenCalledTimes(1);
    });
});
