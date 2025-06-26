import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import type { RowProps, ColumnProps, GuiTriggerable } from '@props';
import { GuiTriggers } from '@props';
import type { Grid as GridType } from '@babylonjs/gui';
import { inventory } from '../../core/inventory';
import type { Vector2WithInfo } from '@babylonjs/gui';
import type { Observable } from '@babylonjs/core';

type GridConstructor = {
    new (...args: any[]): any;
};

function handleEvents(props: RowProps | ColumnProps, element: any) {
    Object.entries(GuiTriggers).forEach(([_key, observableName]) => {
        const key = _key as keyof GuiTriggerable;
        //TODO: handle addOnce
        const handlerFn = props[key] as Parameters<Observable<Vector2WithInfo>['add']>[0];
        if (handlerFn) {
            element[observableName].add(handlerFn);
        }
    });
}

type AugmentedGrid = BabylonEntity<
    GridType & {
        type: 'row' | 'column';
        props: RowProps | ColumnProps;
        siblingIndex: number;
    }
>;

const excludedProps = ['children', 'ref', 'height', 'width', 'isPixel', ...Object.keys(GuiTriggers)];

export class GridHost {
    static createInstance(type: 'row' | 'column', Class: any, props: RowProps | ColumnProps, rootContainer: RootContainer) {
        const scene = rootContainer.scene;

        const Grid = inventory.get('grid')?.[0] as GridConstructor;
        const nestedGrid = new Grid();
        nestedGrid.uniqueId = scene.getUniqueId();

        nestedGrid.type = type;
        nestedGrid.props = props;
        nestedGrid.handlers = {
            addChild: GridHost.addChild,
            removeChild: GridHost.removeChild,
            commitUpdate: GridHost.commitUpdate,
        };
        nestedGrid.parent = null;

        // mainly styling purpose
        Object.keys(props)
            .filter(propName => !excludedProps.includes(propName))
            .forEach(_key => {
                const key = _key as keyof (RowProps | ColumnProps);
                const value = props[key];
                nestedGrid[key] = value;
            });

        handleEvents(props, nestedGrid);

        return nestedGrid;
    }

    static addChild(parentInstance: AugmentedGrid | BabylonEntity<GridType>, child: AugmentedGrid, context: any): void {
        const { type, props } = child;
        const { isPixel } = props;
        const { siblingIndex } = context;

        const parentName = parentInstance.name || 'grid';

        if (type === 'row') {
            const { height } = props as RowProps;

            parentInstance.addRowDefinition(height, isPixel);

            const rowIndex = siblingIndex;
            child.name = `${parentName}-row-${rowIndex}`;
            parentInstance.addControl(child, rowIndex, 0);
        } else {
            const { width } = props as ColumnProps;
            parentInstance.addColumnDefinition(width, isPixel);

            const colIndex = siblingIndex;
            child.name = `${parentName}-col-${colIndex}`;
            parentInstance.addControl(child, 0, colIndex);
        }

        // info for in commitUpdate
        child.parent = parentInstance;
        child.siblingIndex = siblingIndex;
    }

    static removeChild(parentInstance: AugmentedGrid | BabylonEntity<GridType>, child: AugmentedGrid, context: any): void {
        const { type } = child;
        const { siblingIndex } = context;

        parentInstance.removeControl(child);

        if (type === 'row') {
            parentInstance.removeRowDefinition(siblingIndex);
        } else if (type === 'column') {
            parentInstance.removeColumnDefinition(siblingIndex);
        }
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: AugmentedGrid, updatePayload: UpdatePayload): void {
        const { type, siblingIndex, parent } = instance;
        const { isPixel } = updatePayload as RowProps | ColumnProps;

        const grid = parent as AugmentedGrid | BabylonEntity<GridType>;

        if (type === 'row') {
            const { height } = updatePayload as RowProps;
            grid.setRowDefinition(siblingIndex, height, isPixel);
        } else if (type === 'column') {
            const { width } = updatePayload as ColumnProps;
            grid.setColumnDefinition(siblingIndex, width, isPixel);
        }
    }
}
