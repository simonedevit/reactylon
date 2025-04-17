import type { ActionEvent, HighlightLayer, Node, Observable, Scene, StandardMaterial } from '@babylonjs/core';
import type { Either } from './types';
import type { AdvancedDynamicTexture, Vector2WithInfo } from '@babylonjs/gui';
import { ActionManager } from '@babylonjs/core/Actions/actionManager.js';

type TransformType = 'position' | 'rotation' | 'scaling';
type Axis = 'X' | 'Y' | 'Z';
export type TransformKeys = Record<`${TransformType}${Axis}`, `${TransformType}.${Lowercase<Axis>}`>;
export type TransformProps = Record<`${TransformType}${Axis}`, number>;

export enum BabylonElements {
    MESH = 0,
    NODE = 1,
    LIGHT = 2,
    CAMERA = 3,
    TEXTURE = 4,
    MATERIAL = 5,
}

/* Define here the custom props and add them in JSX namespace */

export type CommonProps<T = unknown> = Partial<TransformProps> & {
    binding?: T;
    onCreate?: (element: T) => void;
    scene?: Scene; // used for multiple scenes
    propertiesFrom?: Array<{
        property: string;
        source: string;
        type: BabylonElements;
    }>;
};

export enum GuiTriggers {
    onPointerMove = 'onPointerMoveObservable',
    onPointerEnter = 'onPointerEnterObservable',
    onPointerOut = 'onPointerOutObservable',
    onPointerDown = 'onPointerDownObservable',
    onPointerUp = 'onPointerUpObservable',
    onPointerClick = 'onPointerClickObservable',
    onClipboard = 'onClipboardObservable',
}

export type GuiTriggerable = {
    [key in keyof typeof GuiTriggers]?: Parameters<Observable<Vector2WithInfo>['add']>[0];
};

export enum MeshTriggers {
    onPick = ActionManager.OnPickTrigger,
    onDoublePick = ActionManager.OnDoublePickTrigger,
    onPickDown = ActionManager.OnPickDownTrigger,
    onPickUp = ActionManager.OnPickUpTrigger,
    onPickOut = ActionManager.OnPickOutTrigger,
    onLeftPick = ActionManager.OnLeftPickTrigger,
    onRightPick = ActionManager.OnRightPickTrigger,
    onCenterPick = ActionManager.OnCenterPickTrigger,
    onLongPress = ActionManager.OnLongPressTrigger,
    onPointerOver = ActionManager.OnPointerOverTrigger,
    onPointerOut = ActionManager.OnPointerOutTrigger,
    onIntersectionEnter = ActionManager.OnIntersectionEnterTrigger,
    onIntersectionExit = ActionManager.OnIntersectionExitTrigger,
}

// only meshes
export type Triggerable = {
    [key in keyof typeof MeshTriggers]?: (evt: ActionEvent) => void;
} & {
    // only with onIntersectionEnter and onIntersectionExit
    intersectionMeshId?: string;
};

export type Clonable = {
    cloneFrom: string;
};

// only meshes
export type Instanceable = {
    instanceFrom: string;
};

export type TextureProps = {
    // add here other textures when you study them, (string & {}) is used to allow also strings without losing typing
    kind:
        | keyof Pick<
              StandardMaterial,
              | 'diffuseTexture'
              | 'specularTexture'
              | 'emissiveTexture'
              | 'ambientTexture'
              | 'bumpTexture'
              | 'opacityTexture'
              | 'reflectionTexture'
              | 'refractionTexture'
              | 'detailMap'
          >
        | (string & {});
};

type CreateFullscreeUIOptions = {
    createFullscreenUI: {
        name: Parameters<typeof AdvancedDynamicTexture.CreateFullscreenUI>[0];
        foreground?: Parameters<typeof AdvancedDynamicTexture.CreateFullscreenUI>[1];
        scene?: Parameters<typeof AdvancedDynamicTexture.CreateFullscreenUI>[2];
        sampling?: Parameters<typeof AdvancedDynamicTexture.CreateFullscreenUI>[3];
        adaptiveScaling?: Parameters<typeof AdvancedDynamicTexture.CreateFullscreenUI>[4];
    };
};

type CreateForMeshOptions = {
    createForMesh: {
        mesh: string;
        width?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[1];
        height?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[2];
        supportPointerMove?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[3];
        onlyAlphaTesting?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[4];
        invertY?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[5];
        materialSetupCallback?: Parameters<typeof AdvancedDynamicTexture.CreateForMesh>[6];
    };
};

export type AdvancedDynamicTextureProps = Either<CreateFullscreeUIOptions, CreateForMeshOptions> & {
    kind: 'createFullscreenUI' | 'createForMesh';
};

export type LightProps = Clonable;

export type CameraProps = {
    // only for multiple canvas and single scene
    canvas?: HTMLCanvasElement;
};

export type WebXRCameraProps = {
    // not from XR default experience helper
    isManual?: boolean;
};

export type MaterialProps = Partial<Clonable> & {
    assignTo?: Array<string>;
};

// you don't need to add it to JSX namespace because it is dynamically done in generator (due to multitude of mesh components)
export type MeshProps = Either<Clonable, Instanceable> &
    Triggerable & {
        // highlight layer props
        highlightLayer?: {
            color: Parameters<HighlightLayer['addMesh']>[1];
            glowEmissiveOnly?: Parameters<HighlightLayer['addMesh']>[2];
        };
        // add here other mesh props (e.g. "onDrag")
    };

export type GuiProps =
    /*Either<Clonable, Instanceable> &*/
    GuiTriggerable & {
        // add here other gui props
    };

// MinimalHostProps don't contain JSXElements[keyof JSXElements] to avoid long TypeScript checking times, but image it like it (useful representation for Host.ts and GuiHost.ts)
type MinimalHostProps = CommonProps & Pick<Node, 'name'>;
export type CoreHostProps<T = undefined> = T extends undefined ? MinimalHostProps : MinimalHostProps & T;
export type GuiHostProps<T = undefined> = (T extends undefined ? MinimalHostProps : MinimalHostProps & T) & GuiProps;
