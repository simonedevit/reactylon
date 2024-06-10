//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from './types';
import { type MeshProps, type Clonable } from './props';
import { AbstractActionManager } from '@babylonjs/core';
import { AbstractAssetTask } from '@babylonjs/core';
import { AbstractEngine } from '@babylonjs/core';
import { AbstractMesh } from '@babylonjs/core';
import { AbstractScene } from '@babylonjs/core';
import { Action } from '@babylonjs/core';
import { ActionEvent } from '@babylonjs/core';
import { ActionManager } from '@babylonjs/core';
import { AddBlock } from '@babylonjs/core';
import { AdvancedTimer } from '@babylonjs/core';
import { AlignBlock } from '@babylonjs/core';
import { AlphaState } from '@babylonjs/core';
import { AmmoJSPlugin } from '@babylonjs/core';
import { AnaglyphArcRotateCamera } from '@babylonjs/core';
import { AnaglyphFreeCamera } from '@babylonjs/core';
import { AnaglyphGamepadCamera } from '@babylonjs/core';
import { AnaglyphPostProcess } from '@babylonjs/core';
import { AnaglyphUniversalCamera } from '@babylonjs/core';
import { Analyser } from '@babylonjs/core';
import { Angle } from '@babylonjs/core';
import { Animatable } from '@babylonjs/core';
import { Animation } from '@babylonjs/core';
import { AnimationAssetTask } from '@babylonjs/core';
import { AnimationEvent } from '@babylonjs/core';
import { AnimationGroup } from '@babylonjs/core';
import { AnimationGroupMask } from '@babylonjs/core';
import { AnimationPropertiesOverride } from '@babylonjs/core';
import { AnimationRange } from '@babylonjs/core';
import { AnisotropyBlock } from '@babylonjs/core';
import { Arc2 } from '@babylonjs/core';
import { ArcFollowCamera } from '@babylonjs/core';
import { ArcRotateCamera } from '@babylonjs/core';
import { ArcRotateCameraGamepadInput } from '@babylonjs/core';
import { ArcRotateCameraInputsManager } from '@babylonjs/core';
import { ArcRotateCameraKeyboardMoveInput } from '@babylonjs/core';
import { ArcRotateCameraMouseWheelInput } from '@babylonjs/core';
import { ArcRotateCameraPointersInput } from '@babylonjs/core';
import { ArcRotateCameraVRDeviceOrientationInput } from '@babylonjs/core';
import { ArcTan2Block } from '@babylonjs/core';
import { AssetContainer } from '@babylonjs/core';
import { AssetsManager } from '@babylonjs/core';
import { AssetsProgressEvent } from '@babylonjs/core';
import { AsyncLoop } from '@babylonjs/core';
import { AttachToBoxBehavior } from '@babylonjs/core';
import { AudioEngine } from '@babylonjs/core';
import { AudioSceneComponent } from '@babylonjs/core';
import { AutoReleaseWorkerPool } from '@babylonjs/core';
import { AutoRotationBehavior } from '@babylonjs/core';
import { AxesViewer } from '@babylonjs/core';
import { AxisDragGizmo } from '@babylonjs/core';
import { AxisScaleGizmo } from '@babylonjs/core';
import { BackEase } from '@babylonjs/core';
import { BackgroundMaterial } from '@babylonjs/core';
import { BakedVertexAnimationManager } from '@babylonjs/core';
import { BallAndSocketConstraint } from '@babylonjs/core';
import { BaseCameraMouseWheelInput } from '@babylonjs/core';
import { BaseCameraPointersInput } from '@babylonjs/core';
import { BaseParticleSystem } from '@babylonjs/core';
import { BaseSixDofDragBehavior } from '@babylonjs/core';
import { BaseTexture } from '@babylonjs/core';
import { BezierCurveEase } from '@babylonjs/core';
import { BiPlanarBlock } from '@babylonjs/core';
import { BinaryFileAssetTask } from '@babylonjs/core';
import { BlackAndWhitePostProcess } from '@babylonjs/core';
import { BloomEffect } from '@babylonjs/core';
import { BloomMergePostProcess } from '@babylonjs/core';
import { BlurPostProcess } from '@babylonjs/core';
import { Bone } from '@babylonjs/core';
import { BoneAxesViewer } from '@babylonjs/core';
import { BoneIKController } from '@babylonjs/core';
import { BoneLookController } from '@babylonjs/core';
import { BonesBlock } from '@babylonjs/core';
import { BooleanGeometryBlock } from '@babylonjs/core';
import { BounceEase } from '@babylonjs/core';
import { BouncingBehavior } from '@babylonjs/core';
import { BoundingBlock } from '@babylonjs/core';
import { BoundingBox } from '@babylonjs/core';
import { BoundingBoxGizmo } from '@babylonjs/core';
import { BoundingBoxRenderer } from '@babylonjs/core';
import { BoundingInfo } from '@babylonjs/core';
import { BoundingSphere } from '@babylonjs/core';
import { BoxBlock } from '@babylonjs/core';
import { BoxParticleEmitter } from '@babylonjs/core';
import { Buffer } from '@babylonjs/core';
import { CSG } from '@babylonjs/core';
import { Camera } from '@babylonjs/core';
import { CameraGizmo } from '@babylonjs/core';
import { CameraInputsManager } from '@babylonjs/core';
import { CannonJSPlugin } from '@babylonjs/core';
import { CapsuleBlock } from '@babylonjs/core';
import { CascadedShadowGenerator } from '@babylonjs/core';
import { ChromaticAberrationPostProcess } from '@babylonjs/core';
import { CircleOfConfusionPostProcess } from '@babylonjs/core';
import { ClampBlock } from '@babylonjs/core';
import { ClearCoatBlock } from '@babylonjs/core';
import { ClipPlanesBlock } from '@babylonjs/core';
import { ClipboardInfo } from '@babylonjs/core';
import { CloudBlock } from '@babylonjs/core';
import { CloudPoint } from '@babylonjs/core';
import { Collider } from '@babylonjs/core';
import { Color3 } from '@babylonjs/core';
import { Color3Gradient } from '@babylonjs/core';
import { Color4 } from '@babylonjs/core';
import { ColorCorrectionPostProcess } from '@babylonjs/core';
import { ColorCurves } from '@babylonjs/core';
import { ColorGradient } from '@babylonjs/core';
import { ColorGradingTexture } from '@babylonjs/core';
import { ColorMergerBlock } from '@babylonjs/core';
import { ColorSplitterBlock } from '@babylonjs/core';
import { CombineAction } from '@babylonjs/core';
import { ComputeEffect } from '@babylonjs/core';
import { ComputeNormalsBlock } from '@babylonjs/core';
import { ComputeShader } from '@babylonjs/core';
import { ComputeShaderParticleSystem } from '@babylonjs/core';
import { Condition } from '@babylonjs/core';
import { ConditionBlock } from '@babylonjs/core';
import { ConditionalBlock } from '@babylonjs/core';
import { ConeDirectedParticleEmitter } from '@babylonjs/core';
import { ConeParticleEmitter } from '@babylonjs/core';
import { ContainerAssetTask } from '@babylonjs/core';
import { ConvolutionPostProcess } from '@babylonjs/core';
import { CopyTextureToTexture } from '@babylonjs/core';
import { CreateBox } from '@babylonjs/core';
import { CreateBoxVertexData } from '@babylonjs/core';
import { CreateCapsule } from '@babylonjs/core';
import { CreateCapsuleVertexData } from '@babylonjs/core';
import { CreateCylinder } from '@babylonjs/core';
import { CreateCylinderVertexData } from '@babylonjs/core';
import { CreateDashedLines } from '@babylonjs/core';
import { CreateDashedLinesVertexData } from '@babylonjs/core';
import { CreateDecal } from '@babylonjs/core';
import { CreateDisc } from '@babylonjs/core';
import { CreateDiscVertexData } from '@babylonjs/core';
import { CreateEnvTextureAsync } from '@babylonjs/core';
import { CreateGeodesic } from '@babylonjs/core';
import { CreateGoldberg } from '@babylonjs/core';
import { CreateGoldbergVertexData } from '@babylonjs/core';
import { CreateGreasedLine } from '@babylonjs/core';
import { CreateGreasedLineMaterial } from '@babylonjs/core';
import { CreateGround } from '@babylonjs/core';
import { CreateGroundFromHeightMap } from '@babylonjs/core';
import { CreateGroundFromHeightMapVertexData } from '@babylonjs/core';
import { CreateGroundVertexData } from '@babylonjs/core';
import { CreateHemisphere } from '@babylonjs/core';
import { CreateIcoSphere } from '@babylonjs/core';
import { CreateIcoSphereVertexData } from '@babylonjs/core';
import { CreateImageBitmapFromSource } from '@babylonjs/core';
import { CreateImageDataArrayBufferViews } from '@babylonjs/core';
import { CreateLathe } from '@babylonjs/core';
import { CreateLineSystem } from '@babylonjs/core';
import { CreateLineSystemVertexData } from '@babylonjs/core';
import { CreateLines } from '@babylonjs/core';
import { CreatePlane } from '@babylonjs/core';
import { CreatePlaneVertexData } from '@babylonjs/core';
import { CreatePolygon } from '@babylonjs/core';
import { CreatePolygonVertexData } from '@babylonjs/core';
import { CreatePolyhedron } from '@babylonjs/core';
import { CreatePolyhedronVertexData } from '@babylonjs/core';
import { CreateResizedCopy } from '@babylonjs/core';
import { CreateRibbon } from '@babylonjs/core';
import { CreateRibbonVertexData } from '@babylonjs/core';
import { CreateScreenshot } from '@babylonjs/core';
import { CreateScreenshotAsync } from '@babylonjs/core';
import { CreateScreenshotUsingRenderTarget } from '@babylonjs/core';
import { CreateScreenshotUsingRenderTargetAsync } from '@babylonjs/core';
import { CreateScreenshotWithResizeAsync } from '@babylonjs/core';
import { CreateSegmentedBoxVertexData } from '@babylonjs/core';
import { CreateSphere } from '@babylonjs/core';
import { CreateSphereVertexData } from '@babylonjs/core';
import { CreateText } from '@babylonjs/core';
import { CreateTextShapePaths } from '@babylonjs/core';
import { CreateTiledBox } from '@babylonjs/core';
import { CreateTiledBoxVertexData } from '@babylonjs/core';
import { CreateTiledGround } from '@babylonjs/core';
import { CreateTiledGroundVertexData } from '@babylonjs/core';
import { CreateTiledPlane } from '@babylonjs/core';
import { CreateTiledPlaneVertexData } from '@babylonjs/core';
import { CreateTorus } from '@babylonjs/core';
import { CreateTorusKnot } from '@babylonjs/core';
import { CreateTorusKnotVertexData } from '@babylonjs/core';
import { CreateTorusVertexData } from '@babylonjs/core';
import { CreateTube } from '@babylonjs/core';
import { CrossBlock } from '@babylonjs/core';
import { CubeTexture } from '@babylonjs/core';
import { CubeTextureAssetTask } from '@babylonjs/core';
import { CurrentScreenBlock } from '@babylonjs/core';
import { Curve3 } from '@babylonjs/core';
import { CurveBlock } from '@babylonjs/core';
import { CustomBlock } from '@babylonjs/core';
import { CustomParticleEmitter } from '@babylonjs/core';
import { CustomProceduralTexture } from '@babylonjs/core';
import { CylinderBlock } from '@babylonjs/core';
import { CylinderDirectedParticleEmitter } from '@babylonjs/core';
import { CylinderParticleEmitter } from '@babylonjs/core';
import { DataBuffer } from '@babylonjs/core';
import { DataReader } from '@babylonjs/core';
import { Database } from '@babylonjs/core';
import { DebugBlock } from '@babylonjs/core';
import { DebugLayer } from '@babylonjs/core';
import { DecalMapConfiguration } from '@babylonjs/core';
import { DecalMapDefines } from '@babylonjs/core';
import { DefaultCollisionCoordinator } from '@babylonjs/core';
import { DefaultKTX2DecoderOptions } from '@babylonjs/core';
import { DefaultLoadingScreen } from '@babylonjs/core';
import { DefaultRenderingPipeline } from '@babylonjs/core';
import { Deferred } from '@babylonjs/core';
import { DepthCullingState } from '@babylonjs/core';
import { DepthOfFieldBlurPostProcess } from '@babylonjs/core';
import { DepthOfFieldEffect } from '@babylonjs/core';
import { DepthOfFieldMergePostProcess } from '@babylonjs/core';
import { DepthPeelingRenderer } from '@babylonjs/core';
import { DepthPeelingSceneComponent } from '@babylonjs/core';
import { DepthReducer } from '@babylonjs/core';
import { DepthRenderer } from '@babylonjs/core';
import { DepthRendererSceneComponent } from '@babylonjs/core';
import { DepthSortedParticle } from '@babylonjs/core';
import { DerivativeBlock } from '@babylonjs/core';
import { DesaturateBlock } from '@babylonjs/core';
import { DetailMapConfiguration } from '@babylonjs/core';
import { DeviceOrientationCamera } from '@babylonjs/core';
import { DeviceSource } from '@babylonjs/core';
import { DeviceSourceManager } from '@babylonjs/core';
import { DirectionalLight } from '@babylonjs/core';
import { DirectionalLightFrustumViewer } from '@babylonjs/core';
import { DiscBlock } from '@babylonjs/core';
import { DiscardBlock } from '@babylonjs/core';
import { DisplayPassPostProcess } from '@babylonjs/core';
import { DistanceBlock } from '@babylonjs/core';
import { DistanceConstraint } from '@babylonjs/core';
import { DistanceJoint } from '@babylonjs/core';
import { DivideBlock } from '@babylonjs/core';
import { DoNothingAction } from '@babylonjs/core';
import { DotBlock } from '@babylonjs/core';
import { DracoCompression } from '@babylonjs/core';
import { DrawWrapper } from '@babylonjs/core';
import { DualShockPad } from '@babylonjs/core';
import { DynamicFloat32Array } from '@babylonjs/core';
import { DynamicTexture } from '@babylonjs/core';
import { EasingFunction } from '@babylonjs/core';
import { EdgesRenderer } from '@babylonjs/core';
import { Effect } from '@babylonjs/core';
import { EffectFallbacks } from '@babylonjs/core';
import { EffectLayer } from '@babylonjs/core';
import { EffectLayerSceneComponent } from '@babylonjs/core';
import { EffectRenderer } from '@babylonjs/core';
import { EffectWrapper } from '@babylonjs/core';
import { ElasticEase } from '@babylonjs/core';
import { ElbowBlock } from '@babylonjs/core';
import { Engine } from '@babylonjs/core';
import { EngineInstrumentation } from '@babylonjs/core';
import { EnvironmentHelper } from '@babylonjs/core';
import { EquiRectangularCubeTexture } from '@babylonjs/core';
import { EquiRectangularCubeTextureAssetTask } from '@babylonjs/core';
import { EventState } from '@babylonjs/core';
import { ExecuteCodeAction } from '@babylonjs/core';
import { ExponentialEase } from '@babylonjs/core';
import { ExternalTexture } from '@babylonjs/core';
import { ExtractHighlightsPostProcess } from '@babylonjs/core';
import { FactorGradient } from '@babylonjs/core';
import { FadeInOutBehavior } from '@babylonjs/core';
import { FilesInput } from '@babylonjs/core';
import { FilterPostProcess } from '@babylonjs/core';
import { FlowGraph } from '@babylonjs/core';
import { FlowGraphAbsBlock } from '@babylonjs/core';
import { FlowGraphAcosBlock } from '@babylonjs/core';
import { FlowGraphAcoshBlock } from '@babylonjs/core';
import { FlowGraphAddBlock } from '@babylonjs/core';
import { FlowGraphAsinBlock } from '@babylonjs/core';
import { FlowGraphAsinhBlock } from '@babylonjs/core';
import { FlowGraphAtan2Block } from '@babylonjs/core';
import { FlowGraphAtanBlock } from '@babylonjs/core';
import { FlowGraphAtanhBlock } from '@babylonjs/core';
import { FlowGraphBitwiseAndBlock } from '@babylonjs/core';
import { FlowGraphBitwiseLeftShiftBlock } from '@babylonjs/core';
import { FlowGraphBitwiseNotBlock } from '@babylonjs/core';
import { FlowGraphBitwiseOrBlock } from '@babylonjs/core';
import { FlowGraphBitwiseRightShiftBlock } from '@babylonjs/core';
import { FlowGraphBitwiseXorBlock } from '@babylonjs/core';
import { FlowGraphBlock } from '@babylonjs/core';
import { FlowGraphBranchBlock } from '@babylonjs/core';
import { FlowGraphCeilBlock } from '@babylonjs/core';
import { FlowGraphClampBlock } from '@babylonjs/core';
import { FlowGraphConditionalDataBlock } from '@babylonjs/core';
import { FlowGraphConnection } from '@babylonjs/core';
import { FlowGraphConsoleLogBlock } from '@babylonjs/core';
import { FlowGraphConstantBlock } from '@babylonjs/core';
import { FlowGraphContext } from '@babylonjs/core';
import { FlowGraphContextLogger } from '@babylonjs/core';
import { FlowGraphCoordinateTransformBlock } from '@babylonjs/core';
import { FlowGraphCoordinator } from '@babylonjs/core';
import { FlowGraphCosBlock } from '@babylonjs/core';
import { FlowGraphCoshBlock } from '@babylonjs/core';
import { FlowGraphCountLeadingZerosBlock } from '@babylonjs/core';
import { FlowGraphCountOneBitsBlock } from '@babylonjs/core';
import { FlowGraphCountTrailingZerosBlock } from '@babylonjs/core';
import { FlowGraphCounterBlock } from '@babylonjs/core';
import { FlowGraphCrossBlock } from '@babylonjs/core';
import { FlowGraphCubeRootBlock } from '@babylonjs/core';
import { FlowGraphDataConnection } from '@babylonjs/core';
import { FlowGraphDebounceBlock } from '@babylonjs/core';
import { FlowGraphDegToRadBlock } from '@babylonjs/core';
import { FlowGraphDeterminantBlock } from '@babylonjs/core';
import { FlowGraphDivideBlock } from '@babylonjs/core';
import { FlowGraphDoNBlock } from '@babylonjs/core';
import { FlowGraphDotBlock } from '@babylonjs/core';
import { FlowGraphEBlock } from '@babylonjs/core';
import { FlowGraphEqBlock } from '@babylonjs/core';
import { FlowGraphExecutionBlock } from '@babylonjs/core';
import { FlowGraphExpBlock } from '@babylonjs/core';
import { FlowGraphFlipFlopBlock } from '@babylonjs/core';
import { FlowGraphFloorBlock } from '@babylonjs/core';
import { FlowGraphForLoopBlock } from '@babylonjs/core';
import { FlowGraphFractBlock } from '@babylonjs/core';
import { FlowGraphGetPropertyBlock } from '@babylonjs/core';
import { FlowGraphGetVariableBlock } from '@babylonjs/core';
import { FlowGraphGreaterThanBlock } from '@babylonjs/core';
import { FlowGraphGreaterThanOrEqualBlock } from '@babylonjs/core';
import { FlowGraphInfBlock } from '@babylonjs/core';
import { FlowGraphInterpolateBlock } from '@babylonjs/core';
import { FlowGraphInvertMatrixBlock } from '@babylonjs/core';
import { FlowGraphIsInfBlock } from '@babylonjs/core';
import { FlowGraphIsNanBlock } from '@babylonjs/core';
import { FlowGraphLengthBlock } from '@babylonjs/core';
import { FlowGraphLessThanBlock } from '@babylonjs/core';
import { FlowGraphLessThanOrEqualBlock } from '@babylonjs/core';
import { FlowGraphLog10Block } from '@babylonjs/core';
import { FlowGraphLog2Block } from '@babylonjs/core';
import { FlowGraphLogBlock } from '@babylonjs/core';
import { FlowGraphLogicAndBlock } from '@babylonjs/core';
import { FlowGraphLogicNotBlock } from '@babylonjs/core';
import { FlowGraphLogicOrBlock } from '@babylonjs/core';
import { FlowGraphMatMulBlock } from '@babylonjs/core';
import { FlowGraphMaxBlock } from '@babylonjs/core';
import { FlowGraphMeshPickEventBlock } from '@babylonjs/core';
import { FlowGraphMinBlock } from '@babylonjs/core';
import { FlowGraphMultiGateBlock } from '@babylonjs/core';
import { FlowGraphMultiplyBlock } from '@babylonjs/core';
import { FlowGraphNaNBlock } from '@babylonjs/core';
import { FlowGraphNegBlock } from '@babylonjs/core';
import { FlowGraphNormalizeBlock } from '@babylonjs/core';
import { FlowGraphPauseAnimationBlock } from '@babylonjs/core';
import { FlowGraphPiBlock } from '@babylonjs/core';
import { FlowGraphPlayAnimationBlock } from '@babylonjs/core';
import { FlowGraphPowBlock } from '@babylonjs/core';
import { FlowGraphRadToDegBlock } from '@babylonjs/core';
import { FlowGraphRandomBlock } from '@babylonjs/core';
import { FlowGraphReceiveCustomEventBlock } from '@babylonjs/core';
import { FlowGraphRemainderBlock } from '@babylonjs/core';
import { FlowGraphRotate2DBlock } from '@babylonjs/core';
import { FlowGraphRotate3DBlock } from '@babylonjs/core';
import { FlowGraphSaturateBlock } from '@babylonjs/core';
import { FlowGraphSendCustomEventBlock } from '@babylonjs/core';
import { FlowGraphSequenceBlock } from '@babylonjs/core';
import { FlowGraphSetPropertyBlock } from '@babylonjs/core';
import { FlowGraphSetVariableBlock } from '@babylonjs/core';
import { FlowGraphSignBlock } from '@babylonjs/core';
import { FlowGraphSinBlock } from '@babylonjs/core';
import { FlowGraphSinhBlock } from '@babylonjs/core';
import { FlowGraphSqrtBlock } from '@babylonjs/core';
import { FlowGraphStopAnimationBlock } from '@babylonjs/core';
import { FlowGraphSubtractBlock } from '@babylonjs/core';
import { FlowGraphSwitchBlock } from '@babylonjs/core';
import { FlowGraphTanBlock } from '@babylonjs/core';
import { FlowGraphTanhBlock } from '@babylonjs/core';
import { FlowGraphThrottleBlock } from '@babylonjs/core';
import { FlowGraphTimerBlock } from '@babylonjs/core';
import { FlowGraphTransposeBlock } from '@babylonjs/core';
import { FlowGraphTruncBlock } from '@babylonjs/core';
import { FlowGraphWaitAllBlock } from '@babylonjs/core';
import { FlowGraphWhileLoopBlock } from '@babylonjs/core';
import { FluidRenderer } from '@babylonjs/core';
import { FluidRendererSceneComponent } from '@babylonjs/core';
import { FluidRenderingObject } from '@babylonjs/core';
import { FluidRenderingObjectCustomParticles } from '@babylonjs/core';
import { FluidRenderingObjectParticleSystem } from '@babylonjs/core';
import { FluidRenderingTargetRenderer } from '@babylonjs/core';
import { FlyCamera } from '@babylonjs/core';
import { FlyCameraInputsManager } from '@babylonjs/core';
import { FlyCameraKeyboardInput } from '@babylonjs/core';
import { FlyCameraMouseInput } from '@babylonjs/core';
import { FogBlock } from '@babylonjs/core';
import { FollowBehavior } from '@babylonjs/core';
import { FollowCamera } from '@babylonjs/core';
import { FollowCameraInputsManager } from '@babylonjs/core';
import { FollowCameraKeyboardMoveInput } from '@babylonjs/core';
import { FollowCameraMouseWheelInput } from '@babylonjs/core';
import { FollowCameraPointersInput } from '@babylonjs/core';
import { FragCoordBlock } from '@babylonjs/core';
import { FragDepthBlock } from '@babylonjs/core';
import { FragmentOutputBlock } from '@babylonjs/core';
import { FramingBehavior } from '@babylonjs/core';
import { FreeCamera } from '@babylonjs/core';
import { FreeCameraDeviceOrientationInput } from '@babylonjs/core';
import { FreeCameraGamepadInput } from '@babylonjs/core';
import { FreeCameraInputsManager } from '@babylonjs/core';
import { FreeCameraKeyboardMoveInput } from '@babylonjs/core';
import { FreeCameraMouseInput } from '@babylonjs/core';
import { FreeCameraMouseWheelInput } from '@babylonjs/core';
import { FreeCameraTouchInput } from '@babylonjs/core';
import { FresnelBlock } from '@babylonjs/core';
import { FresnelParameters } from '@babylonjs/core';
import { FrontFacingBlock } from '@babylonjs/core';
import { FxaaPostProcess } from '@babylonjs/core';
import { GIRSM } from '@babylonjs/core';
import { GIRSMManager } from '@babylonjs/core';
import { GIRSMRenderPluginMaterial } from '@babylonjs/core';
import { GPUParticleSystem } from '@babylonjs/core';
import { GPUPicker } from '@babylonjs/core';
import { Gamepad } from '@babylonjs/core';
import { GamepadCamera } from '@babylonjs/core';
import { GamepadManager } from '@babylonjs/core';
import { GamepadSystemSceneComponent } from '@babylonjs/core';
import { GaussianSplattingMaterial } from '@babylonjs/core';
import { GaussianSplattingMesh } from '@babylonjs/core';
import { GenericPad } from '@babylonjs/core';
import { Geometry } from '@babylonjs/core';
import { GeometryArcTan2Block } from '@babylonjs/core';
import { GeometryBufferRenderer } from '@babylonjs/core';
import { GeometryBufferRendererSceneComponent } from '@babylonjs/core';
import { GeometryClampBlock } from '@babylonjs/core';
import { GeometryCollectionBlock } from '@babylonjs/core';
import { GeometryCrossBlock } from '@babylonjs/core';
import { GeometryCurveBlock } from '@babylonjs/core';
import { GeometryDesaturateBlock } from '@babylonjs/core';
import { GeometryDistanceBlock } from '@babylonjs/core';
import { GeometryDotBlock } from '@babylonjs/core';
import { GeometryElbowBlock } from '@babylonjs/core';
import { GeometryInfoBlock } from '@babylonjs/core';
import { GeometryInputBlock } from '@babylonjs/core';
import { GeometryLengthBlock } from '@babylonjs/core';
import { GeometryLerpBlock } from '@babylonjs/core';
import { GeometryModBlock } from '@babylonjs/core';
import { GeometryNLerpBlock } from '@babylonjs/core';
import { GeometryOptimizeBlock } from '@babylonjs/core';
import { GeometryOutputBlock } from '@babylonjs/core';
import { GeometryPosterizeBlock } from '@babylonjs/core';
import { GeometryPowBlock } from '@babylonjs/core';
import { GeometryReplaceColorBlock } from '@babylonjs/core';
import { GeometryRotate2dBlock } from '@babylonjs/core';
import { GeometrySmoothStepBlock } from '@babylonjs/core';
import { GeometryStepBlock } from '@babylonjs/core';
import { GeometryTextureBlock } from '@babylonjs/core';
import { GeometryTextureFetchBlock } from '@babylonjs/core';
import { GeometryTransformBlock } from '@babylonjs/core';
import { GeometryTrigonometryBlock } from '@babylonjs/core';
import { Gizmo } from '@babylonjs/core';
import { GizmoManager } from '@babylonjs/core';
import { GlowLayer } from '@babylonjs/core';
import { GoldbergMesh } from '@babylonjs/core';
import { GradientBlock } from '@babylonjs/core';
import { GradientBlockColorStep } from '@babylonjs/core';
import { GrainPostProcess } from '@babylonjs/core';
import { GreasedLineBaseMesh } from '@babylonjs/core';
import { GreasedLineMesh } from '@babylonjs/core';
import { GreasedLinePluginMaterial } from '@babylonjs/core';
import { GreasedLineRibbonMesh } from '@babylonjs/core';
import { GreasedLineSimpleMaterial } from '@babylonjs/core';
import { GridBlock } from '@babylonjs/core';
import { GroundMesh } from '@babylonjs/core';
import { HDRCubeTexture } from '@babylonjs/core';
import { HDRCubeTextureAssetTask } from '@babylonjs/core';
import { HDRFiltering } from '@babylonjs/core';
import { Halton2DSequence } from '@babylonjs/core';
import { HandConstraintBehavior } from '@babylonjs/core';
import { HardwareScalingOptimization } from '@babylonjs/core';
import { HavokPlugin } from '@babylonjs/core';
import { HeightToNormalBlock } from '@babylonjs/core';
import { HemisphericLight } from '@babylonjs/core';
import { HemisphericParticleEmitter } from '@babylonjs/core';
import { HighlightLayer } from '@babylonjs/core';
import { HighlightsPostProcess } from '@babylonjs/core';
import { Hinge2Joint } from '@babylonjs/core';
import { HingeConstraint } from '@babylonjs/core';
import { HingeJoint } from '@babylonjs/core';
import { HtmlElementTexture } from '@babylonjs/core';
import { IcoSphereBlock } from '@babylonjs/core';
import { ImageAssetTask } from '@babylonjs/core';
import { ImageProcessingBlock } from '@babylonjs/core';
import { ImageProcessingConfiguration } from '@babylonjs/core';
import { ImageProcessingPostProcess } from '@babylonjs/core';
import { ImageSourceBlock } from '@babylonjs/core';
import { IncrementValueAction } from '@babylonjs/core';
import { InputBlock } from '@babylonjs/core';
import { InstancedLinesMesh } from '@babylonjs/core';
import { InstancedMesh } from '@babylonjs/core';
import { InstancesBlock } from '@babylonjs/core';
import { InstantiateBlock } from '@babylonjs/core';
import { InstantiateLinearBlock } from '@babylonjs/core';
import { InstantiateOnFacesBlock } from '@babylonjs/core';
import { InstantiateOnVerticesBlock } from '@babylonjs/core';
import { InstantiateOnVolumeBlock } from '@babylonjs/core';
import { InstantiateRadialBlock } from '@babylonjs/core';
import { InstantiatedEntries } from '@babylonjs/core';
import { IntFloatConverterBlock } from '@babylonjs/core';
import { InternalTexture } from '@babylonjs/core';
import { InterpolateValueAction } from '@babylonjs/core';
import { IntersectionInfo } from '@babylonjs/core';
import { KeyboardInfo } from '@babylonjs/core';
import { KeyboardInfoPre } from '@babylonjs/core';
import { KhronosTextureContainer } from '@babylonjs/core';
import { KhronosTextureContainer2 } from '@babylonjs/core';
import { Layer } from '@babylonjs/core';
import { LayerSceneComponent } from '@babylonjs/core';
import { LengthBlock } from '@babylonjs/core';
import { LensFlare } from '@babylonjs/core';
import { LensFlareSystem } from '@babylonjs/core';
import { LensFlareSystemSceneComponent } from '@babylonjs/core';
import { LensRenderingPipeline } from '@babylonjs/core';
import { LerpBlock } from '@babylonjs/core';
import { Light } from '@babylonjs/core';
import { LightBlock } from '@babylonjs/core';
import { LightGizmo } from '@babylonjs/core';
import { LightInformationBlock } from '@babylonjs/core';
import { LineEdgesRenderer } from '@babylonjs/core';
import { LinesMesh } from '@babylonjs/core';
import { LoadFileError } from '@babylonjs/core';
import { LockConstraint } from '@babylonjs/core';
import { MapRangeBlock } from '@babylonjs/core';
import { MappingBlock } from '@babylonjs/core';
import { Material } from '@babylonjs/core';
import { MaterialAnisotropicDefines } from '@babylonjs/core';
import { MaterialClearCoatDefines } from '@babylonjs/core';
import { MaterialDefines } from '@babylonjs/core';
import { MaterialDetailMapDefines } from '@babylonjs/core';
import { MaterialGreasedLineDefines } from '@babylonjs/core';
import { MaterialIridescenceDefines } from '@babylonjs/core';
import { MaterialPluginBase } from '@babylonjs/core';
import { MaterialPluginManager } from '@babylonjs/core';
import { MaterialSheenDefines } from '@babylonjs/core';
import { MaterialSubSurfaceDefines } from '@babylonjs/core';
import { MathBlock } from '@babylonjs/core';
import { Matrix } from '@babylonjs/core';
import { MatrixBuilderBlock } from '@babylonjs/core';
import { MatrixComposeBlock } from '@babylonjs/core';
import { MatrixDeterminantBlock } from '@babylonjs/core';
import { MatrixTransposeBlock } from '@babylonjs/core';
import { MaxBlock } from '@babylonjs/core';
import { MergeGeometryBlock } from '@babylonjs/core';
import { MergeMeshesOptimization } from '@babylonjs/core';
import { Mesh } from '@babylonjs/core';
import { MeshAssetTask } from '@babylonjs/core';
import { MeshAttributeExistsBlock } from '@babylonjs/core';
import { MeshBlock } from '@babylonjs/core';
import { MeshDebugPluginMaterial } from '@babylonjs/core';
import { MeshExploder } from '@babylonjs/core';
import { MeshLODLevel } from '@babylonjs/core';
import { MeshParticleEmitter } from '@babylonjs/core';
import { MeshUVSpaceRenderer } from '@babylonjs/core';
import { MeshoptCompression } from '@babylonjs/core';
import { MinBlock } from '@babylonjs/core';
import { MinMaxReducer } from '@babylonjs/core';
import { MirrorTexture } from '@babylonjs/core';
import { ModBlock } from '@babylonjs/core';
import { ModelShape } from '@babylonjs/core';
import { MorphTarget } from '@babylonjs/core';
import { MorphTargetManager } from '@babylonjs/core';
import { MorphTargetsBlock } from '@babylonjs/core';
import { MotionBlurPostProcess } from '@babylonjs/core';
import { MotorEnabledJoint } from '@babylonjs/core';
import { MultiMaterial } from '@babylonjs/core';
import { MultiPointerScaleBehavior } from '@babylonjs/core';
import { MultiRenderTarget } from '@babylonjs/core';
import { MultiplyBlock } from '@babylonjs/core';
import { NLerpBlock } from '@babylonjs/core';
import { NativeDataStream } from '@babylonjs/core';
import { NativeEngine } from '@babylonjs/core';
import { NativeXRFrame } from '@babylonjs/core';
import { NativeXRLayerRenderTargetTextureProvider } from '@babylonjs/core';
import { NativeXRLayerWrapper } from '@babylonjs/core';
import { NativeXRRenderTarget } from '@babylonjs/core';
import { NegateBlock } from '@babylonjs/core';
import { Node } from '@babylonjs/core';
import { NodeGeometry } from '@babylonjs/core';
import { NodeGeometryBlock } from '@babylonjs/core';
import { NodeGeometryBuildState } from '@babylonjs/core';
import { NodeGeometryConnectionPoint } from '@babylonjs/core';
import { NodeMaterial } from '@babylonjs/core';
import { NodeMaterialBlock } from '@babylonjs/core';
import { NodeMaterialConnectionPoint } from '@babylonjs/core';
import { NodeMaterialConnectionPointCustomObject } from '@babylonjs/core';
import { NodeMaterialDefines } from '@babylonjs/core';
import { NodeMaterialTeleportInBlock } from '@babylonjs/core';
import { NodeMaterialTeleportOutBlock } from '@babylonjs/core';
import { NoiseBlock } from '@babylonjs/core';
import { NoiseProceduralTexture } from '@babylonjs/core';
import { NormalBlendBlock } from '@babylonjs/core';
import { NormalizeBlock } from '@babylonjs/core';
import { NormalizeVectorBlock } from '@babylonjs/core';
import { NullBlock } from '@babylonjs/core';
import { NullEngine } from '@babylonjs/core';
import { NullEngineOptions } from '@babylonjs/core';
import { Observable } from '@babylonjs/core';
import { Observer } from '@babylonjs/core';
import { OcclusionMaterial } from '@babylonjs/core';
import { Octree } from '@babylonjs/core';
import { OctreeBlock } from '@babylonjs/core';
import { OctreeSceneComponent } from '@babylonjs/core';
import { OimoJSPlugin } from '@babylonjs/core';
import { OneMinusBlock } from '@babylonjs/core';
import { OutlineRenderer } from '@babylonjs/core';
import { PBRAnisotropicConfiguration } from '@babylonjs/core';
import { PBRBaseMaterial } from '@babylonjs/core';
import { PBRBaseSimpleMaterial } from '@babylonjs/core';
import { PBRClearCoatConfiguration } from '@babylonjs/core';
import { PBRIridescenceConfiguration } from '@babylonjs/core';
import { PBRMaterial } from '@babylonjs/core';
import { PBRMaterialDefines } from '@babylonjs/core';
import { PBRMetallicRoughnessBlock } from '@babylonjs/core';
import { PBRMetallicRoughnessMaterial } from '@babylonjs/core';
import { PBRSheenConfiguration } from '@babylonjs/core';
import { PBRSpecularGlossinessMaterial } from '@babylonjs/core';
import { PBRSubSurfaceConfiguration } from '@babylonjs/core';
import { Particle } from '@babylonjs/core';
import { ParticleBlendMultiplyBlock } from '@babylonjs/core';
import { ParticleRampGradientBlock } from '@babylonjs/core';
import { ParticleSystem } from '@babylonjs/core';
import { ParticleSystemSet } from '@babylonjs/core';
import { ParticleTextureBlock } from '@babylonjs/core';
import { PassCubePostProcess } from '@babylonjs/core';
import { PassPostProcess } from '@babylonjs/core';
import { Path2 } from '@babylonjs/core';
import { Path3D } from '@babylonjs/core';
import { PathCursor } from '@babylonjs/core';
import { PerfCounter } from '@babylonjs/core';
import { PerformanceMonitor } from '@babylonjs/core';
import { PerformanceViewerCollector } from '@babylonjs/core';
import { PerturbNormalBlock } from '@babylonjs/core';
import { Physics6DoFConstraint } from '@babylonjs/core';
import { PhysicsAggregate } from '@babylonjs/core';
import { PhysicsBody } from '@babylonjs/core';
import { PhysicsConstraint } from '@babylonjs/core';
import { PhysicsEngine } from '@babylonjs/core';
import { PhysicsEngineV2 } from '@babylonjs/core';
import { PhysicsHelper } from '@babylonjs/core';
import { PhysicsImpostor } from '@babylonjs/core';
import { PhysicsJoint } from '@babylonjs/core';
import { PhysicsRadialExplosionEventOptions } from '@babylonjs/core';
import { PhysicsRaycastResult } from '@babylonjs/core';
import { PhysicsShape } from '@babylonjs/core';
import { PhysicsShapeBox } from '@babylonjs/core';
import { PhysicsShapeCapsule } from '@babylonjs/core';
import { PhysicsShapeContainer } from '@babylonjs/core';
import { PhysicsShapeConvexHull } from '@babylonjs/core';
import { PhysicsShapeCylinder } from '@babylonjs/core';
import { PhysicsShapeMesh } from '@babylonjs/core';
import { PhysicsShapeSphere } from '@babylonjs/core';
import { PhysicsUpdraftEventOptions } from '@babylonjs/core';
import { PhysicsViewer } from '@babylonjs/core';
import { PhysicsVortexEventOptions } from '@babylonjs/core';
import { PickingInfo } from '@babylonjs/core';
import { Plane } from '@babylonjs/core';
import { PlaneBlock } from '@babylonjs/core';
import { PlaneDragGizmo } from '@babylonjs/core';
import { PlaneRotationGizmo } from '@babylonjs/core';
import { PlayAnimationAction } from '@babylonjs/core';
import { PlaySoundAction } from '@babylonjs/core';
import { PointLight } from '@babylonjs/core';
import { PointParticleEmitter } from '@babylonjs/core';
import { PointerDragBehavior } from '@babylonjs/core';
import { PointerInfo } from '@babylonjs/core';
import { PointerInfoBase } from '@babylonjs/core';
import { PointerInfoPre } from '@babylonjs/core';
import { PointsCloudSystem } from '@babylonjs/core';
import { PointsGroup } from '@babylonjs/core';
import { Polar } from '@babylonjs/core';
import { PolygonMeshBuilder } from '@babylonjs/core';
import { PolyhedronData } from '@babylonjs/core';
import { PositionGizmo } from '@babylonjs/core';
import { PositionNormalTextureVertex } from '@babylonjs/core';
import { PositionNormalVertex } from '@babylonjs/core';
import { PostProcess } from '@babylonjs/core';
import { PostProcessManager } from '@babylonjs/core';
import { PostProcessRenderEffect } from '@babylonjs/core';
import { PostProcessRenderPipeline } from '@babylonjs/core';
import { PostProcessRenderPipelineManager } from '@babylonjs/core';
import { PostProcessRenderPipelineManagerSceneComponent } from '@babylonjs/core';
import { PosterizeBlock } from '@babylonjs/core';
import { PowBlock } from '@babylonjs/core';
import { PowerEase } from '@babylonjs/core';
import { PrePassOutputBlock } from '@babylonjs/core';
import { PrePassRenderer } from '@babylonjs/core';
import { PrePassRendererSceneComponent } from '@babylonjs/core';
import { PrePassTextureBlock } from '@babylonjs/core';
import { PredicateCondition } from '@babylonjs/core';
import { PressureObserverWrapper } from '@babylonjs/core';
import { PrismaticConstraint } from '@babylonjs/core';
import { ProceduralTexture } from '@babylonjs/core';
import { ProceduralTextureSceneComponent } from '@babylonjs/core';
import { ProximityCastResult } from '@babylonjs/core';
import { PushMaterial } from '@babylonjs/core';
import { QuadraticErrorSimplification } from '@babylonjs/core';
import { Quaternion } from '@babylonjs/core';
import { RSMCreatePluginMaterial } from '@babylonjs/core';
import { Ragdoll } from '@babylonjs/core';
import { RandomBlock } from '@babylonjs/core';
import { RandomNumberBlock } from '@babylonjs/core';
import { RawCubeTexture } from '@babylonjs/core';
import { RawTexture } from '@babylonjs/core';
import { RawTexture2DArray } from '@babylonjs/core';
import { RawTexture3D } from '@babylonjs/core';
import { Ray } from '@babylonjs/core';
import { RayHelper } from '@babylonjs/core';
import { ReadFileError } from '@babylonjs/core';
import { RecastJSCrowd } from '@babylonjs/core';
import { RecastJSPlugin } from '@babylonjs/core';
import { ReciprocalBlock } from '@babylonjs/core';
import { ReflectBlock } from '@babylonjs/core';
import { ReflectionBlock } from '@babylonjs/core';
import { ReflectionProbe } from '@babylonjs/core';
import { ReflectionTextureBaseBlock } from '@babylonjs/core';
import { ReflectionTextureBlock } from '@babylonjs/core';
import { ReflectiveShadowMap } from '@babylonjs/core';
import { Reflector } from '@babylonjs/core';
import { RefractBlock } from '@babylonjs/core';
import { RefractionBlock } from '@babylonjs/core';
import { RefractionPostProcess } from '@babylonjs/core';
import { RefractionTexture } from '@babylonjs/core';
import { RemapBlock } from '@babylonjs/core';
import { RenderTargetTexture } from '@babylonjs/core';
import { RenderTargetWrapper } from '@babylonjs/core';
import { RenderingGroup } from '@babylonjs/core';
import { RenderingManager } from '@babylonjs/core';
import { ReplaceColorBlock } from '@babylonjs/core';
import { RequestFileError } from '@babylonjs/core';
import { RichType } from '@babylonjs/core';
import { RollingAverage } from '@babylonjs/core';
import { Rotate2dBlock } from '@babylonjs/core';
import { RotationGizmo } from '@babylonjs/core';
import { RotationXBlock } from '@babylonjs/core';
import { RotationYBlock } from '@babylonjs/core';
import { RotationZBlock } from '@babylonjs/core';
import { RuntimeAnimation } from '@babylonjs/core';
import { RuntimeError } from '@babylonjs/core';
import { SSAO2RenderingPipeline } from '@babylonjs/core';
import { SSAORenderingPipeline } from '@babylonjs/core';
import { SSRRenderingPipeline } from '@babylonjs/core';
import { ScaleBlock } from '@babylonjs/core';
import { ScaleGizmo } from '@babylonjs/core';
import { ScalingBlock } from '@babylonjs/core';
import { Scene } from '@babylonjs/core';
import { SceneDepthBlock } from '@babylonjs/core';
import { SceneInstrumentation } from '@babylonjs/core';
import { SceneOptimization } from '@babylonjs/core';
import { SceneOptimizer } from '@babylonjs/core';
import { SceneOptimizerOptions } from '@babylonjs/core';
import { SceneRecorder } from '@babylonjs/core';
import { ScreenSizeBlock } from '@babylonjs/core';
import { ScreenSpaceBlock } from '@babylonjs/core';
import { ScreenSpaceCurvaturePostProcess } from '@babylonjs/core';
import { ScreenSpaceReflectionPostProcess } from '@babylonjs/core';
import { SetColorsBlock } from '@babylonjs/core';
import { SetMaterialIDBlock } from '@babylonjs/core';
import { SetNormalsBlock } from '@babylonjs/core';
import { SetParentAction } from '@babylonjs/core';
import { SetPositionsBlock } from '@babylonjs/core';
import { SetStateAction } from '@babylonjs/core';
import { SetTangentsBlock } from '@babylonjs/core';
import { SetUVsBlock } from '@babylonjs/core';
import { SetValueAction } from '@babylonjs/core';
import { ShaderCodeInliner } from '@babylonjs/core';
import { ShaderMaterial } from '@babylonjs/core';
import { ShadowDepthWrapper } from '@babylonjs/core';
import { ShadowGenerator } from '@babylonjs/core';
import { ShadowGeneratorSceneComponent } from '@babylonjs/core';
import { ShadowLight } from '@babylonjs/core';
import { ShadowMapBlock } from '@babylonjs/core';
import { ShapeCastResult } from '@babylonjs/core';
import { SharpenPostProcess } from '@babylonjs/core';
import { SheenBlock } from '@babylonjs/core';
import { SimplexPerlin3DBlock } from '@babylonjs/core';
import { SimplicationQueueSceneComponent } from '@babylonjs/core';
import { SimplificationQueue } from '@babylonjs/core';
import { SimplificationSettings } from '@babylonjs/core';
import { SixDofDragBehavior } from '@babylonjs/core';
import { Size } from '@babylonjs/core';
import { Skeleton } from '@babylonjs/core';
import { SkeletonViewer } from '@babylonjs/core';
import { SliderConstraint } from '@babylonjs/core';
import { SmartArray } from '@babylonjs/core';
import { SmartArrayNoDuplicate } from '@babylonjs/core';
import { SmoothStepBlock } from '@babylonjs/core';
import { SolidParticle } from '@babylonjs/core';
import { SolidParticleSystem } from '@babylonjs/core';
import { SolidParticleVertex } from '@babylonjs/core';
import { Sound } from '@babylonjs/core';
import { SoundTrack } from '@babylonjs/core';
import { SphereBlock } from '@babylonjs/core';
import { SphereDirectedParticleEmitter } from '@babylonjs/core';
import { SphereParticleEmitter } from '@babylonjs/core';
import { Spherical } from '@babylonjs/core';
import { SphericalHarmonics } from '@babylonjs/core';
import { SphericalPolynomial } from '@babylonjs/core';
import { SpotLight } from '@babylonjs/core';
import { SpringConstraint } from '@babylonjs/core';
import { Sprite } from '@babylonjs/core';
import { SpriteManager } from '@babylonjs/core';
import { SpriteMap } from '@babylonjs/core';
import { SpritePackedManager } from '@babylonjs/core';
import { SpriteSceneComponent } from '@babylonjs/core';
import { Stage } from '@babylonjs/core';
import { StandardMaterial } from '@babylonjs/core';
import { StandardMaterialDefines } from '@babylonjs/core';
import { StandardRenderingPipeline } from '@babylonjs/core';
import { StateCondition } from '@babylonjs/core';
import { StencilState } from '@babylonjs/core';
import { StencilStateComposer } from '@babylonjs/core';
import { StepBlock } from '@babylonjs/core';
import { StereoscopicArcRotateCamera } from '@babylonjs/core';
import { StereoscopicFreeCamera } from '@babylonjs/core';
import { StereoscopicGamepadCamera } from '@babylonjs/core';
import { StereoscopicInterlacePostProcess } from '@babylonjs/core';
import { StereoscopicInterlacePostProcessI } from '@babylonjs/core';
import { StereoscopicScreenUniversalCamera } from '@babylonjs/core';
import { StereoscopicUniversalCamera } from '@babylonjs/core';
import { StickValues } from '@babylonjs/core';
import { StopAnimationAction } from '@babylonjs/core';
import { StopSoundAction } from '@babylonjs/core';
import { StorageBuffer } from '@babylonjs/core';
import { StringDictionary } from '@babylonjs/core';
import { SubEmitter } from '@babylonjs/core';
import { SubMesh } from '@babylonjs/core';
import { SubSurfaceBlock } from '@babylonjs/core';
import { SubSurfaceSceneComponent } from '@babylonjs/core';
import { SubtractBlock } from '@babylonjs/core';
import { SurfaceMagnetismBehavior } from '@babylonjs/core';
import { SwitchBooleanAction } from '@babylonjs/core';
import { TAARenderingPipeline } from '@babylonjs/core';
import { TBNBlock } from '@babylonjs/core';
import { TargetCamera } from '@babylonjs/core';
import { TeleportInBlock } from '@babylonjs/core';
import { TeleportOutBlock } from '@babylonjs/core';
import { TextFileAssetTask } from '@babylonjs/core';
import { Texture } from '@babylonjs/core';
import { TextureAssetTask } from '@babylonjs/core';
import { TextureBlock } from '@babylonjs/core';
import { TextureOptimization } from '@babylonjs/core';
import { TexturePacker } from '@babylonjs/core';
import { TexturePackerFrame } from '@babylonjs/core';
import { TextureSampler } from '@babylonjs/core';
import { ThinEngine } from '@babylonjs/core';
import { ThinRenderTargetTexture } from '@babylonjs/core';
import { ThinTexture } from '@babylonjs/core';
import { TonemapPostProcess } from '@babylonjs/core';
import { TorusBlock } from '@babylonjs/core';
import { TouchCamera } from '@babylonjs/core';
import { TrailMesh } from '@babylonjs/core';
import { Trajectory } from '@babylonjs/core';
import { TrajectoryClassifier } from '@babylonjs/core';
import { TransformBlock } from '@babylonjs/core';
import { TransformNode } from '@babylonjs/core';
import { TranslationBlock } from '@babylonjs/core';
import { TriPlanarBlock } from '@babylonjs/core';
import { TrigonometryBlock } from '@babylonjs/core';
import { TwirlBlock } from '@babylonjs/core';
import { UniformBuffer } from '@babylonjs/core';
import { UniversalCamera } from '@babylonjs/core';
import { UtilityLayerRenderer } from '@babylonjs/core';
import { VRCameraMetrics } from '@babylonjs/core';
import { VRDeviceOrientationArcRotateCamera } from '@babylonjs/core';
import { VRDeviceOrientationFreeCamera } from '@babylonjs/core';
import { VRDeviceOrientationGamepadCamera } from '@babylonjs/core';
import { VRDistortionCorrectionPostProcess } from '@babylonjs/core';
import { VRExperienceHelper } from '@babylonjs/core';
import { VRMultiviewToSingleviewPostProcess } from '@babylonjs/core';
import { ValidatedNativeDataStream } from '@babylonjs/core';
import { ValueCondition } from '@babylonjs/core';
import { Vector2 } from '@babylonjs/core';
import { Vector3 } from '@babylonjs/core';
import { Vector4 } from '@babylonjs/core';
import { VectorConverterBlock } from '@babylonjs/core';
import { VectorMergerBlock } from '@babylonjs/core';
import { VectorSplitterBlock } from '@babylonjs/core';
import { VertexAnimationBaker } from '@babylonjs/core';
import { VertexBuffer } from '@babylonjs/core';
import { VertexData } from '@babylonjs/core';
import { VertexOutputBlock } from '@babylonjs/core';
import { VideoRecorder } from '@babylonjs/core';
import { VideoTexture } from '@babylonjs/core';
import { ViewDirectionBlock } from '@babylonjs/core';
import { Viewport } from '@babylonjs/core';
import { VirtualJoystick } from '@babylonjs/core';
import { VirtualJoysticksCamera } from '@babylonjs/core';
import { VolumetricLightScatteringPostProcess } from '@babylonjs/core';
import { VoronoiNoiseBlock } from '@babylonjs/core';
import { WaveBlock } from '@babylonjs/core';
import { WebGL2ParticleSystem } from '@babylonjs/core';
import { WebGL2ShaderProcessor } from '@babylonjs/core';
import { WebGLDataBuffer } from '@babylonjs/core';
import { WebGLHardwareTexture } from '@babylonjs/core';
import { WebGLPipelineContext } from '@babylonjs/core';
import { WebGPUCacheBindGroups } from '@babylonjs/core';
import { WebGPUCacheRenderPipeline } from '@babylonjs/core';
import { WebGPUCacheSampler } from '@babylonjs/core';
import { WebGPUDataBuffer } from '@babylonjs/core';
import { WebGPUDrawContext } from '@babylonjs/core';
import { WebGPUEngine } from '@babylonjs/core';
import { WebGPURenderTargetWrapper } from '@babylonjs/core';
import { WebRequest } from '@babylonjs/core';
import { WebXRAbstractFeature } from '@babylonjs/core';
import { WebXRAbstractMotionController } from '@babylonjs/core';
import { WebXRAnchorSystem } from '@babylonjs/core';
import { WebXRBackgroundRemover } from '@babylonjs/core';
import { WebXRCamera } from '@babylonjs/core';
import { WebXRControllerComponent } from '@babylonjs/core';
import { WebXRControllerMovement } from '@babylonjs/core';
import { WebXRControllerPhysics } from '@babylonjs/core';
import { WebXRControllerPointerSelection } from '@babylonjs/core';
import { WebXRDefaultExperience } from '@babylonjs/core';
import { WebXRDepthSensing } from '@babylonjs/core';
import { WebXRDomOverlay } from '@babylonjs/core';
import { WebXREnterExitUI } from '@babylonjs/core';
import { WebXREnterExitUIButton } from '@babylonjs/core';
import { WebXRExperienceHelper } from '@babylonjs/core';
import { WebXREyeTracking } from '@babylonjs/core';
import { WebXRFeaturePointSystem } from '@babylonjs/core';
import { WebXRFeaturesManager } from '@babylonjs/core';
import { WebXRGenericHandController } from '@babylonjs/core';
import { WebXRGenericTriggerMotionController } from '@babylonjs/core';
import { WebXRHTCViveMotionController } from '@babylonjs/core';
import { WebXRHand } from '@babylonjs/core';
import { WebXRHandTracking } from '@babylonjs/core';
import { WebXRHitTest } from '@babylonjs/core';
import { WebXRHitTestLegacy } from '@babylonjs/core';
import { WebXRImageTracking } from '@babylonjs/core';
import { WebXRInput } from '@babylonjs/core';
import { WebXRInputSource } from '@babylonjs/core';
import { WebXRLayerRenderTargetTextureProvider } from '@babylonjs/core';
import { WebXRLayers } from '@babylonjs/core';
import { WebXRLightEstimation } from '@babylonjs/core';
import { WebXRManagedOutputCanvas } from '@babylonjs/core';
import { WebXRMeshDetector } from '@babylonjs/core';
import { WebXRMicrosoftMixedRealityController } from '@babylonjs/core';
import { WebXRMotionControllerTeleportation } from '@babylonjs/core';
import { WebXRNearInteraction } from '@babylonjs/core';
import { WebXROculusTouchMotionController } from '@babylonjs/core';
import { WebXRPlaneDetector } from '@babylonjs/core';
import { WebXRProfiledMotionController } from '@babylonjs/core';
import { WebXRRawCameraAccess } from '@babylonjs/core';
import { WebXRSessionManager } from '@babylonjs/core';
import { WebXRSpaceWarp } from '@babylonjs/core';
import { WebXRSpaceWarpRenderTargetTextureProvider } from '@babylonjs/core';
import { WebXRWalkingLocomotion } from '@babylonjs/core';
import { WeightedSound } from '@babylonjs/core';
import { WorkerPool } from '@babylonjs/core';
import { WorleyNoise3DBlock } from '@babylonjs/core';
import { XRSpaceWarpRenderTarget } from '@babylonjs/core';
import { Xbox360Pad } from '@babylonjs/core';
import { _BasisTextureLoader } from '@babylonjs/core';
import { _DDSTextureLoader } from '@babylonjs/core';
import { _ENVTextureLoader } from '@babylonjs/core';
import { _HDRTextureLoader } from '@babylonjs/core';
import { _InstancesBatch } from '@babylonjs/core';
import { _KTXTextureLoader } from '@babylonjs/core';
import { _MeshCollisionData } from '@babylonjs/core';
import { _OcclusionDataStorage } from '@babylonjs/core';
import { _PrimaryIsoTriangle } from '@babylonjs/core';
import { _TGATextureLoader } from '@babylonjs/core';
import { _TimeToken } from '@babylonjs/core';

