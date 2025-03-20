import { version } from 'react';
import ReactReconciler, { FiberRoot } from 'react-reconciler';
import { DefaultEventPriority, NoEventPriority } from 'react-reconciler/constants';
import * as BabylonCore from '@babylonjs/core';
import * as BabylonGui from '@babylonjs/gui';
import lodash from 'lodash';
import { Logger, ReversedCollidingComponents, capitalizeFirstLetter, BabylonPackages } from '@dvmstudios/reactylon-common';
import { type ComponentInstance, type UpdatePayload, type RootContainer, type EngineContext, ComponentInstanceDependent } from '@types';
import { Host, MaterialHost, TextureHost, MeshHost, AdvancedDynamicTextureHost, GuiHost, LightHost, CameraHost /*, TransformNodeHost*/ } from './components/hosts';
import ObjectUtils from '@utils/ObjectUtils';
import { BabylonElementsRetrievalMap, TransformKeysMap } from '@constants';
import { CoreHostProps, GuiHostProps } from '@props';

const IS_REACT_19 = version.startsWith('19');

type CommitUpdateV19 = [ComponentInstance, string, CoreHostProps | GuiHostProps, CoreHostProps | GuiHostProps, any];
type EventPriority = any;

const { isEqualWith } = lodash;

function isParentNeeded(parentInstance: ComponentInstance, child: ComponentInstance) {
    if (child instanceof BabylonCore.Material) {
        return false;
    }
    if (child instanceof BabylonCore.BaseTexture) {
        return false;
    }
    if (parentInstance instanceof BabylonCore.HighlightLayer) {
        return false;
    }
    return true;
}

// metadata.children contains the children of current instance, "metadata" attribute will be skipped from
// deep copy of a mesh (during clone for instance), see more:
// https://github.com/BabylonJS/Babylon.js/blob/master/packages/dev/core/src/Meshes/mesh.ts#L578 - _copySource

function addChild(parentInstance: ComponentInstance, child: ComponentInstance) {
    // Append the child to the parent element
    if (parentInstance) {
        if (!child) {
            Logger.error(`addChild - undefined child`);
        } else {
            if (!parentInstance.metadata.children) {
                parentInstance.metadata.children = [];
            }
            child.handlers?.addChild?.(parentInstance, child);
            parentInstance.metadata.children.push(child);
            if (child.metadata.babylonPackage === BabylonPackages.CORE) {
                if (isParentNeeded(parentInstance, child)) {
                    //@ts-ignore - meshes, cameras, lights, transform nodes, skeletons have .setParent method
                    child.parent = parentInstance;
                } else {
                    if (parentInstance instanceof BabylonCore.HighlightLayer) {
                        // reactylon internal purpose for MeshHost
                        child.metadata.parent = parentInstance;
                    }
                }
            }
        }
    }
}

function removeChild(parentInstance: ComponentInstance, child: ComponentInstance) {
    Logger.group('removeChild', [
        [`parentInstance: ${parentInstance.name}`, parentInstance],
        [`child: ${child.name}`, child],
    ]);
    // remove recursively children
    if (child.metadata?.children) {
        child.metadata.children.forEach((c: ComponentInstance) => removeChild(child, c));
    }
    const index = parentInstance.metadata.children.findIndex(item => item.uniqueId === child.uniqueId);
    parentInstance.metadata.children.splice(index, 1);
    child.handlers?.removeChild?.(parentInstance, child);
    //const disposeMaterialsAndTextures = shouldDisposeMaterialsAndTextures(child);
    //child.dispose?.(false, disposeMaterialsAndTextures);
    child.dispose?.();
}

/* function shouldDisposeMaterialsAndTextures(child: unknown) {
    if (child instanceof BabylonCore.AbstractMesh) {
        // no material (i.e. "default material")
        if (!child.material) {
            return false;
        }
        const associatedMeshesToMaterial = Object.values(child.material.meshMap!);
        // material associated to multple meshes
        if (associatedMeshesToMaterial.length > 1) {
            return false;
        }
        // material is associated to one mesh but not the current (instance) we are removing
        if (associatedMeshesToMaterial[0]?.id !== child.id) {
            return false;
        }
    }
    return true;
} */

