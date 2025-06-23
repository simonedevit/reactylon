import type { BabylonEntity, RootContainer, UpdatePayload } from '@types';
import type { RowProps, ColumnProps, GuiTriggerable } from '@props';
import { GuiTriggers } from '@props';
import type { Grid as GridType } from '@babylonjs/gui';
import { inventory } from '../../core/inventory';
import type { Vector2WithInfo } from '@babylonjs/gui';
import type { Observable } from '@babylonjs/core';

type GridElement = {
    type: 'row' | 'column';
    index: number;
    props: React.PropsWithChildren<RowProps | ColumnProps>;
    linkedGrid: GridType;
    parent: BabylonEntity<GridType> | GridElement;
};

type GridConstructor = {
    new (...args: any[]): GridType;
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

export class GridHost {
    static createInstance(type: string, Class: any, props: RowProps | ColumnProps, rootContainer: RootContainer) {
        const Grid = inventory.get('grid')?.[0] as GridConstructor;
        const nestedGrid: GridType = new Grid();

        const element = {
            linkedGrid: nestedGrid,
            type,
            index: -1,
            props,
            handlers: {
                addChild: GridHost.addChild,
                removeChild: GridHost.removeChild,
                commitUpdate: GridHost.commitUpdate,
            },
            parent: null,
        };

        handleEvents(props, nestedGrid);
        return element;
    }

    static addChild(parentInstance: BabylonEntity<GridType> | GridElement, child: GridElement): void {
        const { type, props } = child;
        const { isPixel } = props;

        const grid: GridType = (parentInstance as GridElement).linkedGrid ?? parentInstance;
        const parentName = grid.name || 'grid';

        if (type === 'row') {
            const { height } = props as RowProps;
            grid.addRowDefinition(height, isPixel);

            const rowIndex = grid.rowCount - 1;
            child.linkedGrid.name = `${parentName}-row-${rowIndex}`;
            grid.addControl(child.linkedGrid, rowIndex, 0);

            child.index = rowIndex;
        } else if (type === 'column') {
            const { width } = props as ColumnProps;
            grid.addColumnDefinition(width, isPixel);

            const colIndex = grid.columnCount - 1;
            child.linkedGrid.name = `${parentName}-col-${colIndex}`;
            grid.addControl(child.linkedGrid, 0, colIndex);

            child.index = colIndex;
        }

        // save parent to operate on it in commitUpdate
        child.parent = parentInstance;
    }

    static removeChild(parentInstance: BabylonEntity<GridType> | GridElement, child: GridElement): void {
        const { type, index } = child;
        const grid: GridType = (parentInstance as GridElement).linkedGrid ?? parentInstance;

        if (type === 'row') {
            grid.removeRowDefinition(index);
        } else if (type === 'column') {
            grid.removeColumnDefinition(index);
        }
    }

    static prepareUpdate(): UpdatePayload {
        return {};
    }

    static commitUpdate(instance: GridElement, updatePayload: UpdatePayload): void {
        const { type, index, parent } = instance;
        const { isPixel } = updatePayload as RowProps | ColumnProps;

        const grid: GridType = (parent as GridElement).linkedGrid ?? parent;

        if (type === 'row') {
            const { height } = updatePayload as RowProps;
            grid.setRowDefinition(index, height, isPixel);
        } else if (type === 'column') {
            const { width } = updatePayload as ColumnProps;
            grid.setColumnDefinition(index, width, isPixel);
        }
    }
}
