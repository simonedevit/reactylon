import { Vector3, Vector4 } from '@babylonjs/core';
import { get, setWith } from 'lodash';

export default class ObjectUtils {
    static set(object: any, path: string, value: any, customizer: any = Object) {
        return setWith(object, path, value, customizer);
    }

    static get(object: any, path: string, defaultValue?: any) {
        return get(object, path, defaultValue);
    }

    static isEqualCustomizer(objValue: unknown, objOther: unknown) {
        if (objValue instanceof Vector3 && objOther instanceof Vector3) {
            return objValue.equals(objOther);
        }
        if (objValue instanceof Vector4 && objOther instanceof Vector4) {
            return objValue.equals(objOther);
        }
        return undefined;
    }
}