function prepareUpdate(instance: ComponentInstance, type: string, oldProps: CoreHostProps | GuiHostProps, newProps: CoreHostProps | GuiHostProps, internalHandle: any) {
    //TODO: exclude constructor props (only if they are not also non-constructor props)
    //TODO: fine tune ObjectUtils.isEqualCustomizer to avoid unnecessary rerenders

    //@ts-ignore
    const { children: _oldChildren, ...oldPropsWihoutChildren } = oldProps;
    //@ts-ignore
    const { children: _newChildren, ...newPropsWihoutChildren } = newProps;
    const areSameProps = isEqualWith(oldPropsWihoutChildren, newPropsWihoutChildren, ObjectUtils.isEqualCustomizer);
    if (areSameProps) {
        Logger.log(`prepareUpdate (no changes) - ${type}: ${instance.name}`);
        // no need to update
        return null;
    }
    Logger.group(`prepareUpdate (changes) - ${type}: ${instance.name}`, [
        ['oldProps', oldPropsWihoutChildren],
        ['newProps', newPropsWihoutChildren],
    ]);
    let propertiesFromProps = {};
    // propertiesFromProps
    if (newPropsWihoutChildren.propertiesFrom) {
        // @ts-expect-error - get scene from internal _scene attribute because with new reconciler (0.31.0) you don't have rootContainer anymore
        const scene = instance._scene;
        propertiesFromProps = newPropsWihoutChildren.propertiesFrom.reduce(
            (props, { property, source, type }) => {
                const sourceElement = scene[BabylonElementsRetrievalMap[type]](source);
                props[property] = sourceElement[property];
                return props;
            },
            {} as Record<string, unknown>,
        );
    }
    //TODO: return only changed props - should i remove propertiesFrom from newPropsWihoutChildren?
    return { ...newPropsWihoutChildren, ...propertiesFromProps } as UpdatePayload;
}

/**
 * A closure function to create a React reconciler.
 * This function allows the creation of a React reconciler with its own internal state, which can be used independently across different instances.
 *
 * @returns ReactReconciler.Reconciler
 */