export interface JSXElements {
    abstractActionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractActionManager>, {}, AbstractActionManager>, any>;
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
    abstractScene: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractScene>, {}, AbstractScene>, any>;
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
    alphaState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AlphaState>, {}, AlphaState>, any>;
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
            },
            ArcFollowCamera
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
    arcRotateCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraGamepadInput>, {}, ArcRotateCameraGamepadInput>, any>;
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
    arcRotateCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraKeyboardMoveInput>, {}, ArcRotateCameraKeyboardMoveInput>, any>;
    arcRotateCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraMouseWheelInput>, {}, ArcRotateCameraMouseWheelInput>, any>;
    arcRotateCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraPointersInput>, {}, ArcRotateCameraPointersInput>, any>;
    arcRotateCameraVRDeviceOrientationInput: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraVRDeviceOrientationInput>, {}, ArcRotateCameraVRDeviceOrientationInput>,
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
    autoRotationBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoRotationBehavior>, {}, AutoRotationBehavior>, any>;
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
    baseCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraMouseWheelInput>, {}, BaseCameraMouseWheelInput>, any>;
    baseCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraPointersInput>, {}, BaseCameraPointersInput>, any>;
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
    baseSixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSixDofDragBehavior>, {}, BaseSixDofDragBehavior>, any>;
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
    bouncingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BouncingBehavior>, {}, BouncingBehavior>, any>;
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
    boxParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxParticleEmitter> & Clonable, {}, BoxParticleEmitter>, any>;
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
    cSG: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CSG> & Clonable, {}, CSG>, any>;
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
    collider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Collider>, {}, Collider>, any>;
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
    colorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCurves> & Clonable, {}, ColorCurves>, any>;
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
    imageBitmapFromSource: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ReturnType<typeof CreateImageBitmapFromSource>> & MeshProps,
            {
                engine: Parameters<typeof CreateImageBitmapFromSource>[0];
                imageSource: Parameters<typeof CreateImageBitmapFromSource>[1];
                options: Parameters<typeof CreateImageBitmapFromSource>[2];
            },
            ReturnType<typeof CreateImageBitmapFromSource>
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
            },
            ReturnType<typeof CreateScreenshotWithResizeAsync>
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
            },
            CubeTexture
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
    customParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomParticleEmitter> & Clonable, {}, CustomParticleEmitter>, any>;
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
    dataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataBuffer>, {}, DataBuffer>, any>;
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
    decalMapConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DecalMapConfiguration>,
            {
                material: ConstructorParameters<typeof DecalMapConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof DecalMapConfiguration>[1];
            },
            DecalMapConfiguration
        >,
        any
    >;
    decalMapDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DecalMapDefines>, {}, DecalMapDefines>, any>;
    defaultCollisionCoordinator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultCollisionCoordinator>, {}, DefaultCollisionCoordinator>, any>;
    defaultKTX2DecoderOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultKTX2DecoderOptions>, {}, DefaultKTX2DecoderOptions>, any>;
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
    deferred: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Deferred>, {}, Deferred>, any>;
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
    detailMapConfiguration: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DetailMapConfiguration>,
            {
                material: ConstructorParameters<typeof DetailMapConfiguration>[0];
                addToPluginList: ConstructorParameters<typeof DetailMapConfiguration>[1];
            },
            DetailMapConfiguration
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
    easingFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EasingFunction>, {}, EasingFunction>, any>;
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
    effectFallbacks: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectFallbacks>, {}, EffectFallbacks>, any>;
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
    fadeInOutBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FadeInOutBehavior>, {}, FadeInOutBehavior>, any>;
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
    flyCameraKeyboardInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraKeyboardInput>, {}, FlyCameraKeyboardInput>, any>;
    flyCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraMouseInput>, {}, FlyCameraMouseInput>, any>;
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
    followBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowBehavior>, {}, FollowBehavior>, any>;
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
    followCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraKeyboardMoveInput>, {}, FollowCameraKeyboardMoveInput>, any>;
    followCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraMouseWheelInput>, {}, FollowCameraMouseWheelInput>, any>;
    followCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraPointersInput>, {}, FollowCameraPointersInput>, any>;
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
    framingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FramingBehavior>, {}, FramingBehavior>, any>;
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
    freeCameraDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraDeviceOrientationInput>, {}, FreeCameraDeviceOrientationInput>, any>;
    freeCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraGamepadInput>, {}, FreeCameraGamepadInput>, any>;
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
    gPUPicker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GPUPicker>, {}, GPUPicker>, any>;
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
    goldbergMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GoldbergMesh> & Clonable, {}, GoldbergMesh>, any>;
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
            },
            HDRCubeTexture
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
    handConstraintBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandConstraintBehavior>, {}, HandConstraintBehavior>, any>;
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
    imageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingConfiguration> & Clonable, {}, ImageProcessingConfiguration>, any>;
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
    instantiatedEntries: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiatedEntries>, {}, InstantiatedEntries>, any>;
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
    materialAnisotropicDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialAnisotropicDefines>, {}, MaterialAnisotropicDefines>, any>;
    materialClearCoatDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialClearCoatDefines>, {}, MaterialClearCoatDefines>, any>;
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
    materialDetailMapDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialDetailMapDefines>, {}, MaterialDetailMapDefines>, any>;
    materialGreasedLineDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialGreasedLineDefines>, {}, MaterialGreasedLineDefines>, any>;
    materialIridescenceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialIridescenceDefines>, {}, MaterialIridescenceDefines>, any>;
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
    materialSheenDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSheenDefines>, {}, MaterialSheenDefines>, any>;
    materialSubSurfaceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSubSurfaceDefines>, {}, MaterialSubSurfaceDefines>, any>;
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
    matrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Matrix> & Clonable, {}, Matrix>, any>;
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
    mergeMeshesOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MergeMeshesOptimization>, {}, MergeMeshesOptimization>, any>;
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
    meshoptCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshoptCompression>, {}, MeshoptCompression>, any>;
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
    multiPointerScaleBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiPointerScaleBehavior>, {}, MultiPointerScaleBehavior>, any>;
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
    nativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeDataStream>, {}, NativeDataStream>, any>;
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
    nodeGeometryBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBuildState>, {}, NodeGeometryBuildState>, any>;
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
    nodeMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialDefines>, {}, NodeMaterialDefines>, any>;
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
    pBRBaseMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRBaseMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRBaseMaterial>[0];
                scene: ConstructorParameters<typeof PBRBaseMaterial>[1];
            },
            PBRBaseMaterial
        >,
        any
    >;
    pBRBaseSimpleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRBaseSimpleMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRBaseSimpleMaterial>[0];
                scene: ConstructorParameters<typeof PBRBaseSimpleMaterial>[1];
            },
            PBRBaseSimpleMaterial
        >,
        any
    >;
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
            },
            PBRMaterial
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
    pBRMetallicRoughnessMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PBRMetallicRoughnessMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[0];
                scene: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[1];
            },
            PBRMetallicRoughnessMaterial
        >,
        any
    >;
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
            },
            PBRSpecularGlossinessMaterial
        >,
        any
    >;
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
    particleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystem> & Clonable, {}, ParticleSystem>, any>;
    particleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystemSet>, {}, ParticleSystemSet>, any>;
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
    physicsEngineV2: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<PhysicsEngineV2>,
            {
                gravity: ConstructorParameters<typeof PhysicsEngineV2>[0];
                _physicsPlugin: ConstructorParameters<typeof PhysicsEngineV2>[1];
            },
            PhysicsEngineV2
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
    physicsRadialExplosionEventOptions: React.DetailedHTMLProps<
        BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRadialExplosionEventOptions>, {}, PhysicsRadialExplosionEventOptions>,
        any
    >;
    physicsRaycastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRaycastResult>, {}, PhysicsRaycastResult>, any>;
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
    physicsUpdraftEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsUpdraftEventOptions>, {}, PhysicsUpdraftEventOptions>, any>;
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
    physicsVortexEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsVortexEventOptions>, {}, PhysicsVortexEventOptions>, any>;
    pickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PickingInfo>, {}, PickingInfo>, any>;
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
    pointParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointParticleEmitter> & Clonable, {}, PointParticleEmitter>, any>;
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
    polar: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Polar> & Clonable,
            {
                radius: ConstructorParameters<typeof Polar>[0];
                theta: ConstructorParameters<typeof Polar>[1];
            },
            Polar
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
    proximityCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProximityCastResult>, {}, ProximityCastResult>, any>;
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
            },
            SSRRenderingPipeline
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
    sceneRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneRecorder>, {}, SceneRecorder>, any>;
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
    shadowLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowLight> & Clonable, {}, ShadowLight>, any>;
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
    shapeCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShapeCastResult>, {}, ShapeCastResult>, any>;
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
    sixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SixDofDragBehavior>, {}, SixDofDragBehavior>, any>;
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
    solidParticleVertex: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SolidParticleVertex>, {}, SolidParticleVertex>, any>;
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
    spherical: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Spherical> & Clonable,
            {
                radius: ConstructorParameters<typeof Spherical>[0];
                theta: ConstructorParameters<typeof Spherical>[1];
                phi: ConstructorParameters<typeof Spherical>[2];
            },
            Spherical
        >,
        any
    >;
    sphericalHarmonics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalHarmonics>, {}, SphericalHarmonics>, any>;
    sphericalPolynomial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalPolynomial>, {}, SphericalPolynomial>, any>;
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
    stringDictionary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StringDictionary>, {}, StringDictionary>, any>;
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
    surfaceMagnetismBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SurfaceMagnetismBehavior>, {}, SurfaceMagnetismBehavior>, any>;
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
    textureSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureSampler>, {}, TextureSampler>, any>;
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
            },
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
            },
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
            },
            VRDeviceOrientationGamepadCamera
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
    validatedNativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValidatedNativeDataStream>, {}, ValidatedNativeDataStream>, any>;
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
    vertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VertexData> & Clonable, {}, VertexData>, any>;
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
    webGL2ShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGL2ShaderProcessor>, {}, WebGL2ShaderProcessor>, any>;
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
    webRequest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebRequest>, {}, WebRequest>, any>;
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
    webXRDefaultExperience: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDefaultExperience>, {}, WebXRDefaultExperience>, any>;
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
    xRSpaceWarpRenderTarget: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<XRSpaceWarpRenderTarget> & Clonable,
            {
                motionVectorTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[0];
                depthStencilTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[1];
                scene: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[2];
                size: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[3];
            },
            XRSpaceWarpRenderTarget
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
    _BasisTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_BasisTextureLoader>, {}, _BasisTextureLoader>, any>;
    _DDSTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_DDSTextureLoader>, {}, _DDSTextureLoader>, any>;
    _ENVTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_ENVTextureLoader>, {}, _ENVTextureLoader>, any>;
    _HDRTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_HDRTextureLoader>, {}, _HDRTextureLoader>, any>;
    _InstancesBatch: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_InstancesBatch>, {}, _InstancesBatch>, any>;
    _KTXTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_KTXTextureLoader>, {}, _KTXTextureLoader>, any>;
    _MeshCollisionData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_MeshCollisionData>, {}, _MeshCollisionData>, any>;
    _OcclusionDataStorage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_OcclusionDataStorage>, {}, _OcclusionDataStorage>, any>;
    _PrimaryIsoTriangle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_PrimaryIsoTriangle>, {}, _PrimaryIsoTriangle>, any>;
    _TGATextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TGATextureLoader>, {}, _TGATextureLoader>, any>;
    _TimeToken: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TimeToken>, {}, _TimeToken>, any>;
}
