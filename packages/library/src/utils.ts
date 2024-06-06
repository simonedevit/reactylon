import { Vector3 } from '@babylonjs/core';

export function isEqualCustomizer(objValue: unknown, objOther: unknown) {
    if (objValue instanceof Vector3 && objOther instanceof Vector3) {
        return objValue.equals(objOther);
    }
    return undefined;
}
