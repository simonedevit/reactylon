import type { Scene } from '@babylonjs/core';
import { type TransformKeys, BabylonElements } from '@props';

export const BabylonElementsRetrievalMap: Record<BabylonElements, keyof Scene> = {
    [BabylonElements.MESH]: 'getMeshByName',
    [BabylonElements.NODE]: 'getNodeByName',
    [BabylonElements.LIGHT]: 'getLightByName',
    [BabylonElements.CAMERA]: 'getCameraByName',
    [BabylonElements.TEXTURE]: 'getTextureByName',
    [BabylonElements.MATERIAL]: 'getMaterialByName',
};

export const TransformKeysMap: TransformKeys = {
    positionX: 'position.x',
    positionY: 'position.y',
    positionZ: 'position.z',
    rotationX: 'rotation.x',
    rotationY: 'rotation.y',
    rotationZ: 'rotation.z',
    scalingX: 'scaling.x',
    scalingY: 'scaling.y',
    scalingZ: 'scaling.z',
};
