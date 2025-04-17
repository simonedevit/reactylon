import type { Vector3, Vector4 } from '@babylonjs/core';
import { isInstanceOf } from '@dvmstudios/reactylon-common';
import lodash from 'lodash';

const { get, setWith } = lodash;

export default class ObjectUtils {
    static set(object: any, path: string, value: any, customizer: any = Object) {
        return setWith(object, path, value, customizer);
    }

    static get(object: any, path: string, defaultValue?: any) {
        return get(object, path, defaultValue);
    }

    static isEqualCustomizer(objValue: unknown, objOther: unknown) {
        if (isInstanceOf(objValue, 'Vector3') && isInstanceOf(objOther, 'Vector3')) {
            return (objValue as Vector3).equals(objOther as Vector3);
        }
        if (isInstanceOf(objValue, 'Vector4') && isInstanceOf(objOther, 'Vector4')) {
            return (objValue as Vector4).equals(objOther as Vector4);
        }
        return undefined;
    }
}
