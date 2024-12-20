import { DirectionalLight, HemisphericLight, PointLight, Vector3 } from '@babylonjs/core';
import { render } from '@utils/TestUtils';

const lightName = 'light';

describe('Lights tests', () => {
    test('should create a new light', async () => {
        const { scene } = render(<pointLight name={lightName} position={Vector3.Zero()} />);
        const light = scene.getLightById(lightName) as PointLight;
        expect(light.name).toEqual(lightName);
    });

    test('should update the intensity of the light', async () => {
        const { scene, rerender } = render(<pointLight name={lightName} position={Vector3.Zero()} />);
        const light = scene.getLightById(lightName) as PointLight;
        rerender(<pointLight name={lightName} position={Vector3.Zero()} intensity={0.3} />);
        expect(light.intensity).toEqual(0.3);
    });

    test('should dispose the light', async () => {
        const { scene, unmount } = render(<hemisphericLight name={lightName} direction={Vector3.Up()} />);
        unmount();
        const light = scene.getLightById(lightName) as HemisphericLight;
        expect(light).toBeNull();
    });

    test('should clone a light', async () => {
        const clonedLightName = `cloned-${lightName}`;
        const { scene } = render(
            <>
                <directionalLight name={lightName} direction={Vector3.Up()} radius={7} />
                <directionalLight name={clonedLightName} direction={Vector3.Up()} cloneFrom={lightName} />
            </>,
        );
        const light = scene.getLightById(lightName) as DirectionalLight;
        const clonedLight = scene.getLightByName(clonedLightName) as DirectionalLight;
        expect(clonedLight.radius).toEqual(light.radius);
    });
});
