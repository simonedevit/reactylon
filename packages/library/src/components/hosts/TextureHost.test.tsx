import { Texture } from '@babylonjs/core';
import { render } from '@utils/TestUtils';
import jest from 'jest-mock';

const textureName = 'texture';

describe('Textures tests', () => {
    test('should create a new texture', async () => {
        const { scene } = render(<texture name={textureName} kind='diffuseTexture' url='abc' />);
        const texture = scene.getTextureByName(textureName) as Texture;
        expect(texture.name).toEqual(textureName);
    });

    test('should update the url of the texture', async () => {
        const { scene, rerender } = render(<texture name={textureName} kind='diffuseTexture' url='abc' />);
        const texture = scene.getTextureByName(textureName) as Texture;
        texture.updateURL = jest.fn();
        rerender(<texture name={textureName} kind='diffuseTexture' url='xyz' />);
        expect(texture.url).toEqual('xyz');
        expect(texture.updateURL).toHaveBeenCalled();
    });

    test('should dispose the texture', async () => {
        const { scene, unmount } = render(<texture name={textureName} kind='diffuseTexture' url='abc' />);
        unmount();
        const texture = scene.getTextureByName(textureName) as Texture;
        expect(texture).toBeNull();
    });
});
