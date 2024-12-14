import { ActionManager, Mesh, Vector3 } from '@babylonjs/core';
import { render } from '@utils/TestUtils';
import jest from 'jest-mock';

const boxName = 'box';

describe('Meshes tests', () => {
    test('should create a new box', async () => {
        const { scene } = render(<box name={boxName} position={new Vector3(1, 0, 0)} />);
        const box = scene.getMeshById(boxName) as Mesh;
        expect(box.name).toEqual(boxName);
    });

    test('should update the position of the box', async () => {
        const { scene, rerender } = render(<box name={boxName} position={new Vector3(0, 0, 0)} />);
        const box = scene.getMeshById(boxName) as Mesh;
        rerender(<box name={boxName} position={new Vector3(1, 1, 0)} />);
        expect(box.position.equals(new Vector3(1, 0, 0))).toBeTruthy();
    });

    test('should dispose the box', async () => {
        const { scene, unmount } = render(<box name={boxName} position={new Vector3(0, 0, 0)} />);
        unmount();
        const box = scene.getMeshById(boxName) as Mesh;
        expect(box).toBeNull();
    });

    test('should click on the box', async () => {
        const handleClick = jest.fn();
        const { scene } = render(<box name={boxName} onPick={handleClick} />);
        const box = scene.getMeshById(boxName) as Mesh;
        box.actionManager!.processTrigger(ActionManager.OnPickTrigger);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('should clone a box', async () => {
        const clonedBoxName = `cloned-${boxName}`;
        const { scene } = render(
            <>
                <box name={boxName} position={new Vector3(1, 0, 0)} />
                <box name={clonedBoxName} cloneFrom={boxName} />
            </>,
        );
        const box = scene.getMeshById(boxName) as Mesh;
        const clonedBox = scene.getMeshByName(clonedBoxName) as Mesh;
        expect(clonedBox.position.equals(box.position)).toBeTruthy();
    });

    test('should create an instance of a box', async () => {
        const instanceBoxName = `instance-${boxName}`;
        const { scene } = render(
            <>
                <box name={boxName} position={new Vector3(1, 0, 0)} />
                <box name={instanceBoxName} instanceFrom={boxName} />
            </>,
        );
        const box = scene.getMeshById(boxName) as Mesh;
        const instanceBox = scene.getMeshByName(instanceBoxName) as Mesh;
        expect(instanceBox.position.equals(box.position)).toBeTruthy();
    });
});
