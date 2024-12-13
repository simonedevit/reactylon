import { ArcRotateCamera, Tools, Vector3 } from '@babylonjs/core';
import { render } from '@utils/TestUtils';

const cameraName = 'camera';

describe('Cameras tests', () => {
    test('should create a new camera', async () => {
        const { scene } = render(<arcRotateCamera name={cameraName} alpha={Tools.ToRadians(90)} beta={Tools.ToRadians(90)} radius={10} target={Vector3.Zero()} />);
        const camera = scene.getCameraById(cameraName) as ArcRotateCamera;
        expect(camera.name).toEqual(cameraName);
    });

    test('should update the alpha rotation angle of the camera', async () => {
        const { scene, rerender } = render(<arcRotateCamera name={cameraName} alpha={Tools.ToRadians(90)} beta={Tools.ToRadians(90)} radius={10} target={Vector3.Zero()} />);
        const camera = scene.getCameraById(cameraName) as ArcRotateCamera;
        rerender(<arcRotateCamera name={cameraName} alpha={Tools.ToRadians(180)} beta={Tools.ToRadians(90)} radius={10} target={Vector3.Zero()} />);
        expect(camera.alpha).toEqual(Tools.ToRadians(180));
    });

    test('should dispose the camera', async () => {
        const { scene, unmount } = render(<arcRotateCamera name={cameraName} alpha={Tools.ToRadians(90)} beta={Tools.ToRadians(90)} radius={10} target={Vector3.Zero()} />);
        unmount();
        const camera = scene.getCameraById(cameraName) as ArcRotateCamera;
        expect(camera).toBeNull();
    });
});
