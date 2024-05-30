//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
import { AbstractActionManager } from '@babylonjs/core/Actions/abstractActionManager';
import { Action } from '@babylonjs/core/Actions/action';
import { ActionEvent } from '@babylonjs/core/Actions/actionEvent';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { Condition } from '@babylonjs/core/Actions/condition';
import { InterpolateValueAction } from '@babylonjs/core/Actions/interpolateValueAction';
import { Animatable } from '@babylonjs/core/Animations/animatable';
import { Animation } from '@babylonjs/core/Animations/animation';
import { AnimationEvent } from '@babylonjs/core/Animations/animationEvent';
import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup';
import { AnimationGroupMask } from '@babylonjs/core/Animations/animationGroupMask';
import { AnimationPropertiesOverride } from '@babylonjs/core/Animations/animationPropertiesOverride';
import { AnimationRange } from '@babylonjs/core/Animations/animationRange';
import { PathCursor } from '@babylonjs/core/Animations/pathCursor';
import { RuntimeAnimation } from '@babylonjs/core/Animations/runtimeAnimation';
import { Analyser } from '@babylonjs/core/Audio/analyser';
import { AudioEngine } from '@babylonjs/core/Audio/audioEngine';
import { AudioSceneComponent } from '@babylonjs/core/Audio/audioSceneComponent';
import { Sound } from '@babylonjs/core/Audio/sound';
import { SoundTrack } from '@babylonjs/core/Audio/soundTrack';
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
import { AnaglyphArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera';
import { AnaglyphFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera';
import { AnaglyphGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera';
import { AnaglyphUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera';
import { StereoscopicArcRotateCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera';
import { StereoscopicFreeCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera';
import { StereoscopicGamepadCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera';
import { StereoscopicScreenUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicScreenUniversalCamera';
import { StereoscopicUniversalCamera } from '@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { ArcRotateCameraInputsManager } from '@babylonjs/core/Cameras/arcRotateCameraInputsManager';
import { Camera } from '@babylonjs/core/Cameras/camera';
import { CameraInputsManager } from '@babylonjs/core/Cameras/cameraInputsManager';
import { DeviceOrientationCamera } from '@babylonjs/core/Cameras/deviceOrientationCamera';
import { FlyCamera } from '@babylonjs/core/Cameras/flyCamera';
import { FlyCameraInputsManager } from '@babylonjs/core/Cameras/flyCameraInputsManager';
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
import { IntersectionInfo } from '@babylonjs/core/Collisions/intersectionInfo';
import { PickingInfo } from '@babylonjs/core/Collisions/pickingInfo';
import { ComputeEffect } from '@babylonjs/core/Compute/computeEffect';
import { ComputeShader } from '@babylonjs/core/Compute/computeShader';
import { Octree } from '@babylonjs/core/Culling/Octrees/octree';
import { OctreeBlock } from '@babylonjs/core/Culling/Octrees/octreeBlock';
import { OctreeSceneComponent } from '@babylonjs/core/Culling/Octrees/octreeSceneComponent';
import { BoundingBox } from '@babylonjs/core/Culling/boundingBox';
import { BoundingInfo } from '@babylonjs/core/Culling/boundingInfo';
import { BoundingSphere } from '@babylonjs/core/Culling/boundingSphere';
import { Ray } from '@babylonjs/core/Culling/ray';
import { AxesViewer } from '@babylonjs/core/Debug/axesViewer';
import { BoneAxesViewer } from '@babylonjs/core/Debug/boneAxesViewer';
import { DebugLayer } from '@babylonjs/core/Debug/debugLayer';
import { DirectionalLightFrustumViewer } from '@babylonjs/core/Debug/directionalLightFrustumViewer';
import { PhysicsViewer } from '@babylonjs/core/Debug/physicsViewer';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { SkeletonViewer } from '@babylonjs/core/Debug/skeletonViewer';
import { DeviceSource } from '@babylonjs/core/DeviceInput/InputDevices/deviceSource';
import { DeviceSourceManager } from '@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager';
import { InternalDeviceSourceManager } from '@babylonjs/core/DeviceInput/internalDeviceSourceManager';
import { NativeDeviceInputSystem } from '@babylonjs/core/DeviceInput/nativeDeviceInputSystem';
import { WebDeviceInputSystem } from '@babylonjs/core/DeviceInput/webDeviceInputSystem';
import { NativeDataStream } from '@babylonjs/core/Engines/Native/nativeDataStream';
import { NativeHardwareTexture } from '@babylonjs/core/Engines/Native/nativeHardwareTexture';
import { NativePipelineContext } from '@babylonjs/core/Engines/Native/nativePipelineContext';
import { NativeRenderTargetWrapper } from '@babylonjs/core/Engines/Native/nativeRenderTargetWrapper';
import { NativeShaderProcessingContext } from '@babylonjs/core/Engines/Native/nativeShaderProcessingContext';
import { ValidatedNativeDataStream } from '@babylonjs/core/Engines/Native/validatedNativeDataStream';
import { ShaderDefineArithmeticOperator } from '@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineArithmeticOperator';
import { ShaderDefineIsDefinedOperator } from '@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineIsDefinedOperator';
import { ShaderCodeCursor } from '@babylonjs/core/Engines/Processors/shaderCodeCursor';
import { ShaderCodeInliner } from '@babylonjs/core/Engines/Processors/shaderCodeInliner';
import { ShaderCodeNode } from '@babylonjs/core/Engines/Processors/shaderCodeNode';
import { WebGLHardwareTexture } from '@babylonjs/core/Engines/WebGL/webGLHardwareTexture';
import { WebGLPipelineContext } from '@babylonjs/core/Engines/WebGL/webGLPipelineContext';
import { WebGLRenderTargetWrapper } from '@babylonjs/core/Engines/WebGL/webGLRenderTargetWrapper';
import { AbstractEngine } from '@babylonjs/core/Engines/abstractEngine';
import { Engine } from '@babylonjs/core/Engines/engine';
import { NativeEngine } from '@babylonjs/core/Engines/nativeEngine';
import { NullEngine } from '@babylonjs/core/Engines/nullEngine';
import { RenderTargetWrapper } from '@babylonjs/core/Engines/renderTargetWrapper';
import { ThinEngine } from '@babylonjs/core/Engines/thinEngine';
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
import { Gamepad } from '@babylonjs/core/Gamepads/gamepad';
import { GamepadManager } from '@babylonjs/core/Gamepads/gamepadManager';
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
import { EffectLayer } from '@babylonjs/core/Layers/effectLayer';
import { EffectLayerSceneComponent } from '@babylonjs/core/Layers/effectLayerSceneComponent';
import { GlowLayer } from '@babylonjs/core/Layers/glowLayer';
import { HighlightLayer } from '@babylonjs/core/Layers/highlightLayer';
import { Layer } from '@babylonjs/core/Layers/layer';
import { LayerSceneComponent } from '@babylonjs/core/Layers/layerSceneComponent';
import { LensFlare } from '@babylonjs/core/LensFlares/lensFlare';
import { LensFlareSystem } from '@babylonjs/core/LensFlares/lensFlareSystem';
import { LensFlareSystemSceneComponent } from '@babylonjs/core/LensFlares/lensFlareSystemSceneComponent';
import { CascadedShadowGenerator } from '@babylonjs/core/Lights/Shadows/cascadedShadowGenerator';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { ShadowGeneratorSceneComponent } from '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Light } from '@babylonjs/core/Lights/light';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { ShadowLight } from '@babylonjs/core/Lights/shadowLight';
import { SpotLight } from '@babylonjs/core/Lights/spotLight';
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { GaussianSplattingMaterial } from '@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial';
import { GreasedLinePluginMaterial } from '@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial';
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
import { InputBlock } from '@babylonjs/core/Materials/Node/Blocks/Input/inputBlock';
import { PrePassTextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Input/prePassTextureBlock';
import { AnisotropyBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock';
import { ClearCoatBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock';
import { IridescenceBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock';
import { ReflectionBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock';
import { RefractionBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock';
import { SheenBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock';
import { SubSurfaceBlock } from '@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock';
import { ParticleBlendMultiplyBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleBlendMultiplyBlock';
import { ParticleRampGradientBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleRampGradientBlock';
import { ParticleTextureBlock } from '@babylonjs/core/Materials/Node/Blocks/Particle/particleTextureBlock';
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
import { LengthBlock } from '@babylonjs/core/Materials/Node/Blocks/lengthBlock';
import { LerpBlock } from '@babylonjs/core/Materials/Node/Blocks/lerpBlock';
import { MatrixBuilderBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixBuilderBlock';
import { MatrixDeterminantBlock } from '@babylonjs/core/Materials/Node/Blocks/matrixDeterminantBlock';
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
import { NodeMaterialBlock } from '@babylonjs/core/Materials/Node/nodeMaterialBlock';
import { NodeMaterialBuildState } from '@babylonjs/core/Materials/Node/nodeMaterialBuildState';
import { NodeMaterialBuildStateSharedData } from '@babylonjs/core/Materials/Node/nodeMaterialBuildStateSharedData';
import { NodeMaterialConnectionPointCustomObject } from '@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject';
import { OcclusionMaterial } from '@babylonjs/core/Materials/Occlusion/occlusionMaterial';
import { MultiviewRenderTarget } from '@babylonjs/core/Materials/Textures/MultiviewRenderTarget';
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
import { HtmlElementTexture } from '@babylonjs/core/Materials/Textures/htmlElementTexture';
import { InternalTexture } from '@babylonjs/core/Materials/Textures/internalTexture';
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
import { TextureSampler } from '@babylonjs/core/Materials/Textures/textureSampler';
import { ThinRenderTargetTexture } from '@babylonjs/core/Materials/Textures/thinRenderTargetTexture';
import { ThinTexture } from '@babylonjs/core/Materials/Textures/thinTexture';
import { VideoTexture } from '@babylonjs/core/Materials/Textures/videoTexture';
import { ColorCurves } from '@babylonjs/core/Materials/colorCurves';
import { DrawWrapper } from '@babylonjs/core/Materials/drawWrapper';
import { Effect } from '@babylonjs/core/Materials/effect';
import { EffectFallbacks } from '@babylonjs/core/Materials/effectFallbacks';
import { EffectRenderer } from '@babylonjs/core/Materials/effectRenderer';
import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters';
import { ImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration';
import { Material } from '@babylonjs/core/Materials/material';
import { MaterialDefines } from '@babylonjs/core/Materials/materialDefines';
import { MaterialPluginBase } from '@babylonjs/core/Materials/materialPluginBase';
import { MaterialPluginManager } from '@babylonjs/core/Materials/materialPluginManager';
import { MaterialStencilState } from '@babylonjs/core/Materials/materialStencilState';
import { MeshDebugPluginMaterial } from '@babylonjs/core/Materials/meshDebugPluginMaterial';
import { MultiMaterial } from '@babylonjs/core/Materials/multiMaterial';
import { PrePassConfiguration } from '@babylonjs/core/Materials/prePassConfiguration';
import { PushMaterial } from '@babylonjs/core/Materials/pushMaterial';
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import { ShadowDepthWrapper } from '@babylonjs/core/Materials/shadowDepthWrapper';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { UniformBuffer } from '@babylonjs/core/Materials/uniformBuffer';
import { UniformBufferEffectCommonAccessor } from '@babylonjs/core/Materials/uniformBufferEffectCommonAccessor';
import { Halton2DSequence } from '@babylonjs/core/Maths/halton2DSequence';
import { SphericalPolynomial } from '@babylonjs/core/Maths/sphericalPolynomial';
import { DracoCompression } from '@babylonjs/core/Meshes/Compression/dracoCompression';
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
import { NodeGeometryBuildState } from '@babylonjs/core/Meshes/Node/nodeGeometryBuildState';
import { WebGLDataBuffer } from '@babylonjs/core/Meshes/WebGL/webGLDataBuffer';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Buffer } from '@babylonjs/core/Meshes/buffer';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { GoldbergMesh } from '@babylonjs/core/Meshes/goldbergMesh';
import { GroundMesh } from '@babylonjs/core/Meshes/groundMesh';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { CreateBox } from '@babylonjs/core/Meshes/Builders';
import { CreateTiledBox } from '@babylonjs/core/Meshes/Builders';
import { CreateSphere } from '@babylonjs/core/Meshes/Builders';
import { CreateDisc } from '@babylonjs/core/Meshes/Builders';
import { CreateIcoSphere } from '@babylonjs/core/Meshes/Builders';
import { CreateRibbon } from '@babylonjs/core/Meshes/Builders';
import { CreateCylinder } from '@babylonjs/core/Meshes/Builders';
import { CreateTorus } from '@babylonjs/core/Meshes/Builders';
import { CreateTorusKnot } from '@babylonjs/core/Meshes/Builders';
import { CreateLineSystem } from '@babylonjs/core/Meshes/Builders';
import { CreateLines } from '@babylonjs/core/Meshes/Builders';
import { CreateDashedLines } from '@babylonjs/core/Meshes/Builders';
import { ExtrudeShape } from '@babylonjs/core/Meshes/Builders';
import { ExtrudeShapeCustom } from '@babylonjs/core/Meshes/Builders';
import { CreateLathe } from '@babylonjs/core/Meshes/Builders';
import { CreateTiledPlane } from '@babylonjs/core/Meshes/Builders';
import { CreatePlane } from '@babylonjs/core/Meshes/Builders';
import { CreateGround } from '@babylonjs/core/Meshes/Builders';
import { CreateTiledGround } from '@babylonjs/core/Meshes/Builders';
import { CreateGroundFromHeightMap } from '@babylonjs/core/Meshes/Builders';
import { CreatePolygon } from '@babylonjs/core/Meshes/Builders';
import { ExtrudePolygon } from '@babylonjs/core/Meshes/Builders';
import { CreateTube } from '@babylonjs/core/Meshes/Builders';
import { CreatePolyhedron } from '@babylonjs/core/Meshes/Builders';
import { CreateGeodesic } from '@babylonjs/core/Meshes/Builders';
import { CreateGoldberg } from '@babylonjs/core/Meshes/Builders';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders';
import { CreateCapsule } from '@babylonjs/core/Meshes/Builders';
import { CreateText } from '@babylonjs/core/Meshes/Builders';
import { MeshLODLevel } from '@babylonjs/core/Meshes/meshLODLevel';
import { MeshUVSpaceRenderer } from '@babylonjs/core/Meshes/meshUVSpaceRenderer';
import { SubMesh } from '@babylonjs/core/Meshes/subMesh';
import { TrailMesh } from '@babylonjs/core/Meshes/trailMesh';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { DynamicFloat32Array } from '@babylonjs/core/Misc/PerformanceViewer/dynamicFloat32Array';
import { PerformanceViewerCollector } from '@babylonjs/core/Misc/PerformanceViewer/performanceViewerCollector';
import { AssetsManager } from '@babylonjs/core/Misc/assetsManager';
import { CopyTextureToTexture } from '@babylonjs/core/Misc/copyTextureToTexture';
import { DataReader } from '@babylonjs/core/Misc/dataReader';
import { Deferred } from '@babylonjs/core/Misc/deferred';
import { DepthReducer } from '@babylonjs/core/Misc/depthReducer';
import { FilesInput } from '@babylonjs/core/Misc/filesInput';
import { KhronosTextureContainer } from '@babylonjs/core/Misc/khronosTextureContainer';
import { KhronosTextureContainer2 } from '@babylonjs/core/Misc/khronosTextureContainer2';
import { MeshExploder } from '@babylonjs/core/Misc/meshExploder';
import { MinMaxReducer } from '@babylonjs/core/Misc/minMaxReducer';
import { Observable } from '@babylonjs/core/Misc/observable';
import { PerfCounter } from '@babylonjs/core/Misc/perfCounter';
import { PerformanceMonitor } from '@babylonjs/core/Misc/performanceMonitor';
import { PressureObserverWrapper } from '@babylonjs/core/Misc/pressureObserverWrapper';
import { Reflector } from '@babylonjs/core/Misc/reflector';
import { SceneOptimizer } from '@babylonjs/core/Misc/sceneOptimizer';
import { SceneRecorder } from '@babylonjs/core/Misc/sceneRecorder';
import { SmartArray } from '@babylonjs/core/Misc/smartArray';
import { StringDictionary } from '@babylonjs/core/Misc/stringDictionary';
import { TrajectoryClassifier } from '@babylonjs/core/Misc/trajectoryClassifier';
import { VideoRecorder } from '@babylonjs/core/Misc/videoRecorder';
import { VirtualJoystick } from '@babylonjs/core/Misc/virtualJoystick';
import { WebRequest } from '@babylonjs/core/Misc/webRequest';
import { WorkerPool } from '@babylonjs/core/Misc/workerPool';
import { MorphTarget } from '@babylonjs/core/Morph/morphTarget';
import { MorphTargetManager } from '@babylonjs/core/Morph/morphTargetManager';
import { RecastJSPlugin } from '@babylonjs/core/Navigation/Plugins/recastJSPlugin';
import { Database } from '@babylonjs/core/Offline/database';
import { BoxParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/boxParticleEmitter';
import { ConeParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/coneParticleEmitter';
import { CustomParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/customParticleEmitter';
import { CylinderParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/cylinderParticleEmitter';
import { HemisphericParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/hemisphericParticleEmitter';
import { MeshParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/meshParticleEmitter';
import { PointParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/pointParticleEmitter';
import { SphereParticleEmitter } from '@babylonjs/core/Particles/EmitterTypes/sphereParticleEmitter';
import { BaseParticleSystem } from '@babylonjs/core/Particles/baseParticleSystem';
import { CloudPoint } from '@babylonjs/core/Particles/cloudPoint';
import { ComputeShaderParticleSystem } from '@babylonjs/core/Particles/computeShaderParticleSystem';
import { Particle } from '@babylonjs/core/Particles/particle';
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem';
import { ParticleSystemSet } from '@babylonjs/core/Particles/particleSystemSet';
import { PointsCloudSystem } from '@babylonjs/core/Particles/pointsCloudSystem';
import { SolidParticle } from '@babylonjs/core/Particles/solidParticle';
import { SolidParticleSystem } from '@babylonjs/core/Particles/solidParticleSystem';
import { SubEmitter } from '@babylonjs/core/Particles/subEmitter';
import { ThinParticleSystem } from '@babylonjs/core/Particles/thinParticleSystem';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins/cannonJSPlugin';
import { OimoJSPlugin } from '@babylonjs/core/Physics/Plugins/oimoJSPlugin';
import { CastingResult } from '@babylonjs/core/Physics/castingResult';
import { PhysicsEngine } from '@babylonjs/core/Physics/physicsEngine';
import { PhysicsHelper } from '@babylonjs/core/Physics/physicsHelper';
import { PhysicsImpostor } from '@babylonjs/core/Physics/physicsImpostor';
import { PhysicsJoint } from '@babylonjs/core/Physics/physicsJoint';
import { PhysicsRaycastResult } from '@babylonjs/core/Physics/physicsRaycastResult';
import { ProximityCastResult } from '@babylonjs/core/Physics/proximityCastResult';
import { ShapeCastResult } from '@babylonjs/core/Physics/shapeCastResult';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/v1/Plugins/ammoJSPlugin';
import { CannonJSPlugin } from '@babylonjs/core/Physics/v1/Plugins/cannonJSPlugin';
import { OimoJSPlugin } from '@babylonjs/core/Physics/v1/Plugins/oimoJSPlugin';
import { PhysicsEngine } from '@babylonjs/core/Physics/v1/physicsEngine';
import { PhysicsImpostor } from '@babylonjs/core/Physics/v1/physicsImpostor';
import { PhysicsJoint } from '@babylonjs/core/Physics/v1/physicsJoint';
import { HavokPlugin } from '@babylonjs/core/Physics/v2/Plugins/havokPlugin';
import { PhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate';
import { PhysicsBody } from '@babylonjs/core/Physics/v2/physicsBody';
import { PhysicsConstraint } from '@babylonjs/core/Physics/v2/physicsConstraint';
import { PhysicsEngine } from '@babylonjs/core/Physics/v2/physicsEngine';
import { PhysicsShape } from '@babylonjs/core/Physics/v2/physicsShape';
import { Ragdoll } from '@babylonjs/core/Physics/v2/ragdoll';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline';
import { LensRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline';
import { StandardRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/standardRenderingPipeline';
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
import { PassPostProcess } from '@babylonjs/core/PostProcesses/passPostProcess';
import { PostProcess } from '@babylonjs/core/PostProcesses/postProcess';
import { PostProcessManager } from '@babylonjs/core/PostProcesses/postProcessManager';
import { RefractionPostProcess } from '@babylonjs/core/PostProcesses/refractionPostProcess';
import { ScreenSpaceCurvaturePostProcess } from '@babylonjs/core/PostProcesses/screenSpaceCurvaturePostProcess';
import { ScreenSpaceReflectionPostProcess } from '@babylonjs/core/PostProcesses/screenSpaceReflectionPostProcess';
import { SharpenPostProcess } from '@babylonjs/core/PostProcesses/sharpenPostProcess';
import { StereoscopicInterlacePostProcess } from '@babylonjs/core/PostProcesses/stereoscopicInterlacePostProcess';
import { SubSurfaceScatteringPostProcess } from '@babylonjs/core/PostProcesses/subSurfaceScatteringPostProcess';
import { TonemapPostProcess } from '@babylonjs/core/PostProcesses/tonemapPostProcess';
import { VolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess';
import { ReflectionProbe } from '@babylonjs/core/Probes/reflectionProbe';
import { BoundingBoxRenderer } from '@babylonjs/core/Rendering/boundingBoxRenderer';
import { DepthPeelingRenderer } from '@babylonjs/core/Rendering/depthPeelingRenderer';
import { DepthPeelingSceneComponent } from '@babylonjs/core/Rendering/depthPeelingSceneComponent';
import { DepthRenderer } from '@babylonjs/core/Rendering/depthRenderer';
import { DepthRendererSceneComponent } from '@babylonjs/core/Rendering/depthRendererSceneComponent';
import { EdgesRenderer } from '@babylonjs/core/Rendering/edgesRenderer';
import { FluidRenderer } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderer';
import { FluidRenderingDepthTextureCopy } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingDepthTextureCopy';
import { FluidRenderingObject } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObject';
import { FluidRenderingObjectCustomParticles } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles';
import { FluidRenderingObjectParticleSystem } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem';
import { FluidRenderingTargetRenderer } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingTargetRenderer';
import { FluidRenderingTextures } from '@babylonjs/core/Rendering/fluidRenderer/fluidRenderingTextures';
import { GeometryBufferRenderer } from '@babylonjs/core/Rendering/geometryBufferRenderer';
import { GeometryBufferRendererSceneComponent } from '@babylonjs/core/Rendering/geometryBufferRendererSceneComponent';
import { MotionBlurConfiguration } from '@babylonjs/core/Rendering/motionBlurConfiguration';
import { OutlineRenderer } from '@babylonjs/core/Rendering/outlineRenderer';
import { PrePassRenderer } from '@babylonjs/core/Rendering/prePassRenderer';
import { PrePassRendererSceneComponent } from '@babylonjs/core/Rendering/prePassRendererSceneComponent';
import { ReflectiveShadowMap } from '@babylonjs/core/Rendering/reflectiveShadowMap';
import { RenderingGroup } from '@babylonjs/core/Rendering/renderingGroup';
import { RenderingManager } from '@babylonjs/core/Rendering/renderingManager';
import { ScreenSpaceReflections2Configuration } from '@babylonjs/core/Rendering/screenSpaceReflections2Configuration';
import { ScreenSpaceReflectionsConfiguration } from '@babylonjs/core/Rendering/screenSpaceReflectionsConfiguration';
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
import { DepthCullingState } from '@babylonjs/core/States/depthCullingState';
import { StencilState } from '@babylonjs/core/States/stencilState';
import { StencilStateComposer } from '@babylonjs/core/States/stencilStateComposer';
import { WebXRAbstractFeature } from '@babylonjs/core/XR/features/WebXRAbstractFeature';
import { WebXRAnchorSystem } from '@babylonjs/core/XR/features/WebXRAnchorSystem';
import { WebXRBackgroundRemover } from '@babylonjs/core/XR/features/WebXRBackgroundRemover';
import { WebXRControllerMovement } from '@babylonjs/core/XR/features/WebXRControllerMovement';
import { WebXRControllerPhysics } from '@babylonjs/core/XR/features/WebXRControllerPhysics';
import { WebXRControllerPointerSelection } from '@babylonjs/core/XR/features/WebXRControllerPointerSelection';
import { WebXRDepthSensing } from '@babylonjs/core/XR/features/WebXRDepthSensing';
import { WebXREyeTracking } from '@babylonjs/core/XR/features/WebXREyeTracking';
import { WebXRFeaturePointSystem } from '@babylonjs/core/XR/features/WebXRFeaturePointSystem';
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
import { WebXRWalkingLocomotion } from '@babylonjs/core/XR/features/WebXRWalkingLocomotion';
import { WebXRAbstractMotionController } from '@babylonjs/core/XR/motionController/webXRAbstractMotionController';
import { WebXRControllerComponent } from '@babylonjs/core/XR/motionController/webXRControllerComponent';
import { WebXRGenericHandController } from '@babylonjs/core/XR/motionController/webXRGenericHandController';
import { WebXRHTCViveMotionController } from '@babylonjs/core/XR/motionController/webXRHTCViveMotionController';
import { WebXRMicrosoftMixedRealityController } from '@babylonjs/core/XR/motionController/webXRMicrosoftMixedRealityController';
import { WebXROculusTouchMotionController } from '@babylonjs/core/XR/motionController/webXROculusTouchMotionController';
import { WebXRProfiledMotionController } from '@babylonjs/core/XR/motionController/webXRProfiledMotionController';
import { NativeXRFrame } from '@babylonjs/core/XR/native/nativeXRFrame';
import { NativeXRRenderTarget } from '@babylonjs/core/XR/native/nativeXRRenderTarget';
import { WebXRCamera } from '@babylonjs/core/XR/webXRCamera';
import { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';
import { WebXREnterExitUI } from '@babylonjs/core/XR/webXREnterExitUI';
import { WebXRExperienceHelper } from '@babylonjs/core/XR/webXRExperienceHelper';
import { WebXRFeaturesManager } from '@babylonjs/core/XR/webXRFeaturesManager';
import { WebXRInput } from '@babylonjs/core/XR/webXRInput';
import { WebXRInputSource } from '@babylonjs/core/XR/webXRInputSource';
import { WebXRLayerWrapper } from '@babylonjs/core/XR/webXRLayerWrapper';
import { WebXRManagedOutputCanvas } from '@babylonjs/core/XR/webXRManagedOutputCanvas';
import { WebXRSessionManager } from '@babylonjs/core/XR/webXRSessionManager';
import { AbstractScene } from '@babylonjs/core/abstractScene';
import { AssetContainer } from '@babylonjs/core/assetContainer';
import { Node } from '@babylonjs/core/node';
import { Scene } from '@babylonjs/core/scene';

export interface JSXElements {
    abstractActionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractActionManager>>, any>;
    action: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Action>,
            {
                triggerOptions: ConstructorParameters<typeof Action>[0];
                condition: ConstructorParameters<typeof Action>[1];
            }
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
            }
        >,
        any
    >;
    actionManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ActionManager>,
            {
                scene: ConstructorParameters<typeof ActionManager>[0];
            }
        >,
        any
    >;
    condition: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Condition>,
            {
                actionManager: ConstructorParameters<typeof Condition>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    animation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Animation & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Animation>[0];
                targetProperty: ConstructorParameters<typeof Animation>[1];
                framePerSecond: ConstructorParameters<typeof Animation>[2];
                dataType: ConstructorParameters<typeof Animation>[3];
                loopMode: ConstructorParameters<typeof Animation>[4];
                enableBlending: ConstructorParameters<typeof Animation>[5];
            }
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
            }
        >,
        any
    >;
    animationGroup: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationGroup & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnimationGroup>[0];
                scene: ConstructorParameters<typeof AnimationGroup>[1];
                weight: ConstructorParameters<typeof AnimationGroup>[2];
                playOrder: ConstructorParameters<typeof AnimationGroup>[3];
            }
        >,
        any
    >;
    animationGroupMask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationGroupMask>,
            {
                names: ConstructorParameters<typeof AnimationGroupMask>[0];
                mode: ConstructorParameters<typeof AnimationGroupMask>[1];
            }
        >,
        any
    >;
    animationPropertiesOverride: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationPropertiesOverride>>, any>;
    animationRange: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnimationRange & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnimationRange>[0];
                from: ConstructorParameters<typeof AnimationRange>[1];
                to: ConstructorParameters<typeof AnimationRange>[2];
            }
        >,
        any
    >;
    pathCursor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PathCursor>,
            {
                _path: ConstructorParameters<typeof PathCursor>[0];
            }
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
            }
        >,
        any
    >;
    analyser: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Analyser>,
            {
                scene: ConstructorParameters<typeof Analyser>[0];
            }
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
            }
        >,
        any
    >;
    audioSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AudioSceneComponent>,
            {
                scene: ConstructorParameters<typeof AudioSceneComponent>[0];
            }
        >,
        any
    >;
    sound: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Sound & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Sound>[0];
                urlOrArrayBuffer: ConstructorParameters<typeof Sound>[1];
                scene: ConstructorParameters<typeof Sound>[2];
                readyToPlayCallback: ConstructorParameters<typeof Sound>[3];
                options: ConstructorParameters<typeof Sound>[4];
            }
        >,
        any
    >;
    soundTrack: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SoundTrack>,
            {
                scene: ConstructorParameters<typeof SoundTrack>[0];
                options: ConstructorParameters<typeof SoundTrack>[1];
            }
        >,
        any
    >;
    bakedVertexAnimationManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BakedVertexAnimationManager & { cloneBy: string }>,
            {
                scene: ConstructorParameters<typeof BakedVertexAnimationManager>[0];
            }
        >,
        any
    >;
    vertexAnimationBaker: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VertexAnimationBaker>,
            {
                scene: ConstructorParameters<typeof VertexAnimationBaker>[0];
                meshOrSkeleton: ConstructorParameters<typeof VertexAnimationBaker>[1];
            }
        >,
        any
    >;
    autoRotationBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoRotationBehavior>>, any>;
    bouncingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BouncingBehavior>>, any>;
    framingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FramingBehavior>>, any>;
    attachToBoxBehavior: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AttachToBoxBehavior>,
            {
                _ui: ConstructorParameters<typeof AttachToBoxBehavior>[0];
            }
        >,
        any
    >;
    baseSixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSixDofDragBehavior>>, any>;
    fadeInOutBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FadeInOutBehavior>>, any>;
    followBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowBehavior>>, any>;
    handConstraintBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandConstraintBehavior>>, any>;
    multiPointerScaleBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiPointerScaleBehavior>>, any>;
    pointerDragBehavior: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointerDragBehavior>,
            {
                options: ConstructorParameters<typeof PointerDragBehavior>[0];
            }
        >,
        any
    >;
    sixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SixDofDragBehavior>>, any>;
    surfaceMagnetismBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SurfaceMagnetismBehavior>>, any>;
    bone: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Bone & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Bone>[0];
                skeleton: ConstructorParameters<typeof Bone>[1];
                parentBone: ConstructorParameters<typeof Bone>[2];
                localMatrix: ConstructorParameters<typeof Bone>[3];
                restMatrix: ConstructorParameters<typeof Bone>[4];
                bindMatrix: ConstructorParameters<typeof Bone>[5];
                index: ConstructorParameters<typeof Bone>[6];
            }
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
            }
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
            }
        >,
        any
    >;
    skeleton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Skeleton & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Skeleton>[0];
                id: ConstructorParameters<typeof Skeleton>[1];
                scene: ConstructorParameters<typeof Skeleton>[2];
            }
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
            }
        >,
        any
    >;
    dataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataBuffer>>, any>;
    storageBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StorageBuffer>,
            {
                engine: ConstructorParameters<typeof StorageBuffer>[0];
                size: ConstructorParameters<typeof StorageBuffer>[1];
                creationFlags: ConstructorParameters<typeof StorageBuffer>[2];
                label: ConstructorParameters<typeof StorageBuffer>[3];
            }
        >,
        any
    >;
    BaseCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraMouseWheelInput>>, any>;
    BaseCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraPointersInput>>, any>;
    arcRotateCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraGamepadInput>>, any>;
    arcRotateCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraKeyboardMoveInput>>, any>;
    arcRotateCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraMouseWheelInput>>, any>;
    arcRotateCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraPointersInput>>, any>;
    arcRotateCameraVRDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraVRDeviceOrientationInput>>, any>;
    flyCameraKeyboardInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraKeyboardInput>>, any>;
    flyCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraMouseInput>>, any>;
    followCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraKeyboardMoveInput>>, any>;
    followCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraMouseWheelInput>>, any>;
    followCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraPointersInput>>, any>;
    freeCameraDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraDeviceOrientationInput>>, any>;
    freeCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraGamepadInput>>, any>;
    freeCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraKeyboardMoveInput>>, any>;
    freeCameraMouseInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraMouseInput>,
            {
                touchEnabled: ConstructorParameters<typeof FreeCameraMouseInput>[0];
            }
        >,
        any
    >;
    freeCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraMouseWheelInput>>, any>;
    freeCameraTouchInput: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraTouchInput>,
            {
                allowMouse: ConstructorParameters<typeof FreeCameraTouchInput>[0];
            }
        >,
        any
    >;
    anaglyphArcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphArcRotateCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnaglyphArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof AnaglyphArcRotateCamera>[1];
                beta: ConstructorParameters<typeof AnaglyphArcRotateCamera>[2];
                radius: ConstructorParameters<typeof AnaglyphArcRotateCamera>[3];
                target: ConstructorParameters<typeof AnaglyphArcRotateCamera>[4];
                interaxialDistance: ConstructorParameters<typeof AnaglyphArcRotateCamera>[5];
                scene: ConstructorParameters<typeof AnaglyphArcRotateCamera>[6];
            }
        >,
        any
    >;
    anaglyphFreeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphFreeCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnaglyphFreeCamera>[0];
                position: ConstructorParameters<typeof AnaglyphFreeCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphFreeCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphFreeCamera>[3];
            }
        >,
        any
    >;
    anaglyphGamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphGamepadCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnaglyphGamepadCamera>[0];
                position: ConstructorParameters<typeof AnaglyphGamepadCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphGamepadCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphGamepadCamera>[3];
            }
        >,
        any
    >;
    anaglyphUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphUniversalCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnaglyphUniversalCamera>[0];
                position: ConstructorParameters<typeof AnaglyphUniversalCamera>[1];
                interaxialDistance: ConstructorParameters<typeof AnaglyphUniversalCamera>[2];
                scene: ConstructorParameters<typeof AnaglyphUniversalCamera>[3];
            }
        >,
        any
    >;
    stereoscopicArcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicArcRotateCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof StereoscopicArcRotateCamera>[1];
                beta: ConstructorParameters<typeof StereoscopicArcRotateCamera>[2];
                radius: ConstructorParameters<typeof StereoscopicArcRotateCamera>[3];
                target: ConstructorParameters<typeof StereoscopicArcRotateCamera>[4];
                interaxialDistance: ConstructorParameters<typeof StereoscopicArcRotateCamera>[5];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicArcRotateCamera>[6];
                scene: ConstructorParameters<typeof StereoscopicArcRotateCamera>[7];
            }
        >,
        any
    >;
    stereoscopicFreeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicFreeCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicFreeCamera>[0];
                position: ConstructorParameters<typeof StereoscopicFreeCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicFreeCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicFreeCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicFreeCamera>[4];
            }
        >,
        any
    >;
    stereoscopicGamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicGamepadCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicGamepadCamera>[0];
                position: ConstructorParameters<typeof StereoscopicGamepadCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicGamepadCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicGamepadCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicGamepadCamera>[4];
            }
        >,
        any
    >;
    stereoscopicScreenUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicScreenUniversalCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[0];
                position: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[1];
                scene: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[2];
                distanceToProjectionPlane: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[3];
                distanceBetweenEyes: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[4];
            }
        >,
        any
    >;
    stereoscopicUniversalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicUniversalCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicUniversalCamera>[0];
                position: ConstructorParameters<typeof StereoscopicUniversalCamera>[1];
                interaxialDistance: ConstructorParameters<typeof StereoscopicUniversalCamera>[2];
                isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicUniversalCamera>[3];
                scene: ConstructorParameters<typeof StereoscopicUniversalCamera>[4];
            }
        >,
        any
    >;
    arcRotateCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcRotateCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ArcRotateCamera>[0];
                alpha: ConstructorParameters<typeof ArcRotateCamera>[1];
                beta: ConstructorParameters<typeof ArcRotateCamera>[2];
                radius: ConstructorParameters<typeof ArcRotateCamera>[3];
                target: ConstructorParameters<typeof ArcRotateCamera>[4];
                scene: ConstructorParameters<typeof ArcRotateCamera>[5];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof ArcRotateCamera>[6];
            }
        >,
        any
    >;
    arcRotateCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcRotateCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof ArcRotateCameraInputsManager>[0];
            }
        >,
        any
    >;
    camera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Camera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Camera>[0];
                position: ConstructorParameters<typeof Camera>[1];
                scene: ConstructorParameters<typeof Camera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof Camera>[3];
            }
        >,
        any
    >;
    cameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CameraInputsManager>,
            {
                camera: ConstructorParameters<typeof CameraInputsManager>[0];
            }
        >,
        any
    >;
    deviceOrientationCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DeviceOrientationCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DeviceOrientationCamera>[0];
                position: ConstructorParameters<typeof DeviceOrientationCamera>[1];
                scene: ConstructorParameters<typeof DeviceOrientationCamera>[2];
            }
        >,
        any
    >;
    flyCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlyCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FlyCamera>[0];
                position: ConstructorParameters<typeof FlyCamera>[1];
                scene: ConstructorParameters<typeof FlyCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FlyCamera>[3];
            }
        >,
        any
    >;
    flyCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlyCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FlyCameraInputsManager>[0];
            }
        >,
        any
    >;
    followCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FollowCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FollowCamera>[0];
                position: ConstructorParameters<typeof FollowCamera>[1];
                scene: ConstructorParameters<typeof FollowCamera>[2];
                lockedTarget: ConstructorParameters<typeof FollowCamera>[3];
            }
        >,
        any
    >;
    followCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FollowCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FollowCameraInputsManager>[0];
            }
        >,
        any
    >;
    freeCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FreeCamera>[0];
                position: ConstructorParameters<typeof FreeCamera>[1];
                scene: ConstructorParameters<typeof FreeCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FreeCamera>[3];
            }
        >,
        any
    >;
    freeCameraInputsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FreeCameraInputsManager>,
            {
                camera: ConstructorParameters<typeof FreeCameraInputsManager>[0];
            }
        >,
        any
    >;
    gamepadCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GamepadCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GamepadCamera>[0];
                position: ConstructorParameters<typeof GamepadCamera>[1];
                scene: ConstructorParameters<typeof GamepadCamera>[2];
            }
        >,
        any
    >;
    targetCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TargetCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TargetCamera>[0];
                position: ConstructorParameters<typeof TargetCamera>[1];
                scene: ConstructorParameters<typeof TargetCamera>[2];
                setActiveOnSceneIfNoneActive: ConstructorParameters<typeof TargetCamera>[3];
            }
        >,
        any
    >;
    touchCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TouchCamera>[0];
                position: ConstructorParameters<typeof TouchCamera>[1];
                scene: ConstructorParameters<typeof TouchCamera>[2];
            }
        >,
        any
    >;
    universalCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UniversalCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof UniversalCamera>[0];
                position: ConstructorParameters<typeof UniversalCamera>[1];
                scene: ConstructorParameters<typeof UniversalCamera>[2];
            }
        >,
        any
    >;
    virtualJoysticksCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VirtualJoysticksCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VirtualJoysticksCamera>[0];
                position: ConstructorParameters<typeof VirtualJoysticksCamera>[1];
                scene: ConstructorParameters<typeof VirtualJoysticksCamera>[2];
            }
        >,
        any
    >;
    collider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Collider>>, any>;
    intersectionInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IntersectionInfo>,
            {
                bu: ConstructorParameters<typeof IntersectionInfo>[0];
                bv: ConstructorParameters<typeof IntersectionInfo>[1];
                distance: ConstructorParameters<typeof IntersectionInfo>[2];
            }
        >,
        any
    >;
    pickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PickingInfo>>, any>;
    computeEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeEffect>,
            {
                baseName: ConstructorParameters<typeof ComputeEffect>[0];
                options: ConstructorParameters<typeof ComputeEffect>[1];
                engine: ConstructorParameters<typeof ComputeEffect>[2];
                key: ConstructorParameters<typeof ComputeEffect>[3];
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    octreeSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OctreeSceneComponent>,
            {
                scene: ConstructorParameters<typeof OctreeSceneComponent>[0];
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    ray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Ray & { cloneBy: string }>,
            {
                origin: ConstructorParameters<typeof Ray>[0];
                direction: ConstructorParameters<typeof Ray>[1];
                length: ConstructorParameters<typeof Ray>[2];
                epsilon: ConstructorParameters<typeof Ray>[3];
            }
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
            }
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
            }
        >,
        any
    >;
    debugLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DebugLayer>,
            {
                scene: ConstructorParameters<typeof DebugLayer>[0];
            }
        >,
        any
    >;
    directionalLightFrustumViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DirectionalLightFrustumViewer>,
            {
                light: ConstructorParameters<typeof DirectionalLightFrustumViewer>[0];
                camera: ConstructorParameters<typeof DirectionalLightFrustumViewer>[1];
            }
        >,
        any
    >;
    physicsViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsViewer>,
            {
                scene: ConstructorParameters<typeof PhysicsViewer>[0];
            }
        >,
        any
    >;
    rayHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RayHelper>,
            {
                ray: ConstructorParameters<typeof RayHelper>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    deviceSourceManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DeviceSourceManager>,
            {
                engine: ConstructorParameters<typeof DeviceSourceManager>[0];
            }
        >,
        any
    >;
    internalDeviceSourceManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InternalDeviceSourceManager>,
            {
                engine: ConstructorParameters<typeof InternalDeviceSourceManager>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    nativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeDataStream>>, any>;
    nativeHardwareTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeHardwareTexture>,
            {
                existingTexture: ConstructorParameters<typeof NativeHardwareTexture>[0];
                engine: ConstructorParameters<typeof NativeHardwareTexture>[1];
            }
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
            }
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
            }
        >,
        any
    >;
    nativeShaderProcessingContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeShaderProcessingContext>>, any>;
    validatedNativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValidatedNativeDataStream>>, any>;
    shaderDefineArithmeticOperator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderDefineArithmeticOperator>,
            {
                define: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[0];
                operand: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[1];
                testValue: ConstructorParameters<typeof ShaderDefineArithmeticOperator>[2];
            }
        >,
        any
    >;
    shaderDefineIsDefinedOperator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderDefineIsDefinedOperator>,
            {
                define: ConstructorParameters<typeof ShaderDefineIsDefinedOperator>[0];
                not: ConstructorParameters<typeof ShaderDefineIsDefinedOperator>[1];
            }
        >,
        any
    >;
    shaderCodeCursor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeCursor>>, any>;
    shaderCodeInliner: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderCodeInliner>,
            {
                sourceCode: ConstructorParameters<typeof ShaderCodeInliner>[0];
                numMaxIterations: ConstructorParameters<typeof ShaderCodeInliner>[1];
            }
        >,
        any
    >;
    shaderCodeNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeNode>>, any>;
    webGLHardwareTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLHardwareTexture>,
            {
                existingTexture: ConstructorParameters<typeof WebGLHardwareTexture>[0];
                context: ConstructorParameters<typeof WebGLHardwareTexture>[1];
            }
        >,
        any
    >;
    webGLPipelineContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLPipelineContext>>, any>;
    webGLRenderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLRenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof WebGLRenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof WebGLRenderTargetWrapper>[1];
                size: ConstructorParameters<typeof WebGLRenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof WebGLRenderTargetWrapper>[3];
                context: ConstructorParameters<typeof WebGLRenderTargetWrapper>[4];
            }
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
            }
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
            }
        >,
        any
    >;
    nativeEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeEngine>,
            {
                options: ConstructorParameters<typeof NativeEngine>[0];
            }
        >,
        any
    >;
    nullEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NullEngine>,
            {
                options: ConstructorParameters<typeof NullEngine>[0];
            }
        >,
        any
    >;
    renderTargetWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderTargetWrapper>,
            {
                isMulti: ConstructorParameters<typeof RenderTargetWrapper>[0];
                isCube: ConstructorParameters<typeof RenderTargetWrapper>[1];
                size: ConstructorParameters<typeof RenderTargetWrapper>[2];
                engine: ConstructorParameters<typeof RenderTargetWrapper>[3];
                label: ConstructorParameters<typeof RenderTargetWrapper>[4];
            }
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
            }
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
            }
        >,
        any
    >;
    flowGraphCachedOperationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCachedOperationBlock>,
            {
                outputRichType: ConstructorParameters<typeof FlowGraphCachedOperationBlock>[0];
                config: ConstructorParameters<typeof FlowGraphCachedOperationBlock>[1];
            }
        >,
        any
    >;
    flowGraphConditionalDataBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConditionalDataBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConditionalDataBlock>[0];
            }
        >,
        any
    >;
    flowGraphConstantBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConstantBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConstantBlock>[0];
            }
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
            }
        >,
        any
    >;
    flowGraphCoordinateTransformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCoordinateTransformBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCoordinateTransformBlock>[0];
            }
        >,
        any
    >;
    flowGraphGetPropertyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGetPropertyBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGetPropertyBlock>[0];
            }
        >,
        any
    >;
    flowGraphGetVariableBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphGetVariableBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphGetVariableBlock>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    flowGraphMeshPickEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMeshPickEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMeshPickEventBlock>[0];
            }
        >,
        any
    >;
    flowGraphReceiveCustomEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphReceiveCustomEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphReceiveCustomEventBlock>[0];
            }
        >,
        any
    >;
    flowGraphPauseAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPauseAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPauseAnimationBlock>[0];
            }
        >,
        any
    >;
    flowGraphPlayAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPlayAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPlayAnimationBlock>[0];
            }
        >,
        any
    >;
    flowGraphStopAnimationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphStopAnimationBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphStopAnimationBlock>[0];
            }
        >,
        any
    >;
    flowGraphPlayAudioBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPlayAudioBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphPlayAudioBlock>[0];
            }
        >,
        any
    >;
    flowGraphStopAudioBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphStopAudioBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphStopAudioBlock>[0];
            }
        >,
        any
    >;
    flowGraphBranchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBranchBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBranchBlock>[0];
            }
        >,
        any
    >;
    flowGraphCounterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCounterBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphCounterBlock>[0];
            }
        >,
        any
    >;
    flowGraphDebounceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDebounceBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDebounceBlock>[0];
            }
        >,
        any
    >;
    flowGraphDoNBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphDoNBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphDoNBlock>[0];
            }
        >,
        any
    >;
    flowGraphFlipFlopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphFlipFlopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphFlipFlopBlock>[0];
            }
        >,
        any
    >;
    flowGraphForLoopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphForLoopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphForLoopBlock>[0];
            }
        >,
        any
    >;
    flowGraphMultiGateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphMultiGateBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphMultiGateBlock>[0];
            }
        >,
        any
    >;
    flowGraphSequenceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSequenceBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSequenceBlock>[0];
            }
        >,
        any
    >;
    flowGraphSwitchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSwitchBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSwitchBlock>[0];
            }
        >,
        any
    >;
    flowGraphThrottleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphThrottleBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphThrottleBlock>[0];
            }
        >,
        any
    >;
    flowGraphTimerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphTimerBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphTimerBlock>[0];
            }
        >,
        any
    >;
    flowGraphWaitAllBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphWaitAllBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphWaitAllBlock>[0];
            }
        >,
        any
    >;
    flowGraphWhileLoopBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphWhileLoopBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphWhileLoopBlock>[0];
            }
        >,
        any
    >;
    flowGraphConsoleLogBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphConsoleLogBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphConsoleLogBlock>[0];
            }
        >,
        any
    >;
    flowGraphSendCustomEventBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSendCustomEventBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSendCustomEventBlock>[0];
            }
        >,
        any
    >;
    flowGraphSetPropertyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSetPropertyBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSetPropertyBlock>[0];
            }
        >,
        any
    >;
    flowGraphSetVariableBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphSetVariableBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphSetVariableBlock>[0];
            }
        >,
        any
    >;
    flowGraph: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraph>,
            {
                params: ConstructorParameters<typeof FlowGraph>[0];
            }
        >,
        any
    >;
    flowGraphAsyncExecutionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphAsyncExecutionBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphAsyncExecutionBlock>[0];
            }
        >,
        any
    >;
    flowGraphBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphBlock>[0];
            }
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
            }
        >,
        any
    >;
    flowGraphContext: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphContext>,
            {
                params: ConstructorParameters<typeof FlowGraphContext>[0];
            }
        >,
        any
    >;
    flowGraphContextLogger: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphContextLogger>,
            {
                _context: ConstructorParameters<typeof FlowGraphContextLogger>[0];
            }
        >,
        any
    >;
    flowGraphCoordinator: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphCoordinator>,
            {
                config: ConstructorParameters<typeof FlowGraphCoordinator>[0];
            }
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
            }
        >,
        any
    >;
    flowGraphExecutionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphExecutionBlock>,
            {
                config: ConstructorParameters<typeof FlowGraphExecutionBlock>[0];
            }
        >,
        any
    >;
    flowGraphExecutionBlockWithOutSignal: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphExecutionBlockWithOutSignal>,
            {
                config: ConstructorParameters<typeof FlowGraphExecutionBlockWithOutSignal>[0];
            }
        >,
        any
    >;
    flowGraphInteger: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphInteger>,
            {
                value: ConstructorParameters<typeof FlowGraphInteger>[0];
            }
        >,
        any
    >;
    flowGraphPathConverter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPathConverter>,
            {
                _context: ConstructorParameters<typeof FlowGraphPathConverter>[0];
                _separator: ConstructorParameters<typeof FlowGraphPathConverter>[1];
            }
        >,
        any
    >;
    flowGraphPathConverterComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FlowGraphPathConverterComponent>,
            {
                path: ConstructorParameters<typeof FlowGraphPathConverterComponent>[0];
                ownerBlock: ConstructorParameters<typeof FlowGraphPathConverterComponent>[1];
            }
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
            }
        >,
        any
    >;
    gamepadManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GamepadManager>,
            {
                _scene: ConstructorParameters<typeof GamepadManager>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    boundingBoxGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBoxGizmo>,
            {
                color: ConstructorParameters<typeof BoundingBoxGizmo>[0];
                gizmoLayer: ConstructorParameters<typeof BoundingBoxGizmo>[1];
            }
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
            }
        >,
        any
    >;
    gizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Gizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof Gizmo>[0];
            }
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
            }
        >,
        any
    >;
    lightGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightGizmo>,
            {
                gizmoLayer: ConstructorParameters<typeof LightGizmo>[0];
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    environmentHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EnvironmentHelper>,
            {
                options: ConstructorParameters<typeof EnvironmentHelper>[0];
                scene: ConstructorParameters<typeof EnvironmentHelper>[1];
            }
        >,
        any
    >;
    textureDome: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureDome & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TextureDome>[0];
                textureUrlOrElement: ConstructorParameters<typeof TextureDome>[1];
                options: ConstructorParameters<typeof TextureDome>[2];
                scene: ConstructorParameters<typeof TextureDome>[3];
                onError: ConstructorParameters<typeof TextureDome>[4];
            }
        >,
        any
    >;
    pointerPickingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerPickingConfiguration>>, any>;
    engineInstrumentation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EngineInstrumentation>,
            {
                engine: ConstructorParameters<typeof EngineInstrumentation>[0];
            }
        >,
        any
    >;
    sceneInstrumentation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneInstrumentation>,
            {
                scene: ConstructorParameters<typeof SceneInstrumentation>[0];
            }
        >,
        any
    >;
    effectLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectLayer>,
            {
                name: ConstructorParameters<typeof EffectLayer>[0];
                scene: ConstructorParameters<typeof EffectLayer>[1];
            }
        >,
        any
    >;
    effectLayerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectLayerSceneComponent>,
            {
                scene: ConstructorParameters<typeof EffectLayerSceneComponent>[0];
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    layerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LayerSceneComponent>,
            {
                scene: ConstructorParameters<typeof LayerSceneComponent>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    lensFlareSystemSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LensFlareSystemSceneComponent>,
            {
                scene: ConstructorParameters<typeof LensFlareSystemSceneComponent>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    shadowGeneratorSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowGeneratorSceneComponent>,
            {
                scene: ConstructorParameters<typeof ShadowGeneratorSceneComponent>[0];
            }
        >,
        any
    >;
    directionalLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DirectionalLight & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DirectionalLight>[0];
                direction: ConstructorParameters<typeof DirectionalLight>[1];
                scene: ConstructorParameters<typeof DirectionalLight>[2];
            }
        >,
        any
    >;
    hemisphericLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HemisphericLight & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof HemisphericLight>[0];
                direction: ConstructorParameters<typeof HemisphericLight>[1];
                scene: ConstructorParameters<typeof HemisphericLight>[2];
            }
        >,
        any
    >;
    light: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Light & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Light>[0];
                scene: ConstructorParameters<typeof Light>[1];
            }
        >,
        any
    >;
    pointLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointLight & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PointLight>[0];
                position: ConstructorParameters<typeof PointLight>[1];
                scene: ConstructorParameters<typeof PointLight>[2];
            }
        >,
        any
    >;
    shadowLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowLight & { cloneBy: string }>>, any>;
    spotLight: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpotLight & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SpotLight>[0];
                position: ConstructorParameters<typeof SpotLight>[1];
                direction: ConstructorParameters<typeof SpotLight>[2];
                angle: ConstructorParameters<typeof SpotLight>[3];
                exponent: ConstructorParameters<typeof SpotLight>[4];
                scene: ConstructorParameters<typeof SpotLight>[5];
            }
        >,
        any
    >;
    backgroundMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BackgroundMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BackgroundMaterial>[0];
                scene: ConstructorParameters<typeof BackgroundMaterial>[1];
            }
        >,
        any
    >;
    gaussianSplattingMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GaussianSplattingMaterial>[0];
                scene: ConstructorParameters<typeof GaussianSplattingMaterial>[1];
            }
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
            }
        >,
        any
    >;
    greasedLineSimpleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineSimpleMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GreasedLineSimpleMaterial>[0];
                scene: ConstructorParameters<typeof GreasedLineSimpleMaterial>[1];
                options: ConstructorParameters<typeof GreasedLineSimpleMaterial>[2];
            }
        >,
        any
    >;
    clipPlanesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClipPlanesBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ClipPlanesBlock>[0];
            }
        >,
        any
    >;
    currentScreenBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CurrentScreenBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CurrentScreenBlock>[0];
            }
        >,
        any
    >;
    fogBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FogBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FogBlock>[0];
            }
        >,
        any
    >;
    imageSourceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageSourceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ImageSourceBlock>[0];
            }
        >,
        any
    >;
    lightBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof LightBlock>[0];
            }
        >,
        any
    >;
    reflectionTextureBaseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionTextureBaseBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReflectionTextureBaseBlock>[0];
            }
        >,
        any
    >;
    reflectionTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionTextureBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReflectionTextureBlock>[0];
            }
        >,
        any
    >;
    sceneDepthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SceneDepthBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SceneDepthBlock>[0];
            }
        >,
        any
    >;
    textureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextureBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TextureBlock>[0];
                fragmentOnly: ConstructorParameters<typeof TextureBlock>[1];
            }
        >,
        any
    >;
    TBNBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TBNBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TBNBlock>[0];
            }
        >,
        any
    >;
    derivativeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DerivativeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DerivativeBlock>[0];
            }
        >,
        any
    >;
    discardBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DiscardBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DiscardBlock>[0];
            }
        >,
        any
    >;
    fragCoordBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragCoordBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FragCoordBlock>[0];
            }
        >,
        any
    >;
    fragDepthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragDepthBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FragDepthBlock>[0];
            }
        >,
        any
    >;
    fragmentOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FragmentOutputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FragmentOutputBlock>[0];
            }
        >,
        any
    >;
    frontFacingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrontFacingBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FrontFacingBlock>[0];
            }
        >,
        any
    >;
    heightToNormalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HeightToNormalBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof HeightToNormalBlock>[0];
            }
        >,
        any
    >;
    imageProcessingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageProcessingBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ImageProcessingBlock>[0];
            }
        >,
        any
    >;
    perturbNormalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerturbNormalBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PerturbNormalBlock>[0];
            }
        >,
        any
    >;
    prePassOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassOutputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PrePassOutputBlock>[0];
            }
        >,
        any
    >;
    screenSizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSizeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ScreenSizeBlock>[0];
            }
        >,
        any
    >;
    screenSpaceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ScreenSpaceBlock>[0];
            }
        >,
        any
    >;
    shadowMapBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShadowMapBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ShadowMapBlock>[0];
            }
        >,
        any
    >;
    twirlBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TwirlBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TwirlBlock>[0];
            }
        >,
        any
    >;
    inputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InputBlock>[0];
                target: ConstructorParameters<typeof InputBlock>[1];
                type: ConstructorParameters<typeof InputBlock>[2];
            }
        >,
        any
    >;
    prePassTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassTextureBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PrePassTextureBlock>[0];
                target: ConstructorParameters<typeof PrePassTextureBlock>[1];
            }
        >,
        any
    >;
    anisotropyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnisotropyBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnisotropyBlock>[0];
            }
        >,
        any
    >;
    clearCoatBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClearCoatBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ClearCoatBlock>[0];
            }
        >,
        any
    >;
    iridescenceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IridescenceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof IridescenceBlock>[0];
            }
        >,
        any
    >;
    reflectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectionBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReflectionBlock>[0];
            }
        >,
        any
    >;
    refractionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RefractionBlock>[0];
            }
        >,
        any
    >;
    sheenBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SheenBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SheenBlock>[0];
            }
        >,
        any
    >;
    subSurfaceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SubSurfaceBlock>[0];
            }
        >,
        any
    >;
    particleBlendMultiplyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleBlendMultiplyBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ParticleBlendMultiplyBlock>[0];
            }
        >,
        any
    >;
    particleRampGradientBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleRampGradientBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ParticleRampGradientBlock>[0];
            }
        >,
        any
    >;
    particleTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ParticleTextureBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ParticleTextureBlock>[0];
            }
        >,
        any
    >;
    bonesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BonesBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BonesBlock>[0];
            }
        >,
        any
    >;
    instancesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstancesBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstancesBlock>[0];
            }
        >,
        any
    >;
    lightInformationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LightInformationBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof LightInformationBlock>[0];
            }
        >,
        any
    >;
    morphTargetsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTargetsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MorphTargetsBlock>[0];
            }
        >,
        any
    >;
    vertexOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VertexOutputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VertexOutputBlock>[0];
            }
        >,
        any
    >;
    addBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AddBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AddBlock>[0];
            }
        >,
        any
    >;
    arcTan2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ArcTan2Block & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ArcTan2Block>[0];
            }
        >,
        any
    >;
    baseMathBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseMathBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BaseMathBlock>[0];
            }
        >,
        any
    >;
    biPlanarBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BiPlanarBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BiPlanarBlock>[0];
            }
        >,
        any
    >;
    clampBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ClampBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ClampBlock>[0];
            }
        >,
        any
    >;
    cloudBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CloudBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CloudBlock>[0];
            }
        >,
        any
    >;
    colorMergerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorMergerBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ColorMergerBlock>[0];
            }
        >,
        any
    >;
    colorSplitterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorSplitterBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ColorSplitterBlock>[0];
            }
        >,
        any
    >;
    conditionalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConditionalBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ConditionalBlock>[0];
            }
        >,
        any
    >;
    crossBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CrossBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CrossBlock>[0];
            }
        >,
        any
    >;
    curveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CurveBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CurveBlock>[0];
            }
        >,
        any
    >;
    customBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CustomBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CustomBlock>[0];
            }
        >,
        any
    >;
    desaturateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DesaturateBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DesaturateBlock>[0];
            }
        >,
        any
    >;
    distanceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DistanceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DistanceBlock>[0];
            }
        >,
        any
    >;
    divideBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DivideBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DivideBlock>[0];
            }
        >,
        any
    >;
    dotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DotBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DotBlock>[0];
            }
        >,
        any
    >;
    elbowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ElbowBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ElbowBlock>[0];
            }
        >,
        any
    >;
    fresnelBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FresnelBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FresnelBlock>[0];
            }
        >,
        any
    >;
    gradientBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GradientBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GradientBlock>[0];
            }
        >,
        any
    >;
    lengthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LengthBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof LengthBlock>[0];
            }
        >,
        any
    >;
    lerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LerpBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof LerpBlock>[0];
            }
        >,
        any
    >;
    matrixBuilderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixBuilderBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MatrixBuilderBlock>[0];
            }
        >,
        any
    >;
    matrixDeterminantBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixDeterminantBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MatrixDeterminantBlock>[0];
            }
        >,
        any
    >;
    matrixTransposeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixTransposeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MatrixTransposeBlock>[0];
            }
        >,
        any
    >;
    maxBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaxBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MaxBlock>[0];
            }
        >,
        any
    >;
    meshAttributeExistsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshAttributeExistsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MeshAttributeExistsBlock>[0];
            }
        >,
        any
    >;
    minBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MinBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MinBlock>[0];
            }
        >,
        any
    >;
    modBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ModBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ModBlock>[0];
            }
        >,
        any
    >;
    multiplyBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiplyBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MultiplyBlock>[0];
            }
        >,
        any
    >;
    nLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NLerpBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NLerpBlock>[0];
            }
        >,
        any
    >;
    negateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NegateBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NegateBlock>[0];
            }
        >,
        any
    >;
    normalBlendBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalBlendBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NormalBlendBlock>[0];
            }
        >,
        any
    >;
    normalizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalizeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NormalizeBlock>[0];
            }
        >,
        any
    >;
    oneMinusBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OneMinusBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof OneMinusBlock>[0];
            }
        >,
        any
    >;
    posterizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PosterizeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PosterizeBlock>[0];
            }
        >,
        any
    >;
    powBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PowBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PowBlock>[0];
            }
        >,
        any
    >;
    randomNumberBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RandomNumberBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RandomNumberBlock>[0];
            }
        >,
        any
    >;
    reciprocalBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReciprocalBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReciprocalBlock>[0];
            }
        >,
        any
    >;
    reflectBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReflectBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReflectBlock>[0];
            }
        >,
        any
    >;
    refractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RefractBlock>[0];
            }
        >,
        any
    >;
    remapBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RemapBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RemapBlock>[0];
            }
        >,
        any
    >;
    replaceColorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReplaceColorBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ReplaceColorBlock>[0];
            }
        >,
        any
    >;
    rotate2dBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Rotate2dBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Rotate2dBlock>[0];
            }
        >,
        any
    >;
    scaleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScaleBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ScaleBlock>[0];
            }
        >,
        any
    >;
    simplexPerlin3DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SimplexPerlin3DBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SimplexPerlin3DBlock>[0];
            }
        >,
        any
    >;
    smoothStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SmoothStepBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SmoothStepBlock>[0];
            }
        >,
        any
    >;
    stepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StepBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StepBlock>[0];
            }
        >,
        any
    >;
    subtractBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubtractBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SubtractBlock>[0];
            }
        >,
        any
    >;
    transformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TransformBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TransformBlock>[0];
            }
        >,
        any
    >;
    triPlanarBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TriPlanarBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TriPlanarBlock>[0];
                hideSourceZ: ConstructorParameters<typeof TriPlanarBlock>[1];
            }
        >,
        any
    >;
    trigonometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TrigonometryBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TrigonometryBlock>[0];
            }
        >,
        any
    >;
    vectorMergerBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorMergerBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VectorMergerBlock>[0];
            }
        >,
        any
    >;
    vectorSplitterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorSplitterBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VectorSplitterBlock>[0];
            }
        >,
        any
    >;
    viewDirectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ViewDirectionBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ViewDirectionBlock>[0];
            }
        >,
        any
    >;
    voronoiNoiseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VoronoiNoiseBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VoronoiNoiseBlock>[0];
            }
        >,
        any
    >;
    waveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WaveBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof WaveBlock>[0];
            }
        >,
        any
    >;
    worleyNoise3DBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WorleyNoise3DBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof WorleyNoise3DBlock>[0];
            }
        >,
        any
    >;
    nodeMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NodeMaterial>[0];
                scene: ConstructorParameters<typeof NodeMaterial>[1];
                options: ConstructorParameters<typeof NodeMaterial>[2];
            }
        >,
        any
    >;
    nodeMaterialBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NodeMaterialBlock>[0];
                target: ConstructorParameters<typeof NodeMaterialBlock>[1];
                isFinalMerger: ConstructorParameters<typeof NodeMaterialBlock>[2];
            }
        >,
        any
    >;
    nodeMaterialBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildState>>, any>;
    nodeMaterialBuildStateSharedData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildStateSharedData>>, any>;
    nodeMaterialConnectionPointCustomObject: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeMaterialConnectionPointCustomObject>,
            {
                name: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[0];
                ownerBlock: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[1];
                direction: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[2];
                _blockType: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[3];
                _blockName: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[4];
            }
        >,
        any
    >;
    occlusionMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OcclusionMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof OcclusionMaterial>[0];
                scene: ConstructorParameters<typeof OcclusionMaterial>[1];
            }
        >,
        any
    >;
    MultiviewRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiviewRenderTarget & { cloneBy: string }>,
            {
                scene: ConstructorParameters<typeof MultiviewRenderTarget>[0];
                size: ConstructorParameters<typeof MultiviewRenderTarget>[1];
            }
        >,
        any
    >;
    customProceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CustomProceduralTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CustomProceduralTexture>[0];
                texturePath: ConstructorParameters<typeof CustomProceduralTexture>[1];
                size: ConstructorParameters<typeof CustomProceduralTexture>[2];
                scene: ConstructorParameters<typeof CustomProceduralTexture>[3];
                fallbackTexture: ConstructorParameters<typeof CustomProceduralTexture>[4];
                generateMipMaps: ConstructorParameters<typeof CustomProceduralTexture>[5];
                skipJson: ConstructorParameters<typeof CustomProceduralTexture>[6];
            }
        >,
        any
    >;
    noiseProceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NoiseProceduralTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NoiseProceduralTexture>[0];
                size: ConstructorParameters<typeof NoiseProceduralTexture>[1];
                scene: ConstructorParameters<typeof NoiseProceduralTexture>[2];
                fallbackTexture: ConstructorParameters<typeof NoiseProceduralTexture>[3];
                generateMipMaps: ConstructorParameters<typeof NoiseProceduralTexture>[4];
            }
        >,
        any
    >;
    proceduralTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ProceduralTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ProceduralTexture>[0];
                size: ConstructorParameters<typeof ProceduralTexture>[1];
                fragment: ConstructorParameters<typeof ProceduralTexture>[2];
                scene: ConstructorParameters<typeof ProceduralTexture>[3];
                fallbackTexture: ConstructorParameters<typeof ProceduralTexture>[4];
                generateMipMaps: ConstructorParameters<typeof ProceduralTexture>[5];
                isCube: ConstructorParameters<typeof ProceduralTexture>[6];
                textureType: ConstructorParameters<typeof ProceduralTexture>[7];
            }
        >,
        any
    >;
    proceduralTextureSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ProceduralTextureSceneComponent>,
            {
                scene: ConstructorParameters<typeof ProceduralTextureSceneComponent>[0];
            }
        >,
        any
    >;
    baseTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseTexture & { cloneBy: string }>,
            {
                sceneOrEngine: ConstructorParameters<typeof BaseTexture>[0];
                internalTexture: ConstructorParameters<typeof BaseTexture>[1];
            }
        >,
        any
    >;
    colorGradingTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorGradingTexture & { cloneBy: string }>,
            {
                url: ConstructorParameters<typeof ColorGradingTexture>[0];
                sceneOrEngine: ConstructorParameters<typeof ColorGradingTexture>[1];
                onLoad: ConstructorParameters<typeof ColorGradingTexture>[2];
            }
        >,
        any
    >;
    cubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CubeTexture & { cloneBy: string }>,
            {
                rootUrl: ConstructorParameters<typeof CubeTexture>[0];
                sceneOrEngine: ConstructorParameters<typeof CubeTexture>[1];
                extensions: ConstructorParameters<typeof CubeTexture>[2];
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
            }
        >,
        any
    >;
    dynamicTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DynamicTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DynamicTexture>[0];
                options: ConstructorParameters<typeof DynamicTexture>[1];
                scene: ConstructorParameters<typeof DynamicTexture>[2];
                generateMipMaps: ConstructorParameters<typeof DynamicTexture>[3];
                samplingMode: ConstructorParameters<typeof DynamicTexture>[4];
                format: ConstructorParameters<typeof DynamicTexture>[5];
                invertY: ConstructorParameters<typeof DynamicTexture>[6];
            }
        >,
        any
    >;
    equiRectangularCubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EquiRectangularCubeTexture & { cloneBy: string }>,
            {
                url: ConstructorParameters<typeof EquiRectangularCubeTexture>[0];
                scene: ConstructorParameters<typeof EquiRectangularCubeTexture>[1];
                size: ConstructorParameters<typeof EquiRectangularCubeTexture>[2];
                noMipmap: ConstructorParameters<typeof EquiRectangularCubeTexture>[3];
                gammaSpace: ConstructorParameters<typeof EquiRectangularCubeTexture>[4];
                onLoad: ConstructorParameters<typeof EquiRectangularCubeTexture>[5];
                onError: ConstructorParameters<typeof EquiRectangularCubeTexture>[6];
                supersample: ConstructorParameters<typeof EquiRectangularCubeTexture>[7];
            }
        >,
        any
    >;
    externalTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExternalTexture>,
            {
                video: ConstructorParameters<typeof ExternalTexture>[0];
            }
        >,
        any
    >;
    htmlElementTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HtmlElementTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof HtmlElementTexture>[0];
                element: ConstructorParameters<typeof HtmlElementTexture>[1];
                options: ConstructorParameters<typeof HtmlElementTexture>[2];
            }
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
            }
        >,
        any
    >;
    mirrorTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MirrorTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MirrorTexture>[0];
                size: ConstructorParameters<typeof MirrorTexture>[1];
                scene: ConstructorParameters<typeof MirrorTexture>[2];
                generateMipMaps: ConstructorParameters<typeof MirrorTexture>[3];
                type: ConstructorParameters<typeof MirrorTexture>[4];
                samplingMode: ConstructorParameters<typeof MirrorTexture>[5];
                generateDepthBuffer: ConstructorParameters<typeof MirrorTexture>[6];
            }
        >,
        any
    >;
    multiRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiRenderTarget & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MultiRenderTarget>[0];
                size: ConstructorParameters<typeof MultiRenderTarget>[1];
                count: ConstructorParameters<typeof MultiRenderTarget>[2];
                scene: ConstructorParameters<typeof MultiRenderTarget>[3];
                options: ConstructorParameters<typeof MultiRenderTarget>[4];
                textureNames: ConstructorParameters<typeof MultiRenderTarget>[5];
            }
        >,
        any
    >;
    prePassRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRenderTarget & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PrePassRenderTarget>[0];
                renderTargetTexture: ConstructorParameters<typeof PrePassRenderTarget>[1];
                size: ConstructorParameters<typeof PrePassRenderTarget>[2];
                count: ConstructorParameters<typeof PrePassRenderTarget>[3];
                scene: ConstructorParameters<typeof PrePassRenderTarget>[4];
                options: ConstructorParameters<typeof PrePassRenderTarget>[5];
            }
        >,
        any
    >;
    rawCubeTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawCubeTexture & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    rawTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    rawTexture2DArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture2DArray & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    rawTexture3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RawTexture3D & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    refractionTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionTexture & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RefractionTexture>[0];
                size: ConstructorParameters<typeof RefractionTexture>[1];
                scene: ConstructorParameters<typeof RefractionTexture>[2];
                generateMipMaps: ConstructorParameters<typeof RefractionTexture>[3];
            }
        >,
        any
    >;
    renderTargetTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderTargetTexture & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    texture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Texture & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    textureSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureSampler>>, any>;
    thinRenderTargetTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinRenderTargetTexture>,
            {
                engine: ConstructorParameters<typeof ThinRenderTargetTexture>[0];
                size: ConstructorParameters<typeof ThinRenderTargetTexture>[1];
                options: ConstructorParameters<typeof ThinRenderTargetTexture>[2];
            }
        >,
        any
    >;
    thinTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinTexture>,
            {
                internalTexture: ConstructorParameters<typeof ThinTexture>[0];
            }
        >,
        any
    >;
    videoTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VideoTexture & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    colorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCurves & { cloneBy: string }>>, any>;
    drawWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DrawWrapper>,
            {
                engine: ConstructorParameters<typeof DrawWrapper>[0];
                createMaterialContext: ConstructorParameters<typeof DrawWrapper>[1];
            }
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
            }
        >,
        any
    >;
    effectFallbacks: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectFallbacks>>, any>;
    effectRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectRenderer>,
            {
                engine: ConstructorParameters<typeof EffectRenderer>[0];
                options: ConstructorParameters<typeof EffectRenderer>[1];
            }
        >,
        any
    >;
    fresnelParameters: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FresnelParameters & { cloneBy: string }>,
            {
                options: ConstructorParameters<typeof FresnelParameters>[0];
            }
        >,
        any
    >;
    imageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingConfiguration & { cloneBy: string }>>, any>;
    material: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Material & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Material>[0];
                scene: ConstructorParameters<typeof Material>[1];
                doNotAdd: ConstructorParameters<typeof Material>[2];
            }
        >,
        any
    >;
    materialDefines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaterialDefines>,
            {
                externalProperties: ConstructorParameters<typeof MaterialDefines>[0];
            }
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
            }
        >,
        any
    >;
    materialPluginManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MaterialPluginManager>,
            {
                material: ConstructorParameters<typeof MaterialPluginManager>[0];
            }
        >,
        any
    >;
    materialStencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialStencilState>>, any>;
    meshDebugPluginMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshDebugPluginMaterial>,
            {
                material: ConstructorParameters<typeof MeshDebugPluginMaterial>[0];
                options: ConstructorParameters<typeof MeshDebugPluginMaterial>[1];
            }
        >,
        any
    >;
    multiMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MultiMaterial>[0];
                scene: ConstructorParameters<typeof MultiMaterial>[1];
            }
        >,
        any
    >;
    prePassConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassConfiguration>>, any>;
    pushMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PushMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PushMaterial>[0];
                scene: ConstructorParameters<typeof PushMaterial>[1];
                storeEffectOnSubMeshes: ConstructorParameters<typeof PushMaterial>[2];
            }
        >,
        any
    >;
    shaderMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ShaderMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ShaderMaterial>[0];
                scene: ConstructorParameters<typeof ShaderMaterial>[1];
                shaderPath: ConstructorParameters<typeof ShaderMaterial>[2];
                options: ConstructorParameters<typeof ShaderMaterial>[3];
                storeEffectOnSubMeshes: ConstructorParameters<typeof ShaderMaterial>[4];
            }
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
            }
        >,
        any
    >;
    standardMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StandardMaterial & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StandardMaterial>[0];
                scene: ConstructorParameters<typeof StandardMaterial>[1];
            }
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
            }
        >,
        any
    >;
    uniformBufferEffectCommonAccessor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UniformBufferEffectCommonAccessor>,
            {
                uboOrEffect: ConstructorParameters<typeof UniformBufferEffectCommonAccessor>[0];
            }
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
            }
        >,
        any
    >;
    sphericalPolynomial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalPolynomial>>, any>;
    dracoCompression: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DracoCompression>,
            {
                numWorkers: ConstructorParameters<typeof DracoCompression>[0];
            }
        >,
        any
    >;
    meshoptCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshoptCompression>>, any>;
    gaussianSplattingMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GaussianSplattingMesh>[0];
                url: ConstructorParameters<typeof GaussianSplattingMesh>[1];
                scene: ConstructorParameters<typeof GaussianSplattingMesh>[2];
            }
        >,
        any
    >;
    greasedLineBaseMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineBaseMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GreasedLineBaseMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineBaseMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineBaseMesh>[2];
            }
        >,
        any
    >;
    greasedLineMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GreasedLineMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineMesh>[2];
            }
        >,
        any
    >;
    greasedLineRibbonMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineRibbonMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GreasedLineRibbonMesh>[0];
                scene: ConstructorParameters<typeof GreasedLineRibbonMesh>[1];
                _options: ConstructorParameters<typeof GreasedLineRibbonMesh>[2];
                _pathOptions: ConstructorParameters<typeof GreasedLineRibbonMesh>[3];
            }
        >,
        any
    >;
    instantiateBaseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateBaseBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateBaseBlock>[0];
            }
        >,
        any
    >;
    instantiateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateBlock>[0];
            }
        >,
        any
    >;
    instantiateLinearBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateLinearBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateLinearBlock>[0];
            }
        >,
        any
    >;
    instantiateOnFacesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnFacesBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateOnFacesBlock>[0];
            }
        >,
        any
    >;
    instantiateOnVerticesBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnVerticesBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateOnVerticesBlock>[0];
            }
        >,
        any
    >;
    instantiateOnVolumeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateOnVolumeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateOnVolumeBlock>[0];
            }
        >,
        any
    >;
    instantiateRadialBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstantiateRadialBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstantiateRadialBlock>[0];
            }
        >,
        any
    >;
    alignBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AlignBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AlignBlock>[0];
            }
        >,
        any
    >;
    rotationXBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationXBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RotationXBlock>[0];
            }
        >,
        any
    >;
    rotationYBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationYBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RotationYBlock>[0];
            }
        >,
        any
    >;
    rotationZBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RotationZBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RotationZBlock>[0];
            }
        >,
        any
    >;
    scalingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScalingBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ScalingBlock>[0];
            }
        >,
        any
    >;
    translationBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TranslationBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TranslationBlock>[0];
            }
        >,
        any
    >;
    setColorsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetColorsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetColorsBlock>[0];
            }
        >,
        any
    >;
    setMaterialIDBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetMaterialIDBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetMaterialIDBlock>[0];
            }
        >,
        any
    >;
    setNormalsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetNormalsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetNormalsBlock>[0];
            }
        >,
        any
    >;
    setPositionsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetPositionsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetPositionsBlock>[0];
            }
        >,
        any
    >;
    setTangentsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetTangentsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetTangentsBlock>[0];
            }
        >,
        any
    >;
    setUVsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SetUVsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SetUVsBlock>[0];
            }
        >,
        any
    >;
    boxBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoxBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BoxBlock>[0];
            }
        >,
        any
    >;
    capsuleBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CapsuleBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CapsuleBlock>[0];
            }
        >,
        any
    >;
    cylinderBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CylinderBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof CylinderBlock>[0];
            }
        >,
        any
    >;
    discBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DiscBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DiscBlock>[0];
            }
        >,
        any
    >;
    gridBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GridBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GridBlock>[0];
            }
        >,
        any
    >;
    icoSphereBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IcoSphereBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof IcoSphereBlock>[0];
            }
        >,
        any
    >;
    meshBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MeshBlock>[0];
            }
        >,
        any
    >;
    nullBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NullBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NullBlock>[0];
            }
        >,
        any
    >;
    planeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PlaneBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PlaneBlock>[0];
            }
        >,
        any
    >;
    sphereBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SphereBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SphereBlock>[0];
            }
        >,
        any
    >;
    torusBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TorusBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TorusBlock>[0];
            }
        >,
        any
    >;
    teleportInBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TeleportInBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TeleportInBlock>[0];
            }
        >,
        any
    >;
    teleportOutBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TeleportOutBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TeleportOutBlock>[0];
            }
        >,
        any
    >;
    geometryTextureBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTextureBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryTextureBlock>[0];
            }
        >,
        any
    >;
    geometryTextureFetchBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTextureFetchBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryTextureFetchBlock>[0];
            }
        >,
        any
    >;
    booleanGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BooleanGeometryBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BooleanGeometryBlock>[0];
            }
        >,
        any
    >;
    boundingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BoundingBlock>[0];
            }
        >,
        any
    >;
    computeNormalsBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeNormalsBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ComputeNormalsBlock>[0];
            }
        >,
        any
    >;
    conditionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConditionBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ConditionBlock>[0];
            }
        >,
        any
    >;
    debugBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DebugBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DebugBlock>[0];
            }
        >,
        any
    >;
    geometryArcTan2Block: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryArcTan2Block & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryArcTan2Block>[0];
            }
        >,
        any
    >;
    geometryClampBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryClampBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryClampBlock>[0];
            }
        >,
        any
    >;
    geometryCollectionBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCollectionBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryCollectionBlock>[0];
            }
        >,
        any
    >;
    geometryCrossBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCrossBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryCrossBlock>[0];
            }
        >,
        any
    >;
    geometryCurveBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryCurveBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryCurveBlock>[0];
            }
        >,
        any
    >;
    geometryDesaturateBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDesaturateBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryDesaturateBlock>[0];
            }
        >,
        any
    >;
    geometryDistanceBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDistanceBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryDistanceBlock>[0];
            }
        >,
        any
    >;
    geometryDotBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryDotBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryDotBlock>[0];
            }
        >,
        any
    >;
    geometryElbowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryElbowBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryElbowBlock>[0];
            }
        >,
        any
    >;
    geometryInfoBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryInfoBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryInfoBlock>[0];
            }
        >,
        any
    >;
    geometryInputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryInputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryInputBlock>[0];
                type: ConstructorParameters<typeof GeometryInputBlock>[1];
            }
        >,
        any
    >;
    geometryLengthBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryLengthBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryLengthBlock>[0];
            }
        >,
        any
    >;
    geometryLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryLerpBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryLerpBlock>[0];
            }
        >,
        any
    >;
    geometryModBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryModBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryModBlock>[0];
            }
        >,
        any
    >;
    geometryNLerpBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryNLerpBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryNLerpBlock>[0];
            }
        >,
        any
    >;
    geometryOptimizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryOptimizeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryOptimizeBlock>[0];
            }
        >,
        any
    >;
    geometryOutputBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryOutputBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryOutputBlock>[0];
            }
        >,
        any
    >;
    geometryPosterizeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryPosterizeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryPosterizeBlock>[0];
            }
        >,
        any
    >;
    geometryPowBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryPowBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryPowBlock>[0];
            }
        >,
        any
    >;
    geometryReplaceColorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryReplaceColorBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryReplaceColorBlock>[0];
            }
        >,
        any
    >;
    geometryRotate2dBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryRotate2dBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryRotate2dBlock>[0];
            }
        >,
        any
    >;
    geometrySmoothStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometrySmoothStepBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometrySmoothStepBlock>[0];
            }
        >,
        any
    >;
    geometryStepBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryStepBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryStepBlock>[0];
            }
        >,
        any
    >;
    geometryTransformBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTransformBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryTransformBlock>[0];
            }
        >,
        any
    >;
    geometryTrigonometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryTrigonometryBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GeometryTrigonometryBlock>[0];
            }
        >,
        any
    >;
    intFloatConverterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<IntFloatConverterBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof IntFloatConverterBlock>[0];
            }
        >,
        any
    >;
    mapRangeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MapRangeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MapRangeBlock>[0];
            }
        >,
        any
    >;
    mappingBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MappingBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MappingBlock>[0];
            }
        >,
        any
    >;
    mathBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MathBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MathBlock>[0];
            }
        >,
        any
    >;
    matrixComposeBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MatrixComposeBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MatrixComposeBlock>[0];
            }
        >,
        any
    >;
    mergeGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MergeGeometryBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MergeGeometryBlock>[0];
            }
        >,
        any
    >;
    noiseBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NoiseBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NoiseBlock>[0];
            }
        >,
        any
    >;
    normalizeVectorBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NormalizeVectorBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NormalizeVectorBlock>[0];
            }
        >,
        any
    >;
    randomBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RandomBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof RandomBlock>[0];
            }
        >,
        any
    >;
    vectorConverterBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VectorConverterBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof VectorConverterBlock>[0];
            }
        >,
        any
    >;
    nodeGeometry: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeGeometry & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NodeGeometry>[0];
            }
        >,
        any
    >;
    nodeGeometryBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeGeometryBlock & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof NodeGeometryBlock>[0];
            }
        >,
        any
    >;
    nodeGeometryBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBuildState>>, any>;
    webGLDataBuffer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebGLDataBuffer>,
            {
                resource: ConstructorParameters<typeof WebGLDataBuffer>[0];
            }
        >,
        any
    >;
    abstractMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AbstractMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AbstractMesh>[0];
                scene: ConstructorParameters<typeof AbstractMesh>[1];
            }
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
            }
        >,
        any
    >;
    geometry: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Geometry>,
            {
                id: ConstructorParameters<typeof Geometry>[0];
                scene: ConstructorParameters<typeof Geometry>[1];
                vertexData: ConstructorParameters<typeof Geometry>[2];
                updatable: ConstructorParameters<typeof Geometry>[3];
                mesh: ConstructorParameters<typeof Geometry>[4];
            }
        >,
        any
    >;
    goldbergMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GoldbergMesh & { cloneBy: string }>>, any>;
    groundMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GroundMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GroundMesh>[0];
                scene: ConstructorParameters<typeof GroundMesh>[1];
            }
        >,
        any
    >;
    instancedMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InstancedMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof InstancedMesh>[0];
                source: ConstructorParameters<typeof InstancedMesh>[1];
            }
        >,
        any
    >;
    linesMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LinesMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof LinesMesh>[0];
                scene: ConstructorParameters<typeof LinesMesh>[1];
                parent: ConstructorParameters<typeof LinesMesh>[2];
                source: ConstructorParameters<typeof LinesMesh>[3];
                doNotCloneChildren: ConstructorParameters<typeof LinesMesh>[4];
                useVertexColor: ConstructorParameters<typeof LinesMesh>[5];
                useVertexAlpha: ConstructorParameters<typeof LinesMesh>[6];
                material: ConstructorParameters<typeof LinesMesh>[7];
            }
        >,
        any
    >;
    mesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Mesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Mesh>[0];
                scene: ConstructorParameters<typeof Mesh>[1];
                parent: ConstructorParameters<typeof Mesh>[2];
                source: ConstructorParameters<typeof Mesh>[3];
                doNotCloneChildren: ConstructorParameters<typeof Mesh>[4];
                clonePhysicsImpostor: ConstructorParameters<typeof Mesh>[5];
            }
        >,
        any
    >;
    box: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateBox> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateBox>[0];
                options: Parameters<typeof CreateBox>[1];
                scene: Parameters<typeof CreateBox>[2];
            }
        >,
        any
    >;
    tiledBox: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledBox> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTiledBox>[0];
                options: Parameters<typeof CreateTiledBox>[1];
                scene: Parameters<typeof CreateTiledBox>[2];
            }
        >,
        any
    >;
    sphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSphere> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateSphere>[0];
                options: Parameters<typeof CreateSphere>[1];
                scene: Parameters<typeof CreateSphere>[2];
            }
        >,
        any
    >;
    disc: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDisc> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateDisc>[0];
                options: Parameters<typeof CreateDisc>[1];
                scene: Parameters<typeof CreateDisc>[2];
            }
        >,
        any
    >;
    icoSphere: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIcoSphere> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateIcoSphere>[0];
                options: Parameters<typeof CreateIcoSphere>[1];
                scene: Parameters<typeof CreateIcoSphere>[2];
            }
        >,
        any
    >;
    ribbon: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRibbon> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateRibbon>[0];
                options: Parameters<typeof CreateRibbon>[1];
                scene: Parameters<typeof CreateRibbon>[2];
            }
        >,
        any
    >;
    cylinder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCylinder> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateCylinder>[0];
                options: Parameters<typeof CreateCylinder>[1];
                scene: Parameters<typeof CreateCylinder>[2];
            }
        >,
        any
    >;
    torus: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorus> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTorus>[0];
                options: Parameters<typeof CreateTorus>[1];
                scene: Parameters<typeof CreateTorus>[2];
            }
        >,
        any
    >;
    torusKnot: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusKnot> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTorusKnot>[0];
                options: Parameters<typeof CreateTorusKnot>[1];
                scene: Parameters<typeof CreateTorusKnot>[2];
            }
        >,
        any
    >;
    lineSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLineSystem> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateLineSystem>[0];
                options: Parameters<typeof CreateLineSystem>[1];
                scene: Parameters<typeof CreateLineSystem>[2];
            }
        >,
        any
    >;
    lines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLines> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateLines>[0];
                options: Parameters<typeof CreateLines>[1];
                scene: Parameters<typeof CreateLines>[2];
            }
        >,
        any
    >;
    dashedLines: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDashedLines> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateDashedLines>[0];
                options: Parameters<typeof CreateDashedLines>[1];
                scene: Parameters<typeof CreateDashedLines>[2];
            }
        >,
        any
    >;
    extrudeShape: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShape> & { cloneBy: string }>,
            {
                name: Parameters<typeof ExtrudeShape>[0];
                options: Parameters<typeof ExtrudeShape>[1];
                scene: Parameters<typeof ExtrudeShape>[2];
            }
        >,
        any
    >;
    extrudeShapeCustom: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShapeCustom> & { cloneBy: string }>,
            {
                name: Parameters<typeof ExtrudeShapeCustom>[0];
                options: Parameters<typeof ExtrudeShapeCustom>[1];
                scene: Parameters<typeof ExtrudeShapeCustom>[2];
            }
        >,
        any
    >;
    lathe: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLathe> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateLathe>[0];
                options: Parameters<typeof CreateLathe>[1];
                scene: Parameters<typeof CreateLathe>[2];
            }
        >,
        any
    >;
    tiledPlane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledPlane> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTiledPlane>[0];
                options: Parameters<typeof CreateTiledPlane>[1];
                scene: Parameters<typeof CreateTiledPlane>[2];
            }
        >,
        any
    >;
    plane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePlane> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreatePlane>[0];
                options: Parameters<typeof CreatePlane>[1];
                scene: Parameters<typeof CreatePlane>[2];
            }
        >,
        any
    >;
    ground: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGround> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateGround>[0];
                options: Parameters<typeof CreateGround>[1];
                scene: Parameters<typeof CreateGround>[2];
            }
        >,
        any
    >;
    tiledGround: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledGround> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTiledGround>[0];
                options: Parameters<typeof CreateTiledGround>[1];
                scene: Parameters<typeof CreateTiledGround>[2];
            }
        >,
        any
    >;
    groundFromHeightMap: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundFromHeightMap> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateGroundFromHeightMap>[0];
                url: Parameters<typeof CreateGroundFromHeightMap>[1];
                options: Parameters<typeof CreateGroundFromHeightMap>[2];
                scene: Parameters<typeof CreateGroundFromHeightMap>[3];
            }
        >,
        any
    >;
    polygon: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolygon> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreatePolygon>[0];
                options: Parameters<typeof CreatePolygon>[1];
                scene: Parameters<typeof CreatePolygon>[2];
                earcutInjection: Parameters<typeof CreatePolygon>[3];
            }
        >,
        any
    >;
    extrudePolygon: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudePolygon> & { cloneBy: string }>,
            {
                name: Parameters<typeof ExtrudePolygon>[0];
                options: Parameters<typeof ExtrudePolygon>[1];
                scene: Parameters<typeof ExtrudePolygon>[2];
                earcutInjection: Parameters<typeof ExtrudePolygon>[3];
            }
        >,
        any
    >;
    tube: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTube> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateTube>[0];
                options: Parameters<typeof CreateTube>[1];
                scene: Parameters<typeof CreateTube>[2];
            }
        >,
        any
    >;
    polyhedron: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolyhedron> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreatePolyhedron>[0];
                options: Parameters<typeof CreatePolyhedron>[1];
                scene: Parameters<typeof CreatePolyhedron>[2];
            }
        >,
        any
    >;
    geodesic: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGeodesic> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateGeodesic>[0];
                options: Parameters<typeof CreateGeodesic>[1];
                scene: Parameters<typeof CreateGeodesic>[2];
            }
        >,
        any
    >;
    goldberg: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGoldberg> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateGoldberg>[0];
                options: Parameters<typeof CreateGoldberg>[1];
                scene: Parameters<typeof CreateGoldberg>[2];
            }
        >,
        any
    >;
    decal: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDecal> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateDecal>[0];
                sourceMesh: Parameters<typeof CreateDecal>[1];
                options: Parameters<typeof CreateDecal>[2];
            }
        >,
        any
    >;
    capsule: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCapsule> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateCapsule>[0];
                options: Parameters<typeof CreateCapsule>[1];
                scene: Parameters<typeof CreateCapsule>[2];
            }
        >,
        any
    >;
    text: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateText> & { cloneBy: string }>,
            {
                name: Parameters<typeof CreateText>[0];
                text: Parameters<typeof CreateText>[1];
                fontData: Parameters<typeof CreateText>[2];
                options: Parameters<typeof CreateText>[3];
                scene: Parameters<typeof CreateText>[4];
                earcutInjection: Parameters<typeof CreateText>[5];
            }
        >,
        any
    >;
    meshLODLevel: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshLODLevel>,
            {
                distanceOrScreenCoverage: ConstructorParameters<typeof MeshLODLevel>[0];
                mesh: ConstructorParameters<typeof MeshLODLevel>[1];
            }
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
            }
        >,
        any
    >;
    subMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubMesh & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    trailMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TrailMesh & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TrailMesh>[0];
                generator: ConstructorParameters<typeof TrailMesh>[1];
                scene: ConstructorParameters<typeof TrailMesh>[2];
                diameter: ConstructorParameters<typeof TrailMesh>[3];
                length: ConstructorParameters<typeof TrailMesh>[4];
                autoStart: ConstructorParameters<typeof TrailMesh>[5];
            }
        >,
        any
    >;
    transformNode: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TransformNode & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TransformNode>[0];
                scene: ConstructorParameters<typeof TransformNode>[1];
                isPure: ConstructorParameters<typeof TransformNode>[2];
            }
        >,
        any
    >;
    dynamicFloat32Array: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DynamicFloat32Array>,
            {
                itemCapacity: ConstructorParameters<typeof DynamicFloat32Array>[0];
            }
        >,
        any
    >;
    performanceViewerCollector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerformanceViewerCollector>,
            {
                _scene: ConstructorParameters<typeof PerformanceViewerCollector>[0];
                _enabledStrategyCallbacks: ConstructorParameters<typeof PerformanceViewerCollector>[1];
            }
        >,
        any
    >;
    assetsManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AssetsManager>,
            {
                scene: ConstructorParameters<typeof AssetsManager>[0];
            }
        >,
        any
    >;
    copyTextureToTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CopyTextureToTexture>,
            {
                engine: ConstructorParameters<typeof CopyTextureToTexture>[0];
                isDepthTexture: ConstructorParameters<typeof CopyTextureToTexture>[1];
            }
        >,
        any
    >;
    dataReader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DataReader>,
            {
                buffer: ConstructorParameters<typeof DataReader>[0];
            }
        >,
        any
    >;
    deferred: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Deferred>>, any>;
    depthReducer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthReducer>,
            {
                camera: ConstructorParameters<typeof DepthReducer>[0];
            }
        >,
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
            }
        >,
        any
    >;
    khronosTextureContainer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KhronosTextureContainer>,
            {
                data: ConstructorParameters<typeof KhronosTextureContainer>[0];
                facesExpected: ConstructorParameters<typeof KhronosTextureContainer>[1];
            }
        >,
        any
    >;
    khronosTextureContainer2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<KhronosTextureContainer2>,
            {
                engine: ConstructorParameters<typeof KhronosTextureContainer2>[0];
                numWorkersOrOptions: ConstructorParameters<typeof KhronosTextureContainer2>[1];
            }
        >,
        any
    >;
    meshExploder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshExploder>,
            {
                meshes: ConstructorParameters<typeof MeshExploder>[0];
                centerMesh: ConstructorParameters<typeof MeshExploder>[1];
            }
        >,
        any
    >;
    minMaxReducer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MinMaxReducer>,
            {
                camera: ConstructorParameters<typeof MinMaxReducer>[0];
            }
        >,
        any
    >;
    observable: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Observable & { cloneBy: string }>,
            {
                onObserverAdded: ConstructorParameters<typeof Observable>[0];
                notifyIfTriggered: ConstructorParameters<typeof Observable>[1];
            }
        >,
        any
    >;
    perfCounter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerfCounter>>, any>;
    performanceMonitor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PerformanceMonitor>,
            {
                frameSampleSize: ConstructorParameters<typeof PerformanceMonitor>[0];
            }
        >,
        any
    >;
    pressureObserverWrapper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PressureObserverWrapper>,
            {
                options: ConstructorParameters<typeof PressureObserverWrapper>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    sceneRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneRecorder>>, any>;
    smartArray: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SmartArray>,
            {
                capacity: ConstructorParameters<typeof SmartArray>[0];
            }
        >,
        any
    >;
    stringDictionary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StringDictionary>>, any>;
    trajectoryClassifier: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrajectoryClassifier>>, any>;
    videoRecorder: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VideoRecorder>,
            {
                engine: ConstructorParameters<typeof VideoRecorder>[0];
                options: ConstructorParameters<typeof VideoRecorder>[1];
            }
        >,
        any
    >;
    virtualJoystick: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VirtualJoystick>,
            {
                leftJoystick: ConstructorParameters<typeof VirtualJoystick>[0];
                customizations: ConstructorParameters<typeof VirtualJoystick>[1];
            }
        >,
        any
    >;
    webRequest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebRequest>>, any>;
    workerPool: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WorkerPool>,
            {
                workers: ConstructorParameters<typeof WorkerPool>[0];
            }
        >,
        any
    >;
    morphTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTarget & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof MorphTarget>[0];
                influence: ConstructorParameters<typeof MorphTarget>[1];
                scene: ConstructorParameters<typeof MorphTarget>[2];
            }
        >,
        any
    >;
    morphTargetManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MorphTargetManager & { cloneBy: string }>,
            {
                scene: ConstructorParameters<typeof MorphTargetManager>[0];
            }
        >,
        any
    >;
    recastJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RecastJSPlugin>,
            {
                recastInjection: ConstructorParameters<typeof RecastJSPlugin>[0];
            }
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
            }
        >,
        any
    >;
    boxParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxParticleEmitter & { cloneBy: string }>>, any>;
    coneParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConeParticleEmitter & { cloneBy: string }>,
            {
                radius: ConstructorParameters<typeof ConeParticleEmitter>[0];
                angle: ConstructorParameters<typeof ConeParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof ConeParticleEmitter>[2];
            }
        >,
        any
    >;
    customParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomParticleEmitter & { cloneBy: string }>>, any>;
    cylinderParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CylinderParticleEmitter & { cloneBy: string }>,
            {
                radius: ConstructorParameters<typeof CylinderParticleEmitter>[0];
                height: ConstructorParameters<typeof CylinderParticleEmitter>[1];
                radiusRange: ConstructorParameters<typeof CylinderParticleEmitter>[2];
                directionRandomizer: ConstructorParameters<typeof CylinderParticleEmitter>[3];
            }
        >,
        any
    >;
    hemisphericParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HemisphericParticleEmitter & { cloneBy: string }>,
            {
                radius: ConstructorParameters<typeof HemisphericParticleEmitter>[0];
                radiusRange: ConstructorParameters<typeof HemisphericParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof HemisphericParticleEmitter>[2];
            }
        >,
        any
    >;
    meshParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshParticleEmitter & { cloneBy: string }>,
            {
                mesh: ConstructorParameters<typeof MeshParticleEmitter>[0];
            }
        >,
        any
    >;
    pointParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointParticleEmitter & { cloneBy: string }>>, any>;
    sphereParticleEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SphereParticleEmitter & { cloneBy: string }>,
            {
                radius: ConstructorParameters<typeof SphereParticleEmitter>[0];
                radiusRange: ConstructorParameters<typeof SphereParticleEmitter>[1];
                directionRandomizer: ConstructorParameters<typeof SphereParticleEmitter>[2];
            }
        >,
        any
    >;
    baseParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseParticleSystem>,
            {
                name: ConstructorParameters<typeof BaseParticleSystem>[0];
            }
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
            }
        >,
        any
    >;
    computeShaderParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ComputeShaderParticleSystem>,
            {
                parent: ConstructorParameters<typeof ComputeShaderParticleSystem>[0];
                engine: ConstructorParameters<typeof ComputeShaderParticleSystem>[1];
            }
        >,
        any
    >;
    particle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Particle>,
            {
                particleSystem: ConstructorParameters<typeof Particle>[0];
            }
        >,
        any
    >;
    particleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystem & { cloneBy: string }>>, any>;
    particleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystemSet>>, any>;
    pointsCloudSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PointsCloudSystem>,
            {
                name: ConstructorParameters<typeof PointsCloudSystem>[0];
                pointSize: ConstructorParameters<typeof PointsCloudSystem>[1];
                scene: ConstructorParameters<typeof PointsCloudSystem>[2];
                options: ConstructorParameters<typeof PointsCloudSystem>[3];
            }
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
            }
        >,
        any
    >;
    solidParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SolidParticleSystem>,
            {
                name: ConstructorParameters<typeof SolidParticleSystem>[0];
                scene: ConstructorParameters<typeof SolidParticleSystem>[1];
                options: ConstructorParameters<typeof SolidParticleSystem>[2];
            }
        >,
        any
    >;
    subEmitter: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubEmitter & { cloneBy: string }>,
            {
                particleSystem: ConstructorParameters<typeof SubEmitter>[0];
            }
        >,
        any
    >;
    thinParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ThinParticleSystem & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ThinParticleSystem>[0];
                capacity: ConstructorParameters<typeof ThinParticleSystem>[1];
                sceneOrEngine: ConstructorParameters<typeof ThinParticleSystem>[2];
                customEffect: ConstructorParameters<typeof ThinParticleSystem>[3];
                isAnimationSheetEnabled: ConstructorParameters<typeof ThinParticleSystem>[4];
                epsilon: ConstructorParameters<typeof ThinParticleSystem>[5];
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    castingResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CastingResult>>, any>;
    physicsEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngine>,
            {
                gravity: ConstructorParameters<typeof PhysicsEngine>[0];
                _physicsPlugin: ConstructorParameters<typeof PhysicsEngine>[1];
            }
        >,
        any
    >;
    physicsHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsHelper>,
            {
                scene: ConstructorParameters<typeof PhysicsHelper>[0];
            }
        >,
        any
    >;
    physicsImpostor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsImpostor & { cloneBy: string }>,
            {
                object: ConstructorParameters<typeof PhysicsImpostor>[0];
                type: ConstructorParameters<typeof PhysicsImpostor>[1];
                _options: ConstructorParameters<typeof PhysicsImpostor>[2];
                _scene: ConstructorParameters<typeof PhysicsImpostor>[3];
            }
        >,
        any
    >;
    physicsJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsJoint>,
            {
                type: ConstructorParameters<typeof PhysicsJoint>[0];
                jointData: ConstructorParameters<typeof PhysicsJoint>[1];
            }
        >,
        any
    >;
    physicsRaycastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRaycastResult>>, any>;
    proximityCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProximityCastResult>>, any>;
    shapeCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShapeCastResult>>, any>;
    ammoJSPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AmmoJSPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof AmmoJSPlugin>[0];
                ammoInjection: ConstructorParameters<typeof AmmoJSPlugin>[1];
                overlappingPairCache: ConstructorParameters<typeof AmmoJSPlugin>[2];
            }
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
            }
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
            }
        >,
        any
    >;
    physicsEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngine>,
            {
                gravity: ConstructorParameters<typeof PhysicsEngine>[0];
                _physicsPlugin: ConstructorParameters<typeof PhysicsEngine>[1];
            }
        >,
        any
    >;
    physicsImpostor: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsImpostor & { cloneBy: string }>,
            {
                object: ConstructorParameters<typeof PhysicsImpostor>[0];
                type: ConstructorParameters<typeof PhysicsImpostor>[1];
                _options: ConstructorParameters<typeof PhysicsImpostor>[2];
                _scene: ConstructorParameters<typeof PhysicsImpostor>[3];
            }
        >,
        any
    >;
    physicsJoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsJoint>,
            {
                type: ConstructorParameters<typeof PhysicsJoint>[0];
                jointData: ConstructorParameters<typeof PhysicsJoint>[1];
            }
        >,
        any
    >;
    havokPlugin: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HavokPlugin>,
            {
                _useDeltaForWorldStep: ConstructorParameters<typeof HavokPlugin>[0];
                hpInjection: ConstructorParameters<typeof HavokPlugin>[1];
            }
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
            }
        >,
        any
    >;
    physicsBody: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsBody & { cloneBy: string }>,
            {
                transformNode: ConstructorParameters<typeof PhysicsBody>[0];
                motionType: ConstructorParameters<typeof PhysicsBody>[1];
                startsAsleep: ConstructorParameters<typeof PhysicsBody>[2];
                scene: ConstructorParameters<typeof PhysicsBody>[3];
            }
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
            }
        >,
        any
    >;
    physicsEngine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngine>,
            {
                gravity: ConstructorParameters<typeof PhysicsEngine>[0];
                _physicsPlugin: ConstructorParameters<typeof PhysicsEngine>[1];
            }
        >,
        any
    >;
    physicsShape: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsShape>,
            {
                options: ConstructorParameters<typeof PhysicsShape>[0];
                scene: ConstructorParameters<typeof PhysicsShape>[1];
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    postProcessRenderPipeline: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessRenderPipeline>,
            {
                _engine: ConstructorParameters<typeof PostProcessRenderPipeline>[0];
                name: ConstructorParameters<typeof PostProcessRenderPipeline>[1];
            }
        >,
        any
    >;
    postProcessRenderPipelineManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManager>>, any>;
    postProcessRenderPipelineManagerSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManagerSceneComponent>,
            {
                scene: ConstructorParameters<typeof PostProcessRenderPipelineManagerSceneComponent>[0];
            }
        >,
        any
    >;
    anaglyphPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AnaglyphPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof AnaglyphPostProcess>[0];
                options: ConstructorParameters<typeof AnaglyphPostProcess>[1];
                rigCameras: ConstructorParameters<typeof AnaglyphPostProcess>[2];
                samplingMode: ConstructorParameters<typeof AnaglyphPostProcess>[3];
                engine: ConstructorParameters<typeof AnaglyphPostProcess>[4];
                reusable: ConstructorParameters<typeof AnaglyphPostProcess>[5];
            }
        >,
        any
    >;
    blackAndWhitePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BlackAndWhitePostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof BlackAndWhitePostProcess>[0];
                options: ConstructorParameters<typeof BlackAndWhitePostProcess>[1];
                camera: ConstructorParameters<typeof BlackAndWhitePostProcess>[2];
                samplingMode: ConstructorParameters<typeof BlackAndWhitePostProcess>[3];
                engine: ConstructorParameters<typeof BlackAndWhitePostProcess>[4];
                reusable: ConstructorParameters<typeof BlackAndWhitePostProcess>[5];
            }
        >,
        any
    >;
    bloomEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BloomEffect>,
            {
                scene: ConstructorParameters<typeof BloomEffect>[0];
                _bloomScale: ConstructorParameters<typeof BloomEffect>[1];
                bloomWeight: ConstructorParameters<typeof BloomEffect>[2];
                bloomKernel: ConstructorParameters<typeof BloomEffect>[3];
                pipelineTextureType: ConstructorParameters<typeof BloomEffect>[4];
                blockCompilation: ConstructorParameters<typeof BloomEffect>[5];
            }
        >,
        any
    >;
    bloomMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BloomMergePostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    blurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BlurPostProcess & { cloneBy: string }>,
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
                _blockCompilation: ConstructorParameters<typeof BlurPostProcess>[10];
                textureFormat: ConstructorParameters<typeof BlurPostProcess>[11];
            }
        >,
        any
    >;
    chromaticAberrationPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ChromaticAberrationPostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    circleOfConfusionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<CircleOfConfusionPostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    colorCorrectionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorCorrectionPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ColorCorrectionPostProcess>[0];
                colorTableUrl: ConstructorParameters<typeof ColorCorrectionPostProcess>[1];
                options: ConstructorParameters<typeof ColorCorrectionPostProcess>[2];
                camera: ConstructorParameters<typeof ColorCorrectionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof ColorCorrectionPostProcess>[4];
                engine: ConstructorParameters<typeof ColorCorrectionPostProcess>[5];
                reusable: ConstructorParameters<typeof ColorCorrectionPostProcess>[6];
            }
        >,
        any
    >;
    convolutionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ConvolutionPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ConvolutionPostProcess>[0];
                kernel: ConstructorParameters<typeof ConvolutionPostProcess>[1];
                options: ConstructorParameters<typeof ConvolutionPostProcess>[2];
                camera: ConstructorParameters<typeof ConvolutionPostProcess>[3];
                samplingMode: ConstructorParameters<typeof ConvolutionPostProcess>[4];
                engine: ConstructorParameters<typeof ConvolutionPostProcess>[5];
                reusable: ConstructorParameters<typeof ConvolutionPostProcess>[6];
                textureType: ConstructorParameters<typeof ConvolutionPostProcess>[7];
            }
        >,
        any
    >;
    depthOfFieldBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldBlurPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[0];
                scene: ConstructorParameters<typeof DepthOfFieldBlurPostProcess>[1];
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
            }
        >,
        any
    >;
    depthOfFieldEffect: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldEffect>,
            {
                scene: ConstructorParameters<typeof DepthOfFieldEffect>[0];
                depthTexture: ConstructorParameters<typeof DepthOfFieldEffect>[1];
                blurLevel: ConstructorParameters<typeof DepthOfFieldEffect>[2];
                pipelineTextureType: ConstructorParameters<typeof DepthOfFieldEffect>[3];
                blockCompilation: ConstructorParameters<typeof DepthOfFieldEffect>[4];
            }
        >,
        any
    >;
    depthOfFieldMergePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthOfFieldMergePostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    displayPassPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DisplayPassPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof DisplayPassPostProcess>[0];
                options: ConstructorParameters<typeof DisplayPassPostProcess>[1];
                camera: ConstructorParameters<typeof DisplayPassPostProcess>[2];
                samplingMode: ConstructorParameters<typeof DisplayPassPostProcess>[3];
                engine: ConstructorParameters<typeof DisplayPassPostProcess>[4];
                reusable: ConstructorParameters<typeof DisplayPassPostProcess>[5];
            }
        >,
        any
    >;
    extractHighlightsPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ExtractHighlightsPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ExtractHighlightsPostProcess>[0];
                options: ConstructorParameters<typeof ExtractHighlightsPostProcess>[1];
                camera: ConstructorParameters<typeof ExtractHighlightsPostProcess>[2];
                samplingMode: ConstructorParameters<typeof ExtractHighlightsPostProcess>[3];
                engine: ConstructorParameters<typeof ExtractHighlightsPostProcess>[4];
                reusable: ConstructorParameters<typeof ExtractHighlightsPostProcess>[5];
                textureType: ConstructorParameters<typeof ExtractHighlightsPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof ExtractHighlightsPostProcess>[7];
            }
        >,
        any
    >;
    filterPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FilterPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FilterPostProcess>[0];
                kernelMatrix: ConstructorParameters<typeof FilterPostProcess>[1];
                options: ConstructorParameters<typeof FilterPostProcess>[2];
                camera: ConstructorParameters<typeof FilterPostProcess>[3];
                samplingMode: ConstructorParameters<typeof FilterPostProcess>[4];
                engine: ConstructorParameters<typeof FilterPostProcess>[5];
                reusable: ConstructorParameters<typeof FilterPostProcess>[6];
            }
        >,
        any
    >;
    fxaaPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FxaaPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof FxaaPostProcess>[0];
                options: ConstructorParameters<typeof FxaaPostProcess>[1];
                camera: ConstructorParameters<typeof FxaaPostProcess>[2];
                samplingMode: ConstructorParameters<typeof FxaaPostProcess>[3];
                engine: ConstructorParameters<typeof FxaaPostProcess>[4];
                reusable: ConstructorParameters<typeof FxaaPostProcess>[5];
                textureType: ConstructorParameters<typeof FxaaPostProcess>[6];
            }
        >,
        any
    >;
    grainPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GrainPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof GrainPostProcess>[0];
                options: ConstructorParameters<typeof GrainPostProcess>[1];
                camera: ConstructorParameters<typeof GrainPostProcess>[2];
                samplingMode: ConstructorParameters<typeof GrainPostProcess>[3];
                engine: ConstructorParameters<typeof GrainPostProcess>[4];
                reusable: ConstructorParameters<typeof GrainPostProcess>[5];
                textureType: ConstructorParameters<typeof GrainPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof GrainPostProcess>[7];
            }
        >,
        any
    >;
    highlightsPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HighlightsPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof HighlightsPostProcess>[0];
                options: ConstructorParameters<typeof HighlightsPostProcess>[1];
                camera: ConstructorParameters<typeof HighlightsPostProcess>[2];
                samplingMode: ConstructorParameters<typeof HighlightsPostProcess>[3];
                engine: ConstructorParameters<typeof HighlightsPostProcess>[4];
                reusable: ConstructorParameters<typeof HighlightsPostProcess>[5];
                textureType: ConstructorParameters<typeof HighlightsPostProcess>[6];
            }
        >,
        any
    >;
    imageProcessingPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageProcessingPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof ImageProcessingPostProcess>[0];
                options: ConstructorParameters<typeof ImageProcessingPostProcess>[1];
                camera: ConstructorParameters<typeof ImageProcessingPostProcess>[2];
                samplingMode: ConstructorParameters<typeof ImageProcessingPostProcess>[3];
                engine: ConstructorParameters<typeof ImageProcessingPostProcess>[4];
                reusable: ConstructorParameters<typeof ImageProcessingPostProcess>[5];
                textureType: ConstructorParameters<typeof ImageProcessingPostProcess>[6];
                imageProcessingConfiguration: ConstructorParameters<typeof ImageProcessingPostProcess>[7];
            }
        >,
        any
    >;
    motionBlurPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MotionBlurPostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    passPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PassPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof PassPostProcess>[0];
                options: ConstructorParameters<typeof PassPostProcess>[1];
                camera: ConstructorParameters<typeof PassPostProcess>[2];
                samplingMode: ConstructorParameters<typeof PassPostProcess>[3];
                engine: ConstructorParameters<typeof PassPostProcess>[4];
                reusable: ConstructorParameters<typeof PassPostProcess>[5];
                textureType: ConstructorParameters<typeof PassPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof PassPostProcess>[7];
            }
        >,
        any
    >;
    postProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    postProcessManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PostProcessManager>,
            {
                scene: ConstructorParameters<typeof PostProcessManager>[0];
            }
        >,
        any
    >;
    refractionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RefractionPostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    screenSpaceCurvaturePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceCurvaturePostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    screenSpaceReflectionPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScreenSpaceReflectionPostProcess & { cloneBy: string }>,
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
            }
        >,
        any
    >;
    sharpenPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SharpenPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SharpenPostProcess>[0];
                options: ConstructorParameters<typeof SharpenPostProcess>[1];
                camera: ConstructorParameters<typeof SharpenPostProcess>[2];
                samplingMode: ConstructorParameters<typeof SharpenPostProcess>[3];
                engine: ConstructorParameters<typeof SharpenPostProcess>[4];
                reusable: ConstructorParameters<typeof SharpenPostProcess>[5];
                textureType: ConstructorParameters<typeof SharpenPostProcess>[6];
                blockCompilation: ConstructorParameters<typeof SharpenPostProcess>[7];
            }
        >,
        any
    >;
    stereoscopicInterlacePostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StereoscopicInterlacePostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[0];
                rigCameras: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[1];
                isStereoscopicHoriz: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[2];
                samplingMode: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[3];
                engine: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[4];
                reusable: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[5];
            }
        >,
        any
    >;
    subSurfaceScatteringPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceScatteringPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[0];
                scene: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[1];
                options: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[2];
                camera: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[3];
                samplingMode: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[4];
                engine: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[5];
                reusable: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[6];
                textureType: ConstructorParameters<typeof SubSurfaceScatteringPostProcess>[7];
            }
        >,
        any
    >;
    tonemapPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TonemapPostProcess & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof TonemapPostProcess>[0];
                _operator: ConstructorParameters<typeof TonemapPostProcess>[1];
                exposureAdjustment: ConstructorParameters<typeof TonemapPostProcess>[2];
                camera: ConstructorParameters<typeof TonemapPostProcess>[3];
                samplingMode: ConstructorParameters<typeof TonemapPostProcess>[4];
                engine: ConstructorParameters<typeof TonemapPostProcess>[5];
                textureFormat: ConstructorParameters<typeof TonemapPostProcess>[6];
                reusable: ConstructorParameters<typeof TonemapPostProcess>[7];
            }
        >,
        any
    >;
    volumetricLightScatteringPostProcess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VolumetricLightScatteringPostProcess & { cloneBy: string }>,
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
            }
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
            }
        >,
        any
    >;
    boundingBoxRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BoundingBoxRenderer>,
            {
                scene: ConstructorParameters<typeof BoundingBoxRenderer>[0];
            }
        >,
        any
    >;
    depthPeelingRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthPeelingRenderer>,
            {
                scene: ConstructorParameters<typeof DepthPeelingRenderer>[0];
                passCount: ConstructorParameters<typeof DepthPeelingRenderer>[1];
            }
        >,
        any
    >;
    depthPeelingSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthPeelingSceneComponent>,
            {
                scene: ConstructorParameters<typeof DepthPeelingSceneComponent>[0];
            }
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
            }
        >,
        any
    >;
    depthRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof DepthRendererSceneComponent>[0];
            }
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
            }
        >,
        any
    >;
    fluidRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderer>,
            {
                scene: ConstructorParameters<typeof FluidRenderer>[0];
            }
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
            }
        >,
        any
    >;
    fluidRenderingObject: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingObject>,
            {
                scene: ConstructorParameters<typeof FluidRenderingObject>[0];
            }
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
            }
        >,
        any
    >;
    fluidRenderingObjectParticleSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingObjectParticleSystem>,
            {
                scene: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[0];
                ps: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[1];
            }
        >,
        any
    >;
    fluidRenderingTargetRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluidRenderingTargetRenderer>,
            {
                scene: ConstructorParameters<typeof FluidRenderingTargetRenderer>[0];
                camera: ConstructorParameters<typeof FluidRenderingTargetRenderer>[1];
            }
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
            }
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
            }
        >,
        any
    >;
    geometryBufferRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GeometryBufferRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof GeometryBufferRendererSceneComponent>[0];
            }
        >,
        any
    >;
    motionBlurConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MotionBlurConfiguration>>, any>;
    outlineRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OutlineRenderer>,
            {
                scene: ConstructorParameters<typeof OutlineRenderer>[0];
            }
        >,
        any
    >;
    prePassRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRenderer>,
            {
                scene: ConstructorParameters<typeof PrePassRenderer>[0];
            }
        >,
        any
    >;
    prePassRendererSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PrePassRendererSceneComponent>,
            {
                scene: ConstructorParameters<typeof PrePassRendererSceneComponent>[0];
            }
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
            }
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
            }
        >,
        any
    >;
    renderingManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RenderingManager>,
            {
                scene: ConstructorParameters<typeof RenderingManager>[0];
            }
        >,
        any
    >;
    screenSpaceReflections2Configuration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflections2Configuration>>, any>;
    screenSpaceReflectionsConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflectionsConfiguration>>, any>;
    subSurfaceConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceConfiguration>,
            {
                scene: ConstructorParameters<typeof SubSurfaceConfiguration>[0];
            }
        >,
        any
    >;
    subSurfaceSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SubSurfaceSceneComponent>,
            {
                scene: ConstructorParameters<typeof SubSurfaceSceneComponent>[0];
            }
        >,
        any
    >;
    utilityLayerRenderer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<UtilityLayerRenderer>,
            {
                originalScene: ConstructorParameters<typeof UtilityLayerRenderer>[0];
                handleEvents: ConstructorParameters<typeof UtilityLayerRenderer>[1];
            }
        >,
        any
    >;
    sprite: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Sprite>,
            {
                name: ConstructorParameters<typeof Sprite>[0];
                manager: ConstructorParameters<typeof Sprite>[1];
            }
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
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    spriteSceneComponent: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SpriteSceneComponent>,
            {
                scene: ConstructorParameters<typeof SpriteSceneComponent>[0];
            }
        >,
        any
    >;
    thinSprite: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinSprite>>, any>;
    depthCullingState: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DepthCullingState>,
            {
                reset: ConstructorParameters<typeof DepthCullingState>[0];
            }
        >,
        any
    >;
    stencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StencilState>>, any>;
    stencilStateComposer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StencilStateComposer>,
            {
                reset: ConstructorParameters<typeof StencilStateComposer>[0];
            }
        >,
        any
    >;
    WebXRAbstractFeature: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAbstractFeature>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRAbstractFeature>[0];
            }
        >,
        any
    >;
    WebXRAnchorSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAnchorSystem>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRAnchorSystem>[0];
                _options: ConstructorParameters<typeof WebXRAnchorSystem>[1];
            }
        >,
        any
    >;
    WebXRBackgroundRemover: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRBackgroundRemover>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRBackgroundRemover>[0];
                options: ConstructorParameters<typeof WebXRBackgroundRemover>[1];
            }
        >,
        any
    >;
    WebXRControllerMovement: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerMovement>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerMovement>[0];
                options: ConstructorParameters<typeof WebXRControllerMovement>[1];
            }
        >,
        any
    >;
    WebXRControllerPhysics: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerPhysics>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerPhysics>[0];
                _options: ConstructorParameters<typeof WebXRControllerPhysics>[1];
            }
        >,
        any
    >;
    WebXRControllerPointerSelection: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRControllerPointerSelection>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRControllerPointerSelection>[0];
                _options: ConstructorParameters<typeof WebXRControllerPointerSelection>[1];
            }
        >,
        any
    >;
    WebXRDepthSensing: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRDepthSensing>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRDepthSensing>[0];
                options: ConstructorParameters<typeof WebXRDepthSensing>[1];
            }
        >,
        any
    >;
    WebXREyeTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREyeTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXREyeTracking>[0];
            }
        >,
        any
    >;
    WebXRFeaturePointSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRFeaturePointSystem>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRFeaturePointSystem>[0];
            }
        >,
        any
    >;
    WebXRHandTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHandTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHandTracking>[0];
                options: ConstructorParameters<typeof WebXRHandTracking>[1];
            }
        >,
        any
    >;
    WebXRHitTest: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHitTest>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHitTest>[0];
                options: ConstructorParameters<typeof WebXRHitTest>[1];
            }
        >,
        any
    >;
    WebXRHitTestLegacy: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRHitTestLegacy>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRHitTestLegacy>[0];
                options: ConstructorParameters<typeof WebXRHitTestLegacy>[1];
            }
        >,
        any
    >;
    WebXRImageTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRImageTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRImageTracking>[0];
                options: ConstructorParameters<typeof WebXRImageTracking>[1];
            }
        >,
        any
    >;
    WebXRLayers: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLayers>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRLayers>[0];
                _options: ConstructorParameters<typeof WebXRLayers>[1];
            }
        >,
        any
    >;
    WebXRLightEstimation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRLightEstimation>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRLightEstimation>[0];
                options: ConstructorParameters<typeof WebXRLightEstimation>[1];
            }
        >,
        any
    >;
    WebXRMeshDetector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRMeshDetector>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRMeshDetector>[0];
                _options: ConstructorParameters<typeof WebXRMeshDetector>[1];
            }
        >,
        any
    >;
    WebXRNearInteraction: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRNearInteraction>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRNearInteraction>[0];
                _options: ConstructorParameters<typeof WebXRNearInteraction>[1];
            }
        >,
        any
    >;
    WebXRPlaneDetector: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRPlaneDetector>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRPlaneDetector>[0];
                _options: ConstructorParameters<typeof WebXRPlaneDetector>[1];
            }
        >,
        any
    >;
    WebXRRawCameraAccess: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRRawCameraAccess>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRRawCameraAccess>[0];
                options: ConstructorParameters<typeof WebXRRawCameraAccess>[1];
            }
        >,
        any
    >;
    WebXRSpaceWarp: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSpaceWarp>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarp>[0];
            }
        >,
        any
    >;
    WebXRWalkingLocomotion: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRWalkingLocomotion>,
            {
                sessionManager: ConstructorParameters<typeof WebXRWalkingLocomotion>[0];
                options: ConstructorParameters<typeof WebXRWalkingLocomotion>[1];
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    nativeXRFrame: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRFrame>,
            {
                _nativeImpl: ConstructorParameters<typeof NativeXRFrame>[0];
            }
        >,
        any
    >;
    nativeXRRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NativeXRRenderTarget>,
            {
                _xrSessionManager: ConstructorParameters<typeof NativeXRRenderTarget>[0];
            }
        >,
        any
    >;
    webXRCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRCamera & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof WebXRCamera>[0];
                scene: ConstructorParameters<typeof WebXRCamera>[1];
                _xrSessionManager: ConstructorParameters<typeof WebXRCamera>[2];
            }
        >,
        any
    >;
    webXRDefaultExperience: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDefaultExperience>>, any>;
    webXREnterExitUI: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREnterExitUI>,
            {
                _scene: ConstructorParameters<typeof WebXREnterExitUI>[0];
                options: ConstructorParameters<typeof WebXREnterExitUI>[1];
            }
        >,
        any
    >;
    webXRExperienceHelper: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRExperienceHelper>,
            {
                _scene: ConstructorParameters<typeof WebXRExperienceHelper>[0];
            }
        >,
        any
    >;
    webXRFeaturesManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRFeaturesManager>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRFeaturesManager>[0];
            }
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
            }
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
            }
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
            }
        >,
        any
    >;
    webXRManagedOutputCanvas: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRManagedOutputCanvas>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRManagedOutputCanvas>[0];
                _options: ConstructorParameters<typeof WebXRManagedOutputCanvas>[1];
            }
        >,
        any
    >;
    webXRSessionManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSessionManager>,
            {
                scene: ConstructorParameters<typeof WebXRSessionManager>[0];
            }
        >,
        any
    >;
    abstractScene: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractScene>>, any>;
    assetContainer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AssetContainer>,
            {
                scene: ConstructorParameters<typeof AssetContainer>[0];
            }
        >,
        any
    >;
    node: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Node & { cloneBy: string }>,
            {
                name: ConstructorParameters<typeof Node>[0];
                scene: ConstructorParameters<typeof Node>[1];
                isPure: ConstructorParameters<typeof Node>[2];
            }
        >,
        any
    >;
    scene: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Scene>,
            {
                engine: ConstructorParameters<typeof Scene>[0];
                options: ConstructorParameters<typeof Scene>[1];
            }
        >,
        any
    >;
}