function createReconciler() {
    let currentUpdatePriority: number = NoEventPriority;

    return ReactReconciler<
        string,
        CoreHostProps | GuiHostProps,
        RootContainer,
        ComponentInstance,
        ComponentInstance,
        ComponentInstance,
        unknown,
        unknown,
        unknown,
        UpdatePayload,
        ComponentInstance,
        unknown,
        unknown
    >({
        supportsMutation: true,

        /*
         * This method should return a newly created node. For example, the DOM renderer would call document.createElement(type) here and then set the properties from props.
         * You can use rootContainer to access the root container associated with that tree. For example, in the DOM renderer, this is useful to get the correct document reference that the root belongs to.
         * The hostContext parameter lets you keep track of some information about your current place in the tree. To learn more about it, see getChildHostContext below.
         * The internalHandle data structure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
         * This method happens in the render phase. It can (and usually should) mutate the node it has just created before returning it, but it must not modify any other nodes. It must not register any event handlers on the parent tree. This is because an instance being created doesn't guarantee it would
         * be placed in the tree — it could be left unused and later collected by GC. If you need to do something when an instance is definitely in the tree, look at commitMount instead.
         */
        createInstance(type, props, rootContainer, hostContext, internalHandle) {
            Logger.log(`createInstance - ${type}: ${props.name}`);
            let Class = null;
            let isBuilder = false;
            let babylonPackage: BabylonPackages = BabylonPackages.CORE;
            const BabylonElement = capitalizeFirstLetter(type);
            // @babylonjs/gui
            if (BabylonElement in BabylonGui || (type in ReversedCollidingComponents && type !== 'text3D' && type !== 'polygon3D')) {
                babylonPackage = BabylonPackages.GUI;
                //@ts-ignore
                Class = BabylonGui[BabylonElement] || BabylonGui[ReversedCollidingComponents[type]];
            }
            // @babylonjs/core
            else {
                const ResolvedBabylonElement = ReversedCollidingComponents[type] || BabylonElement;
                // MeshBuilder.Create
                if (`Create${ResolvedBabylonElement}` in BabylonCore.MeshBuilder) {
                    //@ts-ignore
                    Class = BabylonCore.MeshBuilder[`Create${ResolvedBabylonElement}`];
                    isBuilder = true;
                } else {
                    // MeshBuilder.ExtrudePolygon
                    if (ResolvedBabylonElement === 'ExtrudePolygon') {
                        isBuilder = true;
                    }
                    //@ts-ignore
                    Class = BabylonCore[ResolvedBabylonElement];
                }
            }
            let createInstanceFn: Function;

            switch (babylonPackage) {
                case BabylonPackages.CORE:
                    createInstanceFn = Host.createInstance;
                    if (isBuilder || BabylonElement === 'Mesh') {
                        createInstanceFn = MeshHost.createInstance;
                    } else if (Class.prototype instanceof BabylonCore.Material) {
                        createInstanceFn = MaterialHost.createInstance;
                    } else if (Class.prototype instanceof BabylonCore.BaseTexture) {
                        createInstanceFn = TextureHost.createInstance;
                    } else if (Class.prototype instanceof BabylonCore.Light) {
                        createInstanceFn = LightHost.createInstance;
                    } else if (Class.prototype instanceof BabylonCore.Camera) {
                        createInstanceFn = CameraHost.createInstance;
                    } else if (Class.name === BabylonCore.PhysicsAggregate.name) {
                        return {
                            isParentDependent: true,
                            // @ts-ignore
                            createInstanceFn: (transformNode: BabylonCore.TransformNode) => Host.createInstance(type, isBuilder, Class, { ...props, transformNode }, rootContainer),
                        };
                    }
                    /* else if (Class.name === BabylonCore.TransformNode.name) {
                        createInstanceFn = TransformNodeHost.createInstance;
                    }*/
                    break;
                case BabylonPackages.GUI:
                    createInstanceFn = GuiHost.createInstance;
                    if (Class.prototype instanceof BabylonCore.DynamicTexture) {
                        createInstanceFn = AdvancedDynamicTextureHost.createInstance;
                        isBuilder = true;
                    }
                    break;
            }
            return createInstanceFn(type, isBuilder, Class, props, rootContainer);
        },

        /*
         * Same as createInstance, but for text nodes. If your renderer doesn't support text nodes, you can throw here.

        createTextInstance(text, rootContainer, hostContext, internalHandle) {
            console.log('Created text instance:', text);
            // Create a new text node with the provided text content
            // return document.createTextNode(text);
        },
        */

        /*
         * This method should mutate the parentInstance and add the child to its list of children.For example, in the DOM this would translate to a parentInstance.appendChild(child) call.
         * This method happens in the render phase.It can mutate parentInstance and child, but it must not modify any other nodes.It's called while the tree is still being built up and not connected to the actual tree on the screen.
         */

        appendInitialChild(parentInstance, child: ComponentInstance<ComponentInstanceDependent>) {
            // delayed instance creation until you have the parent
            const { isParentDependent, createInstanceFn } = child;
            if (isParentDependent) {
                child = createInstanceFn(parentInstance);
            }
            // Log information about appending initial child to parent
            Logger.group('appendInitialChild', [
                [`parentInstance: ${parentInstance.name}`, parentInstance],
                [`child: ${child.name}`, child],
            ]);
            addChild(parentInstance, child);
        },

        /*
         * In this method, you can perform some final mutations on the instance.Unlike with createInstance, by the time finalizeInitialChildren is called, all the initial children have already been added to the instance, but the instance itself has not yet been connected to the tree on the screen.
         * This method happens in the render phase.It can mutate instance, but it must not modify any other nodes.It's called while the tree is still being built up and not connected to the actual tree on the screen.
         * There is a second purpose to this method.It lets you specify whether there is some work that needs to happen when the node is connected to the tree on the screen.If you return true, the instance will receive a commitMount call later.See its documentation below.
         * If you don't want to do anything here, you should return false.
         */
        finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
            Logger.log(`finalizeInitialChildren - ${type}: ${instance.name}`);
            return false;
        },

        /*
         * Some target platforms support setting an instance's text content without manually creating a text node. For example, in the DOM, you can set node.textContent instead of creating a text node and appending it.
         * If you return true from this method, React will assume that this node's children are text, and will not create nodes for them. It will instead rely on you to have filled that text during createInstance. This is a performance optimization. For example, the DOM renderer returns true only if type is a known text-only parent (like 'textarea') or if props.children has a 'string' type. If you return true, you will need to implement resetTextContent too.
         * If you don't want to do anything here, you should return false.
         * This method happens in the render phase.Do not mutate the tree from it.
         */
        shouldSetTextContent(type, props) {
            return false;
        },
        /*
         * This method lets you return the initial host context from the root of the tree.See getChildHostContext for the explanation of host context.
         * If you don't intend to use host context, you can return null.
         * This method happens in the render phase.Do not mutate the tree from it.
         */
        getRootHostContext(rootContainer) {
            return rootContainer;
            /* return {
                type: `root-container`
            } */
        },

        /*
         * Host context lets you track some information about where you are in the tree so that it's available inside createInstance as the hostContext parameter. For example, the DOM renderer uses it to track whether it's inside an HTML or an SVG tree, because createInstance implementation needs to be different for them.
         * If the node of this type does not influence the context you want to pass down, you can return parentHostContext.Alternatively, you can return any custom object representing the information you want to pass down.
         * If you don't want to do anything here, return parentHostContext.
         * This method happens in the render phase.Do not mutate the tree from it.
         */
        getChildHostContext(parentHostContext, type, rootContainer) {
            // return what you want to pass to immediate child
            return null;
            /* return {
                type: `${type}-custom-child`
            } */
        },

        /*
         * Determines what object gets exposed as a ref. You'll likely want to return the instance itself. But in some cases it might make sense to only expose some part of it.
         * If you don't want to do anything here, return instance.
         */
        getPublicInstance(instance) {
            return instance;
        },

        /*
         * This method lets you store some information before React starts making changes to the tree on the screen.For example, the DOM renderer stores the current text selection so that it can later restore it.This method is mirrored by resetAfterCommit.
         * Even if you don't want to do anything here, you need to return null from it.
         */
        prepareForCommit(containerInfo) {
            return null;
        },

        /*
         * This method is called right after React has performed the tree mutations.You can use it to restore something you've stored in prepareForCommit — for example, text selection.
         * You can leave it empty.
         */
        resetAfterCommit(containerInfo) {
            return null;
        },

        /*
         * This method is called for a container that's used as a portal target. Usually you can leave it empty..
         */
        // preparePortalMount(containerInfo) { return null},

        /*
         * You can proxy this to setTimeout or its equivalent in your environment.
         */
        // scheduleTimeout(fn, delay) { return null  },

        /*
         * You can proxy this to clearTimeout or its equivalent in your environment.
         */
        // cancelTimeout(id) { return null },

        /*
         * This is a property(not a function) that should be set to something that can never be a valid timeout ID.For example, you can set it to -1.
         */
        // noTimeout: -1,

        /*
         * Set this to true to indicate that your renderer supports scheduleMicrotask.We use microtasks as part of our discrete event implementation in React DOM.If you're not sure if your renderer should support this, you probably should. The option to not implement scheduleMicrotask exists so that platforms with more control over user events, like React Native, can choose to use a different mechanism.
         */
        // supportsMicrotasks: true,

        /*
         * Optional.You can proxy this to queueMicrotask or its equivalent in your environment.
         */
        // scheduleMicrotask(fn) { },

        /*
         * This is a property(not a function) that should be set to true if your renderer is the main one on the page.For example, if you're writing a renderer for the Terminal, it makes sense to set it to true, but if your renderer is used on top of React DOM or some other existing renderer, set it to false.
         */
        isPrimaryRenderer: false,

        /*
         * To implement this method, you'll need some constants available on the special react-reconciler/constants entry point (check documentation)
         */
        // getCurrentEventPriority() { return null },

        setCurrentUpdatePriority(newPriority: number): void {
            currentUpdatePriority = newPriority;
        },

        getCurrentUpdatePriority() {
            return currentUpdatePriority;
        },

        resolveUpdatePriority(): EventPriority {
            return currentUpdatePriority || DefaultEventPriority;
        },

        /*
         * This method should mutate the parentInstance and add the child to its list of children.For example, in the DOM this would translate to a parentInstance.appendChild(child) call.
         * Although this method currently runs in the commit phase, you still should not mutate any other nodes in it.If you need to do some additional work when a node is definitely connected to the visible tree, look at commitMount.
         */
        appendChild(parentInstance, child) {
            // Log information about appending child to parent
            Logger.group('appendChild', [
                [`parentInstance: ${parentInstance.name}`, parentInstance],
                [`child: ${child.name}`, child],
            ]);
            addChild(parentInstance, child);
        },

        /*
         * Same as appendChild, but for when a node is attached to the root container.This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        appendChildToContainer(container, child) {
            // Log information about appending child to container
            Logger.group('appendChildToContainer', [
                ['container', container],
                [`child: ${child.name}`, child],
            ]);
            if (child) {
                if (container) {
                    container.metadata.children.push(child);
                    // FIXME: should i add the parent also?
                } else {
                    // INVESTIGATION: what kind of node is outside container?
                    addChild(container, child);
                }
            }
        },

        /*
         * This method should mutate the parentInstance and place the child before beforeChild in the list of its children.For example, in the DOM this would translate to a parentInstance.insertBefore(child, beforeChild) call.
         * Note that React uses this method both for insertions and for reordering nodes.Similar to DOM, it is expected that you can call insertBefore to reposition an existing child.Do not mutate any other parts of the tree from it.
         */
        insertBefore(parentInstance, child, beforeChild) {
            Logger.group('insertBefore', [
                [`parentInstance: ${parentInstance.name}`, parentInstance],
                [`child: ${child.name}`, child],
                [`beforeChild: ${beforeChild.name}`, beforeChild],
            ]);
            const index = parentInstance.metadata.children.findIndex(item => item.uniqueId === beforeChild.uniqueId);
            parentInstance.metadata.children.splice(index, 0, child);
            child.handlers?.addChild?.(parentInstance, child);
        },

        /*
         * Same as insertBefore, but for when a node is attached to the root container.This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        insertInContainerBefore(container, child, beforeChild) {
            Logger.group('insertInContainerBefore', [
                ['container', container],
                [`child: ${child.name}`, child],
                [`beforeChild: ${beforeChild.name}`, beforeChild],
            ]);
            const index = container.metadata.children.findIndex(item => item.uniqueId === beforeChild.uniqueId);
            container.metadata.children.splice(index, 0, child);
            child.handlers?.addChild?.(container, child);
        },

        /*
         * This method should mutate the parentInstance to remove the child from the list of its children.
         * React will only call it for the top - level node that is being removed.It is expected that garbage collection would take care of the whole subtree.You are not expected to traverse the child tree in it.
         */
        removeChild(parentInstance, child) {
            removeChild(parentInstance, child);
        },

        /*
         * Same as removeChild, but for when a node is detached from the root container.This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        removeChildFromContainer(container, child) {
            Logger.group('removeChildFromContainer', [
                ['container', container],
                [`child: ${child.name}`, child],
            ]);
            // remove recursively children
            if (child.metadata?.children) {
                child.metadata.children.forEach((c: ComponentInstance) => removeChild(child, c));
            }
            const index = container.metadata.children.findIndex(item => item.uniqueId === child.uniqueId);
            container.metadata.children.splice(index, 1);
            child.handlers?.removeChild?.(container, child);
            //const disposeMaterialsAndTextures = shouldDisposeMaterialsAndTextures(child);
            //child.dispose?.(false, disposeMaterialsAndTextures);
            child.dispose?.();
        },

        /*
         * If you returned true from shouldSetTextContent for the previous props, but returned false from shouldSetTextContent for the next props, React will call this method so that you can clear the text content you were managing manually.For example, in the DOM you could set node.textContent = ''.
         * If you never return true from shouldSetTextContent, you can leave it empty.
         */
        // resetTextContent(instance) { },

        /*
         * This method should mutate the textInstance and update its text content to nextText.
         * Here, textInstance is a node created by createTextInstance.
         */
        // commitTextUpdate(textInstance, prevText, nextText) { },

        /*
         * This method is only called if you returned true from finalizeInitialChildren for this instance.
         * It lets you do some additional work after the node is actually attached to the tree on the screen for the first time.For example, the DOM renderer uses it to trigger focus on nodes with the autoFocus attribute.
         * Note that commitMount does not mirror removeChild one to one because removeChild is only called for the top - level removed node.This is why ideally commitMount should not mutate any nodes other than the instance itself.For example, if it registers some events on some node above, it will be your responsibility to traverse the tree in removeChild and clean them up, which is not ideal.
         * The internalHandle data structure is meant to be opaque.If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions.You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
         * If you never return true from finalizeInitialChildren, you can leave it empty.
         */
        // commitMount(instance, type, props, internalHandle) { },

        /*
         * React 19 (reconciler 0.31.0)
         * This method doesn't exist anymore, updatePayload will be calculated into commitUpdate method

         * React 18 (reconciler 0.29.2)
         * React calls this method so that you can compare the previous and the next props, and decide whether you need to update the underlying instance or not.
         * If you don't need to update it, return null. If you need to update it, you can return an arbitrary object representing the changes that need to happen.
         * Then in commitUpdate you would need to apply those changes to the instance.
         * This method happens in the render phase. It should only calculate the update — but not apply it! For example, the DOM renderer returns an array that looks
         * like [prop1, value1, prop2, value2, ...] for all props that have actually changed. And only in commitUpdate it applies those changes. You should calculate
         * as much as you can in prepareUpdate so that commitUpdate can be very fast and straightforward.
         */

        // @ts-expect-error - @types/react-reconciler doesn't define new types (where for reconciler >= 0.31.0 prepareUpdate doesn't exist)
        prepareUpdate: IS_REACT_19 ? undefined : prepareUpdate,

        /*
        * React 19 (reconciler 0.31.0)
        * Same ad React 18 (see below) but the updatePayload is not returned anymore from prepareUpdate method (removed from react-reconciler with version 0.31.0) but it is calulated from 
        * prepareUpdate standalone function (it isn't reconciler function but a replica). Casting is required because @types/react-reconciler doesn't expose the new commitUpdate signature
        * (the signature without updatePayload parameter) 

        * React 18 (reconciler 0.29.2)
        * This method should mutate the instance according to the set of changes in updatePayload. Here, updatePayload is the object that you've returned from prepareUpdate and has an arbitrary structure
        * that makes sense for your renderer. For example, the DOM renderer returns an update payload like [prop1, value1, prop2, value2, ...] from prepareUpdate, and that structure gets passed into commitUpdate.
        * Ideally, all the diffing and calculation should happen inside prepareUpdate so that commitUpdate can be fast and straightforward.
        * The internalHandle data soldPropstructure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.

        */

        commitUpdate(...args) {
            const instance = args[0];
            let updatePayload, type, prevProps, nextProps, internalHandle;
            if (IS_REACT_19) {
                const commitUpdateArguments = args as unknown as CommitUpdateV19;
                type = commitUpdateArguments[1];
                prevProps = commitUpdateArguments[2];
                nextProps = commitUpdateArguments[3];
                internalHandle = commitUpdateArguments[4];
                updatePayload = prepareUpdate(instance, type, prevProps, nextProps, internalHandle);
            } else {
                updatePayload = args[1];
                type = args[2];
                prevProps = args[3];
                nextProps = args[4];
                internalHandle = args[5];
            }
            Logger.log(`commitUpdate - ${type}: ${instance.name}`);

            if (updatePayload) {
                Object.entries(updatePayload)
                    .filter(([key]) => key !== 'children' && key !== 'propertiesFrom')
                    .forEach(([_key, value]) => {
                        const key = _key as keyof ComponentInstance;
                        if (key in TransformKeysMap) {
                            if (instance.metadata.babylonPackage === BabylonPackages.CORE) {
                                ObjectUtils.set(instance, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
                            } else if (instance.metadata.babylonPackage === BabylonPackages.GUI) {
                                //@ts-ignore .node_parent is the anchor element created by instance.linkToTransformNode(anchor)
                                ObjectUtils.set(instance._node.parent || instance, TransformKeysMap[key as keyof typeof TransformKeysMap], value);
                            }
                        } else {
                            //@ts-ignore
                            instance[key] = value;
                        }
                    });
                instance.handlers?.commitUpdate?.(instance, updatePayload);
            }
        },

        /*
         * This method should make the instance invisible without removing it from the tree.For example, it can apply visual styling to hide it.It is used by Suspense to hide the tree while the fallback is visible.
         */
        // hideInstance(instance) { },

        /*
        Same as hideInstance, but for nodes created by createTextInstance.
        */
        // hideTextInstance(textInstance) { },

        /*
         * This method should make the instance visible, undoing what hideInstance did.
         */
        // unhideInstance(instance, props) { },

        /*
         * Same as unhideInstance, but for nodes created by createTextInstance.
         */
        // unhideTextInstance(textInstance, text) { },

        /*
         * This method should mutate the container root node and remove all children from it.
         */
        clearContainer(container) {
            return null;
        },

        /*
         * This method is called during render to determine if the Host Component type and props require some kind of loading process to complete before committing an update.
         */
        maySuspendCommit() {
            return false;
        },

        /*
         * This method may be called during render if the Host Component type and props might suspend a commit.It can be used to initiate any work that might shorten the duration of a suspended commit.
         */
        //@ts-ignore
        preloadInstance(type: unknown, props: unknown) {
            return true;
        }, // Return true to indicate it's already loaded

        /*
         * This method is called just before the commit phase.Use it to set up any necessary state while any Host Components that might suspend this commit are evaluated to determine if the commit must be suspended.
         */
        // startSuspendingCommit() { return null  },

        /*
         * This method is called after startSuspendingCommit for each Host Component that indicated it might suspend a commit.
         */
        // suspendInstance(type, props) { return null  },

        /*
         * This method is called after all suspendInstance calls are complete.
         * Return null if the commit can happen immediately.
         * Return(initiateCommit: Function) => Function if the commit must be suspended.The argument to this callback will initiate the commit when called.The return value is a cancellation function that the Reconciler can use to abort the commit.
         */
        // waitForCommitToBeReady() { return null }

        detachDeletedInstance(instance) {},
    });
}

