import type { AdvancedDynamicTexture, Grid } from '@babylonjs/gui';
import { render } from '@utils/TestUtils';

const advancedDynamicTextureName = 'advanced-dynamic-texture';
const gridName = 'grid';

describe('Grid tests', () => {
    test('should create a new grid with one row and two columns', async () => {
        const { scene } = render(
            <>
                <plane name='plane' options={{ height: 0.3, width: 0.5 }} />
                <advancedDynamicTexture name={advancedDynamicTextureName} kind='createForMesh' createForMesh={{ mesh: 'plane' }}>
                    <grid name={gridName}>
                        <row height={1}>
                            <column width={0.5}>
                                <rectangle thickness={0} background='yellow' />
                            </column>
                            <column width={0.5}>
                                <rectangle thickness={0} background='red' />
                            </column>
                        </row>
                    </grid>
                </advancedDynamicTexture>
            </>,
        );

        const advancedDynamicTexture = scene.getTextureByName(advancedDynamicTextureName) as AdvancedDynamicTexture;
        const grid = advancedDynamicTexture.getControlByName(gridName) as Grid;
        expect(grid.rowCount).toEqual(1);
        const nestedGrid = advancedDynamicTexture.getControlByName(`${gridName}-row-0`) as Grid;
        expect(nestedGrid.columnCount).toEqual(2);
    });
});
