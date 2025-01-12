//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from '../types/types';
import { type MeshProps, type GuiProps, type Clonable, type WebXRCameraProps, type TextureProps, type MaterialProps, type CameraProps } from '../types/props';
import { AbstractActionManager } from '@babylonjs/core/Actions/abstractActionManager';
import { Action } from '@babylonjs/core/Actions/action';
import { ActionEvent } from '@babylonjs/core/Actions/actionEvent';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { Condition } from '@babylonjs/core/Actions/condition';
import { PredicateCondition } from '@babylonjs/core/Actions/condition';
import { StateCondition } from '@babylonjs/core/Actions/condition';
import { ValueCondition } from '@babylonjs/core/Actions/condition';
import { CombineAction } from '@babylonjs/core/Actions/directActions';
import { DoNothingAction } from '@babylonjs/core/Actions/directActions';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';
import { IncrementValueAction } from '@babylonjs/core/Actions/directActions';
import { PlayAnimationAction } from '@babylonjs/core/Actions/directActions';
import { SetParentAction } from '@babylonjs/core/Actions/directActions';
import { SetStateAction } from '@babylonjs/core/Actions/directActions';
import { SetValueAction } from '@babylonjs/core/Actions/directActions';
import { StopAnimationAction } from '@babylonjs/core/Actions/directActions';
import { SwitchBooleanAction } from '@babylonjs/core/Actions/directActions';
import { PlaySoundAction } from '@babylonjs/core/Actions/directAudioActions';
import { StopSoundAction } from '@babylonjs/core/Actions/directAudioActions';
import { InterpolateValueAction } from '@babylonjs/core/Actions/interpolateValueAction';
import { AddAnimationExtensions } from '@babylonjs/core/Animations/animatable';
import { Animatable } from '@babylonjs/core/Animations/animatable';
import { RegisterTargetForLateAnimationBinding } from '@babylonjs/core/Animations/animatable';
import { Animation } from '@babylonjs/core/Animations/animation';
import { AnimationEvent } from '@babylonjs/core/Animations/animationEvent';
import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup';
import { AnimationGroupMask } from '@babylonjs/core/Animations/animationGroupMask';
import { AnimationPropertiesOverride } from '@babylonjs/core/Animations/animationPropertiesOverride';
import { AnimationRange } from '@babylonjs/core/Animations/animationRange';
import { BackEase } from '@babylonjs/core/Animations/easing';
import { BezierCurveEase } from '@babylonjs/core/Animations/easing';
import { BounceEase } from '@babylonjs/core/Animations/easing';
import { EasingFunction } from '@babylonjs/core/Animations/easing';
import { ElasticEase } from '@babylonjs/core/Animations/easing';
import { ExponentialEase } from '@babylonjs/core/Animations/easing';
import { PowerEase } from '@babylonjs/core/Animations/easing';
import { PathCursor } from '@babylonjs/core/Animations/pathCursor';
import { RuntimeAnimation } from '@babylonjs/core/Animations/runtimeAnimation';
import { Analyser } from '@babylonjs/core/Audio/analyser';
import { AudioEngine } from '@babylonjs/core/Audio/audioEngine';
import { AudioSceneComponent } from '@babylonjs/core/Audio/audioSceneComponent';
import { Sound } from '@babylonjs/core/Audio/sound';
import { SoundTrack } from '@babylonjs/core/Audio/soundTrack';
import { WeightedSound } from '@babylonjs/core/Audio/weightedsound';
import { BakedVertexAnimationManager } from '@babylonjs/core/BakedVertexAnimation/bakedVertexAnimationManager';
import { VertexAnimationBaker } from '@babylonjs/core/BakedVertexAnimation/vertexAnimationBaker';
import { AutoRotationBehavior } from '@babylonjs/core/Behaviors/Cameras/autoRotationBehavior';
import { BouncingBehavior } from '@babylonjs/core/Behaviors/Cameras/bouncingBehavior';
import { FramingBehavior } from '@babylonjs/core/Behaviors/Cameras/framingBehavior';
import { AttachToBoxBehavior } from '@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior';
import { BaseSixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior';
import { FadeInOutBehavior } from '@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior';
import { FollowBehavior } from '@babylonjs/core/Behaviors/Meshes/followBehavior';
import { HandConstraintBehavior } from '@babylonjs/core/Behaviors/Meshes/handConstraintBehavior';
import { MultiPointerScaleBehavior } from '@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior';
import { PointerDragBehavior } from '@babylonjs/core/Behaviors/Meshes/pointerDragBehavior';
import { SixDofDragBehavior } from '@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior';
import { SurfaceMagnetismBehavior } from '@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior';
import { Bone } from '@babylonjs/core/Bones/bone';
import { BoneIKController } from '@babylonjs/core/Bones/boneIKController';
import { BoneLookController } from '@babylonjs/core/Bones/boneLookController';
import { Skeleton } from '@babylonjs/core/Bones/skeleton';
import { Buffer } from '@babylonjs/core/Buffers/buffer';
import { VertexBuffer } from '@babylonjs/core/Buffers/buffer';
import { CopyFloatData } from '@babylonjs/core/Buffers/bufferUtils';
import { EnumerateFloatValues } from '@babylonjs/core/Buffers/bufferUtils';
import { GetFloatData } from '@babylonjs/core/Buffers/bufferUtils';
import { GetTypeByteLength } from '@babylonjs/core/Buffers/bufferUtils';
import { DataBuffer } from '@babylonjs/core/Buffers/dataBuffer';
import { StorageBuffer } from '@babylonjs/core/Buffers/storageBuffer';
import { BaseCameraMouseWheelInput } from '@babylonjs/core/Cameras/Inputs/BaseCameraMouseWheelInput';
import { BaseCameraPointersInput } from '@babylonjs/core/Cameras/Inputs/BaseCameraPointersInput';
import { ArcRotateCameraGamepadInput } from '@babylonjs/core/Cameras/Inputs/arcRotateCameraGamepadInput';
import { ArcRotateCameraKeyboardMoveInput } from '@babylonjs/core/Cameras/Inputs/arcRotateCameraKeyboardMoveInput';
import { ArcRotateCameraMouseWheelInput } from '@babylonjs/core/Cameras/Inputs/arcRotateCameraMouseWheelInput';
import { ArcRotateCameraPointersInput } from '@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput';
import { ArcRotateCameraVRDeviceOrientationInput } from '@babylonjs/core/Cameras/Inputs/arcRotateCameraVRDeviceOrientationInput';
import { FlyCameraKeyboardInput } from '@babylonjs/core/Cameras/Inputs/flyCameraKeyboardInput';
import { FlyCameraMouseInput } from '@babylonjs/core/Cameras/Inputs/flyCameraMouseInput';
import { FollowCameraKeyboardMoveInput } from '@babylonjs/core/Cameras/Inputs/followCameraKeyboardMoveInput';
import { FollowCameraMouseWheelInput } from '@babylonjs/core/Cameras/Inputs/followCameraMouseWheelInput';
import { FollowCameraPointersInput } from '@babylonjs/core/Cameras/Inputs/followCameraPointersInput';
import { FreeCameraDeviceOrientationInput } from '@babylonjs/core/Cameras/Inputs/freeCameraDeviceOrientationInput';
import { FreeCameraGamepadInput } from '@babylonjs/core/Cameras/Inputs/freeCameraGamepadInput';
import { FreeCameraKeyboardMoveInput } from '@babylonjs/core/Cameras/Inputs/freeCameraKeyboardMoveInput';
import { FreeCameraMouseInput } from '@babylonjs/core/Cameras/Inputs/freeCameraMouseInput';
import { FreeCameraMouseWheelInput } from '@babylonjs/core/Cameras/Inputs/freeCameraMouseWheelInput';
import { FreeCameraTouchInput } from '@babylonjs/core/Cameras/Inputs/freeCameraTouchInput';
import { setStereoscopicAnaglyphRigMode } from '@babylonjs/core/Cameras/RigModes/stereoscopicAnaglyphRigMode';
import { setStereoscopicRigMode } from '@babylonjs/core/Cameras/RigModes/stereoscopicRigMode';
import { setVRRigMode } from '@babylonjs/core/Cameras/RigModes/vrRigMode';
import { AnaglyphArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera';
import { AnaglyphFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera';
import { AnaglyphGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera';
import { AnaglyphUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera';
import { StereoscopicArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera';
import { StereoscopicFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera';
import { StereoscopicGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera';
import { StereoscopicScreenUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera';
import { StereoscopicUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera';
import { VRCameraMetrics } from '@babylonjs/core/Cameras/VR/vrCameraMetrics';
import { VRDeviceOrientationArcRotateCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera';
import { VRDeviceOrientationFreeCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera';
import { VRDeviceOrientationGamepadCamera } from '@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera';
import { VRExperienceHelper } from '@babylonjs/core/Cameras/VR/vrExperienceHelper';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { ArcRotateCameraInputsManager } from '@babylonjs/core/Cameras/arcRotateCameraInputsManager';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { CameraInputsManager } from '@babylonjs/core/Cameras/cameraInputsManager';
import { DeviceOrientationCamera } from '@babylonjs/core/Cameras/deviceOrientationCamera';
import { FlyCamera } from '@babylonjs/core/Cameras/flyCamera';
import { FlyCameraInputsManager } from '@babylonjs/core/Cameras/flyCameraInputsManager';
import { ArcFollowCamera } from '@babylonjs/core/Cameras/followCamera';
import { FollowCamera } from '@babylonjs/core/Cameras/followCamera';
import { FollowCameraInputsManager } from '@babylonjs/core/Cameras/followCameraInputsManager';
import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { FreeCameraInputsManager } from '@babylonjs/core/Cameras/freeCameraInputsManager';
import { GamepadCamera } from '@babylonjs/core/Cameras/gamepadCamera';
import { TargetCamera } from '@babylonjs/core/Cameras/targetCamera';
import { TouchCamera } from '@babylonjs/core/Cameras/touchCamera';
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera';
import { VirtualJoysticksCamera } from '@babylonjs/core/Cameras/virtualJoysticksCamera';
import { Collider } from '@babylonjs/core/Collisions/collider';
import { DefaultCollisionCoordinator } from '@babylonjs/core/Collisions/collisionCoordinator';
import { GPUPicker } from '@babylonjs/core/Collisions/gpuPicker';
import { IntersectionInfo } from '@babylonjs/core/Collisions/intersectionInfo';
import { _MeshCollisionData } from '@babylonjs/core/Collisions/meshCollisionData';
import { PickingInfo } from '@babylonjs/core/Collisions/pickingInfo';
import { setOpenGLOrientationForUV } from '@babylonjs/core/Compat/compatibilityOptions';
import { ComputeEffect } from '@babylonjs/core/Compute/computeEffect';
import { ComputeShader } from '@babylonjs/core/Compute/computeShader';
import { BoundingInfoHelper } from '@babylonjs/core/Culling/Helper/boundingInfoHelper';
import { ComputeShaderBoundingHelper } from '@babylonjs/core/Culling/Helper/computeShaderBoundingHelper';
import { TransformFeedbackBoundingHelper } from '@babylonjs/core/Culling/Helper/transformFeedbackBoundingHelper';
import { Octree } from '@babylonjs/core/Culling/Octrees/octree';
import { OctreeBlock } from '@babylonjs/core/Culling/Octrees/octreeBlock';
import { OctreeSceneComponent } from '@babylonjs/core/Culling/Octrees/octreeSceneComponent';
import { BoundingBox } from '@babylonjs/core/Culling/boundingBox';
import { BoundingInfo } from '@babylonjs/core/Culling/boundingInfo';
import { BoundingSphere } from '@babylonjs/core/Culling/boundingSphere';
import { AddRayExtensions } from '@babylonjs/core/Culling/ray';
import { CreatePickingRay } from '@babylonjs/core/Culling/ray';
import { CreatePickingRayInCameraSpace } from '@babylonjs/core/Culling/ray';
import { CreatePickingRayInCameraSpaceToRef } from '@babylonjs/core/Culling/ray';
import { CreatePickingRayToRef } from '@babylonjs/core/Culling/ray';
import { GetForwardRay } from '@babylonjs/core/Culling/ray';
import { GetForwardRayToRef } from '@babylonjs/core/Culling/ray';
import { MultiPick } from '@babylonjs/core/Culling/ray';
import { MultiPickWithRay } from '@babylonjs/core/Culling/ray';
import { Pick } from '@babylonjs/core/Culling/ray';
import { PickWithBoundingInfo } from '@babylonjs/core/Culling/ray';
import { PickWithRay } from '@babylonjs/core/Culling/ray';
import { Ray } from '@babylonjs/core/Culling/ray';
import { AxesViewer } from '@babylonjs/core/Debug/axesViewer';
import { BoneAxesViewer } from '@babylonjs/core/Debug/boneAxesViewer';
import { DebugLayer } from '@babylonjs/core/Debug/debugLayer';
import { DirectionalLightFrustumViewer } from '@babylonjs/core/Debug/directionalLightFrustumViewer';
import { PhysicsViewer } from '@babylonjs/core/Debug/physicsViewer';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { SkeletonViewer } from '@babylonjs/core/Debug/skeletonViewer';
import { editableInPropertyPage } from '@babylonjs/core/Decorators/nodeDecorator';
import { DeviceSource } from '@babylonjs/core/DeviceInput/InputDevices/deviceSource';
import { DeviceSourceManager } from '@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager';
import { InternalDeviceSourceManager } from '@babylonjs/core/DeviceInput/internalDeviceSourceManager';
import { NativeDeviceInputSystem } from '@babylonjs/core/DeviceInput/nativeDeviceInputSystem';
import { WebDeviceInputSystem } from '@babylonjs/core/DeviceInput/webDeviceInputSystem';
import { NativeDataStream } from '@babylonjs/core/Engines/Native/nativeDataStream';
import { NativeHardwareTexture } from '@babylonjs/core/Engines/Native/nativeHardwareTexture';
import { getNativeAddressMode } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeAlphaMode } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeAttribType } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeSamplingMode } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeStencilDepthFail } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeStencilDepthPass } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeStencilFunc } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeStencilOpFail } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { getNativeTextureFormat } from '@babylonjs/core/Engines/Native/nativeHelpers';
import { NativePipelineContext } from '@babylonjs/core/Engines/Native/nativePipelineContext';
import { NativeRenderTargetWrapper } from '@babylonjs/core/Engines/Native/nativeRenderTargetWrapper';
import { NativeShaderProcessingContext } from '@babylonjs/core/Engines/Native/nativeShaderProcessingContext';
import { NativeShaderProcessor } from '@babylonjs/core/Engines/Native/nativeShaderProcessors';
import { ValidatedNativeDataStream } from '@babylonjs/core/Engines/Native/validatedNativeDataStream';
import { ShaderDefineArithmeticOperator } from '@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineArithmeticOperator';
import { ShaderDefineIsDefinedOperator } from '@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineIsDefinedOperator';
import { ShaderCodeCursor } from '@babylonjs/core/Engines/Processors/shaderCodeCursor';
import { ShaderCodeInliner } from '@babylonjs/core/Engines/Processors/shaderCodeInliner';
import { ShaderCodeNode } from '@babylonjs/core/Engines/Processors/shaderCodeNode';
import { Finalize } from '@babylonjs/core/Engines/Processors/shaderProcessor';
import { Initialize } from '@babylonjs/core/Engines/Processors/shaderProcessor';
import { PreProcess } from '@babylonjs/core/Engines/Processors/shaderProcessor';
import { Process } from '@babylonjs/core/Engines/Processors/shaderProcessor';
import { _ProcessIncludes } from '@babylonjs/core/Engines/Processors/shaderProcessor';
import { WebGL2ShaderProcessor } from '@babylonjs/core/Engines/WebGL/webGL2ShaderProcessors';
import { WebGLHardwareTexture } from '@babylonjs/core/Engines/WebGL/webGLHardwareTexture';
import { WebGLPipelineContext } from '@babylonjs/core/Engines/WebGL/webGLPipelineContext';
import { WebGLRenderTargetWrapper } from '@babylonjs/core/Engines/WebGL/webGLRenderTargetWrapper';
import { WebGLShaderProcessor } from '@babylonjs/core/Engines/WebGL/webGLShaderProcessors';
import { WebGPUBufferManager } from '@babylonjs/core/Engines/WebGPU/webgpuBufferManager';
import { WebGPUBundleList } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemBeginOcclusionQuery } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemBlendColor } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemEndOcclusionQuery } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemScissor } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemStencilRef } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPURenderItemViewport } from '@babylonjs/core/Engines/WebGPU/webgpuBundleList';
import { WebGPUCacheBindGroups } from '@babylonjs/core/Engines/WebGPU/webgpuCacheBindGroups';
import { WebGPUCacheRenderPipeline } from '@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipeline';
import { WebGPUCacheSampler } from '@babylonjs/core/Engines/WebGPU/webgpuCacheSampler';
import { WebGPUClearQuad } from '@babylonjs/core/Engines/WebGPU/webgpuClearQuad';
import { WebGPUComputeContext } from '@babylonjs/core/Engines/WebGPU/webgpuComputeContext';
import { WebGPUComputePipelineContext } from '@babylonjs/core/Engines/WebGPU/webgpuComputePipelineContext';
import { WebGPUDepthCullingState } from '@babylonjs/core/Engines/WebGPU/webgpuDepthCullingState';
import { WebGPUDrawContext } from '@babylonjs/core/Engines/WebGPU/webgpuDrawContext';
import { WebGPUExternalTexture } from '@babylonjs/core/Engines/WebGPU/webgpuExternalTexture';
import { WebGPUHardwareTexture } from '@babylonjs/core/Engines/WebGPU/webgpuHardwareTexture';
import { WebGPUMaterialContext } from '@babylonjs/core/Engines/WebGPU/webgpuMaterialContext';
import { WebGPUOcclusionQuery } from '@babylonjs/core/Engines/WebGPU/webgpuOcclusionQuery';
import { WebGPUPerfCounter } from '@babylonjs/core/Engines/WebGPU/webgpuPerfCounter';
import { WebGPUPipelineContext } from '@babylonjs/core/Engines/WebGPU/webgpuPipelineContext';
import { WebGPUQuerySet } from '@babylonjs/core/Engines/WebGPU/webgpuQuerySet';
import { WebGPURenderTargetWrapper } from '@babylonjs/core/Engines/WebGPU/webgpuRenderTargetWrapper';
import { WebGPUShaderProcessingContext } from '@babylonjs/core/Engines/WebGPU/webgpuShaderProcessingContext';
import { WebGPUShaderProcessor } from '@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor';
import { WebGPUShaderProcessorGLSL } from '@babylonjs/core/Engines/WebGPU/webgpuShaderProcessorsGLSL';
import { WebGPUShaderProcessorWGSL } from '@babylonjs/core/Engines/WebGPU/webgpuShaderProcessorsWGSL';
import { WebGPUSnapshotRendering } from '@babylonjs/core/Engines/WebGPU/webgpuSnapshotRendering';
import { WebGPUStencilStateComposer } from '@babylonjs/core/Engines/WebGPU/webgpuStencilStateComposer';
import { WebGPUTextureManager } from '@babylonjs/core/Engines/WebGPU/webgpuTextureManager';
import { WebGPUDurationMeasure } from '@babylonjs/core/Engines/WebGPU/webgpuTimestampQuery';
import { WebGPUTimestampQuery } from '@babylonjs/core/Engines/WebGPU/webgpuTimestampQuery';
import { AbstractEngine } from '@babylonjs/core/Engines/abstractEngine';
import { QueueNewFrame } from '@babylonjs/core/Engines/abstractEngine';
import { Engine } from '@babylonjs/core/Engines/engine';
import { AcquireNativeObjectAsync } from '@babylonjs/core/Engines/nativeEngine';
import { NativeEngine } from '@babylonjs/core/Engines/nativeEngine';
import { RegisterNativeTypeAsync } from '@babylonjs/core/Engines/nativeEngine';
import { NullEngine } from '@babylonjs/core/Engines/nullEngine';
import { NullEngineOptions } from '@babylonjs/core/Engines/nullEngine';
import { RenderTargetWrapper } from '@babylonjs/core/Engines/renderTargetWrapper';
import { ThinEngine } from '@babylonjs/core/Engines/thinEngine';
import { ThinWebGPUEngine } from '@babylonjs/core/Engines/thinWebGPUEngine';
import { WebGPUEngine } from '@babylonjs/core/Engines/webgpuEngine';
import { ClipboardInfo } from '@babylonjs/core/Events/clipboardEvents';
import { KeyboardInfo } from '@babylonjs/core/Events/keyboardEvents';
import { KeyboardInfoPre } from '@babylonjs/core/Events/keyboardEvents';
import { PointerInfo } from '@babylonjs/core/Events/pointerEvents';
import { PointerInfoBase } from '@babylonjs/core/Events/pointerEvents';
import { PointerInfoPre } from '@babylonjs/core/Events/pointerEvents';
import { FlowGraphLogicAndBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Logic/flowGraphLogicBlocks';
import { FlowGraphLogicNotBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Logic/flowGraphLogicBlocks';
import { FlowGraphLogicOrBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Logic/flowGraphLogicBlocks';
import { FlowGraphAbsBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAcosBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAcoshBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAddBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAsinBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAsinhBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAtan2Block } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAtanBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphAtanhBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseAndBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseLeftShiftBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseNotBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseOrBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseRightShiftBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBitwiseXorBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCeilBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphClampBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCosBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCoshBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCountLeadingZerosBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCountOneBitsBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCountTrailingZerosBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCrossBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphCubeRootBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphDegToRadBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphDeterminantBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphDivideBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphDotBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphEBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphEqBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphExpBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphFloorBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphFractBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphGreaterThanBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphGreaterThanOrEqualBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphInfBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphInterpolateBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphInvertMatrixBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphIsInfBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphIsNanBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLengthBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLessThanBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLessThanOrEqualBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLog10Block } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLog2Block } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphLogBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphMatMulBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphMaxBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphMinBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphMultiplyBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphNaNBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphNegBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphNormalizeBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphPiBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphPowBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphRadToDegBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphRandomBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphRemainderBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphRotate2DBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphRotate3DBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSaturateBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSignBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSinBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSinhBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSqrtBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphSubtractBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphTanBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphTanhBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphTransposeBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphTruncBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks';
import { FlowGraphBinaryOperationBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock';
import { FlowGraphCachedOperationBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock';
import { FlowGraphConditionalDataBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock';
import { FlowGraphConstantBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantBlock';
import { FlowGraphConstantOperationBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock';
import { FlowGraphCoordinateTransformBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCoordinateTransformBlock';
import { FlowGraphGetPropertyBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock';
import { FlowGraphGetVariableBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock';
import { FlowGraphTernaryOperationBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock';
import { FlowGraphUnaryOperationBlock } from '@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock';
import { FlowGraphMeshPickEventBlock } from '@babylonjs/core/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock';
import { FlowGraphReceiveCustomEventBlock } from '@babylonjs/core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock';
import { FlowGraphPauseAnimationBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock';
import { FlowGraphPlayAnimationBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock';
import { FlowGraphStopAnimationBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock';
import { FlowGraphPlayAudioBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/Audio/flowGraphPlayAudioBlock';
import { FlowGraphStopAudioBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/Audio/flowGraphStopAudioBlock';
import { FlowGraphBranchBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock';
import { FlowGraphCounterBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock';
import { FlowGraphDebounceBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock';
import { FlowGraphDoNBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock';
import { FlowGraphFlipFlopBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock';
import { FlowGraphForLoopBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock';
import { FlowGraphMultiGateBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock';
import { FlowGraphSequenceBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock';
import { FlowGraphSwitchBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock';
import { FlowGraphThrottleBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock';
import { FlowGraphTimerBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphTimerBlock';
import { FlowGraphWaitAllBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock';
import { FlowGraphWhileLoopBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock';
import { FlowGraphConsoleLogBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock';
import { FlowGraphSendCustomEventBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSendCustomEventBlock';
import { FlowGraphSetPropertyBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock';
import { FlowGraphSetVariableBlock } from '@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock';
import { FlowGraph } from '@babylonjs/core/FlowGraph/flowGraph';
import { FlowGraphAsyncExecutionBlock } from '@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock';
import { FlowGraphBlock } from '@babylonjs/core/FlowGraph/flowGraphBlock';
import { FlowGraphConnection } from '@babylonjs/core/FlowGraph/flowGraphConnection';
import { FlowGraphContext } from '@babylonjs/core/FlowGraph/flowGraphContext';
import { FlowGraphContextLogger } from '@babylonjs/core/FlowGraph/flowGraphContextLogger';
import { FlowGraphCoordinator } from '@babylonjs/core/FlowGraph/flowGraphCoordinator';
import { FlowGraphDataConnection } from '@babylonjs/core/FlowGraph/flowGraphDataConnection';
import { FlowGraphExecutionBlock } from '@babylonjs/core/FlowGraph/flowGraphExecutionBlock';
import { FlowGraphExecutionBlockWithOutSignal } from '@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal';
import { FlowGraphInteger } from '@babylonjs/core/FlowGraph/flowGraphInteger';
import { FlowGraphPathConverter } from '@babylonjs/core/FlowGraph/flowGraphPathConverter';
import { FlowGraphPathConverterComponent } from '@babylonjs/core/FlowGraph/flowGraphPathConverterComponent';
import { RichType } from '@babylonjs/core/FlowGraph/flowGraphRichTypes';
import { getRichTypeFromValue } from '@babylonjs/core/FlowGraph/flowGraphRichTypes';
import { defaultValueParseFunction } from '@babylonjs/core/FlowGraph/serialization';
import { defaultValueSerializationFunction } from '@babylonjs/core/FlowGraph/serialization';
import { needsPathConverter } from '@babylonjs/core/FlowGraph/serialization';
import { _isADescendantOf } from '@babylonjs/core/FlowGraph/utils';
import { NodeRenderGraphBlackAndWhitePostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/blackAndWhitePostProcessBlock';
import { NodeRenderGraphBloomPostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/bloomPostProcessBlock';
import { NodeRenderGraphBlurPostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock';
import { NodeRenderGraphCircleOfConfusionPostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/circleOfConfusionPostProcessBlock';
import { NodeRenderGraphDepthOfFieldPostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock';
import { NodeRenderGraphExtractHighlightsPostProcessBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/PostProcesses/extractHighlightsPostProcessBlock';
import { NodeRenderGraphBaseObjectRendererBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock';
import { NodeRenderGraphBaseShadowGeneratorBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/baseShadowGeneratorBlock';
import { NodeRenderGraphCascadedShadowGeneratorBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/csmShadowGeneratorBlock';
import { NodeRenderGraphCullObjectsBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/cullObjectsBlock';
import { NodeRenderGraphGeometryRendererBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock';
import { NodeRenderGraphObjectRendererBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/objectRendererBlock';
import { NodeRenderGraphShadowGeneratorBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/shadowGeneratorBlock';
import { NodeRenderGraphTAAObjectRendererBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Rendering/taaObjectRendererBlock';
import { NodeRenderGraphTeleportInBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Teleport/teleportInBlock';
import { NodeRenderGraphTeleportOutBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Teleport/teleportOutBlock';
import { NodeRenderGraphClearBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Textures/clearBlock';
import { NodeRenderGraphCopyTextureBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Textures/copyTextureBlock';
import { NodeRenderGraphGenerateMipmapsBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/Textures/generateMipmapsBlock';
import { NodeRenderGraphElbowBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/elbowBlock';
import { NodeRenderGraphExecuteBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/executeBlock';
import { NodeRenderGraphInputBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/inputBlock';
import { NodeRenderGraphOutputBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/outputBlock';
import { NodeRenderGraphResourceContainerBlock } from '@babylonjs/core/FrameGraph/Node/Blocks/resourceContainerBlock';
import { NodeRenderGraph } from '@babylonjs/core/FrameGraph/Node/nodeRenderGraph';
import { NodeRenderGraphBlock } from '@babylonjs/core/FrameGraph/Node/nodeRenderGraphBlock';
import { NodeRenderGraphConnectionPoint } from '@babylonjs/core/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint';
import { NodeRenderGraphBuildState } from '@babylonjs/core/FrameGraph/Node/nodeRenderGraphBuildState';
import { FrameGraphCullPass } from '@babylonjs/core/FrameGraph/Passes/cullPass';
import { FrameGraphPass } from '@babylonjs/core/FrameGraph/Passes/pass';
import { FrameGraphRenderPass } from '@babylonjs/core/FrameGraph/Passes/renderPass';
import { FrameGraphExecuteTask } from '@babylonjs/core/FrameGraph/Tasks/Misc/executeTask';
import { FrameGraphBlackAndWhiteTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/blackAndWhiteTask';
import { FrameGraphBloomMergeTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/bloomMergeTask';
import { FrameGraphBloomTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/bloomTask';
import { FrameGraphBlurTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/blurTask';
import { FrameGraphCircleOfConfusionTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/circleOfConfusionTask';
import { FrameGraphDepthOfFieldBlurTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/depthOfFieldBlurTask';
import { FrameGraphDepthOfFieldMergeTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/depthOfFieldMergeTask';
import { FrameGraphDepthOfFieldTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/depthOfFieldTask';
import { FrameGraphExtractHighlightsTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/extractHighlightsTask';
import { FrameGraphPostProcessTask } from '@babylonjs/core/FrameGraph/Tasks/PostProcesses/postProcessTask';
import { FrameGraphCascadedShadowGeneratorTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask';
import { FrameGraphCullObjectsTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/cullObjectsTask';
import { FrameGraphGeometryRendererTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/geometryRendererTask';
import { FrameGraphObjectRendererTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/objectRendererTask';
import { FrameGraphShadowGeneratorTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/shadowGeneratorTask';
import { FrameGraphTAAObjectRendererTask } from '@babylonjs/core/FrameGraph/Tasks/Rendering/taaObjectRendererTask';
import { FrameGraphClearTextureTask } from '@babylonjs/core/FrameGraph/Tasks/Texture/clearTextureTask';
import { FrameGraphCopyToTextureTask } from '@babylonjs/core/FrameGraph/Tasks/Texture/copyToTextureTask';
import { FrameGraphGenerateMipMapsTask } from '@babylonjs/core/FrameGraph/Tasks/Texture/generateMipMapsTask';
import { FrameGraph } from '@babylonjs/core/FrameGraph/frameGraph';
import { FrameGraphRenderContext } from '@babylonjs/core/FrameGraph/frameGraphRenderContext';
import { FrameGraphRenderTarget } from '@babylonjs/core/FrameGraph/frameGraphRenderTarget';
import { FrameGraphTask } from '@babylonjs/core/FrameGraph/frameGraphTask';
import { FrameGraphTextureManager } from '@babylonjs/core/FrameGraph/frameGraphTextureManager';
import { DualShockPad } from '@babylonjs/core/Gamepads/dualShockGamepad';
import { Gamepad } from '@babylonjs/core/Gamepads/gamepad';
import { GenericPad } from '@babylonjs/core/Gamepads/gamepad';
import { StickValues } from '@babylonjs/core/Gamepads/gamepad';
import { GamepadManager } from '@babylonjs/core/Gamepads/gamepadManager';
import { GamepadSystemSceneComponent } from '@babylonjs/core/Gamepads/gamepadSceneComponent';
import { Xbox360Pad } from '@babylonjs/core/Gamepads/xboxGamepad';
import { AxisDragGizmo } from '@babylonjs/core/Gizmos/axisDragGizmo';
import { AxisScaleGizmo } from '@babylonjs/core/Gizmos/axisScaleGizmo';
import { BoundingBoxGizmo } from '@babylonjs/core/Gizmos/boundingBoxGizmo';
import { CameraGizmo } from '@babylonjs/core/Gizmos/cameraGizmo';
import { Gizmo } from '@babylonjs/core/Gizmos/gizmo';
import { GizmoManager } from '@babylonjs/core/Gizmos/gizmoManager';
import { LightGizmo } from '@babylonjs/core/Gizmos/lightGizmo';
import { PlaneDragGizmo } from '@babylonjs/core/Gizmos/planeDragGizmo';
import { PlaneRotationGizmo } from '@babylonjs/core/Gizmos/planeRotationGizmo';
import { PositionGizmo } from '@babylonjs/core/Gizmos/positionGizmo';
import { RotationGizmo } from '@babylonjs/core/Gizmos/rotationGizmo';
import { ScaleGizmo } from '@babylonjs/core/Gizmos/scaleGizmo';
import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper';
import { TextureDome } from '@babylonjs/core/Helpers/textureDome';
import { PointerPickingConfiguration } from '@babylonjs/core/Inputs/pointerPickingConfiguration';
import { EngineInstrumentation } from '@babylonjs/core/Instrumentation/engineInstrumentation';
import { SceneInstrumentation } from '@babylonjs/core/Instrumentation/sceneInstrumentation';
import { _TimeToken } from '@babylonjs/core/Instrumentation/timeToken';
import { EffectLayer } from '@babylonjs/core/Layers/effectLayer';
import { EffectLayerSceneComponent } from '@babylonjs/core/Layers/effectLayerSceneComponent';
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer';
import { HighlightLayer } from '@babylonjs/core/Layers/highlightLayer';
import { Layer } from '@babylonjs/core/Layers/layer';
import { LayerSceneComponent } from '@babylonjs/core/Layers/layerSceneComponent';
import { LensFlare } from '@babylonjs/core/LensFlares/lensFlare';
import { LensFlareSystem } from '@babylonjs/core/LensFlares/lensFlareSystem';
import { LensFlareSystemSceneComponent } from '@babylonjs/core/LensFlares/lensFlareSystemSceneComponent';
import { LoadIESData } from '@babylonjs/core/Lights/IES/iesLoader';
import { CascadedShadowGenerator } from '@babylonjs/core/Lights/Shadows/cascadedShadowGenerator';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { ShadowGeneratorSceneComponent } from '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Light } from '@babylonjs/core/Lights/light';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { ShadowLight } from '@babylonjs/core/Lights/shadowLight';
import { SpotLight } from '@babylonjs/core/Lights/spotLight';
import { DefaultLoadingScreen } from '@babylonjs/core/Loading/loadingScreen';
import { appendSceneAsync } from '@babylonjs/core/Loading/sceneLoader';
import { importAnimationsAsync } from '@babylonjs/core/Loading/sceneLoader';
import { loadAssetContainerAsync } from '@babylonjs/core/Loading/sceneLoader';
import { loadSceneAsync } from '@babylonjs/core/Loading/sceneLoader';
import { registerSceneLoaderPlugin } from '@babylonjs/core/Loading/sceneLoader';
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { GaussianSplattingMaterial } from '@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial';
import { GreasedLinePluginMaterial } from '@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial';
import { MaterialGreasedLineDefines } from '@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial';
import { GetCustomCode } from '@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL';
import { GreasedLineSimpleMaterial } from '@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial';
import { ClipPlanesBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/clipPlanesBlock';
import { CurrentScreenBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/currentScreenBlock';
import { FogBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/fogBlock';
import { ImageSourceBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock';
import { LightBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/lightBlock';
import { ReflectionTextureBaseBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock';
import { ReflectionTextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBlock';
import { SceneDepthBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/sceneDepthBlock';
import { TextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Dual/textureBlock';
import { TBNBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock';
import { DerivativeBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/derivativeBlock';
import { DiscardBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/discardBlock';
import { FragCoordBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/fragCoordBlock';
import { FragDepthBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/fragDepthBlock';
import { FragmentOutputBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock';
import { FrontFacingBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/frontFacingBlock';
import { HeightToNormalBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/heightToNormalBlock';
import { ImageProcessingBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/imageProcessingBlock';
import { PerturbNormalBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/perturbNormalBlock';
import { PrePassOutputBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/prePassOutputBlock';
import { ScreenSizeBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/screenSizeBlock';
import { ScreenSpaceBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/screenSpaceBlock';
import { ShadowMapBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/shadowMapBlock';
import { TwirlBlock } from '@babylonjs/core/Materials/Node/Blocks/Fragment/twirlBlock';
import { GaussianBlock } from '@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianBlock';
import { GaussianSplattingBlock } from '@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianSplattingBlock';
import { SplatReaderBlock } from '@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/splatReaderBlock';
import { InputBlock } from '@babylonjs/core/Materials/Node/Blocks/Input/inputBlock';
import { PrePassTextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Input/prePassTextureBlock';
import { AnisotropyBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock';
import { ClearCoatBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock';
import { IridescenceBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock';
import { PBRMetallicRoughnessBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock';
import { ReflectionBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock';
import { RefractionBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock';
import { SheenBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock';
import { SubSurfaceBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock';
import { ParticleBlendMultiplyBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleBlendMultiplyBlock';
import { ParticleRampGradientBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleRampGradientBlock';
import { ParticleTextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleTextureBlock';
import { NodeMaterialTeleportInBlock } from '@babylonjs/core/Materials/Node/Blocks/Teleport/teleportInBlock';
import { NodeMaterialTeleportOutBlock } from '@babylonjs/core/Materials/Node/Blocks/Teleport/teleportOutBlock';
import { BonesBlock } from '@babylonjs/core/Materials/Node/Blocks/Vertex/bonesBlock';
import { InstancesBlock } from '@babylonjs/core/Materials/Node/Blocks/Vertex/instancesBlock';
import { LightInformationBlock } from '@babylonjs/core/Materials/Node/Blocks/Vertex/lightInformationBlock';
import { MorphTargetsBlock } from '@babylonjs/core/Materials/Node/Blocks/Vertex/morphTargetsBlock';
import { VertexOutputBlock } from '@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock';
import { AddBlock } from '@babylonjs/core/Materials/Node/Blocks/addBlock';
import { ArcTan2Block } from '@babylonjs/core/Materials/Node/Blocks/arcTan2Block';
import { BaseMathBlock } from '@babylonjs/core/Materials/Node/Blocks/baseMathBlock';
import { BiPlanarBlock } from '@babylonjs/core/Materials/Node/Blocks/biPlanarBlock';
import { ClampBlock } from '@babylonjs/core/Materials/Node/Blocks/clampBlock';
import { CloudBlock } from '@babylonjs/core/Materials/Node/Blocks/cloudBlock';
import { ColorConverterBlock } from '@babylonjs/core/Materials/Node/Blocks/colorConverterBlock';
import { ColorMergerBlock } from '@babylonjs/core/Materials/Node/Blocks/colorMergerBlock';
import { ColorSplitterBlock } from '@babylonjs/core/Materials/Node/Blocks/colorSplitterBlock';
import { ConditionalBlock } from '@babylonjs/core/Materials/Node/Blocks/conditionalBlock';
import { CrossBlock } from '@babylonjs/core/Materials/Node/Blocks/crossBlock';
import { CurveBlock } from '@babylonjs/core/Materials/Node/Blocks/curveBlock';
import { CustomBlock } from '@babylonjs/core/Materials/Node/Blocks/customBlock';
import { DesaturateBlock } from '@babylonjs/core/Materials/Node/Blocks/desaturateBlock';
import { DistanceBlock } from '@babylonjs/core/Materials/Node/Blocks/distanceBlock';
import { DivideBlock } from '@babylonjs/core/Materials/Node/Blocks/divideBlock';
import { DotBlock } from '@babylonjs/core/Materials/Node/Blocks/dotBlock';
import { ElbowBlock } from '@babylonjs/core/Materials/Node/Blocks/elbowBlock';
import { FresnelBlock } from '@babylonjs/core/Materials/Node/Blocks/fresnelBlock';
import { GradientBlock } from '@babylonjs/core/Materials/Node/Blocks/gradientBlock';
import { GradientBlockColorStep } from '@babylonjs/core/Materials/Node/Blocks/gradientBlock';
import { LengthBlock } from '@babylonjs/core/Materials/Node/Blocks/lengthBlock';
import { LerpBlock } from '@babylonjs/core/Materials/Node/Blocks/lerpBlock';
import { LoopBlock } from '@babylonjs/core/Materials/Node/Blocks/loopBlock';
import { MatrixBuilderBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixBuilderBlock';
import { MatrixDeterminantBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixDeterminantBlock';
import { MatrixSplitterBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixSplitterBlock';
import { MatrixTransposeBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixTransposeBlock';
import { MaxBlock } from '@babylonjs/core/Materials/Node/Blocks/maxBlock';
import { MeshAttributeExistsBlock } from '@babylonjs/core/Materials/Node/Blocks/meshAttributeExistsBlock';
import { MinBlock } from '@babylonjs/core/Materials/Node/Blocks/minBlock';
import { ModBlock } from '@babylonjs/core/Materials/Node/Blocks/modBlock';
import { MultiplyBlock } from '@babylonjs/core/Materials/Node/Blocks/multiplyBlock';
import { NLerpBlock } from '@babylonjs/core/Materials/Node/Blocks/nLerpBlock';
import { NegateBlock } from '@babylonjs/core/Materials/Node/Blocks/negateBlock';
import { NormalBlendBlock } from '@babylonjs/core/Materials/Node/Blocks/normalBlendBlock';
import { NormalizeBlock } from '@babylonjs/core/Materials/Node/Blocks/normalizeBlock';
import { OneMinusBlock } from '@babylonjs/core/Materials/Node/Blocks/oneMinusBlock';
import { PosterizeBlock } from '@babylonjs/core/Materials/Node/Blocks/posterizeBlock';
import { PowBlock } from '@babylonjs/core/Materials/Node/Blocks/powBlock';
import { RandomNumberBlock } from '@babylonjs/core/Materials/Node/Blocks/randomNumberBlock';
import { ReciprocalBlock } from '@babylonjs/core/Materials/Node/Blocks/reciprocalBlock';
import { ReflectBlock } from '@babylonjs/core/Materials/Node/Blocks/reflectBlock';
import { RefractBlock } from '@babylonjs/core/Materials/Node/Blocks/refractBlock';
import { RemapBlock } from '@babylonjs/core/Materials/Node/Blocks/remapBlock';
import { ReplaceColorBlock } from '@babylonjs/core/Materials/Node/Blocks/replaceColorBlock';
import { Rotate2dBlock } from '@babylonjs/core/Materials/Node/Blocks/rotate2dBlock';
import { ScaleBlock } from '@babylonjs/core/Materials/Node/Blocks/scaleBlock';
import { SimplexPerlin3DBlock } from '@babylonjs/core/Materials/Node/Blocks/simplexPerlin3DBlock';
import { SmoothStepBlock } from '@babylonjs/core/Materials/Node/Blocks/smoothStepBlock';
import { StepBlock } from '@babylonjs/core/Materials/Node/Blocks/stepBlock';
import { StorageReadBlock } from '@babylonjs/core/Materials/Node/Blocks/storageReadBlock';
import { StorageWriteBlock } from '@babylonjs/core/Materials/Node/Blocks/storageWriteBlock';
import { SubtractBlock } from '@babylonjs/core/Materials/Node/Blocks/subtractBlock';
import { TransformBlock } from '@babylonjs/core/Materials/Node/Blocks/transformBlock';
import { TriPlanarBlock } from '@babylonjs/core/Materials/Node/Blocks/triPlanarBlock';
import { TrigonometryBlock } from '@babylonjs/core/Materials/Node/Blocks/trigonometryBlock';
import { VectorMergerBlock } from '@babylonjs/core/Materials/Node/Blocks/vectorMergerBlock';
import { VectorSplitterBlock } from '@babylonjs/core/Materials/Node/Blocks/vectorSplitterBlock';
import { ViewDirectionBlock } from '@babylonjs/core/Materials/Node/Blocks/viewDirectionBlock';
import { VoronoiNoiseBlock } from '@babylonjs/core/Materials/Node/Blocks/voronoiNoiseBlock';
import { WaveBlock } from '@babylonjs/core/Materials/Node/Blocks/waveBlock';
import { WorleyNoise3DBlock } from '@babylonjs/core/Materials/Node/Blocks/worleyNoise3DBlock';
import { NodeMaterial } from '@babylonjs/core/Materials/Node/nodeMaterial';
import { NodeMaterialDefines } from '@babylonjs/core/Materials/Node/nodeMaterial';
import { NodeMaterialBlock } from '@babylonjs/core/Materials/Node/nodeMaterialBlock';
import { NodeMaterialConnectionPoint } from '@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint';
import { NodeMaterialBuildState } from '@babylonjs/core/Materials/Node/nodeMaterialBuildState';
import { NodeMaterialBuildStateSharedData } from '@babylonjs/core/Materials/Node/nodeMaterialBuildStateSharedData';
import { NodeMaterialConnectionPointCustomObject } from '@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject';
import { SetToDefaultGaussianSplatting } from '@babylonjs/core/Materials/Node/nodeMaterialDefault';
import { OcclusionMaterial } from '@babylonjs/core/Materials/Occlusion/occlusionMaterial';
import { MaterialAnisotropicDefines } from '@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration';
import { PBRAnisotropicConfiguration } from '@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration';
import { MaterialBRDFDefines } from '@babylonjs/core/Materials/PBR/pbrBRDFConfiguration';
import { PBRBRDFConfiguration } from '@babylonjs/core/Materials/PBR/pbrBRDFConfiguration';
import { PBRBaseMaterial } from '@babylonjs/core/Materials/PBR/pbrBaseMaterial';
import { PBRMaterialDefines } from '@babylonjs/core/Materials/PBR/pbrBaseMaterial';
import { PBRBaseSimpleMaterial } from '@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial';
import { MaterialClearCoatDefines } from '@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration';
import { PBRClearCoatConfiguration } from '@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration';
import { MaterialIridescenceDefines } from '@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration';
import { PBRIridescenceConfiguration } from '@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { PBRMetallicRoughnessMaterial } from '@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial';
import { MaterialSheenDefines } from '@babylonjs/core/Materials/PBR/pbrSheenConfiguration';
import { PBRSheenConfiguration } from '@babylonjs/core/Materials/PBR/pbrSheenConfiguration';
import { PBRSpecularGlossinessMaterial } from '@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial';
import { MaterialSubSurfaceDefines } from '@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration';
import { PBRSubSurfaceConfiguration } from '@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration';
import { HDRFiltering } from '@babylonjs/core/Materials/Textures/Filtering/hdrFiltering';
import { _BasisTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader';
import { _DDSTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader';
import { _ENVTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/envTextureLoader';
import { _ExrTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader';
import { _HDRTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader';
import { _IESTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader';
import { _KTXTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader';
import { _GetCompatibleTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager';
import { registerTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager';
import { unregisterTextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager';
import { _TGATextureLoader } from '@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader';
import { MultiviewRenderTarget } from '@babylonjs/core/Materials/Textures/MultiviewRenderTarget';
import { TexturePackerFrame } from '@babylonjs/core/Materials/Textures/Packer/frame';
import { TexturePacker } from '@babylonjs/core/Materials/Textures/Packer/packer';
import { CustomProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture';
import { NoiseProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture';
import { ProceduralTexture } from '@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture';
import { ProceduralTextureSceneComponent } from '@babylonjs/core/Materials/Textures/Procedurals/proceduralTextureSceneComponent';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { ColorGradingTexture } from '@babylonjs/core/Materials/Textures/colorGradingTexture';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';
import { EquiRectangularCubeTexture } from '@babylonjs/core/Materials/Textures/equiRectangularCubeTexture';
import { ExternalTexture } from '@babylonjs/core/Materials/Textures/externalTexture';
import { HDRCubeTexture } from '@babylonjs/core/Materials/Textures/hdrCubeTexture';
import { HtmlElementTexture } from '@babylonjs/core/Materials/Textures/htmlElementTexture';
import { GetTypeForDepthTexture } from '@babylonjs/core/Materials/Textures/internalTexture';
import { HasStencilAspect } from '@babylonjs/core/Materials/Textures/internalTexture';
import { InternalTexture } from '@babylonjs/core/Materials/Textures/internalTexture';
import { IsDepthTexture } from '@babylonjs/core/Materials/Textures/internalTexture';
import { MirrorTexture } from '@babylonjs/core/Materials/Textures/mirrorTexture';
import { MultiRenderTarget } from '@babylonjs/core/Materials/Textures/multiRenderTarget';
import { PrePassRenderTarget } from '@babylonjs/core/Materials/Textures/prePassRenderTarget';
import { RawCubeTexture } from '@babylonjs/core/Materials/Textures/rawCubeTexture';
import { RawTexture } from '@babylonjs/core/Materials/Textures/rawTexture';
import { RawTexture2DArray } from '@babylonjs/core/Materials/Textures/rawTexture2DArray';
import { RawTexture3D } from '@babylonjs/core/Materials/Textures/rawTexture3D';
import { RefractionTexture } from '@babylonjs/core/Materials/Textures/refractionTexture';
import { RenderTargetTexture } from '@babylonjs/core/Materials/Textures/renderTargetTexture';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { getDimensionsFromTextureSize } from '@babylonjs/core/Materials/Textures/textureCreationOptions';
import { textureSizeIsObject } from '@babylonjs/core/Materials/Textures/textureCreationOptions';
import { TextureSampler } from '@babylonjs/core/Materials/Textures/textureSampler';
import { ThinRenderTargetTexture } from '@babylonjs/core/Materials/Textures/thinRenderTargetTexture';
import { ThinTexture } from '@babylonjs/core/Materials/Textures/thinTexture';
import { VideoTexture } from '@babylonjs/core/Materials/Textures/videoTexture';
import { addClipPlaneUniforms } from '@babylonjs/core/Materials/clipPlaneMaterialHelper';
import { bindClipPlane } from '@babylonjs/core/Materials/clipPlaneMaterialHelper';
import { prepareDefinesForClipPlanes } from '@babylonjs/core/Materials/clipPlaneMaterialHelper';
import { prepareStringDefinesForClipPlanes } from '@babylonjs/core/Materials/clipPlaneMaterialHelper';
import { ColorCurves } from '@babylonjs/core/Materials/colorCurves';
import { DrawWrapper } from '@babylonjs/core/Materials/drawWrapper';
import { Effect } from '@babylonjs/core/Materials/effect';
import { EffectFallbacks } from '@babylonjs/core/Materials/effectFallbacks';
import { EffectRenderer } from '@babylonjs/core/Materials/effectRenderer';
import { EffectWrapper } from '@babylonjs/core/Materials/effectRenderer';
import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters';
import { ImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration';
import { Material } from '@babylonjs/core/Materials/material';
import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';
import { MaterialPluginBase } from '@babylonjs/core/Materials/materialPluginBase';
import { createDetailMapPlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRAnisotropicPlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRBRDFPlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRClearCoatPlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRIridescencePlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRSheenPlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { createPBRSubSurfacePlugin } from '@babylonjs/core/Materials/materialPluginFactoryExport';
import { MaterialPluginManager } from '@babylonjs/core/Materials/materialPluginManager';
import { RegisterMaterialPlugin } from '@babylonjs/core/Materials/materialPluginManager';
import { UnregisterAllMaterialPlugins } from '@babylonjs/core/Materials/materialPluginManager';
import { UnregisterMaterialPlugin } from '@babylonjs/core/Materials/materialPluginManager';
import { MaterialStencilState } from '@babylonjs/core/Materials/materialStencilState';
import { MeshDebugPluginMaterial } from '@babylonjs/core/Materials/meshDebugPluginMaterial';
import { MultiMaterial } from '@babylonjs/core/Materials/multiMaterial';
import { PrePassConfiguration } from '@babylonjs/core/Materials/prePassConfiguration';
import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { ShadowDepthWrapper } from '@babylonjs/core/Materials/shadowDepthWrapper';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { StandardMaterialDefines } from '@babylonjs/core/Materials/standardMaterial';
import { UniformBuffer } from '@babylonjs/core/Materials/uniformBuffer';
import { UniformBufferEffectCommonAccessor } from '@babylonjs/core/Materials/uniformBufferEffectCommonAccessor';
import { Halton2DSequence } from '@babylonjs/core/Maths/halton2DSequence';
import { Angle } from '@babylonjs/core/Maths/math';
import { Arc2 } from '@babylonjs/core/Maths/math';
import { Color3 } from '@babylonjs/core/Maths/math';
import { Color4 } from '@babylonjs/core/Maths/math';
import { Curve3 } from '@babylonjs/core/Maths/math';
import { Matrix } from '@babylonjs/core/Maths/math';
import { Path2 } from '@babylonjs/core/Maths/math';
import { Path3D } from '@babylonjs/core/Maths/math';
import { Plane } from '@babylonjs/core/Maths/math';
import { PositionNormalTextureVertex } from '@babylonjs/core/Maths/math';
import { PositionNormalVertex } from '@babylonjs/core/Maths/math';
import { Quaternion } from '@babylonjs/core/Maths/math';
import { Size } from '@babylonjs/core/Maths/math';
import { Vector2 } from '@babylonjs/core/Maths/math';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Vector4 } from '@babylonjs/core/Maths/math';
import { Viewport } from '@babylonjs/core/Maths/math';
import { SphericalHarmonics } from '@babylonjs/core/Maths/sphericalPolynomial';
import { SphericalPolynomial } from '@babylonjs/core/Maths/sphericalPolynomial';
import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateSegmentedBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateCapsule } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
import { CreateCapsuleVertexData } from '@babylonjs/core/Meshes/Builders/capsuleBuilder';
import { CreateCylinder } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';
import { CreateCylinderVertexData } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders/decalBuilder';
import { CreateDisc } from '@babylonjs/core/Meshes/Builders/discBuilder';
import { CreateDiscVertexData } from '@babylonjs/core/Meshes/Builders/discBuilder';
import { CreateGeodesic } from '@babylonjs/core/Meshes/Builders/geodesicBuilder';
import { CreateGoldberg } from '@babylonjs/core/Meshes/Builders/goldbergBuilder';
import { CreateGoldbergVertexData } from '@babylonjs/core/Meshes/Builders/goldbergBuilder';
import { CompleteGreasedLineColorTable } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
import { CompleteGreasedLineWidthTable } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
import { CreateGreasedLine } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
import { CreateGreasedLineMaterial } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
import { GetPointsCount } from '@babylonjs/core/Meshes/Builders/greasedLineBuilder';
import { CreateGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateGroundFromHeightMapVertexData } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateGroundVertexData } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateTiledGround } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateTiledGroundVertexData } from '@babylonjs/core/Meshes/Builders/groundBuilder';
import { CreateHemisphere } from '@babylonjs/core/Meshes/Builders/hemisphereBuilder';
import { CreateIcoSphere } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';
import { CreateIcoSphereVertexData } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';
import { CreateLathe } from '@babylonjs/core/Meshes/Builders/latheBuilder';
import { CreateDashedLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { CreateDashedLinesVertexData } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { CreateLineSystem } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { CreateLineSystemVertexData } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { CreateLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';
import { CreatePolygon } from '@babylonjs/core/Meshes/Builders/polygonBuilder';
import { CreatePolygonVertexData } from '@babylonjs/core/Meshes/Builders/polygonBuilder';
import { ExtrudePolygon } from '@babylonjs/core/Meshes/Builders/polygonBuilder';
import { CreatePolyhedron } from '@babylonjs/core/Meshes/Builders/polyhedronBuilder';
import { CreatePolyhedronVertexData } from '@babylonjs/core/Meshes/Builders/polyhedronBuilder';
import { CreateRibbon } from '@babylonjs/core/Meshes/Builders/ribbonBuilder';
import { CreateRibbonVertexData } from '@babylonjs/core/Meshes/Builders/ribbonBuilder';
import { ExtrudeShape } from '@babylonjs/core/Meshes/Builders/shapeBuilder';
import { ExtrudeShapeCustom } from '@babylonjs/core/Meshes/Builders/shapeBuilder';
import { CreateSphere } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreateText } from '@babylonjs/core/Meshes/Builders/textBuilder';
import { CreateTextShapePaths } from '@babylonjs/core/Meshes/Builders/textBuilder';
import { CreateTiledBox } from '@babylonjs/core/Meshes/Builders/tiledBoxBuilder';
import { CreateTiledBoxVertexData } from '@babylonjs/core/Meshes/Builders/tiledBoxBuilder';
import { CreateTiledPlane } from '@babylonjs/core/Meshes/Builders/tiledPlaneBuilder';
import { CreateTiledPlaneVertexData } from '@babylonjs/core/Meshes/Builders/tiledPlaneBuilder';
import { CreateTorus } from '@babylonjs/core/Meshes/Builders/torusBuilder';
import { CreateTorusVertexData } from '@babylonjs/core/Meshes/Builders/torusBuilder';
import { CreateTorusKnot } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';
import { CreateTorusKnotVertexData } from '@babylonjs/core/Meshes/Builders/torusKnotBuilder';
import { CreateTube } from '@babylonjs/core/Meshes/Builders/tubeBuilder';
import { DracoCodec } from '@babylonjs/core/Meshes/Compression/dracoCodec';
import { _GetDefaultNumWorkers } from '@babylonjs/core/Meshes/Compression/dracoCodec';
import { _IsConfigurationAvailable } from '@babylonjs/core/Meshes/Compression/dracoCodec';
import { DracoCompression } from '@babylonjs/core/Meshes/Compression/dracoCompression';
import { decodeMesh } from '@babylonjs/core/Meshes/Compression/dracoCompressionWorker';
import { initializeWebWorker } from '@babylonjs/core/Meshes/Compression/dracoCompressionWorker';
import { workerFunction } from '@babylonjs/core/Meshes/Compression/dracoCompressionWorker';
import { DracoDecoder } from '@babylonjs/core/Meshes/Compression/dracoDecoder';
import { MeshoptCompression } from '@babylonjs/core/Meshes/Compression/meshoptCompression';
import { GaussianSplattingMesh } from '@babylonjs/core/Meshes/GaussianSplatting/gaussianSplattingMesh';
import { GreasedLineBaseMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineBaseMesh';
import { GreasedLineMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineMesh';
import { GreasedLineRibbonMesh } from '@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh';
import { InstantiateBaseBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateBaseBlock';
import { InstantiateBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateBlock';
import { InstantiateLinearBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateLinearBlock';
import { InstantiateOnFacesBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateOnFacesBlock';
import { InstantiateOnVerticesBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateOnVerticesBlock';
import { InstantiateOnVolumeBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateOnVolumeBlock';
import { InstantiateRadialBlock } from '@babylonjs/core/Meshes/Node/Blocks/Instances/instantiateRadialBlock';
import { AlignBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/alignBlock';
import { RotationXBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/rotationXBlock';
import { RotationYBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/rotationYBlock';
import { RotationZBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/rotationZBlock';
import { ScalingBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/scalingBlock';
import { TranslationBlock } from '@babylonjs/core/Meshes/Node/Blocks/Matrices/translationBlock';
import { AggregatorBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/aggregatorBlock';
import { LatticeBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/latticeBlock';
import { SetColorsBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setColorsBlock';
import { SetMaterialIDBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setMaterialIDBlock';
import { SetNormalsBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setNormalsBlock';
import { SetPositionsBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setPositionsBlock';
import { SetTangentsBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setTangentsBlock';
import { SetUVsBlock } from '@babylonjs/core/Meshes/Node/Blocks/Set/setUVsBlock';
import { BoxBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/boxBlock';
import { CapsuleBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/capsuleBlock';
import { CylinderBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/cylinderBlock';
import { DiscBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/discBlock';
import { GridBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/gridBlock';
import { IcoSphereBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/icoSphereBlock';
import { MeshBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/meshBlock';
import { NullBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/nullBlock';
import { PlaneBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/planeBlock';
import { SphereBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/sphereBlock';
import { TorusBlock } from '@babylonjs/core/Meshes/Node/Blocks/Sources/torusBlock';
import { TeleportInBlock } from '@babylonjs/core/Meshes/Node/Blocks/Teleport/teleportInBlock';
import { TeleportOutBlock } from '@babylonjs/core/Meshes/Node/Blocks/Teleport/teleportOutBlock';
import { GeometryTextureBlock } from '@babylonjs/core/Meshes/Node/Blocks/Textures/geometryTextureBlock';
import { GeometryTextureFetchBlock } from '@babylonjs/core/Meshes/Node/Blocks/Textures/geometryTextureFetchBlock';
import { BooleanGeometryBlock } from '@babylonjs/core/Meshes/Node/Blocks/booleanGeometryBlock';
import { BoundingBlock } from '@babylonjs/core/Meshes/Node/Blocks/boundingBlock';
import { CleanGeometryBlock } from '@babylonjs/core/Meshes/Node/Blocks/cleanGeometryBlock';
import { ComputeNormalsBlock } from '@babylonjs/core/Meshes/Node/Blocks/computeNormalsBlock';
import { ConditionBlock } from '@babylonjs/core/Meshes/Node/Blocks/conditionBlock';
import { DebugBlock } from '@babylonjs/core/Meshes/Node/Blocks/debugBlock';
import { GeometryArcTan2Block } from '@babylonjs/core/Meshes/Node/Blocks/geometryArcTan2Block';
import { GeometryClampBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryClampBlock';
import { GeometryCollectionBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryCollectionBlock';
import { GeometryCrossBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryCrossBlock';
import { GeometryCurveBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryCurveBlock';
import { GeometryDesaturateBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryDesaturateBlock';
import { GeometryDistanceBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryDistanceBlock';
import { GeometryDotBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryDotBlock';
import { GeometryElbowBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryElbowBlock';
import { GeometryInfoBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryInfoBlock';
import { GeometryInputBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryInputBlock';
import { GeometryInterceptorBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryInterceptorBlock';
import { GeometryLengthBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryLengthBlock';
import { GeometryLerpBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryLerpBlock';
import { GeometryModBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryModBlock';
import { GeometryNLerpBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryNLerpBlock';
import { GeometryOptimizeBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryOptimizeBlock';
import { GeometryOutputBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryOutputBlock';
import { GeometryPosterizeBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryPosterizeBlock';
import { GeometryPowBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryPowBlock';
import { GeometryReplaceColorBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryReplaceColorBlock';
import { GeometryRotate2dBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryRotate2dBlock';
import { GeometrySmoothStepBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometrySmoothStepBlock';
import { GeometryStepBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryStepBlock';
import { GeometryTransformBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryTransformBlock';
import { GeometryTrigonometryBlock } from '@babylonjs/core/Meshes/Node/Blocks/geometryTrigonometryBlock';
import { IntFloatConverterBlock } from '@babylonjs/core/Meshes/Node/Blocks/intFloatConverterBlock';
import { MapRangeBlock } from '@babylonjs/core/Meshes/Node/Blocks/mapRangeBlock';
import { MappingBlock } from '@babylonjs/core/Meshes/Node/Blocks/mappingBlock';
import { MathBlock } from '@babylonjs/core/Meshes/Node/Blocks/mathBlock';
import { MatrixComposeBlock } from '@babylonjs/core/Meshes/Node/Blocks/matrixComposeBlock';
import { MergeGeometryBlock } from '@babylonjs/core/Meshes/Node/Blocks/mergeGeometryBlock';
import { NoiseBlock } from '@babylonjs/core/Meshes/Node/Blocks/noiseBlock';
import { NormalizeVectorBlock } from '@babylonjs/core/Meshes/Node/Blocks/normalizeVectorBlock';
import { RandomBlock } from '@babylonjs/core/Meshes/Node/Blocks/randomBlock';
import { VectorConverterBlock } from '@babylonjs/core/Meshes/Node/Blocks/vectorConverterBlock';
import { NodeGeometry } from '@babylonjs/core/Meshes/Node/nodeGeometry';
import { NodeGeometryBlock } from '@babylonjs/core/Meshes/Node/nodeGeometryBlock';
import { NodeGeometryConnectionPoint } from '@babylonjs/core/Meshes/Node/nodeGeometryBlockConnectionPoint';
import { NodeGeometryBuildState } from '@babylonjs/core/Meshes/Node/nodeGeometryBuildState';
import { WebGLDataBuffer } from '@babylonjs/core/Meshes/WebGL/webGLDataBuffer';
import { WebGPUDataBuffer } from '@babylonjs/core/Meshes/WebGPU/webgpuDataBuffer';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { CSG } from '@babylonjs/core/Meshes/csg';
import { CSG2 } from '@babylonjs/core/Meshes/csg2';
import { InitializeCSG2Async } from '@babylonjs/core/Meshes/csg2';
import { IsCSG2Ready } from '@babylonjs/core/Meshes/csg2';
import { PolyhedronData } from '@babylonjs/core/Meshes/geodesicMesh';
import { _PrimaryIsoTriangle } from '@babylonjs/core/Meshes/geodesicMesh';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { GoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh';
import { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import { Lattice } from '@babylonjs/core/Meshes/lattice';
import { InstancedLinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { _InstancesBatch } from '@babylonjs/core/Meshes/mesh';
import { MeshLODLevel } from '@babylonjs/core/Meshes/meshLODLevel';
import { QuadraticErrorSimplification } from '@babylonjs/core/Meshes/meshSimplification';
import { SimplificationQueue } from '@babylonjs/core/Meshes/meshSimplification';
import { SimplificationSettings } from '@babylonjs/core/Meshes/meshSimplification';
import { SimplicationQueueSceneComponent } from '@babylonjs/core/Meshes/meshSimplificationSceneComponent';
import { MeshUVSpaceRenderer } from '@babylonjs/core/Meshes/meshUVSpaceRenderer';
import { computeMaxExtents } from '@babylonjs/core/Meshes/meshUtils';
import { PolygonMeshBuilder } from '@babylonjs/core/Meshes/polygonMesh';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { TrailMesh } from '@babylonjs/core/Meshes/trailMesh';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { GetCubeMapTextureData } from '@babylonjs/core/Misc/HighDynamicRange/hdr';
import { RGBE_ReadHeader } from '@babylonjs/core/Misc/HighDynamicRange/hdr';
import { RGBE_ReadPixels } from '@babylonjs/core/Misc/HighDynamicRange/hdr';
import { DynamicFloat32Array } from '@babylonjs/core/Misc/PerformanceViewer/dynamicFloat32Array';
import { PerformanceViewerCollector } from '@babylonjs/core/Misc/PerformanceViewer/performanceViewerCollector';
import { BuildArray } from '@babylonjs/core/Misc/arrayTools';
import { BuildTuple } from '@babylonjs/core/Misc/arrayTools';
import { _ObserveArray } from '@babylonjs/core/Misc/arrayTools';
import { AbstractAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { AnimationAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { AssetsManager } from '@babylonjs/core/Misc/assetsManager';
import { AssetsProgressEvent } from '@babylonjs/core/Misc/assetsManager';
import { BinaryFileAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { ContainerAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { CubeTextureAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { EquiRectangularCubeTextureAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { HDRCubeTextureAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { ImageAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { MeshAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { TextFileAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { TextureAssetTask } from '@babylonjs/core/Misc/assetsManager';
import { AsyncLock } from '@babylonjs/core/Misc/asyncLock';
import { GetInternalFormatFromBasisFormat } from '@babylonjs/core/Misc/basis';
import { LoadTextureFromTranscodeResult } from '@babylonjs/core/Misc/basis';
import { SetBasisTranscoderWorker } from '@babylonjs/core/Misc/basis';
import { TranscodeAsync } from '@babylonjs/core/Misc/basis';
import { BitArray } from '@babylonjs/core/Misc/bitArray';
import { GetEnvironmentBRDFTexture } from '@babylonjs/core/Misc/brdfTextureTools';
import { EscapeRegExp } from '@babylonjs/core/Misc/codeStringParsingTools';
import { ExtractBetweenMarkers } from '@babylonjs/core/Misc/codeStringParsingTools';
import { FindBackward } from '@babylonjs/core/Misc/codeStringParsingTools';
import { InjectStartingAndEndingCode } from '@babylonjs/core/Misc/codeStringParsingTools';
import { IsIdentifierChar } from '@babylonjs/core/Misc/codeStringParsingTools';
import { RemoveComments } from '@babylonjs/core/Misc/codeStringParsingTools';
import { SkipWhitespaces } from '@babylonjs/core/Misc/codeStringParsingTools';
import { CopyTextureToTexture } from '@babylonjs/core/Misc/copyTextureToTexture';
import { GenerateBase64StringFromPixelData } from '@babylonjs/core/Misc/copyTools';
import { GenerateBase64StringFromTexture } from '@babylonjs/core/Misc/copyTools';
import { GenerateBase64StringFromTextureAsync } from '@babylonjs/core/Misc/copyTools';
import { createYieldingScheduler } from '@babylonjs/core/Misc/coroutine';
import { inlineScheduler } from '@babylonjs/core/Misc/coroutine';
import { makeAsyncFunction } from '@babylonjs/core/Misc/coroutine';
import { makeSyncFunction } from '@babylonjs/core/Misc/coroutine';
import { runCoroutine } from '@babylonjs/core/Misc/coroutine';
import { runCoroutineAsync } from '@babylonjs/core/Misc/coroutine';
import { runCoroutineSync } from '@babylonjs/core/Misc/coroutine';
import { DataReader } from '@babylonjs/core/Misc/dataReader';
import { expandToProperty } from '@babylonjs/core/Misc/decorators';
import { nativeOverride } from '@babylonjs/core/Misc/decorators';
import { serialize } from '@babylonjs/core/Misc/decorators';
import { serializeAsCameraReference } from '@babylonjs/core/Misc/decorators';
import { serializeAsColor3 } from '@babylonjs/core/Misc/decorators';
import { serializeAsColor4 } from '@babylonjs/core/Misc/decorators';
import { serializeAsColorCurves } from '@babylonjs/core/Misc/decorators';
import { serializeAsFresnelParameters } from '@babylonjs/core/Misc/decorators';
import { serializeAsImageProcessingConfiguration } from '@babylonjs/core/Misc/decorators';
import { serializeAsMatrix } from '@babylonjs/core/Misc/decorators';
import { serializeAsMeshReference } from '@babylonjs/core/Misc/decorators';
import { serializeAsQuaternion } from '@babylonjs/core/Misc/decorators';
import { serializeAsTexture } from '@babylonjs/core/Misc/decorators';
import { serializeAsVector2 } from '@babylonjs/core/Misc/decorators';
import { serializeAsVector3 } from '@babylonjs/core/Misc/decorators';
import { deepMerge } from '@babylonjs/core/Misc/deepMerger';
import { Deferred } from '@babylonjs/core/Misc/deferred';
import { DepthReducer } from '@babylonjs/core/Misc/depthReducer';
import { _WarnImport } from '@babylonjs/core/Misc/devTools';
import { GetDOMTextContent } from '@babylonjs/core/Misc/domManagement';
import { IsDocumentAvailable } from '@babylonjs/core/Misc/domManagement';
import { IsNavigatorAvailable } from '@babylonjs/core/Misc/domManagement';
import { IsWindowObjectExist } from '@babylonjs/core/Misc/domManagement';
import { Dispose } from '@babylonjs/core/Misc/dumpTools';
import { DumpData } from '@babylonjs/core/Misc/dumpTools';
import { DumpDataAsync } from '@babylonjs/core/Misc/dumpTools';
import { DumpFramebuffer } from '@babylonjs/core/Misc/dumpTools';
import { CreateEnvTextureAsync } from '@babylonjs/core/Misc/environmentTextureTools';
import { CreateImageDataArrayBufferViews } from '@babylonjs/core/Misc/environmentTextureTools';
import { GetEnvInfo } from '@babylonjs/core/Misc/environmentTextureTools';
import { UploadEnvLevelsAsync } from '@babylonjs/core/Misc/environmentTextureTools';
import { UploadEnvSpherical } from '@babylonjs/core/Misc/environmentTextureTools';
import { UploadLevelsAsync } from '@babylonjs/core/Misc/environmentTextureTools';
import { _UpdateRGBDAsync } from '@babylonjs/core/Misc/environmentTextureTools';
import { normalizeEnvInfo } from '@babylonjs/core/Misc/environmentTextureTools';
import { captureEquirectangularFromScene } from '@babylonjs/core/Misc/equirectangularCapture';
import { RuntimeError } from '@babylonjs/core/Misc/error';
import { DecodeBase64UrlToBinary } from '@babylonjs/core/Misc/fileTools';
import { DecodeBase64UrlToString } from '@babylonjs/core/Misc/fileTools';
import { IsBase64DataUrl } from '@babylonjs/core/Misc/fileTools';
import { IsFileURL } from '@babylonjs/core/Misc/fileTools';
import { LoadFile } from '@babylonjs/core/Misc/fileTools';
import { LoadFileError } from '@babylonjs/core/Misc/fileTools';
import { LoadImage } from '@babylonjs/core/Misc/fileTools';
import { ReadFile } from '@babylonjs/core/Misc/fileTools';
import { ReadFileError } from '@babylonjs/core/Misc/fileTools';
import { RequestFile } from '@babylonjs/core/Misc/fileTools';
import { RequestFileError } from '@babylonjs/core/Misc/fileTools';
import { SetCorsBehavior } from '@babylonjs/core/Misc/fileTools';
import { TestBase64DataUrl } from '@babylonjs/core/Misc/fileTools';
import { _injectLTSFileTools } from '@babylonjs/core/Misc/fileTools';
import { FilesInput } from '@babylonjs/core/Misc/filesInput';
import { Color3Gradient } from '@babylonjs/core/Misc/gradients';
import { ColorGradient } from '@babylonjs/core/Misc/gradients';
import { FactorGradient } from '@babylonjs/core/Misc/gradients';
import { RandomGUID } from '@babylonjs/core/Misc/guid';
import { KhronosTextureContainer } from '@babylonjs/core/Misc/khronosTextureContainer';
import { DefaultKTX2DecoderOptions } from '@babylonjs/core/Misc/khronosTextureContainer2';
import { KhronosTextureContainer2 } from '@babylonjs/core/Misc/khronosTextureContainer2';
import { applyConfig } from '@babylonjs/core/Misc/khronosTextureContainer2Worker';
import { MeshExploder } from '@babylonjs/core/Misc/meshExploder';
import { MinMaxReducer } from '@babylonjs/core/Misc/minMaxReducer';
import { EventState } from '@babylonjs/core/Misc/observable';
import { Observable } from '@babylonjs/core/Misc/observable';
import { Observer } from '@babylonjs/core/Misc/observable';
import { PerfCounter } from '@babylonjs/core/Misc/perfCounter';
import { PerformanceMonitor } from '@babylonjs/core/Misc/performanceMonitor';
import { RollingAverage } from '@babylonjs/core/Misc/performanceMonitor';
import { PressureObserverWrapper } from '@babylonjs/core/Misc/pressureObserverWrapper';
import { Reflector } from '@babylonjs/core/Misc/reflector';
import { HardwareScalingOptimization } from '@babylonjs/core/Misc/sceneOptimizer';
import { MergeMeshesOptimization } from '@babylonjs/core/Misc/sceneOptimizer';
import { SceneOptimization } from '@babylonjs/core/Misc/sceneOptimizer';
import { SceneOptimizer } from '@babylonjs/core/Misc/sceneOptimizer';
import { SceneOptimizerOptions } from '@babylonjs/core/Misc/sceneOptimizer';
import { TextureOptimization } from '@babylonjs/core/Misc/sceneOptimizer';
import { SceneRecorder } from '@babylonjs/core/Misc/sceneRecorder';
import { CreateScreenshot } from '@babylonjs/core/Misc/screenshotTools';
import { CreateScreenshotAsync } from '@babylonjs/core/Misc/screenshotTools';
import { CreateScreenshotUsingRenderTarget } from '@babylonjs/core/Misc/screenshotTools';
import { CreateScreenshotUsingRenderTargetAsync } from '@babylonjs/core/Misc/screenshotTools';
import { CreateScreenshotWithResizeAsync } from '@babylonjs/core/Misc/screenshotTools';
import { SmartArray } from '@babylonjs/core/Misc/smartArray';
import { SmartArrayNoDuplicate } from '@babylonjs/core/Misc/smartArray';
import { SnapshotRenderingHelper } from '@babylonjs/core/Misc/snapshotRenderingHelper';
import { StringDictionary } from '@babylonjs/core/Misc/stringDictionary';
import { Decode } from '@babylonjs/core/Misc/stringTools';
import { DecodeBase64ToBinary } from '@babylonjs/core/Misc/stringTools';
import { DecodeBase64ToString } from '@babylonjs/core/Misc/stringTools';
import { EncodeArrayBufferToBase64 } from '@babylonjs/core/Misc/stringTools';
import { EndsWith } from '@babylonjs/core/Misc/stringTools';
import { PadNumber } from '@babylonjs/core/Misc/stringTools';
import { StartsWith } from '@babylonjs/core/Misc/stringTools';
import { ApplyPostProcess } from '@babylonjs/core/Misc/textureTools';
import { CreateResizedCopy } from '@babylonjs/core/Misc/textureTools';
import { FromHalfFloat } from '@babylonjs/core/Misc/textureTools';
import { GetTextureDataAsync } from '@babylonjs/core/Misc/textureTools';
import { ToHalfFloat } from '@babylonjs/core/Misc/textureTools';
import { GetTGAHeader } from '@babylonjs/core/Misc/tga';
import { UploadContent } from '@babylonjs/core/Misc/tga';
import { AdvancedTimer } from '@babylonjs/core/Misc/timer';
import { setAndStartTimer } from '@babylonjs/core/Misc/timer';
import { _retryWithInterval } from '@babylonjs/core/Misc/timingTools';
import { AsyncLoop } from '@babylonjs/core/Misc/tools';
import { className } from '@babylonjs/core/Misc/tools';
import { Trajectory } from '@babylonjs/core/Misc/trajectoryClassifier';
import { TrajectoryClassifier } from '@babylonjs/core/Misc/trajectoryClassifier';
import { GetClass } from '@babylonjs/core/Misc/typeStore';
import { GetClassName } from '@babylonjs/core/Misc/typeStore';
import { RegisterClass } from '@babylonjs/core/Misc/typeStore';
import { VideoRecorder } from '@babylonjs/core/Misc/videoRecorder';
import { VirtualJoystick } from '@babylonjs/core/Misc/virtualJoystick';
import { WebRequest } from '@babylonjs/core/Misc/webRequest';
import { AutoReleaseWorkerPool } from '@babylonjs/core/Misc/workerPool';
import { WorkerPool } from '@babylonjs/core/Misc/workerPool';
import { MorphTarget } from '@babylonjs/core/Morph/morphTarget';
import { MorphTargetManager } from '@babylonjs/core/Morph/morphTargetManager';
import { RecastJSCrowd } from '@babylonjs/core/Navigation/Plugins/recastJSPlugin';
import { RecastJSPlugin } from '@babylonjs/core/Navigation/Plugins/recastJSPlugin';
import { Database } from '@babylonjs/core/Offline/database';
import { BoxParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/boxParticleEmitter';
import { ConeDirectedParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/coneParticleEmitter';
import { ConeParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/coneParticleEmitter';
import { CustomParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/customParticleEmitter';
import { CylinderDirectedParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/cylinderParticleEmitter';
import { CylinderParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/cylinderParticleEmitter';
import { HemisphericParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/hemisphericParticleEmitter';
import { MeshParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/meshParticleEmitter';
import { PointParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/pointParticleEmitter';
import { SphereDirectedParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter';
import { SphereParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter';
import { BaseParticleSystem } from '@babylonjs/core/Particles/baseParticleSystem';
import { CloudPoint } from '@babylonjs/core/Particles/cloudPoint';
import { PointsGroup } from '@babylonjs/core/Particles/cloudPoint';
import { ComputeShaderParticleSystem } from '@babylonjs/core/Particles/computeShaderParticleSystem';
import { GPUParticleSystem } from '@babylonjs/core/Particles/gpuParticleSystem';
import { Particle } from '@babylonjs/core/Particles/particle';
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem';
import { ParticleSystemSet } from '@babylonjs/core/Particles/particleSystemSet';
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem';
import { DepthSortedParticle } from '@babylonjs/core/Particles/solidParticle';
import { ModelShape } from '@babylonjs/core/Particles/solidParticle';
import { SolidParticle } from '@babylonjs/core/Particles/solidParticle';
import { SolidParticleVertex } from '@babylonjs/core/Particles/solidParticle';
import { SolidParticleSystem } from '@babylonjs/core/Particles/solidParticleSystem';
import { SubEmitter } from '@babylonjs/core/Particles/subEmitter';
import { ThinParticleSystem } from '@babylonjs/core/Particles/thinParticleSystem';
import { WebGL2ParticleSystem } from '@babylonjs/core/Particles/webgl2ParticleSystem';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins/cannonJSPlugin';
import { OimoJSPlugin } from '@babylonjs/core/Physics/Plugins/oimoJSPlugin';
import { CastingResult } from '@babylonjs/core/Physics/castingResult';
import { PhysicsEngineSceneComponent } from '@babylonjs/core/Physics/joinedPhysicsEngineComponent';
import { PhysicsEngine } from '@babylonjs/core/Physics/physicsEngine';
import { PhysicsHelper } from '@babylonjs/core/Physics/physicsHelper';
import { PhysicsRadialExplosionEventOptions } from '@babylonjs/core/Physics/physicsHelper';
import { PhysicsUpdraftEventOptions } from '@babylonjs/core/Physics/physicsHelper';
import { PhysicsVortexEventOptions } from '@babylonjs/core/Physics/physicsHelper';
import { PhysicsImpostor } from '@babylonjs/core/Physics/physicsImpostor';
import { DistanceJoint } from '@babylonjs/core/Physics/physicsJoint';
import { Hinge2Joint } from '@babylonjs/core/Physics/physicsJoint';
import { HingeJoint } from '@babylonjs/core/Physics/physicsJoint';
import { MotorEnabledJoint } from '@babylonjs/core/Physics/physicsJoint';
import { PhysicsJoint } from '@babylonjs/core/Physics/physicsJoint';
import { PhysicsRaycastResult } from '@babylonjs/core/Physics/physicsRaycastResult';
import { ProximityCastResult } from '@babylonjs/core/Physics/proximityCastResult';
import { ShapeCastResult } from '@babylonjs/core/Physics/shapeCastResult';
import { HavokPlugin } from '@babylonjs/core/Physics/v2/Plugins/havokPlugin';
import { PhysicsCharacterController } from '@babylonjs/core/Physics/v2/characterController';
import { PhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate';
import { PhysicsBody } from '@babylonjs/core/Physics/v2/physicsBody';
import { BallAndSocketConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { DistanceConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { HingeConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { LockConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { Physics6DoFConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { PhysicsConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { PrismaticConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { SliderConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { SpringConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { PhysicsShape } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeBox } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeCapsule } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeContainer } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeConvexHull } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeCylinder } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeGroundMesh } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeHeightField } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeMesh } from '@babylonjs/core/Physics/v2/physicsShape';
import { PhysicsShapeSphere } from '@babylonjs/core/Physics/v2/physicsShape';
import { Ragdoll } from '@babylonjs/core/Physics/v2/ragdoll';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline';
import { LensRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline';
import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { SSAORenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline';
import { SSRRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline';
import { StandardRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline';
import { TAARenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/taaRenderingPipeline';
import { PostProcessRenderEffect } from '@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderEffect';
import { PostProcessRenderPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipeline';
import { PostProcessRenderPipelineManager } from '@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipelineManager';
import { PostProcessRenderPipelineManagerSceneComponent } from '@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent';
import { AnaglyphPostProcess } from '@babylonjs/core/PostProcesses/anaglyphPostProcess';
import { BlackAndWhitePostProcess } from '@babylonjs/core/PostProcesses/blackAndWhitePostProcess';
import { BloomEffect } from '@babylonjs/core/PostProcesses/bloomEffect';
import { BloomMergePostProcess } from '@babylonjs/core/PostProcesses/bloomMergePostProcess';
import { BlurPostProcess } from '@babylonjs/core/PostProcesses/blurPostProcess';
import { ChromaticAberrationPostProcess } from '@babylonjs/core/PostProcesses/chromaticAberrationPostProcess';
import { CircleOfConfusionPostProcess } from '@babylonjs/core/PostProcesses/circleOfConfusionPostProcess';
import { ColorCorrectionPostProcess } from '@babylonjs/core/PostProcesses/colorCorrectionPostProcess';
import { ConvolutionPostProcess } from '@babylonjs/core/PostProcesses/convolutionPostProcess';
import { DepthOfFieldBlurPostProcess } from '@babylonjs/core/PostProcesses/depthOfFieldBlurPostProcess';
import { DepthOfFieldEffect } from '@babylonjs/core/PostProcesses/depthOfFieldEffect';
import { DepthOfFieldMergePostProcess } from '@babylonjs/core/PostProcesses/depthOfFieldMergePostProcess';
import { DisplayPassPostProcess } from '@babylonjs/core/PostProcesses/displayPassPostProcess';
import { ExtractHighlightsPostProcess } from '@babylonjs/core/PostProcesses/extractHighlightsPostProcess';
import { FilterPostProcess } from '@babylonjs/core/PostProcesses/filterPostProcess';
import { FxaaPostProcess } from '@babylonjs/core/PostProcesses/fxaaPostProcess';
import { GrainPostProcess } from '@babylonjs/core/PostProcesses/grainPostProcess';
import { HighlightsPostProcess } from '@babylonjs/core/PostProcesses/highlightsPostProcess';
import { ImageProcessingPostProcess } from '@babylonjs/core/PostProcesses/imageProcessingPostProcess';
import { MotionBlurPostProcess } from '@babylonjs/core/PostProcesses/motionBlurPostProcess';
import { PassCubePostProcess } from '@babylonjs/core/PostProcesses/passPostProcess';
import { PassPostProcess } from '@babylonjs/core/PostProcesses/passPostProcess';
import { PostProcess } from '@babylonjs/core/PostProcesses/postProcess';
import { PostProcessManager } from '@babylonjs/core/PostProcesses/postProcessManager';
import { RefractionPostProcess } from '@babylonjs/core/PostProcesses/refractionPostProcess';
import { ScreenSpaceCurvaturePostProcess } from '@babylonjs/core/PostProcesses/screenSpaceCurvaturePostProcess';
import { ScreenSpaceReflectionPostProcess } from '@babylonjs/core/PostProcesses/screenSpaceReflectionPostProcess';
import { SharpenPostProcess } from '@babylonjs/core/PostProcesses/sharpenPostProcess';
import { StereoscopicInterlacePostProcess } from '@babylonjs/core/PostProcesses/stereoscopicInterlacePostProcess';
import { StereoscopicInterlacePostProcessI } from '@babylonjs/core/PostProcesses/stereoscopicInterlacePostProcess';
import { SubSurfaceScatteringPostProcess } from '@babylonjs/core/PostProcesses/subSurfaceScatteringPostProcess';
import { ThinBlackAndWhitePostProcess } from '@babylonjs/core/PostProcesses/thinBlackAndWhitePostProcess';
import { ThinBloomEffect } from '@babylonjs/core/PostProcesses/thinBloomEffect';
import { ThinBloomMergePostProcess } from '@babylonjs/core/PostProcesses/thinBloomMergePostProcess';
import { ThinBlurPostProcess } from '@babylonjs/core/PostProcesses/thinBlurPostProcess';
import { ThinCircleOfConfusionPostProcess } from '@babylonjs/core/PostProcesses/thinCircleOfConfusionPostProcess';
import { ThinDepthOfFieldBlurPostProcess } from '@babylonjs/core/PostProcesses/thinDepthOfFieldBlurPostProcess';
import { ThinDepthOfFieldEffect } from '@babylonjs/core/PostProcesses/thinDepthOfFieldEffect';
import { ThinDepthOfFieldMergePostProcess } from '@babylonjs/core/PostProcesses/thinDepthOfFieldMergePostProcess';
import { ThinExtractHighlightsPostProcess } from '@babylonjs/core/PostProcesses/thinExtractHighlightsPostProcess';
import { ThinTAAPostProcess } from '@babylonjs/core/PostProcesses/thinTAAPostProcess';
import { TonemapPostProcess } from '@babylonjs/core/PostProcesses/tonemapPostProcess';
import { VolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess';
import { VRDistortionCorrectionPostProcess } from '@babylonjs/core/PostProcesses/vrDistortionCorrectionPostProcess';
import { VRMultiviewToSingleviewPostProcess } from '@babylonjs/core/PostProcesses/vrMultiviewToSingleviewPostProcess';
import { ReflectionProbe } from '@babylonjs/core/Probes/reflectionProbe';
import { GIRSM } from '@babylonjs/core/Rendering/GlobalIllumination/giRSM';
import { GIRSMManager } from '@babylonjs/core/Rendering/GlobalIllumination/giRSMManager';
import { GIRSMRenderPluginMaterial } from '@babylonjs/core/Rendering/GlobalIllumination/giRSMManager';
import { _IblShadowsAccumulationPass } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsAccumulationPass';
import { IBLShadowsPluginMaterial } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsPluginMaterial';
import { IblShadowsRenderPipeline } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsRenderPipeline';
import { _IblShadowsSpatialBlurPass } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsSpatialBlurPass';
import { _IblShadowsVoxelRenderer } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsVoxelRenderer';
import { _IblShadowsVoxelTracingPass } from '@babylonjs/core/Rendering/IBLShadows/iblShadowsVoxelTracingPass';
import { BoundingBoxRenderer } from '@babylonjs/core/Rendering/boundingBoxRenderer';
import { DepthPeelingRenderer } from '@babylonjs/core/Rendering/depthPeelingRenderer';
import { DepthPeelingSceneComponent } from '@babylonjs/core/Rendering/depthPeelingSceneComponent';
import { DepthRenderer } from '@babylonjs/core/Rendering/depthRenderer';
import { DepthRendererSceneComponent } from '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { EdgesRenderer } from '@babylonjs/core/Rendering/edgesRenderer';
import { LineEdgesRenderer } from '@babylonjs/core/Rendering/edgesRenderer';
import { FluidRenderer } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderer';
import { FluidRendererSceneComponent } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderer';
import { FluidRenderingDepthTextureCopy } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingDepthTextureCopy';
import { FluidRenderingObject } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObject';
import { FluidRenderingObjectCustomParticles } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles';
import { FluidRenderingObjectParticleSystem } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem';
import { FluidRenderingTargetRenderer } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingTargetRenderer';
import { FluidRenderingTextures } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingTextures';
import { GeometryBufferRenderer } from '@babylonjs/core/Rendering/geometryBufferRenderer';
import { GeometryBufferRendererSceneComponent } from '@babylonjs/core/Rendering/geometryBufferRendererSceneComponent';
import { IblCdfGenerator } from '@babylonjs/core/Rendering/iblCdfGenerator';
import { IblCdfGeneratorSceneComponent } from '@babylonjs/core/Rendering/iblCdfGeneratorSceneComponent';
import { MotionBlurConfiguration } from '@babylonjs/core/Rendering/motionBlurConfiguration';
import { ObjectRenderer } from '@babylonjs/core/Rendering/objectRenderer';
import { OutlineRenderer } from '@babylonjs/core/Rendering/outlineRenderer';
import { PrePassRenderer } from '@babylonjs/core/Rendering/prePassRenderer';
import { PrePassRendererSceneComponent } from '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import { RSMCreatePluginMaterial } from '@babylonjs/core/Rendering/reflectiveShadowMap';
import { ReflectiveShadowMap } from '@babylonjs/core/Rendering/reflectiveShadowMap';
import { RenderingGroup } from '@babylonjs/core/Rendering/renderingGroup';
import { RenderingManager } from '@babylonjs/core/Rendering/renderingManager';
import { ScreenSpaceReflections2Configuration } from '@babylonjs/core/Rendering/screenSpaceReflections2Configuration';
import { ScreenSpaceReflectionsConfiguration } from '@babylonjs/core/Rendering/screenSpaceReflectionsConfiguration';
import { SSAO2Configuration } from '@babylonjs/core/Rendering/ssao2Configuration';
import { SubSurfaceConfiguration } from '@babylonjs/core/Rendering/subSurfaceConfiguration';
import { SubSurfaceSceneComponent } from '@babylonjs/core/Rendering/subSurfaceSceneComponent';
import { UtilityLayerRenderer } from '@babylonjs/core/Rendering/utilityLayerRenderer';
import { Sprite } from '@babylonjs/core/Sprites/sprite';
import { SpriteManager } from '@babylonjs/core/Sprites/spriteManager';
import { SpriteMap } from '@babylonjs/core/Sprites/spriteMap';
import { SpritePackedManager } from '@babylonjs/core/Sprites/spritePackedManager';
import { SpriteRenderer } from '@babylonjs/core/Sprites/spriteRenderer';
import { SpriteSceneComponent } from '@babylonjs/core/Sprites/spriteSceneComponent';
import { ThinSprite } from '@babylonjs/core/Sprites/thinSprite';
import { AlphaState } from '@babylonjs/core/States/alphaCullingState';
import { DepthCullingState } from '@babylonjs/core/States/depthCullingState';
import { StencilState } from '@babylonjs/core/States/stencilState';
import { StencilStateComposer } from '@babylonjs/core/States/stencilStateComposer';
import { WebXRCompositionLayerRenderTargetTextureProvider } from '@babylonjs/core/XR/features/Layers/WebXRCompositionLayer';
import { WebXRCompositionLayerWrapper } from '@babylonjs/core/XR/features/Layers/WebXRCompositionLayer';
import { WebXRProjectionLayerWrapper } from '@babylonjs/core/XR/features/Layers/WebXRProjectionLayer';
import { WebXRAbstractFeature } from '@babylonjs/core/XR/features/WebXRAbstractFeature';
import { WebXRAnchorSystem } from '@babylonjs/core/XR/features/WebXRAnchorSystem';
import { WebXRBackgroundRemover } from '@babylonjs/core/XR/features/WebXRBackgroundRemover';
import { WebXRControllerMovement } from '@babylonjs/core/XR/features/WebXRControllerMovement';
import { WebXRControllerPhysics } from '@babylonjs/core/XR/features/WebXRControllerPhysics';
import { WebXRControllerPointerSelection } from '@babylonjs/core/XR/features/WebXRControllerPointerSelection';
import { WebXRMotionControllerTeleportation } from '@babylonjs/core/XR/features/WebXRControllerTeleportation';
import { WebXRDomOverlay } from '@babylonjs/core/XR/features/WebXRDOMOverlay';
import { WebXRDepthSensing } from '@babylonjs/core/XR/features/WebXRDepthSensing';
import { WebXREyeTracking } from '@babylonjs/core/XR/features/WebXREyeTracking';
import { WebXRFeaturePointSystem } from '@babylonjs/core/XR/features/WebXRFeaturePointSystem';
import { WebXRHand } from '@babylonjs/core/XR/features/WebXRHandTracking';
import { WebXRHandTracking } from '@babylonjs/core/XR/features/WebXRHandTracking';
import { WebXRHitTest } from '@babylonjs/core/XR/features/WebXRHitTest';
import { WebXRHitTestLegacy } from '@babylonjs/core/XR/features/WebXRHitTestLegacy';
import { WebXRImageTracking } from '@babylonjs/core/XR/features/WebXRImageTracking';
import { WebXRLayers } from '@babylonjs/core/XR/features/WebXRLayers';
import { WebXRLightEstimation } from '@babylonjs/core/XR/features/WebXRLightEstimation';
import { WebXRMeshDetector } from '@babylonjs/core/XR/features/WebXRMeshDetector';
import { WebXRNearInteraction } from '@babylonjs/core/XR/features/WebXRNearInteraction';
import { WebXRPlaneDetector } from '@babylonjs/core/XR/features/WebXRPlaneDetector';
import { WebXRRawCameraAccess } from '@babylonjs/core/XR/features/WebXRRawCameraAccess';
import { WebXRSpaceWarp } from '@babylonjs/core/XR/features/WebXRSpaceWarp';
import { WebXRSpaceWarpRenderTargetTextureProvider } from '@babylonjs/core/XR/features/WebXRSpaceWarp';
import { XRSpaceWarpRenderTarget } from '@babylonjs/core/XR/features/WebXRSpaceWarp';
import { WebXRWalkingLocomotion } from '@babylonjs/core/XR/features/WebXRWalkingLocomotion';
import { WebXRAbstractMotionController } from '@babylonjs/core/XR/motionController/webXRAbstractMotionController';
import { WebXRControllerComponent } from '@babylonjs/core/XR/motionController/webXRControllerComponent';
import { WebXRGenericHandController } from '@babylonjs/core/XR/motionController/webXRGenericHandController';
import { WebXRGenericTriggerMotionController } from '@babylonjs/core/XR/motionController/webXRGenericMotionController';
import { WebXRHTCViveMotionController } from '@babylonjs/core/XR/motionController/webXRHTCViveMotionController';
import { WebXRMicrosoftMixedRealityController } from '@babylonjs/core/XR/motionController/webXRMicrosoftMixedRealityController';
import { WebXROculusTouchMotionController } from '@babylonjs/core/XR/motionController/webXROculusTouchMotionController';
import { WebXRProfiledMotionController } from '@babylonjs/core/XR/motionController/webXRProfiledMotionController';
import { NativeXRFrame } from '@babylonjs/core/XR/native/nativeXRFrame';
import { NativeXRLayerRenderTargetTextureProvider } from '@babylonjs/core/XR/native/nativeXRRenderTarget';
import { NativeXRLayerWrapper } from '@babylonjs/core/XR/native/nativeXRRenderTarget';
import { NativeXRRenderTarget } from '@babylonjs/core/XR/native/nativeXRRenderTarget';
import { WebXRCamera } from '@babylonjs/core/XR/webXRCamera';
import { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';
import { WebXREnterExitUI } from '@babylonjs/core/XR/webXREnterExitUI';
import { WebXREnterExitUIButton } from '@babylonjs/core/XR/webXREnterExitUI';
import { WebXRExperienceHelper } from '@babylonjs/core/XR/webXRExperienceHelper';
import { WebXRFeaturesManager } from '@babylonjs/core/XR/webXRFeaturesManager';
import { WebXRInput } from '@babylonjs/core/XR/webXRInput';
import { WebXRInputSource } from '@babylonjs/core/XR/webXRInputSource';
import { WebXRLayerWrapper } from '@babylonjs/core/XR/webXRLayerWrapper';
import { WebXRManagedOutputCanvas } from '@babylonjs/core/XR/webXRManagedOutputCanvas';
import { WebXRLayerRenderTargetTextureProvider } from '@babylonjs/core/XR/webXRRenderTargetTextureProvider';
import { WebXRSessionManager } from '@babylonjs/core/XR/webXRSessionManager';
import { WebXRWebGLLayerRenderTargetTextureProvider } from '@babylonjs/core/XR/webXRWebGLLayer';
import { WebXRWebGLLayerWrapper } from '@babylonjs/core/XR/webXRWebGLLayer';
import { AbstractAssetContainer } from '@babylonjs/core/assetContainer';
import { AssetContainer } from '@babylonjs/core/assetContainer';
import { InstantiatedEntries } from '@babylonjs/core/assetContainer';
import { Node } from '@babylonjs/core/node';
import { Scene } from '@babylonjs/core/scene';
import { Stage } from '@babylonjs/core/sceneComponent';

export interface JSXElements {
    abstractActionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractActionManager>, {}, AbstractActionManager>, any>;
    action: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Action>,
            {
                triggerOptions: ConstructorParameters<typeof Action>[0];
                condition: ConstructorParameters<typeof Action>[1];
            },
            Action
        >,
        any
    >;
    actionEvent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ActionEvent>,
            {
                source: ConstructorParameters<typeof ActionEvent>[0];
                pointerX: ConstructorParameters<typeof ActionEvent>[1];
                pointerY: ConstructorParameters<typeof ActionEvent>[2];
                meshUnderPointer: ConstructorParameters<typeof ActionEvent>[3];
                sourceEvent: ConstructorParameters<typeof ActionEvent>[4];
                additionalData: ConstructorParameters<typeof ActionEvent>[5];
            },
            ActionEvent
        >,
        any
    >;
    actionManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ActionManager>,
            {
                scene: ConstructorParameters<typeof ActionManager>[0];
            },
            ActionManager
        >,
        any
    >;
    condition: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Condition>,
            {
                actionManager: ConstructorParameters<typeof Condition>[0];
            },
            Condition
        >,
        any
    >;
    predicateCondition: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PredicateCondition>,
            {
                actionManager: ConstructorParameters<typeof PredicateCondition>[0];
                predicate: ConstructorParameters<typeof PredicateCondition>[1];
            },
            PredicateCondition
        >,
        any
    >;
    stateCondition: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StateCondition>,
            {
                actionManager: ConstructorParameters<typeof StateCondition>[0];
                target: ConstructorParameters<typeof StateCondition>[1];
                value: ConstructorParameters<typeof StateCondition>[2];
            },
            StateCondition
        >,
        any
    >;
    valueCondition: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ValueCondition>,
            {
                actionManager: ConstructorParameters<typeof ValueCondition>[0];
                target: ConstructorParameters<typeof ValueCondition>[1];
                propertyPath: ConstructorParameters<typeof ValueCondition>[2];
                value: ConstructorParameters<typeof ValueCondition>[3];
                operator: ConstructorParameters<typeof ValueCondition>[4];
            },
            ValueCondition
        >,
        any
    >;
    combineAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CombineAction>,
            {
                triggerOptions: ConstructorParameters<typeof CombineAction>[0];
                children: ConstructorParameters<typeof CombineAction>[1];
                condition: ConstructorParameters<typeof CombineAction>[2];
                enableChildrenConditions: ConstructorParameters<typeof CombineAction>[3];
            },
            CombineAction
        >,
        any
    >;
    doNothingAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DoNothingAction>,
            {
                triggerOptions: ConstructorParameters<typeof DoNothingAction>[0];
                condition: ConstructorParameters<typeof DoNothingAction>[1];
            },
            DoNothingAction
        >,
        any
    >;
    executeCodeAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExecuteCodeAction>,
            {
                triggerOptions: ConstructorParameters<typeof ExecuteCodeAction>[0];
                func: ConstructorParameters<typeof ExecuteCodeAction>[1];
                condition: ConstructorParameters<typeof ExecuteCodeAction>[2];
            },
            ExecuteCodeAction
        >,
        any
    >;
    incrementValueAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IncrementValueAction>,
            {
                triggerOptions: ConstructorParameters<typeof IncrementValueAction>[0];
                target: ConstructorParameters<typeof IncrementValueAction>[1];
                propertyPath: ConstructorParameters<typeof IncrementValueAction>[2];
                value: ConstructorParameters<typeof IncrementValueAction>[3];
                condition: ConstructorParameters<typeof IncrementValueAction>[4];
            },
            IncrementValueAction
        >,
        any
    >;
    playAnimationAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlayAnimationAction>,
            {
                triggerOptions: ConstructorParameters<typeof PlayAnimationAction>[0];
                target: ConstructorParameters<typeof PlayAnimationAction>[1];
                from: ConstructorParameters<typeof PlayAnimationAction>[2];
                to: ConstructorParameters<typeof PlayAnimationAction>[3];
                loop: ConstructorParameters<typeof PlayAnimationAction>[4];
                condition: ConstructorParameters<typeof PlayAnimationAction>[5];
            },
            PlayAnimationAction
        >,
        any
    >;
    setParentAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetParentAction>,
            {
                triggerOptions: ConstructorParameters<typeof SetParentAction>[0];
                target: ConstructorParameters<typeof SetParentAction>[1];
                parent: ConstructorParameters<typeof SetParentAction>[2];
                condition: ConstructorParameters<typeof SetParentAction>[3];
            },
            SetParentAction
        >,
        any
    >;
    setStateAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetStateAction>,
            {
                triggerOptions: ConstructorParameters<typeof SetStateAction>[0];
                target: ConstructorParameters<typeof SetStateAction>[1];
                value: ConstructorParameters<typeof SetStateAction>[2];
                condition: ConstructorParameters<typeof SetStateAction>[3];
            },
            SetStateAction
        >,
        any
    >;
    setValueAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetValueAction>,
            {
                triggerOptions: ConstructorParameters<typeof SetValueAction>[0];
                target: ConstructorParameters<typeof SetValueAction>[1];
                propertyPath: ConstructorParameters<typeof SetValueAction>[2];
                value: ConstructorParameters<typeof SetValueAction>[3];
                condition: ConstructorParameters<typeof SetValueAction>[4];
            },
            SetValueAction
        >,
        any
    >;
    stopAnimationAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StopAnimationAction>,
            {
                triggerOptions: ConstructorParameters<typeof StopAnimationAction>[0];
                target: ConstructorParameters<typeof StopAnimationAction>[1];
                condition: ConstructorParameters<typeof StopAnimationAction>[2];
            },
            StopAnimationAction
        >,
        any
    >;
    switchBooleanAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SwitchBooleanAction>,
            {
                triggerOptions: ConstructorParameters<typeof SwitchBooleanAction>[0];
                target: ConstructorParameters<typeof SwitchBooleanAction>[1];
                propertyPath: ConstructorParameters<typeof SwitchBooleanAction>[2];
                condition: ConstructorParameters<typeof SwitchBooleanAction>[3];
            },
            SwitchBooleanAction
        >,
        any
    >;
    playSoundAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlaySoundAction>,
            {
                triggerOptions: ConstructorParameters<typeof PlaySoundAction>[0];
                sound: ConstructorParameters<typeof PlaySoundAction>[1];
                condition: ConstructorParameters<typeof PlaySoundAction>[2];
            },
            PlaySoundAction
        >,
        any
    >;
    stopSoundAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StopSoundAction>,
            {
                triggerOptions: ConstructorParameters<typeof StopSoundAction>[0];
                sound: ConstructorParameters<typeof StopSoundAction>[1];
                condition: ConstructorParameters<typeof StopSoundAction>[2];
            },
            StopSoundAction
        >,
        any
    >;
    interpolateValueAction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InterpolateValueAction>,
            {
                triggerOptions: ConstructorParameters<typeof InterpolateValueAction>[0];
                target: ConstructorParameters<typeof InterpolateValueAction>[1];
                propertyPath: ConstructorParameters<typeof InterpolateValueAction>[2];
                value: ConstructorParameters<typeof InterpolateValueAction>[3];
                duration: ConstructorParameters<typeof InterpolateValueAction>[4];
                condition: ConstructorParameters<typeof InterpolateValueAction>[5];
                stopOtherAnimations: ConstructorParameters<typeof InterpolateValueAction>[6];
                onInterpolationDone: ConstructorParameters<typeof InterpolateValueAction>[7];
            },
            InterpolateValueAction
        >,
        any
    >;
    addAnimationExtensions: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof AddAnimationExtensions>> & MeshProps,
            {
                sceneClass: Parameters<typeof AddAnimationExtensions>[0];
                boneClass: Parameters<typeof AddAnimationExtensions>[1];
            },
            ReturnType<typeof AddAnimationExtensions>
        >,
        any
    >;
    animatable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Animatable>,
            {
                scene: ConstructorParameters<typeof Animatable>[0];
                target: ConstructorParameters<typeof Animatable>[1];
                fromFrame: ConstructorParameters<typeof Animatable>[2];
                toFrame: ConstructorParameters<typeof Animatable>[3];
                loopAnimation: ConstructorParameters<typeof Animatable>[4];
                speedRatio: ConstructorParameters<typeof Animatable>[5];
                onAnimationEnd: ConstructorParameters<typeof Animatable>[6];
                animations: ConstructorParameters<typeof Animatable>[7];
                onAnimationLoop: ConstructorParameters<typeof Animatable>[8];
                isAdditive: ConstructorParameters<typeof Animatable>[9];
                playOrder: ConstructorParameters<typeof Animatable>[10];
            },
            Animatable
        >,
        any
    >;
    registerTargetForLateAnimationBinding: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterTargetForLateAnimationBinding>> & MeshProps,
            {
                scene: Parameters<typeof RegisterTargetForLateAnimationBinding>[0];
                runtimeAnimation: Parameters<typeof RegisterTargetForLateAnimationBinding>[1];
                originalValue: Parameters<typeof RegisterTargetForLateAnimationBinding>[2];
            },
            ReturnType<typeof RegisterTargetForLateAnimationBinding>
        >,
        any
    >;
    animation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Animation> & Clonable,
            {
                name: ConstructorParameters<typeof Animation>[0];
                targetProperty: ConstructorParameters<typeof Animation>[1];
                framePerSecond: ConstructorParameters<typeof Animation>[2];
                dataType: ConstructorParameters<typeof Animation>[3];
                loopMode: ConstructorParameters<typeof Animation>[4];
                enableBlending: ConstructorParameters<typeof Animation>[5];
            },
            Animation
        >,
        any
    >;
    animationEvent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationEvent>,
            {
                frame: ConstructorParameters<typeof AnimationEvent>[0];
                action: ConstructorParameters<typeof AnimationEvent>[1];
                onlyOnce: ConstructorParameters<typeof AnimationEvent>[2];
            },
            AnimationEvent
        >,
        any
    >;
    animationGroup: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationGroup> & Clonable,
            {
                name: ConstructorParameters<typeof AnimationGroup>[0];
                scene: ConstructorParameters<typeof AnimationGroup>[1];
                weight: ConstructorParameters<typeof AnimationGroup>[2];
                playOrder: ConstructorParameters<typeof AnimationGroup>[3];
            },
            AnimationGroup
        >,
        any
    >;
    animationGroupMask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationGroupMask>,
            {
                names: ConstructorParameters<typeof AnimationGroupMask>[0];
                mode: ConstructorParameters<typeof AnimationGroupMask>[1];
            },
            AnimationGroupMask
        >,
        any
    >;
    animationPropertiesOverride: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationPropertiesOverride>, {}, AnimationPropertiesOverride>, any>;
    animationRange: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationRange> & Clonable,
            {
                name: ConstructorParameters<typeof AnimationRange>[0];
                from: ConstructorParameters<typeof AnimationRange>[1];
                to: ConstructorParameters<typeof AnimationRange>[2];
            },
            AnimationRange
        >,
        any
    >;
    backEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BackEase>,
            {
                amplitude: ConstructorParameters<typeof BackEase>[0];
            },
            BackEase
        >,
        any
    >;
    bezierCurveEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BezierCurveEase>,
            {
                x1: ConstructorParameters<typeof BezierCurveEase>[0];
                y1: ConstructorParameters<typeof BezierCurveEase>[1];
                x2: ConstructorParameters<typeof BezierCurveEase>[2];
                y2: ConstructorParameters<typeof BezierCurveEase>[3];
            },
            BezierCurveEase
        >,
        any
    >;
    bounceEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BounceEase>,
            {
                bounces: ConstructorParameters<typeof BounceEase>[0];
                bounciness: ConstructorParameters<typeof BounceEase>[1];
            },
            BounceEase
        >,
        any
    >;
    easingFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EasingFunction>, {}, EasingFunction>, any>;
    elasticEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ElasticEase>,
            {
                oscillations: ConstructorParameters<typeof ElasticEase>[0];
                springiness: ConstructorParameters<typeof ElasticEase>[1];
            },
            ElasticEase
        >,
        any
    >;
    exponentialEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExponentialEase>,
            {
                exponent: ConstructorParameters<typeof ExponentialEase>[0];
            },
            ExponentialEase
        >,
        any
    >;
    powerEase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PowerEase>,
            {
                power: ConstructorParameters<typeof PowerEase>[0];
            },
            PowerEase
        >,
        any
    >;
    pathCursor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PathCursor>,
            {
                _path: ConstructorParameters<typeof PathCursor>[0];
            },
            PathCursor
        >,
        any
    >;
    runtimeAnimation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RuntimeAnimation>,
            {
                target: ConstructorParameters<typeof RuntimeAnimation>[0];
                animation: ConstructorParameters<typeof RuntimeAnimation>[1];
                scene: ConstructorParameters<typeof RuntimeAnimation>[2];
                host: ConstructorParameters<typeof RuntimeAnimation>[3];
            },
            RuntimeAnimation
        >,
        any
    >;
    analyser: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Analyser>,
            {
                scene: ConstructorParameters<typeof Analyser>[0];
            },
            Analyser
        >,
        any
    >;
    audioEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AudioEngine>,
            {
                hostElement: ConstructorParameters<typeof AudioEngine>[0];
                audioContext: ConstructorParameters<typeof AudioEngine>[1];
                audioDestination: ConstructorParameters<typeof AudioEngine>[2];
            },
            AudioEngine
        >,
        any
    >;
    audioSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AudioSceneComponent>,
            {
                scene: ConstructorParameters<typeof AudioSceneComponent>[0];
            },
            AudioSceneComponent
        >,
        any
    >;
    sound: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Sound> & Clonable,
            {
                name: ConstructorParameters<typeof Sound>[0];
                urlOrArrayBuffer: ConstructorParameters<typeof Sound>[1];
                scene: ConstructorParameters<typeof Sound>[2];
                readyToPlayCallback: ConstructorParameters<typeof Sound>[3];
                options: ConstructorParameters<typeof Sound>[4];
            },
            Sound
        >,
        any
    >;
    soundTrack: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SoundTrack>,
            {
                scene: ConstructorParameters<typeof SoundTrack>[0];
                options: ConstructorParameters<typeof SoundTrack>[1];
            },
            SoundTrack
        >,
        any
    >;
    weightedSound: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WeightedSound>,
            {
                loop: ConstructorParameters<typeof WeightedSound>[0];
                sounds: ConstructorParameters<typeof WeightedSound>[1];
                weights: ConstructorParameters<typeof WeightedSound>[2];
            },
            WeightedSound
        >,
        any
    >;
    bakedVertexAnimationManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BakedVertexAnimationManager> & Clonable,
            {
                scene: ConstructorParameters<typeof BakedVertexAnimationManager>[0];
            },
            BakedVertexAnimationManager
        >,
        any
    >;
    vertexAnimationBaker: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VertexAnimationBaker>,
            {
                scene: ConstructorParameters<typeof VertexAnimationBaker>[0];
                meshOrSkeleton: ConstructorParameters<typeof VertexAnimationBaker>[1];
            },
            VertexAnimationBaker
        >,
        any
    >;
    autoRotationBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoRotationBehavior>, {}, AutoRotationBehavior>, any>;
    bouncingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BouncingBehavior>, {}, BouncingBehavior>, any>;
    framingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FramingBehavior>, {}, FramingBehavior>, any>;
    attachToBoxBehavior: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AttachToBoxBehavior>,
            {
                _ui: ConstructorParameters<typeof AttachToBoxBehavior>[0];
            },
            AttachToBoxBehavior
        >,
        any
    >;
    baseSixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSixDofDragBehavior>, {}, BaseSixDofDragBehavior>, any>;
    fadeInOutBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FadeInOutBehavior>, {}, FadeInOutBehavior>, any>;
    followBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowBehavior>, {}, FollowBehavior>, any>;
    handConstraintBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandConstraintBehavior>, {}, HandConstraintBehavior>, any>;
    multiPointerScaleBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiPointerScaleBehavior>, {}, MultiPointerScaleBehavior>, any>;
    pointerDragBehavior: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointerDragBehavior>,
            {
                options: ConstructorParameters<typeof PointerDragBehavior>[0];
            },
            PointerDragBehavior
        >,
        any
    >;
    sixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SixDofDragBehavior>, {}, SixDofDragBehavior>, any>;
    surfaceMagnetismBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SurfaceMagnetismBehavior>, {}, SurfaceMagnetismBehavior>, any>;
    bone: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Bone> & Clonable,
            {
                name: ConstructorParameters<typeof Bone>[0];
                skeleton: ConstructorParameters<typeof Bone>[1];
                parentBone: ConstructorParameters<typeof Bone>[2];
                localMatrix: ConstructorParameters<typeof Bone>[3];
                restMatrix: ConstructorParameters<typeof Bone>[4];
                bindMatrix: ConstructorParameters<typeof Bone>[5];
                index: ConstructorParameters<typeof Bone>[6];
            },
            Bone
        >,
        any
    >;
    boneIKController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoneIKController>,
            {
                mesh: ConstructorParameters<typeof BoneIKController>[0];
                bone: ConstructorParameters<typeof BoneIKController>[1];
                options: ConstructorParameters<typeof BoneIKController>[2];
            },
            BoneIKController
        >,
        any
    >;
    boneLookController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoneLookController>,
            {
                mesh: ConstructorParameters<typeof BoneLookController>[0];
                bone: ConstructorParameters<typeof BoneLookController>[1];
                target: ConstructorParameters<typeof BoneLookController>[2];
                options: ConstructorParameters<typeof BoneLookController>[3];
            },
            BoneLookController
        >,
        any
    >;
    skeleton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Skeleton> & Clonable,
            {
                name: ConstructorParameters<typeof Skeleton>[0];
                id: ConstructorParameters<typeof Skeleton>[1];
                scene: ConstructorParameters<typeof Skeleton>[2];
            },
            Skeleton
        >,
        any
    >;
    buffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Buffer>,
            {
                engine: ConstructorParameters<typeof Buffer>[0];
                data: ConstructorParameters<typeof Buffer>[1];
                updatable: ConstructorParameters<typeof Buffer>[2];
                stride: ConstructorParameters<typeof Buffer>[3];
                postponeInternalCreation: ConstructorParameters<typeof Buffer>[4];
                instanced: ConstructorParameters<typeof Buffer>[5];
                useBytes: ConstructorParameters<typeof Buffer>[6];
                divisor: ConstructorParameters<typeof Buffer>[7];
                label: ConstructorParameters<typeof Buffer>[8];
            },
            Buffer
        >,
        any
    >;
    vertexBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VertexBuffer>,
            {
                engine: ConstructorParameters<typeof VertexBuffer>[0];
                data: ConstructorParameters<typeof VertexBuffer>[1];
                kind: ConstructorParameters<typeof VertexBuffer>[2];
                updatableOrOptions: ConstructorParameters<typeof VertexBuffer>[3];
                postponeInternalCreation: ConstructorParameters<typeof VertexBuffer>[4];
                stride: ConstructorParameters<typeof VertexBuffer>[5];
                instanced: ConstructorParameters<typeof VertexBuffer>[6];
                offset: ConstructorParameters<typeof VertexBuffer>[7];
                size: ConstructorParameters<typeof VertexBuffer>[8];
                type: ConstructorParameters<typeof VertexBuffer>[9];
                normalized: ConstructorParameters<typeof VertexBuffer>[10];
                useBytes: ConstructorParameters<typeof VertexBuffer>[11];
                divisor: ConstructorParameters<typeof VertexBuffer>[12];
                takeBufferOwnership: ConstructorParameters<typeof VertexBuffer>[13];
            },
            VertexBuffer
        >,
        any
    >;
    copyFloatData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CopyFloatData>> & MeshProps,
            {
                input: Parameters<typeof CopyFloatData>[0];
                size: Parameters<typeof CopyFloatData>[1];
                type: Parameters<typeof CopyFloatData>[2];
                byteOffset: Parameters<typeof CopyFloatData>[3];
                byteStride: Parameters<typeof CopyFloatData>[4];
                normalized: Parameters<typeof CopyFloatData>[5];
                totalVertices: Parameters<typeof CopyFloatData>[6];
                output: Parameters<typeof CopyFloatData>[7];
            },
            ReturnType<typeof CopyFloatData>
        >,
        any
    >;
    enumerateFloatValues: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof EnumerateFloatValues>> & MeshProps,
            {
                data: Parameters<typeof EnumerateFloatValues>[0];
                byteOffset: Parameters<typeof EnumerateFloatValues>[1];
                byteStride: Parameters<typeof EnumerateFloatValues>[2];
                componentCount: Parameters<typeof EnumerateFloatValues>[3];
                componentType: Parameters<typeof EnumerateFloatValues>[4];
                count: Parameters<typeof EnumerateFloatValues>[5];
                normalized: Parameters<typeof EnumerateFloatValues>[6];
                callback: Parameters<typeof EnumerateFloatValues>[7];
            },
            ReturnType<typeof EnumerateFloatValues>
        >,
        any
    >;
    getFloatData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetFloatData>> & MeshProps,
            {
                data: Parameters<typeof GetFloatData>[0];
                size: Parameters<typeof GetFloatData>[1];
                type: Parameters<typeof GetFloatData>[2];
                byteOffset: Parameters<typeof GetFloatData>[3];
                byteStride: Parameters<typeof GetFloatData>[4];
                normalized: Parameters<typeof GetFloatData>[5];
                totalVertices: Parameters<typeof GetFloatData>[6];
                forceCopy: Parameters<typeof GetFloatData>[7];
            },
            ReturnType<typeof GetFloatData>
        >,
        any
    >;
    getTypeByteLength: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetTypeByteLength>> & MeshProps,
            {
                type: Parameters<typeof GetTypeByteLength>[0];
            },
            ReturnType<typeof GetTypeByteLength>
        >,
        any
    >;
    dataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataBuffer>, {}, DataBuffer>, any>;
    storageBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StorageBuffer>,
            {
                engine: ConstructorParameters<typeof StorageBuffer>[0];
                size: ConstructorParameters<typeof StorageBuffer>[1];
                creationFlags: ConstructorParameters<typeof StorageBuffer>[2];
                label: ConstructorParameters<typeof StorageBuffer>[3];
            },
            StorageBuffer
        >,
        any
    >;
    baseCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraMouseWheelInput>, {}, BaseCameraMouseWheelInput>, any>;
    baseCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraPointersInput>, {}, BaseCameraPointersInput>, any>;
    arcRotateCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraGamepadInput>, {}, ArcRotateCameraGamepadInput>, any>;
    arcRotateCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraKeyboardMoveInput>, {}, ArcRotateCameraKeyboardMoveInput>, any>;
    arcRotateCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraMouseWheelInput>, {}, ArcRotateCameraMouseWheelInput>, any>;
    arcRotateCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraPointersInput>, {}, ArcRotateCameraPointersInput>, any>;
    arcRotateCameraVRDeviceOrientationInput: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraVRDeviceOrientationInput>, {}, ArcRotateCameraVRDeviceOrientationInput>,
        any
    >;
    flyCameraKeyboardInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraKeyboardInput>, {}, FlyCameraKeyboardInput>, any>;
    flyCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraMouseInput>, {}, FlyCameraMouseInput>, any>;
    followCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraKeyboardMoveInput>, {}, FollowCameraKeyboardMoveInput>, any>;
    followCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraMouseWheelInput>, {}, FollowCameraMouseWheelInput>, any>;
    followCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraPointersInput>, {}, FollowCameraPointersInput>, any>;
    freeCameraDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraDeviceOrientationInput>, {}, FreeCameraDeviceOrientationInput>, any>;
    freeCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraGamepadInput>, {}, FreeCameraGamepadInput>, any>;
    freeCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraKeyboardMoveInput>, {}, FreeCameraKeyboardMoveInput>, any>;
    freeCameraMouseInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraMouseInput>,
            {
                touchEnabled: ConstructorParameters<typeof FreeCameraMouseInput>[0];
            },
            FreeCameraMouseInput
        >,
        any
    >;
    freeCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraMouseWheelInput>, {}, FreeCameraMouseWheelInput>, any>;
    freeCameraTouchInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraTouchInput>,
            {
                allowMouse: ConstructorParameters<typeof FreeCameraTouchInput>[0];
            },
            FreeCameraTouchInput
        >,
        any
    >;
    setStereoscopicAnaglyphRigMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof setStereoscopicAnaglyphRigMode>> & MeshProps,
            {
                camera: Parameters<typeof setStereoscopicAnaglyphRigMode>[0];
            },
            ReturnType<typeof setStereoscopicAnaglyphRigMode>
        >,
        any
    >;
    setStereoscopicRigMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof setStereoscopicRigMode>> & MeshProps,
            {
                camera: Parameters<typeof setStereoscopicRigMode>[0];
            },
            ReturnType<typeof setStereoscopicRigMode>
        >,
        any
    >;
    setVRRigMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof setVRRigMode>> & MeshProps,
            {
                camera: Parameters<typeof setVRRigMode>[0];
                rigParams: Parameters<typeof setVRRigMode>[1];
            },
            ReturnType<typeof setVRRigMode>
        >,
        any
    >;
    anaglyphArcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphArcRotateCamera> & Clonable,
            {
                name: ConstructorParameters<typeof AnaglyphArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof AnaglyphArcRotateCamera>[1];
                beta: ConstructorParameters<typeof AnaglyphArcRotateCamera>[2];
                radius: ConstructorParameters<typeof AnaglyphArcRotateCamera>[3];
                target: ConstructorParameters<typeof AnaglyphArcRotateCamera>[4];
                interaxialDistance: ConstructorParameters<typeof AnaglyphArcRotateCamera>[5];
                scene: ConstructorParameters<typeof AnaglyphArcRotateCamera>[6];
            } & CameraProps,
            AnaglyphArcRotateCamera
        >,
        any
    >;
    anaglyphFreeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphFreeCamera> & Clonable,
            {
                name: ConstructorParameters<typeof AnaglyphFreeCamera>[0];
                position: ConstructorParameters<typeof AnaglyphFreeCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphFreeCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphFreeCamera>[3];
            } & CameraProps,
            AnaglyphFreeCamera
        >,
        any
    >;
    anaglyphGamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphGamepadCamera> & Clonable,
            {
                name: ConstructorParameters<typeof AnaglyphGamepadCamera>[0];
                position: ConstructorParameters<typeof AnaglyphGamepadCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphGamepadCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphGamepadCamera>[3];
            } & CameraProps,
            AnaglyphGamepadCamera
        >,
        any
    >;
    anaglyphUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphUniversalCamera> & Clonable,
            {
                name: ConstructorParameters<typeof AnaglyphUniversalCamera>[0];
                position: ConstructorParameters<typeof AnaglyphUniversalCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphUniversalCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphUniversalCamera>[3];
            } & CameraProps,
            AnaglyphUniversalCamera
        >,
        any
    >;
    stereoscopicArcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicArcRotateCamera> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof StereoscopicArcRotateCamera>[1];
                beta: ConstructorParameters<typeof StereoscopicArcRotateCamera>[2];
                radius: ConstructorParameters<typeof StereoscopicArcRotateCamera>[3];
                target: ConstructorParameters<typeof StereoscopicArcRotateCamera>[4];
                interaxialDistance: ConstructorParameters<typeof StereoscopicArcRotateCamera>[5];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicArcRotateCamera>[6];
                scene: ConstructorParameters<typeof StereoscopicArcRotateCamera>[7];
            } & CameraProps,
            StereoscopicArcRotateCamera
        >,
        any
    >;
    stereoscopicFreeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicFreeCamera> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicFreeCamera>[0];
                position: ConstructorParameters<typeof StereoscopicFreeCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicFreeCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicFreeCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicFreeCamera>[4];
            } & CameraProps,
            StereoscopicFreeCamera
        >,
        any
    >;
    stereoscopicGamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicGamepadCamera> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicGamepadCamera>[0];
                position: ConstructorParameters<typeof StereoscopicGamepadCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicGamepadCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicGamepadCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicGamepadCamera>[4];
            } & CameraProps,
            StereoscopicGamepadCamera
        >,
        any
    >;
    stereoscopicScreenUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicScreenUniversalCamera> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[0];
                position: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[1];
                scene: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[2];
                distanceToProjectionPlane: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[3];
                distanceBetweenEyes: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[4];
            } & CameraProps,
            StereoscopicScreenUniversalCamera
        >,
        any
    >;
    stereoscopicUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicUniversalCamera> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicUniversalCamera>[0];
                position: ConstructorParameters<typeof StereoscopicUniversalCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicUniversalCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicUniversalCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicUniversalCamera>[4];
            } & CameraProps,
            StereoscopicUniversalCamera
        >,
        any
    >;
    vRCameraMetrics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRCameraMetrics>, {}, VRCameraMetrics>, any>;
    vRDeviceOrientationArcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRDeviceOrientationArcRotateCamera> & Clonable,
            {
                name: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[1];
                beta: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[2];
                radius: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[3];
                target: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[4];
                scene: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[5];
                compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[6];
                vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[7];
            } & CameraProps,
            VRDeviceOrientationArcRotateCamera
        >,
        any
    >;
    vRDeviceOrientationFreeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRDeviceOrientationFreeCamera> & Clonable,
            {
                name: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[0];
                position: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[1];
                scene: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[2];
                compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[3];
                vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[4];
            } & CameraProps,
            VRDeviceOrientationFreeCamera
        >,
        any
    >;
    vRDeviceOrientationGamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRDeviceOrientationGamepadCamera> & Clonable,
            {
                name: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[0];
                position: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[1];
                scene: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[2];
                compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[3];
                vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[4];
            } & CameraProps,
            VRDeviceOrientationGamepadCamera
        >,
        any
    >;
    vRExperienceHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRExperienceHelper>,
            {
                scene: ConstructorParameters<typeof VRExperienceHelper>[0];
                webVROptions: ConstructorParameters<typeof VRExperienceHelper>[1];
            },
            VRExperienceHelper
        >,
        any
    >;
    arcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcRotateCamera> & Clonable,
            {
                name: ConstructorParameters<typeof ArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof ArcRotateCamera>[1];
                beta: ConstructorParameters<typeof ArcRotateCamera>[2];
                radius: ConstructorParameters<typeof ArcRotateCamera>[3];
                target: ConstructorParameters<typeof ArcRotateCamera>[4];
                scene: ConstructorParameters<typeof ArcRotateCamera>[5];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof ArcRotateCamera>[6];
            } & CameraProps,
            ArcRotateCamera
        >,
        any
    >;
    arcRotateCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcRotateCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof ArcRotateCameraInputsManager>[0];
            },
            ArcRotateCameraInputsManager
        >,
        any
    >;
    camera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Camera> & Clonable,
            {
                name: ConstructorParameters<typeof Camera>[0];
                position: ConstructorParameters<typeof Camera>[1];
                scene: ConstructorParameters<typeof Camera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof Camera>[3];
            },
            Camera
        >,
        any
    >;
    cameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CameraInputsManager>,
            {
                camera: ConstructorParameters<typeof CameraInputsManager>[0];
            },
            CameraInputsManager
        >,
        any
    >;
    deviceOrientationCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DeviceOrientationCamera> & Clonable,
            {
                name: ConstructorParameters<typeof DeviceOrientationCamera>[0];
                position: ConstructorParameters<typeof DeviceOrientationCamera>[1];
                scene: ConstructorParameters<typeof DeviceOrientationCamera>[2];
            } & CameraProps,
            DeviceOrientationCamera
        >,
        any
    >;
    flyCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlyCamera> & Clonable,
            {
                name: ConstructorParameters<typeof FlyCamera>[0];
                position: ConstructorParameters<typeof FlyCamera>[1];
                scene: ConstructorParameters<typeof FlyCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FlyCamera>[3];
            } & CameraProps,
            FlyCamera
        >,
        any
    >;
    flyCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlyCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FlyCameraInputsManager>[0];
            },
            FlyCameraInputsManager
        >,
        any
    >;
    arcFollowCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcFollowCamera> & Clonable,
            {
                name: ConstructorParameters<typeof ArcFollowCamera>[0];
                alpha: ConstructorParameters<typeof ArcFollowCamera>[1];
                beta: ConstructorParameters<typeof ArcFollowCamera>[2];
                radius: ConstructorParameters<typeof ArcFollowCamera>[3];
                target: ConstructorParameters<typeof ArcFollowCamera>[4];
                scene: ConstructorParameters<typeof ArcFollowCamera>[5];
            } & CameraProps,
            ArcFollowCamera
        >,
        any
    >;
    followCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FollowCamera> & Clonable,
            {
                name: ConstructorParameters<typeof FollowCamera>[0];
                position: ConstructorParameters<typeof FollowCamera>[1];
                scene: ConstructorParameters<typeof FollowCamera>[2];
                lockedTarget: ConstructorParameters<typeof FollowCamera>[3];
            } & CameraProps,
            FollowCamera
        >,
        any
    >;
    followCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FollowCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FollowCameraInputsManager>[0];
            },
            FollowCameraInputsManager
        >,
        any
    >;
    freeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCamera> & Clonable,
            {
                name: ConstructorParameters<typeof FreeCamera>[0];
                position: ConstructorParameters<typeof FreeCamera>[1];
                scene: ConstructorParameters<typeof FreeCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FreeCamera>[3];
            } & CameraProps,
            FreeCamera
        >,
        any
    >;
    freeCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FreeCameraInputsManager>[0];
            },
            FreeCameraInputsManager
        >,
        any
    >;
    gamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GamepadCamera> & Clonable,
            {
                name: ConstructorParameters<typeof GamepadCamera>[0];
                position: ConstructorParameters<typeof GamepadCamera>[1];
                scene: ConstructorParameters<typeof GamepadCamera>[2];
            } & CameraProps,
            GamepadCamera
        >,
        any
    >;
    targetCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TargetCamera> & Clonable,
            {
                name: ConstructorParameters<typeof TargetCamera>[0];
                position: ConstructorParameters<typeof TargetCamera>[1];
                scene: ConstructorParameters<typeof TargetCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof TargetCamera>[3];
            } & CameraProps,
            TargetCamera
        >,
        any
    >;
    touchCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchCamera> & Clonable,
            {
                name: ConstructorParameters<typeof TouchCamera>[0];
                position: ConstructorParameters<typeof TouchCamera>[1];
                scene: ConstructorParameters<typeof TouchCamera>[2];
            } & CameraProps,
            TouchCamera
        >,
        any
    >;
    universalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UniversalCamera> & Clonable,
            {
                name: ConstructorParameters<typeof UniversalCamera>[0];
                position: ConstructorParameters<typeof UniversalCamera>[1];
                scene: ConstructorParameters<typeof UniversalCamera>[2];
            } & CameraProps,
            UniversalCamera
        >,
        any
    >;
    virtualJoysticksCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VirtualJoysticksCamera> & Clonable,
            {
                name: ConstructorParameters<typeof VirtualJoysticksCamera>[0];
                position: ConstructorParameters<typeof VirtualJoysticksCamera>[1];
                scene: ConstructorParameters<typeof VirtualJoysticksCamera>[2];
            } & CameraProps,
            VirtualJoysticksCamera
        >,
        any
    >;
    collider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Collider>, {}, Collider>, any>;
    defaultCollisionCoordinator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultCollisionCoordinator>, {}, DefaultCollisionCoordinator>, any>;
    gPUPicker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GPUPicker>, {}, GPUPicker>, any>;
    intersectionInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IntersectionInfo>,
            {
                bu: ConstructorParameters<typeof IntersectionInfo>[0];
                bv: ConstructorParameters<typeof IntersectionInfo>[1];
                distance: ConstructorParameters<typeof IntersectionInfo>[2];
            },
            IntersectionInfo
        >,
        any
    >;
    _MeshCollisionData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_MeshCollisionData>, {}, _MeshCollisionData>, any>;
    pickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PickingInfo>, {}, PickingInfo>, any>;
    setOpenGLOrientationForUV: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof setOpenGLOrientationForUV>> & MeshProps,
            {
                value: Parameters<typeof setOpenGLOrientationForUV>[0];
            },
            ReturnType<typeof setOpenGLOrientationForUV>
        >,
        any
    >;
    computeEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeEffect>,
            {
                baseName: ConstructorParameters<typeof ComputeEffect>[0];
                options: ConstructorParameters<typeof ComputeEffect>[1];
                engine: ConstructorParameters<typeof ComputeEffect>[2];
                key: ConstructorParameters<typeof ComputeEffect>[3];
            },
            ComputeEffect
        >,
        any
    >;
    computeShader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeShader>,
            {
                name: ConstructorParameters<typeof ComputeShader>[0];
                engine: ConstructorParameters<typeof ComputeShader>[1];
                shaderPath: ConstructorParameters<typeof ComputeShader>[2];
                options: ConstructorParameters<typeof ComputeShader>[3];
            },
            ComputeShader
        >,
        any
    >;
    boundingInfoHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingInfoHelper>,
            {
                engine: ConstructorParameters<typeof BoundingInfoHelper>[0];
            },
            BoundingInfoHelper
        >,
        any
    >;
    computeShaderBoundingHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeShaderBoundingHelper>,
            {
                engine: ConstructorParameters<typeof ComputeShaderBoundingHelper>[0];
            },
            ComputeShaderBoundingHelper
        >,
        any
    >;
    transformFeedbackBoundingHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TransformFeedbackBoundingHelper>,
            {
                engine: ConstructorParameters<typeof TransformFeedbackBoundingHelper>[0];
            },
            TransformFeedbackBoundingHelper
        >,
        any
    >;
    octree: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Octree>,
            {
                creationFunc: ConstructorParameters<typeof Octree>[0];
                maxBlockCapacity: ConstructorParameters<typeof Octree>[1];
                maxDepth: ConstructorParameters<typeof Octree>[2];
            },
            Octree
        >,
        any
    >;
    octreeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OctreeBlock>,
            {
                minPoint: ConstructorParameters<typeof OctreeBlock>[0];
                maxPoint: ConstructorParameters<typeof OctreeBlock>[1];
                capacity: ConstructorParameters<typeof OctreeBlock>[2];
                depth: ConstructorParameters<typeof OctreeBlock>[3];
                maxDepth: ConstructorParameters<typeof OctreeBlock>[4];
                creationFunc: ConstructorParameters<typeof OctreeBlock>[5];
            },
            OctreeBlock
        >,
        any
    >;
    octreeSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OctreeSceneComponent>,
            {
                scene: ConstructorParameters<typeof OctreeSceneComponent>[0];
            },
            OctreeSceneComponent
        >,
        any
    >;
    boundingBox: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBox>,
            {
                min: ConstructorParameters<typeof BoundingBox>[0];
                max: ConstructorParameters<typeof BoundingBox>[1];
                worldMatrix: ConstructorParameters<typeof BoundingBox>[2];
            },
            BoundingBox
        >,
        any
    >;
    boundingInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingInfo>,
            {
                minimum: ConstructorParameters<typeof BoundingInfo>[0];
                maximum: ConstructorParameters<typeof BoundingInfo>[1];
                worldMatrix: ConstructorParameters<typeof BoundingInfo>[2];
            },
            BoundingInfo
        >,
        any
    >;
    boundingSphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingSphere>,
            {
                min: ConstructorParameters<typeof BoundingSphere>[0];
                max: ConstructorParameters<typeof BoundingSphere>[1];
                worldMatrix: ConstructorParameters<typeof BoundingSphere>[2];
            },
            BoundingSphere
        >,
        any
    >;
    addRayExtensions: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof AddRayExtensions>> & MeshProps,
            {
                sceneClass: Parameters<typeof AddRayExtensions>[0];
                cameraClass: Parameters<typeof AddRayExtensions>[1];
            },
            ReturnType<typeof AddRayExtensions>
        >,
        any
    >;
    pickingRay: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRay>> & MeshProps,
            {
                scene: Parameters<typeof CreatePickingRay>[0];
                x: Parameters<typeof CreatePickingRay>[1];
                y: Parameters<typeof CreatePickingRay>[2];
                world: Parameters<typeof CreatePickingRay>[3];
                camera: Parameters<typeof CreatePickingRay>[4];
                cameraViewSpace: Parameters<typeof CreatePickingRay>[5];
            },
            ReturnType<typeof CreatePickingRay>
        >,
        any
    >;
    pickingRayInCameraSpace: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayInCameraSpace>> & MeshProps,
            {
                scene: Parameters<typeof CreatePickingRayInCameraSpace>[0];
                x: Parameters<typeof CreatePickingRayInCameraSpace>[1];
                y: Parameters<typeof CreatePickingRayInCameraSpace>[2];
                camera: Parameters<typeof CreatePickingRayInCameraSpace>[3];
            },
            ReturnType<typeof CreatePickingRayInCameraSpace>
        >,
        any
    >;
    pickingRayInCameraSpaceToRef: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayInCameraSpaceToRef>> & MeshProps,
            {
                scene: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[0];
                x: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[1];
                y: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[2];
                result: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[3];
                camera: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[4];
            },
            ReturnType<typeof CreatePickingRayInCameraSpaceToRef>
        >,
        any
    >;
    pickingRayToRef: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayToRef>> & MeshProps,
            {
                scene: Parameters<typeof CreatePickingRayToRef>[0];
                x: Parameters<typeof CreatePickingRayToRef>[1];
                y: Parameters<typeof CreatePickingRayToRef>[2];
                world: Parameters<typeof CreatePickingRayToRef>[3];
                result: Parameters<typeof CreatePickingRayToRef>[4];
                camera: Parameters<typeof CreatePickingRayToRef>[5];
                cameraViewSpace: Parameters<typeof CreatePickingRayToRef>[6];
                enableDistantPicking: Parameters<typeof CreatePickingRayToRef>[7];
            },
            ReturnType<typeof CreatePickingRayToRef>
        >,
        any
    >;
    getForwardRay: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetForwardRay>> & MeshProps,
            {
                camera: Parameters<typeof GetForwardRay>[0];
                length: Parameters<typeof GetForwardRay>[1];
                transform: Parameters<typeof GetForwardRay>[2];
                origin: Parameters<typeof GetForwardRay>[3];
            },
            ReturnType<typeof GetForwardRay>
        >,
        any
    >;
    getForwardRayToRef: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetForwardRayToRef>> & MeshProps,
            {
                camera: Parameters<typeof GetForwardRayToRef>[0];
                refRay: Parameters<typeof GetForwardRayToRef>[1];
                length: Parameters<typeof GetForwardRayToRef>[2];
                transform: Parameters<typeof GetForwardRayToRef>[3];
                origin: Parameters<typeof GetForwardRayToRef>[4];
            },
            ReturnType<typeof GetForwardRayToRef>
        >,
        any
    >;
    multiPick: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof MultiPick>> & MeshProps,
            {
                scene: Parameters<typeof MultiPick>[0];
                x: Parameters<typeof MultiPick>[1];
                y: Parameters<typeof MultiPick>[2];
                predicate: Parameters<typeof MultiPick>[3];
                camera: Parameters<typeof MultiPick>[4];
                trianglePredicate: Parameters<typeof MultiPick>[5];
            },
            ReturnType<typeof MultiPick>
        >,
        any
    >;
    multiPickWithRay: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof MultiPickWithRay>> & MeshProps,
            {
                scene: Parameters<typeof MultiPickWithRay>[0];
                ray: Parameters<typeof MultiPickWithRay>[1];
                predicate: Parameters<typeof MultiPickWithRay>[2];
                trianglePredicate: Parameters<typeof MultiPickWithRay>[3];
            },
            ReturnType<typeof MultiPickWithRay>
        >,
        any
    >;
    pick: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof Pick>> & MeshProps,
            {
                scene: Parameters<typeof Pick>[0];
                x: Parameters<typeof Pick>[1];
                y: Parameters<typeof Pick>[2];
                predicate: Parameters<typeof Pick>[3];
                fastCheck: Parameters<typeof Pick>[4];
                camera: Parameters<typeof Pick>[5];
                trianglePredicate: Parameters<typeof Pick>[6];
                _enableDistantPicking: Parameters<typeof Pick>[7];
            },
            ReturnType<typeof Pick>
        >,
        any
    >;
    pickWithBoundingInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof PickWithBoundingInfo>> & MeshProps,
            {
                scene: Parameters<typeof PickWithBoundingInfo>[0];
                x: Parameters<typeof PickWithBoundingInfo>[1];
                y: Parameters<typeof PickWithBoundingInfo>[2];
                predicate: Parameters<typeof PickWithBoundingInfo>[3];
                fastCheck: Parameters<typeof PickWithBoundingInfo>[4];
                camera: Parameters<typeof PickWithBoundingInfo>[5];
            },
            ReturnType<typeof PickWithBoundingInfo>
        >,
        any
    >;
    pickWithRay: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof PickWithRay>> & MeshProps,
            {
                scene: Parameters<typeof PickWithRay>[0];
                ray: Parameters<typeof PickWithRay>[1];
                predicate: Parameters<typeof PickWithRay>[2];
                fastCheck: Parameters<typeof PickWithRay>[3];
                trianglePredicate: Parameters<typeof PickWithRay>[4];
            },
            ReturnType<typeof PickWithRay>
        >,
        any
    >;
    ray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Ray> & Clonable,
            {
                origin: ConstructorParameters<typeof Ray>[0];
                direction: ConstructorParameters<typeof Ray>[1];
                length: ConstructorParameters<typeof Ray>[2];
                epsilon: ConstructorParameters<typeof Ray>[3];
            },
            Ray
        >,
        any
    >;
    axesViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AxesViewer>,
            {
                scene: ConstructorParameters<typeof AxesViewer>[0];
                scaleLines: ConstructorParameters<typeof AxesViewer>[1];
                renderingGroupId: ConstructorParameters<typeof AxesViewer>[2];
                xAxis: ConstructorParameters<typeof AxesViewer>[3];
                yAxis: ConstructorParameters<typeof AxesViewer>[4];
                zAxis: ConstructorParameters<typeof AxesViewer>[5];
                lineThickness: ConstructorParameters<typeof AxesViewer>[6];
            },
            AxesViewer
        >,
        any
    >;
    boneAxesViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoneAxesViewer>,
            {
                scene: ConstructorParameters<typeof BoneAxesViewer>[0];
                bone: ConstructorParameters<typeof BoneAxesViewer>[1];
                mesh: ConstructorParameters<typeof BoneAxesViewer>[2];
                scaleLines: ConstructorParameters<typeof BoneAxesViewer>[3];
            },
            BoneAxesViewer
        >,
        any
    >;
    debugLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DebugLayer>,
            {
                scene: ConstructorParameters<typeof DebugLayer>[0];
            },
            DebugLayer
        >,
        any
    >;
    directionalLightFrustumViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DirectionalLightFrustumViewer>,
            {
                light: ConstructorParameters<typeof DirectionalLightFrustumViewer>[0];
                camera: ConstructorParameters<typeof DirectionalLightFrustumViewer>[1];
            },
            DirectionalLightFrustumViewer
        >,
        any
    >;
    physicsViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsViewer>,
            {
                scene: ConstructorParameters<typeof PhysicsViewer>[0];
            },
            PhysicsViewer
        >,
        any
    >;
    rayHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RayHelper>,
            {
                ray: ConstructorParameters<typeof RayHelper>[0];
            },
            RayHelper
        >,
        any
    >;
    skeletonViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SkeletonViewer>,
            {
                skeleton: ConstructorParameters<typeof SkeletonViewer>[0];
                mesh: ConstructorParameters<typeof SkeletonViewer>[1];
                scene: ConstructorParameters<typeof SkeletonViewer>[2];
                autoUpdateBonesMatrices: ConstructorParameters<typeof SkeletonViewer>[3];
                renderingGroupId: ConstructorParameters<typeof SkeletonViewer>[4];
                options: ConstructorParameters<typeof SkeletonViewer>[5];
            },
            SkeletonViewer
        >,
        any
    >;
    editableInPropertyPage: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof editableInPropertyPage>> & MeshProps,
            {
                displayName: Parameters<typeof editableInPropertyPage>[0];
                propertyType: Parameters<typeof editableInPropertyPage>[1];
                groupName: Parameters<typeof editableInPropertyPage>[2];
                options: Parameters<typeof editableInPropertyPage>[3];
            },
            ReturnType<typeof editableInPropertyPage>
        >,
        any
    >;
    deviceSource: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DeviceSource>,
            {
                deviceInputSystem: ConstructorParameters<typeof DeviceSource>[0];
                deviceType: ConstructorParameters<typeof DeviceSource>[1];
                deviceSlot: ConstructorParameters<typeof DeviceSource>[2];
            },
            DeviceSource
        >,
        any
    >;
    deviceSourceManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DeviceSourceManager>,
            {
                engine: ConstructorParameters<typeof DeviceSourceManager>[0];
            },
            DeviceSourceManager
        >,
        any
    >;
    internalDeviceSourceManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InternalDeviceSourceManager>,
            {
                engine: ConstructorParameters<typeof InternalDeviceSourceManager>[0];
            },
            InternalDeviceSourceManager
        >,
        any
    >;
    nativeDeviceInputSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeDeviceInputSystem>,
            {
                onDeviceConnected: ConstructorParameters<typeof NativeDeviceInputSystem>[0];
                onDeviceDisconnected: ConstructorParameters<typeof NativeDeviceInputSystem>[1];
                onInputChanged: ConstructorParameters<typeof NativeDeviceInputSystem>[2];
            },
            NativeDeviceInputSystem
        >,
        any
    >;
    webDeviceInputSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebDeviceInputSystem>,
            {
                engine: ConstructorParameters<typeof WebDeviceInputSystem>[0];
                onDeviceConnected: ConstructorParameters<typeof WebDeviceInputSystem>[1];
                onDeviceDisconnected: ConstructorParameters<typeof WebDeviceInputSystem>[2];
                onInputChanged: ConstructorParameters<typeof WebDeviceInputSystem>[3];
            },
            WebDeviceInputSystem
        >,
        any
    >;
    nativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeDataStream>, {}, NativeDataStream>, any>;
    nativeHardwareTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeHardwareTexture>,
            {
                existingTexture: ConstructorParameters<typeof NativeHardwareTexture>[0];
                engine: ConstructorParameters<typeof NativeHardwareTexture>[1];
            },
            NativeHardwareTexture
        >,
        any
    >;
    getNativeAddressMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeAddressMode>> & MeshProps,
            {
                wrapMode: Parameters<typeof getNativeAddressMode>[0];
            },
            ReturnType<typeof getNativeAddressMode>
        >,
        any
    >;
    getNativeAlphaMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeAlphaMode>> & MeshProps,
            {
                mode: Parameters<typeof getNativeAlphaMode>[0];
            },
            ReturnType<typeof getNativeAlphaMode>
        >,
        any
    >;
    getNativeAttribType: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeAttribType>> & MeshProps,
            {
                type: Parameters<typeof getNativeAttribType>[0];
            },
            ReturnType<typeof getNativeAttribType>
        >,
        any
    >;
    getNativeSamplingMode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeSamplingMode>> & MeshProps,
            {
                samplingMode: Parameters<typeof getNativeSamplingMode>[0];
            },
            ReturnType<typeof getNativeSamplingMode>
        >,
        any
    >;
    getNativeStencilDepthFail: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeStencilDepthFail>> & MeshProps,
            {
                depthFail: Parameters<typeof getNativeStencilDepthFail>[0];
            },
            ReturnType<typeof getNativeStencilDepthFail>
        >,
        any
    >;
    getNativeStencilDepthPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeStencilDepthPass>> & MeshProps,
            {
                opPass: Parameters<typeof getNativeStencilDepthPass>[0];
            },
            ReturnType<typeof getNativeStencilDepthPass>
        >,
        any
    >;
    getNativeStencilFunc: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeStencilFunc>> & MeshProps,
            {
                func: Parameters<typeof getNativeStencilFunc>[0];
            },
            ReturnType<typeof getNativeStencilFunc>
        >,
        any
    >;
    getNativeStencilOpFail: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeStencilOpFail>> & MeshProps,
            {
                opFail: Parameters<typeof getNativeStencilOpFail>[0];
            },
            ReturnType<typeof getNativeStencilOpFail>
        >,
        any
    >;
    getNativeTextureFormat: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getNativeTextureFormat>> & MeshProps,
            {
                format: Parameters<typeof getNativeTextureFormat>[0];
                type: Parameters<typeof getNativeTextureFormat>[1];
            },
            ReturnType<typeof getNativeTextureFormat>
        >,
        any
    >;
    nativePipelineContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativePipelineContext>,
            {
                engine: ConstructorParameters<typeof NativePipelineContext>[0];
                isAsync: ConstructorParameters<typeof NativePipelineContext>[1];
                shaderProcessingContext: ConstructorParameters<typeof NativePipelineContext>[2];
            },
            NativePipelineContext
        >,
        any
    >;
    nativeRenderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeRenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof NativeRenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof NativeRenderTargetWrapper>[1];
                size: ConstructorParameters<typeof NativeRenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof NativeRenderTargetWrapper>[3];
            },
            NativeRenderTargetWrapper
        >,
        any
    >;
    nativeShaderProcessingContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeShaderProcessingContext>, {}, NativeShaderProcessingContext>, any>;
    nativeShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeShaderProcessor>, {}, NativeShaderProcessor>, any>;
    validatedNativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValidatedNativeDataStream>, {}, ValidatedNativeDataStream>, any>;
    shaderDefineArithmeticOperator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderDefineArithmeticOperator>,
            {
                define: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[0];
                operand: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[1];
                testValue: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[2];
            },
            ShaderDefineArithmeticOperator
        >,
        any
    >;
    shaderDefineIsDefinedOperator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderDefineIsDefinedOperator>,
            {
                define: ConstructorParameters<typeof ShaderDefineIsDefinedOperator>[0];
                not: ConstructorParameters<typeof ShaderDefineIsDefinedOperator>[1];
            },
            ShaderDefineIsDefinedOperator
        >,
        any
    >;
    shaderCodeCursor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeCursor>, {}, ShaderCodeCursor>, any>;
    shaderCodeInliner: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderCodeInliner>,
            {
                sourceCode: ConstructorParameters<typeof ShaderCodeInliner>[0];
                numMaxIterations: ConstructorParameters<typeof ShaderCodeInliner>[1];
            },
            ShaderCodeInliner
        >,
        any
    >;
    shaderCodeNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeNode>, {}, ShaderCodeNode>, any>;
    finalize: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof Finalize>> & MeshProps,
            {
                vertexCode: Parameters<typeof Finalize>[0];
                fragmentCode: Parameters<typeof Finalize>[1];
                options: Parameters<typeof Finalize>[2];
            },
            ReturnType<typeof Finalize>
        >,
        any
    >;
    initialize: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof Initialize>> & MeshProps,
            {
                options: Parameters<typeof Initialize>[0];
            },
            ReturnType<typeof Initialize>
        >,
        any
    >;
    preProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof PreProcess>> & MeshProps,
            {
                sourceCode: Parameters<typeof PreProcess>[0];
                options: Parameters<typeof PreProcess>[1];
                callback: Parameters<typeof PreProcess>[2];
                engine: Parameters<typeof PreProcess>[3];
            },
            ReturnType<typeof PreProcess>
        >,
        any
    >;
    process: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof Process>> & MeshProps,
            {
                sourceCode: Parameters<typeof Process>[0];
                options: Parameters<typeof Process>[1];
                callback: Parameters<typeof Process>[2];
                engine: Parameters<typeof Process>[3];
            },
            ReturnType<typeof Process>
        >,
        any
    >;
    _ProcessIncludes: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _ProcessIncludes>> & MeshProps,
            {
                sourceCode: Parameters<typeof _ProcessIncludes>[0];
                options: Parameters<typeof _ProcessIncludes>[1];
                callback: Parameters<typeof _ProcessIncludes>[2];
            },
            ReturnType<typeof _ProcessIncludes>
        >,
        any
    >;
    webGL2ShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGL2ShaderProcessor>, {}, WebGL2ShaderProcessor>, any>;
    webGLHardwareTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLHardwareTexture>,
            {
                existingTexture: ConstructorParameters<typeof WebGLHardwareTexture>[0];
                context: ConstructorParameters<typeof WebGLHardwareTexture>[1];
            },
            WebGLHardwareTexture
        >,
        any
    >;
    webGLPipelineContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLPipelineContext>, {}, WebGLPipelineContext>, any>;
    webGLRenderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLRenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof WebGLRenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof WebGLRenderTargetWrapper>[1];
                size: ConstructorParameters<typeof WebGLRenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof WebGLRenderTargetWrapper>[3];
                context: ConstructorParameters<typeof WebGLRenderTargetWrapper>[4];
            },
            WebGLRenderTargetWrapper
        >,
        any
    >;
    webGLShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLShaderProcessor>, {}, WebGLShaderProcessor>, any>;
    webGPUBufferManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUBufferManager>,
            {
                engine: ConstructorParameters<typeof WebGPUBufferManager>[0];
                device: ConstructorParameters<typeof WebGPUBufferManager>[1];
            },
            WebGPUBufferManager
        >,
        any
    >;
    webGPUBundleList: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUBundleList> & Clonable,
            {
                device: ConstructorParameters<typeof WebGPUBundleList>[0];
            },
            WebGPUBundleList
        >,
        any
    >;
    webGPURenderItemBeginOcclusionQuery: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderItemBeginOcclusionQuery> & Clonable,
            {
                query: ConstructorParameters<typeof WebGPURenderItemBeginOcclusionQuery>[0];
            },
            WebGPURenderItemBeginOcclusionQuery
        >,
        any
    >;
    webGPURenderItemBlendColor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderItemBlendColor> & Clonable,
            {
                color: ConstructorParameters<typeof WebGPURenderItemBlendColor>[0];
            },
            WebGPURenderItemBlendColor
        >,
        any
    >;
    webGPURenderItemEndOcclusionQuery: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<WebGPURenderItemEndOcclusionQuery> & Clonable, {}, WebGPURenderItemEndOcclusionQuery>,
        any
    >;
    webGPURenderItemScissor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderItemScissor> & Clonable,
            {
                x: ConstructorParameters<typeof WebGPURenderItemScissor>[0];
                y: ConstructorParameters<typeof WebGPURenderItemScissor>[1];
                w: ConstructorParameters<typeof WebGPURenderItemScissor>[2];
                h: ConstructorParameters<typeof WebGPURenderItemScissor>[3];
            },
            WebGPURenderItemScissor
        >,
        any
    >;
    webGPURenderItemStencilRef: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderItemStencilRef> & Clonable,
            {
                ref: ConstructorParameters<typeof WebGPURenderItemStencilRef>[0];
            },
            WebGPURenderItemStencilRef
        >,
        any
    >;
    webGPURenderItemViewport: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderItemViewport> & Clonable,
            {
                x: ConstructorParameters<typeof WebGPURenderItemViewport>[0];
                y: ConstructorParameters<typeof WebGPURenderItemViewport>[1];
                w: ConstructorParameters<typeof WebGPURenderItemViewport>[2];
                h: ConstructorParameters<typeof WebGPURenderItemViewport>[3];
            },
            WebGPURenderItemViewport
        >,
        any
    >;
    webGPUCacheBindGroups: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUCacheBindGroups>,
            {
                device: ConstructorParameters<typeof WebGPUCacheBindGroups>[0];
                cacheSampler: ConstructorParameters<typeof WebGPUCacheBindGroups>[1];
                engine: ConstructorParameters<typeof WebGPUCacheBindGroups>[2];
            },
            WebGPUCacheBindGroups
        >,
        any
    >;
    webGPUCacheRenderPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUCacheRenderPipeline>,
            {
                device: ConstructorParameters<typeof WebGPUCacheRenderPipeline>[0];
                emptyVertexBuffer: ConstructorParameters<typeof WebGPUCacheRenderPipeline>[1];
            },
            WebGPUCacheRenderPipeline
        >,
        any
    >;
    webGPUCacheSampler: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUCacheSampler>,
            {
                device: ConstructorParameters<typeof WebGPUCacheSampler>[0];
            },
            WebGPUCacheSampler
        >,
        any
    >;
    webGPUClearQuad: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUClearQuad>,
            {
                device: ConstructorParameters<typeof WebGPUClearQuad>[0];
                engine: ConstructorParameters<typeof WebGPUClearQuad>[1];
                emptyVertexBuffer: ConstructorParameters<typeof WebGPUClearQuad>[2];
            },
            WebGPUClearQuad
        >,
        any
    >;
    webGPUComputeContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUComputeContext>,
            {
                device: ConstructorParameters<typeof WebGPUComputeContext>[0];
                cacheSampler: ConstructorParameters<typeof WebGPUComputeContext>[1];
            },
            WebGPUComputeContext
        >,
        any
    >;
    webGPUComputePipelineContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUComputePipelineContext>,
            {
                engine: ConstructorParameters<typeof WebGPUComputePipelineContext>[0];
            },
            WebGPUComputePipelineContext
        >,
        any
    >;
    webGPUDepthCullingState: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUDepthCullingState>,
            {
                cache: ConstructorParameters<typeof WebGPUDepthCullingState>[0];
            },
            WebGPUDepthCullingState
        >,
        any
    >;
    webGPUDrawContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUDrawContext>,
            {
                bufferManager: ConstructorParameters<typeof WebGPUDrawContext>[0];
            },
            WebGPUDrawContext
        >,
        any
    >;
    webGPUExternalTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUExternalTexture>,
            {
                video: ConstructorParameters<typeof WebGPUExternalTexture>[0];
            },
            WebGPUExternalTexture
        >,
        any
    >;
    webGPUHardwareTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUHardwareTexture>,
            {
                _engine: ConstructorParameters<typeof WebGPUHardwareTexture>[0];
                existingTexture: ConstructorParameters<typeof WebGPUHardwareTexture>[1];
            },
            WebGPUHardwareTexture
        >,
        any
    >;
    webGPUMaterialContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUMaterialContext>, {}, WebGPUMaterialContext>, any>;
    webGPUOcclusionQuery: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUOcclusionQuery>,
            {
                engine: ConstructorParameters<typeof WebGPUOcclusionQuery>[0];
                device: ConstructorParameters<typeof WebGPUOcclusionQuery>[1];
                bufferManager: ConstructorParameters<typeof WebGPUOcclusionQuery>[2];
                startCount: ConstructorParameters<typeof WebGPUOcclusionQuery>[3];
                incrementCount: ConstructorParameters<typeof WebGPUOcclusionQuery>[4];
            },
            WebGPUOcclusionQuery
        >,
        any
    >;
    webGPUPerfCounter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUPerfCounter>, {}, WebGPUPerfCounter>, any>;
    webGPUPipelineContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUPipelineContext>,
            {
                shaderProcessingContext: ConstructorParameters<typeof WebGPUPipelineContext>[0];
                engine: ConstructorParameters<typeof WebGPUPipelineContext>[1];
            },
            WebGPUPipelineContext
        >,
        any
    >;
    webGPUQuerySet: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUQuerySet>,
            {
                engine: ConstructorParameters<typeof WebGPUQuerySet>[0];
                count: ConstructorParameters<typeof WebGPUQuerySet>[1];
                type: ConstructorParameters<typeof WebGPUQuerySet>[2];
                device: ConstructorParameters<typeof WebGPUQuerySet>[3];
                bufferManager: ConstructorParameters<typeof WebGPUQuerySet>[4];
                canUseMultipleBuffers: ConstructorParameters<typeof WebGPUQuerySet>[5];
                label: ConstructorParameters<typeof WebGPUQuerySet>[6];
            },
            WebGPUQuerySet
        >,
        any
    >;
    webGPURenderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPURenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof WebGPURenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof WebGPURenderTargetWrapper>[1];
                size: ConstructorParameters<typeof WebGPURenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof WebGPURenderTargetWrapper>[3];
                label: ConstructorParameters<typeof WebGPURenderTargetWrapper>[4];
            },
            WebGPURenderTargetWrapper
        >,
        any
    >;
    webGPUShaderProcessingContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUShaderProcessingContext>,
            {
                shaderLanguage: ConstructorParameters<typeof WebGPUShaderProcessingContext>[0];
                pureMode: ConstructorParameters<typeof WebGPUShaderProcessingContext>[1];
            },
            WebGPUShaderProcessingContext
        >,
        any
    >;
    webGPUShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUShaderProcessor>, {}, WebGPUShaderProcessor>, any>;
    webGPUShaderProcessorGLSL: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUShaderProcessorGLSL>, {}, WebGPUShaderProcessorGLSL>, any>;
    webGPUShaderProcessorWGSL: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUShaderProcessorWGSL>, {}, WebGPUShaderProcessorWGSL>, any>;
    webGPUSnapshotRendering: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUSnapshotRendering>,
            {
                engine: ConstructorParameters<typeof WebGPUSnapshotRendering>[0];
                renderingMode: ConstructorParameters<typeof WebGPUSnapshotRendering>[1];
                bundleList: ConstructorParameters<typeof WebGPUSnapshotRendering>[2];
            },
            WebGPUSnapshotRendering
        >,
        any
    >;
    webGPUStencilStateComposer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUStencilStateComposer>,
            {
                cache: ConstructorParameters<typeof WebGPUStencilStateComposer>[0];
            },
            WebGPUStencilStateComposer
        >,
        any
    >;
    webGPUTextureManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUTextureManager>,
            {
                engine: ConstructorParameters<typeof WebGPUTextureManager>[0];
                device: ConstructorParameters<typeof WebGPUTextureManager>[1];
                bufferManager: ConstructorParameters<typeof WebGPUTextureManager>[2];
                enabledExtensions: ConstructorParameters<typeof WebGPUTextureManager>[3];
            },
            WebGPUTextureManager
        >,
        any
    >;
    webGPUDurationMeasure: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUDurationMeasure>,
            {
                engine: ConstructorParameters<typeof WebGPUDurationMeasure>[0];
                device: ConstructorParameters<typeof WebGPUDurationMeasure>[1];
                bufferManager: ConstructorParameters<typeof WebGPUDurationMeasure>[2];
                count: ConstructorParameters<typeof WebGPUDurationMeasure>[3];
                querySetLabel: ConstructorParameters<typeof WebGPUDurationMeasure>[4];
            },
            WebGPUDurationMeasure
        >,
        any
    >;
    webGPUTimestampQuery: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUTimestampQuery>,
            {
                engine: ConstructorParameters<typeof WebGPUTimestampQuery>[0];
                device: ConstructorParameters<typeof WebGPUTimestampQuery>[1];
                bufferManager: ConstructorParameters<typeof WebGPUTimestampQuery>[2];
            },
            WebGPUTimestampQuery
        >,
        any
    >;
    abstractEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AbstractEngine>,
            {
                antialias: ConstructorParameters<typeof AbstractEngine>[0];
                options: ConstructorParameters<typeof AbstractEngine>[1];
                adaptToDeviceRatio: ConstructorParameters<typeof AbstractEngine>[2];
            },
            AbstractEngine
        >,
        any
    >;
    queueNewFrame: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof QueueNewFrame>> & MeshProps,
            {
                func: Parameters<typeof QueueNewFrame>[0];
                requester: Parameters<typeof QueueNewFrame>[1];
            },
            ReturnType<typeof QueueNewFrame>
        >,
        any
    >;
    engine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Engine>,
            {
                canvasOrContext: ConstructorParameters<typeof Engine>[0];
                antialias: ConstructorParameters<typeof Engine>[1];
                options: ConstructorParameters<typeof Engine>[2];
                adaptToDeviceRatio: ConstructorParameters<typeof Engine>[3];
            },
            Engine
        >,
        any
    >;
    acquireNativeObjectAsync: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AcquireNativeObjectAsync>> & MeshProps, {}, ReturnType<typeof AcquireNativeObjectAsync>>,
        any
    >;
    nativeEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeEngine>,
            {
                options: ConstructorParameters<typeof NativeEngine>[0];
            },
            NativeEngine
        >,
        any
    >;
    registerNativeTypeAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterNativeTypeAsync>> & MeshProps,
            {
                typeName: Parameters<typeof RegisterNativeTypeAsync>[0];
                constructor: Parameters<typeof RegisterNativeTypeAsync>[1];
            },
            ReturnType<typeof RegisterNativeTypeAsync>
        >,
        any
    >;
    nullEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NullEngine>,
            {
                options: ConstructorParameters<typeof NullEngine>[0];
            },
            NullEngine
        >,
        any
    >;
    nullEngineOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NullEngineOptions>, {}, NullEngineOptions>, any>;
    renderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof RenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof RenderTargetWrapper>[1];
                size: ConstructorParameters<typeof RenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof RenderTargetWrapper>[3];
                label: ConstructorParameters<typeof RenderTargetWrapper>[4];
            },
            RenderTargetWrapper
        >,
        any
    >;
    thinEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinEngine>,
            {
                canvasOrContext: ConstructorParameters<typeof ThinEngine>[0];
                antialias: ConstructorParameters<typeof ThinEngine>[1];
                options: ConstructorParameters<typeof ThinEngine>[2];
                adaptToDeviceRatio: ConstructorParameters<typeof ThinEngine>[3];
            },
            ThinEngine
        >,
        any
    >;
    thinWebGPUEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinWebGPUEngine>, {}, ThinWebGPUEngine>, any>;
    webGPUEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUEngine>,
            {
                canvas: ConstructorParameters<typeof WebGPUEngine>[0];
                options: ConstructorParameters<typeof WebGPUEngine>[1];
            },
            WebGPUEngine
        >,
        any
    >;
    clipboardInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClipboardInfo>,
            {
                type: ConstructorParameters<typeof ClipboardInfo>[0];
                event: ConstructorParameters<typeof ClipboardInfo>[1];
            },
            ClipboardInfo
        >,
        any
    >;
    keyboardInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KeyboardInfo>,
            {
                type: ConstructorParameters<typeof KeyboardInfo>[0];
                event: ConstructorParameters<typeof KeyboardInfo>[1];
            },
            KeyboardInfo
        >,
        any
    >;
    keyboardInfoPre: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KeyboardInfoPre>,
            {
                type: ConstructorParameters<typeof KeyboardInfoPre>[0];
                event: ConstructorParameters<typeof KeyboardInfoPre>[1];
            },
            KeyboardInfoPre
        >,
        any
    >;
    pointerInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointerInfo>,
            {
                type: ConstructorParameters<typeof PointerInfo>[0];
                event: ConstructorParameters<typeof PointerInfo>[1];
                pickInfo: ConstructorParameters<typeof PointerInfo>[2];
                inputManager: ConstructorParameters<typeof PointerInfo>[3];
            },
            PointerInfo
        >,
        any
    >;
    pointerInfoBase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointerInfoBase>,
            {
                type: ConstructorParameters<typeof PointerInfoBase>[0];
                event: ConstructorParameters<typeof PointerInfoBase>[1];
            },
            PointerInfoBase
        >,
        any
    >;
    pointerInfoPre: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointerInfoPre>,
            {
                type: ConstructorParameters<typeof PointerInfoPre>[0];
                event: ConstructorParameters<typeof PointerInfoPre>[1];
                localX: ConstructorParameters<typeof PointerInfoPre>[2];
                localY: ConstructorParameters<typeof PointerInfoPre>[3];
            },
            PointerInfoPre
        >,
        any
    >;
    flowGraphLogicAndBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLogicAndBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLogicAndBlock>[0];
            },
            FlowGraphLogicAndBlock
        >,
        any
    >;
    flowGraphLogicNotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLogicNotBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLogicNotBlock>[0];
            },
            FlowGraphLogicNotBlock
        >,
        any
    >;
    flowGraphLogicOrBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLogicOrBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLogicOrBlock>[0];
            },
            FlowGraphLogicOrBlock
        >,
        any
    >;
    flowGraphAbsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAbsBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAbsBlock>[0];
            },
            FlowGraphAbsBlock
        >,
        any
    >;
    flowGraphAcosBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAcosBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAcosBlock>[0];
            },
            FlowGraphAcosBlock
        >,
        any
    >;
    flowGraphAcoshBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAcoshBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAcoshBlock>[0];
            },
            FlowGraphAcoshBlock
        >,
        any
    >;
    flowGraphAddBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAddBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAddBlock>[0];
            },
            FlowGraphAddBlock
        >,
        any
    >;
    flowGraphAsinBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAsinBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAsinBlock>[0];
            },
            FlowGraphAsinBlock
        >,
        any
    >;
    flowGraphAsinhBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAsinhBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAsinhBlock>[0];
            },
            FlowGraphAsinhBlock
        >,
        any
    >;
    flowGraphAtan2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAtan2Block>,
            {
                config: ConstructorParameters<typeof FlowGraphAtan2Block>[0];
            },
            FlowGraphAtan2Block
        >,
        any
    >;
    flowGraphAtanBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAtanBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAtanBlock>[0];
            },
            FlowGraphAtanBlock
        >,
        any
    >;
    flowGraphAtanhBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAtanhBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAtanhBlock>[0];
            },
            FlowGraphAtanhBlock
        >,
        any
    >;
    flowGraphBitwiseAndBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseAndBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseAndBlock>[0];
            },
            FlowGraphBitwiseAndBlock
        >,
        any
    >;
    flowGraphBitwiseLeftShiftBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseLeftShiftBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseLeftShiftBlock>[0];
            },
            FlowGraphBitwiseLeftShiftBlock
        >,
        any
    >;
    flowGraphBitwiseNotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseNotBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseNotBlock>[0];
            },
            FlowGraphBitwiseNotBlock
        >,
        any
    >;
    flowGraphBitwiseOrBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseOrBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseOrBlock>[0];
            },
            FlowGraphBitwiseOrBlock
        >,
        any
    >;
    flowGraphBitwiseRightShiftBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseRightShiftBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseRightShiftBlock>[0];
            },
            FlowGraphBitwiseRightShiftBlock
        >,
        any
    >;
    flowGraphBitwiseXorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBitwiseXorBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBitwiseXorBlock>[0];
            },
            FlowGraphBitwiseXorBlock
        >,
        any
    >;
    flowGraphCeilBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCeilBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCeilBlock>[0];
            },
            FlowGraphCeilBlock
        >,
        any
    >;
    flowGraphClampBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphClampBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphClampBlock>[0];
            },
            FlowGraphClampBlock
        >,
        any
    >;
    flowGraphCosBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCosBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCosBlock>[0];
            },
            FlowGraphCosBlock
        >,
        any
    >;
    flowGraphCoshBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCoshBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCoshBlock>[0];
            },
            FlowGraphCoshBlock
        >,
        any
    >;
    flowGraphCountLeadingZerosBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCountLeadingZerosBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCountLeadingZerosBlock>[0];
            },
            FlowGraphCountLeadingZerosBlock
        >,
        any
    >;
    flowGraphCountOneBitsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCountOneBitsBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCountOneBitsBlock>[0];
            },
            FlowGraphCountOneBitsBlock
        >,
        any
    >;
    flowGraphCountTrailingZerosBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCountTrailingZerosBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCountTrailingZerosBlock>[0];
            },
            FlowGraphCountTrailingZerosBlock
        >,
        any
    >;
    flowGraphCrossBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCrossBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCrossBlock>[0];
            },
            FlowGraphCrossBlock
        >,
        any
    >;
    flowGraphCubeRootBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCubeRootBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCubeRootBlock>[0];
            },
            FlowGraphCubeRootBlock
        >,
        any
    >;
    flowGraphDegToRadBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDegToRadBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDegToRadBlock>[0];
            },
            FlowGraphDegToRadBlock
        >,
        any
    >;
    flowGraphDeterminantBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDeterminantBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDeterminantBlock>[0];
            },
            FlowGraphDeterminantBlock
        >,
        any
    >;
    flowGraphDivideBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDivideBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDivideBlock>[0];
            },
            FlowGraphDivideBlock
        >,
        any
    >;
    flowGraphDotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDotBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDotBlock>[0];
            },
            FlowGraphDotBlock
        >,
        any
    >;
    flowGraphEBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphEBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphEBlock>[0];
            },
            FlowGraphEBlock
        >,
        any
    >;
    flowGraphEqBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphEqBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphEqBlock>[0];
            },
            FlowGraphEqBlock
        >,
        any
    >;
    flowGraphExpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphExpBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphExpBlock>[0];
            },
            FlowGraphExpBlock
        >,
        any
    >;
    flowGraphFloorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphFloorBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphFloorBlock>[0];
            },
            FlowGraphFloorBlock
        >,
        any
    >;
    flowGraphFractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphFractBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphFractBlock>[0];
            },
            FlowGraphFractBlock
        >,
        any
    >;
    flowGraphGreaterThanBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGreaterThanBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGreaterThanBlock>[0];
            },
            FlowGraphGreaterThanBlock
        >,
        any
    >;
    flowGraphGreaterThanOrEqualBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGreaterThanOrEqualBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGreaterThanOrEqualBlock>[0];
            },
            FlowGraphGreaterThanOrEqualBlock
        >,
        any
    >;
    flowGraphInfBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphInfBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphInfBlock>[0];
            },
            FlowGraphInfBlock
        >,
        any
    >;
    flowGraphInterpolateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphInterpolateBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphInterpolateBlock>[0];
            },
            FlowGraphInterpolateBlock
        >,
        any
    >;
    flowGraphInvertMatrixBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphInvertMatrixBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphInvertMatrixBlock>[0];
            },
            FlowGraphInvertMatrixBlock
        >,
        any
    >;
    flowGraphIsInfBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphIsInfBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphIsInfBlock>[0];
            },
            FlowGraphIsInfBlock
        >,
        any
    >;
    flowGraphIsNanBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphIsNanBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphIsNanBlock>[0];
            },
            FlowGraphIsNanBlock
        >,
        any
    >;
    flowGraphLengthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLengthBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLengthBlock>[0];
            },
            FlowGraphLengthBlock
        >,
        any
    >;
    flowGraphLessThanBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLessThanBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLessThanBlock>[0];
            },
            FlowGraphLessThanBlock
        >,
        any
    >;
    flowGraphLessThanOrEqualBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLessThanOrEqualBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLessThanOrEqualBlock>[0];
            },
            FlowGraphLessThanOrEqualBlock
        >,
        any
    >;
    flowGraphLog10Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLog10Block>,
            {
                config: ConstructorParameters<typeof FlowGraphLog10Block>[0];
            },
            FlowGraphLog10Block
        >,
        any
    >;
    flowGraphLog2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLog2Block>,
            {
                config: ConstructorParameters<typeof FlowGraphLog2Block>[0];
            },
            FlowGraphLog2Block
        >,
        any
    >;
    flowGraphLogBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphLogBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphLogBlock>[0];
            },
            FlowGraphLogBlock
        >,
        any
    >;
    flowGraphMatMulBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMatMulBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMatMulBlock>[0];
            },
            FlowGraphMatMulBlock
        >,
        any
    >;
    flowGraphMaxBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMaxBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMaxBlock>[0];
            },
            FlowGraphMaxBlock
        >,
        any
    >;
    flowGraphMinBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMinBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMinBlock>[0];
            },
            FlowGraphMinBlock
        >,
        any
    >;
    flowGraphMultiplyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMultiplyBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMultiplyBlock>[0];
            },
            FlowGraphMultiplyBlock
        >,
        any
    >;
    flowGraphNaNBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphNaNBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphNaNBlock>[0];
            },
            FlowGraphNaNBlock
        >,
        any
    >;
    flowGraphNegBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphNegBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphNegBlock>[0];
            },
            FlowGraphNegBlock
        >,
        any
    >;
    flowGraphNormalizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphNormalizeBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphNormalizeBlock>[0];
            },
            FlowGraphNormalizeBlock
        >,
        any
    >;
    flowGraphPiBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPiBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPiBlock>[0];
            },
            FlowGraphPiBlock
        >,
        any
    >;
    flowGraphPowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPowBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPowBlock>[0];
            },
            FlowGraphPowBlock
        >,
        any
    >;
    flowGraphRadToDegBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphRadToDegBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphRadToDegBlock>[0];
            },
            FlowGraphRadToDegBlock
        >,
        any
    >;
    flowGraphRandomBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphRandomBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphRandomBlock>[0];
            },
            FlowGraphRandomBlock
        >,
        any
    >;
    flowGraphRemainderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphRemainderBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphRemainderBlock>[0];
            },
            FlowGraphRemainderBlock
        >,
        any
    >;
    flowGraphRotate2DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphRotate2DBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphRotate2DBlock>[0];
            },
            FlowGraphRotate2DBlock
        >,
        any
    >;
    flowGraphRotate3DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphRotate3DBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphRotate3DBlock>[0];
            },
            FlowGraphRotate3DBlock
        >,
        any
    >;
    flowGraphSaturateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSaturateBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSaturateBlock>[0];
            },
            FlowGraphSaturateBlock
        >,
        any
    >;
    flowGraphSignBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSignBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSignBlock>[0];
            },
            FlowGraphSignBlock
        >,
        any
    >;
    flowGraphSinBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSinBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSinBlock>[0];
            },
            FlowGraphSinBlock
        >,
        any
    >;
    flowGraphSinhBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSinhBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSinhBlock>[0];
            },
            FlowGraphSinhBlock
        >,
        any
    >;
    flowGraphSqrtBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSqrtBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSqrtBlock>[0];
            },
            FlowGraphSqrtBlock
        >,
        any
    >;
    flowGraphSubtractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSubtractBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSubtractBlock>[0];
            },
            FlowGraphSubtractBlock
        >,
        any
    >;
    flowGraphTanBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTanBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTanBlock>[0];
            },
            FlowGraphTanBlock
        >,
        any
    >;
    flowGraphTanhBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTanhBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTanhBlock>[0];
            },
            FlowGraphTanhBlock
        >,
        any
    >;
    flowGraphTransposeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTransposeBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTransposeBlock>[0];
            },
            FlowGraphTransposeBlock
        >,
        any
    >;
    flowGraphTruncBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTruncBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTruncBlock>[0];
            },
            FlowGraphTruncBlock
        >,
        any
    >;
    flowGraphBinaryOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBinaryOperationBlock>,
            {
                leftRichType: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[0];
                rightRichType: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[1];
                resultRichType: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[2];
                _operation: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[3];
                _className: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[4];
                config: ConstructorParameters<typeof FlowGraphBinaryOperationBlock>[5];
            },
            FlowGraphBinaryOperationBlock
        >,
        any
    >;
    flowGraphCachedOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCachedOperationBlock>,
            {
                outputRichType: ConstructorParameters<typeof FlowGraphCachedOperationBlock>[0];
                config: ConstructorParameters<typeof FlowGraphCachedOperationBlock>[1];
            },
            FlowGraphCachedOperationBlock
        >,
        any
    >;
    flowGraphConditionalDataBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConditionalDataBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConditionalDataBlock>[0];
            },
            FlowGraphConditionalDataBlock
        >,
        any
    >;
    flowGraphConstantBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConstantBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConstantBlock>[0];
            },
            FlowGraphConstantBlock
        >,
        any
    >;
    flowGraphConstantOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConstantOperationBlock>,
            {
                richType: ConstructorParameters<typeof FlowGraphConstantOperationBlock>[0];
                _operation: ConstructorParameters<typeof FlowGraphConstantOperationBlock>[1];
                _className: ConstructorParameters<typeof FlowGraphConstantOperationBlock>[2];
                config: ConstructorParameters<typeof FlowGraphConstantOperationBlock>[3];
            },
            FlowGraphConstantOperationBlock
        >,
        any
    >;
    flowGraphCoordinateTransformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCoordinateTransformBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCoordinateTransformBlock>[0];
            },
            FlowGraphCoordinateTransformBlock
        >,
        any
    >;
    flowGraphGetPropertyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGetPropertyBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGetPropertyBlock>[0];
            },
            FlowGraphGetPropertyBlock
        >,
        any
    >;
    flowGraphGetVariableBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGetVariableBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGetVariableBlock>[0];
            },
            FlowGraphGetVariableBlock
        >,
        any
    >;
    flowGraphTernaryOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTernaryOperationBlock>,
            {
                t1Type: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[0];
                t2Type: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[1];
                t3Type: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[2];
                resultRichType: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[3];
                _operation: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[4];
                _className: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[5];
                config: ConstructorParameters<typeof FlowGraphTernaryOperationBlock>[6];
            },
            FlowGraphTernaryOperationBlock
        >,
        any
    >;
    flowGraphUnaryOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphUnaryOperationBlock>,
            {
                inputRichType: ConstructorParameters<typeof FlowGraphUnaryOperationBlock>[0];
                resultRichType: ConstructorParameters<typeof FlowGraphUnaryOperationBlock>[1];
                _operation: ConstructorParameters<typeof FlowGraphUnaryOperationBlock>[2];
                _className: ConstructorParameters<typeof FlowGraphUnaryOperationBlock>[3];
                config: ConstructorParameters<typeof FlowGraphUnaryOperationBlock>[4];
            },
            FlowGraphUnaryOperationBlock
        >,
        any
    >;
    flowGraphMeshPickEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMeshPickEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMeshPickEventBlock>[0];
            },
            FlowGraphMeshPickEventBlock
        >,
        any
    >;
    flowGraphReceiveCustomEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphReceiveCustomEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphReceiveCustomEventBlock>[0];
            },
            FlowGraphReceiveCustomEventBlock
        >,
        any
    >;
    flowGraphPauseAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPauseAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPauseAnimationBlock>[0];
            },
            FlowGraphPauseAnimationBlock
        >,
        any
    >;
    flowGraphPlayAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPlayAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPlayAnimationBlock>[0];
            },
            FlowGraphPlayAnimationBlock
        >,
        any
    >;
    flowGraphStopAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphStopAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphStopAnimationBlock>[0];
            },
            FlowGraphStopAnimationBlock
        >,
        any
    >;
    flowGraphPlayAudioBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPlayAudioBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPlayAudioBlock>[0];
            },
            FlowGraphPlayAudioBlock
        >,
        any
    >;
    flowGraphStopAudioBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphStopAudioBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphStopAudioBlock>[0];
            },
            FlowGraphStopAudioBlock
        >,
        any
    >;
    flowGraphBranchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBranchBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBranchBlock>[0];
            },
            FlowGraphBranchBlock
        >,
        any
    >;
    flowGraphCounterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCounterBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCounterBlock>[0];
            },
            FlowGraphCounterBlock
        >,
        any
    >;
    flowGraphDebounceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDebounceBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDebounceBlock>[0];
            },
            FlowGraphDebounceBlock
        >,
        any
    >;
    flowGraphDoNBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDoNBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDoNBlock>[0];
            },
            FlowGraphDoNBlock
        >,
        any
    >;
    flowGraphFlipFlopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphFlipFlopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphFlipFlopBlock>[0];
            },
            FlowGraphFlipFlopBlock
        >,
        any
    >;
    flowGraphForLoopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphForLoopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphForLoopBlock>[0];
            },
            FlowGraphForLoopBlock
        >,
        any
    >;
    flowGraphMultiGateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMultiGateBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMultiGateBlock>[0];
            },
            FlowGraphMultiGateBlock
        >,
        any
    >;
    flowGraphSequenceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSequenceBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSequenceBlock>[0];
            },
            FlowGraphSequenceBlock
        >,
        any
    >;
    flowGraphSwitchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSwitchBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSwitchBlock>[0];
            },
            FlowGraphSwitchBlock
        >,
        any
    >;
    flowGraphThrottleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphThrottleBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphThrottleBlock>[0];
            },
            FlowGraphThrottleBlock
        >,
        any
    >;
    flowGraphTimerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTimerBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTimerBlock>[0];
            },
            FlowGraphTimerBlock
        >,
        any
    >;
    flowGraphWaitAllBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphWaitAllBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphWaitAllBlock>[0];
            },
            FlowGraphWaitAllBlock
        >,
        any
    >;
    flowGraphWhileLoopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphWhileLoopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphWhileLoopBlock>[0];
            },
            FlowGraphWhileLoopBlock
        >,
        any
    >;
    flowGraphConsoleLogBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConsoleLogBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConsoleLogBlock>[0];
            },
            FlowGraphConsoleLogBlock
        >,
        any
    >;
    flowGraphSendCustomEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSendCustomEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSendCustomEventBlock>[0];
            },
            FlowGraphSendCustomEventBlock
        >,
        any
    >;
    flowGraphSetPropertyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSetPropertyBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSetPropertyBlock>[0];
            },
            FlowGraphSetPropertyBlock
        >,
        any
    >;
    flowGraphSetVariableBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSetVariableBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSetVariableBlock>[0];
            },
            FlowGraphSetVariableBlock
        >,
        any
    >;
    flowGraph: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraph>,
            {
                params: ConstructorParameters<typeof FlowGraph>[0];
            },
            FlowGraph
        >,
        any
    >;
    flowGraphAsyncExecutionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAsyncExecutionBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAsyncExecutionBlock>[0];
            },
            FlowGraphAsyncExecutionBlock
        >,
        any
    >;
    flowGraphBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBlock>[0];
            },
            FlowGraphBlock
        >,
        any
    >;
    flowGraphConnection: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConnection>,
            {
                name: ConstructorParameters<typeof FlowGraphConnection>[0];
                _connectionType: ConstructorParameters<typeof FlowGraphConnection>[1];
                _ownerBlock: ConstructorParameters<typeof FlowGraphConnection>[2];
            },
            FlowGraphConnection
        >,
        any
    >;
    flowGraphContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphContext>,
            {
                params: ConstructorParameters<typeof FlowGraphContext>[0];
            },
            FlowGraphContext
        >,
        any
    >;
    flowGraphContextLogger: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphContextLogger>,
            {
                _context: ConstructorParameters<typeof FlowGraphContextLogger>[0];
            },
            FlowGraphContextLogger
        >,
        any
    >;
    flowGraphCoordinator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCoordinator>,
            {
                config: ConstructorParameters<typeof FlowGraphCoordinator>[0];
            },
            FlowGraphCoordinator
        >,
        any
    >;
    flowGraphDataConnection: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDataConnection>,
            {
                name: ConstructorParameters<typeof FlowGraphDataConnection>[0];
                connectionType: ConstructorParameters<typeof FlowGraphDataConnection>[1];
                ownerBlock: ConstructorParameters<typeof FlowGraphDataConnection>[2];
                richType: ConstructorParameters<typeof FlowGraphDataConnection>[3];
            },
            FlowGraphDataConnection
        >,
        any
    >;
    flowGraphExecutionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphExecutionBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphExecutionBlock>[0];
            },
            FlowGraphExecutionBlock
        >,
        any
    >;
    flowGraphExecutionBlockWithOutSignal: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphExecutionBlockWithOutSignal>,
            {
                config: ConstructorParameters<typeof FlowGraphExecutionBlockWithOutSignal>[0];
            },
            FlowGraphExecutionBlockWithOutSignal
        >,
        any
    >;
    flowGraphInteger: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphInteger>,
            {
                value: ConstructorParameters<typeof FlowGraphInteger>[0];
            },
            FlowGraphInteger
        >,
        any
    >;
    flowGraphPathConverter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPathConverter>,
            {
                _context: ConstructorParameters<typeof FlowGraphPathConverter>[0];
                _separator: ConstructorParameters<typeof FlowGraphPathConverter>[1];
            },
            FlowGraphPathConverter
        >,
        any
    >;
    flowGraphPathConverterComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPathConverterComponent>,
            {
                path: ConstructorParameters<typeof FlowGraphPathConverterComponent>[0];
                ownerBlock: ConstructorParameters<typeof FlowGraphPathConverterComponent>[1];
            },
            FlowGraphPathConverterComponent
        >,
        any
    >;
    richType: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RichType>,
            {
                typeName: ConstructorParameters<typeof RichType>[0];
                defaultValue: ConstructorParameters<typeof RichType>[1];
            },
            RichType
        >,
        any
    >;
    getRichTypeFromValue: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getRichTypeFromValue>> & MeshProps,
            {
                value: Parameters<typeof getRichTypeFromValue>[0];
            },
            ReturnType<typeof getRichTypeFromValue>
        >,
        any
    >;
    defaultValueParseFunction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof defaultValueParseFunction>> & MeshProps,
            {
                key: Parameters<typeof defaultValueParseFunction>[0];
                serializationObject: Parameters<typeof defaultValueParseFunction>[1];
                scene: Parameters<typeof defaultValueParseFunction>[2];
            },
            ReturnType<typeof defaultValueParseFunction>
        >,
        any
    >;
    defaultValueSerializationFunction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof defaultValueSerializationFunction>> & MeshProps,
            {
                key: Parameters<typeof defaultValueSerializationFunction>[0];
                value: Parameters<typeof defaultValueSerializationFunction>[1];
                serializationObject: Parameters<typeof defaultValueSerializationFunction>[2];
            },
            ReturnType<typeof defaultValueSerializationFunction>
        >,
        any
    >;
    needsPathConverter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof needsPathConverter>> & MeshProps,
            {
                className: Parameters<typeof needsPathConverter>[0];
            },
            ReturnType<typeof needsPathConverter>
        >,
        any
    >;
    _isADescendantOf: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _isADescendantOf>> & MeshProps,
            {
                mesh1: Parameters<typeof _isADescendantOf>[0];
                mesh2: Parameters<typeof _isADescendantOf>[1];
            },
            ReturnType<typeof _isADescendantOf>
        >,
        any
    >;
    nodeRenderGraphBlackAndWhitePostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBlackAndWhitePostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[2];
            },
            NodeRenderGraphBlackAndWhitePostProcessBlock
        >,
        any
    >;
    nodeRenderGraphBloomPostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBloomPostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[2];
                hdr: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[3];
                bloomScale: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[4];
            },
            NodeRenderGraphBloomPostProcessBlock
        >,
        any
    >;
    nodeRenderGraphBlurPostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBlurPostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[2];
            },
            NodeRenderGraphBlurPostProcessBlock
        >,
        any
    >;
    nodeRenderGraphCircleOfConfusionPostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphCircleOfConfusionPostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[2];
            },
            NodeRenderGraphCircleOfConfusionPostProcessBlock
        >,
        any
    >;
    nodeRenderGraphDepthOfFieldPostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphDepthOfFieldPostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[2];
                blurLevel: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[3];
                hdr: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[4];
            },
            NodeRenderGraphDepthOfFieldPostProcessBlock
        >,
        any
    >;
    nodeRenderGraphExtractHighlightsPostProcessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphExtractHighlightsPostProcessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[2];
            },
            NodeRenderGraphExtractHighlightsPostProcessBlock
        >,
        any
    >;
    nodeRenderGraphBaseObjectRendererBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBaseObjectRendererBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBaseObjectRendererBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBaseObjectRendererBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBaseObjectRendererBlock>[2];
            },
            NodeRenderGraphBaseObjectRendererBlock
        >,
        any
    >;
    nodeRenderGraphBaseShadowGeneratorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBaseShadowGeneratorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBaseShadowGeneratorBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBaseShadowGeneratorBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBaseShadowGeneratorBlock>[2];
            },
            NodeRenderGraphBaseShadowGeneratorBlock
        >,
        any
    >;
    nodeRenderGraphCascadedShadowGeneratorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphCascadedShadowGeneratorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[2];
            },
            NodeRenderGraphCascadedShadowGeneratorBlock
        >,
        any
    >;
    nodeRenderGraphCullObjectsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphCullObjectsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[2];
            },
            NodeRenderGraphCullObjectsBlock
        >,
        any
    >;
    nodeRenderGraphGeometryRendererBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphGeometryRendererBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[2];
                doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[3];
            },
            NodeRenderGraphGeometryRendererBlock
        >,
        any
    >;
    nodeRenderGraphObjectRendererBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphObjectRendererBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[2];
                doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[3];
            },
            NodeRenderGraphObjectRendererBlock
        >,
        any
    >;
    nodeRenderGraphShadowGeneratorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphShadowGeneratorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[2];
            },
            NodeRenderGraphShadowGeneratorBlock
        >,
        any
    >;
    nodeRenderGraphTAAObjectRendererBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphTAAObjectRendererBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[2];
                doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[3];
            },
            NodeRenderGraphTAAObjectRendererBlock
        >,
        any
    >;
    nodeRenderGraphTeleportInBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphTeleportInBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[2];
            },
            NodeRenderGraphTeleportInBlock
        >,
        any
    >;
    nodeRenderGraphTeleportOutBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphTeleportOutBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[2];
            },
            NodeRenderGraphTeleportOutBlock
        >,
        any
    >;
    nodeRenderGraphClearBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphClearBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphClearBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphClearBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphClearBlock>[2];
            },
            NodeRenderGraphClearBlock
        >,
        any
    >;
    nodeRenderGraphCopyTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphCopyTextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[2];
            },
            NodeRenderGraphCopyTextureBlock
        >,
        any
    >;
    nodeRenderGraphGenerateMipmapsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphGenerateMipmapsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[2];
            },
            NodeRenderGraphGenerateMipmapsBlock
        >,
        any
    >;
    nodeRenderGraphElbowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphElbowBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[2];
            },
            NodeRenderGraphElbowBlock
        >,
        any
    >;
    nodeRenderGraphExecuteBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphExecuteBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[2];
            },
            NodeRenderGraphExecuteBlock
        >,
        any
    >;
    nodeRenderGraphInputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphInputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphInputBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphInputBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphInputBlock>[2];
                type: ConstructorParameters<typeof NodeRenderGraphInputBlock>[3];
            },
            NodeRenderGraphInputBlock
        >,
        any
    >;
    nodeRenderGraphOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphOutputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[2];
            },
            NodeRenderGraphOutputBlock
        >,
        any
    >;
    nodeRenderGraphResourceContainerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphResourceContainerBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[2];
            },
            NodeRenderGraphResourceContainerBlock
        >,
        any
    >;
    nodeRenderGraph: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraph> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraph>[0];
                scene: ConstructorParameters<typeof NodeRenderGraph>[1];
                options: ConstructorParameters<typeof NodeRenderGraph>[2];
            },
            NodeRenderGraph
        >,
        any
    >;
    nodeRenderGraphBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphBlock>[2];
                _additionalConstructionParameters: ConstructorParameters<typeof NodeRenderGraphBlock>[3];
            },
            NodeRenderGraphBlock
        >,
        any
    >;
    nodeRenderGraphConnectionPoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphConnectionPoint>,
            {
                name: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[0];
                ownerBlock: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[1];
                direction: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[2];
            },
            NodeRenderGraphConnectionPoint
        >,
        any
    >;
    nodeRenderGraphBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBuildState>, {}, NodeRenderGraphBuildState>, any>;
    frameGraphCullPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphCullPass>,
            {
                name: ConstructorParameters<typeof FrameGraphCullPass>[0];
                parentTask: ConstructorParameters<typeof FrameGraphCullPass>[1];
                context: ConstructorParameters<typeof FrameGraphCullPass>[2];
                engine: ConstructorParameters<typeof FrameGraphCullPass>[3];
            },
            FrameGraphCullPass
        >,
        any
    >;
    frameGraphPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphPass>,
            {
                name: ConstructorParameters<typeof FrameGraphPass>[0];
                _parentTask: ConstructorParameters<typeof FrameGraphPass>[1];
                _context: ConstructorParameters<typeof FrameGraphPass>[2];
            },
            FrameGraphPass
        >,
        any
    >;
    frameGraphRenderPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphRenderPass>,
            {
                name: ConstructorParameters<typeof FrameGraphRenderPass>[0];
                parentTask: ConstructorParameters<typeof FrameGraphRenderPass>[1];
                context: ConstructorParameters<typeof FrameGraphRenderPass>[2];
                engine: ConstructorParameters<typeof FrameGraphRenderPass>[3];
            },
            FrameGraphRenderPass
        >,
        any
    >;
    frameGraphExecuteTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphExecuteTask>,
            {
                name: ConstructorParameters<typeof FrameGraphExecuteTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphExecuteTask>[1];
            },
            FrameGraphExecuteTask
        >,
        any
    >;
    frameGraphBlackAndWhiteTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphBlackAndWhiteTask>,
            {
                name: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[2];
            },
            FrameGraphBlackAndWhiteTask
        >,
        any
    >;
    frameGraphBloomMergeTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphBloomMergeTask>,
            {
                name: ConstructorParameters<typeof FrameGraphBloomMergeTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphBloomMergeTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphBloomMergeTask>[2];
            },
            FrameGraphBloomMergeTask
        >,
        any
    >;
    frameGraphBloomTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphBloomTask>,
            {
                name: ConstructorParameters<typeof FrameGraphBloomTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphBloomTask>[1];
                engine: ConstructorParameters<typeof FrameGraphBloomTask>[2];
                weight: ConstructorParameters<typeof FrameGraphBloomTask>[3];
                kernel: ConstructorParameters<typeof FrameGraphBloomTask>[4];
                threshold: ConstructorParameters<typeof FrameGraphBloomTask>[5];
                hdr: ConstructorParameters<typeof FrameGraphBloomTask>[6];
                bloomScale: ConstructorParameters<typeof FrameGraphBloomTask>[7];
            },
            FrameGraphBloomTask
        >,
        any
    >;
    frameGraphBlurTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphBlurTask>,
            {
                name: ConstructorParameters<typeof FrameGraphBlurTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphBlurTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphBlurTask>[2];
            },
            FrameGraphBlurTask
        >,
        any
    >;
    frameGraphCircleOfConfusionTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphCircleOfConfusionTask>,
            {
                name: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[2];
            },
            FrameGraphCircleOfConfusionTask
        >,
        any
    >;
    frameGraphDepthOfFieldBlurTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphDepthOfFieldBlurTask>,
            {
                name: ConstructorParameters<typeof FrameGraphDepthOfFieldBlurTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphDepthOfFieldBlurTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphDepthOfFieldBlurTask>[2];
            },
            FrameGraphDepthOfFieldBlurTask
        >,
        any
    >;
    frameGraphDepthOfFieldMergeTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphDepthOfFieldMergeTask>,
            {
                name: ConstructorParameters<typeof FrameGraphDepthOfFieldMergeTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphDepthOfFieldMergeTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphDepthOfFieldMergeTask>[2];
            },
            FrameGraphDepthOfFieldMergeTask
        >,
        any
    >;
    frameGraphDepthOfFieldTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphDepthOfFieldTask>,
            {
                name: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[1];
                engine: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[2];
                blurLevel: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[3];
                hdr: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[4];
            },
            FrameGraphDepthOfFieldTask
        >,
        any
    >;
    frameGraphExtractHighlightsTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphExtractHighlightsTask>,
            {
                name: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[1];
                thinPostProcess: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[2];
            },
            FrameGraphExtractHighlightsTask
        >,
        any
    >;
    frameGraphPostProcessTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphPostProcessTask>,
            {
                name: ConstructorParameters<typeof FrameGraphPostProcessTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphPostProcessTask>[1];
                postProcess: ConstructorParameters<typeof FrameGraphPostProcessTask>[2];
            },
            FrameGraphPostProcessTask
        >,
        any
    >;
    frameGraphCascadedShadowGeneratorTask: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCascadedShadowGeneratorTask>, {}, FrameGraphCascadedShadowGeneratorTask>,
        any
    >;
    frameGraphCullObjectsTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphCullObjectsTask>,
            {
                name: ConstructorParameters<typeof FrameGraphCullObjectsTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphCullObjectsTask>[1];
                scene: ConstructorParameters<typeof FrameGraphCullObjectsTask>[2];
            },
            FrameGraphCullObjectsTask
        >,
        any
    >;
    frameGraphGeometryRendererTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphGeometryRendererTask>,
            {
                name: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[1];
                scene: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[2];
                options: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[3];
            },
            FrameGraphGeometryRendererTask
        >,
        any
    >;
    frameGraphObjectRendererTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphObjectRendererTask>,
            {
                name: ConstructorParameters<typeof FrameGraphObjectRendererTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphObjectRendererTask>[1];
                scene: ConstructorParameters<typeof FrameGraphObjectRendererTask>[2];
                options: ConstructorParameters<typeof FrameGraphObjectRendererTask>[3];
            },
            FrameGraphObjectRendererTask
        >,
        any
    >;
    frameGraphShadowGeneratorTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphShadowGeneratorTask>,
            {
                name: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[1];
                scene: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[2];
            },
            FrameGraphShadowGeneratorTask
        >,
        any
    >;
    frameGraphTAAObjectRendererTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphTAAObjectRendererTask>,
            {
                name: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[1];
                scene: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[2];
                options: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[3];
            },
            FrameGraphTAAObjectRendererTask
        >,
        any
    >;
    frameGraphClearTextureTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphClearTextureTask>,
            {
                name: ConstructorParameters<typeof FrameGraphClearTextureTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphClearTextureTask>[1];
            },
            FrameGraphClearTextureTask
        >,
        any
    >;
    frameGraphCopyToTextureTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphCopyToTextureTask>,
            {
                name: ConstructorParameters<typeof FrameGraphCopyToTextureTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphCopyToTextureTask>[1];
            },
            FrameGraphCopyToTextureTask
        >,
        any
    >;
    frameGraphGenerateMipMapsTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphGenerateMipMapsTask>,
            {
                name: ConstructorParameters<typeof FrameGraphGenerateMipMapsTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphGenerateMipMapsTask>[1];
            },
            FrameGraphGenerateMipMapsTask
        >,
        any
    >;
    frameGraph: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraph>,
            {
                engine: ConstructorParameters<typeof FrameGraph>[0];
                debugTextures: ConstructorParameters<typeof FrameGraph>[1];
                scene: ConstructorParameters<typeof FrameGraph>[2];
            },
            FrameGraph
        >,
        any
    >;
    frameGraphRenderContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphRenderContext>,
            {
                _engine: ConstructorParameters<typeof FrameGraphRenderContext>[0];
                _textureManager: ConstructorParameters<typeof FrameGraphRenderContext>[1];
                _scene: ConstructorParameters<typeof FrameGraphRenderContext>[2];
            },
            FrameGraphRenderContext
        >,
        any
    >;
    frameGraphRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphRenderTarget>,
            {
                name: ConstructorParameters<typeof FrameGraphRenderTarget>[0];
                textureManager: ConstructorParameters<typeof FrameGraphRenderTarget>[1];
                renderTargets: ConstructorParameters<typeof FrameGraphRenderTarget>[2];
                renderTargetDepth: ConstructorParameters<typeof FrameGraphRenderTarget>[3];
            },
            FrameGraphRenderTarget
        >,
        any
    >;
    frameGraphTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphTask>,
            {
                name: ConstructorParameters<typeof FrameGraphTask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphTask>[1];
            },
            FrameGraphTask
        >,
        any
    >;
    frameGraphTextureManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphTextureManager>,
            {
                engine: ConstructorParameters<typeof FrameGraphTextureManager>[0];
                _debugTextures: ConstructorParameters<typeof FrameGraphTextureManager>[1];
                _scene: ConstructorParameters<typeof FrameGraphTextureManager>[2];
            },
            FrameGraphTextureManager
        >,
        any
    >;
    dualShockPad: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DualShockPad>,
            {
                id: ConstructorParameters<typeof DualShockPad>[0];
                index: ConstructorParameters<typeof DualShockPad>[1];
                gamepad: ConstructorParameters<typeof DualShockPad>[2];
            },
            DualShockPad
        >,
        any
    >;
    gamepad: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Gamepad>,
            {
                id: ConstructorParameters<typeof Gamepad>[0];
                index: ConstructorParameters<typeof Gamepad>[1];
                browserGamepad: ConstructorParameters<typeof Gamepad>[2];
                leftStickX: ConstructorParameters<typeof Gamepad>[3];
                leftStickY: ConstructorParameters<typeof Gamepad>[4];
                rightStickX: ConstructorParameters<typeof Gamepad>[5];
                rightStickY: ConstructorParameters<typeof Gamepad>[6];
            },
            Gamepad
        >,
        any
    >;
    genericPad: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GenericPad>,
            {
                id: ConstructorParameters<typeof GenericPad>[0];
                index: ConstructorParameters<typeof GenericPad>[1];
                browserGamepad: ConstructorParameters<typeof GenericPad>[2];
            },
            GenericPad
        >,
        any
    >;
    stickValues: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StickValues>,
            {
                x: ConstructorParameters<typeof StickValues>[0];
                y: ConstructorParameters<typeof StickValues>[1];
            },
            StickValues
        >,
        any
    >;
    gamepadManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GamepadManager>,
            {
                _scene: ConstructorParameters<typeof GamepadManager>[0];
            },
            GamepadManager
        >,
        any
    >;
    gamepadSystemSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GamepadSystemSceneComponent>,
            {
                scene: ConstructorParameters<typeof GamepadSystemSceneComponent>[0];
            },
            GamepadSystemSceneComponent
        >,
        any
    >;
    xbox360Pad: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Xbox360Pad>,
            {
                id: ConstructorParameters<typeof Xbox360Pad>[0];
                index: ConstructorParameters<typeof Xbox360Pad>[1];
                gamepad: ConstructorParameters<typeof Xbox360Pad>[2];
                xboxOne: ConstructorParameters<typeof Xbox360Pad>[3];
            },
            Xbox360Pad
        >,
        any
    >;
    axisDragGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AxisDragGizmo>,
            {
                dragAxis: ConstructorParameters<typeof AxisDragGizmo>[0];
                color: ConstructorParameters<typeof AxisDragGizmo>[1];
                gizmoLayer: ConstructorParameters<typeof AxisDragGizmo>[2];
                parent: ConstructorParameters<typeof AxisDragGizmo>[3];
                thickness: ConstructorParameters<typeof AxisDragGizmo>[4];
                hoverColor: ConstructorParameters<typeof AxisDragGizmo>[5];
                disableColor: ConstructorParameters<typeof AxisDragGizmo>[6];
            },
            AxisDragGizmo
        >,
        any
    >;
    axisScaleGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AxisScaleGizmo>,
            {
                dragAxis: ConstructorParameters<typeof AxisScaleGizmo>[0];
                color: ConstructorParameters<typeof AxisScaleGizmo>[1];
                gizmoLayer: ConstructorParameters<typeof AxisScaleGizmo>[2];
                parent: ConstructorParameters<typeof AxisScaleGizmo>[3];
                thickness: ConstructorParameters<typeof AxisScaleGizmo>[4];
                hoverColor: ConstructorParameters<typeof AxisScaleGizmo>[5];
                disableColor: ConstructorParameters<typeof AxisScaleGizmo>[6];
            },
            AxisScaleGizmo
        >,
        any
    >;
    boundingBoxGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBoxGizmo>,
            {
                color: ConstructorParameters<typeof BoundingBoxGizmo>[0];
                gizmoLayer: ConstructorParameters<typeof BoundingBoxGizmo>[1];
            },
            BoundingBoxGizmo
        >,
        any
    >;
    cameraGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CameraGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof CameraGizmo>[0];
                gizmoColor: ConstructorParameters<typeof CameraGizmo>[1];
                frustumLinesColor: ConstructorParameters<typeof CameraGizmo>[2];
            },
            CameraGizmo
        >,
        any
    >;
    gizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Gizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof Gizmo>[0];
            },
            Gizmo
        >,
        any
    >;
    gizmoManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GizmoManager>,
            {
                _scene: ConstructorParameters<typeof GizmoManager>[0];
                thickness: ConstructorParameters<typeof GizmoManager>[1];
                utilityLayer: ConstructorParameters<typeof GizmoManager>[2];
                keepDepthUtilityLayer: ConstructorParameters<typeof GizmoManager>[3];
            },
            GizmoManager
        >,
        any
    >;
    lightGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof LightGizmo>[0];
            },
            LightGizmo
        >,
        any
    >;
    planeDragGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlaneDragGizmo>,
            {
                dragPlaneNormal: ConstructorParameters<typeof PlaneDragGizmo>[0];
                color: ConstructorParameters<typeof PlaneDragGizmo>[1];
                gizmoLayer: ConstructorParameters<typeof PlaneDragGizmo>[2];
                parent: ConstructorParameters<typeof PlaneDragGizmo>[3];
                hoverColor: ConstructorParameters<typeof PlaneDragGizmo>[4];
                disableColor: ConstructorParameters<typeof PlaneDragGizmo>[5];
            },
            PlaneDragGizmo
        >,
        any
    >;
    planeRotationGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlaneRotationGizmo>,
            {
                planeNormal: ConstructorParameters<typeof PlaneRotationGizmo>[0];
                color: ConstructorParameters<typeof PlaneRotationGizmo>[1];
                gizmoLayer: ConstructorParameters<typeof PlaneRotationGizmo>[2];
                tessellation: ConstructorParameters<typeof PlaneRotationGizmo>[3];
                parent: ConstructorParameters<typeof PlaneRotationGizmo>[4];
                useEulerRotation: ConstructorParameters<typeof PlaneRotationGizmo>[5];
                thickness: ConstructorParameters<typeof PlaneRotationGizmo>[6];
                hoverColor: ConstructorParameters<typeof PlaneRotationGizmo>[7];
                disableColor: ConstructorParameters<typeof PlaneRotationGizmo>[8];
            },
            PlaneRotationGizmo
        >,
        any
    >;
    positionGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PositionGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof PositionGizmo>[0];
                thickness: ConstructorParameters<typeof PositionGizmo>[1];
                gizmoManager: ConstructorParameters<typeof PositionGizmo>[2];
                options: ConstructorParameters<typeof PositionGizmo>[3];
            },
            PositionGizmo
        >,
        any
    >;
    rotationGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof RotationGizmo>[0];
                tessellation: ConstructorParameters<typeof RotationGizmo>[1];
                useEulerRotation: ConstructorParameters<typeof RotationGizmo>[2];
                thickness: ConstructorParameters<typeof RotationGizmo>[3];
                gizmoManager: ConstructorParameters<typeof RotationGizmo>[4];
                options: ConstructorParameters<typeof RotationGizmo>[5];
            },
            RotationGizmo
        >,
        any
    >;
    scaleGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScaleGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof ScaleGizmo>[0];
                thickness: ConstructorParameters<typeof ScaleGizmo>[1];
                gizmoManager: ConstructorParameters<typeof ScaleGizmo>[2];
                options: ConstructorParameters<typeof ScaleGizmo>[3];
            },
            ScaleGizmo
        >,
        any
    >;
    environmentHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EnvironmentHelper>,
            {
                options: ConstructorParameters<typeof EnvironmentHelper>[0];
                scene: ConstructorParameters<typeof EnvironmentHelper>[1];
            },
            EnvironmentHelper
        >,
        any
    >;
    textureDome: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureDome> & Clonable,
            {
                name: ConstructorParameters<typeof TextureDome>[0];
                textureUrlOrElement: ConstructorParameters<typeof TextureDome>[1];
                options: ConstructorParameters<typeof TextureDome>[2];
                scene: ConstructorParameters<typeof TextureDome>[3];
                onError: ConstructorParameters<typeof TextureDome>[4];
            },
            TextureDome
        >,
        any
    >;
    pointerPickingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerPickingConfiguration>, {}, PointerPickingConfiguration>, any>;
    engineInstrumentation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EngineInstrumentation>,
            {
                engine: ConstructorParameters<typeof EngineInstrumentation>[0];
            },
            EngineInstrumentation
        >,
        any
    >;
    sceneInstrumentation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneInstrumentation>,
            {
                scene: ConstructorParameters<typeof SceneInstrumentation>[0];
            },
            SceneInstrumentation
        >,
        any
    >;
    _TimeToken: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TimeToken>, {}, _TimeToken>, any>;
    effectLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectLayer>,
            {
                name: ConstructorParameters<typeof EffectLayer>[0];
                scene: ConstructorParameters<typeof EffectLayer>[1];
                forceGLSL: ConstructorParameters<typeof EffectLayer>[2];
            },
            EffectLayer
        >,
        any
    >;
    effectLayerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectLayerSceneComponent>,
            {
                scene: ConstructorParameters<typeof EffectLayerSceneComponent>[0];
            },
            EffectLayerSceneComponent
        >,
        any
    >;
    glowLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GlowLayer>,
            {
                name: ConstructorParameters<typeof GlowLayer>[0];
                scene: ConstructorParameters<typeof GlowLayer>[1];
                options: ConstructorParameters<typeof GlowLayer>[2];
            },
            GlowLayer
        >,
        any
    >;
    highlightLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HighlightLayer>,
            {
                name: ConstructorParameters<typeof HighlightLayer>[0];
                scene: ConstructorParameters<typeof HighlightLayer>[1];
                options: ConstructorParameters<typeof HighlightLayer>[2];
            },
            HighlightLayer
        >,
        any
    >;
    layer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Layer>,
            {
                name: ConstructorParameters<typeof Layer>[0];
                imgUrl: ConstructorParameters<typeof Layer>[1];
                scene: ConstructorParameters<typeof Layer>[2];
                isBackground: ConstructorParameters<typeof Layer>[3];
                color: ConstructorParameters<typeof Layer>[4];
                forceGLSL: ConstructorParameters<typeof Layer>[5];
            },
            Layer
        >,
        any
    >;
    layerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LayerSceneComponent>,
            {
                scene: ConstructorParameters<typeof LayerSceneComponent>[0];
            },
            LayerSceneComponent
        >,
        any
    >;
    lensFlare: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LensFlare>,
            {
                size: ConstructorParameters<typeof LensFlare>[0];
                position: ConstructorParameters<typeof LensFlare>[1];
                color: ConstructorParameters<typeof LensFlare>[2];
                imgUrl: ConstructorParameters<typeof LensFlare>[3];
                system: ConstructorParameters<typeof LensFlare>[4];
            },
            LensFlare
        >,
        any
    >;
    lensFlareSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LensFlareSystem>,
            {
                name: ConstructorParameters<typeof LensFlareSystem>[0];
                emitter: ConstructorParameters<typeof LensFlareSystem>[1];
                scene: ConstructorParameters<typeof LensFlareSystem>[2];
            },
            LensFlareSystem
        >,
        any
    >;
    lensFlareSystemSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LensFlareSystemSceneComponent>,
            {
                scene: ConstructorParameters<typeof LensFlareSystemSceneComponent>[0];
            },
            LensFlareSystemSceneComponent
        >,
        any
    >;
    loadIESData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof LoadIESData>> & MeshProps,
            {
                uint8Array: Parameters<typeof LoadIESData>[0];
            },
            ReturnType<typeof LoadIESData>
        >,
        any
    >;
    cascadedShadowGenerator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CascadedShadowGenerator>,
            {
                mapSize: ConstructorParameters<typeof CascadedShadowGenerator>[0];
                light: ConstructorParameters<typeof CascadedShadowGenerator>[1];
                usefulFloatFirst: ConstructorParameters<typeof CascadedShadowGenerator>[2];
                camera: ConstructorParameters<typeof CascadedShadowGenerator>[3];
                useRedTextureType: ConstructorParameters<typeof CascadedShadowGenerator>[4];
            },
            CascadedShadowGenerator
        >,
        any
    >;
    shadowGenerator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowGenerator>,
            {
                mapSize: ConstructorParameters<typeof ShadowGenerator>[0];
                light: ConstructorParameters<typeof ShadowGenerator>[1];
                usefullFloatFirst: ConstructorParameters<typeof ShadowGenerator>[2];
                camera: ConstructorParameters<typeof ShadowGenerator>[3];
                useRedTextureType: ConstructorParameters<typeof ShadowGenerator>[4];
                forceGLSL: ConstructorParameters<typeof ShadowGenerator>[5];
            },
            ShadowGenerator
        >,
        any
    >;
    shadowGeneratorSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowGeneratorSceneComponent>,
            {
                scene: ConstructorParameters<typeof ShadowGeneratorSceneComponent>[0];
            },
            ShadowGeneratorSceneComponent
        >,
        any
    >;
    directionalLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DirectionalLight> & Clonable,
            {
                name: ConstructorParameters<typeof DirectionalLight>[0];
                direction: ConstructorParameters<typeof DirectionalLight>[1];
                scene: ConstructorParameters<typeof DirectionalLight>[2];
            },
            DirectionalLight
        >,
        any
    >;
    hemisphericLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HemisphericLight> & Clonable,
            {
                name: ConstructorParameters<typeof HemisphericLight>[0];
                direction: ConstructorParameters<typeof HemisphericLight>[1];
                scene: ConstructorParameters<typeof HemisphericLight>[2];
            },
            HemisphericLight
        >,
        any
    >;
    light: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Light> & Clonable,
            {
                name: ConstructorParameters<typeof Light>[0];
                scene: ConstructorParameters<typeof Light>[1];
            },
            Light
        >,
        any
    >;
    pointLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointLight> & Clonable,
            {
                name: ConstructorParameters<typeof PointLight>[0];
                position: ConstructorParameters<typeof PointLight>[1];
                scene: ConstructorParameters<typeof PointLight>[2];
            },
            PointLight
        >,
        any
    >;
    shadowLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowLight> & Clonable, {}, ShadowLight>, any>;
    spotLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpotLight> & Clonable,
            {
                name: ConstructorParameters<typeof SpotLight>[0];
                position: ConstructorParameters<typeof SpotLight>[1];
                direction: ConstructorParameters<typeof SpotLight>[2];
                angle: ConstructorParameters<typeof SpotLight>[3];
                exponent: ConstructorParameters<typeof SpotLight>[4];
                scene: ConstructorParameters<typeof SpotLight>[5];
            },
            SpotLight
        >,
        any
    >;
    defaultLoadingScreen: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DefaultLoadingScreen>,
            {
                _renderingCanvas: ConstructorParameters<typeof DefaultLoadingScreen>[0];
                _loadingText: ConstructorParameters<typeof DefaultLoadingScreen>[1];
                _loadingDivBackgroundColor: ConstructorParameters<typeof DefaultLoadingScreen>[2];
            },
            DefaultLoadingScreen
        >,
        any
    >;
    appendSceneAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof appendSceneAsync>> & MeshProps,
            {
                source: Parameters<typeof appendSceneAsync>[0];
                scene: Parameters<typeof appendSceneAsync>[1];
                options: Parameters<typeof appendSceneAsync>[2];
            },
            ReturnType<typeof appendSceneAsync>
        >,
        any
    >;
    importAnimationsAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof importAnimationsAsync>> & MeshProps,
            {
                source: Parameters<typeof importAnimationsAsync>[0];
                scene: Parameters<typeof importAnimationsAsync>[1];
                options: Parameters<typeof importAnimationsAsync>[2];
            },
            ReturnType<typeof importAnimationsAsync>
        >,
        any
    >;
    loadAssetContainerAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof loadAssetContainerAsync>> & MeshProps,
            {
                source: Parameters<typeof loadAssetContainerAsync>[0];
                scene: Parameters<typeof loadAssetContainerAsync>[1];
                options: Parameters<typeof loadAssetContainerAsync>[2];
            },
            ReturnType<typeof loadAssetContainerAsync>
        >,
        any
    >;
    loadSceneAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof loadSceneAsync>> & MeshProps,
            {
                source: Parameters<typeof loadSceneAsync>[0];
                engine: Parameters<typeof loadSceneAsync>[1];
                options: Parameters<typeof loadSceneAsync>[2];
            },
            ReturnType<typeof loadSceneAsync>
        >,
        any
    >;
    registerSceneLoaderPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof registerSceneLoaderPlugin>> & MeshProps,
            {
                plugin: Parameters<typeof registerSceneLoaderPlugin>[0];
            },
            ReturnType<typeof registerSceneLoaderPlugin>
        >,
        any
    >;
    backgroundMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BackgroundMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof BackgroundMaterial>[0];
                scene: ConstructorParameters<typeof BackgroundMaterial>[1];
                forceGLSL: ConstructorParameters<typeof BackgroundMaterial>[2];
            } & MaterialProps,
            BackgroundMaterial
        >,
        any
    >;
    gaussianSplattingMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof GaussianSplattingMaterial>[0];
                scene: ConstructorParameters<typeof GaussianSplattingMaterial>[1];
            } & MaterialProps,
            GaussianSplattingMaterial
        >,
        any
    >;
    greasedLinePluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLinePluginMaterial>,
            {
                material: ConstructorParameters<typeof GreasedLinePluginMaterial>[0];
                scene: ConstructorParameters<typeof GreasedLinePluginMaterial>[1];
                options: ConstructorParameters<typeof GreasedLinePluginMaterial>[2];
            },
            GreasedLinePluginMaterial
        >,
        any
    >;
    materialGreasedLineDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialGreasedLineDefines>, {}, MaterialGreasedLineDefines>, any>;
    getCustomCode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetCustomCode>> & MeshProps,
            {
                shaderType: Parameters<typeof GetCustomCode>[0];
                cameraFacing: Parameters<typeof GetCustomCode>[1];
            },
            ReturnType<typeof GetCustomCode>
        >,
        any
    >;
    greasedLineSimpleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineSimpleMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof GreasedLineSimpleMaterial>[0];
                scene: ConstructorParameters<typeof GreasedLineSimpleMaterial>[1];
                options: ConstructorParameters<typeof GreasedLineSimpleMaterial>[2];
            } & MaterialProps,
            GreasedLineSimpleMaterial
        >,
        any
    >;
    clipPlanesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClipPlanesBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ClipPlanesBlock>[0];
            },
            ClipPlanesBlock
        >,
        any
    >;
    currentScreenBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CurrentScreenBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CurrentScreenBlock>[0];
            },
            CurrentScreenBlock
        >,
        any
    >;
    fogBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FogBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FogBlock>[0];
            },
            FogBlock
        >,
        any
    >;
    imageSourceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageSourceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ImageSourceBlock>[0];
            },
            ImageSourceBlock
        >,
        any
    >;
    lightBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LightBlock>[0];
            },
            LightBlock
        >,
        any
    >;
    reflectionTextureBaseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionTextureBaseBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReflectionTextureBaseBlock>[0];
            },
            ReflectionTextureBaseBlock
        >,
        any
    >;
    reflectionTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionTextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReflectionTextureBlock>[0];
            },
            ReflectionTextureBlock
        >,
        any
    >;
    sceneDepthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneDepthBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SceneDepthBlock>[0];
            },
            SceneDepthBlock
        >,
        any
    >;
    textureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TextureBlock>[0];
                fragmentOnly: ConstructorParameters<typeof TextureBlock>[1];
            },
            TextureBlock
        >,
        any
    >;
    tBNBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TBNBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TBNBlock>[0];
            },
            TBNBlock
        >,
        any
    >;
    derivativeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DerivativeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DerivativeBlock>[0];
            },
            DerivativeBlock
        >,
        any
    >;
    discardBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DiscardBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DiscardBlock>[0];
            },
            DiscardBlock
        >,
        any
    >;
    fragCoordBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragCoordBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FragCoordBlock>[0];
            },
            FragCoordBlock
        >,
        any
    >;
    fragDepthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragDepthBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FragDepthBlock>[0];
            },
            FragDepthBlock
        >,
        any
    >;
    fragmentOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragmentOutputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FragmentOutputBlock>[0];
            },
            FragmentOutputBlock
        >,
        any
    >;
    frontFacingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrontFacingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FrontFacingBlock>[0];
            },
            FrontFacingBlock
        >,
        any
    >;
    heightToNormalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HeightToNormalBlock> & Clonable,
            {
                name: ConstructorParameters<typeof HeightToNormalBlock>[0];
            },
            HeightToNormalBlock
        >,
        any
    >;
    imageProcessingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageProcessingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ImageProcessingBlock>[0];
            },
            ImageProcessingBlock
        >,
        any
    >;
    perturbNormalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerturbNormalBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PerturbNormalBlock>[0];
            },
            PerturbNormalBlock
        >,
        any
    >;
    prePassOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassOutputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PrePassOutputBlock>[0];
            },
            PrePassOutputBlock
        >,
        any
    >;
    screenSizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSizeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ScreenSizeBlock>[0];
            },
            ScreenSizeBlock
        >,
        any
    >;
    screenSpaceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ScreenSpaceBlock>[0];
            },
            ScreenSpaceBlock
        >,
        any
    >;
    shadowMapBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowMapBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ShadowMapBlock>[0];
            },
            ShadowMapBlock
        >,
        any
    >;
    twirlBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TwirlBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TwirlBlock>[0];
            },
            TwirlBlock
        >,
        any
    >;
    gaussianBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GaussianBlock>[0];
            },
            GaussianBlock
        >,
        any
    >;
    gaussianSplattingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GaussianSplattingBlock>[0];
            },
            GaussianSplattingBlock
        >,
        any
    >;
    splatReaderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SplatReaderBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SplatReaderBlock>[0];
            },
            SplatReaderBlock
        >,
        any
    >;
    inputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InputBlock>[0];
                target: ConstructorParameters<typeof InputBlock>[1];
                type: ConstructorParameters<typeof InputBlock>[2];
            },
            InputBlock
        >,
        any
    >;
    prePassTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassTextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PrePassTextureBlock>[0];
                target: ConstructorParameters<typeof PrePassTextureBlock>[1];
            },
            PrePassTextureBlock
        >,
        any
    >;
    anisotropyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnisotropyBlock> & Clonable,
            {
                name: ConstructorParameters<typeof AnisotropyBlock>[0];
            },
            AnisotropyBlock
        >,
        any
    >;
    clearCoatBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClearCoatBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ClearCoatBlock>[0];
            },
            ClearCoatBlock
        >,
        any
    >;
    iridescenceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IridescenceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof IridescenceBlock>[0];
            },
            IridescenceBlock
        >,
        any
    >;
    pBRMetallicRoughnessBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRMetallicRoughnessBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PBRMetallicRoughnessBlock>[0];
            },
            PBRMetallicRoughnessBlock
        >,
        any
    >;
    reflectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReflectionBlock>[0];
            },
            ReflectionBlock
        >,
        any
    >;
    refractionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RefractionBlock>[0];
            },
            RefractionBlock
        >,
        any
    >;
    sheenBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SheenBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SheenBlock>[0];
            },
            SheenBlock
        >,
        any
    >;
    subSurfaceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SubSurfaceBlock>[0];
            },
            SubSurfaceBlock
        >,
        any
    >;
    particleBlendMultiplyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleBlendMultiplyBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ParticleBlendMultiplyBlock>[0];
            },
            ParticleBlendMultiplyBlock
        >,
        any
    >;
    particleRampGradientBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleRampGradientBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ParticleRampGradientBlock>[0];
            },
            ParticleRampGradientBlock
        >,
        any
    >;
    particleTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleTextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ParticleTextureBlock>[0];
            },
            ParticleTextureBlock
        >,
        any
    >;
    nodeMaterialTeleportInBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialTeleportInBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeMaterialTeleportInBlock>[0];
            },
            NodeMaterialTeleportInBlock
        >,
        any
    >;
    nodeMaterialTeleportOutBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialTeleportOutBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeMaterialTeleportOutBlock>[0];
            },
            NodeMaterialTeleportOutBlock
        >,
        any
    >;
    bonesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BonesBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BonesBlock>[0];
            },
            BonesBlock
        >,
        any
    >;
    instancesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstancesBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstancesBlock>[0];
            },
            InstancesBlock
        >,
        any
    >;
    lightInformationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightInformationBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LightInformationBlock>[0];
            },
            LightInformationBlock
        >,
        any
    >;
    morphTargetsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTargetsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MorphTargetsBlock>[0];
            },
            MorphTargetsBlock
        >,
        any
    >;
    vertexOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VertexOutputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof VertexOutputBlock>[0];
            },
            VertexOutputBlock
        >,
        any
    >;
    addBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AddBlock> & Clonable,
            {
                name: ConstructorParameters<typeof AddBlock>[0];
            },
            AddBlock
        >,
        any
    >;
    arcTan2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcTan2Block> & Clonable,
            {
                name: ConstructorParameters<typeof ArcTan2Block>[0];
            },
            ArcTan2Block
        >,
        any
    >;
    baseMathBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseMathBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BaseMathBlock>[0];
            },
            BaseMathBlock
        >,
        any
    >;
    biPlanarBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BiPlanarBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BiPlanarBlock>[0];
            },
            BiPlanarBlock
        >,
        any
    >;
    clampBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClampBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ClampBlock>[0];
            },
            ClampBlock
        >,
        any
    >;
    cloudBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CloudBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CloudBlock>[0];
            },
            CloudBlock
        >,
        any
    >;
    colorConverterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorConverterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ColorConverterBlock>[0];
            },
            ColorConverterBlock
        >,
        any
    >;
    colorMergerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorMergerBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ColorMergerBlock>[0];
            },
            ColorMergerBlock
        >,
        any
    >;
    colorSplitterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorSplitterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ColorSplitterBlock>[0];
            },
            ColorSplitterBlock
        >,
        any
    >;
    conditionalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConditionalBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ConditionalBlock>[0];
            },
            ConditionalBlock
        >,
        any
    >;
    crossBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CrossBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CrossBlock>[0];
            },
            CrossBlock
        >,
        any
    >;
    curveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CurveBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CurveBlock>[0];
            },
            CurveBlock
        >,
        any
    >;
    customBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CustomBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CustomBlock>[0];
            },
            CustomBlock
        >,
        any
    >;
    desaturateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DesaturateBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DesaturateBlock>[0];
            },
            DesaturateBlock
        >,
        any
    >;
    distanceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DistanceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DistanceBlock>[0];
            },
            DistanceBlock
        >,
        any
    >;
    divideBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DivideBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DivideBlock>[0];
            },
            DivideBlock
        >,
        any
    >;
    dotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DotBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DotBlock>[0];
            },
            DotBlock
        >,
        any
    >;
    elbowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ElbowBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ElbowBlock>[0];
            },
            ElbowBlock
        >,
        any
    >;
    fresnelBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FresnelBlock> & Clonable,
            {
                name: ConstructorParameters<typeof FresnelBlock>[0];
            },
            FresnelBlock
        >,
        any
    >;
    gradientBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GradientBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GradientBlock>[0];
            },
            GradientBlock
        >,
        any
    >;
    gradientBlockColorStep: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GradientBlockColorStep>,
            {
                step: ConstructorParameters<typeof GradientBlockColorStep>[0];
                color: ConstructorParameters<typeof GradientBlockColorStep>[1];
            },
            GradientBlockColorStep
        >,
        any
    >;
    lengthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LengthBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LengthBlock>[0];
            },
            LengthBlock
        >,
        any
    >;
    lerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LerpBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LerpBlock>[0];
            },
            LerpBlock
        >,
        any
    >;
    loopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LoopBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LoopBlock>[0];
            },
            LoopBlock
        >,
        any
    >;
    matrixBuilderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixBuilderBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MatrixBuilderBlock>[0];
            },
            MatrixBuilderBlock
        >,
        any
    >;
    matrixDeterminantBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixDeterminantBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MatrixDeterminantBlock>[0];
            },
            MatrixDeterminantBlock
        >,
        any
    >;
    matrixSplitterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixSplitterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MatrixSplitterBlock>[0];
            },
            MatrixSplitterBlock
        >,
        any
    >;
    matrixTransposeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixTransposeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MatrixTransposeBlock>[0];
            },
            MatrixTransposeBlock
        >,
        any
    >;
    maxBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaxBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MaxBlock>[0];
            },
            MaxBlock
        >,
        any
    >;
    meshAttributeExistsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshAttributeExistsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MeshAttributeExistsBlock>[0];
            },
            MeshAttributeExistsBlock
        >,
        any
    >;
    minBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MinBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MinBlock>[0];
            },
            MinBlock
        >,
        any
    >;
    modBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ModBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ModBlock>[0];
            },
            ModBlock
        >,
        any
    >;
    multiplyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiplyBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MultiplyBlock>[0];
            },
            MultiplyBlock
        >,
        any
    >;
    nLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NLerpBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NLerpBlock>[0];
            },
            NLerpBlock
        >,
        any
    >;
    negateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NegateBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NegateBlock>[0];
            },
            NegateBlock
        >,
        any
    >;
    normalBlendBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalBlendBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NormalBlendBlock>[0];
            },
            NormalBlendBlock
        >,
        any
    >;
    normalizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalizeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NormalizeBlock>[0];
            },
            NormalizeBlock
        >,
        any
    >;
    oneMinusBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OneMinusBlock> & Clonable,
            {
                name: ConstructorParameters<typeof OneMinusBlock>[0];
            },
            OneMinusBlock
        >,
        any
    >;
    posterizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PosterizeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PosterizeBlock>[0];
            },
            PosterizeBlock
        >,
        any
    >;
    powBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PowBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PowBlock>[0];
            },
            PowBlock
        >,
        any
    >;
    randomNumberBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RandomNumberBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RandomNumberBlock>[0];
            },
            RandomNumberBlock
        >,
        any
    >;
    reciprocalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReciprocalBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReciprocalBlock>[0];
            },
            ReciprocalBlock
        >,
        any
    >;
    reflectBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReflectBlock>[0];
            },
            ReflectBlock
        >,
        any
    >;
    refractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RefractBlock>[0];
            },
            RefractBlock
        >,
        any
    >;
    remapBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RemapBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RemapBlock>[0];
            },
            RemapBlock
        >,
        any
    >;
    replaceColorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReplaceColorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ReplaceColorBlock>[0];
            },
            ReplaceColorBlock
        >,
        any
    >;
    rotate2dBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Rotate2dBlock> & Clonable,
            {
                name: ConstructorParameters<typeof Rotate2dBlock>[0];
            },
            Rotate2dBlock
        >,
        any
    >;
    scaleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScaleBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ScaleBlock>[0];
            },
            ScaleBlock
        >,
        any
    >;
    simplexPerlin3DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SimplexPerlin3DBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SimplexPerlin3DBlock>[0];
            },
            SimplexPerlin3DBlock
        >,
        any
    >;
    smoothStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SmoothStepBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SmoothStepBlock>[0];
            },
            SmoothStepBlock
        >,
        any
    >;
    stepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StepBlock> & Clonable,
            {
                name: ConstructorParameters<typeof StepBlock>[0];
            },
            StepBlock
        >,
        any
    >;
    storageReadBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StorageReadBlock> & Clonable,
            {
                name: ConstructorParameters<typeof StorageReadBlock>[0];
            },
            StorageReadBlock
        >,
        any
    >;
    storageWriteBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StorageWriteBlock> & Clonable,
            {
                name: ConstructorParameters<typeof StorageWriteBlock>[0];
            },
            StorageWriteBlock
        >,
        any
    >;
    subtractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubtractBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SubtractBlock>[0];
            },
            SubtractBlock
        >,
        any
    >;
    transformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TransformBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TransformBlock>[0];
            },
            TransformBlock
        >,
        any
    >;
    triPlanarBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TriPlanarBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TriPlanarBlock>[0];
                hideSourceZ: ConstructorParameters<typeof TriPlanarBlock>[1];
            },
            TriPlanarBlock
        >,
        any
    >;
    trigonometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TrigonometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TrigonometryBlock>[0];
            },
            TrigonometryBlock
        >,
        any
    >;
    vectorMergerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorMergerBlock> & Clonable,
            {
                name: ConstructorParameters<typeof VectorMergerBlock>[0];
            },
            VectorMergerBlock
        >,
        any
    >;
    vectorSplitterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorSplitterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof VectorSplitterBlock>[0];
            },
            VectorSplitterBlock
        >,
        any
    >;
    viewDirectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ViewDirectionBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ViewDirectionBlock>[0];
            },
            ViewDirectionBlock
        >,
        any
    >;
    voronoiNoiseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VoronoiNoiseBlock> & Clonable,
            {
                name: ConstructorParameters<typeof VoronoiNoiseBlock>[0];
            },
            VoronoiNoiseBlock
        >,
        any
    >;
    waveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WaveBlock> & Clonable,
            {
                name: ConstructorParameters<typeof WaveBlock>[0];
            },
            WaveBlock
        >,
        any
    >;
    worleyNoise3DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WorleyNoise3DBlock> & Clonable,
            {
                name: ConstructorParameters<typeof WorleyNoise3DBlock>[0];
            },
            WorleyNoise3DBlock
        >,
        any
    >;
    nodeMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof NodeMaterial>[0];
                scene: ConstructorParameters<typeof NodeMaterial>[1];
                options: ConstructorParameters<typeof NodeMaterial>[2];
            } & MaterialProps,
            NodeMaterial
        >,
        any
    >;
    nodeMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialDefines>, {}, NodeMaterialDefines>, any>;
    nodeMaterialBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeMaterialBlock>[0];
                target: ConstructorParameters<typeof NodeMaterialBlock>[1];
                isFinalMerger: ConstructorParameters<typeof NodeMaterialBlock>[2];
            },
            NodeMaterialBlock
        >,
        any
    >;
    nodeMaterialConnectionPoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialConnectionPoint>,
            {
                name: ConstructorParameters<typeof NodeMaterialConnectionPoint>[0];
                ownerBlock: ConstructorParameters<typeof NodeMaterialConnectionPoint>[1];
                direction: ConstructorParameters<typeof NodeMaterialConnectionPoint>[2];
            },
            NodeMaterialConnectionPoint
        >,
        any
    >;
    nodeMaterialBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildState>, {}, NodeMaterialBuildState>, any>;
    nodeMaterialBuildStateSharedData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildStateSharedData>, {}, NodeMaterialBuildStateSharedData>, any>;
    nodeMaterialConnectionPointCustomObject: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialConnectionPointCustomObject>,
            {
                name: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[0];
                ownerBlock: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[1];
                direction: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[2];
                _blockType: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[3];
                _blockName: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[4];
            },
            NodeMaterialConnectionPointCustomObject
        >,
        any
    >;
    setToDefaultGaussianSplatting: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof SetToDefaultGaussianSplatting>> & MeshProps,
            {
                nodeMaterial: Parameters<typeof SetToDefaultGaussianSplatting>[0];
            },
            ReturnType<typeof SetToDefaultGaussianSplatting>
        >,
        any
    >;
    occlusionMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OcclusionMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof OcclusionMaterial>[0];
                scene: ConstructorParameters<typeof OcclusionMaterial>[1];
            } & MaterialProps,
            OcclusionMaterial
        >,
        any
    >;
    materialAnisotropicDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialAnisotropicDefines>, {}, MaterialAnisotropicDefines>, any>;
    pBRAnisotropicConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRAnisotropicConfiguration>,
            {
                material: ConstructorParameters<typeof PBRAnisotropicConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRAnisotropicConfiguration>[1];
            },
            PBRAnisotropicConfiguration
        >,
        any
    >;
    materialBRDFDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialBRDFDefines>, {}, MaterialBRDFDefines>, any>;
    pBRBRDFConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRBRDFConfiguration>,
            {
                material: ConstructorParameters<typeof PBRBRDFConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRBRDFConfiguration>[1];
            },
            PBRBRDFConfiguration
        >,
        any
    >;
    pBRBaseMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRBaseMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRBaseMaterial>[0];
                scene: ConstructorParameters<typeof PBRBaseMaterial>[1];
                forceGLSL: ConstructorParameters<typeof PBRBaseMaterial>[2];
            } & MaterialProps,
            PBRBaseMaterial
        >,
        any
    >;
    pBRMaterialDefines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRMaterialDefines>,
            {
                externalProperties: ConstructorParameters<typeof PBRMaterialDefines>[0];
            },
            PBRMaterialDefines
        >,
        any
    >;
    pBRBaseSimpleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRBaseSimpleMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRBaseSimpleMaterial>[0];
                scene: ConstructorParameters<typeof PBRBaseSimpleMaterial>[1];
            } & MaterialProps,
            PBRBaseSimpleMaterial
        >,
        any
    >;
    materialClearCoatDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialClearCoatDefines>, {}, MaterialClearCoatDefines>, any>;
    pBRClearCoatConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRClearCoatConfiguration>,
            {
                material: ConstructorParameters<typeof PBRClearCoatConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRClearCoatConfiguration>[1];
            },
            PBRClearCoatConfiguration
        >,
        any
    >;
    materialIridescenceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialIridescenceDefines>, {}, MaterialIridescenceDefines>, any>;
    pBRIridescenceConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRIridescenceConfiguration>,
            {
                material: ConstructorParameters<typeof PBRIridescenceConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRIridescenceConfiguration>[1];
            },
            PBRIridescenceConfiguration
        >,
        any
    >;
    pBRMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRMaterial>[0];
                scene: ConstructorParameters<typeof PBRMaterial>[1];
                forceGLSL: ConstructorParameters<typeof PBRMaterial>[2];
            } & MaterialProps,
            PBRMaterial
        >,
        any
    >;
    pBRMetallicRoughnessMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRMetallicRoughnessMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[0];
                scene: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[1];
            } & MaterialProps,
            PBRMetallicRoughnessMaterial
        >,
        any
    >;
    materialSheenDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSheenDefines>, {}, MaterialSheenDefines>, any>;
    pBRSheenConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRSheenConfiguration>,
            {
                material: ConstructorParameters<typeof PBRSheenConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRSheenConfiguration>[1];
            },
            PBRSheenConfiguration
        >,
        any
    >;
    pBRSpecularGlossinessMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRSpecularGlossinessMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRSpecularGlossinessMaterial>[0];
                scene: ConstructorParameters<typeof PBRSpecularGlossinessMaterial>[1];
            } & MaterialProps,
            PBRSpecularGlossinessMaterial
        >,
        any
    >;
    materialSubSurfaceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSubSurfaceDefines>, {}, MaterialSubSurfaceDefines>, any>;
    pBRSubSurfaceConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRSubSurfaceConfiguration>,
            {
                material: ConstructorParameters<typeof PBRSubSurfaceConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof PBRSubSurfaceConfiguration>[1];
            },
            PBRSubSurfaceConfiguration
        >,
        any
    >;
    hDRFiltering: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HDRFiltering>,
            {
                engine: ConstructorParameters<typeof HDRFiltering>[0];
                options: ConstructorParameters<typeof HDRFiltering>[1];
            },
            HDRFiltering
        >,
        any
    >;
    _BasisTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_BasisTextureLoader>, {}, _BasisTextureLoader>, any>;
    _DDSTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_DDSTextureLoader>, {}, _DDSTextureLoader>, any>;
    _ENVTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_ENVTextureLoader>, {}, _ENVTextureLoader>, any>;
    _ExrTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_ExrTextureLoader>, {}, _ExrTextureLoader>, any>;
    _HDRTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_HDRTextureLoader>, {}, _HDRTextureLoader>, any>;
    _IESTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_IESTextureLoader>, {}, _IESTextureLoader>, any>;
    _KTXTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_KTXTextureLoader>, {}, _KTXTextureLoader>, any>;
    _GetCompatibleTextureLoader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _GetCompatibleTextureLoader>> & MeshProps,
            {
                extension: Parameters<typeof _GetCompatibleTextureLoader>[0];
                mimeType: Parameters<typeof _GetCompatibleTextureLoader>[1];
            },
            ReturnType<typeof _GetCompatibleTextureLoader>
        >,
        any
    >;
    registerTextureLoader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof registerTextureLoader>> & MeshProps,
            {
                extension: Parameters<typeof registerTextureLoader>[0];
                loaderFactory: Parameters<typeof registerTextureLoader>[1];
            },
            ReturnType<typeof registerTextureLoader>
        >,
        any
    >;
    unregisterTextureLoader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof unregisterTextureLoader>> & MeshProps,
            {
                extension: Parameters<typeof unregisterTextureLoader>[0];
            },
            ReturnType<typeof unregisterTextureLoader>
        >,
        any
    >;
    _TGATextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TGATextureLoader>, {}, _TGATextureLoader>, any>;
    multiviewRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiviewRenderTarget> & Clonable,
            {
                scene: ConstructorParameters<typeof MultiviewRenderTarget>[0];
                size: ConstructorParameters<typeof MultiviewRenderTarget>[1];
            } & TextureProps,
            MultiviewRenderTarget
        >,
        any
    >;
    texturePackerFrame: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TexturePackerFrame>,
            {
                id: ConstructorParameters<typeof TexturePackerFrame>[0];
                scale: ConstructorParameters<typeof TexturePackerFrame>[1];
                offset: ConstructorParameters<typeof TexturePackerFrame>[2];
            },
            TexturePackerFrame
        >,
        any
    >;
    texturePacker: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TexturePacker>,
            {
                name: ConstructorParameters<typeof TexturePacker>[0];
                meshes: ConstructorParameters<typeof TexturePacker>[1];
                options: ConstructorParameters<typeof TexturePacker>[2];
                scene: ConstructorParameters<typeof TexturePacker>[3];
            },
            TexturePacker
        >,
        any
    >;
    customProceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CustomProceduralTexture> & Clonable,
            {
                name: ConstructorParameters<typeof CustomProceduralTexture>[0];
                texturePath: ConstructorParameters<typeof CustomProceduralTexture>[1];
                size: ConstructorParameters<typeof CustomProceduralTexture>[2];
                scene: ConstructorParameters<typeof CustomProceduralTexture>[3];
                fallbackTexture: ConstructorParameters<typeof CustomProceduralTexture>[4];
                generateMipMaps: ConstructorParameters<typeof CustomProceduralTexture>[5];
                skipJson: ConstructorParameters<typeof CustomProceduralTexture>[6];
            } & TextureProps,
            CustomProceduralTexture
        >,
        any
    >;
    noiseProceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NoiseProceduralTexture> & Clonable,
            {
                name: ConstructorParameters<typeof NoiseProceduralTexture>[0];
                size: ConstructorParameters<typeof NoiseProceduralTexture>[1];
                scene: ConstructorParameters<typeof NoiseProceduralTexture>[2];
                fallbackTexture: ConstructorParameters<typeof NoiseProceduralTexture>[3];
                generateMipMaps: ConstructorParameters<typeof NoiseProceduralTexture>[4];
            } & TextureProps,
            NoiseProceduralTexture
        >,
        any
    >;
    proceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ProceduralTexture> & Clonable,
            {
                name: ConstructorParameters<typeof ProceduralTexture>[0];
                size: ConstructorParameters<typeof ProceduralTexture>[1];
                fragment: ConstructorParameters<typeof ProceduralTexture>[2];
                scene: ConstructorParameters<typeof ProceduralTexture>[3];
                fallbackTexture: ConstructorParameters<typeof ProceduralTexture>[4];
                generateMipMaps: ConstructorParameters<typeof ProceduralTexture>[5];
                isCube: ConstructorParameters<typeof ProceduralTexture>[6];
                textureType: ConstructorParameters<typeof ProceduralTexture>[7];
            } & TextureProps,
            ProceduralTexture
        >,
        any
    >;
    proceduralTextureSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ProceduralTextureSceneComponent>,
            {
                scene: ConstructorParameters<typeof ProceduralTextureSceneComponent>[0];
            },
            ProceduralTextureSceneComponent
        >,
        any
    >;
    baseTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseTexture> & Clonable,
            {
                sceneOrEngine: ConstructorParameters<typeof BaseTexture>[0];
                internalTexture: ConstructorParameters<typeof BaseTexture>[1];
            },
            BaseTexture
        >,
        any
    >;
    colorGradingTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorGradingTexture> & Clonable,
            {
                url: ConstructorParameters<typeof ColorGradingTexture>[0];
                sceneOrEngine: ConstructorParameters<typeof ColorGradingTexture>[1];
                onLoad: ConstructorParameters<typeof ColorGradingTexture>[2];
            } & TextureProps,
            ColorGradingTexture
        >,
        any
    >;
    cubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CubeTexture> & Clonable,
            {
                rootUrl: ConstructorParameters<typeof CubeTexture>[0];
                sceneOrEngine: ConstructorParameters<typeof CubeTexture>[1];
                extensionsOrOptions: ConstructorParameters<typeof CubeTexture>[2];
                noMipmap: ConstructorParameters<typeof CubeTexture>[3];
                files: ConstructorParameters<typeof CubeTexture>[4];
                onLoad: ConstructorParameters<typeof CubeTexture>[5];
                onError: ConstructorParameters<typeof CubeTexture>[6];
                format: ConstructorParameters<typeof CubeTexture>[7];
                prefiltered: ConstructorParameters<typeof CubeTexture>[8];
                forcedExtension: ConstructorParameters<typeof CubeTexture>[9];
                createPolynomials: ConstructorParameters<typeof CubeTexture>[10];
                lodScale: ConstructorParameters<typeof CubeTexture>[11];
                lodOffset: ConstructorParameters<typeof CubeTexture>[12];
                loaderOptions: ConstructorParameters<typeof CubeTexture>[13];
                useSRGBBuffer: ConstructorParameters<typeof CubeTexture>[14];
            } & TextureProps,
            CubeTexture
        >,
        any
    >;
    dynamicTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DynamicTexture> & Clonable,
            {
                name: ConstructorParameters<typeof DynamicTexture>[0];
                canvasOrSize: ConstructorParameters<typeof DynamicTexture>[1];
                sceneOrOptions: ConstructorParameters<typeof DynamicTexture>[2];
                generateMipMaps: ConstructorParameters<typeof DynamicTexture>[3];
                samplingMode: ConstructorParameters<typeof DynamicTexture>[4];
                format: ConstructorParameters<typeof DynamicTexture>[5];
                invertY: ConstructorParameters<typeof DynamicTexture>[6];
            } & TextureProps,
            DynamicTexture
        >,
        any
    >;
    equiRectangularCubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EquiRectangularCubeTexture> & Clonable,
            {
                url: ConstructorParameters<typeof EquiRectangularCubeTexture>[0];
                scene: ConstructorParameters<typeof EquiRectangularCubeTexture>[1];
                size: ConstructorParameters<typeof EquiRectangularCubeTexture>[2];
                noMipmap: ConstructorParameters<typeof EquiRectangularCubeTexture>[3];
                gammaSpace: ConstructorParameters<typeof EquiRectangularCubeTexture>[4];
                onLoad: ConstructorParameters<typeof EquiRectangularCubeTexture>[5];
                onError: ConstructorParameters<typeof EquiRectangularCubeTexture>[6];
                supersample: ConstructorParameters<typeof EquiRectangularCubeTexture>[7];
            } & TextureProps,
            EquiRectangularCubeTexture
        >,
        any
    >;
    externalTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExternalTexture>,
            {
                video: ConstructorParameters<typeof ExternalTexture>[0];
            },
            ExternalTexture
        >,
        any
    >;
    hDRCubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HDRCubeTexture> & Clonable,
            {
                url: ConstructorParameters<typeof HDRCubeTexture>[0];
                sceneOrEngine: ConstructorParameters<typeof HDRCubeTexture>[1];
                size: ConstructorParameters<typeof HDRCubeTexture>[2];
                noMipmap: ConstructorParameters<typeof HDRCubeTexture>[3];
                generateHarmonics: ConstructorParameters<typeof HDRCubeTexture>[4];
                gammaSpace: ConstructorParameters<typeof HDRCubeTexture>[5];
                prefilterOnLoad: ConstructorParameters<typeof HDRCubeTexture>[6];
                onLoad: ConstructorParameters<typeof HDRCubeTexture>[7];
                onError: ConstructorParameters<typeof HDRCubeTexture>[8];
                supersample: ConstructorParameters<typeof HDRCubeTexture>[9];
            } & TextureProps,
            HDRCubeTexture
        >,
        any
    >;
    htmlElementTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HtmlElementTexture> & Clonable,
            {
                name: ConstructorParameters<typeof HtmlElementTexture>[0];
                element: ConstructorParameters<typeof HtmlElementTexture>[1];
                options: ConstructorParameters<typeof HtmlElementTexture>[2];
            } & TextureProps,
            HtmlElementTexture
        >,
        any
    >;
    getTypeForDepthTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetTypeForDepthTexture>> & MeshProps,
            {
                format: Parameters<typeof GetTypeForDepthTexture>[0];
            },
            ReturnType<typeof GetTypeForDepthTexture>
        >,
        any
    >;
    hasStencilAspect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof HasStencilAspect>> & MeshProps,
            {
                format: Parameters<typeof HasStencilAspect>[0];
            },
            ReturnType<typeof HasStencilAspect>
        >,
        any
    >;
    internalTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InternalTexture>,
            {
                engine: ConstructorParameters<typeof InternalTexture>[0];
                source: ConstructorParameters<typeof InternalTexture>[1];
                delayAllocation: ConstructorParameters<typeof InternalTexture>[2];
            },
            InternalTexture
        >,
        any
    >;
    isDepthTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof IsDepthTexture>> & MeshProps,
            {
                format: Parameters<typeof IsDepthTexture>[0];
            },
            ReturnType<typeof IsDepthTexture>
        >,
        any
    >;
    mirrorTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MirrorTexture> & Clonable,
            {
                name: ConstructorParameters<typeof MirrorTexture>[0];
                size: ConstructorParameters<typeof MirrorTexture>[1];
                scene: ConstructorParameters<typeof MirrorTexture>[2];
                generateMipMaps: ConstructorParameters<typeof MirrorTexture>[3];
                type: ConstructorParameters<typeof MirrorTexture>[4];
                samplingMode: ConstructorParameters<typeof MirrorTexture>[5];
                generateDepthBuffer: ConstructorParameters<typeof MirrorTexture>[6];
            } & TextureProps,
            MirrorTexture
        >,
        any
    >;
    multiRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiRenderTarget> & Clonable,
            {
                name: ConstructorParameters<typeof MultiRenderTarget>[0];
                size: ConstructorParameters<typeof MultiRenderTarget>[1];
                count: ConstructorParameters<typeof MultiRenderTarget>[2];
                scene: ConstructorParameters<typeof MultiRenderTarget>[3];
                options: ConstructorParameters<typeof MultiRenderTarget>[4];
                textureNames: ConstructorParameters<typeof MultiRenderTarget>[5];
            } & TextureProps,
            MultiRenderTarget
        >,
        any
    >;
    prePassRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRenderTarget> & Clonable,
            {
                name: ConstructorParameters<typeof PrePassRenderTarget>[0];
                renderTargetTexture: ConstructorParameters<typeof PrePassRenderTarget>[1];
                size: ConstructorParameters<typeof PrePassRenderTarget>[2];
                count: ConstructorParameters<typeof PrePassRenderTarget>[3];
                scene: ConstructorParameters<typeof PrePassRenderTarget>[4];
                options: ConstructorParameters<typeof PrePassRenderTarget>[5];
            } & TextureProps,
            PrePassRenderTarget
        >,
        any
    >;
    rawCubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawCubeTexture> & Clonable,
            {
                scene: ConstructorParameters<typeof RawCubeTexture>[0];
                data: ConstructorParameters<typeof RawCubeTexture>[1];
                size: ConstructorParameters<typeof RawCubeTexture>[2];
                format: ConstructorParameters<typeof RawCubeTexture>[3];
                type: ConstructorParameters<typeof RawCubeTexture>[4];
                generateMipMaps: ConstructorParameters<typeof RawCubeTexture>[5];
                invertY: ConstructorParameters<typeof RawCubeTexture>[6];
                samplingMode: ConstructorParameters<typeof RawCubeTexture>[7];
                compression: ConstructorParameters<typeof RawCubeTexture>[8];
            } & TextureProps,
            RawCubeTexture
        >,
        any
    >;
    rawTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture> & Clonable,
            {
                data: ConstructorParameters<typeof RawTexture>[0];
                width: ConstructorParameters<typeof RawTexture>[1];
                height: ConstructorParameters<typeof RawTexture>[2];
                format: ConstructorParameters<typeof RawTexture>[3];
                sceneOrEngine: ConstructorParameters<typeof RawTexture>[4];
                generateMipMaps: ConstructorParameters<typeof RawTexture>[5];
                invertY: ConstructorParameters<typeof RawTexture>[6];
                samplingMode: ConstructorParameters<typeof RawTexture>[7];
                type: ConstructorParameters<typeof RawTexture>[8];
                creationFlags: ConstructorParameters<typeof RawTexture>[9];
                useSRGBBuffer: ConstructorParameters<typeof RawTexture>[10];
            } & TextureProps,
            RawTexture
        >,
        any
    >;
    rawTexture2DArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture2DArray> & Clonable,
            {
                data: ConstructorParameters<typeof RawTexture2DArray>[0];
                width: ConstructorParameters<typeof RawTexture2DArray>[1];
                height: ConstructorParameters<typeof RawTexture2DArray>[2];
                depth: ConstructorParameters<typeof RawTexture2DArray>[3];
                format: ConstructorParameters<typeof RawTexture2DArray>[4];
                scene: ConstructorParameters<typeof RawTexture2DArray>[5];
                generateMipMaps: ConstructorParameters<typeof RawTexture2DArray>[6];
                invertY: ConstructorParameters<typeof RawTexture2DArray>[7];
                samplingMode: ConstructorParameters<typeof RawTexture2DArray>[8];
                textureType: ConstructorParameters<typeof RawTexture2DArray>[9];
                creationFlags: ConstructorParameters<typeof RawTexture2DArray>[10];
            } & TextureProps,
            RawTexture2DArray
        >,
        any
    >;
    rawTexture3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture3D> & Clonable,
            {
                data: ConstructorParameters<typeof RawTexture3D>[0];
                width: ConstructorParameters<typeof RawTexture3D>[1];
                height: ConstructorParameters<typeof RawTexture3D>[2];
                depth: ConstructorParameters<typeof RawTexture3D>[3];
                format: ConstructorParameters<typeof RawTexture3D>[4];
                scene: ConstructorParameters<typeof RawTexture3D>[5];
                generateMipMaps: ConstructorParameters<typeof RawTexture3D>[6];
                invertY: ConstructorParameters<typeof RawTexture3D>[7];
                samplingMode: ConstructorParameters<typeof RawTexture3D>[8];
                textureType: ConstructorParameters<typeof RawTexture3D>[9];
                creationFlags: ConstructorParameters<typeof RawTexture3D>[10];
            } & TextureProps,
            RawTexture3D
        >,
        any
    >;
    refractionTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionTexture> & Clonable,
            {
                name: ConstructorParameters<typeof RefractionTexture>[0];
                size: ConstructorParameters<typeof RefractionTexture>[1];
                scene: ConstructorParameters<typeof RefractionTexture>[2];
                generateMipMaps: ConstructorParameters<typeof RefractionTexture>[3];
            } & TextureProps,
            RefractionTexture
        >,
        any
    >;
    renderTargetTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderTargetTexture> & Clonable,
            {
                name: ConstructorParameters<typeof RenderTargetTexture>[0];
                size: ConstructorParameters<typeof RenderTargetTexture>[1];
                scene: ConstructorParameters<typeof RenderTargetTexture>[2];
                generateMipMaps: ConstructorParameters<typeof RenderTargetTexture>[3];
                doNotChangeAspectRatio: ConstructorParameters<typeof RenderTargetTexture>[4];
                type: ConstructorParameters<typeof RenderTargetTexture>[5];
                isCube: ConstructorParameters<typeof RenderTargetTexture>[6];
                samplingMode: ConstructorParameters<typeof RenderTargetTexture>[7];
                generateDepthBuffer: ConstructorParameters<typeof RenderTargetTexture>[8];
                generateStencilBuffer: ConstructorParameters<typeof RenderTargetTexture>[9];
                isMulti: ConstructorParameters<typeof RenderTargetTexture>[10];
                format: ConstructorParameters<typeof RenderTargetTexture>[11];
                delayAllocation: ConstructorParameters<typeof RenderTargetTexture>[12];
                samples: ConstructorParameters<typeof RenderTargetTexture>[13];
                creationFlags: ConstructorParameters<typeof RenderTargetTexture>[14];
                noColorAttachment: ConstructorParameters<typeof RenderTargetTexture>[15];
                useSRGBBuffer: ConstructorParameters<typeof RenderTargetTexture>[16];
            } & TextureProps,
            RenderTargetTexture
        >,
        any
    >;
    texture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Texture> & Clonable,
            {
                url: ConstructorParameters<typeof Texture>[0];
                sceneOrEngine: ConstructorParameters<typeof Texture>[1];
                noMipmapOrOptions: ConstructorParameters<typeof Texture>[2];
                invertY: ConstructorParameters<typeof Texture>[3];
                samplingMode: ConstructorParameters<typeof Texture>[4];
                onLoad: ConstructorParameters<typeof Texture>[5];
                onError: ConstructorParameters<typeof Texture>[6];
                buffer: ConstructorParameters<typeof Texture>[7];
                deleteBuffer: ConstructorParameters<typeof Texture>[8];
                format: ConstructorParameters<typeof Texture>[9];
                mimeType: ConstructorParameters<typeof Texture>[10];
                loaderOptions: ConstructorParameters<typeof Texture>[11];
                creationFlags: ConstructorParameters<typeof Texture>[12];
                forcedExtension: ConstructorParameters<typeof Texture>[13];
            } & TextureProps,
            Texture
        >,
        any
    >;
    getDimensionsFromTextureSize: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof getDimensionsFromTextureSize>> & MeshProps,
            {
                size: Parameters<typeof getDimensionsFromTextureSize>[0];
            },
            ReturnType<typeof getDimensionsFromTextureSize>
        >,
        any
    >;
    textureSizeIsObject: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof textureSizeIsObject>> & MeshProps,
            {
                size: Parameters<typeof textureSizeIsObject>[0];
            },
            ReturnType<typeof textureSizeIsObject>
        >,
        any
    >;
    textureSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureSampler>, {}, TextureSampler>, any>;
    thinRenderTargetTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinRenderTargetTexture>,
            {
                engine: ConstructorParameters<typeof ThinRenderTargetTexture>[0];
                size: ConstructorParameters<typeof ThinRenderTargetTexture>[1];
                options: ConstructorParameters<typeof ThinRenderTargetTexture>[2];
            },
            ThinRenderTargetTexture
        >,
        any
    >;
    thinTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinTexture>,
            {
                internalTexture: ConstructorParameters<typeof ThinTexture>[0];
            },
            ThinTexture
        >,
        any
    >;
    videoTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VideoTexture> & Clonable,
            {
                name: ConstructorParameters<typeof VideoTexture>[0];
                src: ConstructorParameters<typeof VideoTexture>[1];
                scene: ConstructorParameters<typeof VideoTexture>[2];
                generateMipMaps: ConstructorParameters<typeof VideoTexture>[3];
                invertY: ConstructorParameters<typeof VideoTexture>[4];
                samplingMode: ConstructorParameters<typeof VideoTexture>[5];
                settings: ConstructorParameters<typeof VideoTexture>[6];
                onError: ConstructorParameters<typeof VideoTexture>[7];
                format: ConstructorParameters<typeof VideoTexture>[8];
            } & TextureProps,
            VideoTexture
        >,
        any
    >;
    addClipPlaneUniforms: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof addClipPlaneUniforms>> & MeshProps,
            {
                uniforms: Parameters<typeof addClipPlaneUniforms>[0];
            },
            ReturnType<typeof addClipPlaneUniforms>
        >,
        any
    >;
    bindClipPlane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof bindClipPlane>> & MeshProps,
            {
                effect: Parameters<typeof bindClipPlane>[0];
                primaryHolder: Parameters<typeof bindClipPlane>[1];
                secondaryHolder: Parameters<typeof bindClipPlane>[2];
            },
            ReturnType<typeof bindClipPlane>
        >,
        any
    >;
    prepareDefinesForClipPlanes: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof prepareDefinesForClipPlanes>> & MeshProps,
            {
                primaryHolder: Parameters<typeof prepareDefinesForClipPlanes>[0];
                secondaryHolder: Parameters<typeof prepareDefinesForClipPlanes>[1];
                defines: Parameters<typeof prepareDefinesForClipPlanes>[2];
            },
            ReturnType<typeof prepareDefinesForClipPlanes>
        >,
        any
    >;
    prepareStringDefinesForClipPlanes: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof prepareStringDefinesForClipPlanes>> & MeshProps,
            {
                primaryHolder: Parameters<typeof prepareStringDefinesForClipPlanes>[0];
                secondaryHolder: Parameters<typeof prepareStringDefinesForClipPlanes>[1];
                defines: Parameters<typeof prepareStringDefinesForClipPlanes>[2];
            },
            ReturnType<typeof prepareStringDefinesForClipPlanes>
        >,
        any
    >;
    colorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCurves> & Clonable, {}, ColorCurves>, any>;
    drawWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DrawWrapper>,
            {
                engine: ConstructorParameters<typeof DrawWrapper>[0];
                createMaterialContext: ConstructorParameters<typeof DrawWrapper>[1];
            },
            DrawWrapper
        >,
        any
    >;
    effect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Effect>,
            {
                baseName: ConstructorParameters<typeof Effect>[0];
                attributesNamesOrOptions: ConstructorParameters<typeof Effect>[1];
                uniformsNamesOrEngine: ConstructorParameters<typeof Effect>[2];
                samplers: ConstructorParameters<typeof Effect>[3];
                engine: ConstructorParameters<typeof Effect>[4];
                defines: ConstructorParameters<typeof Effect>[5];
                fallbacks: ConstructorParameters<typeof Effect>[6];
                onCompiled: ConstructorParameters<typeof Effect>[7];
                onError: ConstructorParameters<typeof Effect>[8];
                indexParameters: ConstructorParameters<typeof Effect>[9];
                key: ConstructorParameters<typeof Effect>[10];
                shaderLanguage: ConstructorParameters<typeof Effect>[11];
                extraInitializationsAsync: ConstructorParameters<typeof Effect>[12];
            },
            Effect
        >,
        any
    >;
    effectFallbacks: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectFallbacks>, {}, EffectFallbacks>, any>;
    effectRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectRenderer>,
            {
                engine: ConstructorParameters<typeof EffectRenderer>[0];
                options: ConstructorParameters<typeof EffectRenderer>[1];
            },
            EffectRenderer
        >,
        any
    >;
    effectWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectWrapper>,
            {
                creationOptions: ConstructorParameters<typeof EffectWrapper>[0];
            },
            EffectWrapper
        >,
        any
    >;
    fresnelParameters: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FresnelParameters> & Clonable,
            {
                options: ConstructorParameters<typeof FresnelParameters>[0];
            },
            FresnelParameters
        >,
        any
    >;
    imageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingConfiguration> & Clonable, {}, ImageProcessingConfiguration>, any>;
    material: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Material> & Clonable,
            {
                name: ConstructorParameters<typeof Material>[0];
                scene: ConstructorParameters<typeof Material>[1];
                doNotAdd: ConstructorParameters<typeof Material>[2];
                forceGLSL: ConstructorParameters<typeof Material>[3];
            },
            Material
        >,
        any
    >;
    materialDefines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaterialDefines>,
            {
                externalProperties: ConstructorParameters<typeof MaterialDefines>[0];
            },
            MaterialDefines
        >,
        any
    >;
    materialPluginBase: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaterialPluginBase>,
            {
                material: ConstructorParameters<typeof MaterialPluginBase>[0];
                name: ConstructorParameters<typeof MaterialPluginBase>[1];
                priority: ConstructorParameters<typeof MaterialPluginBase>[2];
                defines: ConstructorParameters<typeof MaterialPluginBase>[3];
                addToPluginList: ConstructorParameters<typeof MaterialPluginBase>[4];
                enable: ConstructorParameters<typeof MaterialPluginBase>[5];
                resolveIncludes: ConstructorParameters<typeof MaterialPluginBase>[6];
            },
            MaterialPluginBase
        >,
        any
    >;
    createDetailMapPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createDetailMapPlugin>> & MeshProps,
            {
                material: Parameters<typeof createDetailMapPlugin>[0];
            },
            ReturnType<typeof createDetailMapPlugin>
        >,
        any
    >;
    createPBRAnisotropicPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRAnisotropicPlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRAnisotropicPlugin>[0];
            },
            ReturnType<typeof createPBRAnisotropicPlugin>
        >,
        any
    >;
    createPBRBRDFPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRBRDFPlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRBRDFPlugin>[0];
            },
            ReturnType<typeof createPBRBRDFPlugin>
        >,
        any
    >;
    createPBRClearCoatPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRClearCoatPlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRClearCoatPlugin>[0];
            },
            ReturnType<typeof createPBRClearCoatPlugin>
        >,
        any
    >;
    createPBRIridescencePlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRIridescencePlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRIridescencePlugin>[0];
            },
            ReturnType<typeof createPBRIridescencePlugin>
        >,
        any
    >;
    createPBRSheenPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRSheenPlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRSheenPlugin>[0];
            },
            ReturnType<typeof createPBRSheenPlugin>
        >,
        any
    >;
    createPBRSubSurfacePlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRSubSurfacePlugin>> & MeshProps,
            {
                material: Parameters<typeof createPBRSubSurfacePlugin>[0];
            },
            ReturnType<typeof createPBRSubSurfacePlugin>
        >,
        any
    >;
    materialPluginManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaterialPluginManager>,
            {
                material: ConstructorParameters<typeof MaterialPluginManager>[0];
            },
            MaterialPluginManager
        >,
        any
    >;
    registerMaterialPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterMaterialPlugin>> & MeshProps,
            {
                pluginName: Parameters<typeof RegisterMaterialPlugin>[0];
                factory: Parameters<typeof RegisterMaterialPlugin>[1];
            },
            ReturnType<typeof RegisterMaterialPlugin>
        >,
        any
    >;
    unregisterAllMaterialPlugins: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UnregisterAllMaterialPlugins>> & MeshProps, {}, ReturnType<typeof UnregisterAllMaterialPlugins>>,
        any
    >;
    unregisterMaterialPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof UnregisterMaterialPlugin>> & MeshProps,
            {
                pluginName: Parameters<typeof UnregisterMaterialPlugin>[0];
            },
            ReturnType<typeof UnregisterMaterialPlugin>
        >,
        any
    >;
    materialStencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialStencilState>, {}, MaterialStencilState>, any>;
    meshDebugPluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshDebugPluginMaterial>,
            {
                material: ConstructorParameters<typeof MeshDebugPluginMaterial>[0];
                options: ConstructorParameters<typeof MeshDebugPluginMaterial>[1];
            },
            MeshDebugPluginMaterial
        >,
        any
    >;
    multiMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MultiMaterial>[0];
                scene: ConstructorParameters<typeof MultiMaterial>[1];
            } & MaterialProps,
            MultiMaterial
        >,
        any
    >;
    prePassConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassConfiguration>, {}, PrePassConfiguration>, any>;
    pushMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PushMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PushMaterial>[0];
                scene: ConstructorParameters<typeof PushMaterial>[1];
                storeEffectOnSubMeshes: ConstructorParameters<typeof PushMaterial>[2];
                forceGLSL: ConstructorParameters<typeof PushMaterial>[3];
            } & MaterialProps,
            PushMaterial
        >,
        any
    >;
    shaderMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof ShaderMaterial>[0];
                scene: ConstructorParameters<typeof ShaderMaterial>[1];
                shaderPath: ConstructorParameters<typeof ShaderMaterial>[2];
                options: ConstructorParameters<typeof ShaderMaterial>[3];
                storeEffectOnSubMeshes: ConstructorParameters<typeof ShaderMaterial>[4];
            } & MaterialProps,
            ShaderMaterial
        >,
        any
    >;
    shadowDepthWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowDepthWrapper>,
            {
                baseMaterial: ConstructorParameters<typeof ShadowDepthWrapper>[0];
                scene: ConstructorParameters<typeof ShadowDepthWrapper>[1];
                options: ConstructorParameters<typeof ShadowDepthWrapper>[2];
            },
            ShadowDepthWrapper
        >,
        any
    >;
    standardMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StandardMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof StandardMaterial>[0];
                scene: ConstructorParameters<typeof StandardMaterial>[1];
                forceGLSL: ConstructorParameters<typeof StandardMaterial>[2];
            } & MaterialProps,
            StandardMaterial
        >,
        any
    >;
    standardMaterialDefines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StandardMaterialDefines>,
            {
                externalProperties: ConstructorParameters<typeof StandardMaterialDefines>[0];
            },
            StandardMaterialDefines
        >,
        any
    >;
    uniformBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UniformBuffer>,
            {
                engine: ConstructorParameters<typeof UniformBuffer>[0];
                data: ConstructorParameters<typeof UniformBuffer>[1];
                dynamic: ConstructorParameters<typeof UniformBuffer>[2];
                name: ConstructorParameters<typeof UniformBuffer>[3];
                forceNoUniformBuffer: ConstructorParameters<typeof UniformBuffer>[4];
            },
            UniformBuffer
        >,
        any
    >;
    uniformBufferEffectCommonAccessor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UniformBufferEffectCommonAccessor>,
            {
                uboOrEffect: ConstructorParameters<typeof UniformBufferEffectCommonAccessor>[0];
            },
            UniformBufferEffectCommonAccessor
        >,
        any
    >;
    halton2DSequence: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Halton2DSequence>,
            {
                numSamples: ConstructorParameters<typeof Halton2DSequence>[0];
                baseX: ConstructorParameters<typeof Halton2DSequence>[1];
                baseY: ConstructorParameters<typeof Halton2DSequence>[2];
                width: ConstructorParameters<typeof Halton2DSequence>[3];
                height: ConstructorParameters<typeof Halton2DSequence>[4];
            },
            Halton2DSequence
        >,
        any
    >;
    angle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Angle>,
            {
                radians: ConstructorParameters<typeof Angle>[0];
            },
            Angle
        >,
        any
    >;
    arc2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Arc2>,
            {
                startPoint: ConstructorParameters<typeof Arc2>[0];
                midPoint: ConstructorParameters<typeof Arc2>[1];
                endPoint: ConstructorParameters<typeof Arc2>[2];
            },
            Arc2
        >,
        any
    >;
    color3: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Color3> & Clonable,
            {
                r: ConstructorParameters<typeof Color3>[0];
                g: ConstructorParameters<typeof Color3>[1];
                b: ConstructorParameters<typeof Color3>[2];
            },
            Color3
        >,
        any
    >;
    color4: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Color4> & Clonable,
            {
                r: ConstructorParameters<typeof Color4>[0];
                g: ConstructorParameters<typeof Color4>[1];
                b: ConstructorParameters<typeof Color4>[2];
                a: ConstructorParameters<typeof Color4>[3];
            },
            Color4
        >,
        any
    >;
    curve3: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Curve3>,
            {
                points: ConstructorParameters<typeof Curve3>[0];
            },
            Curve3
        >,
        any
    >;
    matrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Matrix> & Clonable, {}, Matrix>, any>;
    path2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Path2>,
            {
                x: ConstructorParameters<typeof Path2>[0];
                y: ConstructorParameters<typeof Path2>[1];
            },
            Path2
        >,
        any
    >;
    path3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Path3D>,
            {
                path: ConstructorParameters<typeof Path3D>[0];
                firstNormal: ConstructorParameters<typeof Path3D>[1];
                raw: ConstructorParameters<typeof Path3D>[2];
                alignTangentsWithPath: ConstructorParameters<typeof Path3D>[3];
            },
            Path3D
        >,
        any
    >;
    plane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Plane> & Clonable,
            {
                a: ConstructorParameters<typeof Plane>[0];
                b: ConstructorParameters<typeof Plane>[1];
                c: ConstructorParameters<typeof Plane>[2];
                d: ConstructorParameters<typeof Plane>[3];
            },
            Plane
        >,
        any
    >;
    positionNormalTextureVertex: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PositionNormalTextureVertex> & Clonable,
            {
                position: ConstructorParameters<typeof PositionNormalTextureVertex>[0];
                normal: ConstructorParameters<typeof PositionNormalTextureVertex>[1];
                uv: ConstructorParameters<typeof PositionNormalTextureVertex>[2];
            },
            PositionNormalTextureVertex
        >,
        any
    >;
    positionNormalVertex: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PositionNormalVertex> & Clonable,
            {
                position: ConstructorParameters<typeof PositionNormalVertex>[0];
                normal: ConstructorParameters<typeof PositionNormalVertex>[1];
            },
            PositionNormalVertex
        >,
        any
    >;
    quaternion: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Quaternion> & Clonable,
            {
                x: ConstructorParameters<typeof Quaternion>[0];
                y: ConstructorParameters<typeof Quaternion>[1];
                z: ConstructorParameters<typeof Quaternion>[2];
                w: ConstructorParameters<typeof Quaternion>[3];
            },
            Quaternion
        >,
        any
    >;
    size: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Size> & Clonable,
            {
                width: ConstructorParameters<typeof Size>[0];
                height: ConstructorParameters<typeof Size>[1];
            },
            Size
        >,
        any
    >;
    vector2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Vector2> & Clonable,
            {
                x: ConstructorParameters<typeof Vector2>[0];
                y: ConstructorParameters<typeof Vector2>[1];
            },
            Vector2
        >,
        any
    >;
    vector3: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Vector3> & Clonable,
            {
                x: ConstructorParameters<typeof Vector3>[0];
                y: ConstructorParameters<typeof Vector3>[1];
                z: ConstructorParameters<typeof Vector3>[2];
            },
            Vector3
        >,
        any
    >;
    vector4: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Vector4> & Clonable,
            {
                x: ConstructorParameters<typeof Vector4>[0];
                y: ConstructorParameters<typeof Vector4>[1];
                z: ConstructorParameters<typeof Vector4>[2];
                w: ConstructorParameters<typeof Vector4>[3];
            },
            Vector4
        >,
        any
    >;
    viewport: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Viewport> & Clonable,
            {
                x: ConstructorParameters<typeof Viewport>[0];
                y: ConstructorParameters<typeof Viewport>[1];
                width: ConstructorParameters<typeof Viewport>[2];
                height: ConstructorParameters<typeof Viewport>[3];
            },
            Viewport
        >,
        any
    >;
    sphericalHarmonics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalHarmonics>, {}, SphericalHarmonics>, any>;
    sphericalPolynomial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalPolynomial>, {}, SphericalPolynomial>, any>;
    box: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateBox>> & MeshProps,
            {
                name: Parameters<typeof CreateBox>[0];
                options: Parameters<typeof CreateBox>[1];
                scene: Parameters<typeof CreateBox>[2];
            },
            ReturnType<typeof CreateBox>
        >,
        any
    >;
    boxVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateBoxVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateBoxVertexData>[0];
            },
            ReturnType<typeof CreateBoxVertexData>
        >,
        any
    >;
    segmentedBoxVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSegmentedBoxVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateSegmentedBoxVertexData>[0];
            },
            ReturnType<typeof CreateSegmentedBoxVertexData>
        >,
        any
    >;
    capsule: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCapsule>> & MeshProps,
            {
                name: Parameters<typeof CreateCapsule>[0];
                options: Parameters<typeof CreateCapsule>[1];
                scene: Parameters<typeof CreateCapsule>[2];
            },
            ReturnType<typeof CreateCapsule>
        >,
        any
    >;
    capsuleVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCapsuleVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateCapsuleVertexData>[0];
            },
            ReturnType<typeof CreateCapsuleVertexData>
        >,
        any
    >;
    cylinder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCylinder>> & MeshProps,
            {
                name: Parameters<typeof CreateCylinder>[0];
                options: Parameters<typeof CreateCylinder>[1];
                scene: Parameters<typeof CreateCylinder>[2];
            },
            ReturnType<typeof CreateCylinder>
        >,
        any
    >;
    cylinderVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCylinderVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateCylinderVertexData>[0];
            },
            ReturnType<typeof CreateCylinderVertexData>
        >,
        any
    >;
    decal: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDecal>> & MeshProps,
            {
                name: Parameters<typeof CreateDecal>[0];
                sourceMesh: Parameters<typeof CreateDecal>[1];
                options: Parameters<typeof CreateDecal>[2];
            },
            ReturnType<typeof CreateDecal>
        >,
        any
    >;
    disc: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDisc>> & MeshProps,
            {
                name: Parameters<typeof CreateDisc>[0];
                options: Parameters<typeof CreateDisc>[1];
                scene: Parameters<typeof CreateDisc>[2];
            },
            ReturnType<typeof CreateDisc>
        >,
        any
    >;
    discVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDiscVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateDiscVertexData>[0];
            },
            ReturnType<typeof CreateDiscVertexData>
        >,
        any
    >;
    geodesic: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGeodesic>> & MeshProps,
            {
                name: Parameters<typeof CreateGeodesic>[0];
                options: Parameters<typeof CreateGeodesic>[1];
                scene: Parameters<typeof CreateGeodesic>[2];
            },
            ReturnType<typeof CreateGeodesic>
        >,
        any
    >;
    goldberg: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGoldberg>> & MeshProps,
            {
                name: Parameters<typeof CreateGoldberg>[0];
                options: Parameters<typeof CreateGoldberg>[1];
                scene: Parameters<typeof CreateGoldberg>[2];
            },
            ReturnType<typeof CreateGoldberg>
        >,
        any
    >;
    goldbergVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGoldbergVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateGoldbergVertexData>[0];
                goldbergData: Parameters<typeof CreateGoldbergVertexData>[1];
            },
            ReturnType<typeof CreateGoldbergVertexData>
        >,
        any
    >;
    completeGreasedLineColorTable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CompleteGreasedLineColorTable>> & MeshProps,
            {
                pointCount: Parameters<typeof CompleteGreasedLineColorTable>[0];
                colors: Parameters<typeof CompleteGreasedLineColorTable>[1];
                colorDistribution: Parameters<typeof CompleteGreasedLineColorTable>[2];
                defaultColor: Parameters<typeof CompleteGreasedLineColorTable>[3];
            },
            ReturnType<typeof CompleteGreasedLineColorTable>
        >,
        any
    >;
    completeGreasedLineWidthTable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CompleteGreasedLineWidthTable>> & MeshProps,
            {
                pointCount: Parameters<typeof CompleteGreasedLineWidthTable>[0];
                widths: Parameters<typeof CompleteGreasedLineWidthTable>[1];
                widthsDistribution: Parameters<typeof CompleteGreasedLineWidthTable>[2];
                defaultWidthUpper: Parameters<typeof CompleteGreasedLineWidthTable>[3];
                defaultWidthLower: Parameters<typeof CompleteGreasedLineWidthTable>[4];
            },
            ReturnType<typeof CompleteGreasedLineWidthTable>
        >,
        any
    >;
    greasedLine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGreasedLine>> & MeshProps,
            {
                name: Parameters<typeof CreateGreasedLine>[0];
                options: Parameters<typeof CreateGreasedLine>[1];
                materialOptions: Parameters<typeof CreateGreasedLine>[2];
                scene: Parameters<typeof CreateGreasedLine>[3];
            },
            ReturnType<typeof CreateGreasedLine>
        >,
        any
    >;
    greasedLineMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGreasedLineMaterial>> & MeshProps,
            {
                name: Parameters<typeof CreateGreasedLineMaterial>[0];
                options: Parameters<typeof CreateGreasedLineMaterial>[1];
                scene: Parameters<typeof CreateGreasedLineMaterial>[2];
            },
            ReturnType<typeof CreateGreasedLineMaterial>
        >,
        any
    >;
    getPointsCount: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetPointsCount>> & MeshProps,
            {
                allPoints: Parameters<typeof GetPointsCount>[0];
            },
            ReturnType<typeof GetPointsCount>
        >,
        any
    >;
    ground: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGround>> & MeshProps,
            {
                name: Parameters<typeof CreateGround>[0];
                options: Parameters<typeof CreateGround>[1];
                scene: Parameters<typeof CreateGround>[2];
            },
            ReturnType<typeof CreateGround>
        >,
        any
    >;
    groundFromHeightMap: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundFromHeightMap>> & MeshProps,
            {
                name: Parameters<typeof CreateGroundFromHeightMap>[0];
                url: Parameters<typeof CreateGroundFromHeightMap>[1];
                options: Parameters<typeof CreateGroundFromHeightMap>[2];
                scene: Parameters<typeof CreateGroundFromHeightMap>[3];
            },
            ReturnType<typeof CreateGroundFromHeightMap>
        >,
        any
    >;
    groundFromHeightMapVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundFromHeightMapVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateGroundFromHeightMapVertexData>[0];
            },
            ReturnType<typeof CreateGroundFromHeightMapVertexData>
        >,
        any
    >;
    groundVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateGroundVertexData>[0];
            },
            ReturnType<typeof CreateGroundVertexData>
        >,
        any
    >;
    tiledGround: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledGround>> & MeshProps,
            {
                name: Parameters<typeof CreateTiledGround>[0];
                options: Parameters<typeof CreateTiledGround>[1];
                scene: Parameters<typeof CreateTiledGround>[2];
            },
            ReturnType<typeof CreateTiledGround>
        >,
        any
    >;
    tiledGroundVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledGroundVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateTiledGroundVertexData>[0];
            },
            ReturnType<typeof CreateTiledGroundVertexData>
        >,
        any
    >;
    hemisphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateHemisphere>> & MeshProps,
            {
                name: Parameters<typeof CreateHemisphere>[0];
                options: Parameters<typeof CreateHemisphere>[1];
                scene: Parameters<typeof CreateHemisphere>[2];
            },
            ReturnType<typeof CreateHemisphere>
        >,
        any
    >;
    icoSphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIcoSphere>> & MeshProps,
            {
                name: Parameters<typeof CreateIcoSphere>[0];
                options: Parameters<typeof CreateIcoSphere>[1];
                scene: Parameters<typeof CreateIcoSphere>[2];
            },
            ReturnType<typeof CreateIcoSphere>
        >,
        any
    >;
    icoSphereVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIcoSphereVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateIcoSphereVertexData>[0];
            },
            ReturnType<typeof CreateIcoSphereVertexData>
        >,
        any
    >;
    lathe: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLathe>> & MeshProps,
            {
                name: Parameters<typeof CreateLathe>[0];
                options: Parameters<typeof CreateLathe>[1];
                scene: Parameters<typeof CreateLathe>[2];
            },
            ReturnType<typeof CreateLathe>
        >,
        any
    >;
    dashedLines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDashedLines>> & MeshProps,
            {
                name: Parameters<typeof CreateDashedLines>[0];
                options: Parameters<typeof CreateDashedLines>[1];
                scene: Parameters<typeof CreateDashedLines>[2];
            },
            ReturnType<typeof CreateDashedLines>
        >,
        any
    >;
    dashedLinesVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDashedLinesVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateDashedLinesVertexData>[0];
            },
            ReturnType<typeof CreateDashedLinesVertexData>
        >,
        any
    >;
    lineSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLineSystem>> & MeshProps,
            {
                name: Parameters<typeof CreateLineSystem>[0];
                options: Parameters<typeof CreateLineSystem>[1];
                scene: Parameters<typeof CreateLineSystem>[2];
            },
            ReturnType<typeof CreateLineSystem>
        >,
        any
    >;
    lineSystemVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLineSystemVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateLineSystemVertexData>[0];
            },
            ReturnType<typeof CreateLineSystemVertexData>
        >,
        any
    >;
    lines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLines>> & MeshProps,
            {
                name: Parameters<typeof CreateLines>[0];
                options: Parameters<typeof CreateLines>[1];
                scene: Parameters<typeof CreateLines>[2];
            },
            ReturnType<typeof CreateLines>
        >,
        any
    >;
    planeVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePlaneVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreatePlaneVertexData>[0];
            },
            ReturnType<typeof CreatePlaneVertexData>
        >,
        any
    >;
    polygon3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolygon>> & MeshProps,
            {
                name: Parameters<typeof CreatePolygon>[0];
                options: Parameters<typeof CreatePolygon>[1];
                scene: Parameters<typeof CreatePolygon>[2];
                earcutInjection: Parameters<typeof CreatePolygon>[3];
            },
            ReturnType<typeof CreatePolygon>
        >,
        any
    >;
    polygonVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolygonVertexData>> & MeshProps,
            {
                polygon: Parameters<typeof CreatePolygonVertexData>[0];
                sideOrientation: Parameters<typeof CreatePolygonVertexData>[1];
                fUV: Parameters<typeof CreatePolygonVertexData>[2];
                fColors: Parameters<typeof CreatePolygonVertexData>[3];
                frontUVs: Parameters<typeof CreatePolygonVertexData>[4];
                backUVs: Parameters<typeof CreatePolygonVertexData>[5];
                wrp: Parameters<typeof CreatePolygonVertexData>[6];
            },
            ReturnType<typeof CreatePolygonVertexData>
        >,
        any
    >;
    extrudePolygon: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudePolygon>> & MeshProps,
            {
                name: Parameters<typeof ExtrudePolygon>[0];
                options: Parameters<typeof ExtrudePolygon>[1];
                scene: Parameters<typeof ExtrudePolygon>[2];
                earcutInjection: Parameters<typeof ExtrudePolygon>[3];
            },
            ReturnType<typeof ExtrudePolygon>
        >,
        any
    >;
    polyhedron: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolyhedron>> & MeshProps,
            {
                name: Parameters<typeof CreatePolyhedron>[0];
                options: Parameters<typeof CreatePolyhedron>[1];
                scene: Parameters<typeof CreatePolyhedron>[2];
            },
            ReturnType<typeof CreatePolyhedron>
        >,
        any
    >;
    polyhedronVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolyhedronVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreatePolyhedronVertexData>[0];
            },
            ReturnType<typeof CreatePolyhedronVertexData>
        >,
        any
    >;
    ribbon: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRibbon>> & MeshProps,
            {
                name: Parameters<typeof CreateRibbon>[0];
                options: Parameters<typeof CreateRibbon>[1];
                scene: Parameters<typeof CreateRibbon>[2];
            },
            ReturnType<typeof CreateRibbon>
        >,
        any
    >;
    ribbonVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRibbonVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateRibbonVertexData>[0];
            },
            ReturnType<typeof CreateRibbonVertexData>
        >,
        any
    >;
    extrudeShape: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShape>> & MeshProps,
            {
                name: Parameters<typeof ExtrudeShape>[0];
                options: Parameters<typeof ExtrudeShape>[1];
                scene: Parameters<typeof ExtrudeShape>[2];
            },
            ReturnType<typeof ExtrudeShape>
        >,
        any
    >;
    extrudeShapeCustom: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShapeCustom>> & MeshProps,
            {
                name: Parameters<typeof ExtrudeShapeCustom>[0];
                options: Parameters<typeof ExtrudeShapeCustom>[1];
                scene: Parameters<typeof ExtrudeShapeCustom>[2];
            },
            ReturnType<typeof ExtrudeShapeCustom>
        >,
        any
    >;
    sphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSphere>> & MeshProps,
            {
                name: Parameters<typeof CreateSphere>[0];
                options: Parameters<typeof CreateSphere>[1];
                scene: Parameters<typeof CreateSphere>[2];
            },
            ReturnType<typeof CreateSphere>
        >,
        any
    >;
    sphereVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSphereVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateSphereVertexData>[0];
            },
            ReturnType<typeof CreateSphereVertexData>
        >,
        any
    >;
    text3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateText>> & MeshProps,
            {
                name: Parameters<typeof CreateText>[0];
                text: Parameters<typeof CreateText>[1];
                fontData: Parameters<typeof CreateText>[2];
                options: Parameters<typeof CreateText>[3];
                scene: Parameters<typeof CreateText>[4];
                earcutInjection: Parameters<typeof CreateText>[5];
            },
            ReturnType<typeof CreateText>
        >,
        any
    >;
    textShapePaths: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTextShapePaths>> & MeshProps,
            {
                text: Parameters<typeof CreateTextShapePaths>[0];
                size: Parameters<typeof CreateTextShapePaths>[1];
                resolution: Parameters<typeof CreateTextShapePaths>[2];
                fontData: Parameters<typeof CreateTextShapePaths>[3];
            },
            ReturnType<typeof CreateTextShapePaths>
        >,
        any
    >;
    tiledBox: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledBox>> & MeshProps,
            {
                name: Parameters<typeof CreateTiledBox>[0];
                options: Parameters<typeof CreateTiledBox>[1];
                scene: Parameters<typeof CreateTiledBox>[2];
            },
            ReturnType<typeof CreateTiledBox>
        >,
        any
    >;
    tiledBoxVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledBoxVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateTiledBoxVertexData>[0];
            },
            ReturnType<typeof CreateTiledBoxVertexData>
        >,
        any
    >;
    tiledPlane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledPlane>> & MeshProps,
            {
                name: Parameters<typeof CreateTiledPlane>[0];
                options: Parameters<typeof CreateTiledPlane>[1];
                scene: Parameters<typeof CreateTiledPlane>[2];
            },
            ReturnType<typeof CreateTiledPlane>
        >,
        any
    >;
    tiledPlaneVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledPlaneVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateTiledPlaneVertexData>[0];
            },
            ReturnType<typeof CreateTiledPlaneVertexData>
        >,
        any
    >;
    torus: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorus>> & MeshProps,
            {
                name: Parameters<typeof CreateTorus>[0];
                options: Parameters<typeof CreateTorus>[1];
                scene: Parameters<typeof CreateTorus>[2];
            },
            ReturnType<typeof CreateTorus>
        >,
        any
    >;
    torusVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateTorusVertexData>[0];
            },
            ReturnType<typeof CreateTorusVertexData>
        >,
        any
    >;
    torusKnot: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusKnot>> & MeshProps,
            {
                name: Parameters<typeof CreateTorusKnot>[0];
                options: Parameters<typeof CreateTorusKnot>[1];
                scene: Parameters<typeof CreateTorusKnot>[2];
            },
            ReturnType<typeof CreateTorusKnot>
        >,
        any
    >;
    torusKnotVertexData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusKnotVertexData>> & MeshProps,
            {
                options: Parameters<typeof CreateTorusKnotVertexData>[0];
            },
            ReturnType<typeof CreateTorusKnotVertexData>
        >,
        any
    >;
    tube: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTube>> & MeshProps,
            {
                name: Parameters<typeof CreateTube>[0];
                options: Parameters<typeof CreateTube>[1];
                scene: Parameters<typeof CreateTube>[2];
            },
            ReturnType<typeof CreateTube>
        >,
        any
    >;
    dracoCodec: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DracoCodec>,
            {
                configuration: ConstructorParameters<typeof DracoCodec>[0];
            },
            DracoCodec
        >,
        any
    >;
    _GetDefaultNumWorkers: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _GetDefaultNumWorkers>> & MeshProps, {}, ReturnType<typeof _GetDefaultNumWorkers>>,
        any
    >;
    _IsConfigurationAvailable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _IsConfigurationAvailable>> & MeshProps,
            {
                config: Parameters<typeof _IsConfigurationAvailable>[0];
            },
            ReturnType<typeof _IsConfigurationAvailable>
        >,
        any
    >;
    dracoCompression: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DracoCompression>,
            {
                numWorkersOrOptions: ConstructorParameters<typeof DracoCompression>[0];
            },
            DracoCompression
        >,
        any
    >;
    decodeMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof decodeMesh>> & MeshProps,
            {
                decoderModule: Parameters<typeof decodeMesh>[0];
                data: Parameters<typeof decodeMesh>[1];
                attributes: Parameters<typeof decodeMesh>[2];
                onIndicesData: Parameters<typeof decodeMesh>[3];
                onAttributeData: Parameters<typeof decodeMesh>[4];
            },
            ReturnType<typeof decodeMesh>
        >,
        any
    >;
    initializeWebWorker: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof initializeWebWorker>> & MeshProps,
            {
                worker: Parameters<typeof initializeWebWorker>[0];
                decoderWasmBinary: Parameters<typeof initializeWebWorker>[1];
                moduleUrl: Parameters<typeof initializeWebWorker>[2];
            },
            ReturnType<typeof initializeWebWorker>
        >,
        any
    >;
    workerFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof workerFunction>> & MeshProps, {}, ReturnType<typeof workerFunction>>, any>;
    dracoDecoder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DracoDecoder>,
            {
                configuration: ConstructorParameters<typeof DracoDecoder>[0];
            },
            DracoDecoder
        >,
        any
    >;
    meshoptCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshoptCompression>, {}, MeshoptCompression>, any>;
    gaussianSplattingMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GaussianSplattingMesh>[0];
                url: ConstructorParameters<typeof GaussianSplattingMesh>[1];
                scene: ConstructorParameters<typeof GaussianSplattingMesh>[2];
                keepInRam: ConstructorParameters<typeof GaussianSplattingMesh>[3];
            },
            GaussianSplattingMesh
        >,
        any
    >;
    greasedLineBaseMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineBaseMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GreasedLineBaseMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineBaseMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineBaseMesh>[2];
            },
            GreasedLineBaseMesh
        >,
        any
    >;
    greasedLineMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GreasedLineMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineMesh>[2];
            },
            GreasedLineMesh
        >,
        any
    >;
    greasedLineRibbonMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineRibbonMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GreasedLineRibbonMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineRibbonMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineRibbonMesh>[2];
                _pathOptions: ConstructorParameters<typeof GreasedLineRibbonMesh>[3];
            },
            GreasedLineRibbonMesh
        >,
        any
    >;
    instantiateBaseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateBaseBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateBaseBlock>[0];
            },
            InstantiateBaseBlock
        >,
        any
    >;
    instantiateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateBlock>[0];
            },
            InstantiateBlock
        >,
        any
    >;
    instantiateLinearBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateLinearBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateLinearBlock>[0];
            },
            InstantiateLinearBlock
        >,
        any
    >;
    instantiateOnFacesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnFacesBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateOnFacesBlock>[0];
            },
            InstantiateOnFacesBlock
        >,
        any
    >;
    instantiateOnVerticesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnVerticesBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateOnVerticesBlock>[0];
            },
            InstantiateOnVerticesBlock
        >,
        any
    >;
    instantiateOnVolumeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnVolumeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateOnVolumeBlock>[0];
            },
            InstantiateOnVolumeBlock
        >,
        any
    >;
    instantiateRadialBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateRadialBlock> & Clonable,
            {
                name: ConstructorParameters<typeof InstantiateRadialBlock>[0];
            },
            InstantiateRadialBlock
        >,
        any
    >;
    alignBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AlignBlock> & Clonable,
            {
                name: ConstructorParameters<typeof AlignBlock>[0];
            },
            AlignBlock
        >,
        any
    >;
    rotationXBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationXBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RotationXBlock>[0];
            },
            RotationXBlock
        >,
        any
    >;
    rotationYBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationYBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RotationYBlock>[0];
            },
            RotationYBlock
        >,
        any
    >;
    rotationZBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationZBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RotationZBlock>[0];
            },
            RotationZBlock
        >,
        any
    >;
    scalingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScalingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ScalingBlock>[0];
            },
            ScalingBlock
        >,
        any
    >;
    translationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TranslationBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TranslationBlock>[0];
            },
            TranslationBlock
        >,
        any
    >;
    aggregatorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AggregatorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof AggregatorBlock>[0];
            },
            AggregatorBlock
        >,
        any
    >;
    latticeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LatticeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof LatticeBlock>[0];
            },
            LatticeBlock
        >,
        any
    >;
    setColorsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetColorsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetColorsBlock>[0];
            },
            SetColorsBlock
        >,
        any
    >;
    setMaterialIDBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetMaterialIDBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetMaterialIDBlock>[0];
            },
            SetMaterialIDBlock
        >,
        any
    >;
    setNormalsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetNormalsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetNormalsBlock>[0];
            },
            SetNormalsBlock
        >,
        any
    >;
    setPositionsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetPositionsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetPositionsBlock>[0];
            },
            SetPositionsBlock
        >,
        any
    >;
    setTangentsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetTangentsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetTangentsBlock>[0];
            },
            SetTangentsBlock
        >,
        any
    >;
    setUVsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetUVsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SetUVsBlock>[0];
            },
            SetUVsBlock
        >,
        any
    >;
    boxBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoxBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BoxBlock>[0];
            },
            BoxBlock
        >,
        any
    >;
    capsuleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CapsuleBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CapsuleBlock>[0];
            },
            CapsuleBlock
        >,
        any
    >;
    cylinderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CylinderBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CylinderBlock>[0];
            },
            CylinderBlock
        >,
        any
    >;
    discBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DiscBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DiscBlock>[0];
            },
            DiscBlock
        >,
        any
    >;
    gridBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GridBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GridBlock>[0];
            },
            GridBlock
        >,
        any
    >;
    icoSphereBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IcoSphereBlock> & Clonable,
            {
                name: ConstructorParameters<typeof IcoSphereBlock>[0];
            },
            IcoSphereBlock
        >,
        any
    >;
    meshBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MeshBlock>[0];
            },
            MeshBlock
        >,
        any
    >;
    nullBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NullBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NullBlock>[0];
            },
            NullBlock
        >,
        any
    >;
    planeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlaneBlock> & Clonable,
            {
                name: ConstructorParameters<typeof PlaneBlock>[0];
            },
            PlaneBlock
        >,
        any
    >;
    sphereBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SphereBlock> & Clonable,
            {
                name: ConstructorParameters<typeof SphereBlock>[0];
            },
            SphereBlock
        >,
        any
    >;
    torusBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TorusBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TorusBlock>[0];
            },
            TorusBlock
        >,
        any
    >;
    teleportInBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TeleportInBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TeleportInBlock>[0];
            },
            TeleportInBlock
        >,
        any
    >;
    teleportOutBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TeleportOutBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TeleportOutBlock>[0];
            },
            TeleportOutBlock
        >,
        any
    >;
    geometryTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTextureBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryTextureBlock>[0];
            },
            GeometryTextureBlock
        >,
        any
    >;
    geometryTextureFetchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTextureFetchBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryTextureFetchBlock>[0];
            },
            GeometryTextureFetchBlock
        >,
        any
    >;
    booleanGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BooleanGeometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BooleanGeometryBlock>[0];
            },
            BooleanGeometryBlock
        >,
        any
    >;
    boundingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof BoundingBlock>[0];
            },
            BoundingBlock
        >,
        any
    >;
    cleanGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CleanGeometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof CleanGeometryBlock>[0];
            },
            CleanGeometryBlock
        >,
        any
    >;
    computeNormalsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeNormalsBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ComputeNormalsBlock>[0];
            },
            ComputeNormalsBlock
        >,
        any
    >;
    conditionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConditionBlock> & Clonable,
            {
                name: ConstructorParameters<typeof ConditionBlock>[0];
            },
            ConditionBlock
        >,
        any
    >;
    debugBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DebugBlock> & Clonable,
            {
                name: ConstructorParameters<typeof DebugBlock>[0];
            },
            DebugBlock
        >,
        any
    >;
    geometryArcTan2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryArcTan2Block> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryArcTan2Block>[0];
            },
            GeometryArcTan2Block
        >,
        any
    >;
    geometryClampBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryClampBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryClampBlock>[0];
            },
            GeometryClampBlock
        >,
        any
    >;
    geometryCollectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCollectionBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryCollectionBlock>[0];
            },
            GeometryCollectionBlock
        >,
        any
    >;
    geometryCrossBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCrossBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryCrossBlock>[0];
            },
            GeometryCrossBlock
        >,
        any
    >;
    geometryCurveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCurveBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryCurveBlock>[0];
            },
            GeometryCurveBlock
        >,
        any
    >;
    geometryDesaturateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDesaturateBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryDesaturateBlock>[0];
            },
            GeometryDesaturateBlock
        >,
        any
    >;
    geometryDistanceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDistanceBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryDistanceBlock>[0];
            },
            GeometryDistanceBlock
        >,
        any
    >;
    geometryDotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDotBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryDotBlock>[0];
            },
            GeometryDotBlock
        >,
        any
    >;
    geometryElbowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryElbowBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryElbowBlock>[0];
            },
            GeometryElbowBlock
        >,
        any
    >;
    geometryInfoBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryInfoBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryInfoBlock>[0];
            },
            GeometryInfoBlock
        >,
        any
    >;
    geometryInputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryInputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryInputBlock>[0];
                type: ConstructorParameters<typeof GeometryInputBlock>[1];
            },
            GeometryInputBlock
        >,
        any
    >;
    geometryInterceptorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryInterceptorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryInterceptorBlock>[0];
            },
            GeometryInterceptorBlock
        >,
        any
    >;
    geometryLengthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryLengthBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryLengthBlock>[0];
            },
            GeometryLengthBlock
        >,
        any
    >;
    geometryLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryLerpBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryLerpBlock>[0];
            },
            GeometryLerpBlock
        >,
        any
    >;
    geometryModBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryModBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryModBlock>[0];
            },
            GeometryModBlock
        >,
        any
    >;
    geometryNLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryNLerpBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryNLerpBlock>[0];
            },
            GeometryNLerpBlock
        >,
        any
    >;
    geometryOptimizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryOptimizeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryOptimizeBlock>[0];
            },
            GeometryOptimizeBlock
        >,
        any
    >;
    geometryOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryOutputBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryOutputBlock>[0];
            },
            GeometryOutputBlock
        >,
        any
    >;
    geometryPosterizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryPosterizeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryPosterizeBlock>[0];
            },
            GeometryPosterizeBlock
        >,
        any
    >;
    geometryPowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryPowBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryPowBlock>[0];
            },
            GeometryPowBlock
        >,
        any
    >;
    geometryReplaceColorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryReplaceColorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryReplaceColorBlock>[0];
            },
            GeometryReplaceColorBlock
        >,
        any
    >;
    geometryRotate2dBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryRotate2dBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryRotate2dBlock>[0];
            },
            GeometryRotate2dBlock
        >,
        any
    >;
    geometrySmoothStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometrySmoothStepBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometrySmoothStepBlock>[0];
            },
            GeometrySmoothStepBlock
        >,
        any
    >;
    geometryStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryStepBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryStepBlock>[0];
            },
            GeometryStepBlock
        >,
        any
    >;
    geometryTransformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTransformBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryTransformBlock>[0];
            },
            GeometryTransformBlock
        >,
        any
    >;
    geometryTrigonometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTrigonometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof GeometryTrigonometryBlock>[0];
            },
            GeometryTrigonometryBlock
        >,
        any
    >;
    intFloatConverterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IntFloatConverterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof IntFloatConverterBlock>[0];
            },
            IntFloatConverterBlock
        >,
        any
    >;
    mapRangeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MapRangeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MapRangeBlock>[0];
            },
            MapRangeBlock
        >,
        any
    >;
    mappingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MappingBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MappingBlock>[0];
            },
            MappingBlock
        >,
        any
    >;
    mathBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MathBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MathBlock>[0];
            },
            MathBlock
        >,
        any
    >;
    matrixComposeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixComposeBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MatrixComposeBlock>[0];
            },
            MatrixComposeBlock
        >,
        any
    >;
    mergeGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MergeGeometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof MergeGeometryBlock>[0];
            },
            MergeGeometryBlock
        >,
        any
    >;
    noiseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NoiseBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NoiseBlock>[0];
            },
            NoiseBlock
        >,
        any
    >;
    normalizeVectorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalizeVectorBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NormalizeVectorBlock>[0];
            },
            NormalizeVectorBlock
        >,
        any
    >;
    randomBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RandomBlock> & Clonable,
            {
                name: ConstructorParameters<typeof RandomBlock>[0];
            },
            RandomBlock
        >,
        any
    >;
    vectorConverterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorConverterBlock> & Clonable,
            {
                name: ConstructorParameters<typeof VectorConverterBlock>[0];
            },
            VectorConverterBlock
        >,
        any
    >;
    nodeGeometry: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeGeometry> & Clonable,
            {
                name: ConstructorParameters<typeof NodeGeometry>[0];
            },
            NodeGeometry
        >,
        any
    >;
    nodeGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeGeometryBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeGeometryBlock>[0];
            },
            NodeGeometryBlock
        >,
        any
    >;
    nodeGeometryConnectionPoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeGeometryConnectionPoint>,
            {
                name: ConstructorParameters<typeof NodeGeometryConnectionPoint>[0];
                ownerBlock: ConstructorParameters<typeof NodeGeometryConnectionPoint>[1];
                direction: ConstructorParameters<typeof NodeGeometryConnectionPoint>[2];
            },
            NodeGeometryConnectionPoint
        >,
        any
    >;
    nodeGeometryBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBuildState>, {}, NodeGeometryBuildState>, any>;
    webGLDataBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLDataBuffer>,
            {
                resource: ConstructorParameters<typeof WebGLDataBuffer>[0];
            },
            WebGLDataBuffer
        >,
        any
    >;
    webGPUDataBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGPUDataBuffer>,
            {
                resource: ConstructorParameters<typeof WebGPUDataBuffer>[0];
                capacity: ConstructorParameters<typeof WebGPUDataBuffer>[1];
            },
            WebGPUDataBuffer
        >,
        any
    >;
    abstractMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AbstractMesh> & Clonable,
            {
                name: ConstructorParameters<typeof AbstractMesh>[0];
                scene: ConstructorParameters<typeof AbstractMesh>[1];
            },
            AbstractMesh
        >,
        any
    >;
    cSG: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CSG> & Clonable, {}, CSG>, any>;
    cSG2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CSG2>,
            {
                manifold: ConstructorParameters<typeof CSG2>[0];
                numProp: ConstructorParameters<typeof CSG2>[1];
                vertexStructure: ConstructorParameters<typeof CSG2>[2];
            },
            CSG2
        >,
        any
    >;
    initializeCSG2Async: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof InitializeCSG2Async>> & MeshProps,
            {
                options: Parameters<typeof InitializeCSG2Async>[0];
            },
            ReturnType<typeof InitializeCSG2Async>
        >,
        any
    >;
    isCSG2Ready: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsCSG2Ready>> & MeshProps, {}, ReturnType<typeof IsCSG2Ready>>, any>;
    polyhedronData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PolyhedronData>,
            {
                name: ConstructorParameters<typeof PolyhedronData>[0];
                category: ConstructorParameters<typeof PolyhedronData>[1];
                vertex: ConstructorParameters<typeof PolyhedronData>[2];
                face: ConstructorParameters<typeof PolyhedronData>[3];
            },
            PolyhedronData
        >,
        any
    >;
    _PrimaryIsoTriangle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_PrimaryIsoTriangle>, {}, _PrimaryIsoTriangle>, any>;
    geometry: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Geometry>,
            {
                id: ConstructorParameters<typeof Geometry>[0];
                scene: ConstructorParameters<typeof Geometry>[1];
                vertexData: ConstructorParameters<typeof Geometry>[2];
                updatable: ConstructorParameters<typeof Geometry>[3];
                mesh: ConstructorParameters<typeof Geometry>[4];
            },
            Geometry
        >,
        any
    >;
    goldbergMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GoldbergMesh> & Clonable, {}, GoldbergMesh>, any>;
    groundMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GroundMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GroundMesh>[0];
                scene: ConstructorParameters<typeof GroundMesh>[1];
            },
            GroundMesh
        >,
        any
    >;
    instancedMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstancedMesh> & Clonable,
            {
                name: ConstructorParameters<typeof InstancedMesh>[0];
                source: ConstructorParameters<typeof InstancedMesh>[1];
            },
            InstancedMesh
        >,
        any
    >;
    lattice: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Lattice>,
            {
                options: ConstructorParameters<typeof Lattice>[0];
            },
            Lattice
        >,
        any
    >;
    instancedLinesMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstancedLinesMesh> & Clonable,
            {
                name: ConstructorParameters<typeof InstancedLinesMesh>[0];
                source: ConstructorParameters<typeof InstancedLinesMesh>[1];
            },
            InstancedLinesMesh
        >,
        any
    >;
    linesMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LinesMesh> & Clonable,
            {
                name: ConstructorParameters<typeof LinesMesh>[0];
                scene: ConstructorParameters<typeof LinesMesh>[1];
                parent: ConstructorParameters<typeof LinesMesh>[2];
                source: ConstructorParameters<typeof LinesMesh>[3];
                doNotCloneChildren: ConstructorParameters<typeof LinesMesh>[4];
                useVertexColor: ConstructorParameters<typeof LinesMesh>[5];
                useVertexAlpha: ConstructorParameters<typeof LinesMesh>[6];
                material: ConstructorParameters<typeof LinesMesh>[7];
            },
            LinesMesh
        >,
        any
    >;
    mesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Mesh> & Clonable,
            {
                name: ConstructorParameters<typeof Mesh>[0];
                scene: ConstructorParameters<typeof Mesh>[1];
                parent: ConstructorParameters<typeof Mesh>[2];
                source: ConstructorParameters<typeof Mesh>[3];
                doNotCloneChildren: ConstructorParameters<typeof Mesh>[4];
                clonePhysicsImpostor: ConstructorParameters<typeof Mesh>[5];
            },
            Mesh
        >,
        any
    >;
    _InstancesBatch: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_InstancesBatch>, {}, _InstancesBatch>, any>;
    meshLODLevel: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshLODLevel>,
            {
                distanceOrScreenCoverage: ConstructorParameters<typeof MeshLODLevel>[0];
                mesh: ConstructorParameters<typeof MeshLODLevel>[1];
            },
            MeshLODLevel
        >,
        any
    >;
    quadraticErrorSimplification: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<QuadraticErrorSimplification>,
            {
                _mesh: ConstructorParameters<typeof QuadraticErrorSimplification>[0];
            },
            QuadraticErrorSimplification
        >,
        any
    >;
    simplificationQueue: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SimplificationQueue>, {}, SimplificationQueue>, any>;
    simplificationSettings: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SimplificationSettings>,
            {
                quality: ConstructorParameters<typeof SimplificationSettings>[0];
                distance: ConstructorParameters<typeof SimplificationSettings>[1];
                optimizeMesh: ConstructorParameters<typeof SimplificationSettings>[2];
            },
            SimplificationSettings
        >,
        any
    >;
    simplicationQueueSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SimplicationQueueSceneComponent>,
            {
                scene: ConstructorParameters<typeof SimplicationQueueSceneComponent>[0];
            },
            SimplicationQueueSceneComponent
        >,
        any
    >;
    meshUVSpaceRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshUVSpaceRenderer>,
            {
                mesh: ConstructorParameters<typeof MeshUVSpaceRenderer>[0];
                scene: ConstructorParameters<typeof MeshUVSpaceRenderer>[1];
                options: ConstructorParameters<typeof MeshUVSpaceRenderer>[2];
            },
            MeshUVSpaceRenderer
        >,
        any
    >;
    computeMaxExtents: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof computeMaxExtents>> & MeshProps,
            {
                meshes: Parameters<typeof computeMaxExtents>[0];
                animationGroup: Parameters<typeof computeMaxExtents>[1];
                animationStep: Parameters<typeof computeMaxExtents>[2];
            },
            ReturnType<typeof computeMaxExtents>
        >,
        any
    >;
    polygonMeshBuilder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PolygonMeshBuilder>,
            {
                name: ConstructorParameters<typeof PolygonMeshBuilder>[0];
                contours: ConstructorParameters<typeof PolygonMeshBuilder>[1];
                scene: ConstructorParameters<typeof PolygonMeshBuilder>[2];
                earcutInjection: ConstructorParameters<typeof PolygonMeshBuilder>[3];
            },
            PolygonMeshBuilder
        >,
        any
    >;
    subMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubMesh> & Clonable,
            {
                materialIndex: ConstructorParameters<typeof SubMesh>[0];
                verticesStart: ConstructorParameters<typeof SubMesh>[1];
                verticesCount: ConstructorParameters<typeof SubMesh>[2];
                indexStart: ConstructorParameters<typeof SubMesh>[3];
                indexCount: ConstructorParameters<typeof SubMesh>[4];
                mesh: ConstructorParameters<typeof SubMesh>[5];
                renderingMesh: ConstructorParameters<typeof SubMesh>[6];
                createBoundingBox: ConstructorParameters<typeof SubMesh>[7];
                addToMesh: ConstructorParameters<typeof SubMesh>[8];
            },
            SubMesh
        >,
        any
    >;
    trailMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TrailMesh> & Clonable,
            {
                name: ConstructorParameters<typeof TrailMesh>[0];
                generator: ConstructorParameters<typeof TrailMesh>[1];
                scene: ConstructorParameters<typeof TrailMesh>[2];
                diameterOrOptions: ConstructorParameters<typeof TrailMesh>[3];
                length: ConstructorParameters<typeof TrailMesh>[4];
                autoStart: ConstructorParameters<typeof TrailMesh>[5];
            },
            TrailMesh
        >,
        any
    >;
    transformNode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TransformNode> & Clonable,
            {
                name: ConstructorParameters<typeof TransformNode>[0];
                scene: ConstructorParameters<typeof TransformNode>[1];
                isPure: ConstructorParameters<typeof TransformNode>[2];
            },
            TransformNode
        >,
        any
    >;
    getCubeMapTextureData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetCubeMapTextureData>> & MeshProps,
            {
                buffer: Parameters<typeof GetCubeMapTextureData>[0];
                size: Parameters<typeof GetCubeMapTextureData>[1];
                supersample: Parameters<typeof GetCubeMapTextureData>[2];
            },
            ReturnType<typeof GetCubeMapTextureData>
        >,
        any
    >;
    rGBE_ReadHeader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RGBE_ReadHeader>> & MeshProps,
            {
                uint8array: Parameters<typeof RGBE_ReadHeader>[0];
            },
            ReturnType<typeof RGBE_ReadHeader>
        >,
        any
    >;
    rGBE_ReadPixels: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RGBE_ReadPixels>> & MeshProps,
            {
                uint8array: Parameters<typeof RGBE_ReadPixels>[0];
                hdrInfo: Parameters<typeof RGBE_ReadPixels>[1];
            },
            ReturnType<typeof RGBE_ReadPixels>
        >,
        any
    >;
    dynamicFloat32Array: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DynamicFloat32Array>,
            {
                itemCapacity: ConstructorParameters<typeof DynamicFloat32Array>[0];
            },
            DynamicFloat32Array
        >,
        any
    >;
    performanceViewerCollector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerformanceViewerCollector>,
            {
                _scene: ConstructorParameters<typeof PerformanceViewerCollector>[0];
                _enabledStrategyCallbacks: ConstructorParameters<typeof PerformanceViewerCollector>[1];
            },
            PerformanceViewerCollector
        >,
        any
    >;
    buildArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof BuildArray>> & MeshProps,
            {
                size: Parameters<typeof BuildArray>[0];
                itemBuilder: Parameters<typeof BuildArray>[1];
            },
            ReturnType<typeof BuildArray>
        >,
        any
    >;
    buildTuple: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof BuildTuple>> & MeshProps,
            {
                size: Parameters<typeof BuildTuple>[0];
                itemBuilder: Parameters<typeof BuildTuple>[1];
            },
            ReturnType<typeof BuildTuple>
        >,
        any
    >;
    _ObserveArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _ObserveArray>> & MeshProps,
            {
                array: Parameters<typeof _ObserveArray>[0];
                callback: Parameters<typeof _ObserveArray>[1];
            },
            ReturnType<typeof _ObserveArray>
        >,
        any
    >;
    abstractAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AbstractAssetTask>,
            {
                name: ConstructorParameters<typeof AbstractAssetTask>[0];
            },
            AbstractAssetTask
        >,
        any
    >;
    animationAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationAssetTask>,
            {
                name: ConstructorParameters<typeof AnimationAssetTask>[0];
                rootUrl: ConstructorParameters<typeof AnimationAssetTask>[1];
                filename: ConstructorParameters<typeof AnimationAssetTask>[2];
                targetConverter: ConstructorParameters<typeof AnimationAssetTask>[3];
                extension: ConstructorParameters<typeof AnimationAssetTask>[4];
            },
            AnimationAssetTask
        >,
        any
    >;
    assetsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AssetsManager>,
            {
                scene: ConstructorParameters<typeof AssetsManager>[0];
            },
            AssetsManager
        >,
        any
    >;
    assetsProgressEvent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AssetsProgressEvent>,
            {
                remainingCount: ConstructorParameters<typeof AssetsProgressEvent>[0];
                totalCount: ConstructorParameters<typeof AssetsProgressEvent>[1];
                task: ConstructorParameters<typeof AssetsProgressEvent>[2];
            },
            AssetsProgressEvent
        >,
        any
    >;
    binaryFileAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BinaryFileAssetTask>,
            {
                name: ConstructorParameters<typeof BinaryFileAssetTask>[0];
                url: ConstructorParameters<typeof BinaryFileAssetTask>[1];
            },
            BinaryFileAssetTask
        >,
        any
    >;
    containerAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ContainerAssetTask>,
            {
                name: ConstructorParameters<typeof ContainerAssetTask>[0];
                meshesNames: ConstructorParameters<typeof ContainerAssetTask>[1];
                rootUrl: ConstructorParameters<typeof ContainerAssetTask>[2];
                sceneFilename: ConstructorParameters<typeof ContainerAssetTask>[3];
                extension: ConstructorParameters<typeof ContainerAssetTask>[4];
            },
            ContainerAssetTask
        >,
        any
    >;
    cubeTextureAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CubeTextureAssetTask>,
            {
                name: ConstructorParameters<typeof CubeTextureAssetTask>[0];
                url: ConstructorParameters<typeof CubeTextureAssetTask>[1];
                extensions: ConstructorParameters<typeof CubeTextureAssetTask>[2];
                noMipmap: ConstructorParameters<typeof CubeTextureAssetTask>[3];
                files: ConstructorParameters<typeof CubeTextureAssetTask>[4];
                prefiltered: ConstructorParameters<typeof CubeTextureAssetTask>[5];
            },
            CubeTextureAssetTask
        >,
        any
    >;
    equiRectangularCubeTextureAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EquiRectangularCubeTextureAssetTask>,
            {
                name: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[0];
                url: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[1];
                size: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[2];
                noMipmap: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[3];
                gammaSpace: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[4];
            },
            EquiRectangularCubeTextureAssetTask
        >,
        any
    >;
    hDRCubeTextureAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HDRCubeTextureAssetTask>,
            {
                name: ConstructorParameters<typeof HDRCubeTextureAssetTask>[0];
                url: ConstructorParameters<typeof HDRCubeTextureAssetTask>[1];
                size: ConstructorParameters<typeof HDRCubeTextureAssetTask>[2];
                noMipmap: ConstructorParameters<typeof HDRCubeTextureAssetTask>[3];
                generateHarmonics: ConstructorParameters<typeof HDRCubeTextureAssetTask>[4];
                gammaSpace: ConstructorParameters<typeof HDRCubeTextureAssetTask>[5];
                reserved: ConstructorParameters<typeof HDRCubeTextureAssetTask>[6];
            },
            HDRCubeTextureAssetTask
        >,
        any
    >;
    imageAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageAssetTask>,
            {
                name: ConstructorParameters<typeof ImageAssetTask>[0];
                url: ConstructorParameters<typeof ImageAssetTask>[1];
            },
            ImageAssetTask
        >,
        any
    >;
    meshAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshAssetTask>,
            {
                name: ConstructorParameters<typeof MeshAssetTask>[0];
                meshesNames: ConstructorParameters<typeof MeshAssetTask>[1];
                rootUrl: ConstructorParameters<typeof MeshAssetTask>[2];
                sceneFilename: ConstructorParameters<typeof MeshAssetTask>[3];
                extension: ConstructorParameters<typeof MeshAssetTask>[4];
            },
            MeshAssetTask
        >,
        any
    >;
    textFileAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextFileAssetTask>,
            {
                name: ConstructorParameters<typeof TextFileAssetTask>[0];
                url: ConstructorParameters<typeof TextFileAssetTask>[1];
            },
            TextFileAssetTask
        >,
        any
    >;
    textureAssetTask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureAssetTask>,
            {
                name: ConstructorParameters<typeof TextureAssetTask>[0];
                url: ConstructorParameters<typeof TextureAssetTask>[1];
                noMipmap: ConstructorParameters<typeof TextureAssetTask>[2];
                invertY: ConstructorParameters<typeof TextureAssetTask>[3];
                samplingMode: ConstructorParameters<typeof TextureAssetTask>[4];
            },
            TextureAssetTask
        >,
        any
    >;
    asyncLock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AsyncLock>, {}, AsyncLock>, any>;
    getInternalFormatFromBasisFormat: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetInternalFormatFromBasisFormat>> & MeshProps, {}, ReturnType<typeof GetInternalFormatFromBasisFormat>>,
        any
    >;
    loadTextureFromTranscodeResult: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadTextureFromTranscodeResult>> & MeshProps, {}, ReturnType<typeof LoadTextureFromTranscodeResult>>,
        any
    >;
    setBasisTranscoderWorker: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetBasisTranscoderWorker>> & MeshProps, {}, ReturnType<typeof SetBasisTranscoderWorker>>,
        any
    >;
    transcodeAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof TranscodeAsync>> & MeshProps, {}, ReturnType<typeof TranscodeAsync>>, any>;
    bitArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BitArray>,
            {
                size: ConstructorParameters<typeof BitArray>[0];
            },
            BitArray
        >,
        any
    >;
    getEnvironmentBRDFTexture: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetEnvironmentBRDFTexture>> & MeshProps, {}, ReturnType<typeof GetEnvironmentBRDFTexture>>,
        any
    >;
    escapeRegExp: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof EscapeRegExp>> & MeshProps,
            {
                s: Parameters<typeof EscapeRegExp>[0];
            },
            ReturnType<typeof EscapeRegExp>
        >,
        any
    >;
    extractBetweenMarkers: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtractBetweenMarkers>> & MeshProps,
            {
                markerOpen: Parameters<typeof ExtractBetweenMarkers>[0];
                markerClose: Parameters<typeof ExtractBetweenMarkers>[1];
                block: Parameters<typeof ExtractBetweenMarkers>[2];
                startIndex: Parameters<typeof ExtractBetweenMarkers>[3];
            },
            ReturnType<typeof ExtractBetweenMarkers>
        >,
        any
    >;
    findBackward: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof FindBackward>> & MeshProps,
            {
                s: Parameters<typeof FindBackward>[0];
                index: Parameters<typeof FindBackward>[1];
                c: Parameters<typeof FindBackward>[2];
                c2: Parameters<typeof FindBackward>[3];
            },
            ReturnType<typeof FindBackward>
        >,
        any
    >;
    injectStartingAndEndingCode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof InjectStartingAndEndingCode>> & MeshProps,
            {
                code: Parameters<typeof InjectStartingAndEndingCode>[0];
                mainFuncDecl: Parameters<typeof InjectStartingAndEndingCode>[1];
                startingCode: Parameters<typeof InjectStartingAndEndingCode>[2];
                endingCode: Parameters<typeof InjectStartingAndEndingCode>[3];
            },
            ReturnType<typeof InjectStartingAndEndingCode>
        >,
        any
    >;
    isIdentifierChar: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof IsIdentifierChar>> & MeshProps,
            {
                c: Parameters<typeof IsIdentifierChar>[0];
            },
            ReturnType<typeof IsIdentifierChar>
        >,
        any
    >;
    removeComments: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RemoveComments>> & MeshProps,
            {
                block: Parameters<typeof RemoveComments>[0];
            },
            ReturnType<typeof RemoveComments>
        >,
        any
    >;
    skipWhitespaces: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof SkipWhitespaces>> & MeshProps,
            {
                s: Parameters<typeof SkipWhitespaces>[0];
                index: Parameters<typeof SkipWhitespaces>[1];
            },
            ReturnType<typeof SkipWhitespaces>
        >,
        any
    >;
    copyTextureToTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CopyTextureToTexture>,
            {
                engine: ConstructorParameters<typeof CopyTextureToTexture>[0];
                isDepthTexture: ConstructorParameters<typeof CopyTextureToTexture>[1];
            },
            CopyTextureToTexture
        >,
        any
    >;
    generateBase64StringFromPixelData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromPixelData>> & MeshProps,
            {
                pixels: Parameters<typeof GenerateBase64StringFromPixelData>[0];
                size: Parameters<typeof GenerateBase64StringFromPixelData>[1];
                invertY: Parameters<typeof GenerateBase64StringFromPixelData>[2];
            },
            ReturnType<typeof GenerateBase64StringFromPixelData>
        >,
        any
    >;
    generateBase64StringFromTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromTexture>> & MeshProps,
            {
                texture: Parameters<typeof GenerateBase64StringFromTexture>[0];
                faceIndex: Parameters<typeof GenerateBase64StringFromTexture>[1];
                level: Parameters<typeof GenerateBase64StringFromTexture>[2];
            },
            ReturnType<typeof GenerateBase64StringFromTexture>
        >,
        any
    >;
    generateBase64StringFromTextureAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromTextureAsync>> & MeshProps,
            {
                texture: Parameters<typeof GenerateBase64StringFromTextureAsync>[0];
                faceIndex: Parameters<typeof GenerateBase64StringFromTextureAsync>[1];
                level: Parameters<typeof GenerateBase64StringFromTextureAsync>[2];
            },
            ReturnType<typeof GenerateBase64StringFromTextureAsync>
        >,
        any
    >;
    createYieldingScheduler: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof createYieldingScheduler>> & MeshProps,
            {
                yieldAfterMS: Parameters<typeof createYieldingScheduler>[0];
            },
            ReturnType<typeof createYieldingScheduler>
        >,
        any
    >;
    inlineScheduler: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof inlineScheduler>> & MeshProps,
            {
                coroutine: Parameters<typeof inlineScheduler>[0];
                onStep: Parameters<typeof inlineScheduler>[1];
                onError: Parameters<typeof inlineScheduler>[2];
            },
            ReturnType<typeof inlineScheduler>
        >,
        any
    >;
    makeAsyncFunction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof makeAsyncFunction>> & MeshProps,
            {
                coroutineFactory: Parameters<typeof makeAsyncFunction>[0];
                scheduler: Parameters<typeof makeAsyncFunction>[1];
                abortSignal: Parameters<typeof makeAsyncFunction>[2];
            },
            ReturnType<typeof makeAsyncFunction>
        >,
        any
    >;
    makeSyncFunction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof makeSyncFunction>> & MeshProps,
            {
                coroutineFactory: Parameters<typeof makeSyncFunction>[0];
                abortSignal: Parameters<typeof makeSyncFunction>[1];
            },
            ReturnType<typeof makeSyncFunction>
        >,
        any
    >;
    runCoroutine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutine>> & MeshProps,
            {
                coroutine: Parameters<typeof runCoroutine>[0];
                scheduler: Parameters<typeof runCoroutine>[1];
                onSuccess: Parameters<typeof runCoroutine>[2];
                onError: Parameters<typeof runCoroutine>[3];
                abortSignal: Parameters<typeof runCoroutine>[4];
            },
            ReturnType<typeof runCoroutine>
        >,
        any
    >;
    runCoroutineAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutineAsync>> & MeshProps,
            {
                coroutine: Parameters<typeof runCoroutineAsync>[0];
                scheduler: Parameters<typeof runCoroutineAsync>[1];
                abortSignal: Parameters<typeof runCoroutineAsync>[2];
            },
            ReturnType<typeof runCoroutineAsync>
        >,
        any
    >;
    runCoroutineSync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutineSync>> & MeshProps,
            {
                coroutine: Parameters<typeof runCoroutineSync>[0];
                abortSignal: Parameters<typeof runCoroutineSync>[1];
            },
            ReturnType<typeof runCoroutineSync>
        >,
        any
    >;
    dataReader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DataReader>,
            {
                buffer: ConstructorParameters<typeof DataReader>[0];
            },
            DataReader
        >,
        any
    >;
    expandToProperty: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof expandToProperty>> & MeshProps,
            {
                callback: Parameters<typeof expandToProperty>[0];
                targetKey: Parameters<typeof expandToProperty>[1];
            },
            ReturnType<typeof expandToProperty>
        >,
        any
    >;
    nativeOverride: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof nativeOverride>> & MeshProps,
            {
                target: Parameters<typeof nativeOverride>[0];
                propertyKey: Parameters<typeof nativeOverride>[1];
                descriptor: Parameters<typeof nativeOverride>[2];
                predicate: Parameters<typeof nativeOverride>[3];
            },
            ReturnType<typeof nativeOverride>
        >,
        any
    >;
    serialize: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serialize>> & MeshProps,
            {
                sourceName: Parameters<typeof serialize>[0];
            },
            ReturnType<typeof serialize>
        >,
        any
    >;
    serializeAsCameraReference: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsCameraReference>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsCameraReference>[0];
            },
            ReturnType<typeof serializeAsCameraReference>
        >,
        any
    >;
    serializeAsColor3: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColor3>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsColor3>[0];
            },
            ReturnType<typeof serializeAsColor3>
        >,
        any
    >;
    serializeAsColor4: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColor4>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsColor4>[0];
            },
            ReturnType<typeof serializeAsColor4>
        >,
        any
    >;
    serializeAsColorCurves: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColorCurves>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsColorCurves>[0];
            },
            ReturnType<typeof serializeAsColorCurves>
        >,
        any
    >;
    serializeAsFresnelParameters: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsFresnelParameters>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsFresnelParameters>[0];
            },
            ReturnType<typeof serializeAsFresnelParameters>
        >,
        any
    >;
    serializeAsImageProcessingConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsImageProcessingConfiguration>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsImageProcessingConfiguration>[0];
            },
            ReturnType<typeof serializeAsImageProcessingConfiguration>
        >,
        any
    >;
    serializeAsMatrix: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsMatrix>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsMatrix>[0];
            },
            ReturnType<typeof serializeAsMatrix>
        >,
        any
    >;
    serializeAsMeshReference: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsMeshReference>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsMeshReference>[0];
            },
            ReturnType<typeof serializeAsMeshReference>
        >,
        any
    >;
    serializeAsQuaternion: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsQuaternion>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsQuaternion>[0];
            },
            ReturnType<typeof serializeAsQuaternion>
        >,
        any
    >;
    serializeAsTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsTexture>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsTexture>[0];
            },
            ReturnType<typeof serializeAsTexture>
        >,
        any
    >;
    serializeAsVector2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsVector2>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsVector2>[0];
            },
            ReturnType<typeof serializeAsVector2>
        >,
        any
    >;
    serializeAsVector3: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsVector3>> & MeshProps,
            {
                sourceName: Parameters<typeof serializeAsVector3>[0];
            },
            ReturnType<typeof serializeAsVector3>
        >,
        any
    >;
    deepMerge: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof deepMerge>> & MeshProps,
            {
                objects: Parameters<typeof deepMerge>[0];
            },
            ReturnType<typeof deepMerge>
        >,
        any
    >;
    deferred: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Deferred>, {}, Deferred>, any>;
    depthReducer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthReducer>,
            {
                camera: ConstructorParameters<typeof DepthReducer>[0];
            },
            DepthReducer
        >,
        any
    >;
    _WarnImport: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _WarnImport>> & MeshProps,
            {
                name: Parameters<typeof _WarnImport>[0];
                warnOnce: Parameters<typeof _WarnImport>[1];
            },
            ReturnType<typeof _WarnImport>
        >,
        any
    >;
    getDOMTextContent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetDOMTextContent>> & MeshProps,
            {
                element: Parameters<typeof GetDOMTextContent>[0];
            },
            ReturnType<typeof GetDOMTextContent>
        >,
        any
    >;
    isDocumentAvailable: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsDocumentAvailable>> & MeshProps, {}, ReturnType<typeof IsDocumentAvailable>>,
        any
    >;
    isNavigatorAvailable: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsNavigatorAvailable>> & MeshProps, {}, ReturnType<typeof IsNavigatorAvailable>>,
        any
    >;
    isWindowObjectExist: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsWindowObjectExist>> & MeshProps, {}, ReturnType<typeof IsWindowObjectExist>>,
        any
    >;
    dispose: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Dispose>> & MeshProps, {}, ReturnType<typeof Dispose>>, any>;
    dumpData: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof DumpData>> & MeshProps,
            {
                width: Parameters<typeof DumpData>[0];
                height: Parameters<typeof DumpData>[1];
                data: Parameters<typeof DumpData>[2];
                successCallback: Parameters<typeof DumpData>[3];
                mimeType: Parameters<typeof DumpData>[4];
                fileName: Parameters<typeof DumpData>[5];
                invertY: Parameters<typeof DumpData>[6];
                toArrayBuffer: Parameters<typeof DumpData>[7];
                quality: Parameters<typeof DumpData>[8];
            },
            ReturnType<typeof DumpData>
        >,
        any
    >;
    dumpDataAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof DumpDataAsync>> & MeshProps,
            {
                width: Parameters<typeof DumpDataAsync>[0];
                height: Parameters<typeof DumpDataAsync>[1];
                data: Parameters<typeof DumpDataAsync>[2];
                mimeType: Parameters<typeof DumpDataAsync>[3];
                fileName: Parameters<typeof DumpDataAsync>[4];
                invertY: Parameters<typeof DumpDataAsync>[5];
                toArrayBuffer: Parameters<typeof DumpDataAsync>[6];
                quality: Parameters<typeof DumpDataAsync>[7];
            },
            ReturnType<typeof DumpDataAsync>
        >,
        any
    >;
    dumpFramebuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof DumpFramebuffer>> & MeshProps,
            {
                width: Parameters<typeof DumpFramebuffer>[0];
                height: Parameters<typeof DumpFramebuffer>[1];
                engine: Parameters<typeof DumpFramebuffer>[2];
                successCallback: Parameters<typeof DumpFramebuffer>[3];
                mimeType: Parameters<typeof DumpFramebuffer>[4];
                fileName: Parameters<typeof DumpFramebuffer>[5];
                quality: Parameters<typeof DumpFramebuffer>[6];
            },
            ReturnType<typeof DumpFramebuffer>
        >,
        any
    >;
    envTextureAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateEnvTextureAsync>> & MeshProps,
            {
                texture: Parameters<typeof CreateEnvTextureAsync>[0];
                options: Parameters<typeof CreateEnvTextureAsync>[1];
            },
            ReturnType<typeof CreateEnvTextureAsync>
        >,
        any
    >;
    imageDataArrayBufferViews: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateImageDataArrayBufferViews>> & MeshProps,
            {
                data: Parameters<typeof CreateImageDataArrayBufferViews>[0];
                info: Parameters<typeof CreateImageDataArrayBufferViews>[1];
            },
            ReturnType<typeof CreateImageDataArrayBufferViews>
        >,
        any
    >;
    getEnvInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetEnvInfo>> & MeshProps,
            {
                data: Parameters<typeof GetEnvInfo>[0];
            },
            ReturnType<typeof GetEnvInfo>
        >,
        any
    >;
    uploadEnvLevelsAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof UploadEnvLevelsAsync>> & MeshProps,
            {
                texture: Parameters<typeof UploadEnvLevelsAsync>[0];
                data: Parameters<typeof UploadEnvLevelsAsync>[1];
                info: Parameters<typeof UploadEnvLevelsAsync>[2];
            },
            ReturnType<typeof UploadEnvLevelsAsync>
        >,
        any
    >;
    uploadEnvSpherical: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof UploadEnvSpherical>> & MeshProps,
            {
                texture: Parameters<typeof UploadEnvSpherical>[0];
                info: Parameters<typeof UploadEnvSpherical>[1];
            },
            ReturnType<typeof UploadEnvSpherical>
        >,
        any
    >;
    uploadLevelsAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof UploadLevelsAsync>> & MeshProps,
            {
                texture: Parameters<typeof UploadLevelsAsync>[0];
                imageData: Parameters<typeof UploadLevelsAsync>[1];
                imageType: Parameters<typeof UploadLevelsAsync>[2];
            },
            ReturnType<typeof UploadLevelsAsync>
        >,
        any
    >;
    _UpdateRGBDAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof _UpdateRGBDAsync>> & MeshProps,
            {
                internalTexture: Parameters<typeof _UpdateRGBDAsync>[0];
                data: Parameters<typeof _UpdateRGBDAsync>[1];
                sphericalPolynomial: Parameters<typeof _UpdateRGBDAsync>[2];
                lodScale: Parameters<typeof _UpdateRGBDAsync>[3];
                lodOffset: Parameters<typeof _UpdateRGBDAsync>[4];
            },
            ReturnType<typeof _UpdateRGBDAsync>
        >,
        any
    >;
    normalizeEnvInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof normalizeEnvInfo>> & MeshProps,
            {
                info: Parameters<typeof normalizeEnvInfo>[0];
            },
            ReturnType<typeof normalizeEnvInfo>
        >,
        any
    >;
    captureEquirectangularFromScene: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof captureEquirectangularFromScene>> & MeshProps,
            {
                scene: Parameters<typeof captureEquirectangularFromScene>[0];
                options: Parameters<typeof captureEquirectangularFromScene>[1];
            },
            ReturnType<typeof captureEquirectangularFromScene>
        >,
        any
    >;
    runtimeError: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RuntimeError>,
            {
                message: ConstructorParameters<typeof RuntimeError>[0];
                errorCode: ConstructorParameters<typeof RuntimeError>[1];
                innerError: ConstructorParameters<typeof RuntimeError>[2];
            },
            RuntimeError
        >,
        any
    >;
    decodeBase64UrlToBinary: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64UrlToBinary>> & MeshProps,
            {
                uri: Parameters<typeof DecodeBase64UrlToBinary>[0];
            },
            ReturnType<typeof DecodeBase64UrlToBinary>
        >,
        any
    >;
    decodeBase64UrlToString: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64UrlToString>> & MeshProps, {}, ReturnType<typeof DecodeBase64UrlToString>>,
        any
    >;
    isBase64DataUrl: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsBase64DataUrl>> & MeshProps, {}, ReturnType<typeof IsBase64DataUrl>>, any>;
    isFileURL: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsFileURL>> & MeshProps, {}, ReturnType<typeof IsFileURL>>, any>;
    loadFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadFile>> & MeshProps, {}, ReturnType<typeof LoadFile>>, any>;
    loadFileError: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LoadFileError>,
            {
                message: ConstructorParameters<typeof LoadFileError>[0];
                object: ConstructorParameters<typeof LoadFileError>[1];
            },
            LoadFileError
        >,
        any
    >;
    loadImage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadImage>> & MeshProps, {}, ReturnType<typeof LoadImage>>, any>;
    readFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ReadFile>> & MeshProps, {}, ReturnType<typeof ReadFile>>, any>;
    readFileError: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReadFileError>,
            {
                message: ConstructorParameters<typeof ReadFileError>[0];
                file: ConstructorParameters<typeof ReadFileError>[1];
            },
            ReadFileError
        >,
        any
    >;
    requestFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RequestFile>> & MeshProps, {}, ReturnType<typeof RequestFile>>, any>;
    requestFileError: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RequestFileError>,
            {
                message: ConstructorParameters<typeof RequestFileError>[0];
                request: ConstructorParameters<typeof RequestFileError>[1];
            },
            RequestFileError
        >,
        any
    >;
    setCorsBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetCorsBehavior>> & MeshProps, {}, ReturnType<typeof SetCorsBehavior>>, any>;
    testBase64DataUrl: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof TestBase64DataUrl>> & MeshProps, {}, ReturnType<typeof TestBase64DataUrl>>,
        any
    >;
    _injectLTSFileTools: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _injectLTSFileTools>> & MeshProps, {}, ReturnType<typeof _injectLTSFileTools>>,
        any
    >;
    filesInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FilesInput>,
            {
                engine: ConstructorParameters<typeof FilesInput>[0];
                scene: ConstructorParameters<typeof FilesInput>[1];
                sceneLoadedCallback: ConstructorParameters<typeof FilesInput>[2];
                progressCallback: ConstructorParameters<typeof FilesInput>[3];
                additionalRenderLoopLogicCallback: ConstructorParameters<typeof FilesInput>[4];
                textureLoadingCallback: ConstructorParameters<typeof FilesInput>[5];
                startingProcessingFilesCallback: ConstructorParameters<typeof FilesInput>[6];
                onReloadCallback: ConstructorParameters<typeof FilesInput>[7];
                errorCallback: ConstructorParameters<typeof FilesInput>[8];
                useAppend: ConstructorParameters<typeof FilesInput>[9];
                dontInjectRenderLoop: ConstructorParameters<typeof FilesInput>[10];
            },
            FilesInput
        >,
        any
    >;
    color3Gradient: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Color3Gradient>,
            {
                gradient: ConstructorParameters<typeof Color3Gradient>[0];
                color: ConstructorParameters<typeof Color3Gradient>[1];
            },
            Color3Gradient
        >,
        any
    >;
    colorGradient: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorGradient>,
            {
                gradient: ConstructorParameters<typeof ColorGradient>[0];
                color1: ConstructorParameters<typeof ColorGradient>[1];
                color2: ConstructorParameters<typeof ColorGradient>[2];
            },
            ColorGradient
        >,
        any
    >;
    factorGradient: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FactorGradient>,
            {
                gradient: ConstructorParameters<typeof FactorGradient>[0];
                factor1: ConstructorParameters<typeof FactorGradient>[1];
                factor2: ConstructorParameters<typeof FactorGradient>[2];
            },
            FactorGradient
        >,
        any
    >;
    randomGUID: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RandomGUID>> & MeshProps, {}, ReturnType<typeof RandomGUID>>, any>;
    khronosTextureContainer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KhronosTextureContainer>,
            {
                data: ConstructorParameters<typeof KhronosTextureContainer>[0];
                facesExpected: ConstructorParameters<typeof KhronosTextureContainer>[1];
            },
            KhronosTextureContainer
        >,
        any
    >;
    defaultKTX2DecoderOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultKTX2DecoderOptions>, {}, DefaultKTX2DecoderOptions>, any>;
    khronosTextureContainer2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KhronosTextureContainer2>,
            {
                engine: ConstructorParameters<typeof KhronosTextureContainer2>[0];
                numWorkersOrOptions: ConstructorParameters<typeof KhronosTextureContainer2>[1];
            },
            KhronosTextureContainer2
        >,
        any
    >;
    applyConfig: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof applyConfig>> & MeshProps,
            {
                urls: Parameters<typeof applyConfig>[0];
                binariesAndModulesContainer: Parameters<typeof applyConfig>[1];
            },
            ReturnType<typeof applyConfig>
        >,
        any
    >;
    meshExploder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshExploder>,
            {
                meshes: ConstructorParameters<typeof MeshExploder>[0];
                centerMesh: ConstructorParameters<typeof MeshExploder>[1];
            },
            MeshExploder
        >,
        any
    >;
    minMaxReducer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MinMaxReducer>,
            {
                camera: ConstructorParameters<typeof MinMaxReducer>[0];
            },
            MinMaxReducer
        >,
        any
    >;
    eventState: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EventState>,
            {
                mask: ConstructorParameters<typeof EventState>[0];
                skipNextObservers: ConstructorParameters<typeof EventState>[1];
                target: ConstructorParameters<typeof EventState>[2];
                currentTarget: ConstructorParameters<typeof EventState>[3];
            },
            EventState
        >,
        any
    >;
    observable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Observable> & Clonable,
            {
                onObserverAdded: ConstructorParameters<typeof Observable>[0];
                notifyIfTriggered: ConstructorParameters<typeof Observable>[1];
            },
            Observable
        >,
        any
    >;
    observer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Observer>,
            {
                callback: ConstructorParameters<typeof Observer>[0];
                mask: ConstructorParameters<typeof Observer>[1];
                scope: ConstructorParameters<typeof Observer>[2];
            },
            Observer
        >,
        any
    >;
    perfCounter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerfCounter>, {}, PerfCounter>, any>;
    performanceMonitor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerformanceMonitor>,
            {
                frameSampleSize: ConstructorParameters<typeof PerformanceMonitor>[0];
            },
            PerformanceMonitor
        >,
        any
    >;
    rollingAverage: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RollingAverage>,
            {
                length: ConstructorParameters<typeof RollingAverage>[0];
            },
            RollingAverage
        >,
        any
    >;
    pressureObserverWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PressureObserverWrapper>,
            {
                options: ConstructorParameters<typeof PressureObserverWrapper>[0];
            },
            PressureObserverWrapper
        >,
        any
    >;
    reflector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Reflector>,
            {
                scene: ConstructorParameters<typeof Reflector>[0];
                hostname: ConstructorParameters<typeof Reflector>[1];
                port: ConstructorParameters<typeof Reflector>[2];
            },
            Reflector
        >,
        any
    >;
    hardwareScalingOptimization: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HardwareScalingOptimization>,
            {
                priority: ConstructorParameters<typeof HardwareScalingOptimization>[0];
                maximumScale: ConstructorParameters<typeof HardwareScalingOptimization>[1];
                step: ConstructorParameters<typeof HardwareScalingOptimization>[2];
            },
            HardwareScalingOptimization
        >,
        any
    >;
    mergeMeshesOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MergeMeshesOptimization>, {}, MergeMeshesOptimization>, any>;
    sceneOptimization: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneOptimization>,
            {
                priority: ConstructorParameters<typeof SceneOptimization>[0];
            },
            SceneOptimization
        >,
        any
    >;
    sceneOptimizer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneOptimizer>,
            {
                scene: ConstructorParameters<typeof SceneOptimizer>[0];
                options: ConstructorParameters<typeof SceneOptimizer>[1];
                autoGeneratePriorities: ConstructorParameters<typeof SceneOptimizer>[2];
                improvementMode: ConstructorParameters<typeof SceneOptimizer>[3];
            },
            SceneOptimizer
        >,
        any
    >;
    sceneOptimizerOptions: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneOptimizerOptions>,
            {
                targetFrameRate: ConstructorParameters<typeof SceneOptimizerOptions>[0];
                trackerDuration: ConstructorParameters<typeof SceneOptimizerOptions>[1];
            },
            SceneOptimizerOptions
        >,
        any
    >;
    textureOptimization: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureOptimization>,
            {
                priority: ConstructorParameters<typeof TextureOptimization>[0];
                maximumSize: ConstructorParameters<typeof TextureOptimization>[1];
                step: ConstructorParameters<typeof TextureOptimization>[2];
            },
            TextureOptimization
        >,
        any
    >;
    sceneRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneRecorder>, {}, SceneRecorder>, any>;
    screenshot: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshot>> & MeshProps,
            {
                engine: Parameters<typeof CreateScreenshot>[0];
                camera: Parameters<typeof CreateScreenshot>[1];
                size: Parameters<typeof CreateScreenshot>[2];
                successCallback: Parameters<typeof CreateScreenshot>[3];
                mimeType: Parameters<typeof CreateScreenshot>[4];
                forceDownload: Parameters<typeof CreateScreenshot>[5];
                quality: Parameters<typeof CreateScreenshot>[6];
                useFill: Parameters<typeof CreateScreenshot>[7];
            },
            ReturnType<typeof CreateScreenshot>
        >,
        any
    >;
    screenshotAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotAsync>> & MeshProps,
            {
                engine: Parameters<typeof CreateScreenshotAsync>[0];
                camera: Parameters<typeof CreateScreenshotAsync>[1];
                size: Parameters<typeof CreateScreenshotAsync>[2];
                mimeType: Parameters<typeof CreateScreenshotAsync>[3];
                quality: Parameters<typeof CreateScreenshotAsync>[4];
                useFill: Parameters<typeof CreateScreenshotAsync>[5];
            },
            ReturnType<typeof CreateScreenshotAsync>
        >,
        any
    >;
    screenshotUsingRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotUsingRenderTarget>> & MeshProps,
            {
                engine: Parameters<typeof CreateScreenshotUsingRenderTarget>[0];
                camera: Parameters<typeof CreateScreenshotUsingRenderTarget>[1];
                size: Parameters<typeof CreateScreenshotUsingRenderTarget>[2];
                successCallback: Parameters<typeof CreateScreenshotUsingRenderTarget>[3];
                mimeType: Parameters<typeof CreateScreenshotUsingRenderTarget>[4];
                samples: Parameters<typeof CreateScreenshotUsingRenderTarget>[5];
                antialiasing: Parameters<typeof CreateScreenshotUsingRenderTarget>[6];
                fileName: Parameters<typeof CreateScreenshotUsingRenderTarget>[7];
                renderSprites: Parameters<typeof CreateScreenshotUsingRenderTarget>[8];
                enableStencilBuffer: Parameters<typeof CreateScreenshotUsingRenderTarget>[9];
                useLayerMask: Parameters<typeof CreateScreenshotUsingRenderTarget>[10];
                quality: Parameters<typeof CreateScreenshotUsingRenderTarget>[11];
                customizeTexture: Parameters<typeof CreateScreenshotUsingRenderTarget>[12];
            },
            ReturnType<typeof CreateScreenshotUsingRenderTarget>
        >,
        any
    >;
    screenshotUsingRenderTargetAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotUsingRenderTargetAsync>> & MeshProps,
            {
                engine: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[0];
                camera: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[1];
                size: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[2];
                mimeType: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[3];
                samples: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[4];
                antialiasing: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[5];
                fileName: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[6];
                renderSprites: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[7];
                enableStencilBuffer: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[8];
                useLayerMask: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[9];
                quality: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[10];
                customizeTexture: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[11];
            },
            ReturnType<typeof CreateScreenshotUsingRenderTargetAsync>
        >,
        any
    >;
    screenshotWithResizeAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotWithResizeAsync>> & MeshProps,
            {
                engine: Parameters<typeof CreateScreenshotWithResizeAsync>[0];
                camera: Parameters<typeof CreateScreenshotWithResizeAsync>[1];
                width: Parameters<typeof CreateScreenshotWithResizeAsync>[2];
                height: Parameters<typeof CreateScreenshotWithResizeAsync>[3];
                mimeType: Parameters<typeof CreateScreenshotWithResizeAsync>[4];
                quality: Parameters<typeof CreateScreenshotWithResizeAsync>[5];
                useFill: Parameters<typeof CreateScreenshotWithResizeAsync>[6];
            },
            ReturnType<typeof CreateScreenshotWithResizeAsync>
        >,
        any
    >;
    smartArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SmartArray>,
            {
                capacity: ConstructorParameters<typeof SmartArray>[0];
            },
            SmartArray
        >,
        any
    >;
    smartArrayNoDuplicate: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmartArrayNoDuplicate>, {}, SmartArrayNoDuplicate>, any>;
    snapshotRenderingHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SnapshotRenderingHelper>,
            {
                scene: ConstructorParameters<typeof SnapshotRenderingHelper>[0];
                options: ConstructorParameters<typeof SnapshotRenderingHelper>[1];
            },
            SnapshotRenderingHelper
        >,
        any
    >;
    stringDictionary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StringDictionary>, {}, StringDictionary>, any>;
    decode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Decode>> & MeshProps, {}, ReturnType<typeof Decode>>, any>;
    decodeBase64ToBinary: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64ToBinary>> & MeshProps, {}, ReturnType<typeof DecodeBase64ToBinary>>,
        any
    >;
    decodeBase64ToString: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64ToString>> & MeshProps, {}, ReturnType<typeof DecodeBase64ToString>>,
        any
    >;
    encodeArrayBufferToBase64: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof EncodeArrayBufferToBase64>> & MeshProps, {}, ReturnType<typeof EncodeArrayBufferToBase64>>,
        any
    >;
    endsWith: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof EndsWith>> & MeshProps, {}, ReturnType<typeof EndsWith>>, any>;
    padNumber: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PadNumber>> & MeshProps, {}, ReturnType<typeof PadNumber>>, any>;
    startsWith: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof StartsWith>> & MeshProps, {}, ReturnType<typeof StartsWith>>, any>;
    applyPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ApplyPostProcess>> & MeshProps,
            {
                postProcessName: Parameters<typeof ApplyPostProcess>[0];
                internalTexture: Parameters<typeof ApplyPostProcess>[1];
                scene: Parameters<typeof ApplyPostProcess>[2];
                type: Parameters<typeof ApplyPostProcess>[3];
                samplingMode: Parameters<typeof ApplyPostProcess>[4];
                format: Parameters<typeof ApplyPostProcess>[5];
                width: Parameters<typeof ApplyPostProcess>[6];
                height: Parameters<typeof ApplyPostProcess>[7];
            },
            ReturnType<typeof ApplyPostProcess>
        >,
        any
    >;
    resizedCopy: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateResizedCopy>> & MeshProps,
            {
                texture: Parameters<typeof CreateResizedCopy>[0];
                width: Parameters<typeof CreateResizedCopy>[1];
                height: Parameters<typeof CreateResizedCopy>[2];
                useBilinearMode: Parameters<typeof CreateResizedCopy>[3];
            },
            ReturnType<typeof CreateResizedCopy>
        >,
        any
    >;
    fromHalfFloat: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof FromHalfFloat>> & MeshProps,
            {
                value: Parameters<typeof FromHalfFloat>[0];
            },
            ReturnType<typeof FromHalfFloat>
        >,
        any
    >;
    getTextureDataAsync: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetTextureDataAsync>> & MeshProps,
            {
                texture: Parameters<typeof GetTextureDataAsync>[0];
                width: Parameters<typeof GetTextureDataAsync>[1];
                height: Parameters<typeof GetTextureDataAsync>[2];
                face: Parameters<typeof GetTextureDataAsync>[3];
                lod: Parameters<typeof GetTextureDataAsync>[4];
            },
            ReturnType<typeof GetTextureDataAsync>
        >,
        any
    >;
    toHalfFloat: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ToHalfFloat>> & MeshProps,
            {
                value: Parameters<typeof ToHalfFloat>[0];
            },
            ReturnType<typeof ToHalfFloat>
        >,
        any
    >;
    getTGAHeader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetTGAHeader>> & MeshProps,
            {
                data: Parameters<typeof GetTGAHeader>[0];
            },
            ReturnType<typeof GetTGAHeader>
        >,
        any
    >;
    uploadContent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof UploadContent>> & MeshProps,
            {
                texture: Parameters<typeof UploadContent>[0];
                data: Parameters<typeof UploadContent>[1];
            },
            ReturnType<typeof UploadContent>
        >,
        any
    >;
    advancedTimer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AdvancedTimer>,
            {
                options: ConstructorParameters<typeof AdvancedTimer>[0];
            },
            AdvancedTimer
        >,
        any
    >;
    setAndStartTimer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof setAndStartTimer>> & MeshProps,
            {
                options: Parameters<typeof setAndStartTimer>[0];
            },
            ReturnType<typeof setAndStartTimer>
        >,
        any
    >;
    _retryWithInterval: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _retryWithInterval>> & MeshProps, {}, ReturnType<typeof _retryWithInterval>>,
        any
    >;
    asyncLoop: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AsyncLoop>,
            {
                iterations: ConstructorParameters<typeof AsyncLoop>[0];
                func: ConstructorParameters<typeof AsyncLoop>[1];
                successCallback: ConstructorParameters<typeof AsyncLoop>[2];
                offset: ConstructorParameters<typeof AsyncLoop>[3];
            },
            AsyncLoop
        >,
        any
    >;
    className: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof className>> & MeshProps,
            {
                name: Parameters<typeof className>[0];
                module: Parameters<typeof className>[1];
            },
            ReturnType<typeof className>
        >,
        any
    >;
    trajectory: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Trajectory>,
            {
                segmentLength: ConstructorParameters<typeof Trajectory>[0];
            },
            Trajectory
        >,
        any
    >;
    trajectoryClassifier: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrajectoryClassifier>, {}, TrajectoryClassifier>, any>;
    getClass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetClass>> & MeshProps,
            {
                fqdn: Parameters<typeof GetClass>[0];
            },
            ReturnType<typeof GetClass>
        >,
        any
    >;
    getClassName: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof GetClassName>> & MeshProps,
            {
                obj: Parameters<typeof GetClassName>[0];
            },
            ReturnType<typeof GetClassName>
        >,
        any
    >;
    registerClass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterClass>> & MeshProps,
            {
                className: Parameters<typeof RegisterClass>[0];
                type: Parameters<typeof RegisterClass>[1];
            },
            ReturnType<typeof RegisterClass>
        >,
        any
    >;
    videoRecorder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VideoRecorder>,
            {
                engine: ConstructorParameters<typeof VideoRecorder>[0];
                options: ConstructorParameters<typeof VideoRecorder>[1];
            },
            VideoRecorder
        >,
        any
    >;
    virtualJoystick: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VirtualJoystick>,
            {
                leftJoystick: ConstructorParameters<typeof VirtualJoystick>[0];
                customizations: ConstructorParameters<typeof VirtualJoystick>[1];
            },
            VirtualJoystick
        >,
        any
    >;
    webRequest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebRequest>, {}, WebRequest>, any>;
    autoReleaseWorkerPool: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AutoReleaseWorkerPool>,
            {
                maxWorkers: ConstructorParameters<typeof AutoReleaseWorkerPool>[0];
                createWorkerAsync: ConstructorParameters<typeof AutoReleaseWorkerPool>[1];
                options: ConstructorParameters<typeof AutoReleaseWorkerPool>[2];
            },
            AutoReleaseWorkerPool
        >,
        any
    >;
    workerPool: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WorkerPool>,
            {
                workers: ConstructorParameters<typeof WorkerPool>[0];
            },
            WorkerPool
        >,
        any
    >;
    morphTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTarget> & Clonable,
            {
                name: ConstructorParameters<typeof MorphTarget>[0];
                influence: ConstructorParameters<typeof MorphTarget>[1];
                scene: ConstructorParameters<typeof MorphTarget>[2];
            },
            MorphTarget
        >,
        any
    >;
    morphTargetManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTargetManager> & Clonable,
            {
                scene: ConstructorParameters<typeof MorphTargetManager>[0];
            },
            MorphTargetManager
        >,
        any
    >;
    recastJSCrowd: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RecastJSCrowd>,
            {
                plugin: ConstructorParameters<typeof RecastJSCrowd>[0];
                maxAgents: ConstructorParameters<typeof RecastJSCrowd>[1];
                maxAgentRadius: ConstructorParameters<typeof RecastJSCrowd>[2];
                scene: ConstructorParameters<typeof RecastJSCrowd>[3];
            },
            RecastJSCrowd
        >,
        any
    >;
    recastJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RecastJSPlugin>,
            {
                recastInjection: ConstructorParameters<typeof RecastJSPlugin>[0];
            },
            RecastJSPlugin
        >,
        any
    >;
    database: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Database>,
            {
                urlToScene: ConstructorParameters<typeof Database>[0];
                callbackManifestChecked: ConstructorParameters<typeof Database>[1];
                disableManifestCheck: ConstructorParameters<typeof Database>[2];
            },
            Database
        >,
        any
    >;
    boxParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxParticleEmitter> & Clonable, {}, BoxParticleEmitter>, any>;
    coneDirectedParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConeDirectedParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof ConeDirectedParticleEmitter>[0];
                angle: ConstructorParameters<typeof ConeDirectedParticleEmitter>[1];
                direction1: ConstructorParameters<typeof ConeDirectedParticleEmitter>[2];
                direction2: ConstructorParameters<typeof ConeDirectedParticleEmitter>[3];
            },
            ConeDirectedParticleEmitter
        >,
        any
    >;
    coneParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConeParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof ConeParticleEmitter>[0];
                angle: ConstructorParameters<typeof ConeParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof ConeParticleEmitter>[2];
            },
            ConeParticleEmitter
        >,
        any
    >;
    customParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomParticleEmitter> & Clonable, {}, CustomParticleEmitter>, any>;
    cylinderDirectedParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CylinderDirectedParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[0];
                height: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[1];
                radiusRange: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[2];
                direction1: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[3];
                direction2: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[4];
            },
            CylinderDirectedParticleEmitter
        >,
        any
    >;
    cylinderParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CylinderParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof CylinderParticleEmitter>[0];
                height: ConstructorParameters<typeof CylinderParticleEmitter>[1];
                radiusRange: ConstructorParameters<typeof CylinderParticleEmitter>[2];
                directionRandomizer: ConstructorParameters<typeof CylinderParticleEmitter>[3];
            },
            CylinderParticleEmitter
        >,
        any
    >;
    hemisphericParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HemisphericParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof HemisphericParticleEmitter>[0];
                radiusRange: ConstructorParameters<typeof HemisphericParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof HemisphericParticleEmitter>[2];
            },
            HemisphericParticleEmitter
        >,
        any
    >;
    meshParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshParticleEmitter> & Clonable,
            {
                mesh: ConstructorParameters<typeof MeshParticleEmitter>[0];
            },
            MeshParticleEmitter
        >,
        any
    >;
    pointParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointParticleEmitter> & Clonable, {}, PointParticleEmitter>, any>;
    sphereDirectedParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SphereDirectedParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof SphereDirectedParticleEmitter>[0];
                direction1: ConstructorParameters<typeof SphereDirectedParticleEmitter>[1];
                direction2: ConstructorParameters<typeof SphereDirectedParticleEmitter>[2];
            },
            SphereDirectedParticleEmitter
        >,
        any
    >;
    sphereParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SphereParticleEmitter> & Clonable,
            {
                radius: ConstructorParameters<typeof SphereParticleEmitter>[0];
                radiusRange: ConstructorParameters<typeof SphereParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof SphereParticleEmitter>[2];
            },
            SphereParticleEmitter
        >,
        any
    >;
    baseParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseParticleSystem>,
            {
                name: ConstructorParameters<typeof BaseParticleSystem>[0];
            },
            BaseParticleSystem
        >,
        any
    >;
    cloudPoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CloudPoint>,
            {
                particleIndex: ConstructorParameters<typeof CloudPoint>[0];
                group: ConstructorParameters<typeof CloudPoint>[1];
                groupId: ConstructorParameters<typeof CloudPoint>[2];
                idxInGroup: ConstructorParameters<typeof CloudPoint>[3];
                pcs: ConstructorParameters<typeof CloudPoint>[4];
            },
            CloudPoint
        >,
        any
    >;
    pointsGroup: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointsGroup>,
            {
                id: ConstructorParameters<typeof PointsGroup>[0];
                posFunction: ConstructorParameters<typeof PointsGroup>[1];
            },
            PointsGroup
        >,
        any
    >;
    computeShaderParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeShaderParticleSystem>,
            {
                parent: ConstructorParameters<typeof ComputeShaderParticleSystem>[0];
                engine: ConstructorParameters<typeof ComputeShaderParticleSystem>[1];
            },
            ComputeShaderParticleSystem
        >,
        any
    >;
    gPUParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GPUParticleSystem> & Clonable,
            {
                name: ConstructorParameters<typeof GPUParticleSystem>[0];
                options: ConstructorParameters<typeof GPUParticleSystem>[1];
                sceneOrEngine: ConstructorParameters<typeof GPUParticleSystem>[2];
                customEffect: ConstructorParameters<typeof GPUParticleSystem>[3];
                isAnimationSheetEnabled: ConstructorParameters<typeof GPUParticleSystem>[4];
            },
            GPUParticleSystem
        >,
        any
    >;
    particle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Particle>,
            {
                particleSystem: ConstructorParameters<typeof Particle>[0];
            },
            Particle
        >,
        any
    >;
    particleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystem> & Clonable, {}, ParticleSystem>, any>;
    particleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystemSet>, {}, ParticleSystemSet>, any>;
    pointsCloudSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointsCloudSystem>,
            {
                name: ConstructorParameters<typeof PointsCloudSystem>[0];
                pointSize: ConstructorParameters<typeof PointsCloudSystem>[1];
                scene: ConstructorParameters<typeof PointsCloudSystem>[2];
                options: ConstructorParameters<typeof PointsCloudSystem>[3];
            },
            PointsCloudSystem
        >,
        any
    >;
    depthSortedParticle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthSortedParticle>,
            {
                idx: ConstructorParameters<typeof DepthSortedParticle>[0];
                ind: ConstructorParameters<typeof DepthSortedParticle>[1];
                indLength: ConstructorParameters<typeof DepthSortedParticle>[2];
                materialIndex: ConstructorParameters<typeof DepthSortedParticle>[3];
            },
            DepthSortedParticle
        >,
        any
    >;
    modelShape: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ModelShape>,
            {
                id: ConstructorParameters<typeof ModelShape>[0];
                shape: ConstructorParameters<typeof ModelShape>[1];
                indices: ConstructorParameters<typeof ModelShape>[2];
                normals: ConstructorParameters<typeof ModelShape>[3];
                colors: ConstructorParameters<typeof ModelShape>[4];
                shapeUV: ConstructorParameters<typeof ModelShape>[5];
                posFunction: ConstructorParameters<typeof ModelShape>[6];
                vtxFunction: ConstructorParameters<typeof ModelShape>[7];
                material: ConstructorParameters<typeof ModelShape>[8];
            },
            ModelShape
        >,
        any
    >;
    solidParticle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SolidParticle>,
            {
                particleIndex: ConstructorParameters<typeof SolidParticle>[0];
                particleId: ConstructorParameters<typeof SolidParticle>[1];
                positionIndex: ConstructorParameters<typeof SolidParticle>[2];
                indiceIndex: ConstructorParameters<typeof SolidParticle>[3];
                model: ConstructorParameters<typeof SolidParticle>[4];
                shapeId: ConstructorParameters<typeof SolidParticle>[5];
                idxInShape: ConstructorParameters<typeof SolidParticle>[6];
                sps: ConstructorParameters<typeof SolidParticle>[7];
                modelBoundingInfo: ConstructorParameters<typeof SolidParticle>[8];
                materialIndex: ConstructorParameters<typeof SolidParticle>[9];
            },
            SolidParticle
        >,
        any
    >;
    solidParticleVertex: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SolidParticleVertex>, {}, SolidParticleVertex>, any>;
    solidParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SolidParticleSystem>,
            {
                name: ConstructorParameters<typeof SolidParticleSystem>[0];
                scene: ConstructorParameters<typeof SolidParticleSystem>[1];
                options: ConstructorParameters<typeof SolidParticleSystem>[2];
            },
            SolidParticleSystem
        >,
        any
    >;
    subEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubEmitter> & Clonable,
            {
                particleSystem: ConstructorParameters<typeof SubEmitter>[0];
            },
            SubEmitter
        >,
        any
    >;
    thinParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinParticleSystem> & Clonable,
            {
                name: ConstructorParameters<typeof ThinParticleSystem>[0];
                capacity: ConstructorParameters<typeof ThinParticleSystem>[1];
                sceneOrEngine: ConstructorParameters<typeof ThinParticleSystem>[2];
                customEffect: ConstructorParameters<typeof ThinParticleSystem>[3];
                isAnimationSheetEnabled: ConstructorParameters<typeof ThinParticleSystem>[4];
                epsilon: ConstructorParameters<typeof ThinParticleSystem>[5];
            },
            ThinParticleSystem
        >,
        any
    >;
    webGL2ParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGL2ParticleSystem>,
            {
                parent: ConstructorParameters<typeof WebGL2ParticleSystem>[0];
                engine: ConstructorParameters<typeof WebGL2ParticleSystem>[1];
            },
            WebGL2ParticleSystem
        >,
        any
    >;
    ammoJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AmmoJSPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof AmmoJSPlugin>[0];
                ammoInjection: ConstructorParameters<typeof AmmoJSPlugin>[1];
                overlappingPairCache: ConstructorParameters<typeof AmmoJSPlugin>[2];
            },
            AmmoJSPlugin
        >,
        any
    >;
    cannonJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CannonJSPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof CannonJSPlugin>[0];
                iterations: ConstructorParameters<typeof CannonJSPlugin>[1];
                cannonInjection: ConstructorParameters<typeof CannonJSPlugin>[2];
            },
            CannonJSPlugin
        >,
        any
    >;
    oimoJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OimoJSPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof OimoJSPlugin>[0];
                iterations: ConstructorParameters<typeof OimoJSPlugin>[1];
                oimoInjection: ConstructorParameters<typeof OimoJSPlugin>[2];
            },
            OimoJSPlugin
        >,
        any
    >;
    castingResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CastingResult>, {}, CastingResult>, any>;
    physicsEngineSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngineSceneComponent>,
            {
                scene: ConstructorParameters<typeof PhysicsEngineSceneComponent>[0];
            },
            PhysicsEngineSceneComponent
        >,
        any
    >;
    physicsEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngine>,
            {
                gravity: ConstructorParameters<typeof PhysicsEngine>[0];
                _physicsPlugin: ConstructorParameters<typeof PhysicsEngine>[1];
            },
            PhysicsEngine
        >,
        any
    >;
    physicsHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsHelper>,
            {
                scene: ConstructorParameters<typeof PhysicsHelper>[0];
            },
            PhysicsHelper
        >,
        any
    >;
    physicsRadialExplosionEventOptions: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRadialExplosionEventOptions>, {}, PhysicsRadialExplosionEventOptions>,
        any
    >;
    physicsUpdraftEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsUpdraftEventOptions>, {}, PhysicsUpdraftEventOptions>, any>;
    physicsVortexEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsVortexEventOptions>, {}, PhysicsVortexEventOptions>, any>;
    physicsImpostor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsImpostor> & Clonable,
            {
                object: ConstructorParameters<typeof PhysicsImpostor>[0];
                type: ConstructorParameters<typeof PhysicsImpostor>[1];
                _options: ConstructorParameters<typeof PhysicsImpostor>[2];
                _scene: ConstructorParameters<typeof PhysicsImpostor>[3];
            },
            PhysicsImpostor
        >,
        any
    >;
    distanceJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DistanceJoint>,
            {
                jointData: ConstructorParameters<typeof DistanceJoint>[0];
            },
            DistanceJoint
        >,
        any
    >;
    hinge2Joint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Hinge2Joint>,
            {
                jointData: ConstructorParameters<typeof Hinge2Joint>[0];
            },
            Hinge2Joint
        >,
        any
    >;
    hingeJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HingeJoint>,
            {
                jointData: ConstructorParameters<typeof HingeJoint>[0];
            },
            HingeJoint
        >,
        any
    >;
    motorEnabledJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MotorEnabledJoint>,
            {
                type: ConstructorParameters<typeof MotorEnabledJoint>[0];
                jointData: ConstructorParameters<typeof MotorEnabledJoint>[1];
            },
            MotorEnabledJoint
        >,
        any
    >;
    physicsJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsJoint>,
            {
                type: ConstructorParameters<typeof PhysicsJoint>[0];
                jointData: ConstructorParameters<typeof PhysicsJoint>[1];
            },
            PhysicsJoint
        >,
        any
    >;
    physicsRaycastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRaycastResult>, {}, PhysicsRaycastResult>, any>;
    proximityCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProximityCastResult>, {}, ProximityCastResult>, any>;
    shapeCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShapeCastResult>, {}, ShapeCastResult>, any>;
    havokPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HavokPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof HavokPlugin>[0];
                hpInjection: ConstructorParameters<typeof HavokPlugin>[1];
            },
            HavokPlugin
        >,
        any
    >;
    physicsCharacterController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsCharacterController>,
            {
                position: ConstructorParameters<typeof PhysicsCharacterController>[0];
                characterShapeOptions: ConstructorParameters<typeof PhysicsCharacterController>[1];
                scene: ConstructorParameters<typeof PhysicsCharacterController>[2];
            },
            PhysicsCharacterController
        >,
        any
    >;
    physicsAggregate: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsAggregate>,
            {
                transformNode: ConstructorParameters<typeof PhysicsAggregate>[0];
                type: ConstructorParameters<typeof PhysicsAggregate>[1];
                _options: ConstructorParameters<typeof PhysicsAggregate>[2];
                _scene: ConstructorParameters<typeof PhysicsAggregate>[3];
            },
            PhysicsAggregate
        >,
        any
    >;
    physicsBody: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsBody> & Clonable,
            {
                transformNode: ConstructorParameters<typeof PhysicsBody>[0];
                motionType: ConstructorParameters<typeof PhysicsBody>[1];
                startsAsleep: ConstructorParameters<typeof PhysicsBody>[2];
                scene: ConstructorParameters<typeof PhysicsBody>[3];
            },
            PhysicsBody
        >,
        any
    >;
    ballAndSocketConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BallAndSocketConstraint>,
            {
                pivotA: ConstructorParameters<typeof BallAndSocketConstraint>[0];
                pivotB: ConstructorParameters<typeof BallAndSocketConstraint>[1];
                axisA: ConstructorParameters<typeof BallAndSocketConstraint>[2];
                axisB: ConstructorParameters<typeof BallAndSocketConstraint>[3];
                scene: ConstructorParameters<typeof BallAndSocketConstraint>[4];
            },
            BallAndSocketConstraint
        >,
        any
    >;
    distanceConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DistanceConstraint>,
            {
                maxDistance: ConstructorParameters<typeof DistanceConstraint>[0];
                scene: ConstructorParameters<typeof DistanceConstraint>[1];
            },
            DistanceConstraint
        >,
        any
    >;
    hingeConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HingeConstraint>,
            {
                pivotA: ConstructorParameters<typeof HingeConstraint>[0];
                pivotB: ConstructorParameters<typeof HingeConstraint>[1];
                axisA: ConstructorParameters<typeof HingeConstraint>[2];
                axisB: ConstructorParameters<typeof HingeConstraint>[3];
                scene: ConstructorParameters<typeof HingeConstraint>[4];
            },
            HingeConstraint
        >,
        any
    >;
    lockConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LockConstraint>,
            {
                pivotA: ConstructorParameters<typeof LockConstraint>[0];
                pivotB: ConstructorParameters<typeof LockConstraint>[1];
                axisA: ConstructorParameters<typeof LockConstraint>[2];
                axisB: ConstructorParameters<typeof LockConstraint>[3];
                scene: ConstructorParameters<typeof LockConstraint>[4];
            },
            LockConstraint
        >,
        any
    >;
    physics6DoFConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Physics6DoFConstraint>,
            {
                constraintParams: ConstructorParameters<typeof Physics6DoFConstraint>[0];
                limits: ConstructorParameters<typeof Physics6DoFConstraint>[1];
                scene: ConstructorParameters<typeof Physics6DoFConstraint>[2];
            },
            Physics6DoFConstraint
        >,
        any
    >;
    physicsConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsConstraint>,
            {
                type: ConstructorParameters<typeof PhysicsConstraint>[0];
                options: ConstructorParameters<typeof PhysicsConstraint>[1];
                scene: ConstructorParameters<typeof PhysicsConstraint>[2];
            },
            PhysicsConstraint
        >,
        any
    >;
    prismaticConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrismaticConstraint>,
            {
                pivotA: ConstructorParameters<typeof PrismaticConstraint>[0];
                pivotB: ConstructorParameters<typeof PrismaticConstraint>[1];
                axisA: ConstructorParameters<typeof PrismaticConstraint>[2];
                axisB: ConstructorParameters<typeof PrismaticConstraint>[3];
                scene: ConstructorParameters<typeof PrismaticConstraint>[4];
            },
            PrismaticConstraint
        >,
        any
    >;
    sliderConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SliderConstraint>,
            {
                pivotA: ConstructorParameters<typeof SliderConstraint>[0];
                pivotB: ConstructorParameters<typeof SliderConstraint>[1];
                axisA: ConstructorParameters<typeof SliderConstraint>[2];
                axisB: ConstructorParameters<typeof SliderConstraint>[3];
                scene: ConstructorParameters<typeof SliderConstraint>[4];
            },
            SliderConstraint
        >,
        any
    >;
    springConstraint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpringConstraint>,
            {
                pivotA: ConstructorParameters<typeof SpringConstraint>[0];
                pivotB: ConstructorParameters<typeof SpringConstraint>[1];
                axisA: ConstructorParameters<typeof SpringConstraint>[2];
                axisB: ConstructorParameters<typeof SpringConstraint>[3];
                minDistance: ConstructorParameters<typeof SpringConstraint>[4];
                maxDistance: ConstructorParameters<typeof SpringConstraint>[5];
                stiffness: ConstructorParameters<typeof SpringConstraint>[6];
                damping: ConstructorParameters<typeof SpringConstraint>[7];
                scene: ConstructorParameters<typeof SpringConstraint>[8];
            },
            SpringConstraint
        >,
        any
    >;
    physicsShape: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShape>,
            {
                options: ConstructorParameters<typeof PhysicsShape>[0];
                scene: ConstructorParameters<typeof PhysicsShape>[1];
            },
            PhysicsShape
        >,
        any
    >;
    physicsShapeBox: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeBox>,
            {
                center: ConstructorParameters<typeof PhysicsShapeBox>[0];
                rotation: ConstructorParameters<typeof PhysicsShapeBox>[1];
                extents: ConstructorParameters<typeof PhysicsShapeBox>[2];
                scene: ConstructorParameters<typeof PhysicsShapeBox>[3];
            },
            PhysicsShapeBox
        >,
        any
    >;
    physicsShapeCapsule: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeCapsule>,
            {
                pointA: ConstructorParameters<typeof PhysicsShapeCapsule>[0];
                pointB: ConstructorParameters<typeof PhysicsShapeCapsule>[1];
                radius: ConstructorParameters<typeof PhysicsShapeCapsule>[2];
                scene: ConstructorParameters<typeof PhysicsShapeCapsule>[3];
            },
            PhysicsShapeCapsule
        >,
        any
    >;
    physicsShapeContainer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeContainer>,
            {
                scene: ConstructorParameters<typeof PhysicsShapeContainer>[0];
            },
            PhysicsShapeContainer
        >,
        any
    >;
    physicsShapeConvexHull: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeConvexHull>,
            {
                mesh: ConstructorParameters<typeof PhysicsShapeConvexHull>[0];
                scene: ConstructorParameters<typeof PhysicsShapeConvexHull>[1];
            },
            PhysicsShapeConvexHull
        >,
        any
    >;
    physicsShapeCylinder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeCylinder>,
            {
                pointA: ConstructorParameters<typeof PhysicsShapeCylinder>[0];
                pointB: ConstructorParameters<typeof PhysicsShapeCylinder>[1];
                radius: ConstructorParameters<typeof PhysicsShapeCylinder>[2];
                scene: ConstructorParameters<typeof PhysicsShapeCylinder>[3];
            },
            PhysicsShapeCylinder
        >,
        any
    >;
    physicsShapeGroundMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeGroundMesh>,
            {
                groundMesh: ConstructorParameters<typeof PhysicsShapeGroundMesh>[0];
                scene: ConstructorParameters<typeof PhysicsShapeGroundMesh>[1];
            },
            PhysicsShapeGroundMesh
        >,
        any
    >;
    physicsShapeHeightField: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeHeightField>,
            {
                heightFieldSizeX: ConstructorParameters<typeof PhysicsShapeHeightField>[0];
                heightFieldSizeZ: ConstructorParameters<typeof PhysicsShapeHeightField>[1];
                numHeightFieldSamplesX: ConstructorParameters<typeof PhysicsShapeHeightField>[2];
                numHeightFieldSamplesZ: ConstructorParameters<typeof PhysicsShapeHeightField>[3];
                heightFieldData: ConstructorParameters<typeof PhysicsShapeHeightField>[4];
                scene: ConstructorParameters<typeof PhysicsShapeHeightField>[5];
            },
            PhysicsShapeHeightField
        >,
        any
    >;
    physicsShapeMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeMesh>,
            {
                mesh: ConstructorParameters<typeof PhysicsShapeMesh>[0];
                scene: ConstructorParameters<typeof PhysicsShapeMesh>[1];
            },
            PhysicsShapeMesh
        >,
        any
    >;
    physicsShapeSphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShapeSphere>,
            {
                center: ConstructorParameters<typeof PhysicsShapeSphere>[0];
                radius: ConstructorParameters<typeof PhysicsShapeSphere>[1];
                scene: ConstructorParameters<typeof PhysicsShapeSphere>[2];
            },
            PhysicsShapeSphere
        >,
        any
    >;
    ragdoll: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Ragdoll>,
            {
                skeleton: ConstructorParameters<typeof Ragdoll>[0];
                rootTransformNode: ConstructorParameters<typeof Ragdoll>[1];
                config: ConstructorParameters<typeof Ragdoll>[2];
            },
            Ragdoll
        >,
        any
    >;
    defaultRenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DefaultRenderingPipeline>,
            {
                name: ConstructorParameters<typeof DefaultRenderingPipeline>[0];
                hdr: ConstructorParameters<typeof DefaultRenderingPipeline>[1];
                scene: ConstructorParameters<typeof DefaultRenderingPipeline>[2];
                cameras: ConstructorParameters<typeof DefaultRenderingPipeline>[3];
                automaticBuild: ConstructorParameters<typeof DefaultRenderingPipeline>[4];
            },
            DefaultRenderingPipeline
        >,
        any
    >;
    lensRenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LensRenderingPipeline>,
            {
                name: ConstructorParameters<typeof LensRenderingPipeline>[0];
                parameters: ConstructorParameters<typeof LensRenderingPipeline>[1];
                scene: ConstructorParameters<typeof LensRenderingPipeline>[2];
                ratio: ConstructorParameters<typeof LensRenderingPipeline>[3];
                cameras: ConstructorParameters<typeof LensRenderingPipeline>[4];
            },
            LensRenderingPipeline
        >,
        any
    >;
    sSAO2RenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SSAO2RenderingPipeline>,
            {
                name: ConstructorParameters<typeof SSAO2RenderingPipeline>[0];
                scene: ConstructorParameters<typeof SSAO2RenderingPipeline>[1];
                ratio: ConstructorParameters<typeof SSAO2RenderingPipeline>[2];
                cameras: ConstructorParameters<typeof SSAO2RenderingPipeline>[3];
                forceGeometryBuffer: ConstructorParameters<typeof SSAO2RenderingPipeline>[4];
                textureType: ConstructorParameters<typeof SSAO2RenderingPipeline>[5];
            },
            SSAO2RenderingPipeline
        >,
        any
    >;
    sSAORenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SSAORenderingPipeline>,
            {
                name: ConstructorParameters<typeof SSAORenderingPipeline>[0];
                scene: ConstructorParameters<typeof SSAORenderingPipeline>[1];
                ratio: ConstructorParameters<typeof SSAORenderingPipeline>[2];
                cameras: ConstructorParameters<typeof SSAORenderingPipeline>[3];
            },
            SSAORenderingPipeline
        >,
        any
    >;
    sSRRenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SSRRenderingPipeline>,
            {
                name: ConstructorParameters<typeof SSRRenderingPipeline>[0];
                scene: ConstructorParameters<typeof SSRRenderingPipeline>[1];
                cameras: ConstructorParameters<typeof SSRRenderingPipeline>[2];
                forceGeometryBuffer: ConstructorParameters<typeof SSRRenderingPipeline>[3];
                textureType: ConstructorParameters<typeof SSRRenderingPipeline>[4];
                useScreenspaceDepth: ConstructorParameters<typeof SSRRenderingPipeline>[5];
            },
            SSRRenderingPipeline
        >,
        any
    >;
    standardRenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StandardRenderingPipeline>,
            {
                name: ConstructorParameters<typeof StandardRenderingPipeline>[0];
                scene: ConstructorParameters<typeof StandardRenderingPipeline>[1];
                ratio: ConstructorParameters<typeof StandardRenderingPipeline>[2];
                originalPostProcess: ConstructorParameters<typeof StandardRenderingPipeline>[3];
                cameras: ConstructorParameters<typeof StandardRenderingPipeline>[4];
            },
            StandardRenderingPipeline
        >,
        any
    >;
    tAARenderingPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TAARenderingPipeline>,
            {
                name: ConstructorParameters<typeof TAARenderingPipeline>[0];
                scene: ConstructorParameters<typeof TAARenderingPipeline>[1];
                cameras: ConstructorParameters<typeof TAARenderingPipeline>[2];
                textureType: ConstructorParameters<typeof TAARenderingPipeline>[3];
            },
            TAARenderingPipeline
        >,
        any
    >;
    postProcessRenderEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessRenderEffect>,
            {
                engine: ConstructorParameters<typeof PostProcessRenderEffect>[0];
                name: ConstructorParameters<typeof PostProcessRenderEffect>[1];
                getPostProcesses: ConstructorParameters<typeof PostProcessRenderEffect>[2];
                singleInstance: ConstructorParameters<typeof PostProcessRenderEffect>[3];
            },
            PostProcessRenderEffect
        >,
        any
    >;
    postProcessRenderPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessRenderPipeline>,
            {
                _engine: ConstructorParameters<typeof PostProcessRenderPipeline>[0];
                name: ConstructorParameters<typeof PostProcessRenderPipeline>[1];
            },
            PostProcessRenderPipeline
        >,
        any
    >;
    postProcessRenderPipelineManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManager>, {}, PostProcessRenderPipelineManager>, any>;
    postProcessRenderPipelineManagerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManagerSceneComponent>,
            {
                scene: ConstructorParameters<typeof PostProcessRenderPipelineManagerSceneComponent>[0];
            },
            PostProcessRenderPipelineManagerSceneComponent
        >,
        any
    >;
    anaglyphPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof AnaglyphPostProcess>[0];
                options: ConstructorParameters<typeof AnaglyphPostProcess>[1];
                rigCameras: ConstructorParameters<typeof AnaglyphPostProcess>[2];
                samplingMode: ConstructorParameters<typeof AnaglyphPostProcess>[3];
                engine: ConstructorParameters<typeof AnaglyphPostProcess>[4];
                reusable: ConstructorParameters<typeof AnaglyphPostProcess>[5];
            },
            AnaglyphPostProcess
        >,
        any
    >;
    blackAndWhitePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BlackAndWhitePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof BlackAndWhitePostProcess>[0];
                options: ConstructorParameters<typeof BlackAndWhitePostProcess>[1];
                camera: ConstructorParameters<typeof BlackAndWhitePostProcess>[2];
                samplingMode: ConstructorParameters<typeof BlackAndWhitePostProcess>[3];
                engine: ConstructorParameters<typeof BlackAndWhitePostProcess>[4];
                reusable: ConstructorParameters<typeof BlackAndWhitePostProcess>[5];
            },
            BlackAndWhitePostProcess
        >,
        any
    >;
    bloomEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BloomEffect>,
            {
                sceneOrEngine: ConstructorParameters<typeof BloomEffect>[0];
                bloomScale: ConstructorParameters<typeof BloomEffect>[1];
                bloomWeight: ConstructorParameters<typeof BloomEffect>[2];
                bloomKernel: ConstructorParameters<typeof BloomEffect>[3];
                pipelineTextureType: ConstructorParameters<typeof BloomEffect>[4];
                blockCompilation: ConstructorParameters<typeof BloomEffect>[5];
            },
            BloomEffect
        >,
        any
    >;
    bloomMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BloomMergePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof BloomMergePostProcess>[0];
                originalFromInput: ConstructorParameters<typeof BloomMergePostProcess>[1];
                blurred: ConstructorParameters<typeof BloomMergePostProcess>[2];
                weight: ConstructorParameters<typeof BloomMergePostProcess>[3];
                options: ConstructorParameters<typeof BloomMergePostProcess>[4];
                camera: ConstructorParameters<typeof BloomMergePostProcess>[5];
                samplingMode: ConstructorParameters<typeof BloomMergePostProcess>[6];
                engine: ConstructorParameters<typeof BloomMergePostProcess>[7];
                reusable: ConstructorParameters<typeof BloomMergePostProcess>[8];
                textureType: ConstructorParameters<typeof BloomMergePostProcess>[9];
                blockCompilation: ConstructorParameters<typeof BloomMergePostProcess>[10];
            },
            BloomMergePostProcess
        >,
        any
    >;
    blurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BlurPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof BlurPostProcess>[0];
                direction: ConstructorParameters<typeof BlurPostProcess>[1];
                kernel: ConstructorParameters<typeof BlurPostProcess>[2];
                options: ConstructorParameters<typeof BlurPostProcess>[3];
                camera: ConstructorParameters<typeof BlurPostProcess>[4];
                samplingMode: ConstructorParameters<typeof BlurPostProcess>[5];
                engine: ConstructorParameters<typeof BlurPostProcess>[6];
                reusable: ConstructorParameters<typeof BlurPostProcess>[7];
                textureType: ConstructorParameters<typeof BlurPostProcess>[8];
                defines: ConstructorParameters<typeof BlurPostProcess>[9];
                blockCompilation: ConstructorParameters<typeof BlurPostProcess>[10];
                textureFormat: ConstructorParameters<typeof BlurPostProcess>[11];
            },
            BlurPostProcess
        >,
        any
    >;
    chromaticAberrationPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ChromaticAberrationPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ChromaticAberrationPostProcess>[0];
                screenWidth: ConstructorParameters<typeof ChromaticAberrationPostProcess>[1];
                screenHeight: ConstructorParameters<typeof ChromaticAberrationPostProcess>[2];
                options: ConstructorParameters<typeof ChromaticAberrationPostProcess>[3];
                camera: ConstructorParameters<typeof ChromaticAberrationPostProcess>[4];
                samplingMode: ConstructorParameters<typeof ChromaticAberrationPostProcess>[5];
                engine: ConstructorParameters<typeof ChromaticAberrationPostProcess>[6];
                reusable: ConstructorParameters<typeof ChromaticAberrationPostProcess>[7];
                textureType: ConstructorParameters<typeof ChromaticAberrationPostProcess>[8];
                blockCompilation: ConstructorParameters<typeof ChromaticAberrationPostProcess>[9];
            },
            ChromaticAberrationPostProcess
        >,
        any
    >;
    circleOfConfusionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CircleOfConfusionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof CircleOfConfusionPostProcess>[0];
                depthTexture: ConstructorParameters<typeof CircleOfConfusionPostProcess>[1];
                options: ConstructorParameters<typeof CircleOfConfusionPostProcess>[2];
                camera: ConstructorParameters<typeof CircleOfConfusionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof CircleOfConfusionPostProcess>[4];
                engine: ConstructorParameters<typeof CircleOfConfusionPostProcess>[5];
                reusable: ConstructorParameters<typeof CircleOfConfusionPostProcess>[6];
                textureType: ConstructorParameters<typeof CircleOfConfusionPostProcess>[7];
                blockCompilation: ConstructorParameters<typeof CircleOfConfusionPostProcess>[8];
            },
            CircleOfConfusionPostProcess
        >,
        any
    >;
    colorCorrectionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorCorrectionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ColorCorrectionPostProcess>[0];
                colorTableUrl: ConstructorParameters<typeof ColorCorrectionPostProcess>[1];
                options: ConstructorParameters<typeof ColorCorrectionPostProcess>[2];
                camera: ConstructorParameters<typeof ColorCorrectionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof ColorCorrectionPostProcess>[4];
                engine: ConstructorParameters<typeof ColorCorrectionPostProcess>[5];
                reusable: ConstructorParameters<typeof ColorCorrectionPostProcess>[6];
            },
            ColorCorrectionPostProcess
        >,
        any
    >;
    convolutionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConvolutionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ConvolutionPostProcess>[0];
                kernel: ConstructorParameters<typeof ConvolutionPostProcess>[1];
                options: ConstructorParameters<typeof ConvolutionPostProcess>[2];
                camera: ConstructorParameters<typeof ConvolutionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof ConvolutionPostProcess>[4];
                engine: ConstructorParameters<typeof ConvolutionPostProcess>[5];
                reusable: ConstructorParameters<typeof ConvolutionPostProcess>[6];
                textureType: ConstructorParameters<typeof ConvolutionPostProcess>[7];
            },
            ConvolutionPostProcess
        >,
        any
    >;
    depthOfFieldBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldBlurPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[0];
                _scene: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[1];
                direction: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[2];
                kernel: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[3];
                options: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[4];
                camera: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[5];
                circleOfConfusion: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[6];
                imageToBlur: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[7];
                samplingMode: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[8];
                engine: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[9];
                reusable: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[10];
                textureType: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[11];
                blockCompilation: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[12];
                textureFormat: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[13];
            },
            DepthOfFieldBlurPostProcess
        >,
        any
    >;
    depthOfFieldEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldEffect>,
            {
                sceneOrEngine: ConstructorParameters<typeof DepthOfFieldEffect>[0];
                depthTexture: ConstructorParameters<typeof DepthOfFieldEffect>[1];
                blurLevel: ConstructorParameters<typeof DepthOfFieldEffect>[2];
                pipelineTextureType: ConstructorParameters<typeof DepthOfFieldEffect>[3];
                blockCompilation: ConstructorParameters<typeof DepthOfFieldEffect>[4];
                depthNotNormalized: ConstructorParameters<typeof DepthOfFieldEffect>[5];
            },
            DepthOfFieldEffect
        >,
        any
    >;
    depthOfFieldMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldMergePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[0];
                originalFromInput: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[1];
                circleOfConfusion: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[2];
                _blurSteps: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[3];
                options: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[4];
                camera: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[5];
                samplingMode: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[6];
                engine: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[7];
                reusable: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[8];
                textureType: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[9];
                blockCompilation: ConstructorParameters<typeof DepthOfFieldMergePostProcess>[10];
            },
            DepthOfFieldMergePostProcess
        >,
        any
    >;
    displayPassPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DisplayPassPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof DisplayPassPostProcess>[0];
                options: ConstructorParameters<typeof DisplayPassPostProcess>[1];
                camera: ConstructorParameters<typeof DisplayPassPostProcess>[2];
                samplingMode: ConstructorParameters<typeof DisplayPassPostProcess>[3];
                engine: ConstructorParameters<typeof DisplayPassPostProcess>[4];
                reusable: ConstructorParameters<typeof DisplayPassPostProcess>[5];
            },
            DisplayPassPostProcess
        >,
        any
    >;
    extractHighlightsPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExtractHighlightsPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ExtractHighlightsPostProcess>[0];
                options: ConstructorParameters<typeof ExtractHighlightsPostProcess>[1];
                camera: ConstructorParameters<typeof ExtractHighlightsPostProcess>[2];
                samplingMode: ConstructorParameters<typeof ExtractHighlightsPostProcess>[3];
                engine: ConstructorParameters<typeof ExtractHighlightsPostProcess>[4];
                reusable: ConstructorParameters<typeof ExtractHighlightsPostProcess>[5];
                textureType: ConstructorParameters<typeof ExtractHighlightsPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof ExtractHighlightsPostProcess>[7];
            },
            ExtractHighlightsPostProcess
        >,
        any
    >;
    filterPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FilterPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof FilterPostProcess>[0];
                kernelMatrix: ConstructorParameters<typeof FilterPostProcess>[1];
                options: ConstructorParameters<typeof FilterPostProcess>[2];
                camera: ConstructorParameters<typeof FilterPostProcess>[3];
                samplingMode: ConstructorParameters<typeof FilterPostProcess>[4];
                engine: ConstructorParameters<typeof FilterPostProcess>[5];
                reusable: ConstructorParameters<typeof FilterPostProcess>[6];
            },
            FilterPostProcess
        >,
        any
    >;
    fxaaPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FxaaPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof FxaaPostProcess>[0];
                options: ConstructorParameters<typeof FxaaPostProcess>[1];
                camera: ConstructorParameters<typeof FxaaPostProcess>[2];
                samplingMode: ConstructorParameters<typeof FxaaPostProcess>[3];
                engine: ConstructorParameters<typeof FxaaPostProcess>[4];
                reusable: ConstructorParameters<typeof FxaaPostProcess>[5];
                textureType: ConstructorParameters<typeof FxaaPostProcess>[6];
            },
            FxaaPostProcess
        >,
        any
    >;
    grainPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GrainPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof GrainPostProcess>[0];
                options: ConstructorParameters<typeof GrainPostProcess>[1];
                camera: ConstructorParameters<typeof GrainPostProcess>[2];
                samplingMode: ConstructorParameters<typeof GrainPostProcess>[3];
                engine: ConstructorParameters<typeof GrainPostProcess>[4];
                reusable: ConstructorParameters<typeof GrainPostProcess>[5];
                textureType: ConstructorParameters<typeof GrainPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof GrainPostProcess>[7];
            },
            GrainPostProcess
        >,
        any
    >;
    highlightsPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HighlightsPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof HighlightsPostProcess>[0];
                options: ConstructorParameters<typeof HighlightsPostProcess>[1];
                camera: ConstructorParameters<typeof HighlightsPostProcess>[2];
                samplingMode: ConstructorParameters<typeof HighlightsPostProcess>[3];
                engine: ConstructorParameters<typeof HighlightsPostProcess>[4];
                reusable: ConstructorParameters<typeof HighlightsPostProcess>[5];
                textureType: ConstructorParameters<typeof HighlightsPostProcess>[6];
            },
            HighlightsPostProcess
        >,
        any
    >;
    imageProcessingPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageProcessingPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ImageProcessingPostProcess>[0];
                options: ConstructorParameters<typeof ImageProcessingPostProcess>[1];
                camera: ConstructorParameters<typeof ImageProcessingPostProcess>[2];
                samplingMode: ConstructorParameters<typeof ImageProcessingPostProcess>[3];
                engine: ConstructorParameters<typeof ImageProcessingPostProcess>[4];
                reusable: ConstructorParameters<typeof ImageProcessingPostProcess>[5];
                textureType: ConstructorParameters<typeof ImageProcessingPostProcess>[6];
                imageProcessingConfiguration: ConstructorParameters<typeof ImageProcessingPostProcess>[7];
            },
            ImageProcessingPostProcess
        >,
        any
    >;
    motionBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MotionBlurPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof MotionBlurPostProcess>[0];
                scene: ConstructorParameters<typeof MotionBlurPostProcess>[1];
                options: ConstructorParameters<typeof MotionBlurPostProcess>[2];
                camera: ConstructorParameters<typeof MotionBlurPostProcess>[3];
                samplingMode: ConstructorParameters<typeof MotionBlurPostProcess>[4];
                engine: ConstructorParameters<typeof MotionBlurPostProcess>[5];
                reusable: ConstructorParameters<typeof MotionBlurPostProcess>[6];
                textureType: ConstructorParameters<typeof MotionBlurPostProcess>[7];
                blockCompilation: ConstructorParameters<typeof MotionBlurPostProcess>[8];
                forceGeometryBuffer: ConstructorParameters<typeof MotionBlurPostProcess>[9];
            },
            MotionBlurPostProcess
        >,
        any
    >;
    passCubePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PassCubePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof PassCubePostProcess>[0];
                options: ConstructorParameters<typeof PassCubePostProcess>[1];
                camera: ConstructorParameters<typeof PassCubePostProcess>[2];
                samplingMode: ConstructorParameters<typeof PassCubePostProcess>[3];
                engine: ConstructorParameters<typeof PassCubePostProcess>[4];
                reusable: ConstructorParameters<typeof PassCubePostProcess>[5];
                textureType: ConstructorParameters<typeof PassCubePostProcess>[6];
                blockCompilation: ConstructorParameters<typeof PassCubePostProcess>[7];
            },
            PassCubePostProcess
        >,
        any
    >;
    passPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PassPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof PassPostProcess>[0];
                options: ConstructorParameters<typeof PassPostProcess>[1];
                camera: ConstructorParameters<typeof PassPostProcess>[2];
                samplingMode: ConstructorParameters<typeof PassPostProcess>[3];
                engine: ConstructorParameters<typeof PassPostProcess>[4];
                reusable: ConstructorParameters<typeof PassPostProcess>[5];
                textureType: ConstructorParameters<typeof PassPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof PassPostProcess>[7];
            },
            PassPostProcess
        >,
        any
    >;
    postProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof PostProcess>[0];
                fragmentUrl: ConstructorParameters<typeof PostProcess>[1];
                parameters: ConstructorParameters<typeof PostProcess>[2];
                samplers: ConstructorParameters<typeof PostProcess>[3];
                _size: ConstructorParameters<typeof PostProcess>[4];
                camera: ConstructorParameters<typeof PostProcess>[5];
                samplingMode: ConstructorParameters<typeof PostProcess>[6];
                engine: ConstructorParameters<typeof PostProcess>[7];
                reusable: ConstructorParameters<typeof PostProcess>[8];
                defines: ConstructorParameters<typeof PostProcess>[9];
                textureType: ConstructorParameters<typeof PostProcess>[10];
                vertexUrl: ConstructorParameters<typeof PostProcess>[11];
                indexParameters: ConstructorParameters<typeof PostProcess>[12];
                blockCompilation: ConstructorParameters<typeof PostProcess>[13];
                textureFormat: ConstructorParameters<typeof PostProcess>[14];
                shaderLanguage: ConstructorParameters<typeof PostProcess>[15];
                extraInitializations: ConstructorParameters<typeof PostProcess>[16];
            },
            PostProcess
        >,
        any
    >;
    postProcessManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessManager>,
            {
                scene: ConstructorParameters<typeof PostProcessManager>[0];
            },
            PostProcessManager
        >,
        any
    >;
    refractionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof RefractionPostProcess>[0];
                refractionTextureUrl: ConstructorParameters<typeof RefractionPostProcess>[1];
                color: ConstructorParameters<typeof RefractionPostProcess>[2];
                depth: ConstructorParameters<typeof RefractionPostProcess>[3];
                colorLevel: ConstructorParameters<typeof RefractionPostProcess>[4];
                options: ConstructorParameters<typeof RefractionPostProcess>[5];
                camera: ConstructorParameters<typeof RefractionPostProcess>[6];
                samplingMode: ConstructorParameters<typeof RefractionPostProcess>[7];
                engine: ConstructorParameters<typeof RefractionPostProcess>[8];
                reusable: ConstructorParameters<typeof RefractionPostProcess>[9];
            },
            RefractionPostProcess
        >,
        any
    >;
    screenSpaceCurvaturePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceCurvaturePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[0];
                scene: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[1];
                options: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[2];
                camera: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[3];
                samplingMode: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[4];
                engine: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[5];
                reusable: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[6];
                textureType: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[7];
                blockCompilation: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[8];
            },
            ScreenSpaceCurvaturePostProcess
        >,
        any
    >;
    screenSpaceReflectionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceReflectionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[0];
                scene: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[1];
                options: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[2];
                camera: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[4];
                engine: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[5];
                reusable: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[6];
                textureType: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[7];
                blockCompilation: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[8];
                forceGeometryBuffer: ConstructorParameters<typeof ScreenSpaceReflectionPostProcess>[9];
            },
            ScreenSpaceReflectionPostProcess
        >,
        any
    >;
    sharpenPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SharpenPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof SharpenPostProcess>[0];
                options: ConstructorParameters<typeof SharpenPostProcess>[1];
                camera: ConstructorParameters<typeof SharpenPostProcess>[2];
                samplingMode: ConstructorParameters<typeof SharpenPostProcess>[3];
                engine: ConstructorParameters<typeof SharpenPostProcess>[4];
                reusable: ConstructorParameters<typeof SharpenPostProcess>[5];
                textureType: ConstructorParameters<typeof SharpenPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof SharpenPostProcess>[7];
            },
            SharpenPostProcess
        >,
        any
    >;
    stereoscopicInterlacePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicInterlacePostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[0];
                rigCameras: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[1];
                isStereoscopicHoriz: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[2];
                samplingMode: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[3];
                engine: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[4];
                reusable: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[5];
            },
            StereoscopicInterlacePostProcess
        >,
        any
    >;
    stereoscopicInterlacePostProcessI: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicInterlacePostProcessI> & Clonable,
            {
                name: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[0];
                rigCameras: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[1];
                isStereoscopicHoriz: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[2];
                isStereoscopicInterlaced: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[3];
                samplingMode: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[4];
                engine: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[5];
                reusable: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[6];
            },
            StereoscopicInterlacePostProcessI
        >,
        any
    >;
    subSurfaceScatteringPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceScatteringPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[0];
                scene: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[1];
                options: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[2];
                camera: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[3];
                samplingMode: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[4];
                engine: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[5];
                reusable: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[6];
                textureType: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[7];
            },
            SubSurfaceScatteringPostProcess
        >,
        any
    >;
    thinBlackAndWhitePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinBlackAndWhitePostProcess>,
            {
                name: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[0];
                engine: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[1];
                options: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[2];
            },
            ThinBlackAndWhitePostProcess
        >,
        any
    >;
    thinBloomEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinBloomEffect>,
            {
                name: ConstructorParameters<typeof ThinBloomEffect>[0];
                engine: ConstructorParameters<typeof ThinBloomEffect>[1];
                scale: ConstructorParameters<typeof ThinBloomEffect>[2];
                blockCompilation: ConstructorParameters<typeof ThinBloomEffect>[3];
            },
            ThinBloomEffect
        >,
        any
    >;
    thinBloomMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinBloomMergePostProcess>,
            {
                name: ConstructorParameters<typeof ThinBloomMergePostProcess>[0];
                engine: ConstructorParameters<typeof ThinBloomMergePostProcess>[1];
                options: ConstructorParameters<typeof ThinBloomMergePostProcess>[2];
            },
            ThinBloomMergePostProcess
        >,
        any
    >;
    thinBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinBlurPostProcess>,
            {
                name: ConstructorParameters<typeof ThinBlurPostProcess>[0];
                engine: ConstructorParameters<typeof ThinBlurPostProcess>[1];
                direction: ConstructorParameters<typeof ThinBlurPostProcess>[2];
                kernel: ConstructorParameters<typeof ThinBlurPostProcess>[3];
                options: ConstructorParameters<typeof ThinBlurPostProcess>[4];
            },
            ThinBlurPostProcess
        >,
        any
    >;
    thinCircleOfConfusionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinCircleOfConfusionPostProcess>,
            {
                name: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[0];
                engine: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[1];
                options: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[2];
            },
            ThinCircleOfConfusionPostProcess
        >,
        any
    >;
    thinDepthOfFieldBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinDepthOfFieldBlurPostProcess>,
            {
                name: ConstructorParameters<typeof ThinDepthOfFieldBlurPostProcess>[0];
                engine: ConstructorParameters<typeof ThinDepthOfFieldBlurPostProcess>[1];
                direction: ConstructorParameters<typeof ThinDepthOfFieldBlurPostProcess>[2];
                kernel: ConstructorParameters<typeof ThinDepthOfFieldBlurPostProcess>[3];
                options: ConstructorParameters<typeof ThinDepthOfFieldBlurPostProcess>[4];
            },
            ThinDepthOfFieldBlurPostProcess
        >,
        any
    >;
    thinDepthOfFieldEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinDepthOfFieldEffect>,
            {
                name: ConstructorParameters<typeof ThinDepthOfFieldEffect>[0];
                engine: ConstructorParameters<typeof ThinDepthOfFieldEffect>[1];
                blurLevel: ConstructorParameters<typeof ThinDepthOfFieldEffect>[2];
                depthNotNormalized: ConstructorParameters<typeof ThinDepthOfFieldEffect>[3];
                blockCompilation: ConstructorParameters<typeof ThinDepthOfFieldEffect>[4];
            },
            ThinDepthOfFieldEffect
        >,
        any
    >;
    thinDepthOfFieldMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinDepthOfFieldMergePostProcess>,
            {
                name: ConstructorParameters<typeof ThinDepthOfFieldMergePostProcess>[0];
                engine: ConstructorParameters<typeof ThinDepthOfFieldMergePostProcess>[1];
                options: ConstructorParameters<typeof ThinDepthOfFieldMergePostProcess>[2];
            },
            ThinDepthOfFieldMergePostProcess
        >,
        any
    >;
    thinExtractHighlightsPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinExtractHighlightsPostProcess>,
            {
                name: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[0];
                engine: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[1];
                options: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[2];
            },
            ThinExtractHighlightsPostProcess
        >,
        any
    >;
    thinTAAPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinTAAPostProcess>,
            {
                name: ConstructorParameters<typeof ThinTAAPostProcess>[0];
                engine: ConstructorParameters<typeof ThinTAAPostProcess>[1];
                options: ConstructorParameters<typeof ThinTAAPostProcess>[2];
            },
            ThinTAAPostProcess
        >,
        any
    >;
    tonemapPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TonemapPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof TonemapPostProcess>[0];
                _operator: ConstructorParameters<typeof TonemapPostProcess>[1];
                exposureAdjustment: ConstructorParameters<typeof TonemapPostProcess>[2];
                camera: ConstructorParameters<typeof TonemapPostProcess>[3];
                samplingMode: ConstructorParameters<typeof TonemapPostProcess>[4];
                engine: ConstructorParameters<typeof TonemapPostProcess>[5];
                textureFormat: ConstructorParameters<typeof TonemapPostProcess>[6];
                reusable: ConstructorParameters<typeof TonemapPostProcess>[7];
            },
            TonemapPostProcess
        >,
        any
    >;
    volumetricLightScatteringPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VolumetricLightScatteringPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[0];
                ratio: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[1];
                camera: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[2];
                mesh: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[3];
                samples: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[4];
                samplingMode: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[5];
                engine: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[6];
                reusable: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[7];
                scene: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[8];
            },
            VolumetricLightScatteringPostProcess
        >,
        any
    >;
    vRDistortionCorrectionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRDistortionCorrectionPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[0];
                camera: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[1];
                isRightEye: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[2];
                vrMetrics: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[3];
            },
            VRDistortionCorrectionPostProcess
        >,
        any
    >;
    vRMultiviewToSingleviewPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VRMultiviewToSingleviewPostProcess> & Clonable,
            {
                name: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[0];
                camera: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[1];
                scaleFactor: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[2];
            },
            VRMultiviewToSingleviewPostProcess
        >,
        any
    >;
    reflectionProbe: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionProbe>,
            {
                name: ConstructorParameters<typeof ReflectionProbe>[0];
                size: ConstructorParameters<typeof ReflectionProbe>[1];
                scene: ConstructorParameters<typeof ReflectionProbe>[2];
                generateMipMaps: ConstructorParameters<typeof ReflectionProbe>[3];
                useFloat: ConstructorParameters<typeof ReflectionProbe>[4];
                linearSpace: ConstructorParameters<typeof ReflectionProbe>[5];
            },
            ReflectionProbe
        >,
        any
    >;
    gIRSM: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GIRSM>,
            {
                rsm: ConstructorParameters<typeof GIRSM>[0];
            },
            GIRSM
        >,
        any
    >;
    gIRSMManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GIRSMManager>,
            {
                scene: ConstructorParameters<typeof GIRSMManager>[0];
                outputDimensions: ConstructorParameters<typeof GIRSMManager>[1];
                giTextureDimensions: ConstructorParameters<typeof GIRSMManager>[2];
                maxSamples: ConstructorParameters<typeof GIRSMManager>[3];
                giTextureType: ConstructorParameters<typeof GIRSMManager>[4];
            },
            GIRSMManager
        >,
        any
    >;
    gIRSMRenderPluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GIRSMRenderPluginMaterial>,
            {
                material: ConstructorParameters<typeof GIRSMRenderPluginMaterial>[0];
            },
            GIRSMRenderPluginMaterial
        >,
        any
    >;
    _IblShadowsAccumulationPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<_IblShadowsAccumulationPass>,
            {
                scene: ConstructorParameters<typeof _IblShadowsAccumulationPass>[0];
                iblShadowsRenderPipeline: ConstructorParameters<typeof _IblShadowsAccumulationPass>[1];
            },
            _IblShadowsAccumulationPass
        >,
        any
    >;
    iBLShadowsPluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IBLShadowsPluginMaterial>,
            {
                material: ConstructorParameters<typeof IBLShadowsPluginMaterial>[0];
            },
            IBLShadowsPluginMaterial
        >,
        any
    >;
    iblShadowsRenderPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IblShadowsRenderPipeline>,
            {
                name: ConstructorParameters<typeof IblShadowsRenderPipeline>[0];
                scene: ConstructorParameters<typeof IblShadowsRenderPipeline>[1];
                options: ConstructorParameters<typeof IblShadowsRenderPipeline>[2];
                cameras: ConstructorParameters<typeof IblShadowsRenderPipeline>[3];
            },
            IblShadowsRenderPipeline
        >,
        any
    >;
    _IblShadowsSpatialBlurPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<_IblShadowsSpatialBlurPass>,
            {
                scene: ConstructorParameters<typeof _IblShadowsSpatialBlurPass>[0];
                iblShadowsRenderPipeline: ConstructorParameters<typeof _IblShadowsSpatialBlurPass>[1];
            },
            _IblShadowsSpatialBlurPass
        >,
        any
    >;
    _IblShadowsVoxelRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<_IblShadowsVoxelRenderer>,
            {
                scene: ConstructorParameters<typeof _IblShadowsVoxelRenderer>[0];
                iblShadowsRenderPipeline: ConstructorParameters<typeof _IblShadowsVoxelRenderer>[1];
                resolutionExp: ConstructorParameters<typeof _IblShadowsVoxelRenderer>[2];
                triPlanarVoxelization: ConstructorParameters<typeof _IblShadowsVoxelRenderer>[3];
            },
            _IblShadowsVoxelRenderer
        >,
        any
    >;
    _IblShadowsVoxelTracingPass: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<_IblShadowsVoxelTracingPass>,
            {
                scene: ConstructorParameters<typeof _IblShadowsVoxelTracingPass>[0];
                iblShadowsRenderPipeline: ConstructorParameters<typeof _IblShadowsVoxelTracingPass>[1];
            },
            _IblShadowsVoxelTracingPass
        >,
        any
    >;
    boundingBoxRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBoxRenderer>,
            {
                scene: ConstructorParameters<typeof BoundingBoxRenderer>[0];
            },
            BoundingBoxRenderer
        >,
        any
    >;
    depthPeelingRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthPeelingRenderer>,
            {
                scene: ConstructorParameters<typeof DepthPeelingRenderer>[0];
                passCount: ConstructorParameters<typeof DepthPeelingRenderer>[1];
            },
            DepthPeelingRenderer
        >,
        any
    >;
    depthPeelingSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthPeelingSceneComponent>,
            {
                scene: ConstructorParameters<typeof DepthPeelingSceneComponent>[0];
            },
            DepthPeelingSceneComponent
        >,
        any
    >;
    depthRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthRenderer>,
            {
                scene: ConstructorParameters<typeof DepthRenderer>[0];
                type: ConstructorParameters<typeof DepthRenderer>[1];
                camera: ConstructorParameters<typeof DepthRenderer>[2];
                storeNonLinearDepth: ConstructorParameters<typeof DepthRenderer>[3];
                samplingMode: ConstructorParameters<typeof DepthRenderer>[4];
                storeCameraSpaceZ: ConstructorParameters<typeof DepthRenderer>[5];
                name: ConstructorParameters<typeof DepthRenderer>[6];
            },
            DepthRenderer
        >,
        any
    >;
    depthRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof DepthRendererSceneComponent>[0];
            },
            DepthRendererSceneComponent
        >,
        any
    >;
    edgesRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EdgesRenderer>,
            {
                source: ConstructorParameters<typeof EdgesRenderer>[0];
                epsilon: ConstructorParameters<typeof EdgesRenderer>[1];
                checkVerticesInsteadOfIndices: ConstructorParameters<typeof EdgesRenderer>[2];
                generateEdgesLines: ConstructorParameters<typeof EdgesRenderer>[3];
                options: ConstructorParameters<typeof EdgesRenderer>[4];
            },
            EdgesRenderer
        >,
        any
    >;
    lineEdgesRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LineEdgesRenderer>,
            {
                source: ConstructorParameters<typeof LineEdgesRenderer>[0];
                epsilon: ConstructorParameters<typeof LineEdgesRenderer>[1];
                checkVerticesInsteadOfIndices: ConstructorParameters<typeof LineEdgesRenderer>[2];
            },
            LineEdgesRenderer
        >,
        any
    >;
    fluidRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderer>,
            {
                scene: ConstructorParameters<typeof FluidRenderer>[0];
            },
            FluidRenderer
        >,
        any
    >;
    fluidRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof FluidRendererSceneComponent>[0];
            },
            FluidRendererSceneComponent
        >,
        any
    >;
    fluidRenderingDepthTextureCopy: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingDepthTextureCopy>,
            {
                engine: ConstructorParameters<typeof FluidRenderingDepthTextureCopy>[0];
                width: ConstructorParameters<typeof FluidRenderingDepthTextureCopy>[1];
                height: ConstructorParameters<typeof FluidRenderingDepthTextureCopy>[2];
                samples: ConstructorParameters<typeof FluidRenderingDepthTextureCopy>[3];
            },
            FluidRenderingDepthTextureCopy
        >,
        any
    >;
    fluidRenderingObject: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingObject>,
            {
                scene: ConstructorParameters<typeof FluidRenderingObject>[0];
                shaderLanguage: ConstructorParameters<typeof FluidRenderingObject>[1];
            },
            FluidRenderingObject
        >,
        any
    >;
    fluidRenderingObjectCustomParticles: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingObjectCustomParticles>,
            {
                scene: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[0];
                buffers: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[1];
                numParticles: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[2];
                shaderLanguage: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[3];
            },
            FluidRenderingObjectCustomParticles
        >,
        any
    >;
    fluidRenderingObjectParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingObjectParticleSystem>,
            {
                scene: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[0];
                ps: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[1];
                shaderLanguage: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[2];
            },
            FluidRenderingObjectParticleSystem
        >,
        any
    >;
    fluidRenderingTargetRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingTargetRenderer>,
            {
                scene: ConstructorParameters<typeof FluidRenderingTargetRenderer>[0];
                camera: ConstructorParameters<typeof FluidRenderingTargetRenderer>[1];
                shaderLanguage: ConstructorParameters<typeof FluidRenderingTargetRenderer>[2];
            },
            FluidRenderingTargetRenderer
        >,
        any
    >;
    fluidRenderingTextures: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingTextures>,
            {
                name: ConstructorParameters<typeof FluidRenderingTextures>[0];
                scene: ConstructorParameters<typeof FluidRenderingTextures>[1];
                width: ConstructorParameters<typeof FluidRenderingTextures>[2];
                height: ConstructorParameters<typeof FluidRenderingTextures>[3];
                blurTextureSizeX: ConstructorParameters<typeof FluidRenderingTextures>[4];
                blurTextureSizeY: ConstructorParameters<typeof FluidRenderingTextures>[5];
                textureType: ConstructorParameters<typeof FluidRenderingTextures>[6];
                textureFormat: ConstructorParameters<typeof FluidRenderingTextures>[7];
                blurTextureType: ConstructorParameters<typeof FluidRenderingTextures>[8];
                blurTextureFormat: ConstructorParameters<typeof FluidRenderingTextures>[9];
                useStandardBlur: ConstructorParameters<typeof FluidRenderingTextures>[10];
                camera: ConstructorParameters<typeof FluidRenderingTextures>[11];
                generateDepthBuffer: ConstructorParameters<typeof FluidRenderingTextures>[12];
                samples: ConstructorParameters<typeof FluidRenderingTextures>[13];
                shaderLanguage: ConstructorParameters<typeof FluidRenderingTextures>[14];
            },
            FluidRenderingTextures
        >,
        any
    >;
    geometryBufferRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryBufferRenderer>,
            {
                scene: ConstructorParameters<typeof GeometryBufferRenderer>[0];
                ratioOrDimensions: ConstructorParameters<typeof GeometryBufferRenderer>[1];
                depthFormat: ConstructorParameters<typeof GeometryBufferRenderer>[2];
                textureTypesAndFormats: ConstructorParameters<typeof GeometryBufferRenderer>[3];
            },
            GeometryBufferRenderer
        >,
        any
    >;
    geometryBufferRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryBufferRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof GeometryBufferRendererSceneComponent>[0];
            },
            GeometryBufferRendererSceneComponent
        >,
        any
    >;
    iblCdfGenerator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IblCdfGenerator>,
            {
                scene: ConstructorParameters<typeof IblCdfGenerator>[0];
            },
            IblCdfGenerator
        >,
        any
    >;
    iblCdfGeneratorSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IblCdfGeneratorSceneComponent>,
            {
                scene: ConstructorParameters<typeof IblCdfGeneratorSceneComponent>[0];
            },
            IblCdfGeneratorSceneComponent
        >,
        any
    >;
    motionBlurConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MotionBlurConfiguration>, {}, MotionBlurConfiguration>, any>;
    objectRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ObjectRenderer> & Clonable,
            {
                name: ConstructorParameters<typeof ObjectRenderer>[0];
                scene: ConstructorParameters<typeof ObjectRenderer>[1];
                options: ConstructorParameters<typeof ObjectRenderer>[2];
            },
            ObjectRenderer
        >,
        any
    >;
    outlineRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OutlineRenderer>,
            {
                scene: ConstructorParameters<typeof OutlineRenderer>[0];
            },
            OutlineRenderer
        >,
        any
    >;
    prePassRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRenderer>,
            {
                scene: ConstructorParameters<typeof PrePassRenderer>[0];
            },
            PrePassRenderer
        >,
        any
    >;
    prePassRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof PrePassRendererSceneComponent>[0];
            },
            PrePassRendererSceneComponent
        >,
        any
    >;
    rSMCreatePluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RSMCreatePluginMaterial>,
            {
                material: ConstructorParameters<typeof RSMCreatePluginMaterial>[0];
            },
            RSMCreatePluginMaterial
        >,
        any
    >;
    reflectiveShadowMap: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectiveShadowMap>,
            {
                scene: ConstructorParameters<typeof ReflectiveShadowMap>[0];
                light: ConstructorParameters<typeof ReflectiveShadowMap>[1];
                textureDimensions: ConstructorParameters<typeof ReflectiveShadowMap>[2];
            },
            ReflectiveShadowMap
        >,
        any
    >;
    renderingGroup: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderingGroup>,
            {
                index: ConstructorParameters<typeof RenderingGroup>[0];
                scene: ConstructorParameters<typeof RenderingGroup>[1];
                opaqueSortCompareFn: ConstructorParameters<typeof RenderingGroup>[2];
                alphaTestSortCompareFn: ConstructorParameters<typeof RenderingGroup>[3];
                transparentSortCompareFn: ConstructorParameters<typeof RenderingGroup>[4];
            },
            RenderingGroup
        >,
        any
    >;
    renderingManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderingManager>,
            {
                scene: ConstructorParameters<typeof RenderingManager>[0];
            },
            RenderingManager
        >,
        any
    >;
    screenSpaceReflections2Configuration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceReflections2Configuration>,
            {
                useScreenspaceDepth: ConstructorParameters<typeof ScreenSpaceReflections2Configuration>[0];
            },
            ScreenSpaceReflections2Configuration
        >,
        any
    >;
    screenSpaceReflectionsConfiguration: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflectionsConfiguration>, {}, ScreenSpaceReflectionsConfiguration>,
        any
    >;
    sSAO2Configuration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SSAO2Configuration>, {}, SSAO2Configuration>, any>;
    subSurfaceConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceConfiguration>,
            {
                scene: ConstructorParameters<typeof SubSurfaceConfiguration>[0];
            },
            SubSurfaceConfiguration
        >,
        any
    >;
    subSurfaceSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceSceneComponent>,
            {
                scene: ConstructorParameters<typeof SubSurfaceSceneComponent>[0];
            },
            SubSurfaceSceneComponent
        >,
        any
    >;
    utilityLayerRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UtilityLayerRenderer>,
            {
                originalScene: ConstructorParameters<typeof UtilityLayerRenderer>[0];
                handleEvents: ConstructorParameters<typeof UtilityLayerRenderer>[1];
            },
            UtilityLayerRenderer
        >,
        any
    >;
    sprite: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Sprite>,
            {
                name: ConstructorParameters<typeof Sprite>[0];
                manager: ConstructorParameters<typeof Sprite>[1];
            },
            Sprite
        >,
        any
    >;
    spriteManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpriteManager>,
            {
                name: ConstructorParameters<typeof SpriteManager>[0];
                imgUrl: ConstructorParameters<typeof SpriteManager>[1];
                capacity: ConstructorParameters<typeof SpriteManager>[2];
                cellSize: ConstructorParameters<typeof SpriteManager>[3];
                scene: ConstructorParameters<typeof SpriteManager>[4];
                epsilon: ConstructorParameters<typeof SpriteManager>[5];
                samplingMode: ConstructorParameters<typeof SpriteManager>[6];
                fromPacked: ConstructorParameters<typeof SpriteManager>[7];
                spriteJSON: ConstructorParameters<typeof SpriteManager>[8];
                options: ConstructorParameters<typeof SpriteManager>[9];
            },
            SpriteManager
        >,
        any
    >;
    spriteMap: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpriteMap>,
            {
                name: ConstructorParameters<typeof SpriteMap>[0];
                atlasJSON: ConstructorParameters<typeof SpriteMap>[1];
                spriteSheet: ConstructorParameters<typeof SpriteMap>[2];
                options: ConstructorParameters<typeof SpriteMap>[3];
                scene: ConstructorParameters<typeof SpriteMap>[4];
            },
            SpriteMap
        >,
        any
    >;
    spritePackedManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpritePackedManager>,
            {
                name: ConstructorParameters<typeof SpritePackedManager>[0];
                imgUrl: ConstructorParameters<typeof SpritePackedManager>[1];
                capacity: ConstructorParameters<typeof SpritePackedManager>[2];
                scene: ConstructorParameters<typeof SpritePackedManager>[3];
                spriteJSON: ConstructorParameters<typeof SpritePackedManager>[4];
                epsilon: ConstructorParameters<typeof SpritePackedManager>[5];
                samplingMode: ConstructorParameters<typeof SpritePackedManager>[6];
                options: ConstructorParameters<typeof SpritePackedManager>[7];
            },
            SpritePackedManager
        >,
        any
    >;
    spriteRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpriteRenderer>,
            {
                engine: ConstructorParameters<typeof SpriteRenderer>[0];
                capacity: ConstructorParameters<typeof SpriteRenderer>[1];
                epsilon: ConstructorParameters<typeof SpriteRenderer>[2];
                scene: ConstructorParameters<typeof SpriteRenderer>[3];
                rendererOptions: ConstructorParameters<typeof SpriteRenderer>[4];
            },
            SpriteRenderer
        >,
        any
    >;
    spriteSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpriteSceneComponent>,
            {
                scene: ConstructorParameters<typeof SpriteSceneComponent>[0];
            },
            SpriteSceneComponent
        >,
        any
    >;
    thinSprite: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinSprite>, {}, ThinSprite>, any>;
    alphaState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AlphaState>, {}, AlphaState>, any>;
    depthCullingState: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthCullingState>,
            {
                reset: ConstructorParameters<typeof DepthCullingState>[0];
            },
            DepthCullingState
        >,
        any
    >;
    stencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StencilState>, {}, StencilState>, any>;
    stencilStateComposer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StencilStateComposer>,
            {
                reset: ConstructorParameters<typeof StencilStateComposer>[0];
            },
            StencilStateComposer
        >,
        any
    >;
    webXRCompositionLayerRenderTargetTextureProvider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRCompositionLayerRenderTargetTextureProvider>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRCompositionLayerRenderTargetTextureProvider>[0];
                _xrWebGLBinding: ConstructorParameters<typeof WebXRCompositionLayerRenderTargetTextureProvider>[1];
                layerWrapper: ConstructorParameters<typeof WebXRCompositionLayerRenderTargetTextureProvider>[2];
            },
            WebXRCompositionLayerRenderTargetTextureProvider
        >,
        any
    >;
    webXRCompositionLayerWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRCompositionLayerWrapper>,
            {
                getWidth: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[0];
                getHeight: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[1];
                layer: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[2];
                layerType: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[3];
                isMultiview: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[4];
                createRTTProvider: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[5];
                _originalInternalTexture: ConstructorParameters<typeof WebXRCompositionLayerWrapper>[6];
            },
            WebXRCompositionLayerWrapper
        >,
        any
    >;
    webXRProjectionLayerWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRProjectionLayerWrapper>,
            {
                layer: ConstructorParameters<typeof WebXRProjectionLayerWrapper>[0];
                isMultiview: ConstructorParameters<typeof WebXRProjectionLayerWrapper>[1];
                xrGLBinding: ConstructorParameters<typeof WebXRProjectionLayerWrapper>[2];
            },
            WebXRProjectionLayerWrapper
        >,
        any
    >;
    webXRAbstractFeature: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAbstractFeature>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRAbstractFeature>[0];
            },
            WebXRAbstractFeature
        >,
        any
    >;
    webXRAnchorSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAnchorSystem>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRAnchorSystem>[0];
                _options: ConstructorParameters<typeof WebXRAnchorSystem>[1];
            },
            WebXRAnchorSystem
        >,
        any
    >;
    webXRBackgroundRemover: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRBackgroundRemover>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRBackgroundRemover>[0];
                options: ConstructorParameters<typeof WebXRBackgroundRemover>[1];
            },
            WebXRBackgroundRemover
        >,
        any
    >;
    webXRControllerMovement: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerMovement>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerMovement>[0];
                options: ConstructorParameters<typeof WebXRControllerMovement>[1];
            },
            WebXRControllerMovement
        >,
        any
    >;
    webXRControllerPhysics: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerPhysics>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerPhysics>[0];
                _options: ConstructorParameters<typeof WebXRControllerPhysics>[1];
            },
            WebXRControllerPhysics
        >,
        any
    >;
    webXRControllerPointerSelection: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerPointerSelection>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerPointerSelection>[0];
                _options: ConstructorParameters<typeof WebXRControllerPointerSelection>[1];
            },
            WebXRControllerPointerSelection
        >,
        any
    >;
    webXRMotionControllerTeleportation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRMotionControllerTeleportation>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRMotionControllerTeleportation>[0];
                _options: ConstructorParameters<typeof WebXRMotionControllerTeleportation>[1];
            },
            WebXRMotionControllerTeleportation
        >,
        any
    >;
    webXRDomOverlay: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRDomOverlay>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRDomOverlay>[0];
                options: ConstructorParameters<typeof WebXRDomOverlay>[1];
            },
            WebXRDomOverlay
        >,
        any
    >;
    webXRDepthSensing: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRDepthSensing>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRDepthSensing>[0];
                options: ConstructorParameters<typeof WebXRDepthSensing>[1];
            },
            WebXRDepthSensing
        >,
        any
    >;
    webXREyeTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREyeTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXREyeTracking>[0];
            },
            WebXREyeTracking
        >,
        any
    >;
    webXRFeaturePointSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRFeaturePointSystem>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRFeaturePointSystem>[0];
            },
            WebXRFeaturePointSystem
        >,
        any
    >;
    webXRHand: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHand>,
            {
                xrController: ConstructorParameters<typeof WebXRHand>[0];
                _jointMeshes: ConstructorParameters<typeof WebXRHand>[1];
                _handMesh: ConstructorParameters<typeof WebXRHand>[2];
                rigMapping: ConstructorParameters<typeof WebXRHand>[3];
                _leftHandedMeshes: ConstructorParameters<typeof WebXRHand>[4];
                _jointsInvisible: ConstructorParameters<typeof WebXRHand>[5];
                _jointScaleFactor: ConstructorParameters<typeof WebXRHand>[6];
            },
            WebXRHand
        >,
        any
    >;
    webXRHandTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHandTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHandTracking>[0];
                options: ConstructorParameters<typeof WebXRHandTracking>[1];
            },
            WebXRHandTracking
        >,
        any
    >;
    webXRHitTest: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHitTest>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHitTest>[0];
                options: ConstructorParameters<typeof WebXRHitTest>[1];
            },
            WebXRHitTest
        >,
        any
    >;
    webXRHitTestLegacy: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHitTestLegacy>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHitTestLegacy>[0];
                options: ConstructorParameters<typeof WebXRHitTestLegacy>[1];
            },
            WebXRHitTestLegacy
        >,
        any
    >;
    webXRImageTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRImageTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRImageTracking>[0];
                options: ConstructorParameters<typeof WebXRImageTracking>[1];
            },
            WebXRImageTracking
        >,
        any
    >;
    webXRLayers: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLayers>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRLayers>[0];
                _options: ConstructorParameters<typeof WebXRLayers>[1];
            },
            WebXRLayers
        >,
        any
    >;
    webXRLightEstimation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLightEstimation>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRLightEstimation>[0];
                options: ConstructorParameters<typeof WebXRLightEstimation>[1];
            },
            WebXRLightEstimation
        >,
        any
    >;
    webXRMeshDetector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRMeshDetector>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRMeshDetector>[0];
                _options: ConstructorParameters<typeof WebXRMeshDetector>[1];
            },
            WebXRMeshDetector
        >,
        any
    >;
    webXRNearInteraction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRNearInteraction>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRNearInteraction>[0];
                _options: ConstructorParameters<typeof WebXRNearInteraction>[1];
            },
            WebXRNearInteraction
        >,
        any
    >;
    webXRPlaneDetector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRPlaneDetector>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRPlaneDetector>[0];
                _options: ConstructorParameters<typeof WebXRPlaneDetector>[1];
            },
            WebXRPlaneDetector
        >,
        any
    >;
    webXRRawCameraAccess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRRawCameraAccess>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRRawCameraAccess>[0];
                options: ConstructorParameters<typeof WebXRRawCameraAccess>[1];
            },
            WebXRRawCameraAccess
        >,
        any
    >;
    webXRSpaceWarp: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSpaceWarp>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarp>[0];
            },
            WebXRSpaceWarp
        >,
        any
    >;
    webXRSpaceWarpRenderTargetTextureProvider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSpaceWarpRenderTargetTextureProvider>,
            {
                _scene: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[0];
                _xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[1];
                _xrWebGLBinding: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[2];
            },
            WebXRSpaceWarpRenderTargetTextureProvider
        >,
        any
    >;
    xRSpaceWarpRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<XRSpaceWarpRenderTarget> & Clonable,
            {
                motionVectorTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[0];
                depthStencilTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[1];
                scene: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[2];
                size: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[3];
            } & TextureProps,
            XRSpaceWarpRenderTarget
        >,
        any
    >;
    webXRWalkingLocomotion: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRWalkingLocomotion>,
            {
                sessionManager: ConstructorParameters<typeof WebXRWalkingLocomotion>[0];
                options: ConstructorParameters<typeof WebXRWalkingLocomotion>[1];
            },
            WebXRWalkingLocomotion
        >,
        any
    >;
    webXRAbstractMotionController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAbstractMotionController>,
            {
                scene: ConstructorParameters<typeof WebXRAbstractMotionController>[0];
                layout: ConstructorParameters<typeof WebXRAbstractMotionController>[1];
                gamepadObject: ConstructorParameters<typeof WebXRAbstractMotionController>[2];
                handedness: ConstructorParameters<typeof WebXRAbstractMotionController>[3];
                _doNotLoadControllerMesh: ConstructorParameters<typeof WebXRAbstractMotionController>[4];
                _controllerCache: ConstructorParameters<typeof WebXRAbstractMotionController>[5];
            },
            WebXRAbstractMotionController
        >,
        any
    >;
    webXRControllerComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerComponent>,
            {
                id: ConstructorParameters<typeof WebXRControllerComponent>[0];
                type: ConstructorParameters<typeof WebXRControllerComponent>[1];
                _buttonIndex: ConstructorParameters<typeof WebXRControllerComponent>[2];
                _axesIndices: ConstructorParameters<typeof WebXRControllerComponent>[3];
            },
            WebXRControllerComponent
        >,
        any
    >;
    webXRGenericHandController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRGenericHandController>,
            {
                scene: ConstructorParameters<typeof WebXRGenericHandController>[0];
                gamepadObject: ConstructorParameters<typeof WebXRGenericHandController>[1];
                handedness: ConstructorParameters<typeof WebXRGenericHandController>[2];
            },
            WebXRGenericHandController
        >,
        any
    >;
    webXRGenericTriggerMotionController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRGenericTriggerMotionController>,
            {
                scene: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[0];
                gamepadObject: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[1];
                handedness: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[2];
            },
            WebXRGenericTriggerMotionController
        >,
        any
    >;
    webXRHTCViveMotionController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHTCViveMotionController>,
            {
                scene: ConstructorParameters<typeof WebXRHTCViveMotionController>[0];
                gamepadObject: ConstructorParameters<typeof WebXRHTCViveMotionController>[1];
                handedness: ConstructorParameters<typeof WebXRHTCViveMotionController>[2];
            },
            WebXRHTCViveMotionController
        >,
        any
    >;
    webXRMicrosoftMixedRealityController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRMicrosoftMixedRealityController>,
            {
                scene: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[0];
                gamepadObject: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[1];
                handedness: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[2];
            },
            WebXRMicrosoftMixedRealityController
        >,
        any
    >;
    webXROculusTouchMotionController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXROculusTouchMotionController>,
            {
                scene: ConstructorParameters<typeof WebXROculusTouchMotionController>[0];
                gamepadObject: ConstructorParameters<typeof WebXROculusTouchMotionController>[1];
                handedness: ConstructorParameters<typeof WebXROculusTouchMotionController>[2];
                _legacyMapping: ConstructorParameters<typeof WebXROculusTouchMotionController>[3];
                _forceLegacyControllers: ConstructorParameters<typeof WebXROculusTouchMotionController>[4];
            },
            WebXROculusTouchMotionController
        >,
        any
    >;
    webXRProfiledMotionController: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRProfiledMotionController>,
            {
                scene: ConstructorParameters<typeof WebXRProfiledMotionController>[0];
                xrInput: ConstructorParameters<typeof WebXRProfiledMotionController>[1];
                _profile: ConstructorParameters<typeof WebXRProfiledMotionController>[2];
                _repositoryUrl: ConstructorParameters<typeof WebXRProfiledMotionController>[3];
                controllerCache: ConstructorParameters<typeof WebXRProfiledMotionController>[4];
            },
            WebXRProfiledMotionController
        >,
        any
    >;
    nativeXRFrame: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRFrame>,
            {
                _nativeImpl: ConstructorParameters<typeof NativeXRFrame>[0];
            },
            NativeXRFrame
        >,
        any
    >;
    nativeXRLayerRenderTargetTextureProvider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRLayerRenderTargetTextureProvider>,
            {
                sessionManager: ConstructorParameters<typeof NativeXRLayerRenderTargetTextureProvider>[0];
                layerWrapper: ConstructorParameters<typeof NativeXRLayerRenderTargetTextureProvider>[1];
            },
            NativeXRLayerRenderTargetTextureProvider
        >,
        any
    >;
    nativeXRLayerWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRLayerWrapper>,
            {
                layer: ConstructorParameters<typeof NativeXRLayerWrapper>[0];
            },
            NativeXRLayerWrapper
        >,
        any
    >;
    nativeXRRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRRenderTarget>,
            {
                _xrSessionManager: ConstructorParameters<typeof NativeXRRenderTarget>[0];
            },
            NativeXRRenderTarget
        >,
        any
    >;
    webXRCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRCamera> & Clonable,
            {
                name: ConstructorParameters<typeof WebXRCamera>[0];
                scene: ConstructorParameters<typeof WebXRCamera>[1];
                _xrSessionManager: ConstructorParameters<typeof WebXRCamera>[2];
            } & WebXRCameraProps,
            WebXRCamera
        >,
        any
    >;
    webXRDefaultExperience: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDefaultExperience>, {}, WebXRDefaultExperience>, any>;
    webXREnterExitUI: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREnterExitUI>,
            {
                _scene: ConstructorParameters<typeof WebXREnterExitUI>[0];
                options: ConstructorParameters<typeof WebXREnterExitUI>[1];
            },
            WebXREnterExitUI
        >,
        any
    >;
    webXREnterExitUIButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREnterExitUIButton>,
            {
                element: ConstructorParameters<typeof WebXREnterExitUIButton>[0];
                sessionMode: ConstructorParameters<typeof WebXREnterExitUIButton>[1];
                referenceSpaceType: ConstructorParameters<typeof WebXREnterExitUIButton>[2];
            },
            WebXREnterExitUIButton
        >,
        any
    >;
    webXRExperienceHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRExperienceHelper>,
            {
                _scene: ConstructorParameters<typeof WebXRExperienceHelper>[0];
            },
            WebXRExperienceHelper
        >,
        any
    >;
    webXRFeaturesManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRFeaturesManager>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRFeaturesManager>[0];
            },
            WebXRFeaturesManager
        >,
        any
    >;
    webXRInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRInput>,
            {
                xrSessionManager: ConstructorParameters<typeof WebXRInput>[0];
                xrCamera: ConstructorParameters<typeof WebXRInput>[1];
                _options: ConstructorParameters<typeof WebXRInput>[2];
            },
            WebXRInput
        >,
        any
    >;
    webXRInputSource: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRInputSource>,
            {
                _scene: ConstructorParameters<typeof WebXRInputSource>[0];
                inputSource: ConstructorParameters<typeof WebXRInputSource>[1];
                _options: ConstructorParameters<typeof WebXRInputSource>[2];
            },
            WebXRInputSource
        >,
        any
    >;
    webXRLayerWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLayerWrapper>,
            {
                getWidth: ConstructorParameters<typeof WebXRLayerWrapper>[0];
                getHeight: ConstructorParameters<typeof WebXRLayerWrapper>[1];
                layer: ConstructorParameters<typeof WebXRLayerWrapper>[2];
                layerType: ConstructorParameters<typeof WebXRLayerWrapper>[3];
                _createRenderTargetTextureProvider: ConstructorParameters<typeof WebXRLayerWrapper>[4];
            },
            WebXRLayerWrapper
        >,
        any
    >;
    webXRManagedOutputCanvas: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRManagedOutputCanvas>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRManagedOutputCanvas>[0];
                _options: ConstructorParameters<typeof WebXRManagedOutputCanvas>[1];
            },
            WebXRManagedOutputCanvas
        >,
        any
    >;
    webXRLayerRenderTargetTextureProvider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLayerRenderTargetTextureProvider>,
            {
                _scene: ConstructorParameters<typeof WebXRLayerRenderTargetTextureProvider>[0];
                layerWrapper: ConstructorParameters<typeof WebXRLayerRenderTargetTextureProvider>[1];
            },
            WebXRLayerRenderTargetTextureProvider
        >,
        any
    >;
    webXRSessionManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSessionManager>,
            {
                scene: ConstructorParameters<typeof WebXRSessionManager>[0];
            },
            WebXRSessionManager
        >,
        any
    >;
    webXRWebGLLayerRenderTargetTextureProvider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRWebGLLayerRenderTargetTextureProvider>,
            {
                scene: ConstructorParameters<typeof WebXRWebGLLayerRenderTargetTextureProvider>[0];
                layerWrapper: ConstructorParameters<typeof WebXRWebGLLayerRenderTargetTextureProvider>[1];
            },
            WebXRWebGLLayerRenderTargetTextureProvider
        >,
        any
    >;
    webXRWebGLLayerWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRWebGLLayerWrapper>,
            {
                layer: ConstructorParameters<typeof WebXRWebGLLayerWrapper>[0];
            },
            WebXRWebGLLayerWrapper
        >,
        any
    >;
    abstractAssetContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAssetContainer>, {}, AbstractAssetContainer>, any>;
    assetContainer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AssetContainer>,
            {
                scene: ConstructorParameters<typeof AssetContainer>[0];
            },
            AssetContainer
        >,
        any
    >;
    instantiatedEntries: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiatedEntries>, {}, InstantiatedEntries>, any>;
    node: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Node> & Clonable,
            {
                name: ConstructorParameters<typeof Node>[0];
                scene: ConstructorParameters<typeof Node>[1];
                isPure: ConstructorParameters<typeof Node>[2];
            },
            Node
        >,
        any
    >;
    scene: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Scene>,
            {
                engine: ConstructorParameters<typeof Scene>[0];
                options: ConstructorParameters<typeof Scene>[1];
            },
            Scene
        >,
        any
    >;
    stage: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Stage>,
            {
                items: ConstructorParameters<typeof Stage>[0];
            },
            Stage
        >,
        any
    >;
}