type ReactylonHandler = {
    render: (element: any, rootContainer: RootContainer) => void;
    unmount: (rootContainer: RootContainer, disposeEngine: EngineContext['disposeEngine']) => void;
};

export const roots = new Map<any, FiberRoot>();

const Reactylon = (): ReactylonHandler => {
    const reconciler = createReconciler();
    return {
        render: (element, rootContainer) => {
            let root = roots.get(rootContainer);
            // first render
            if (!root) {
                // Create a container using the reconciler's createContainer method
                // @ts-expect-error - @types/react-reconciler doesn't define new types (where for reconciler >= 0.31.0 arguments of createContainer are 10 and not 8)
                root = reconciler.createContainer(rootContainer, false, null, false, null, '', console.error, console.error, console.error, null);
                roots.set(rootContainer, root);
                reconciler.injectIntoDevTools({
                    //findFiberByHostInstance: reconciler.findHostInstance,
                    bundleType: process.env.NODE_ENV === 'development' ? 1 : 0,
                    version,
                    rendererPackageName: 'reactylon',
                });
            }
            // Update the container with the specified component to trigger the rendering process
            reconciler.updateContainer(element, root, null, null);
        },

        unmount(container: FiberRoot, disposeEngine): void {
            Logger.log(`unmount - container unmounted`);
            const root = roots.get(container);
            reconciler.updateContainer(null, root, null, () => {
                roots.delete(container);
                if (roots.size === 0) {
                    // no more scenes so dispose the engine
                    disposeEngine?.();
                }
            });
        },
    };
};

export default Reactylon;

// internalHandle._debugOwner.dependencies.firstContext.memoizedValue -> GET CLOSEST CONTEXT
