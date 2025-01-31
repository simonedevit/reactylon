import { ComponentInstance, RootContainer } from '@types';
import { Host } from './Host';
import { CameraProps, CoreHostProps, WebXRCameraProps } from '@props';
import { WebXRCamera } from '@babylonjs/core';
import { BabylonPackages } from '@dvmstudios/reactylon-common';

export class CameraHost {
    static createInstance(type: string, isBuilder: boolean, Class: any, props: CoreHostProps<WebXRCameraProps & CameraProps>, rootContainer: RootContainer) {
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
                        };
                    }

                    // execute custom code as soon the object is created
                    props.onCreate?.(webXRCamera);
                    return webXRCamera;
                }
            }
        }
        const camera = Host.createInstance(type, isBuilder, Class, props, rootContainer);
        camera.handlers = {};

        const { isMultipleCanvas, isMultipleScene, canvas } = rootContainer;
        if (isMultipleCanvas) {
            const { engine, scene } = rootContainer;
            if (isMultipleScene) {
                const view = (engine.views || []).find(view => view.target === canvas);
                if (view) {
                    engine.unRegisterView(canvas as HTMLCanvasElement);
                }
                engine.registerView(canvas as HTMLCanvasElement, camera);
            } else {
                const canvas = props.canvas!;
                engine.registerView(canvas, camera);
                canvas.onclick = () => {
                    if (scene.activeCamera !== camera) {
                        scene.activeCamera?.detachControl();
                        engine.inputElement = canvas;
                        scene.activeCamera = camera;
                        camera.attachControl();
                    }
                };
            }
        }

        return camera;
    }
}
