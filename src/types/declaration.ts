//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
import { type MeshProps, type Clonable } from './props';
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
    abstractActionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractActionManager>, AbstractActionManager>, any>;
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
    animationPropertiesOverride: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationPropertiesOverride>, AnimationPropertiesOverride>, any>;
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
    autoRotationBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoRotationBehavior>, AutoRotationBehavior>, any>;
    bouncingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BouncingBehavior>, BouncingBehavior>, any>;
    framingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FramingBehavior>, FramingBehavior>, any>;
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
    baseSixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSixDofDragBehavior>, BaseSixDofDragBehavior>, any>;
    fadeInOutBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FadeInOutBehavior>, FadeInOutBehavior>, any>;
    followBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowBehavior>, FollowBehavior>, any>;
    handConstraintBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandConstraintBehavior>, HandConstraintBehavior>, any>;
    multiPointerScaleBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiPointerScaleBehavior>, MultiPointerScaleBehavior>, any>;
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
    sixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SixDofDragBehavior>, SixDofDragBehavior>, any>;
    surfaceMagnetismBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SurfaceMagnetismBehavior>, SurfaceMagnetismBehavior>, any>;
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
    dataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataBuffer>, DataBuffer>, any>;
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
    BaseCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraMouseWheelInput>, BaseCameraMouseWheelInput>, any>;
    BaseCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraPointersInput>, BaseCameraPointersInput>, any>;
    arcRotateCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraGamepadInput>, ArcRotateCameraGamepadInput>, any>;
    arcRotateCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraKeyboardMoveInput>, ArcRotateCameraKeyboardMoveInput>, any>;
    arcRotateCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraMouseWheelInput>, ArcRotateCameraMouseWheelInput>, any>;
    arcRotateCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraPointersInput>, ArcRotateCameraPointersInput>, any>;
    arcRotateCameraVRDeviceOrientationInput: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraVRDeviceOrientationInput>, ArcRotateCameraVRDeviceOrientationInput>,
        any
    >;
    flyCameraKeyboardInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraKeyboardInput>, FlyCameraKeyboardInput>, any>;
    flyCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraMouseInput>, FlyCameraMouseInput>, any>;
    followCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraKeyboardMoveInput>, FollowCameraKeyboardMoveInput>, any>;
    followCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraMouseWheelInput>, FollowCameraMouseWheelInput>, any>;
    followCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraPointersInput>, FollowCameraPointersInput>, any>;
    freeCameraDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraDeviceOrientationInput>, FreeCameraDeviceOrientationInput>, any>;
    freeCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraGamepadInput>, FreeCameraGamepadInput>, any>;
    freeCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraKeyboardMoveInput>, FreeCameraKeyboardMoveInput>, any>;
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
    freeCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraMouseWheelInput>, FreeCameraMouseWheelInput>, any>;
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
            StereoscopicUniversalCamera
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
            },
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
            },
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
            },
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
    followCamera: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FollowCamera> & Clonable,
            {
                name: ConstructorParameters<typeof FollowCamera>[0];
                position: ConstructorParameters<typeof FollowCamera>[1];
                scene: ConstructorParameters<typeof FollowCamera>[2];
                lockedTarget: ConstructorParameters<typeof FollowCamera>[3];
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
            VirtualJoysticksCamera
        >,
        any
    >;
    collider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Collider>, Collider>, any>;
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
    pickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PickingInfo>, PickingInfo>, any>;
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
    nativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeDataStream>, NativeDataStream>, any>;
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
    nativeShaderProcessingContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeShaderProcessingContext>, NativeShaderProcessingContext>, any>;
    validatedNativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValidatedNativeDataStream>, ValidatedNativeDataStream>, any>;
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
    shaderCodeCursor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeCursor>, ShaderCodeCursor>, any>;
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
    shaderCodeNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeNode>, ShaderCodeNode>, any>;
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
    webGLPipelineContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLPipelineContext>, WebGLPipelineContext>, any>;
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
    pointerPickingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerPickingConfiguration>, PointerPickingConfiguration>, any>;
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
    effectLayer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<EffectLayer>,
            {
                name: ConstructorParameters<typeof EffectLayer>[0];
                scene: ConstructorParameters<typeof EffectLayer>[1];
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
    shadowLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowLight> & Clonable, ShadowLight>, any>;
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
    backgroundMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BackgroundMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof BackgroundMaterial>[0];
                scene: ConstructorParameters<typeof BackgroundMaterial>[1];
            },
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
            },
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
    greasedLineSimpleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GreasedLineSimpleMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof GreasedLineSimpleMaterial>[0];
                scene: ConstructorParameters<typeof GreasedLineSimpleMaterial>[1];
                options: ConstructorParameters<typeof GreasedLineSimpleMaterial>[2];
            },
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
    TBNBlock: React.DetailedHTMLProps<
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
            },
            NodeMaterial
        >,
        any
    >;
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
    nodeMaterialBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildState>, NodeMaterialBuildState>, any>;
    nodeMaterialBuildStateSharedData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBuildStateSharedData>, NodeMaterialBuildStateSharedData>, any>;
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
    occlusionMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<OcclusionMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof OcclusionMaterial>[0];
                scene: ConstructorParameters<typeof OcclusionMaterial>[1];
            },
            OcclusionMaterial
        >,
        any
    >;
    MultiviewRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiviewRenderTarget> & Clonable,
            {
                scene: ConstructorParameters<typeof MultiviewRenderTarget>[0];
                size: ConstructorParameters<typeof MultiviewRenderTarget>[1];
            },
            MultiviewRenderTarget
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
            },
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
            },
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
            },
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
            },
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
            },
            CubeTexture
        >,
        any
    >;
    dynamicTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DynamicTexture> & Clonable,
            {
                name: ConstructorParameters<typeof DynamicTexture>[0];
                options: ConstructorParameters<typeof DynamicTexture>[1];
                scene: ConstructorParameters<typeof DynamicTexture>[2];
                generateMipMaps: ConstructorParameters<typeof DynamicTexture>[3];
                samplingMode: ConstructorParameters<typeof DynamicTexture>[4];
                format: ConstructorParameters<typeof DynamicTexture>[5];
                invertY: ConstructorParameters<typeof DynamicTexture>[6];
            },
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
            },
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
    htmlElementTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HtmlElementTexture> & Clonable,
            {
                name: ConstructorParameters<typeof HtmlElementTexture>[0];
                element: ConstructorParameters<typeof HtmlElementTexture>[1];
                options: ConstructorParameters<typeof HtmlElementTexture>[2];
            },
            HtmlElementTexture
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
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
            },
            Texture
        >,
        any
    >;
    textureSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureSampler>, TextureSampler>, any>;
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
            },
            VideoTexture
        >,
        any
    >;
    colorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCurves> & Clonable, ColorCurves>, any>;
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
            },
            Effect
        >,
        any
    >;
    effectFallbacks: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectFallbacks>, EffectFallbacks>, any>;
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
    imageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingConfiguration> & Clonable, ImageProcessingConfiguration>, any>;
    material: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Material> & Clonable,
            {
                name: ConstructorParameters<typeof Material>[0];
                scene: ConstructorParameters<typeof Material>[1];
                doNotAdd: ConstructorParameters<typeof Material>[2];
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
    materialStencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialStencilState>, MaterialStencilState>, any>;
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
            },
            MultiMaterial
        >,
        any
    >;
    prePassConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassConfiguration>, PrePassConfiguration>, any>;
    pushMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PushMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PushMaterial>[0];
                scene: ConstructorParameters<typeof PushMaterial>[1];
                storeEffectOnSubMeshes: ConstructorParameters<typeof PushMaterial>[2];
            },
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
            },
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
            },
            StandardMaterial
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
    sphericalPolynomial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalPolynomial>, SphericalPolynomial>, any>;
    dracoCompression: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DracoCompression>,
            {
                numWorkers: ConstructorParameters<typeof DracoCompression>[0];
            },
            DracoCompression
        >,
        any
    >;
    meshoptCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshoptCompression>, MeshoptCompression>, any>;
    gaussianSplattingMesh: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GaussianSplattingMesh> & Clonable,
            {
                name: ConstructorParameters<typeof GaussianSplattingMesh>[0];
                url: ConstructorParameters<typeof GaussianSplattingMesh>[1];
                scene: ConstructorParameters<typeof GaussianSplattingMesh>[2];
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
    nodeGeometryBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBuildState>, NodeGeometryBuildState>, any>;
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
    goldbergMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GoldbergMesh> & Clonable, GoldbergMesh>, any>;
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
    plane: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePlane>> & MeshProps,
            {
                name: Parameters<typeof CreatePlane>[0];
                options: Parameters<typeof CreatePlane>[1];
                scene: Parameters<typeof CreatePlane>[2];
            },
            ReturnType<typeof CreatePlane>
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
    polygon: React.DetailedHTMLProps<
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
    text: React.DetailedHTMLProps<
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
    deferred: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Deferred>, Deferred>, any>;
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
            },
            FilesInput
        >,
        any
    >;
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
    perfCounter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerfCounter>, PerfCounter>, any>;
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
    sceneRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneRecorder>, SceneRecorder>, any>;
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
    stringDictionary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StringDictionary>, StringDictionary>, any>;
    trajectoryClassifier: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrajectoryClassifier>, TrajectoryClassifier>, any>;
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
    webRequest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebRequest>, WebRequest>, any>;
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
    boxParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxParticleEmitter> & Clonable, BoxParticleEmitter>, any>;
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
    customParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomParticleEmitter> & Clonable, CustomParticleEmitter>, any>;
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
    pointParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointParticleEmitter> & Clonable, PointParticleEmitter>, any>;
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
    particleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystem> & Clonable, ParticleSystem>, any>;
    particleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystemSet>, ParticleSystemSet>, any>;
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
    castingResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CastingResult>, CastingResult>, any>;
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
    physicsRaycastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRaycastResult>, PhysicsRaycastResult>, any>;
    proximityCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProximityCastResult>, ProximityCastResult>, any>;
    shapeCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShapeCastResult>, ShapeCastResult>, any>;
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
    postProcessRenderPipelineManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManager>, PostProcessRenderPipelineManager>, any>;
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
                scene: ConstructorParameters<typeof BloomEffect>[0];
                _bloomScale: ConstructorParameters<typeof BloomEffect>[1];
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
                _blockCompilation: ConstructorParameters<typeof BlurPostProcess>[10];
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
            },
            DepthOfFieldBlurPostProcess
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
    motionBlurConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MotionBlurConfiguration>, MotionBlurConfiguration>, any>;
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
        BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflections2Configuration>, ScreenSpaceReflections2Configuration>,
        any
    >;
    screenSpaceReflectionsConfiguration: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflectionsConfiguration>, ScreenSpaceReflectionsConfiguration>,
        any
    >;
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
    thinSprite: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinSprite>, ThinSprite>, any>;
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
    stencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StencilState>, StencilState>, any>;
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
    WebXRAbstractFeature: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRAbstractFeature>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRAbstractFeature>[0];
            },
            WebXRAbstractFeature
        >,
        any
    >;
    WebXRAnchorSystem: React.DetailedHTMLProps<
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
    WebXRBackgroundRemover: React.DetailedHTMLProps<
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
    WebXRControllerMovement: React.DetailedHTMLProps<
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
    WebXRControllerPhysics: React.DetailedHTMLProps<
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
    WebXRControllerPointerSelection: React.DetailedHTMLProps<
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
    WebXRDepthSensing: React.DetailedHTMLProps<
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
    WebXREyeTracking: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXREyeTracking>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXREyeTracking>[0];
            },
            WebXREyeTracking
        >,
        any
    >;
    WebXRFeaturePointSystem: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRFeaturePointSystem>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRFeaturePointSystem>[0];
            },
            WebXRFeaturePointSystem
        >,
        any
    >;
    WebXRHandTracking: React.DetailedHTMLProps<
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
    WebXRHitTest: React.DetailedHTMLProps<
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
    WebXRHitTestLegacy: React.DetailedHTMLProps<
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
    WebXRImageTracking: React.DetailedHTMLProps<
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
    WebXRLayers: React.DetailedHTMLProps<
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
    WebXRLightEstimation: React.DetailedHTMLProps<
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
    WebXRMeshDetector: React.DetailedHTMLProps<
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
    WebXRNearInteraction: React.DetailedHTMLProps<
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
    WebXRPlaneDetector: React.DetailedHTMLProps<
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
    WebXRRawCameraAccess: React.DetailedHTMLProps<
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
    WebXRSpaceWarp: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<WebXRSpaceWarp>,
            {
                _xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarp>[0];
            },
            WebXRSpaceWarp
        >,
        any
    >;
    WebXRWalkingLocomotion: React.DetailedHTMLProps<
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
            },
            WebXRCamera
        >,
        any
    >;
    webXRDefaultExperience: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDefaultExperience>, WebXRDefaultExperience>, any>;
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
    abstractScene: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractScene>, AbstractScene>, any>;
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
}
