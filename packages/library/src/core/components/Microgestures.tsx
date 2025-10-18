import React, { useEffect, useRef } from 'react';
import type { Observer, WebXRAbstractMotionController, WebXRControllerComponent, WebXRInputSource } from '@babylonjs/core';
import { useXrExperience } from '../store';
import '@babylonjs/core/XR/motionController/webXROculusHandController.js';

type MicrogesturesProps = Partial<{
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    onSwipeForward: () => void;
    onSwipeBackward: () => void;
    onTapThumb: () => void;
    onMenu: () => void;
}>;

export const Microgestures: React.FC<MicrogesturesProps> = ({ onSwipeLeft, onSwipeRight, onSwipeForward, onSwipeBackward, onTapThumb, onMenu }) => {
    const xrExperience = useXrExperience();
    const observersRef = useRef<Array<Observer<WebXRInputSource> | Observer<WebXRAbstractMotionController> | Observer<WebXRControllerComponent>>>([]);

    useEffect(() => {
        const onControllerAddedObserver = xrExperience.input.onControllerAddedObservable.add(xrController => {
            const onMotionControllerInitObserver = xrController.onMotionControllerInitObservable.add(motionController => {
                if (onSwipeLeft) {
                    const swipeLeftComponent = motionController.getComponent('swipe-left');
                    const observer = swipeLeftComponent?.onButtonStateChangedObservable.add(() => {
                        if (swipeLeftComponent.pressed) {
                            onSwipeLeft();
                        }
                    });
                    observersRef.current.push(observer);
                }
                if (onSwipeRight) {
                    const swipeRightComponent = motionController.getComponent('swipe-right');
                    const observer = swipeRightComponent?.onButtonStateChangedObservable.add(() => {
                        if (swipeRightComponent.pressed) {
                            onSwipeRight();
                        }
                    });
                    observersRef.current.push(observer);
                }
                if (onSwipeForward) {
                    const swipeForwardComponent = motionController.getComponent('swipe-forward');
                    const observer = swipeForwardComponent?.onButtonStateChangedObservable.add(() => {
                        if (swipeForwardComponent.pressed) {
                            onSwipeForward();
                        }
                    });
                    observersRef.current.push(observer);
                }
                if (onSwipeBackward) {
                    const swipeBackwardComponent = motionController.getComponent('swipe-backward');
                    const observable = swipeBackwardComponent?.onButtonStateChangedObservable.add(() => {
                        if (swipeBackwardComponent.pressed) {
                            onSwipeBackward();
                        }
                    });
                    observersRef.current.push(observable);
                }
                if (onTapThumb) {
                    const tapThumbComponent = motionController.getComponent('tap-thumb');
                    const observer = tapThumbComponent?.onButtonStateChangedObservable.add(() => {
                        if (tapThumbComponent.pressed) {
                            onTapThumb();
                        }
                    });
                    observersRef.current.push(observer);
                }
                if (onMenu) {
                    const menu = motionController.getComponent('menu');
                    const observer = menu?.onButtonStateChangedObservable.add(() => {
                        if (menu.pressed) {
                            onMenu();
                        }
                    });
                    observersRef.current.push(observer);
                }
            });
            observersRef.current.push(onMotionControllerInitObserver);
        });
        observersRef.current.push(onControllerAddedObserver);

        return () => {
            observersRef.current.forEach(observer => {
                observer.remove();
            });
        };
    }, []);

    return null;
};
