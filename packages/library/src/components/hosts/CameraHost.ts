import { ComponentInstance, RootContainer } from '@types';
import { Host } from './Host';
import { CoreHostProps, WebXRCameraProps } from '@props';
import { WebXRCamera } from '@babylonjs/core';
import { BabylonPackages } from '@dvmstudios/reactylon-common';

export class CameraHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps<WebXRCameraProps>, rootContainer: RootContainer) {
        if (Class.name === WebXRCamera.name) {
            const { isManual, ...rest } = props;
            // camera created by XR default experience
            if (!isManual) {
                const webXRCamera = rootContainer.xrExperience?.baseExperience.camera;
                if (webXRCamera) {
                    Object.keys(rest).forEach(_key => {
                        const key = _key as keyof typeof props;
                        const value = props[key];
                        (webXRCamera as ComponentInstance<any>)[key] = value;
                    });

                    // use metadata to store children in reconciler
                    if (!webXRCamera.metadata) {
                        webXRCamera.metadata = {
                            babylonPackage: BabylonPackages.CORE,
                            props,
                        };
                    }

                    // execute custom code as soon the object is created
                    props.onCreate?.(webXRCamera);
                    return webXRCamera;
                }
            }
        }
        const element = Host.createInstance(type, isBuilder, Class, props, rootContainer);
        element.handlers = {};
        return element;
    }
}
