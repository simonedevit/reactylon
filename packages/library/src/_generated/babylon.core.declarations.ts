
//@ts-nocheck
import type { BabylonProps, ExcludeReadonlyAndPrivate } from '../types/types';
import type { MeshProps, GuiProps, Clonable, WebXRCameraProps, TextureProps, MaterialProps, CameraProps } from '../types/props';
import type { AbortError } from '@babylonjs/core';
import type { AbstractActionManager } from '@babylonjs/core';
import type { AbstractAssetContainer } from '@babylonjs/core';
import type { AbstractAssetTask } from '@babylonjs/core';
import type { AbstractAudioBus } from '@babylonjs/core';
import type { AbstractAudioNode } from '@babylonjs/core';
import type { AbstractAudioOutNode } from '@babylonjs/core';
import type { AbstractEngine } from '@babylonjs/core';
import type { AbstractMesh } from '@babylonjs/core';
import type { AbstractNamedAudioNode } from '@babylonjs/core';
import type { AbstractSound } from '@babylonjs/core';
import type { AcquireNativeObjectAsync } from '@babylonjs/core';
import type { Action } from '@babylonjs/core';
import type { ActionEvent } from '@babylonjs/core';
import type { ActionManager } from '@babylonjs/core';
import type { AddAnimationExtensions } from '@babylonjs/core';
import type { AddBlock } from '@babylonjs/core';
import type { AddClipPlaneUniforms } from '@babylonjs/core';
import type { AddIndividualParser } from '@babylonjs/core';
import type { AddParser } from '@babylonjs/core';
import type { AddRayExtensions } from '@babylonjs/core';
import type { AdvancedTimer } from '@babylonjs/core';
import type { AggregatorBlock } from '@babylonjs/core';
import type { AlignAngleBlock } from '@babylonjs/core';
import type { AlignBlock } from '@babylonjs/core';
import type { AlphaState } from '@babylonjs/core';
import type { AmbientOcclusionBlock } from '@babylonjs/core';
import type { AmmoJSPlugin } from '@babylonjs/core';
import type { AnaglyphArcRotateCamera } from '@babylonjs/core';
import type { AnaglyphFreeCamera } from '@babylonjs/core';
import type { AnaglyphGamepadCamera } from '@babylonjs/core';
import type { AnaglyphPostProcess } from '@babylonjs/core';
import type { AnaglyphUniversalCamera } from '@babylonjs/core';
import type { Analyser } from '@babylonjs/core';
import type { Angle } from '@babylonjs/core';
import type { Animatable } from '@babylonjs/core';
import type { Animation } from '@babylonjs/core';
import type { AnimationAssetTask } from '@babylonjs/core';
import type { AnimationEvent } from '@babylonjs/core';
import type { AnimationGroup } from '@babylonjs/core';
import type { AnimationGroupMask } from '@babylonjs/core';
import type { AnimationPropertiesOverride } from '@babylonjs/core';
import type { AnimationRange } from '@babylonjs/core';
import type { AnisotropyBlock } from '@babylonjs/core';
import type { AppendSceneAsync } from '@babylonjs/core';
import type { ApplyLut } from '@babylonjs/core';
import type { ApplyPostProcess } from '@babylonjs/core';
import type { Arc2 } from '@babylonjs/core';
import type { ArcFollowCamera } from '@babylonjs/core';
import type { ArcRotateCamera } from '@babylonjs/core';
import type { ArcRotateCameraGamepadInput } from '@babylonjs/core';
import type { ArcRotateCameraInputsManager } from '@babylonjs/core';
import type { ArcRotateCameraKeyboardMoveInput } from '@babylonjs/core';
import type { ArcRotateCameraMouseWheelInput } from '@babylonjs/core';
import type { ArcRotateCameraPointersInput } from '@babylonjs/core';
import type { ArcRotateCameraVRDeviceOrientationInput } from '@babylonjs/core';
import type { ArcTan2Block } from '@babylonjs/core';
import type { AreIndices32Bits } from '@babylonjs/core';
import type { AreaLight } from '@babylonjs/core';
import type { AssetContainer } from '@babylonjs/core';
import type { AssetsManager } from '@babylonjs/core';
import type { AssetsProgressEvent } from '@babylonjs/core';
import type { AsyncLock } from '@babylonjs/core';
import type { AsyncLoop } from '@babylonjs/core';
import type { AttachToBoxBehavior } from '@babylonjs/core';
import type { Attractor } from '@babylonjs/core';
import type { AudioBus } from '@babylonjs/core';
import type { AudioEngine } from '@babylonjs/core';
import type { AudioEngineV2 } from '@babylonjs/core';
import type { AudioSceneComponent } from '@babylonjs/core';
import type { AutoReleaseWorkerPool } from '@babylonjs/core';
import type { AutoRotationBehavior } from '@babylonjs/core';
import type { AxesViewer } from '@babylonjs/core';
import type { AxisDragGizmo } from '@babylonjs/core';
import type { AxisScaleGizmo } from '@babylonjs/core';
import type { BackEase } from '@babylonjs/core';
import type { BackgroundMaterial } from '@babylonjs/core';
import type { BakedVertexAnimationManager } from '@babylonjs/core';
import type { BallAndSocketConstraint } from '@babylonjs/core';
import type { BaseCameraMouseWheelInput } from '@babylonjs/core';
import type { BaseCameraPointersInput } from '@babylonjs/core';
import type { BaseParticleSystem } from '@babylonjs/core';
import type { BaseSixDofDragBehavior } from '@babylonjs/core';
import type { BaseTexture } from '@babylonjs/core';
import type { BasicColorUpdateBlock } from '@babylonjs/core';
import type { BasicPositionUpdateBlock } from '@babylonjs/core';
import type { BasicSpriteUpdateBlock } from '@babylonjs/core';
import type { BezierCurveEase } from '@babylonjs/core';
import type { BiPlanarBlock } from '@babylonjs/core';
import type { BinaryFileAssetTask } from '@babylonjs/core';
import type { BindBonesParameters } from '@babylonjs/core';
import type { BindClipPlane } from '@babylonjs/core';
import type { BindFogParameters } from '@babylonjs/core';
import type { BindLight } from '@babylonjs/core';
import type { BindLightProperties } from '@babylonjs/core';
import type { BindLights } from '@babylonjs/core';
import type { BindLogDepth } from '@babylonjs/core';
import type { BindMorphTargetParameters } from '@babylonjs/core';
import type { BindSceneUniformBuffer } from '@babylonjs/core';
import type { BindTextureMatrix } from '@babylonjs/core';
import type { BitArray } from '@babylonjs/core';
import type { BlackAndWhitePostProcess } from '@babylonjs/core';
import type { BloomEffect } from '@babylonjs/core';
import type { BloomMergePostProcess } from '@babylonjs/core';
import type { BlurPostProcess } from '@babylonjs/core';
import type { Bone } from '@babylonjs/core';
import type { BoneAxesViewer } from '@babylonjs/core';
import type { BoneIKController } from '@babylonjs/core';
import type { BoneLookController } from '@babylonjs/core';
import type { BonesBlock } from '@babylonjs/core';
import type { BooleanGeometryBlock } from '@babylonjs/core';
import type { BounceEase } from '@babylonjs/core';
import type { BouncingBehavior } from '@babylonjs/core';
import type { BoundingBlock } from '@babylonjs/core';
import type { BoundingBox } from '@babylonjs/core';
import type { BoundingBoxGizmo } from '@babylonjs/core';
import type { BoundingBoxRenderer } from '@babylonjs/core';
import type { BoundingInfo } from '@babylonjs/core';
import type { BoundingInfoHelper } from '@babylonjs/core';
import type { BoundingSphere } from '@babylonjs/core';
import type { BoxBlock } from '@babylonjs/core';
import type { BoxParticleEmitter } from '@babylonjs/core';
import type { BoxShapeBlock } from '@babylonjs/core';
import type { Buffer } from '@babylonjs/core';
import type { CSG } from '@babylonjs/core';
import type { CSG2 } from '@babylonjs/core';
import type { Camera } from '@babylonjs/core';
import type { CameraGizmo } from '@babylonjs/core';
import type { CameraInputsManager } from '@babylonjs/core';
import type { CannonJSPlugin } from '@babylonjs/core';
import type { CapsuleBlock } from '@babylonjs/core';
import type { CascadedShadowGenerator } from '@babylonjs/core';
import type { ChromaticAberrationPostProcess } from '@babylonjs/core';
import type { CircleOfConfusionPostProcess } from '@babylonjs/core';
import type { ClampBlock } from '@babylonjs/core';
import type { CleanGeometryBlock } from '@babylonjs/core';
import type { ClearCoatBlock } from '@babylonjs/core';
import type { ClipPlanesBlock } from '@babylonjs/core';
import type { ClipboardInfo } from '@babylonjs/core';
import type { CloudBlock } from '@babylonjs/core';
import type { CloudPoint } from '@babylonjs/core';
import type { ClusteredLightContainer } from '@babylonjs/core';
import type { ClusteredLightingSceneComponent } from '@babylonjs/core';
import type { Collider } from '@babylonjs/core';
import type { Color3 } from '@babylonjs/core';
import type { Color3Gradient } from '@babylonjs/core';
import type { Color4 } from '@babylonjs/core';
import type { ColorConverterBlock } from '@babylonjs/core';
import type { ColorCorrectionPostProcess } from '@babylonjs/core';
import type { ColorCurves } from '@babylonjs/core';
import type { ColorGradient } from '@babylonjs/core';
import type { ColorGradingTexture } from '@babylonjs/core';
import type { ColorMergerBlock } from '@babylonjs/core';
import type { ColorSplitterBlock } from '@babylonjs/core';
import type { CombineAction } from '@babylonjs/core';
import type { CompleteGreasedLineColorTable } from '@babylonjs/core';
import type { CompleteGreasedLineWidthTable } from '@babylonjs/core';
import type { ComputeAlpha } from '@babylonjs/core';
import type { ComputeBeta } from '@babylonjs/core';
import type { ComputeEffect } from '@babylonjs/core';
import type { ComputeNormalsBlock } from '@babylonjs/core';
import type { ComputeShader } from '@babylonjs/core';
import type { ComputeShaderBoundingHelper } from '@babylonjs/core';
import type { ComputeShaderParticleSystem } from '@babylonjs/core';
import type { Condition } from '@babylonjs/core';
import type { ConditionBlock } from '@babylonjs/core';
import type { ConditionalBlock } from '@babylonjs/core';
import type { ConeDirectedParticleEmitter } from '@babylonjs/core';
import type { ConeParticleEmitter } from '@babylonjs/core';
import type { ContainerAssetTask } from '@babylonjs/core';
import type { ConvertToNodeParticleSystemSetAsync } from '@babylonjs/core';
import type { ConvolutionPostProcess } from '@babylonjs/core';
import type { CopyFloatData } from '@babylonjs/core';
import type { CopyMatrixToArray } from '@babylonjs/core';
import type { CopyMatrixToRef } from '@babylonjs/core';
import type { CopyTextureToTexture } from '@babylonjs/core';
import type { CreateAlignedTypedArray } from '@babylonjs/core';
import type { CreateAudioBusAsync } from '@babylonjs/core';
import type { CreateAudioEngineAsync } from '@babylonjs/core';
import type { CreateBox } from '@babylonjs/core';
import type { CreateBoxVertexData } from '@babylonjs/core';
import type { CreateCapsule } from '@babylonjs/core';
import type { CreateCapsuleVertexData } from '@babylonjs/core';
import type { CreateCylinder } from '@babylonjs/core';
import type { CreateCylinderVertexData } from '@babylonjs/core';
import type { CreateDashedLines } from '@babylonjs/core';
import type { CreateDashedLinesVertexData } from '@babylonjs/core';
import type { CreateDecal } from '@babylonjs/core';
import type { CreateDecoderAsync } from '@babylonjs/core';
import type { CreateDisc } from '@babylonjs/core';
import type { CreateDiscVertexData } from '@babylonjs/core';
import type { CreateEnvTextureAsync } from '@babylonjs/core';
import type { CreateGeodesic } from '@babylonjs/core';
import type { CreateGoldberg } from '@babylonjs/core';
import type { CreateGoldbergVertexData } from '@babylonjs/core';
import type { CreateGreasedLine } from '@babylonjs/core';
import type { CreateGreasedLineMaterial } from '@babylonjs/core';
import type { CreateGround } from '@babylonjs/core';
import type { CreateGroundFromHeightMap } from '@babylonjs/core';
import type { CreateGroundFromHeightMapVertexData } from '@babylonjs/core';
import type { CreateGroundVertexData } from '@babylonjs/core';
import type { CreateHemisphere } from '@babylonjs/core';
import type { CreateHotSpotQueryForPickingInfo } from '@babylonjs/core';
import type { CreateIcoSphere } from '@babylonjs/core';
import type { CreateIcoSphereVertexData } from '@babylonjs/core';
import type { CreateImageBitmapFromSource } from '@babylonjs/core';
import type { CreateIrradianceImageDataArrayBufferViews } from '@babylonjs/core';
import type { CreateLathe } from '@babylonjs/core';
import type { CreateLineSystem } from '@babylonjs/core';
import type { CreateLineSystemVertexData } from '@babylonjs/core';
import type { CreateLines } from '@babylonjs/core';
import type { CreateMainAudioBusAsync } from '@babylonjs/core';
import type { CreateMicrophoneSoundSourceAsync } from '@babylonjs/core';
import type { CreateParticleBlock } from '@babylonjs/core';
import type { CreatePickingRay } from '@babylonjs/core';
import type { CreatePickingRayInCameraSpace } from '@babylonjs/core';
import type { CreatePickingRayInCameraSpaceToRef } from '@babylonjs/core';
import type { CreatePickingRayToRef } from '@babylonjs/core';
import type { CreatePlane } from '@babylonjs/core';
import type { CreatePlaneVertexData } from '@babylonjs/core';
import type { CreatePolygon } from '@babylonjs/core';
import type { CreatePolygonVertexData } from '@babylonjs/core';
import type { CreatePolyhedron } from '@babylonjs/core';
import type { CreatePolyhedronVertexData } from '@babylonjs/core';
import type { CreateRadianceImageDataArrayBufferViews } from '@babylonjs/core';
import type { CreateResizedCopy } from '@babylonjs/core';
import type { CreateRibbon } from '@babylonjs/core';
import type { CreateRibbonVertexData } from '@babylonjs/core';
import type { CreateScreenshot } from '@babylonjs/core';
import type { CreateScreenshotAsync } from '@babylonjs/core';
import type { CreateScreenshotUsingRenderTarget } from '@babylonjs/core';
import type { CreateScreenshotUsingRenderTargetAsync } from '@babylonjs/core';
import type { CreateScreenshotWithResizeAsync } from '@babylonjs/core';
import type { CreateSegmentedBoxVertexData } from '@babylonjs/core';
import type { CreateSoundAsync } from '@babylonjs/core';
import type { CreateSoundBufferAsync } from '@babylonjs/core';
import type { CreateSoundSourceAsync } from '@babylonjs/core';
import type { CreateSphere } from '@babylonjs/core';
import type { CreateSphereVertexData } from '@babylonjs/core';
import type { CreateStreamingSoundAsync } from '@babylonjs/core';
import type { CreateText } from '@babylonjs/core';
import type { CreateTextShapePaths } from '@babylonjs/core';
import type { CreateTiledBox } from '@babylonjs/core';
import type { CreateTiledBoxVertexData } from '@babylonjs/core';
import type { CreateTiledGround } from '@babylonjs/core';
import type { CreateTiledGroundVertexData } from '@babylonjs/core';
import type { CreateTiledPlane } from '@babylonjs/core';
import type { CreateTiledPlaneVertexData } from '@babylonjs/core';
import type { CreateTorus } from '@babylonjs/core';
import type { CreateTorusKnot } from '@babylonjs/core';
import type { CreateTorusKnotVertexData } from '@babylonjs/core';
import type { CreateTorusVertexData } from '@babylonjs/core';
import type { CreateTube } from '@babylonjs/core';
import type { CreateUtilityLayerRenderer } from '@babylonjs/core';
import type { CrossBlock } from '@babylonjs/core';
import type { CubeTexture } from '@babylonjs/core';
import type { CubeTextureAssetTask } from '@babylonjs/core';
import type { CurrentScreenBlock } from '@babylonjs/core';
import type { Curve3 } from '@babylonjs/core';
import type { CurveBlock } from '@babylonjs/core';
import type { CustomBlock } from '@babylonjs/core';
import type { CustomParticleEmitter } from '@babylonjs/core';
import type { CustomProceduralTexture } from '@babylonjs/core';
import type { CustomShapeBlock } from '@babylonjs/core';
import type { CylinderBlock } from '@babylonjs/core';
import type { CylinderDirectedParticleEmitter } from '@babylonjs/core';
import type { CylinderParticleEmitter } from '@babylonjs/core';
import type { CylinderShapeBlock } from '@babylonjs/core';
import type { DataBuffer } from '@babylonjs/core';
import type { DataReader } from '@babylonjs/core';
import type { Database } from '@babylonjs/core';
import type { DebugBlock } from '@babylonjs/core';
import type { DebugLayer } from '@babylonjs/core';
import type { DecalMapConfiguration } from '@babylonjs/core';
import type { DecalMapDefines } from '@babylonjs/core';
import type { Decode } from '@babylonjs/core';
import type { DecodeBase64ToBinary } from '@babylonjs/core';
import type { DecodeBase64ToString } from '@babylonjs/core';
import type { DecodeBase64UrlToBinary } from '@babylonjs/core';
import type { DecodeBase64UrlToString } from '@babylonjs/core';
import type { DecodeFloat32 } from '@babylonjs/core';
import type { DecodeRunLength } from '@babylonjs/core';
import type { DefaultCollisionCoordinator } from '@babylonjs/core';
import type { DefaultKTX2DecoderOptions } from '@babylonjs/core';
import type { DefaultLoadingScreen } from '@babylonjs/core';
import type { DefaultRenderingPipeline } from '@babylonjs/core';
import type { Deferred } from '@babylonjs/core';
import type { DepthCullingState } from '@babylonjs/core';
import type { DepthOfFieldBlurPostProcess } from '@babylonjs/core';
import type { DepthOfFieldEffect } from '@babylonjs/core';
import type { DepthOfFieldMergePostProcess } from '@babylonjs/core';
import type { DepthPeelingRenderer } from '@babylonjs/core';
import type { DepthPeelingSceneComponent } from '@babylonjs/core';
import type { DepthReducer } from '@babylonjs/core';
import type { DepthRenderer } from '@babylonjs/core';
import type { DepthRendererSceneComponent } from '@babylonjs/core';
import type { DepthSortedParticle } from '@babylonjs/core';
import type { DepthSourceBlock } from '@babylonjs/core';
import type { DerivativeBlock } from '@babylonjs/core';
import type { DesaturateBlock } from '@babylonjs/core';
import type { DetailMapConfiguration } from '@babylonjs/core';
import type { DeviceOrientationCamera } from '@babylonjs/core';
import type { DeviceSource } from '@babylonjs/core';
import type { DeviceSourceManager } from '@babylonjs/core';
import type { DirectionalLight } from '@babylonjs/core';
import type { DirectionalLightFrustumViewer } from '@babylonjs/core';
import type { DiscBlock } from '@babylonjs/core';
import type { DiscardBlock } from '@babylonjs/core';
import type { DisplayPassPostProcess } from '@babylonjs/core';
import type { DistanceBlock } from '@babylonjs/core';
import type { DistanceConstraint } from '@babylonjs/core';
import type { DistanceJoint } from '@babylonjs/core';
import type { DivideBlock } from '@babylonjs/core';
import type { DoNothingAction } from '@babylonjs/core';
import type { DotBlock } from '@babylonjs/core';
import type { DracoCompression } from '@babylonjs/core';
import type { DracoDecoder } from '@babylonjs/core';
import type { DracoEncoder } from '@babylonjs/core';
import type { DrawWrapper } from '@babylonjs/core';
import type { DualShockPad } from '@babylonjs/core';
import type { DynamicFloat32Array } from '@babylonjs/core';
import type { DynamicTexture } from '@babylonjs/core';
import type { EasingFunction } from '@babylonjs/core';
import type { EdgesRenderer } from '@babylonjs/core';
import type { Effect } from '@babylonjs/core';
import type { EffectFallbacks } from '@babylonjs/core';
import type { EffectLayer } from '@babylonjs/core';
import type { EffectLayerSceneComponent } from '@babylonjs/core';
import type { EffectRenderer } from '@babylonjs/core';
import type { EffectWrapper } from '@babylonjs/core';
import type { ElasticEase } from '@babylonjs/core';
import type { ElbowBlock } from '@babylonjs/core';
import type { EncodeArrayBufferToBase64 } from '@babylonjs/core';
import type { EndsWith } from '@babylonjs/core';
import type { Engine } from '@babylonjs/core';
import type { EngineInstrumentation } from '@babylonjs/core';
import type { EnumerateFloatValues } from '@babylonjs/core';
import type { EnvironmentHelper } from '@babylonjs/core';
import type { EquiRectangularCubeTexture } from '@babylonjs/core';
import type { EquiRectangularCubeTextureAssetTask } from '@babylonjs/core';
import type { EventState } from '@babylonjs/core';
import type { ExecuteCodeAction } from '@babylonjs/core';
import type { ExitFullscreen } from '@babylonjs/core';
import type { ExitPointerlock } from '@babylonjs/core';
import type { ExponentialEase } from '@babylonjs/core';
import type { ExternalTexture } from '@babylonjs/core';
import type { ExtractHighlightsPostProcess } from '@babylonjs/core';
import type { ExtrudePolygon } from '@babylonjs/core';
import type { ExtrudeShape } from '@babylonjs/core';
import type { ExtrudeShapeCustom } from '@babylonjs/core';
import type { FactorGradient } from '@babylonjs/core';
import type { FadeInOutBehavior } from '@babylonjs/core';
import type { FilesInput } from '@babylonjs/core';
import type { FilterPostProcess } from '@babylonjs/core';
import type { FindMainCamera } from '@babylonjs/core';
import type { FindMainObjectRenderer } from '@babylonjs/core';
import type { FixFlippedFaces } from '@babylonjs/core';
import type { FlowGraph } from '@babylonjs/core';
import type { FlowGraphAbsBlock } from '@babylonjs/core';
import type { FlowGraphAcosBlock } from '@babylonjs/core';
import type { FlowGraphAcoshBlock } from '@babylonjs/core';
import type { FlowGraphAddBlock } from '@babylonjs/core';
import type { FlowGraphAngleBetweenBlock } from '@babylonjs/core';
import type { FlowGraphArrayIndexBlock } from '@babylonjs/core';
import type { FlowGraphAsinBlock } from '@babylonjs/core';
import type { FlowGraphAsinhBlock } from '@babylonjs/core';
import type { FlowGraphAtan2Block } from '@babylonjs/core';
import type { FlowGraphAtanBlock } from '@babylonjs/core';
import type { FlowGraphAtanhBlock } from '@babylonjs/core';
import type { FlowGraphAxisAngleFromQuaternionBlock } from '@babylonjs/core';
import type { FlowGraphBezierCurveEasingBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseAndBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseLeftShiftBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseNotBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseOrBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseRightShiftBlock } from '@babylonjs/core';
import type { FlowGraphBitwiseXorBlock } from '@babylonjs/core';
import type { FlowGraphBlock } from '@babylonjs/core';
import type { FlowGraphBooleanToFloat } from '@babylonjs/core';
import type { FlowGraphBooleanToInt } from '@babylonjs/core';
import type { FlowGraphBranchBlock } from '@babylonjs/core';
import type { FlowGraphCallCounterBlock } from '@babylonjs/core';
import type { FlowGraphCancelDelayBlock } from '@babylonjs/core';
import type { FlowGraphCeilBlock } from '@babylonjs/core';
import type { FlowGraphClampBlock } from '@babylonjs/core';
import type { FlowGraphCodeExecutionBlock } from '@babylonjs/core';
import type { FlowGraphCombineMatrix2DBlock } from '@babylonjs/core';
import type { FlowGraphCombineMatrix3DBlock } from '@babylonjs/core';
import type { FlowGraphCombineMatrixBlock } from '@babylonjs/core';
import type { FlowGraphCombineVector2Block } from '@babylonjs/core';
import type { FlowGraphCombineVector3Block } from '@babylonjs/core';
import type { FlowGraphCombineVector4Block } from '@babylonjs/core';
import type { FlowGraphConditionalDataBlock } from '@babylonjs/core';
import type { FlowGraphConjugateBlock } from '@babylonjs/core';
import type { FlowGraphConnection } from '@babylonjs/core';
import type { FlowGraphConsoleLogBlock } from '@babylonjs/core';
import type { FlowGraphConstantBlock } from '@babylonjs/core';
import type { FlowGraphContext } from '@babylonjs/core';
import type { FlowGraphContextBlock } from '@babylonjs/core';
import type { FlowGraphCoordinator } from '@babylonjs/core';
import type { FlowGraphCosBlock } from '@babylonjs/core';
import type { FlowGraphCoshBlock } from '@babylonjs/core';
import type { FlowGraphCrossBlock } from '@babylonjs/core';
import type { FlowGraphCubeRootBlock } from '@babylonjs/core';
import type { FlowGraphDataConnection } from '@babylonjs/core';
import type { FlowGraphDataSwitchBlock } from '@babylonjs/core';
import type { FlowGraphDebounceBlock } from '@babylonjs/core';
import type { FlowGraphDegToRadBlock } from '@babylonjs/core';
import type { FlowGraphDeterminantBlock } from '@babylonjs/core';
import type { FlowGraphDivideBlock } from '@babylonjs/core';
import type { FlowGraphDoNBlock } from '@babylonjs/core';
import type { FlowGraphDotBlock } from '@babylonjs/core';
import type { FlowGraphEBlock } from '@babylonjs/core';
import type { FlowGraphEasingBlock } from '@babylonjs/core';
import type { FlowGraphEqualityBlock } from '@babylonjs/core';
import type { FlowGraphEventBlock } from '@babylonjs/core';
import type { FlowGraphExecutionBlock } from '@babylonjs/core';
import type { FlowGraphExpBlock } from '@babylonjs/core';
import type { FlowGraphExtractMatrix2DBlock } from '@babylonjs/core';
import type { FlowGraphExtractMatrix3DBlock } from '@babylonjs/core';
import type { FlowGraphExtractMatrixBlock } from '@babylonjs/core';
import type { FlowGraphExtractVector2Block } from '@babylonjs/core';
import type { FlowGraphExtractVector3Block } from '@babylonjs/core';
import type { FlowGraphExtractVector4Block } from '@babylonjs/core';
import type { FlowGraphFlipFlopBlock } from '@babylonjs/core';
import type { FlowGraphFloatToBoolean } from '@babylonjs/core';
import type { FlowGraphFloatToInt } from '@babylonjs/core';
import type { FlowGraphFloorBlock } from '@babylonjs/core';
import type { FlowGraphForLoopBlock } from '@babylonjs/core';
import type { FlowGraphFractionBlock } from '@babylonjs/core';
import type { FlowGraphFunctionReferenceBlock } from '@babylonjs/core';
import type { FlowGraphGetAssetBlock } from '@babylonjs/core';
import type { FlowGraphGetPropertyBlock } from '@babylonjs/core';
import type { FlowGraphGetVariableBlock } from '@babylonjs/core';
import type { FlowGraphGreaterThanBlock } from '@babylonjs/core';
import type { FlowGraphGreaterThanOrEqualBlock } from '@babylonjs/core';
import type { FlowGraphIndexOfBlock } from '@babylonjs/core';
import type { FlowGraphInfBlock } from '@babylonjs/core';
import type { FlowGraphIntToBoolean } from '@babylonjs/core';
import type { FlowGraphIntToFloat } from '@babylonjs/core';
import type { FlowGraphInteger } from '@babylonjs/core';
import type { FlowGraphInterpolationBlock } from '@babylonjs/core';
import type { FlowGraphInvertMatrixBlock } from '@babylonjs/core';
import type { FlowGraphIsInfinityBlock } from '@babylonjs/core';
import type { FlowGraphIsNanBlock } from '@babylonjs/core';
import type { FlowGraphJsonPointerParserBlock } from '@babylonjs/core';
import type { FlowGraphLeadingZerosBlock } from '@babylonjs/core';
import type { FlowGraphLengthBlock } from '@babylonjs/core';
import type { FlowGraphLessThanBlock } from '@babylonjs/core';
import type { FlowGraphLessThanOrEqualBlock } from '@babylonjs/core';
import type { FlowGraphLog10Block } from '@babylonjs/core';
import type { FlowGraphLog2Block } from '@babylonjs/core';
import type { FlowGraphLogBlock } from '@babylonjs/core';
import type { FlowGraphLogger } from '@babylonjs/core';
import type { FlowGraphMathInterpolationBlock } from '@babylonjs/core';
import type { FlowGraphMatrix2D } from '@babylonjs/core';
import type { FlowGraphMatrix3D } from '@babylonjs/core';
import type { FlowGraphMatrixComposeBlock } from '@babylonjs/core';
import type { FlowGraphMatrixDecomposeBlock } from '@babylonjs/core';
import type { FlowGraphMatrixMultiplicationBlock } from '@babylonjs/core';
import type { FlowGraphMaxBlock } from '@babylonjs/core';
import type { FlowGraphMeshPickEventBlock } from '@babylonjs/core';
import type { FlowGraphMinBlock } from '@babylonjs/core';
import type { FlowGraphModuloBlock } from '@babylonjs/core';
import type { FlowGraphMultiGateBlock } from '@babylonjs/core';
import type { FlowGraphMultiplyBlock } from '@babylonjs/core';
import type { FlowGraphNaNBlock } from '@babylonjs/core';
import type { FlowGraphNegationBlock } from '@babylonjs/core';
import type { FlowGraphNormalizeBlock } from '@babylonjs/core';
import type { FlowGraphOneBitsCounterBlock } from '@babylonjs/core';
import type { FlowGraphPathConverter } from '@babylonjs/core';
import type { FlowGraphPathConverterComponent } from '@babylonjs/core';
import type { FlowGraphPauseAnimationBlock } from '@babylonjs/core';
import type { FlowGraphPiBlock } from '@babylonjs/core';
import type { FlowGraphPlayAnimationBlock } from '@babylonjs/core';
import type { FlowGraphPointerOutEventBlock } from '@babylonjs/core';
import type { FlowGraphPointerOverEventBlock } from '@babylonjs/core';
import type { FlowGraphPowerBlock } from '@babylonjs/core';
import type { FlowGraphQuaternionFromAxisAngleBlock } from '@babylonjs/core';
import type { FlowGraphQuaternionFromDirectionsBlock } from '@babylonjs/core';
import type { FlowGraphRadToDegBlock } from '@babylonjs/core';
import type { FlowGraphRandomBlock } from '@babylonjs/core';
import type { FlowGraphReceiveCustomEventBlock } from '@babylonjs/core';
import type { FlowGraphRotate2DBlock } from '@babylonjs/core';
import type { FlowGraphRotate3DBlock } from '@babylonjs/core';
import type { FlowGraphRoundBlock } from '@babylonjs/core';
import type { FlowGraphSaturateBlock } from '@babylonjs/core';
import type { FlowGraphSceneReadyEventBlock } from '@babylonjs/core';
import type { FlowGraphSceneTickEventBlock } from '@babylonjs/core';
import type { FlowGraphSendCustomEventBlock } from '@babylonjs/core';
import type { FlowGraphSequenceBlock } from '@babylonjs/core';
import type { FlowGraphSetDelayBlock } from '@babylonjs/core';
import type { FlowGraphSetPropertyBlock } from '@babylonjs/core';
import type { FlowGraphSetVariableBlock } from '@babylonjs/core';
import type { FlowGraphSignBlock } from '@babylonjs/core';
import type { FlowGraphSignalConnection } from '@babylonjs/core';
import type { FlowGraphSinBlock } from '@babylonjs/core';
import type { FlowGraphSinhBlock } from '@babylonjs/core';
import type { FlowGraphSquareRootBlock } from '@babylonjs/core';
import type { FlowGraphStopAnimationBlock } from '@babylonjs/core';
import type { FlowGraphSubtractBlock } from '@babylonjs/core';
import type { FlowGraphSwitchBlock } from '@babylonjs/core';
import type { FlowGraphTanBlock } from '@babylonjs/core';
import type { FlowGraphTanhBlock } from '@babylonjs/core';
import type { FlowGraphThrottleBlock } from '@babylonjs/core';
import type { FlowGraphTrailingZerosBlock } from '@babylonjs/core';
import type { FlowGraphTransformBlock } from '@babylonjs/core';
import type { FlowGraphTransformCoordinatesBlock } from '@babylonjs/core';
import type { FlowGraphTransformCoordinatesSystemBlock } from '@babylonjs/core';
import type { FlowGraphTransposeBlock } from '@babylonjs/core';
import type { FlowGraphTruncBlock } from '@babylonjs/core';
import type { FlowGraphWaitAllBlock } from '@babylonjs/core';
import type { FlowGraphWhileLoopBlock } from '@babylonjs/core';
import type { FlowMap } from '@babylonjs/core';
import type { FluidRenderer } from '@babylonjs/core';
import type { FluidRendererSceneComponent } from '@babylonjs/core';
import type { FluidRenderingObject } from '@babylonjs/core';
import type { FluidRenderingObjectCustomParticles } from '@babylonjs/core';
import type { FluidRenderingObjectParticleSystem } from '@babylonjs/core';
import type { FluidRenderingTargetRenderer } from '@babylonjs/core';
import type { FlyCamera } from '@babylonjs/core';
import type { FlyCameraInputsManager } from '@babylonjs/core';
import type { FlyCameraKeyboardInput } from '@babylonjs/core';
import type { FlyCameraMouseInput } from '@babylonjs/core';
import type { FogBlock } from '@babylonjs/core';
import type { FollowBehavior } from '@babylonjs/core';
import type { FollowCamera } from '@babylonjs/core';
import type { FollowCameraInputsManager } from '@babylonjs/core';
import type { FollowCameraKeyboardMoveInput } from '@babylonjs/core';
import type { FollowCameraMouseWheelInput } from '@babylonjs/core';
import type { FollowCameraPointersInput } from '@babylonjs/core';
import type { FragCoordBlock } from '@babylonjs/core';
import type { FragDepthBlock } from '@babylonjs/core';
import type { FragmentOutputBlock } from '@babylonjs/core';
import type { FrameGraph } from '@babylonjs/core';
import type { FrameGraphAnaglyphTask } from '@babylonjs/core';
import type { FrameGraphBlackAndWhiteTask } from '@babylonjs/core';
import type { FrameGraphBloomTask } from '@babylonjs/core';
import type { FrameGraphBlurTask } from '@babylonjs/core';
import type { FrameGraphCascadedShadowGeneratorTask } from '@babylonjs/core';
import type { FrameGraphChromaticAberrationTask } from '@babylonjs/core';
import type { FrameGraphCircleOfConfusionTask } from '@babylonjs/core';
import type { FrameGraphClearTextureTask } from '@babylonjs/core';
import type { FrameGraphContext } from '@babylonjs/core';
import type { FrameGraphCopyToTextureTask } from '@babylonjs/core';
import type { FrameGraphCullObjectsTask } from '@babylonjs/core';
import type { FrameGraphCullPass } from '@babylonjs/core';
import type { FrameGraphDepthOfFieldTask } from '@babylonjs/core';
import type { FrameGraphExecuteTask } from '@babylonjs/core';
import type { FrameGraphExtractHighlightsTask } from '@babylonjs/core';
import type { FrameGraphFXAATask } from '@babylonjs/core';
import type { FrameGraphGenerateMipMapsTask } from '@babylonjs/core';
import type { FrameGraphGeometryRendererTask } from '@babylonjs/core';
import type { FrameGraphGlowLayerTask } from '@babylonjs/core';
import type { FrameGraphGrainTask } from '@babylonjs/core';
import type { FrameGraphHighlightLayerTask } from '@babylonjs/core';
import type { FrameGraphImageProcessingTask } from '@babylonjs/core';
import type { FrameGraphMotionBlurTask } from '@babylonjs/core';
import type { FrameGraphObjectRendererTask } from '@babylonjs/core';
import type { FrameGraphPass } from '@babylonjs/core';
import type { FrameGraphPassCubeTask } from '@babylonjs/core';
import type { FrameGraphPassTask } from '@babylonjs/core';
import type { FrameGraphPostProcessTask } from '@babylonjs/core';
import type { FrameGraphRenderContext } from '@babylonjs/core';
import type { FrameGraphRenderPass } from '@babylonjs/core';
import type { FrameGraphRenderTarget } from '@babylonjs/core';
import type { FrameGraphSSRRenderingPipelineTask } from '@babylonjs/core';
import type { FrameGraphShadowGeneratorTask } from '@babylonjs/core';
import type { FrameGraphTAAObjectRendererTask } from '@babylonjs/core';
import type { FrameGraphTask } from '@babylonjs/core';
import type { FrameGraphTextureManager } from '@babylonjs/core';
import type { FrameGraphUtilityLayerRendererTask } from '@babylonjs/core';
import type { FramingBehavior } from '@babylonjs/core';
import type { FreeCamera } from '@babylonjs/core';
import type { FreeCameraDeviceOrientationInput } from '@babylonjs/core';
import type { FreeCameraGamepadInput } from '@babylonjs/core';
import type { FreeCameraInputsManager } from '@babylonjs/core';
import type { FreeCameraKeyboardMoveInput } from '@babylonjs/core';
import type { FreeCameraMouseInput } from '@babylonjs/core';
import type { FreeCameraMouseWheelInput } from '@babylonjs/core';
import type { FreeCameraTouchInput } from '@babylonjs/core';
import type { FresnelBlock } from '@babylonjs/core';
import type { FresnelParameters } from '@babylonjs/core';
import type { FromHalfFloat } from '@babylonjs/core';
import type { FrontFacingBlock } from '@babylonjs/core';
import type { FxaaPostProcess } from '@babylonjs/core';
import type { GIRSM } from '@babylonjs/core';
import type { GIRSMManager } from '@babylonjs/core';
import type { GIRSMRenderPluginMaterial } from '@babylonjs/core';
import type { GPUParticleSystem } from '@babylonjs/core';
import type { GPUPicker } from '@babylonjs/core';
import type { Gamepad } from '@babylonjs/core';
import type { GamepadCamera } from '@babylonjs/core';
import type { GamepadManager } from '@babylonjs/core';
import type { GamepadSystemSceneComponent } from '@babylonjs/core';
import type { GaussianBlock } from '@babylonjs/core';
import type { GaussianSplattingBlock } from '@babylonjs/core';
import type { GaussianSplattingMaterial } from '@babylonjs/core';
import type { GaussianSplattingMesh } from '@babylonjs/core';
import type { GenerateBase64StringFromPixelData } from '@babylonjs/core';
import type { GenerateBase64StringFromTexture } from '@babylonjs/core';
import type { GenerateBase64StringFromTextureAsync } from '@babylonjs/core';
import type { GenericPad } from '@babylonjs/core';
import type { Geometry } from '@babylonjs/core';
import type { GeometryArcTan2Block } from '@babylonjs/core';
import type { GeometryBufferRenderer } from '@babylonjs/core';
import type { GeometryBufferRendererSceneComponent } from '@babylonjs/core';
import type { GeometryClampBlock } from '@babylonjs/core';
import type { GeometryCollectionBlock } from '@babylonjs/core';
import type { GeometryCrossBlock } from '@babylonjs/core';
import type { GeometryCurveBlock } from '@babylonjs/core';
import type { GeometryDesaturateBlock } from '@babylonjs/core';
import type { GeometryDistanceBlock } from '@babylonjs/core';
import type { GeometryDotBlock } from '@babylonjs/core';
import type { GeometryEaseBlock } from '@babylonjs/core';
import type { GeometryElbowBlock } from '@babylonjs/core';
import type { GeometryInfoBlock } from '@babylonjs/core';
import type { GeometryInputBlock } from '@babylonjs/core';
import type { GeometryInterceptorBlock } from '@babylonjs/core';
import type { GeometryLengthBlock } from '@babylonjs/core';
import type { GeometryLerpBlock } from '@babylonjs/core';
import type { GeometryModBlock } from '@babylonjs/core';
import type { GeometryNLerpBlock } from '@babylonjs/core';
import type { GeometryOptimizeBlock } from '@babylonjs/core';
import type { GeometryOutputBlock } from '@babylonjs/core';
import type { GeometryPosterizeBlock } from '@babylonjs/core';
import type { GeometryPowBlock } from '@babylonjs/core';
import type { GeometryReplaceColorBlock } from '@babylonjs/core';
import type { GeometryRotate2dBlock } from '@babylonjs/core';
import type { GeometrySmoothStepBlock } from '@babylonjs/core';
import type { GeometryStepBlock } from '@babylonjs/core';
import type { GeometryTextureBlock } from '@babylonjs/core';
import type { GeometryTextureFetchBlock } from '@babylonjs/core';
import type { GeometryTransformBlock } from '@babylonjs/core';
import type { GeometryTrigonometryBlock } from '@babylonjs/core';
import type { GetAngleBetweenQuaternions } from '@babylonjs/core';
import type { GetClass } from '@babylonjs/core';
import type { GetClassName } from '@babylonjs/core';
import type { GetDOMTextContent } from '@babylonjs/core';
import type { GetDataOutConnectionByUniqueId } from '@babylonjs/core';
import type { GetEnvInfo } from '@babylonjs/core';
import type { GetEnvironmentBRDFTexture } from '@babylonjs/core';
import type { GetExrHeader } from '@babylonjs/core';
import type { GetExtensionFromUrl } from '@babylonjs/core';
import type { GetFloatData } from '@babylonjs/core';
import type { GetFlowGraphAssetWithType } from '@babylonjs/core';
import type { GetFogState } from '@babylonjs/core';
import type { GetFontOffset } from '@babylonjs/core';
import type { GetForwardRay } from '@babylonjs/core';
import type { GetForwardRayToRef } from '@babylonjs/core';
import type { GetHotSpotToRef } from '@babylonjs/core';
import type { GetIndividualParser } from '@babylonjs/core';
import type { GetInternalFormatFromBasisFormat } from '@babylonjs/core';
import type { GetMimeType } from '@babylonjs/core';
import type { GetParser } from '@babylonjs/core';
import type { GetPointsCount } from '@babylonjs/core';
import type { GetQuaternionFromDirections } from '@babylonjs/core';
import type { GetQuaternionFromDirectionsToRef } from '@babylonjs/core';
import type { GetRegisteredSceneLoaderPluginMetadata } from '@babylonjs/core';
import type { GetSignalInConnectionByUniqueId } from '@babylonjs/core';
import type { GetTGAHeader } from '@babylonjs/core';
import type { GetTextureDataAsync } from '@babylonjs/core';
import type { GetTransformedPosition } from '@babylonjs/core';
import type { GetTypeByteLength } from '@babylonjs/core';
import type { GetTypedArrayConstructor } from '@babylonjs/core';
import type { GetTypedArrayData } from '@babylonjs/core';
import type { Gizmo } from '@babylonjs/core';
import type { GizmoManager } from '@babylonjs/core';
import type { GlowLayer } from '@babylonjs/core';
import type { GoldbergMesh } from '@babylonjs/core';
import type { GradientBlock } from '@babylonjs/core';
import type { GradientBlockColorStep } from '@babylonjs/core';
import type { GrainPostProcess } from '@babylonjs/core';
import type { GreasedLineBaseMesh } from '@babylonjs/core';
import type { GreasedLineMesh } from '@babylonjs/core';
import type { GreasedLinePluginMaterial } from '@babylonjs/core';
import type { GreasedLineRibbonMesh } from '@babylonjs/core';
import type { GreasedLineSimpleMaterial } from '@babylonjs/core';
import type { GridBlock } from '@babylonjs/core';
import type { GroundMesh } from '@babylonjs/core';
import type { HDRCubeTexture } from '@babylonjs/core';
import type { HDRCubeTextureAssetTask } from '@babylonjs/core';
import type { HDRFiltering } from '@babylonjs/core';
import type { Halton2DSequence } from '@babylonjs/core';
import type { HandConstraintBehavior } from '@babylonjs/core';
import type { HandleFallbacksForShadows } from '@babylonjs/core';
import type { HardwareScalingOptimization } from '@babylonjs/core';
import type { HavokPlugin } from '@babylonjs/core';
import type { HeightToNormalBlock } from '@babylonjs/core';
import type { HemisphericLight } from '@babylonjs/core';
import type { HemisphericParticleEmitter } from '@babylonjs/core';
import type { HighlightLayer } from '@babylonjs/core';
import type { HighlightsPostProcess } from '@babylonjs/core';
import type { Hinge2Joint } from '@babylonjs/core';
import type { HingeConstraint } from '@babylonjs/core';
import type { HingeJoint } from '@babylonjs/core';
import type { HtmlElementTexture } from '@babylonjs/core';
import type { HufUncompress } from '@babylonjs/core';
import type { IblCdfGenerator } from '@babylonjs/core';
import type { IblCdfGeneratorSceneComponent } from '@babylonjs/core';
import type { IblShadowsRenderPipeline } from '@babylonjs/core';
import type { IcoSphereBlock } from '@babylonjs/core';
import type { IdentityMatrixToRef } from '@babylonjs/core';
import type { ImageAssetTask } from '@babylonjs/core';
import type { ImageProcessingBlock } from '@babylonjs/core';
import type { ImageProcessingConfiguration } from '@babylonjs/core';
import type { ImageProcessingPostProcess } from '@babylonjs/core';
import type { ImageSourceBlock } from '@babylonjs/core';
import type { ImportAnimationsAsync } from '@babylonjs/core';
import type { ImportMeshAsync } from '@babylonjs/core';
import type { IncrementValueAction } from '@babylonjs/core';
import type { InitializeCSG2Async } from '@babylonjs/core';
import type { InputBlock } from '@babylonjs/core';
import type { InstancedLinesMesh } from '@babylonjs/core';
import type { InstancedMesh } from '@babylonjs/core';
import type { InstancesBlock } from '@babylonjs/core';
import type { InstantiateBlock } from '@babylonjs/core';
import type { InstantiateLinearBlock } from '@babylonjs/core';
import type { InstantiateOnFacesBlock } from '@babylonjs/core';
import type { InstantiateOnVerticesBlock } from '@babylonjs/core';
import type { InstantiateOnVolumeBlock } from '@babylonjs/core';
import type { InstantiateRadialBlock } from '@babylonjs/core';
import type { InstantiatedEntries } from '@babylonjs/core';
import type { IntFloatConverterBlock } from '@babylonjs/core';
import type { InterleaveScalar } from '@babylonjs/core';
import type { InternalTexture } from '@babylonjs/core';
import type { InterpolateValueAction } from '@babylonjs/core';
import type { IntersectionInfo } from '@babylonjs/core';
import type { InvertMatrixToArray } from '@babylonjs/core';
import type { InvertMatrixToRef } from '@babylonjs/core';
import type { IridescenceBlock } from '@babylonjs/core';
import type { IsBase64DataUrl } from '@babylonjs/core';
import type { IsCSG2Ready } from '@babylonjs/core';
import type { IsDocumentAvailable } from '@babylonjs/core';
import type { IsFileURL } from '@babylonjs/core';
import type { IsNavigatorAvailable } from '@babylonjs/core';
import type { IsWindowObjectExist } from '@babylonjs/core';
import type { IsWrapper } from '@babylonjs/core';
import type { KeyboardInfo } from '@babylonjs/core';
import type { KeyboardInfoPre } from '@babylonjs/core';
import type { KhronosTextureContainer } from '@babylonjs/core';
import type { KhronosTextureContainer2 } from '@babylonjs/core';
import type { LastCreatedAudioEngine } from '@babylonjs/core';
import type { Lattice } from '@babylonjs/core';
import type { LatticeBlock } from '@babylonjs/core';
import type { LatticePluginMaterial } from '@babylonjs/core';
import type { Layer } from '@babylonjs/core';
import type { LayerSceneComponent } from '@babylonjs/core';
import type { Lazy } from '@babylonjs/core';
import type { LengthBlock } from '@babylonjs/core';
import type { LensFlare } from '@babylonjs/core';
import type { LensFlareSystem } from '@babylonjs/core';
import type { LensFlareSystemSceneComponent } from '@babylonjs/core';
import type { LensRenderingPipeline } from '@babylonjs/core';
import type { LerpBlock } from '@babylonjs/core';
import type { Light } from '@babylonjs/core';
import type { LightBlock } from '@babylonjs/core';
import type { LightGizmo } from '@babylonjs/core';
import type { LightInformationBlock } from '@babylonjs/core';
import type { LineEdgesRenderer } from '@babylonjs/core';
import type { LinesMesh } from '@babylonjs/core';
import type { LoadAssetContainerAsync } from '@babylonjs/core';
import type { LoadFile } from '@babylonjs/core';
import type { LoadFileError } from '@babylonjs/core';
import type { LoadIESData } from '@babylonjs/core';
import type { LoadImage } from '@babylonjs/core';
import type { LoadSceneAsync } from '@babylonjs/core';
import type { LoadTextureFromTranscodeResult } from '@babylonjs/core';
import type { LockConstraint } from '@babylonjs/core';
import type { LoopBlock } from '@babylonjs/core';
import type { MainAudioBus } from '@babylonjs/core';
import type { MapRangeBlock } from '@babylonjs/core';
import type { MappingBlock } from '@babylonjs/core';
import type { MarkAsDirty } from '@babylonjs/core';
import type { Material } from '@babylonjs/core';
import type { MaterialAnisotropicDefines } from '@babylonjs/core';
import type { MaterialBRDFDefines } from '@babylonjs/core';
import type { MaterialClearCoatDefines } from '@babylonjs/core';
import type { MaterialDefines } from '@babylonjs/core';
import type { MaterialDetailMapDefines } from '@babylonjs/core';
import type { MaterialGreasedLineDefines } from '@babylonjs/core';
import type { MaterialIridescenceDefines } from '@babylonjs/core';
import type { MaterialPluginBase } from '@babylonjs/core';
import type { MaterialPluginManager } from '@babylonjs/core';
import type { MaterialSheenDefines } from '@babylonjs/core';
import type { MaterialStencilState } from '@babylonjs/core';
import type { MaterialSubSurfaceDefines } from '@babylonjs/core';
import type { MathBlock } from '@babylonjs/core';
import type { Matrix } from '@babylonjs/core';
import type { MatrixBuilderBlock } from '@babylonjs/core';
import type { MatrixComposeBlock } from '@babylonjs/core';
import type { MatrixDeterminantBlock } from '@babylonjs/core';
import type { MatrixSplitterBlock } from '@babylonjs/core';
import type { MatrixTransposeBlock } from '@babylonjs/core';
import type { MaxBlock } from '@babylonjs/core';
import type { MergeGeometryBlock } from '@babylonjs/core';
import type { MergeMeshesOptimization } from '@babylonjs/core';
import type { Mesh } from '@babylonjs/core';
import type { MeshAssetTask } from '@babylonjs/core';
import type { MeshAttributeExistsBlock } from '@babylonjs/core';
import type { MeshBlock } from '@babylonjs/core';
import type { MeshDebugPluginMaterial } from '@babylonjs/core';
import type { MeshExploder } from '@babylonjs/core';
import type { MeshLODLevel } from '@babylonjs/core';
import type { MeshParticleEmitter } from '@babylonjs/core';
import type { MeshShapeBlock } from '@babylonjs/core';
import type { MeshUVSpaceRenderer } from '@babylonjs/core';
import type { MeshoptCompression } from '@babylonjs/core';
import type { MinBlock } from '@babylonjs/core';
import type { MinMaxReducer } from '@babylonjs/core';
import type { MirrorTexture } from '@babylonjs/core';
import type { ModBlock } from '@babylonjs/core';
import type { ModelShape } from '@babylonjs/core';
import type { MorphTarget } from '@babylonjs/core';
import type { MorphTargetManager } from '@babylonjs/core';
import type { MorphTargetsBlock } from '@babylonjs/core';
import type { MotionBlurPostProcess } from '@babylonjs/core';
import type { MotorEnabledJoint } from '@babylonjs/core';
import type { MultiMaterial } from '@babylonjs/core';
import type { MultiPick } from '@babylonjs/core';
import type { MultiPickWithRay } from '@babylonjs/core';
import type { MultiPointerScaleBehavior } from '@babylonjs/core';
import type { MultiRenderTarget } from '@babylonjs/core';
import type { MultiplyBlock } from '@babylonjs/core';
import type { MultiplyMatricesToArray } from '@babylonjs/core';
import type { MultiplyMatricesToRef } from '@babylonjs/core';
import type { NLerpBlock } from '@babylonjs/core';
import type { NativeDataStream } from '@babylonjs/core';
import type { NativeEngine } from '@babylonjs/core';
import type { NativeXRFrame } from '@babylonjs/core';
import type { NativeXRLayerRenderTargetTextureProvider } from '@babylonjs/core';
import type { NativeXRLayerWrapper } from '@babylonjs/core';
import type { NativeXRRenderTarget } from '@babylonjs/core';
import type { NegateBlock } from '@babylonjs/core';
import type { Node } from '@babylonjs/core';
import type { NodeGeometry } from '@babylonjs/core';
import type { NodeGeometryBlock } from '@babylonjs/core';
import type { NodeGeometryBuildState } from '@babylonjs/core';
import type { NodeGeometryConnectionPoint } from '@babylonjs/core';
import type { NodeMaterial } from '@babylonjs/core';
import type { NodeMaterialBlock } from '@babylonjs/core';
import type { NodeMaterialConnectionPoint } from '@babylonjs/core';
import type { NodeMaterialConnectionPointCustomObject } from '@babylonjs/core';
import type { NodeMaterialDebugBlock } from '@babylonjs/core';
import type { NodeMaterialDefines } from '@babylonjs/core';
import type { NodeMaterialTeleportInBlock } from '@babylonjs/core';
import type { NodeMaterialTeleportOutBlock } from '@babylonjs/core';
import type { NodeParticleBlock } from '@babylonjs/core';
import type { NodeParticleBuildState } from '@babylonjs/core';
import type { NodeParticleConnectionPoint } from '@babylonjs/core';
import type { NodeParticleSystemSet } from '@babylonjs/core';
import type { NodeRenderGraph } from '@babylonjs/core';
import type { NodeRenderGraphAnaglyphPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphBlackAndWhitePostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphBlock } from '@babylonjs/core';
import type { NodeRenderGraphBloomPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphBlurPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphBuildState } from '@babylonjs/core';
import type { NodeRenderGraphCascadedShadowGeneratorBlock } from '@babylonjs/core';
import type { NodeRenderGraphChromaticAberrationPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphCircleOfConfusionPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphClearBlock } from '@babylonjs/core';
import type { NodeRenderGraphConnectionPoint } from '@babylonjs/core';
import type { NodeRenderGraphCopyTextureBlock } from '@babylonjs/core';
import type { NodeRenderGraphCullObjectsBlock } from '@babylonjs/core';
import type { NodeRenderGraphDepthOfFieldPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphElbowBlock } from '@babylonjs/core';
import type { NodeRenderGraphExecuteBlock } from '@babylonjs/core';
import type { NodeRenderGraphExtractHighlightsPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphFXAAPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphGenerateMipmapsBlock } from '@babylonjs/core';
import type { NodeRenderGraphGeometryRendererBlock } from '@babylonjs/core';
import type { NodeRenderGraphGlowLayerBlock } from '@babylonjs/core';
import type { NodeRenderGraphGrainPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphHighlightLayerBlock } from '@babylonjs/core';
import type { NodeRenderGraphImageProcessingPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphInputBlock } from '@babylonjs/core';
import type { NodeRenderGraphMotionBlurPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphObjectRendererBlock } from '@babylonjs/core';
import type { NodeRenderGraphOutputBlock } from '@babylonjs/core';
import type { NodeRenderGraphPassCubePostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphPassPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphResourceContainerBlock } from '@babylonjs/core';
import type { NodeRenderGraphSSRPostProcessBlock } from '@babylonjs/core';
import type { NodeRenderGraphShadowGeneratorBlock } from '@babylonjs/core';
import type { NodeRenderGraphTAAObjectRendererBlock } from '@babylonjs/core';
import type { NodeRenderGraphTeleportInBlock } from '@babylonjs/core';
import type { NodeRenderGraphTeleportOutBlock } from '@babylonjs/core';
import type { NodeRenderGraphUtilityLayerRendererBlock } from '@babylonjs/core';
import type { NoiseBlock } from '@babylonjs/core';
import type { NoiseProceduralTexture } from '@babylonjs/core';
import type { NormalBlendBlock } from '@babylonjs/core';
import type { NormalizeBlock } from '@babylonjs/core';
import type { NormalizeVectorBlock } from '@babylonjs/core';
import type { NullBlock } from '@babylonjs/core';
import type { NullEngine } from '@babylonjs/core';
import type { NullEngineOptions } from '@babylonjs/core';
import type { ObjectRenderer } from '@babylonjs/core';
import type { Observable } from '@babylonjs/core';
import type { Observer } from '@babylonjs/core';
import type { OcclusionMaterial } from '@babylonjs/core';
import type { Octree } from '@babylonjs/core';
import type { OctreeBlock } from '@babylonjs/core';
import type { OctreeSceneComponent } from '@babylonjs/core';
import type { OimoJSPlugin } from '@babylonjs/core';
import type { OneMinusBlock } from '@babylonjs/core';
import type { OptimizeAnimations } from '@babylonjs/core';
import type { OptimizeIndices } from '@babylonjs/core';
import type { OutlineRenderer } from '@babylonjs/core';
import type { PBRAnisotropicConfiguration } from '@babylonjs/core';
import type { PBRBRDFConfiguration } from '@babylonjs/core';
import type { PBRBaseMaterial } from '@babylonjs/core';
import type { PBRBaseSimpleMaterial } from '@babylonjs/core';
import type { PBRClearCoatConfiguration } from '@babylonjs/core';
import type { PBRIridescenceConfiguration } from '@babylonjs/core';
import type { PBRMaterial } from '@babylonjs/core';
import type { PBRMaterialDefines } from '@babylonjs/core';
import type { PBRMetallicRoughnessBlock } from '@babylonjs/core';
import type { PBRMetallicRoughnessMaterial } from '@babylonjs/core';
import type { PBRSheenConfiguration } from '@babylonjs/core';
import type { PBRSpecularGlossinessMaterial } from '@babylonjs/core';
import type { PBRSubSurfaceConfiguration } from '@babylonjs/core';
import type { PadNumber } from '@babylonjs/core';
import type { Parse } from '@babylonjs/core';
import type { ParseBlockAsync } from '@babylonjs/core';
import type { ParseCoordinatorAsync } from '@babylonjs/core';
import type { ParseFloat16 } from '@babylonjs/core';
import type { ParseFloat32 } from '@babylonjs/core';
import type { ParseFlowGraph } from '@babylonjs/core';
import type { ParseFlowGraphAsync } from '@babylonjs/core';
import type { ParseFlowGraphBlockWithClassType } from '@babylonjs/core';
import type { ParseFlowGraphContext } from '@babylonjs/core';
import type { ParseGraphConnectionWithClassType } from '@babylonjs/core';
import type { ParseGraphDataConnection } from '@babylonjs/core';
import type { ParseInt32 } from '@babylonjs/core';
import type { ParseInt64 } from '@babylonjs/core';
import type { ParseNullTerminatedString } from '@babylonjs/core';
import type { ParseUint16 } from '@babylonjs/core';
import type { ParseUint32 } from '@babylonjs/core';
import type { ParseUint8 } from '@babylonjs/core';
import type { ParseUint8Array } from '@babylonjs/core';
import type { ParseValue } from '@babylonjs/core';
import type { Particle } from '@babylonjs/core';
import type { ParticleBlendMultiplyBlock } from '@babylonjs/core';
import type { ParticleConditionBlock } from '@babylonjs/core';
import type { ParticleConverterBlock } from '@babylonjs/core';
import type { ParticleDebugBlock } from '@babylonjs/core';
import type { ParticleElbowBlock } from '@babylonjs/core';
import type { ParticleGradientBlock } from '@babylonjs/core';
import type { ParticleGradientValueBlock } from '@babylonjs/core';
import type { ParticleInputBlock } from '@babylonjs/core';
import type { ParticleLerpBlock } from '@babylonjs/core';
import type { ParticleMathBlock } from '@babylonjs/core';
import type { ParticleRampGradientBlock } from '@babylonjs/core';
import type { ParticleRandomBlock } from '@babylonjs/core';
import type { ParticleSystem } from '@babylonjs/core';
import type { ParticleSystemSet } from '@babylonjs/core';
import type { ParticleTeleportInBlock } from '@babylonjs/core';
import type { ParticleTeleportOutBlock } from '@babylonjs/core';
import type { ParticleTextureBlock } from '@babylonjs/core';
import type { ParticleTextureSourceBlock } from '@babylonjs/core';
import type { ParticleTriggerBlock } from '@babylonjs/core';
import type { ParticleTrigonometryBlock } from '@babylonjs/core';
import type { PassCubePostProcess } from '@babylonjs/core';
import type { PassPostProcess } from '@babylonjs/core';
import type { Path2 } from '@babylonjs/core';
import type { Path3D } from '@babylonjs/core';
import type { PathCursor } from '@babylonjs/core';
import type { PerfCounter } from '@babylonjs/core';
import type { PerformanceMonitor } from '@babylonjs/core';
import type { PerformanceViewerCollector } from '@babylonjs/core';
import type { PerturbNormalBlock } from '@babylonjs/core';
import type { Physics6DoFConstraint } from '@babylonjs/core';
import type { PhysicsAggregate } from '@babylonjs/core';
import type { PhysicsBody } from '@babylonjs/core';
import type { PhysicsCharacterController } from '@babylonjs/core';
import type { PhysicsConstraint } from '@babylonjs/core';
import type { PhysicsEngine } from '@babylonjs/core';
import type { PhysicsEngineV2 } from '@babylonjs/core';
import type { PhysicsHelper } from '@babylonjs/core';
import type { PhysicsImpostor } from '@babylonjs/core';
import type { PhysicsJoint } from '@babylonjs/core';
import type { PhysicsRadialExplosionEventOptions } from '@babylonjs/core';
import type { PhysicsRaycastResult } from '@babylonjs/core';
import type { PhysicsShape } from '@babylonjs/core';
import type { PhysicsShapeBox } from '@babylonjs/core';
import type { PhysicsShapeCapsule } from '@babylonjs/core';
import type { PhysicsShapeContainer } from '@babylonjs/core';
import type { PhysicsShapeConvexHull } from '@babylonjs/core';
import type { PhysicsShapeCylinder } from '@babylonjs/core';
import type { PhysicsShapeGroundMesh } from '@babylonjs/core';
import type { PhysicsShapeHeightField } from '@babylonjs/core';
import type { PhysicsShapeMesh } from '@babylonjs/core';
import type { PhysicsShapeSphere } from '@babylonjs/core';
import type { PhysicsUpdraftEventOptions } from '@babylonjs/core';
import type { PhysicsViewer } from '@babylonjs/core';
import type { PhysicsVortexEventOptions } from '@babylonjs/core';
import type { Pick } from '@babylonjs/core';
import type { PickWithBoundingInfo } from '@babylonjs/core';
import type { PickWithRay } from '@babylonjs/core';
import type { PickingInfo } from '@babylonjs/core';
import type { PlaneBlock } from '@babylonjs/core';
import type { PlaneDragGizmo } from '@babylonjs/core';
import type { PlaneRotationGizmo } from '@babylonjs/core';
import type { PlayAnimationAction } from '@babylonjs/core';
import type { PlaySoundAction } from '@babylonjs/core';
import type { PointLight } from '@babylonjs/core';
import type { PointListBlock } from '@babylonjs/core';
import type { PointParticleEmitter } from '@babylonjs/core';
import type { PointShapeBlock } from '@babylonjs/core';
import type { PointerDragBehavior } from '@babylonjs/core';
import type { PointerInfo } from '@babylonjs/core';
import type { PointerInfoBase } from '@babylonjs/core';
import type { PointerInfoPre } from '@babylonjs/core';
import type { PointsCloudSystem } from '@babylonjs/core';
import type { PointsGroup } from '@babylonjs/core';
import type { Polar } from '@babylonjs/core';
import type { PolygonMeshBuilder } from '@babylonjs/core';
import type { PolyhedronData } from '@babylonjs/core';
import type { PositionGizmo } from '@babylonjs/core';
import type { PositionNormalTextureVertex } from '@babylonjs/core';
import type { PositionNormalVertex } from '@babylonjs/core';
import type { PostProcess } from '@babylonjs/core';
import type { PostProcessManager } from '@babylonjs/core';
import type { PostProcessRenderEffect } from '@babylonjs/core';
import type { PostProcessRenderPipeline } from '@babylonjs/core';
import type { PostProcessRenderPipelineManager } from '@babylonjs/core';
import type { PostProcessRenderPipelineManagerSceneComponent } from '@babylonjs/core';
import type { PosterizeBlock } from '@babylonjs/core';
import type { PowBlock } from '@babylonjs/core';
import type { PowerEase } from '@babylonjs/core';
import type { PrePassOutputBlock } from '@babylonjs/core';
import type { PrePassRenderer } from '@babylonjs/core';
import type { PrePassRendererSceneComponent } from '@babylonjs/core';
import type { PrePassTextureBlock } from '@babylonjs/core';
import type { PredicateCondition } from '@babylonjs/core';
import type { Predictor } from '@babylonjs/core';
import type { PrepareAttributesForBakedVertexAnimation } from '@babylonjs/core';
import type { PrepareAttributesForBones } from '@babylonjs/core';
import type { PrepareAttributesForInstances } from '@babylonjs/core';
import type { PrepareAttributesForMorphTargets } from '@babylonjs/core';
import type { PrepareAttributesForMorphTargetsInfluencers } from '@babylonjs/core';
import type { PrepareDefinesAndAttributesForMorphTargets } from '@babylonjs/core';
import type { PrepareDefinesForAttributes } from '@babylonjs/core';
import type { PrepareDefinesForBakedVertexAnimation } from '@babylonjs/core';
import type { PrepareDefinesForBones } from '@babylonjs/core';
import type { PrepareDefinesForCamera } from '@babylonjs/core';
import type { PrepareDefinesForClipPlanes } from '@babylonjs/core';
import type { PrepareDefinesForFrameBoundValues } from '@babylonjs/core';
import type { PrepareDefinesForLight } from '@babylonjs/core';
import type { PrepareDefinesForLights } from '@babylonjs/core';
import type { PrepareDefinesForMergedUV } from '@babylonjs/core';
import type { PrepareDefinesForMisc } from '@babylonjs/core';
import type { PrepareDefinesForMorphTargets } from '@babylonjs/core';
import type { PrepareDefinesForMultiview } from '@babylonjs/core';
import type { PrepareDefinesForOIT } from '@babylonjs/core';
import type { PrepareDefinesForPrePass } from '@babylonjs/core';
import type { PrepareStringDefinesForClipPlanes } from '@babylonjs/core';
import type { PrepareUniformsAndSamplersForLight } from '@babylonjs/core';
import type { PrepareUniformsAndSamplersList } from '@babylonjs/core';
import type { PressureObserverWrapper } from '@babylonjs/core';
import type { PrismaticConstraint } from '@babylonjs/core';
import type { ProceduralTexture } from '@babylonjs/core';
import type { ProceduralTextureSceneComponent } from '@babylonjs/core';
import type { ProximityCastResult } from '@babylonjs/core';
import type { PushAttributesForInstances } from '@babylonjs/core';
import type { PushMaterial } from '@babylonjs/core';
import type { QuadraticErrorSimplification } from '@babylonjs/core';
import type { Quaternion } from '@babylonjs/core';
import type { QueueNewFrame } from '@babylonjs/core';
import type { RSMCreatePluginMaterial } from '@babylonjs/core';
import type { Ragdoll } from '@babylonjs/core';
import type { RandomBlock } from '@babylonjs/core';
import type { RandomGUID } from '@babylonjs/core';
import type { RandomNumberBlock } from '@babylonjs/core';
import type { RawCubeTexture } from '@babylonjs/core';
import type { RawTexture } from '@babylonjs/core';
import type { RawTexture2DArray } from '@babylonjs/core';
import type { RawTexture3D } from '@babylonjs/core';
import type { Ray } from '@babylonjs/core';
import type { RayHelper } from '@babylonjs/core';
import type { ReadExrDataAsync } from '@babylonjs/core';
import type { ReadFile } from '@babylonjs/core';
import type { ReadFileError } from '@babylonjs/core';
import type { RecastJSCrowd } from '@babylonjs/core';
import type { RecastJSPlugin } from '@babylonjs/core';
import type { ReciprocalBlock } from '@babylonjs/core';
import type { RectAreaLight } from '@babylonjs/core';
import type { ReflectBlock } from '@babylonjs/core';
import type { ReflectionBlock } from '@babylonjs/core';
import type { ReflectionProbe } from '@babylonjs/core';
import type { ReflectionTextureBaseBlock } from '@babylonjs/core';
import type { ReflectionTextureBlock } from '@babylonjs/core';
import type { ReflectiveShadowMap } from '@babylonjs/core';
import type { Reflector } from '@babylonjs/core';
import type { RefractBlock } from '@babylonjs/core';
import type { RefractionBlock } from '@babylonjs/core';
import type { RefractionPostProcess } from '@babylonjs/core';
import type { RefractionTexture } from '@babylonjs/core';
import type { RegisterClass } from '@babylonjs/core';
import type { RegisterMaterialPlugin } from '@babylonjs/core';
import type { RegisterNativeTypeAsync } from '@babylonjs/core';
import type { RegisterSceneLoaderPlugin } from '@babylonjs/core';
import type { RegisterTargetForLateAnimationBinding } from '@babylonjs/core';
import type { RemapBlock } from '@babylonjs/core';
import type { RemoveUnreferencedVerticesData } from '@babylonjs/core';
import type { RenderTargetTexture } from '@babylonjs/core';
import type { RenderTargetWrapper } from '@babylonjs/core';
import type { RenderingGroup } from '@babylonjs/core';
import type { RenderingManager } from '@babylonjs/core';
import type { ReplaceColorBlock } from '@babylonjs/core';
import type { RequestFile } from '@babylonjs/core';
import type { RequestFileError } from '@babylonjs/core';
import type { RequestFullscreen } from '@babylonjs/core';
import type { RequestPointerlock } from '@babylonjs/core';
import type { ResizeImageBitmap } from '@babylonjs/core';
import type { ReverseLutFromBitmap } from '@babylonjs/core';
import type { RichType } from '@babylonjs/core';
import type { RollingAverage } from '@babylonjs/core';
import type { Rotate2dBlock } from '@babylonjs/core';
import type { RotationGizmo } from '@babylonjs/core';
import type { RotationXBlock } from '@babylonjs/core';
import type { RotationYBlock } from '@babylonjs/core';
import type { RotationZBlock } from '@babylonjs/core';
import type { RuntimeAnimation } from '@babylonjs/core';
import type { RuntimeError } from '@babylonjs/core';
import type { SSAO2RenderingPipeline } from '@babylonjs/core';
import type { SSAORenderingPipeline } from '@babylonjs/core';
import type { SSRRenderingPipeline } from '@babylonjs/core';
import type { ScaleBlock } from '@babylonjs/core';
import type { ScaleGizmo } from '@babylonjs/core';
import type { ScalingBlock } from '@babylonjs/core';
import type { ScalingMatrixToRef } from '@babylonjs/core';
import type { ScanData } from '@babylonjs/core';
import type { Scene } from '@babylonjs/core';
import type { SceneDepthBlock } from '@babylonjs/core';
import type { SceneInstrumentation } from '@babylonjs/core';
import type { SceneOptimization } from '@babylonjs/core';
import type { SceneOptimizer } from '@babylonjs/core';
import type { SceneOptimizerOptions } from '@babylonjs/core';
import type { SceneRecorder } from '@babylonjs/core';
import type { ScreenSizeBlock } from '@babylonjs/core';
import type { ScreenSpaceBlock } from '@babylonjs/core';
import type { ScreenSpaceCurvaturePostProcess } from '@babylonjs/core';
import type { ScreenSpaceReflectionPostProcess } from '@babylonjs/core';
import type { SetBasisTranscoderWorker } from '@babylonjs/core';
import type { SetColorsBlock } from '@babylonjs/core';
import type { SetCorsBehavior } from '@babylonjs/core';
import type { SetMaterialIDBlock } from '@babylonjs/core';
import type { SetNormalsBlock } from '@babylonjs/core';
import type { SetParentAction } from '@babylonjs/core';
import type { SetPositionsBlock } from '@babylonjs/core';
import type { SetStateAction } from '@babylonjs/core';
import type { SetTangentsBlock } from '@babylonjs/core';
import type { SetToDefaultGaussianSplatting } from '@babylonjs/core';
import type { SetToDefaultSFE } from '@babylonjs/core';
import type { SetUVsBlock } from '@babylonjs/core';
import type { SetValueAction } from '@babylonjs/core';
import type { SetupSpriteSheetBlock } from '@babylonjs/core';
import type { ShaderCodeInliner } from '@babylonjs/core';
import type { ShaderMaterial } from '@babylonjs/core';
import type { ShadowDepthWrapper } from '@babylonjs/core';
import type { ShadowGenerator } from '@babylonjs/core';
import type { ShadowGeneratorSceneComponent } from '@babylonjs/core';
import type { ShadowLight } from '@babylonjs/core';
import type { ShadowMapBlock } from '@babylonjs/core';
import type { ShapeCastResult } from '@babylonjs/core';
import type { SharpenPostProcess } from '@babylonjs/core';
import type { SheenBlock } from '@babylonjs/core';
import type { SimplexPerlin3DBlock } from '@babylonjs/core';
import type { SimplicationQueueSceneComponent } from '@babylonjs/core';
import type { SimplificationQueue } from '@babylonjs/core';
import type { SimplificationSettings } from '@babylonjs/core';
import type { SixDofDragBehavior } from '@babylonjs/core';
import type { Size } from '@babylonjs/core';
import type { Skeleton } from '@babylonjs/core';
import type { SkeletonViewer } from '@babylonjs/core';
import type { SliderConstraint } from '@babylonjs/core';
import type { SmartArray } from '@babylonjs/core';
import type { SmartArrayNoDuplicate } from '@babylonjs/core';
import type { SmartFilterFragmentOutputBlock } from '@babylonjs/core';
import type { SmartFilterTextureBlock } from '@babylonjs/core';
import type { SmoothStepBlock } from '@babylonjs/core';
import type { SnapshotRenderingHelper } from '@babylonjs/core';
import type { SolidParticle } from '@babylonjs/core';
import type { SolidParticleSystem } from '@babylonjs/core';
import type { SolidParticleVertex } from '@babylonjs/core';
import type { Sound } from '@babylonjs/core';
import type { SoundTrack } from '@babylonjs/core';
import type { SpecularPowerToRoughness } from '@babylonjs/core';
import type { SphereBlock } from '@babylonjs/core';
import type { SphereDirectedParticleEmitter } from '@babylonjs/core';
import type { SphereParticleEmitter } from '@babylonjs/core';
import type { SphereShapeBlock } from '@babylonjs/core';
import type { Spherical } from '@babylonjs/core';
import type { SphericalHarmonics } from '@babylonjs/core';
import type { SphericalPolynomial } from '@babylonjs/core';
import type { SplatReaderBlock } from '@babylonjs/core';
import type { SpotLight } from '@babylonjs/core';
import type { SpringConstraint } from '@babylonjs/core';
import type { Sprite } from '@babylonjs/core';
import type { SpriteManager } from '@babylonjs/core';
import type { SpriteMap } from '@babylonjs/core';
import type { SpritePackedManager } from '@babylonjs/core';
import type { SpriteSceneComponent } from '@babylonjs/core';
import type { Stage } from '@babylonjs/core';
import type { StandardMaterial } from '@babylonjs/core';
import type { StandardMaterialDefines } from '@babylonjs/core';
import type { StandardRenderingPipeline } from '@babylonjs/core';
import type { StartsWith } from '@babylonjs/core';
import type { StateCondition } from '@babylonjs/core';
import type { StaticSound } from '@babylonjs/core';
import type { StaticSoundBuffer } from '@babylonjs/core';
import type { StencilState } from '@babylonjs/core';
import type { StencilStateComposer } from '@babylonjs/core';
import type { StepBlock } from '@babylonjs/core';
import type { StereoscopicArcRotateCamera } from '@babylonjs/core';
import type { StereoscopicFreeCamera } from '@babylonjs/core';
import type { StereoscopicGamepadCamera } from '@babylonjs/core';
import type { StereoscopicInterlacePostProcess } from '@babylonjs/core';
import type { StereoscopicInterlacePostProcessI } from '@babylonjs/core';
import type { StereoscopicScreenUniversalCamera } from '@babylonjs/core';
import type { StereoscopicUniversalCamera } from '@babylonjs/core';
import type { StickValues } from '@babylonjs/core';
import type { StopAnimationAction } from '@babylonjs/core';
import type { StopSoundAction } from '@babylonjs/core';
import type { StorageBuffer } from '@babylonjs/core';
import type { StorageReadBlock } from '@babylonjs/core';
import type { StorageWriteBlock } from '@babylonjs/core';
import type { StreamingSound } from '@babylonjs/core';
import type { StringDictionary } from '@babylonjs/core';
import type { SubEmitter } from '@babylonjs/core';
import type { SubMesh } from '@babylonjs/core';
import type { SubSurfaceBlock } from '@babylonjs/core';
import type { SubSurfaceSceneComponent } from '@babylonjs/core';
import type { Subdivide } from '@babylonjs/core';
import type { SubdivideBlock } from '@babylonjs/core';
import type { SubtractBlock } from '@babylonjs/core';
import type { SurfaceMagnetismBehavior } from '@babylonjs/core';
import type { SwitchBooleanAction } from '@babylonjs/core';
import type { SystemBlock } from '@babylonjs/core';
import type { TAARenderingPipeline } from '@babylonjs/core';
import type { TBNBlock } from '@babylonjs/core';
import type { TargetCamera } from '@babylonjs/core';
import type { TargetedAnimation } from '@babylonjs/core';
import type { TeleportInBlock } from '@babylonjs/core';
import type { TeleportOutBlock } from '@babylonjs/core';
import type { TestBase64DataUrl } from '@babylonjs/core';
import type { TextFileAssetTask } from '@babylonjs/core';
import type { Texture } from '@babylonjs/core';
import type { TextureAssetTask } from '@babylonjs/core';
import type { TextureBlock } from '@babylonjs/core';
import type { TextureOptimization } from '@babylonjs/core';
import type { TexturePacker } from '@babylonjs/core';
import type { TexturePackerFrame } from '@babylonjs/core';
import type { TextureSampler } from '@babylonjs/core';
import type { ThinAnaglyphPostProcess } from '@babylonjs/core';
import type { ThinBlackAndWhitePostProcess } from '@babylonjs/core';
import type { ThinBloomEffect } from '@babylonjs/core';
import type { ThinBlurPostProcess } from '@babylonjs/core';
import type { ThinChromaticAberrationPostProcess } from '@babylonjs/core';
import type { ThinCircleOfConfusionPostProcess } from '@babylonjs/core';
import type { ThinDepthOfFieldEffect } from '@babylonjs/core';
import type { ThinEffectLayer } from '@babylonjs/core';
import type { ThinEngine } from '@babylonjs/core';
import type { ThinExtractHighlightsPostProcess } from '@babylonjs/core';
import type { ThinFXAAPostProcess } from '@babylonjs/core';
import type { ThinGlowBlurPostProcess } from '@babylonjs/core';
import type { ThinGlowLayer } from '@babylonjs/core';
import type { ThinGrainPostProcess } from '@babylonjs/core';
import type { ThinHighlightLayer } from '@babylonjs/core';
import type { ThinImageProcessingPostProcess } from '@babylonjs/core';
import type { ThinMatrix } from '@babylonjs/core';
import type { ThinMotionBlurPostProcess } from '@babylonjs/core';
import type { ThinPassCubePostProcess } from '@babylonjs/core';
import type { ThinPassPostProcess } from '@babylonjs/core';
import type { ThinRenderTargetTexture } from '@babylonjs/core';
import type { ThinTexture } from '@babylonjs/core';
import type { ToHalfFloat } from '@babylonjs/core';
import type { TonemapPostProcess } from '@babylonjs/core';
import type { TorusBlock } from '@babylonjs/core';
import type { TouchCamera } from '@babylonjs/core';
import type { TrailMesh } from '@babylonjs/core';
import type { Trajectory } from '@babylonjs/core';
import type { TrajectoryClassifier } from '@babylonjs/core';
import type { TranscodeAsync } from '@babylonjs/core';
import type { TransformBlock } from '@babylonjs/core';
import type { TransformFeedbackBoundingHelper } from '@babylonjs/core';
import type { TransformNode } from '@babylonjs/core';
import type { TranslationBlock } from '@babylonjs/core';
import type { TranslationMatrixToRef } from '@babylonjs/core';
import type { TriPlanarBlock } from '@babylonjs/core';
import type { TrigonometryBlock } from '@babylonjs/core';
import type { TwirlBlock } from '@babylonjs/core';
import type { UncompressPIZ } from '@babylonjs/core';
import type { UncompressPXR } from '@babylonjs/core';
import type { UncompressRAW } from '@babylonjs/core';
import type { UncompressRLE } from '@babylonjs/core';
import type { UncompressZIP } from '@babylonjs/core';
import type { UniformBuffer } from '@babylonjs/core';
import type { UniversalCamera } from '@babylonjs/core';
import type { UnregisterAllMaterialPlugins } from '@babylonjs/core';
import type { UnregisterMaterialPlugin } from '@babylonjs/core';
import type { UpdateAgeBlock } from '@babylonjs/core';
import type { UpdateAngleBlock } from '@babylonjs/core';
import type { UpdateAttractorBlock } from '@babylonjs/core';
import type { UpdateColorBlock } from '@babylonjs/core';
import type { UpdateDirectionBlock } from '@babylonjs/core';
import type { UpdateFlowMapBlock } from '@babylonjs/core';
import type { UpdatePositionBlock } from '@babylonjs/core';
import type { UpdateScaleBlock } from '@babylonjs/core';
import type { UpdateSpriteCellIndexBlock } from '@babylonjs/core';
import type { UploadContent } from '@babylonjs/core';
import type { UploadEnvLevelsAsync } from '@babylonjs/core';
import type { UploadEnvSpherical } from '@babylonjs/core';
import type { UploadIrradianceLevelsAsync } from '@babylonjs/core';
import type { UploadRadianceLevelsAsync } from '@babylonjs/core';
import type { VRCameraMetrics } from '@babylonjs/core';
import type { VRDeviceOrientationArcRotateCamera } from '@babylonjs/core';
import type { VRDeviceOrientationFreeCamera } from '@babylonjs/core';
import type { VRDeviceOrientationGamepadCamera } from '@babylonjs/core';
import type { VRDistortionCorrectionPostProcess } from '@babylonjs/core';
import type { VRExperienceHelper } from '@babylonjs/core';
import type { VRMultiviewToSingleviewPostProcess } from '@babylonjs/core';
import type { ValidatedNativeDataStream } from '@babylonjs/core';
import type { ValueCondition } from '@babylonjs/core';
import type { Vector2 } from '@babylonjs/core';
import type { Vector2ToFixed } from '@babylonjs/core';
import type { Vector3 } from '@babylonjs/core';
import type { Vector3ToFixed } from '@babylonjs/core';
import type { Vector4 } from '@babylonjs/core';
import type { Vector4ToFixed } from '@babylonjs/core';
import type { VectorConverterBlock } from '@babylonjs/core';
import type { VectorMergerBlock } from '@babylonjs/core';
import type { VectorSplitterBlock } from '@babylonjs/core';
import type { VertexAnimationBaker } from '@babylonjs/core';
import type { VertexBuffer } from '@babylonjs/core';
import type { VertexData } from '@babylonjs/core';
import type { VertexOutputBlock } from '@babylonjs/core';
import type { VideoRecorder } from '@babylonjs/core';
import type { VideoTexture } from '@babylonjs/core';
import type { ViewDirectionBlock } from '@babylonjs/core';
import type { Viewport } from '@babylonjs/core';
import type { VirtualJoystick } from '@babylonjs/core';
import type { VirtualJoysticksCamera } from '@babylonjs/core';
import type { VolumetricLightScatteringPostProcess } from '@babylonjs/core';
import type { VoronoiNoiseBlock } from '@babylonjs/core';
import type { Wav2Decode } from '@babylonjs/core';
import type { WaveBlock } from '@babylonjs/core';
import type { WebGL2ParticleSystem } from '@babylonjs/core';
import type { WebGL2ShaderProcessor } from '@babylonjs/core';
import type { WebGLDataBuffer } from '@babylonjs/core';
import type { WebGLHardwareTexture } from '@babylonjs/core';
import type { WebGLPipelineContext } from '@babylonjs/core';
import type { WebGPUCacheBindGroups } from '@babylonjs/core';
import type { WebGPUCacheRenderPipeline } from '@babylonjs/core';
import type { WebGPUCacheSampler } from '@babylonjs/core';
import type { WebGPUDataBuffer } from '@babylonjs/core';
import type { WebGPUDrawContext } from '@babylonjs/core';
import type { WebGPUEngine } from '@babylonjs/core';
import type { WebGPUPipelineContext } from '@babylonjs/core';
import type { WebGPURenderTargetWrapper } from '@babylonjs/core';
import type { WebGPUShaderProcessor } from '@babylonjs/core';
import type { WebRequest } from '@babylonjs/core';
import type { WebXRAbstractFeature } from '@babylonjs/core';
import type { WebXRAbstractMotionController } from '@babylonjs/core';
import type { WebXRAnchorSystem } from '@babylonjs/core';
import type { WebXRBackgroundRemover } from '@babylonjs/core';
import type { WebXRCamera } from '@babylonjs/core';
import type { WebXRControllerComponent } from '@babylonjs/core';
import type { WebXRControllerMovement } from '@babylonjs/core';
import type { WebXRControllerPhysics } from '@babylonjs/core';
import type { WebXRControllerPointerSelection } from '@babylonjs/core';
import type { WebXRDefaultExperience } from '@babylonjs/core';
import type { WebXRDepthSensing } from '@babylonjs/core';
import type { WebXRDomOverlay } from '@babylonjs/core';
import type { WebXREnterExitUI } from '@babylonjs/core';
import type { WebXREnterExitUIButton } from '@babylonjs/core';
import type { WebXRExperienceHelper } from '@babylonjs/core';
import type { WebXREyeTracking } from '@babylonjs/core';
import type { WebXRFeaturePointSystem } from '@babylonjs/core';
import type { WebXRFeaturesManager } from '@babylonjs/core';
import type { WebXRGenericHandController } from '@babylonjs/core';
import type { WebXRGenericTriggerMotionController } from '@babylonjs/core';
import type { WebXRHTCViveMotionController } from '@babylonjs/core';
import type { WebXRHand } from '@babylonjs/core';
import type { WebXRHandTracking } from '@babylonjs/core';
import type { WebXRHitTest } from '@babylonjs/core';
import type { WebXRHitTestLegacy } from '@babylonjs/core';
import type { WebXRImageTracking } from '@babylonjs/core';
import type { WebXRInput } from '@babylonjs/core';
import type { WebXRInputSource } from '@babylonjs/core';
import type { WebXRLayerRenderTargetTextureProvider } from '@babylonjs/core';
import type { WebXRLayers } from '@babylonjs/core';
import type { WebXRLightEstimation } from '@babylonjs/core';
import type { WebXRManagedOutputCanvas } from '@babylonjs/core';
import type { WebXRMeshDetector } from '@babylonjs/core';
import type { WebXRMicrosoftMixedRealityController } from '@babylonjs/core';
import type { WebXRMotionControllerTeleportation } from '@babylonjs/core';
import type { WebXRNearInteraction } from '@babylonjs/core';
import type { WebXROculusTouchMotionController } from '@babylonjs/core';
import type { WebXRPlaneDetector } from '@babylonjs/core';
import type { WebXRProfiledMotionController } from '@babylonjs/core';
import type { WebXRRawCameraAccess } from '@babylonjs/core';
import type { WebXRSessionManager } from '@babylonjs/core';
import type { WebXRSpaceWarp } from '@babylonjs/core';
import type { WebXRSpaceWarpRenderTargetTextureProvider } from '@babylonjs/core';
import type { WebXRWalkingLocomotion } from '@babylonjs/core';
import type { WeightedSound } from '@babylonjs/core';
import type { WorkerPool } from '@babylonjs/core';
import type { WorleyNoise3DBlock } from '@babylonjs/core';
import type { XRSpaceWarpRenderTarget } from '@babylonjs/core';
import type { Xbox360Pad } from '@babylonjs/core';
import type { _BasisTextureLoader } from '@babylonjs/core';
import type { _CommonDispose } from '@babylonjs/core';
import type { _CommonInit } from '@babylonjs/core';
import type { _DDSTextureLoader } from '@babylonjs/core';
import type { _ENVTextureLoader } from '@babylonjs/core';
import type { _ExrTextureLoader } from '@babylonjs/core';
import type { _GetAudioEngine } from '@babylonjs/core';
import type { _GetCompatibleTextureLoader } from '@babylonjs/core';
import type { _HDRTextureLoader } from '@babylonjs/core';
import type { _HasAudioAnalyzerOptions } from '@babylonjs/core';
import type { _HasSpatialAudioListenerOptions } from '@babylonjs/core';
import type { _HasSpatialAudioOptions } from '@babylonjs/core';
import type { _HasStereoAudioOptions } from '@babylonjs/core';
import type { _IESTextureLoader } from '@babylonjs/core';
import type { _InstancesBatch } from '@babylonjs/core';
import type { _KTXTextureLoader } from '@babylonjs/core';
import type { _MeshCollisionData } from '@babylonjs/core';
import type { _OcclusionDataStorage } from '@babylonjs/core';
import type { _PrimaryIsoTriangle } from '@babylonjs/core';
import type { _SetStereoscopicAnaglyphRigMode } from '@babylonjs/core';
import type { _SetStereoscopicRigMode } from '@babylonjs/core';
import type { _SetVrRigMode } from '@babylonjs/core';
import type { _TGATextureLoader } from '@babylonjs/core';
import type { _TimeToken } from '@babylonjs/core';
import type { _UpdateRGBDAsync } from '@babylonjs/core';
import type { _WebAudioBus } from '@babylonjs/core';
import type { _WebAudioEngine } from '@babylonjs/core';
import type { _WebAudioMainBus } from '@babylonjs/core';
import type { _WebAudioSoundSource } from '@babylonjs/core';
import type { _WebAudioStaticSound } from '@babylonjs/core';
import type { _WebAudioStaticSoundBuffer } from '@babylonjs/core';
import type { _WebAudioStreamingSound } from '@babylonjs/core';
import type { _injectLTSFileTools } from '@babylonjs/core';
import type { addToBlockFactory } from '@babylonjs/core';
import type { allocateAndCopyTypedBuffer } from '@babylonjs/core';
import type { blockFactory } from '@babylonjs/core';
import type { captureEquirectangularFromScene } from '@babylonjs/core';
import type { className } from '@babylonjs/core';
import type { computeMaxExtents } from '@babylonjs/core';
import type { createDetailMapPlugin } from '@babylonjs/core';
import type { createPBRAnisotropicPlugin } from '@babylonjs/core';
import type { createPBRBRDFPlugin } from '@babylonjs/core';
import type { createPBRClearCoatPlugin } from '@babylonjs/core';
import type { createPBRIridescencePlugin } from '@babylonjs/core';
import type { createPBRSheenPlugin } from '@babylonjs/core';
import type { createPBRSubSurfacePlugin } from '@babylonjs/core';
import type { createYieldingScheduler } from '@babylonjs/core';
import type { deepMerge } from '@babylonjs/core';
import type { editableInPropertyPage } from '@babylonjs/core';
import type { expandToProperty } from '@babylonjs/core';
import type { extractMinAndMax } from '@babylonjs/core';
import type { extractMinAndMaxIndexed } from '@babylonjs/core';
import type { getAnimationTypeByFlowGraphType } from '@babylonjs/core';
import type { getDimensionsFromTextureSize } from '@babylonjs/core';
import type { getRichTypeByAnimationType } from '@babylonjs/core';
import type { getRichTypeByFlowGraphType } from '@babylonjs/core';
import type { getRichTypeFromValue } from '@babylonjs/core';
import type { inlineScheduler } from '@babylonjs/core';
import type { makeAsyncFunction } from '@babylonjs/core';
import type { makeSyncFunction } from '@babylonjs/core';
import type { nativeOverride } from '@babylonjs/core';
import type { normalizeEnvInfo } from '@babylonjs/core';
import type { registerTextureLoader } from '@babylonjs/core';
import type { runCoroutine } from '@babylonjs/core';
import type { runCoroutineAsync } from '@babylonjs/core';
import type { runCoroutineSync } from '@babylonjs/core';
import type { serialize } from '@babylonjs/core';
import type { serializeAsCameraReference } from '@babylonjs/core';
import type { serializeAsColor3 } from '@babylonjs/core';
import type { serializeAsColor4 } from '@babylonjs/core';
import type { serializeAsColorCurves } from '@babylonjs/core';
import type { serializeAsFresnelParameters } from '@babylonjs/core';
import type { serializeAsImageProcessingConfiguration } from '@babylonjs/core';
import type { serializeAsMatrix } from '@babylonjs/core';
import type { serializeAsMeshReference } from '@babylonjs/core';
import type { serializeAsQuaternion } from '@babylonjs/core';
import type { serializeAsTexture } from '@babylonjs/core';
import type { serializeAsVector2 } from '@babylonjs/core';
import type { serializeAsVector3 } from '@babylonjs/core';
import type { setAndStartTimer } from '@babylonjs/core';
import type { setOpenGLOrientationForUV } from '@babylonjs/core';
import type { textureSizeIsObject } from '@babylonjs/core';
import type { unregisterTextureLoader } from '@babylonjs/core';
    
export interface JSXElements {
  abortError: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbortError>, {
message: ConstructorParameters<typeof AbortError>[0];
    
    },AbortError>, any>;
  abstractActionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractActionManager>, {},AbstractActionManager>, any>;
  abstractAssetContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAssetContainer>, {},AbstractAssetContainer>, any>;
  abstractAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAssetTask>, {
name: ConstructorParameters<typeof AbstractAssetTask>[0];
    
    },AbstractAssetTask>, any>;
  abstractAudioBus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAudioBus>, {
name: ConstructorParameters<typeof AbstractAudioBus>[0];
    engine: ConstructorParameters<typeof AbstractAudioBus>[1];
    
    },AbstractAudioBus>, any>;
  abstractAudioNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAudioNode>, {
engine: ConstructorParameters<typeof AbstractAudioNode>[0];
    nodeType: ConstructorParameters<typeof AbstractAudioNode>[1];
    
    },AbstractAudioNode>, any>;
  abstractAudioOutNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractAudioOutNode>, {
name: ConstructorParameters<typeof AbstractAudioOutNode>[0];
    engine: ConstructorParameters<typeof AbstractAudioOutNode>[1];
    nodeType: ConstructorParameters<typeof AbstractAudioOutNode>[2];
    
    },AbstractAudioOutNode>, any>;
  abstractEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractEngine>, {
antialias: ConstructorParameters<typeof AbstractEngine>[0];
    options: ConstructorParameters<typeof AbstractEngine>[1];
    adaptToDeviceRatio: ConstructorParameters<typeof AbstractEngine>[2];
    
    },AbstractEngine>, any>;
  abstractMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractMesh> & Clonable, {
name: ConstructorParameters<typeof AbstractMesh>[0];
    scene: ConstructorParameters<typeof AbstractMesh>[1];
    
    },AbstractMesh>, any>;
  abstractNamedAudioNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractNamedAudioNode>, {
name: ConstructorParameters<typeof AbstractNamedAudioNode>[0];
    engine: ConstructorParameters<typeof AbstractNamedAudioNode>[1];
    nodeType: ConstructorParameters<typeof AbstractNamedAudioNode>[2];
    
    },AbstractNamedAudioNode>, any>;
  abstractSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractSound>, {
name: ConstructorParameters<typeof AbstractSound>[0];
    engine: ConstructorParameters<typeof AbstractSound>[1];
    
    },AbstractSound>, any>;
  acquireNativeObjectAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AcquireNativeObjectAsync>> & MeshProps, {},ReturnType<typeof AcquireNativeObjectAsync>>, any>;
  action: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Action>, {
triggerOptions: ConstructorParameters<typeof Action>[0];
    condition: ConstructorParameters<typeof Action>[1];
    
    },Action>, any>;
  actionEvent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ActionEvent>, {
source: ConstructorParameters<typeof ActionEvent>[0];
    pointerX: ConstructorParameters<typeof ActionEvent>[1];
    pointerY: ConstructorParameters<typeof ActionEvent>[2];
    meshUnderPointer: ConstructorParameters<typeof ActionEvent>[3];
    sourceEvent: ConstructorParameters<typeof ActionEvent>[4];
    additionalData: ConstructorParameters<typeof ActionEvent>[5];
    
    },ActionEvent>, any>;
  actionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ActionManager>, {
scene: ConstructorParameters<typeof ActionManager>[0];
    
    },ActionManager>, any>;
  addAnimationExtensions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AddAnimationExtensions>> & MeshProps, {
        sceneClass: Parameters<typeof AddAnimationExtensions>[0];
    boneClass: Parameters<typeof AddAnimationExtensions>[1];
    
            },ReturnType<typeof AddAnimationExtensions>>, any>;
  addBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AddBlock> & Clonable, {
name: ConstructorParameters<typeof AddBlock>[0];
    
    },AddBlock>, any>;
  addClipPlaneUniforms: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AddClipPlaneUniforms>> & MeshProps, {
        uniforms: Parameters<typeof AddClipPlaneUniforms>[0];
    
            },ReturnType<typeof AddClipPlaneUniforms>>, any>;
  addIndividualParser: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AddIndividualParser>> & MeshProps, {
        name: Parameters<typeof AddIndividualParser>[0];
    parser: Parameters<typeof AddIndividualParser>[1];
    
            },ReturnType<typeof AddIndividualParser>>, any>;
  addParser: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AddParser>> & MeshProps, {
        name: Parameters<typeof AddParser>[0];
    parser: Parameters<typeof AddParser>[1];
    
            },ReturnType<typeof AddParser>>, any>;
  addRayExtensions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AddRayExtensions>> & MeshProps, {
        sceneClass: Parameters<typeof AddRayExtensions>[0];
    cameraClass: Parameters<typeof AddRayExtensions>[1];
    
            },ReturnType<typeof AddRayExtensions>>, any>;
  advancedTimer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AdvancedTimer>, {
options: ConstructorParameters<typeof AdvancedTimer>[0];
    
    },AdvancedTimer>, any>;
  aggregatorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AggregatorBlock> & Clonable, {
name: ConstructorParameters<typeof AggregatorBlock>[0];
    
    },AggregatorBlock>, any>;
  alignAngleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AlignAngleBlock> & Clonable, {
name: ConstructorParameters<typeof AlignAngleBlock>[0];
    
    },AlignAngleBlock>, any>;
  alignBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AlignBlock> & Clonable, {
name: ConstructorParameters<typeof AlignBlock>[0];
    
    },AlignBlock>, any>;
  alphaState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AlphaState>, {
_supportBlendParametersPerTarget: ConstructorParameters<typeof AlphaState>[0];
    
    },AlphaState>, any>;
  ambientOcclusionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AmbientOcclusionBlock> & Clonable, {
name: ConstructorParameters<typeof AmbientOcclusionBlock>[0];
    
    },AmbientOcclusionBlock>, any>;
  ammoJSPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AmmoJSPlugin>, {
_useDeltaForWorldStep: ConstructorParameters<typeof AmmoJSPlugin>[0];
    ammoInjection: ConstructorParameters<typeof AmmoJSPlugin>[1];
    overlappingPairCache: ConstructorParameters<typeof AmmoJSPlugin>[2];
    
    },AmmoJSPlugin>, any>;
  anaglyphArcRotateCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnaglyphArcRotateCamera> & Clonable, {
name: ConstructorParameters<typeof AnaglyphArcRotateCamera>[0];
    alpha: ConstructorParameters<typeof AnaglyphArcRotateCamera>[1];
    beta: ConstructorParameters<typeof AnaglyphArcRotateCamera>[2];
    radius: ConstructorParameters<typeof AnaglyphArcRotateCamera>[3];
    target: ConstructorParameters<typeof AnaglyphArcRotateCamera>[4];
    interaxialDistance: ConstructorParameters<typeof AnaglyphArcRotateCamera>[5];
    scene: ConstructorParameters<typeof AnaglyphArcRotateCamera>[6];
    
    } & CameraProps,AnaglyphArcRotateCamera>, any>;
  anaglyphFreeCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnaglyphFreeCamera> & Clonable, {
name: ConstructorParameters<typeof AnaglyphFreeCamera>[0];
    position: ConstructorParameters<typeof AnaglyphFreeCamera>[1];
    interaxialDistance: ConstructorParameters<typeof AnaglyphFreeCamera>[2];
    scene: ConstructorParameters<typeof AnaglyphFreeCamera>[3];
    
    } & CameraProps,AnaglyphFreeCamera>, any>;
  anaglyphGamepadCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnaglyphGamepadCamera> & Clonable, {
name: ConstructorParameters<typeof AnaglyphGamepadCamera>[0];
    position: ConstructorParameters<typeof AnaglyphGamepadCamera>[1];
    interaxialDistance: ConstructorParameters<typeof AnaglyphGamepadCamera>[2];
    scene: ConstructorParameters<typeof AnaglyphGamepadCamera>[3];
    
    } & CameraProps,AnaglyphGamepadCamera>, any>;
  anaglyphPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnaglyphPostProcess> & Clonable, {
name: ConstructorParameters<typeof AnaglyphPostProcess>[0];
    options: ConstructorParameters<typeof AnaglyphPostProcess>[1];
    rigCameras: ConstructorParameters<typeof AnaglyphPostProcess>[2];
    samplingMode: ConstructorParameters<typeof AnaglyphPostProcess>[3];
    engine: ConstructorParameters<typeof AnaglyphPostProcess>[4];
    reusable: ConstructorParameters<typeof AnaglyphPostProcess>[5];
    
    },AnaglyphPostProcess>, any>;
  anaglyphUniversalCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnaglyphUniversalCamera> & Clonable, {
name: ConstructorParameters<typeof AnaglyphUniversalCamera>[0];
    position: ConstructorParameters<typeof AnaglyphUniversalCamera>[1];
    interaxialDistance: ConstructorParameters<typeof AnaglyphUniversalCamera>[2];
    scene: ConstructorParameters<typeof AnaglyphUniversalCamera>[3];
    
    } & CameraProps,AnaglyphUniversalCamera>, any>;
  analyser: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Analyser>, {
scene: ConstructorParameters<typeof Analyser>[0];
    
    },Analyser>, any>;
  angle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Angle>, {
radians: ConstructorParameters<typeof Angle>[0];
    
    },Angle>, any>;
  animatable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Animatable>, {
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
    
    },Animatable>, any>;
  animation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Animation> & Clonable, {
name: ConstructorParameters<typeof Animation>[0];
    targetProperty: ConstructorParameters<typeof Animation>[1];
    framePerSecond: ConstructorParameters<typeof Animation>[2];
    dataType: ConstructorParameters<typeof Animation>[3];
    loopMode: ConstructorParameters<typeof Animation>[4];
    enableBlending: ConstructorParameters<typeof Animation>[5];
    
    },Animation>, any>;
  animationAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationAssetTask>, {
name: ConstructorParameters<typeof AnimationAssetTask>[0];
    rootUrl: ConstructorParameters<typeof AnimationAssetTask>[1];
    filename: ConstructorParameters<typeof AnimationAssetTask>[2];
    targetConverter: ConstructorParameters<typeof AnimationAssetTask>[3];
    extension: ConstructorParameters<typeof AnimationAssetTask>[4];
    
    },AnimationAssetTask>, any>;
  animationEvent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationEvent>, {
frame: ConstructorParameters<typeof AnimationEvent>[0];
    action: ConstructorParameters<typeof AnimationEvent>[1];
    onlyOnce: ConstructorParameters<typeof AnimationEvent>[2];
    
    },AnimationEvent>, any>;
  animationGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationGroup> & Clonable, {
name: ConstructorParameters<typeof AnimationGroup>[0];
    scene: ConstructorParameters<typeof AnimationGroup>[1];
    weight: ConstructorParameters<typeof AnimationGroup>[2];
    playOrder: ConstructorParameters<typeof AnimationGroup>[3];
    
    },AnimationGroup>, any>;
  animationGroupMask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationGroupMask>, {
names: ConstructorParameters<typeof AnimationGroupMask>[0];
    mode: ConstructorParameters<typeof AnimationGroupMask>[1];
    
    },AnimationGroupMask>, any>;
  animationPropertiesOverride: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationPropertiesOverride>, {},AnimationPropertiesOverride>, any>;
  animationRange: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnimationRange> & Clonable, {
name: ConstructorParameters<typeof AnimationRange>[0];
    from: ConstructorParameters<typeof AnimationRange>[1];
    to: ConstructorParameters<typeof AnimationRange>[2];
    
    },AnimationRange>, any>;
  anisotropyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AnisotropyBlock> & Clonable, {
name: ConstructorParameters<typeof AnisotropyBlock>[0];
    
    },AnisotropyBlock>, any>;
  appendSceneAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AppendSceneAsync>> & MeshProps, {
        source: Parameters<typeof AppendSceneAsync>[0];
    scene: Parameters<typeof AppendSceneAsync>[1];
    options: Parameters<typeof AppendSceneAsync>[2];
    
            },ReturnType<typeof AppendSceneAsync>>, any>;
  applyLut: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ApplyLut>> & MeshProps, {
        lut: Parameters<typeof ApplyLut>[0];
    data: Parameters<typeof ApplyLut>[1];
    nData: Parameters<typeof ApplyLut>[2];
    
            },ReturnType<typeof ApplyLut>>, any>;
  applyPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ApplyPostProcess>> & MeshProps, {
        postProcessName: Parameters<typeof ApplyPostProcess>[0];
    internalTexture: Parameters<typeof ApplyPostProcess>[1];
    scene: Parameters<typeof ApplyPostProcess>[2];
    type: Parameters<typeof ApplyPostProcess>[3];
    samplingMode: Parameters<typeof ApplyPostProcess>[4];
    format: Parameters<typeof ApplyPostProcess>[5];
    width: Parameters<typeof ApplyPostProcess>[6];
    height: Parameters<typeof ApplyPostProcess>[7];
    
            },ReturnType<typeof ApplyPostProcess>>, any>;
  arc2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Arc2>, {
startPoint: ConstructorParameters<typeof Arc2>[0];
    midPoint: ConstructorParameters<typeof Arc2>[1];
    endPoint: ConstructorParameters<typeof Arc2>[2];
    
    },Arc2>, any>;
  arcFollowCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcFollowCamera> & Clonable, {
name: ConstructorParameters<typeof ArcFollowCamera>[0];
    alpha: ConstructorParameters<typeof ArcFollowCamera>[1];
    beta: ConstructorParameters<typeof ArcFollowCamera>[2];
    radius: ConstructorParameters<typeof ArcFollowCamera>[3];
    target: ConstructorParameters<typeof ArcFollowCamera>[4];
    scene: ConstructorParameters<typeof ArcFollowCamera>[5];
    
    } & CameraProps,ArcFollowCamera>, any>;
  arcRotateCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCamera> & Clonable, {
name: ConstructorParameters<typeof ArcRotateCamera>[0];
    alpha: ConstructorParameters<typeof ArcRotateCamera>[1];
    beta: ConstructorParameters<typeof ArcRotateCamera>[2];
    radius: ConstructorParameters<typeof ArcRotateCamera>[3];
    target: ConstructorParameters<typeof ArcRotateCamera>[4];
    scene: ConstructorParameters<typeof ArcRotateCamera>[5];
    setActiveOnSceneIfNoneActive: ConstructorParameters<typeof ArcRotateCamera>[6];
    
    } & CameraProps,ArcRotateCamera>, any>;
  arcRotateCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraGamepadInput>, {},ArcRotateCameraGamepadInput>, any>;
  arcRotateCameraInputsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraInputsManager>, {
camera: ConstructorParameters<typeof ArcRotateCameraInputsManager>[0];
    
    },ArcRotateCameraInputsManager>, any>;
  arcRotateCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraKeyboardMoveInput>, {},ArcRotateCameraKeyboardMoveInput>, any>;
  arcRotateCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraMouseWheelInput>, {},ArcRotateCameraMouseWheelInput>, any>;
  arcRotateCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraPointersInput>, {},ArcRotateCameraPointersInput>, any>;
  arcRotateCameraVRDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcRotateCameraVRDeviceOrientationInput>, {},ArcRotateCameraVRDeviceOrientationInput>, any>;
  arcTan2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ArcTan2Block> & Clonable, {
name: ConstructorParameters<typeof ArcTan2Block>[0];
    
    },ArcTan2Block>, any>;
  areIndices32Bits: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof AreIndices32Bits>> & MeshProps, {
        indices: Parameters<typeof AreIndices32Bits>[0];
    count: Parameters<typeof AreIndices32Bits>[1];
    start: Parameters<typeof AreIndices32Bits>[2];
    offset: Parameters<typeof AreIndices32Bits>[3];
    
            },ReturnType<typeof AreIndices32Bits>>, any>;
  areaLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AreaLight> & Clonable, {
name: ConstructorParameters<typeof AreaLight>[0];
    position: ConstructorParameters<typeof AreaLight>[1];
    scene: ConstructorParameters<typeof AreaLight>[2];
    
    },AreaLight>, any>;
  assetContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AssetContainer>, {
scene: ConstructorParameters<typeof AssetContainer>[0];
    
    },AssetContainer>, any>;
  assetsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AssetsManager>, {
scene: ConstructorParameters<typeof AssetsManager>[0];
    
    },AssetsManager>, any>;
  assetsProgressEvent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AssetsProgressEvent>, {
remainingCount: ConstructorParameters<typeof AssetsProgressEvent>[0];
    totalCount: ConstructorParameters<typeof AssetsProgressEvent>[1];
    task: ConstructorParameters<typeof AssetsProgressEvent>[2];
    
    },AssetsProgressEvent>, any>;
  asyncLock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AsyncLock>, {},AsyncLock>, any>;
  asyncLoop: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AsyncLoop>, {
iterations: ConstructorParameters<typeof AsyncLoop>[0];
    func: ConstructorParameters<typeof AsyncLoop>[1];
    successCallback: ConstructorParameters<typeof AsyncLoop>[2];
    offset: ConstructorParameters<typeof AsyncLoop>[3];
    
    },AsyncLoop>, any>;
  attachToBoxBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AttachToBoxBehavior>, {
_ui: ConstructorParameters<typeof AttachToBoxBehavior>[0];
    
    },AttachToBoxBehavior>, any>;
  attractor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Attractor>, {},Attractor>, any>;
  audioBus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AudioBus>, {
name: ConstructorParameters<typeof AudioBus>[0];
    engine: ConstructorParameters<typeof AudioBus>[1];
    
    },AudioBus>, any>;
  audioEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AudioEngine>, {
hostElement: ConstructorParameters<typeof AudioEngine>[0];
    audioContext: ConstructorParameters<typeof AudioEngine>[1];
    audioDestination: ConstructorParameters<typeof AudioEngine>[2];
    
    },AudioEngine>, any>;
  audioEngineV2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AudioEngineV2>, {
options: ConstructorParameters<typeof AudioEngineV2>[0];
    
    },AudioEngineV2>, any>;
  audioSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AudioSceneComponent>, {
scene: ConstructorParameters<typeof AudioSceneComponent>[0];
    
    },AudioSceneComponent>, any>;
  autoReleaseWorkerPool: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoReleaseWorkerPool>, {
maxWorkers: ConstructorParameters<typeof AutoReleaseWorkerPool>[0];
    createWorkerAsync: ConstructorParameters<typeof AutoReleaseWorkerPool>[1];
    options: ConstructorParameters<typeof AutoReleaseWorkerPool>[2];
    
    },AutoReleaseWorkerPool>, any>;
  autoRotationBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AutoRotationBehavior>, {},AutoRotationBehavior>, any>;
  axesViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AxesViewer>, {
scene: ConstructorParameters<typeof AxesViewer>[0];
    scaleLines: ConstructorParameters<typeof AxesViewer>[1];
    renderingGroupId: ConstructorParameters<typeof AxesViewer>[2];
    xAxis: ConstructorParameters<typeof AxesViewer>[3];
    yAxis: ConstructorParameters<typeof AxesViewer>[4];
    zAxis: ConstructorParameters<typeof AxesViewer>[5];
    lineThickness: ConstructorParameters<typeof AxesViewer>[6];
    
    },AxesViewer>, any>;
  axisDragGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AxisDragGizmo>, {
dragAxis: ConstructorParameters<typeof AxisDragGizmo>[0];
    color: ConstructorParameters<typeof AxisDragGizmo>[1];
    gizmoLayer: ConstructorParameters<typeof AxisDragGizmo>[2];
    parent: ConstructorParameters<typeof AxisDragGizmo>[3];
    thickness: ConstructorParameters<typeof AxisDragGizmo>[4];
    hoverColor: ConstructorParameters<typeof AxisDragGizmo>[5];
    disableColor: ConstructorParameters<typeof AxisDragGizmo>[6];
    
    },AxisDragGizmo>, any>;
  axisScaleGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AxisScaleGizmo>, {
dragAxis: ConstructorParameters<typeof AxisScaleGizmo>[0];
    color: ConstructorParameters<typeof AxisScaleGizmo>[1];
    gizmoLayer: ConstructorParameters<typeof AxisScaleGizmo>[2];
    parent: ConstructorParameters<typeof AxisScaleGizmo>[3];
    thickness: ConstructorParameters<typeof AxisScaleGizmo>[4];
    hoverColor: ConstructorParameters<typeof AxisScaleGizmo>[5];
    disableColor: ConstructorParameters<typeof AxisScaleGizmo>[6];
    
    },AxisScaleGizmo>, any>;
  backEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BackEase>, {
amplitude: ConstructorParameters<typeof BackEase>[0];
    
    },BackEase>, any>;
  backgroundMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BackgroundMaterial> & Clonable, {
name: ConstructorParameters<typeof BackgroundMaterial>[0];
    scene: ConstructorParameters<typeof BackgroundMaterial>[1];
    forceGLSL: ConstructorParameters<typeof BackgroundMaterial>[2];
    
    } & MaterialProps,BackgroundMaterial>, any>;
  bakedVertexAnimationManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BakedVertexAnimationManager> & Clonable, {
scene: ConstructorParameters<typeof BakedVertexAnimationManager>[0];
    
    },BakedVertexAnimationManager>, any>;
  ballAndSocketConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BallAndSocketConstraint>, {
pivotA: ConstructorParameters<typeof BallAndSocketConstraint>[0];
    pivotB: ConstructorParameters<typeof BallAndSocketConstraint>[1];
    axisA: ConstructorParameters<typeof BallAndSocketConstraint>[2];
    axisB: ConstructorParameters<typeof BallAndSocketConstraint>[3];
    scene: ConstructorParameters<typeof BallAndSocketConstraint>[4];
    
    },BallAndSocketConstraint>, any>;
  baseCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraMouseWheelInput>, {},BaseCameraMouseWheelInput>, any>;
  baseCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseCameraPointersInput>, {},BaseCameraPointersInput>, any>;
  baseParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseParticleSystem>, {
name: ConstructorParameters<typeof BaseParticleSystem>[0];
    
    },BaseParticleSystem>, any>;
  baseSixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSixDofDragBehavior>, {},BaseSixDofDragBehavior>, any>;
  baseTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseTexture> & Clonable, {
sceneOrEngine: ConstructorParameters<typeof BaseTexture>[0];
    internalTexture: ConstructorParameters<typeof BaseTexture>[1];
    
    },BaseTexture>, any>;
  basicColorUpdateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BasicColorUpdateBlock> & Clonable, {
name: ConstructorParameters<typeof BasicColorUpdateBlock>[0];
    
    },BasicColorUpdateBlock>, any>;
  basicPositionUpdateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BasicPositionUpdateBlock> & Clonable, {
name: ConstructorParameters<typeof BasicPositionUpdateBlock>[0];
    
    },BasicPositionUpdateBlock>, any>;
  basicSpriteUpdateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BasicSpriteUpdateBlock> & Clonable, {
name: ConstructorParameters<typeof BasicSpriteUpdateBlock>[0];
    
    },BasicSpriteUpdateBlock>, any>;
  bezierCurveEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BezierCurveEase>, {
x1: ConstructorParameters<typeof BezierCurveEase>[0];
    y1: ConstructorParameters<typeof BezierCurveEase>[1];
    x2: ConstructorParameters<typeof BezierCurveEase>[2];
    y2: ConstructorParameters<typeof BezierCurveEase>[3];
    
    },BezierCurveEase>, any>;
  biPlanarBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BiPlanarBlock> & Clonable, {
name: ConstructorParameters<typeof BiPlanarBlock>[0];
    
    },BiPlanarBlock>, any>;
  binaryFileAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BinaryFileAssetTask>, {
name: ConstructorParameters<typeof BinaryFileAssetTask>[0];
    url: ConstructorParameters<typeof BinaryFileAssetTask>[1];
    
    },BinaryFileAssetTask>, any>;
  bindBonesParameters: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindBonesParameters>> & MeshProps, {
        mesh: Parameters<typeof BindBonesParameters>[0];
    effect: Parameters<typeof BindBonesParameters>[1];
    prePassConfiguration: Parameters<typeof BindBonesParameters>[2];
    
            },ReturnType<typeof BindBonesParameters>>, any>;
  bindClipPlane: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindClipPlane>> & MeshProps, {
        effect: Parameters<typeof BindClipPlane>[0];
    primaryHolder: Parameters<typeof BindClipPlane>[1];
    secondaryHolder: Parameters<typeof BindClipPlane>[2];
    
            },ReturnType<typeof BindClipPlane>>, any>;
  bindFogParameters: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindFogParameters>> & MeshProps, {
        scene: Parameters<typeof BindFogParameters>[0];
    mesh: Parameters<typeof BindFogParameters>[1];
    effect: Parameters<typeof BindFogParameters>[2];
    linearSpace: Parameters<typeof BindFogParameters>[3];
    
            },ReturnType<typeof BindFogParameters>>, any>;
  bindLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindLight>> & MeshProps, {
        light: Parameters<typeof BindLight>[0];
    lightIndex: Parameters<typeof BindLight>[1];
    scene: Parameters<typeof BindLight>[2];
    effect: Parameters<typeof BindLight>[3];
    useSpecular: Parameters<typeof BindLight>[4];
    receiveShadows: Parameters<typeof BindLight>[5];
    
            },ReturnType<typeof BindLight>>, any>;
  bindLightProperties: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindLightProperties>> & MeshProps, {
        light: Parameters<typeof BindLightProperties>[0];
    effect: Parameters<typeof BindLightProperties>[1];
    lightIndex: Parameters<typeof BindLightProperties>[2];
    
            },ReturnType<typeof BindLightProperties>>, any>;
  bindLights: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindLights>> & MeshProps, {
        scene: Parameters<typeof BindLights>[0];
    mesh: Parameters<typeof BindLights>[1];
    effect: Parameters<typeof BindLights>[2];
    defines: Parameters<typeof BindLights>[3];
    maxSimultaneousLights: Parameters<typeof BindLights>[4];
    
            },ReturnType<typeof BindLights>>, any>;
  bindLogDepth: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindLogDepth>> & MeshProps, {
        defines: Parameters<typeof BindLogDepth>[0];
    effect: Parameters<typeof BindLogDepth>[1];
    scene: Parameters<typeof BindLogDepth>[2];
    
            },ReturnType<typeof BindLogDepth>>, any>;
  bindMorphTargetParameters: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindMorphTargetParameters>> & MeshProps, {
        abstractMesh: Parameters<typeof BindMorphTargetParameters>[0];
    effect: Parameters<typeof BindMorphTargetParameters>[1];
    
            },ReturnType<typeof BindMorphTargetParameters>>, any>;
  bindSceneUniformBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindSceneUniformBuffer>> & MeshProps, {
        effect: Parameters<typeof BindSceneUniformBuffer>[0];
    sceneUbo: Parameters<typeof BindSceneUniformBuffer>[1];
    
            },ReturnType<typeof BindSceneUniformBuffer>>, any>;
  bindTextureMatrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof BindTextureMatrix>> & MeshProps, {
        texture: Parameters<typeof BindTextureMatrix>[0];
    uniformBuffer: Parameters<typeof BindTextureMatrix>[1];
    key: Parameters<typeof BindTextureMatrix>[2];
    
            },ReturnType<typeof BindTextureMatrix>>, any>;
  bitArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BitArray>, {
size: ConstructorParameters<typeof BitArray>[0];
    
    },BitArray>, any>;
  blackAndWhitePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BlackAndWhitePostProcess> & Clonable, {
name: ConstructorParameters<typeof BlackAndWhitePostProcess>[0];
    options: ConstructorParameters<typeof BlackAndWhitePostProcess>[1];
    camera: ConstructorParameters<typeof BlackAndWhitePostProcess>[2];
    samplingMode: ConstructorParameters<typeof BlackAndWhitePostProcess>[3];
    engine: ConstructorParameters<typeof BlackAndWhitePostProcess>[4];
    reusable: ConstructorParameters<typeof BlackAndWhitePostProcess>[5];
    
    },BlackAndWhitePostProcess>, any>;
  bloomEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BloomEffect>, {
sceneOrEngine: ConstructorParameters<typeof BloomEffect>[0];
    bloomScale: ConstructorParameters<typeof BloomEffect>[1];
    bloomWeight: ConstructorParameters<typeof BloomEffect>[2];
    bloomKernel: ConstructorParameters<typeof BloomEffect>[3];
    pipelineTextureType: ConstructorParameters<typeof BloomEffect>[4];
    blockCompilation: ConstructorParameters<typeof BloomEffect>[5];
    
    },BloomEffect>, any>;
  bloomMergePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BloomMergePostProcess> & Clonable, {
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
    
    },BloomMergePostProcess>, any>;
  blurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BlurPostProcess> & Clonable, {
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
    
    },BlurPostProcess>, any>;
  bone: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Bone> & Clonable, {
name: ConstructorParameters<typeof Bone>[0];
    skeleton: ConstructorParameters<typeof Bone>[1];
    parentBone: ConstructorParameters<typeof Bone>[2];
    localMatrix: ConstructorParameters<typeof Bone>[3];
    restMatrix: ConstructorParameters<typeof Bone>[4];
    bindMatrix: ConstructorParameters<typeof Bone>[5];
    index: ConstructorParameters<typeof Bone>[6];
    
    },Bone>, any>;
  boneAxesViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoneAxesViewer>, {
scene: ConstructorParameters<typeof BoneAxesViewer>[0];
    bone: ConstructorParameters<typeof BoneAxesViewer>[1];
    mesh: ConstructorParameters<typeof BoneAxesViewer>[2];
    scaleLines: ConstructorParameters<typeof BoneAxesViewer>[3];
    
    },BoneAxesViewer>, any>;
  boneIKController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoneIKController>, {
mesh: ConstructorParameters<typeof BoneIKController>[0];
    bone: ConstructorParameters<typeof BoneIKController>[1];
    options: ConstructorParameters<typeof BoneIKController>[2];
    
    },BoneIKController>, any>;
  boneLookController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoneLookController>, {
mesh: ConstructorParameters<typeof BoneLookController>[0];
    bone: ConstructorParameters<typeof BoneLookController>[1];
    target: ConstructorParameters<typeof BoneLookController>[2];
    options: ConstructorParameters<typeof BoneLookController>[3];
    
    },BoneLookController>, any>;
  bonesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BonesBlock> & Clonable, {
name: ConstructorParameters<typeof BonesBlock>[0];
    
    },BonesBlock>, any>;
  booleanGeometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BooleanGeometryBlock> & Clonable, {
name: ConstructorParameters<typeof BooleanGeometryBlock>[0];
    
    },BooleanGeometryBlock>, any>;
  bounceEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BounceEase>, {
bounces: ConstructorParameters<typeof BounceEase>[0];
    bounciness: ConstructorParameters<typeof BounceEase>[1];
    
    },BounceEase>, any>;
  bouncingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BouncingBehavior>, {},BouncingBehavior>, any>;
  boundingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingBlock> & Clonable, {
name: ConstructorParameters<typeof BoundingBlock>[0];
    
    },BoundingBlock>, any>;
  boundingBox: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingBox>, {
min: ConstructorParameters<typeof BoundingBox>[0];
    max: ConstructorParameters<typeof BoundingBox>[1];
    worldMatrix: ConstructorParameters<typeof BoundingBox>[2];
    
    },BoundingBox>, any>;
  boundingBoxGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingBoxGizmo>, {
color: ConstructorParameters<typeof BoundingBoxGizmo>[0];
    gizmoLayer: ConstructorParameters<typeof BoundingBoxGizmo>[1];
    
    },BoundingBoxGizmo>, any>;
  boundingBoxRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingBoxRenderer>, {
scene: ConstructorParameters<typeof BoundingBoxRenderer>[0];
    
    },BoundingBoxRenderer>, any>;
  boundingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingInfo>, {
minimum: ConstructorParameters<typeof BoundingInfo>[0];
    maximum: ConstructorParameters<typeof BoundingInfo>[1];
    worldMatrix: ConstructorParameters<typeof BoundingInfo>[2];
    
    },BoundingInfo>, any>;
  boundingInfoHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingInfoHelper>, {
engine: ConstructorParameters<typeof BoundingInfoHelper>[0];
    
    },BoundingInfoHelper>, any>;
  boundingSphere: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoundingSphere>, {
min: ConstructorParameters<typeof BoundingSphere>[0];
    max: ConstructorParameters<typeof BoundingSphere>[1];
    worldMatrix: ConstructorParameters<typeof BoundingSphere>[2];
    
    },BoundingSphere>, any>;
  boxBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxBlock> & Clonable, {
name: ConstructorParameters<typeof BoxBlock>[0];
    
    },BoxBlock>, any>;
  boxParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxParticleEmitter> & Clonable, {},BoxParticleEmitter>, any>;
  boxShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BoxShapeBlock> & Clonable, {
name: ConstructorParameters<typeof BoxShapeBlock>[0];
    
    },BoxShapeBlock>, any>;
  buffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Buffer>, {
engine: ConstructorParameters<typeof Buffer>[0];
    data: ConstructorParameters<typeof Buffer>[1];
    updatable: ConstructorParameters<typeof Buffer>[2];
    stride: ConstructorParameters<typeof Buffer>[3];
    postponeInternalCreation: ConstructorParameters<typeof Buffer>[4];
    instanced: ConstructorParameters<typeof Buffer>[5];
    useBytes: ConstructorParameters<typeof Buffer>[6];
    divisor: ConstructorParameters<typeof Buffer>[7];
    label: ConstructorParameters<typeof Buffer>[8];
    
    },Buffer>, any>;
  cSG: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CSG> & Clonable, {},CSG>, any>;
  cSG2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CSG2>, {
manifold: ConstructorParameters<typeof CSG2>[0];
    numProp: ConstructorParameters<typeof CSG2>[1];
    vertexStructure: ConstructorParameters<typeof CSG2>[2];
    
    },CSG2>, any>;
  camera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Camera> & Clonable, {
name: ConstructorParameters<typeof Camera>[0];
    position: ConstructorParameters<typeof Camera>[1];
    scene: ConstructorParameters<typeof Camera>[2];
    setActiveOnSceneIfNoneActive: ConstructorParameters<typeof Camera>[3];
    
    },Camera>, any>;
  cameraGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CameraGizmo>, {
gizmoLayer: ConstructorParameters<typeof CameraGizmo>[0];
    gizmoColor: ConstructorParameters<typeof CameraGizmo>[1];
    frustumLinesColor: ConstructorParameters<typeof CameraGizmo>[2];
    
    },CameraGizmo>, any>;
  cameraInputsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CameraInputsManager>, {
camera: ConstructorParameters<typeof CameraInputsManager>[0];
    
    },CameraInputsManager>, any>;
  cannonJSPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CannonJSPlugin>, {
_useDeltaForWorldStep: ConstructorParameters<typeof CannonJSPlugin>[0];
    iterations: ConstructorParameters<typeof CannonJSPlugin>[1];
    cannonInjection: ConstructorParameters<typeof CannonJSPlugin>[2];
    
    },CannonJSPlugin>, any>;
  capsuleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CapsuleBlock> & Clonable, {
name: ConstructorParameters<typeof CapsuleBlock>[0];
    
    },CapsuleBlock>, any>;
  cascadedShadowGenerator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CascadedShadowGenerator>, {
mapSize: ConstructorParameters<typeof CascadedShadowGenerator>[0];
    light: ConstructorParameters<typeof CascadedShadowGenerator>[1];
    usefulFloatFirst: ConstructorParameters<typeof CascadedShadowGenerator>[2];
    camera: ConstructorParameters<typeof CascadedShadowGenerator>[3];
    useRedTextureType: ConstructorParameters<typeof CascadedShadowGenerator>[4];
    
    },CascadedShadowGenerator>, any>;
  chromaticAberrationPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ChromaticAberrationPostProcess> & Clonable, {
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
    
    },ChromaticAberrationPostProcess>, any>;
  circleOfConfusionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CircleOfConfusionPostProcess> & Clonable, {
name: ConstructorParameters<typeof CircleOfConfusionPostProcess>[0];
    depthTexture: ConstructorParameters<typeof CircleOfConfusionPostProcess>[1];
    options: ConstructorParameters<typeof CircleOfConfusionPostProcess>[2];
    camera: ConstructorParameters<typeof CircleOfConfusionPostProcess>[3];
    samplingMode: ConstructorParameters<typeof CircleOfConfusionPostProcess>[4];
    engine: ConstructorParameters<typeof CircleOfConfusionPostProcess>[5];
    reusable: ConstructorParameters<typeof CircleOfConfusionPostProcess>[6];
    textureType: ConstructorParameters<typeof CircleOfConfusionPostProcess>[7];
    blockCompilation: ConstructorParameters<typeof CircleOfConfusionPostProcess>[8];
    
    },CircleOfConfusionPostProcess>, any>;
  clampBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClampBlock> & Clonable, {
name: ConstructorParameters<typeof ClampBlock>[0];
    
    },ClampBlock>, any>;
  cleanGeometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CleanGeometryBlock> & Clonable, {
name: ConstructorParameters<typeof CleanGeometryBlock>[0];
    
    },CleanGeometryBlock>, any>;
  clearCoatBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClearCoatBlock> & Clonable, {
name: ConstructorParameters<typeof ClearCoatBlock>[0];
    
    },ClearCoatBlock>, any>;
  clipPlanesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClipPlanesBlock> & Clonable, {
name: ConstructorParameters<typeof ClipPlanesBlock>[0];
    
    },ClipPlanesBlock>, any>;
  clipboardInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClipboardInfo>, {
type: ConstructorParameters<typeof ClipboardInfo>[0];
    event: ConstructorParameters<typeof ClipboardInfo>[1];
    
    },ClipboardInfo>, any>;
  cloudBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CloudBlock> & Clonable, {
name: ConstructorParameters<typeof CloudBlock>[0];
    
    },CloudBlock>, any>;
  cloudPoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CloudPoint>, {
particleIndex: ConstructorParameters<typeof CloudPoint>[0];
    group: ConstructorParameters<typeof CloudPoint>[1];
    groupId: ConstructorParameters<typeof CloudPoint>[2];
    idxInGroup: ConstructorParameters<typeof CloudPoint>[3];
    pcs: ConstructorParameters<typeof CloudPoint>[4];
    
    },CloudPoint>, any>;
  clusteredLightContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClusteredLightContainer> & Clonable, {
name: ConstructorParameters<typeof ClusteredLightContainer>[0];
    lights: ConstructorParameters<typeof ClusteredLightContainer>[1];
    scene: ConstructorParameters<typeof ClusteredLightContainer>[2];
    
    },ClusteredLightContainer>, any>;
  clusteredLightingSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ClusteredLightingSceneComponent>, {
scene: ConstructorParameters<typeof ClusteredLightingSceneComponent>[0];
    
    },ClusteredLightingSceneComponent>, any>;
  collider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Collider>, {},Collider>, any>;
  color3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Color3> & Clonable, {
r: ConstructorParameters<typeof Color3>[0];
    g: ConstructorParameters<typeof Color3>[1];
    b: ConstructorParameters<typeof Color3>[2];
    
    },Color3>, any>;
  color3Gradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Color3Gradient>, {
gradient: ConstructorParameters<typeof Color3Gradient>[0];
    color: ConstructorParameters<typeof Color3Gradient>[1];
    
    },Color3Gradient>, any>;
  color4: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Color4> & Clonable, {
r: ConstructorParameters<typeof Color4>[0];
    g: ConstructorParameters<typeof Color4>[1];
    b: ConstructorParameters<typeof Color4>[2];
    a: ConstructorParameters<typeof Color4>[3];
    
    },Color4>, any>;
  colorConverterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorConverterBlock> & Clonable, {
name: ConstructorParameters<typeof ColorConverterBlock>[0];
    
    },ColorConverterBlock>, any>;
  colorCorrectionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCorrectionPostProcess> & Clonable, {
name: ConstructorParameters<typeof ColorCorrectionPostProcess>[0];
    colorTableUrl: ConstructorParameters<typeof ColorCorrectionPostProcess>[1];
    options: ConstructorParameters<typeof ColorCorrectionPostProcess>[2];
    camera: ConstructorParameters<typeof ColorCorrectionPostProcess>[3];
    samplingMode: ConstructorParameters<typeof ColorCorrectionPostProcess>[4];
    engine: ConstructorParameters<typeof ColorCorrectionPostProcess>[5];
    reusable: ConstructorParameters<typeof ColorCorrectionPostProcess>[6];
    
    },ColorCorrectionPostProcess>, any>;
  colorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorCurves> & Clonable, {},ColorCurves>, any>;
  colorGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorGradient>, {
gradient: ConstructorParameters<typeof ColorGradient>[0];
    color1: ConstructorParameters<typeof ColorGradient>[1];
    color2: ConstructorParameters<typeof ColorGradient>[2];
    
    },ColorGradient>, any>;
  colorGradingTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorGradingTexture> & Clonable, {
url: ConstructorParameters<typeof ColorGradingTexture>[0];
    sceneOrEngine: ConstructorParameters<typeof ColorGradingTexture>[1];
    onLoad: ConstructorParameters<typeof ColorGradingTexture>[2];
    
    } & TextureProps,ColorGradingTexture>, any>;
  colorMergerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorMergerBlock> & Clonable, {
name: ConstructorParameters<typeof ColorMergerBlock>[0];
    
    },ColorMergerBlock>, any>;
  colorSplitterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorSplitterBlock> & Clonable, {
name: ConstructorParameters<typeof ColorSplitterBlock>[0];
    
    },ColorSplitterBlock>, any>;
  combineAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CombineAction>, {
triggerOptions: ConstructorParameters<typeof CombineAction>[0];
    children: ConstructorParameters<typeof CombineAction>[1];
    condition: ConstructorParameters<typeof CombineAction>[2];
    enableChildrenConditions: ConstructorParameters<typeof CombineAction>[3];
    
    },CombineAction>, any>;
  completeGreasedLineColorTable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CompleteGreasedLineColorTable>> & MeshProps, {
        pointCount: Parameters<typeof CompleteGreasedLineColorTable>[0];
    colors: Parameters<typeof CompleteGreasedLineColorTable>[1];
    colorDistribution: Parameters<typeof CompleteGreasedLineColorTable>[2];
    defaultColor: Parameters<typeof CompleteGreasedLineColorTable>[3];
    
            },ReturnType<typeof CompleteGreasedLineColorTable>>, any>;
  completeGreasedLineWidthTable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CompleteGreasedLineWidthTable>> & MeshProps, {
        pointCount: Parameters<typeof CompleteGreasedLineWidthTable>[0];
    widths: Parameters<typeof CompleteGreasedLineWidthTable>[1];
    widthsDistribution: Parameters<typeof CompleteGreasedLineWidthTable>[2];
    defaultWidthUpper: Parameters<typeof CompleteGreasedLineWidthTable>[3];
    defaultWidthLower: Parameters<typeof CompleteGreasedLineWidthTable>[4];
    
            },ReturnType<typeof CompleteGreasedLineWidthTable>>, any>;
  computeAlpha: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ComputeAlpha>> & MeshProps, {
        offset: Parameters<typeof ComputeAlpha>[0];
    
            },ReturnType<typeof ComputeAlpha>>, any>;
  computeBeta: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ComputeBeta>> & MeshProps, {
        verticalOffset: Parameters<typeof ComputeBeta>[0];
    radius: Parameters<typeof ComputeBeta>[1];
    
            },ReturnType<typeof ComputeBeta>>, any>;
  computeEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ComputeEffect>, {
baseName: ConstructorParameters<typeof ComputeEffect>[0];
    options: ConstructorParameters<typeof ComputeEffect>[1];
    engine: ConstructorParameters<typeof ComputeEffect>[2];
    key: ConstructorParameters<typeof ComputeEffect>[3];
    
    },ComputeEffect>, any>;
  computeNormalsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ComputeNormalsBlock> & Clonable, {
name: ConstructorParameters<typeof ComputeNormalsBlock>[0];
    
    },ComputeNormalsBlock>, any>;
  computeShader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ComputeShader>, {
name: ConstructorParameters<typeof ComputeShader>[0];
    engine: ConstructorParameters<typeof ComputeShader>[1];
    shaderPath: ConstructorParameters<typeof ComputeShader>[2];
    options: ConstructorParameters<typeof ComputeShader>[3];
    
    },ComputeShader>, any>;
  computeShaderBoundingHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ComputeShaderBoundingHelper>, {
engine: ConstructorParameters<typeof ComputeShaderBoundingHelper>[0];
    
    },ComputeShaderBoundingHelper>, any>;
  computeShaderParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ComputeShaderParticleSystem>, {
parent: ConstructorParameters<typeof ComputeShaderParticleSystem>[0];
    engine: ConstructorParameters<typeof ComputeShaderParticleSystem>[1];
    
    },ComputeShaderParticleSystem>, any>;
  condition: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Condition>, {
actionManager: ConstructorParameters<typeof Condition>[0];
    
    },Condition>, any>;
  conditionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ConditionBlock> & Clonable, {
name: ConstructorParameters<typeof ConditionBlock>[0];
    
    },ConditionBlock>, any>;
  conditionalBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ConditionalBlock> & Clonable, {
name: ConstructorParameters<typeof ConditionalBlock>[0];
    
    },ConditionalBlock>, any>;
  coneDirectedParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ConeDirectedParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof ConeDirectedParticleEmitter>[0];
    angle: ConstructorParameters<typeof ConeDirectedParticleEmitter>[1];
    direction1: ConstructorParameters<typeof ConeDirectedParticleEmitter>[2];
    direction2: ConstructorParameters<typeof ConeDirectedParticleEmitter>[3];
    
    },ConeDirectedParticleEmitter>, any>;
  coneParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ConeParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof ConeParticleEmitter>[0];
    angle: ConstructorParameters<typeof ConeParticleEmitter>[1];
    directionRandomizer: ConstructorParameters<typeof ConeParticleEmitter>[2];
    
    },ConeParticleEmitter>, any>;
  containerAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ContainerAssetTask>, {
name: ConstructorParameters<typeof ContainerAssetTask>[0];
    meshesNames: ConstructorParameters<typeof ContainerAssetTask>[1];
    rootUrl: ConstructorParameters<typeof ContainerAssetTask>[2];
    sceneFilename: ConstructorParameters<typeof ContainerAssetTask>[3];
    extension: ConstructorParameters<typeof ContainerAssetTask>[4];
    
    },ContainerAssetTask>, any>;
  convertToNodeParticleSystemSetAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ConvertToNodeParticleSystemSetAsync>> & MeshProps, {
        name: Parameters<typeof ConvertToNodeParticleSystemSetAsync>[0];
    particleSystems: Parameters<typeof ConvertToNodeParticleSystemSetAsync>[1];
    
            },ReturnType<typeof ConvertToNodeParticleSystemSetAsync>>, any>;
  convolutionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ConvolutionPostProcess> & Clonable, {
name: ConstructorParameters<typeof ConvolutionPostProcess>[0];
    kernel: ConstructorParameters<typeof ConvolutionPostProcess>[1];
    options: ConstructorParameters<typeof ConvolutionPostProcess>[2];
    camera: ConstructorParameters<typeof ConvolutionPostProcess>[3];
    samplingMode: ConstructorParameters<typeof ConvolutionPostProcess>[4];
    engine: ConstructorParameters<typeof ConvolutionPostProcess>[5];
    reusable: ConstructorParameters<typeof ConvolutionPostProcess>[6];
    textureType: ConstructorParameters<typeof ConvolutionPostProcess>[7];
    
    },ConvolutionPostProcess>, any>;
  copyFloatData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CopyFloatData>> & MeshProps, {
        input: Parameters<typeof CopyFloatData>[0];
    size: Parameters<typeof CopyFloatData>[1];
    type: Parameters<typeof CopyFloatData>[2];
    byteOffset: Parameters<typeof CopyFloatData>[3];
    byteStride: Parameters<typeof CopyFloatData>[4];
    normalized: Parameters<typeof CopyFloatData>[5];
    totalVertices: Parameters<typeof CopyFloatData>[6];
    output: Parameters<typeof CopyFloatData>[7];
    
            },ReturnType<typeof CopyFloatData>>, any>;
  copyMatrixToArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CopyMatrixToArray>> & MeshProps, {
        matrix: Parameters<typeof CopyMatrixToArray>[0];
    array: Parameters<typeof CopyMatrixToArray>[1];
    offset: Parameters<typeof CopyMatrixToArray>[2];
    
            },ReturnType<typeof CopyMatrixToArray>>, any>;
  copyMatrixToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CopyMatrixToRef>> & MeshProps, {
        matrix: Parameters<typeof CopyMatrixToRef>[0];
    target: Parameters<typeof CopyMatrixToRef>[1];
    
            },ReturnType<typeof CopyMatrixToRef>>, any>;
  copyTextureToTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CopyTextureToTexture>, {
engine: ConstructorParameters<typeof CopyTextureToTexture>[0];
    isDepthTexture: ConstructorParameters<typeof CopyTextureToTexture>[1];
    
    },CopyTextureToTexture>, any>;
  alignedTypedArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateAlignedTypedArray>> & MeshProps, {
        type: Parameters<typeof CreateAlignedTypedArray>[0];
    elementCount: Parameters<typeof CreateAlignedTypedArray>[1];
    
            },ReturnType<typeof CreateAlignedTypedArray>>, any>;
  audioBusAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateAudioBusAsync>> & MeshProps, {
        name: Parameters<typeof CreateAudioBusAsync>[0];
    options: Parameters<typeof CreateAudioBusAsync>[1];
    engine: Parameters<typeof CreateAudioBusAsync>[2];
    
            },ReturnType<typeof CreateAudioBusAsync>>, any>;
  audioEngineAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateAudioEngineAsync>> & MeshProps, {
        options: Parameters<typeof CreateAudioEngineAsync>[0];
    
            },ReturnType<typeof CreateAudioEngineAsync>>, any>;
  box: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateBox>> & MeshProps, {
        name: Parameters<typeof CreateBox>[0];
    options: Parameters<typeof CreateBox>[1];
    scene: Parameters<typeof CreateBox>[2];
    
            },ReturnType<typeof CreateBox>>, any>;
  boxVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateBoxVertexData>> & MeshProps, {
        options: Parameters<typeof CreateBoxVertexData>[0];
    
            },ReturnType<typeof CreateBoxVertexData>>, any>;
  capsule: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCapsule>> & MeshProps, {
        name: Parameters<typeof CreateCapsule>[0];
    options: Parameters<typeof CreateCapsule>[1];
    scene: Parameters<typeof CreateCapsule>[2];
    
            },ReturnType<typeof CreateCapsule>>, any>;
  capsuleVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCapsuleVertexData>> & MeshProps, {
        options: Parameters<typeof CreateCapsuleVertexData>[0];
    
            },ReturnType<typeof CreateCapsuleVertexData>>, any>;
  cylinder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCylinder>> & MeshProps, {
        name: Parameters<typeof CreateCylinder>[0];
    options: Parameters<typeof CreateCylinder>[1];
    scene: Parameters<typeof CreateCylinder>[2];
    
            },ReturnType<typeof CreateCylinder>>, any>;
  cylinderVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateCylinderVertexData>> & MeshProps, {
        options: Parameters<typeof CreateCylinderVertexData>[0];
    
            },ReturnType<typeof CreateCylinderVertexData>>, any>;
  dashedLines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDashedLines>> & MeshProps, {
        name: Parameters<typeof CreateDashedLines>[0];
    options: Parameters<typeof CreateDashedLines>[1];
    scene: Parameters<typeof CreateDashedLines>[2];
    
            },ReturnType<typeof CreateDashedLines>>, any>;
  dashedLinesVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDashedLinesVertexData>> & MeshProps, {
        options: Parameters<typeof CreateDashedLinesVertexData>[0];
    
            },ReturnType<typeof CreateDashedLinesVertexData>>, any>;
  decal: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDecal>> & MeshProps, {
        name: Parameters<typeof CreateDecal>[0];
    sourceMesh: Parameters<typeof CreateDecal>[1];
    options: Parameters<typeof CreateDecal>[2];
    
            },ReturnType<typeof CreateDecal>>, any>;
  decoderAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDecoderAsync>> & MeshProps, {
        header: Parameters<typeof CreateDecoderAsync>[0];
    dataView: Parameters<typeof CreateDecoderAsync>[1];
    offset: Parameters<typeof CreateDecoderAsync>[2];
    outputType: Parameters<typeof CreateDecoderAsync>[3];
    
            },ReturnType<typeof CreateDecoderAsync>>, any>;
  disc: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDisc>> & MeshProps, {
        name: Parameters<typeof CreateDisc>[0];
    options: Parameters<typeof CreateDisc>[1];
    scene: Parameters<typeof CreateDisc>[2];
    
            },ReturnType<typeof CreateDisc>>, any>;
  discVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateDiscVertexData>> & MeshProps, {
        options: Parameters<typeof CreateDiscVertexData>[0];
    
            },ReturnType<typeof CreateDiscVertexData>>, any>;
  envTextureAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateEnvTextureAsync>> & MeshProps, {
        texture: Parameters<typeof CreateEnvTextureAsync>[0];
    options: Parameters<typeof CreateEnvTextureAsync>[1];
    
            },ReturnType<typeof CreateEnvTextureAsync>>, any>;
  geodesic: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGeodesic>> & MeshProps, {
        name: Parameters<typeof CreateGeodesic>[0];
    options: Parameters<typeof CreateGeodesic>[1];
    scene: Parameters<typeof CreateGeodesic>[2];
    
            },ReturnType<typeof CreateGeodesic>>, any>;
  goldberg: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGoldberg>> & MeshProps, {
        name: Parameters<typeof CreateGoldberg>[0];
    options: Parameters<typeof CreateGoldberg>[1];
    scene: Parameters<typeof CreateGoldberg>[2];
    
            },ReturnType<typeof CreateGoldberg>>, any>;
  goldbergVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGoldbergVertexData>> & MeshProps, {
        options: Parameters<typeof CreateGoldbergVertexData>[0];
    goldbergData: Parameters<typeof CreateGoldbergVertexData>[1];
    
            },ReturnType<typeof CreateGoldbergVertexData>>, any>;
  greasedLine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGreasedLine>> & MeshProps, {
        name: Parameters<typeof CreateGreasedLine>[0];
    options: Parameters<typeof CreateGreasedLine>[1];
    materialOptions: Parameters<typeof CreateGreasedLine>[2];
    scene: Parameters<typeof CreateGreasedLine>[3];
    
            },ReturnType<typeof CreateGreasedLine>>, any>;
  greasedLineMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGreasedLineMaterial>> & MeshProps, {
        name: Parameters<typeof CreateGreasedLineMaterial>[0];
    options: Parameters<typeof CreateGreasedLineMaterial>[1];
    scene: Parameters<typeof CreateGreasedLineMaterial>[2];
    
            },ReturnType<typeof CreateGreasedLineMaterial>>, any>;
  ground: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGround>> & MeshProps, {
        name: Parameters<typeof CreateGround>[0];
    options: Parameters<typeof CreateGround>[1];
    scene: Parameters<typeof CreateGround>[2];
    
            },ReturnType<typeof CreateGround>>, any>;
  groundFromHeightMap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundFromHeightMap>> & MeshProps, {
        name: Parameters<typeof CreateGroundFromHeightMap>[0];
    url: Parameters<typeof CreateGroundFromHeightMap>[1];
    options: Parameters<typeof CreateGroundFromHeightMap>[2];
    scene: Parameters<typeof CreateGroundFromHeightMap>[3];
    
            },ReturnType<typeof CreateGroundFromHeightMap>>, any>;
  groundFromHeightMapVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundFromHeightMapVertexData>> & MeshProps, {
        options: Parameters<typeof CreateGroundFromHeightMapVertexData>[0];
    
            },ReturnType<typeof CreateGroundFromHeightMapVertexData>>, any>;
  groundVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateGroundVertexData>> & MeshProps, {
        options: Parameters<typeof CreateGroundVertexData>[0];
    
            },ReturnType<typeof CreateGroundVertexData>>, any>;
  hemisphere: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateHemisphere>> & MeshProps, {
        name: Parameters<typeof CreateHemisphere>[0];
    options: Parameters<typeof CreateHemisphere>[1];
    scene: Parameters<typeof CreateHemisphere>[2];
    
            },ReturnType<typeof CreateHemisphere>>, any>;
  hotSpotQueryForPickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateHotSpotQueryForPickingInfo>> & MeshProps, {
        pickingInfo: Parameters<typeof CreateHotSpotQueryForPickingInfo>[0];
    
            },ReturnType<typeof CreateHotSpotQueryForPickingInfo>>, any>;
  icoSphere: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIcoSphere>> & MeshProps, {
        name: Parameters<typeof CreateIcoSphere>[0];
    options: Parameters<typeof CreateIcoSphere>[1];
    scene: Parameters<typeof CreateIcoSphere>[2];
    
            },ReturnType<typeof CreateIcoSphere>>, any>;
  icoSphereVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIcoSphereVertexData>> & MeshProps, {
        options: Parameters<typeof CreateIcoSphereVertexData>[0];
    
            },ReturnType<typeof CreateIcoSphereVertexData>>, any>;
  imageBitmapFromSource: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateImageBitmapFromSource>> & MeshProps, {
        engine: Parameters<typeof CreateImageBitmapFromSource>[0];
    imageSource: Parameters<typeof CreateImageBitmapFromSource>[1];
    options: Parameters<typeof CreateImageBitmapFromSource>[2];
    
            },ReturnType<typeof CreateImageBitmapFromSource>>, any>;
  irradianceImageDataArrayBufferViews: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateIrradianceImageDataArrayBufferViews>> & MeshProps, {
        data: Parameters<typeof CreateIrradianceImageDataArrayBufferViews>[0];
    info: Parameters<typeof CreateIrradianceImageDataArrayBufferViews>[1];
    
            },ReturnType<typeof CreateIrradianceImageDataArrayBufferViews>>, any>;
  lathe: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLathe>> & MeshProps, {
        name: Parameters<typeof CreateLathe>[0];
    options: Parameters<typeof CreateLathe>[1];
    scene: Parameters<typeof CreateLathe>[2];
    
            },ReturnType<typeof CreateLathe>>, any>;
  lineSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLineSystem>> & MeshProps, {
        name: Parameters<typeof CreateLineSystem>[0];
    options: Parameters<typeof CreateLineSystem>[1];
    scene: Parameters<typeof CreateLineSystem>[2];
    
            },ReturnType<typeof CreateLineSystem>>, any>;
  lineSystemVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLineSystemVertexData>> & MeshProps, {
        options: Parameters<typeof CreateLineSystemVertexData>[0];
    
            },ReturnType<typeof CreateLineSystemVertexData>>, any>;
  lines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateLines>> & MeshProps, {
        name: Parameters<typeof CreateLines>[0];
    options: Parameters<typeof CreateLines>[1];
    scene: Parameters<typeof CreateLines>[2];
    
            },ReturnType<typeof CreateLines>>, any>;
  mainAudioBusAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateMainAudioBusAsync>> & MeshProps, {
        name: Parameters<typeof CreateMainAudioBusAsync>[0];
    options: Parameters<typeof CreateMainAudioBusAsync>[1];
    engine: Parameters<typeof CreateMainAudioBusAsync>[2];
    
            },ReturnType<typeof CreateMainAudioBusAsync>>, any>;
  microphoneSoundSourceAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateMicrophoneSoundSourceAsync>> & MeshProps, {
        name: Parameters<typeof CreateMicrophoneSoundSourceAsync>[0];
    options: Parameters<typeof CreateMicrophoneSoundSourceAsync>[1];
    engine: Parameters<typeof CreateMicrophoneSoundSourceAsync>[2];
    
            },ReturnType<typeof CreateMicrophoneSoundSourceAsync>>, any>;
  createParticleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CreateParticleBlock> & Clonable, {
name: ConstructorParameters<typeof CreateParticleBlock>[0];
    
    },CreateParticleBlock>, any>;
  pickingRay: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRay>> & MeshProps, {
        scene: Parameters<typeof CreatePickingRay>[0];
    x: Parameters<typeof CreatePickingRay>[1];
    y: Parameters<typeof CreatePickingRay>[2];
    world: Parameters<typeof CreatePickingRay>[3];
    camera: Parameters<typeof CreatePickingRay>[4];
    cameraViewSpace: Parameters<typeof CreatePickingRay>[5];
    
            },ReturnType<typeof CreatePickingRay>>, any>;
  pickingRayInCameraSpace: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayInCameraSpace>> & MeshProps, {
        scene: Parameters<typeof CreatePickingRayInCameraSpace>[0];
    x: Parameters<typeof CreatePickingRayInCameraSpace>[1];
    y: Parameters<typeof CreatePickingRayInCameraSpace>[2];
    camera: Parameters<typeof CreatePickingRayInCameraSpace>[3];
    
            },ReturnType<typeof CreatePickingRayInCameraSpace>>, any>;
  pickingRayInCameraSpaceToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayInCameraSpaceToRef>> & MeshProps, {
        scene: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[0];
    x: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[1];
    y: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[2];
    result: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[3];
    camera: Parameters<typeof CreatePickingRayInCameraSpaceToRef>[4];
    
            },ReturnType<typeof CreatePickingRayInCameraSpaceToRef>>, any>;
  pickingRayToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePickingRayToRef>> & MeshProps, {
        scene: Parameters<typeof CreatePickingRayToRef>[0];
    x: Parameters<typeof CreatePickingRayToRef>[1];
    y: Parameters<typeof CreatePickingRayToRef>[2];
    world: Parameters<typeof CreatePickingRayToRef>[3];
    result: Parameters<typeof CreatePickingRayToRef>[4];
    camera: Parameters<typeof CreatePickingRayToRef>[5];
    cameraViewSpace: Parameters<typeof CreatePickingRayToRef>[6];
    enableDistantPicking: Parameters<typeof CreatePickingRayToRef>[7];
    
            },ReturnType<typeof CreatePickingRayToRef>>, any>;
  plane: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePlane>> & MeshProps, {
        name: Parameters<typeof CreatePlane>[0];
    options: Parameters<typeof CreatePlane>[1];
    scene: Parameters<typeof CreatePlane>[2];
    
            },ReturnType<typeof CreatePlane>>, any>;
  planeVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePlaneVertexData>> & MeshProps, {
        options: Parameters<typeof CreatePlaneVertexData>[0];
    
            },ReturnType<typeof CreatePlaneVertexData>>, any>;
  polygon3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolygon>> & MeshProps, {
        name: Parameters<typeof CreatePolygon>[0];
    options: Parameters<typeof CreatePolygon>[1];
    scene: Parameters<typeof CreatePolygon>[2];
    earcutInjection: Parameters<typeof CreatePolygon>[3];
    
            },ReturnType<typeof CreatePolygon>>, any>;
  polygonVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolygonVertexData>> & MeshProps, {
        polygon: Parameters<typeof CreatePolygonVertexData>[0];
    sideOrientation: Parameters<typeof CreatePolygonVertexData>[1];
    fUV: Parameters<typeof CreatePolygonVertexData>[2];
    fColors: Parameters<typeof CreatePolygonVertexData>[3];
    frontUVs: Parameters<typeof CreatePolygonVertexData>[4];
    backUVs: Parameters<typeof CreatePolygonVertexData>[5];
    wrp: Parameters<typeof CreatePolygonVertexData>[6];
    
            },ReturnType<typeof CreatePolygonVertexData>>, any>;
  polyhedron: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolyhedron>> & MeshProps, {
        name: Parameters<typeof CreatePolyhedron>[0];
    options: Parameters<typeof CreatePolyhedron>[1];
    scene: Parameters<typeof CreatePolyhedron>[2];
    
            },ReturnType<typeof CreatePolyhedron>>, any>;
  polyhedronVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreatePolyhedronVertexData>> & MeshProps, {
        options: Parameters<typeof CreatePolyhedronVertexData>[0];
    
            },ReturnType<typeof CreatePolyhedronVertexData>>, any>;
  radianceImageDataArrayBufferViews: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRadianceImageDataArrayBufferViews>> & MeshProps, {
        data: Parameters<typeof CreateRadianceImageDataArrayBufferViews>[0];
    info: Parameters<typeof CreateRadianceImageDataArrayBufferViews>[1];
    
            },ReturnType<typeof CreateRadianceImageDataArrayBufferViews>>, any>;
  resizedCopy: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateResizedCopy>> & MeshProps, {
        texture: Parameters<typeof CreateResizedCopy>[0];
    width: Parameters<typeof CreateResizedCopy>[1];
    height: Parameters<typeof CreateResizedCopy>[2];
    useBilinearMode: Parameters<typeof CreateResizedCopy>[3];
    
            },ReturnType<typeof CreateResizedCopy>>, any>;
  ribbon: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRibbon>> & MeshProps, {
        name: Parameters<typeof CreateRibbon>[0];
    options: Parameters<typeof CreateRibbon>[1];
    scene: Parameters<typeof CreateRibbon>[2];
    
            },ReturnType<typeof CreateRibbon>>, any>;
  ribbonVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateRibbonVertexData>> & MeshProps, {
        options: Parameters<typeof CreateRibbonVertexData>[0];
    
            },ReturnType<typeof CreateRibbonVertexData>>, any>;
  screenshot: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshot>> & MeshProps, {
        engine: Parameters<typeof CreateScreenshot>[0];
    camera: Parameters<typeof CreateScreenshot>[1];
    size: Parameters<typeof CreateScreenshot>[2];
    successCallback: Parameters<typeof CreateScreenshot>[3];
    mimeType: Parameters<typeof CreateScreenshot>[4];
    forceDownload: Parameters<typeof CreateScreenshot>[5];
    quality: Parameters<typeof CreateScreenshot>[6];
    useFill: Parameters<typeof CreateScreenshot>[7];
    
            },ReturnType<typeof CreateScreenshot>>, any>;
  screenshotAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotAsync>> & MeshProps, {
        engine: Parameters<typeof CreateScreenshotAsync>[0];
    camera: Parameters<typeof CreateScreenshotAsync>[1];
    size: Parameters<typeof CreateScreenshotAsync>[2];
    mimeType: Parameters<typeof CreateScreenshotAsync>[3];
    quality: Parameters<typeof CreateScreenshotAsync>[4];
    useFill: Parameters<typeof CreateScreenshotAsync>[5];
    
            },ReturnType<typeof CreateScreenshotAsync>>, any>;
  screenshotUsingRenderTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotUsingRenderTarget>> & MeshProps, {
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
    customDumpData: Parameters<typeof CreateScreenshotUsingRenderTarget>[13];
    
            },ReturnType<typeof CreateScreenshotUsingRenderTarget>>, any>;
  screenshotUsingRenderTargetAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotUsingRenderTargetAsync>> & MeshProps, {
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
    customDumpData: Parameters<typeof CreateScreenshotUsingRenderTargetAsync>[12];
    
            },ReturnType<typeof CreateScreenshotUsingRenderTargetAsync>>, any>;
  screenshotWithResizeAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateScreenshotWithResizeAsync>> & MeshProps, {
        engine: Parameters<typeof CreateScreenshotWithResizeAsync>[0];
    camera: Parameters<typeof CreateScreenshotWithResizeAsync>[1];
    width: Parameters<typeof CreateScreenshotWithResizeAsync>[2];
    height: Parameters<typeof CreateScreenshotWithResizeAsync>[3];
    mimeType: Parameters<typeof CreateScreenshotWithResizeAsync>[4];
    quality: Parameters<typeof CreateScreenshotWithResizeAsync>[5];
    useFill: Parameters<typeof CreateScreenshotWithResizeAsync>[6];
    
            },ReturnType<typeof CreateScreenshotWithResizeAsync>>, any>;
  segmentedBoxVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSegmentedBoxVertexData>> & MeshProps, {
        options: Parameters<typeof CreateSegmentedBoxVertexData>[0];
    
            },ReturnType<typeof CreateSegmentedBoxVertexData>>, any>;
  soundAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSoundAsync>> & MeshProps, {
        name: Parameters<typeof CreateSoundAsync>[0];
    source: Parameters<typeof CreateSoundAsync>[1];
    options: Parameters<typeof CreateSoundAsync>[2];
    engine: Parameters<typeof CreateSoundAsync>[3];
    
            },ReturnType<typeof CreateSoundAsync>>, any>;
  soundBufferAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSoundBufferAsync>> & MeshProps, {
        source: Parameters<typeof CreateSoundBufferAsync>[0];
    options: Parameters<typeof CreateSoundBufferAsync>[1];
    engine: Parameters<typeof CreateSoundBufferAsync>[2];
    
            },ReturnType<typeof CreateSoundBufferAsync>>, any>;
  soundSourceAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSoundSourceAsync>> & MeshProps, {
        name: Parameters<typeof CreateSoundSourceAsync>[0];
    source: Parameters<typeof CreateSoundSourceAsync>[1];
    options: Parameters<typeof CreateSoundSourceAsync>[2];
    engine: Parameters<typeof CreateSoundSourceAsync>[3];
    
            },ReturnType<typeof CreateSoundSourceAsync>>, any>;
  sphere: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSphere>> & MeshProps, {
        name: Parameters<typeof CreateSphere>[0];
    options: Parameters<typeof CreateSphere>[1];
    scene: Parameters<typeof CreateSphere>[2];
    
            },ReturnType<typeof CreateSphere>>, any>;
  sphereVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateSphereVertexData>> & MeshProps, {
        options: Parameters<typeof CreateSphereVertexData>[0];
    
            },ReturnType<typeof CreateSphereVertexData>>, any>;
  streamingSoundAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateStreamingSoundAsync>> & MeshProps, {
        name: Parameters<typeof CreateStreamingSoundAsync>[0];
    source: Parameters<typeof CreateStreamingSoundAsync>[1];
    options: Parameters<typeof CreateStreamingSoundAsync>[2];
    engine: Parameters<typeof CreateStreamingSoundAsync>[3];
    
            },ReturnType<typeof CreateStreamingSoundAsync>>, any>;
  text3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateText>> & MeshProps, {
        name: Parameters<typeof CreateText>[0];
    text: Parameters<typeof CreateText>[1];
    fontData: Parameters<typeof CreateText>[2];
    options: Parameters<typeof CreateText>[3];
    scene: Parameters<typeof CreateText>[4];
    earcutInjection: Parameters<typeof CreateText>[5];
    
            },ReturnType<typeof CreateText>>, any>;
  textShapePaths: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTextShapePaths>> & MeshProps, {
        text: Parameters<typeof CreateTextShapePaths>[0];
    size: Parameters<typeof CreateTextShapePaths>[1];
    resolution: Parameters<typeof CreateTextShapePaths>[2];
    fontData: Parameters<typeof CreateTextShapePaths>[3];
    
            },ReturnType<typeof CreateTextShapePaths>>, any>;
  tiledBox: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledBox>> & MeshProps, {
        name: Parameters<typeof CreateTiledBox>[0];
    options: Parameters<typeof CreateTiledBox>[1];
    scene: Parameters<typeof CreateTiledBox>[2];
    
            },ReturnType<typeof CreateTiledBox>>, any>;
  tiledBoxVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledBoxVertexData>> & MeshProps, {
        options: Parameters<typeof CreateTiledBoxVertexData>[0];
    
            },ReturnType<typeof CreateTiledBoxVertexData>>, any>;
  tiledGround: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledGround>> & MeshProps, {
        name: Parameters<typeof CreateTiledGround>[0];
    options: Parameters<typeof CreateTiledGround>[1];
    scene: Parameters<typeof CreateTiledGround>[2];
    
            },ReturnType<typeof CreateTiledGround>>, any>;
  tiledGroundVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledGroundVertexData>> & MeshProps, {
        options: Parameters<typeof CreateTiledGroundVertexData>[0];
    
            },ReturnType<typeof CreateTiledGroundVertexData>>, any>;
  tiledPlane: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledPlane>> & MeshProps, {
        name: Parameters<typeof CreateTiledPlane>[0];
    options: Parameters<typeof CreateTiledPlane>[1];
    scene: Parameters<typeof CreateTiledPlane>[2];
    
            },ReturnType<typeof CreateTiledPlane>>, any>;
  tiledPlaneVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTiledPlaneVertexData>> & MeshProps, {
        options: Parameters<typeof CreateTiledPlaneVertexData>[0];
    
            },ReturnType<typeof CreateTiledPlaneVertexData>>, any>;
  torus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorus>> & MeshProps, {
        name: Parameters<typeof CreateTorus>[0];
    options: Parameters<typeof CreateTorus>[1];
    scene: Parameters<typeof CreateTorus>[2];
    
            },ReturnType<typeof CreateTorus>>, any>;
  torusKnot: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusKnot>> & MeshProps, {
        name: Parameters<typeof CreateTorusKnot>[0];
    options: Parameters<typeof CreateTorusKnot>[1];
    scene: Parameters<typeof CreateTorusKnot>[2];
    
            },ReturnType<typeof CreateTorusKnot>>, any>;
  torusKnotVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusKnotVertexData>> & MeshProps, {
        options: Parameters<typeof CreateTorusKnotVertexData>[0];
    
            },ReturnType<typeof CreateTorusKnotVertexData>>, any>;
  torusVertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTorusVertexData>> & MeshProps, {
        options: Parameters<typeof CreateTorusVertexData>[0];
    
            },ReturnType<typeof CreateTorusVertexData>>, any>;
  tube: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateTube>> & MeshProps, {
        name: Parameters<typeof CreateTube>[0];
    options: Parameters<typeof CreateTube>[1];
    scene: Parameters<typeof CreateTube>[2];
    
            },ReturnType<typeof CreateTube>>, any>;
  utilityLayerRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof CreateUtilityLayerRenderer>> & MeshProps, {
        frameFraph: Parameters<typeof CreateUtilityLayerRenderer>[0];
    handleEvents: Parameters<typeof CreateUtilityLayerRenderer>[1];
    
            },ReturnType<typeof CreateUtilityLayerRenderer>>, any>;
  crossBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CrossBlock> & Clonable, {
name: ConstructorParameters<typeof CrossBlock>[0];
    
    },CrossBlock>, any>;
  cubeTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CubeTexture> & Clonable, {
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
    
    } & TextureProps,CubeTexture>, any>;
  cubeTextureAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CubeTextureAssetTask>, {
name: ConstructorParameters<typeof CubeTextureAssetTask>[0];
    url: ConstructorParameters<typeof CubeTextureAssetTask>[1];
    extensions: ConstructorParameters<typeof CubeTextureAssetTask>[2];
    noMipmap: ConstructorParameters<typeof CubeTextureAssetTask>[3];
    files: ConstructorParameters<typeof CubeTextureAssetTask>[4];
    prefiltered: ConstructorParameters<typeof CubeTextureAssetTask>[5];
    
    },CubeTextureAssetTask>, any>;
  currentScreenBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CurrentScreenBlock> & Clonable, {
name: ConstructorParameters<typeof CurrentScreenBlock>[0];
    
    },CurrentScreenBlock>, any>;
  curve3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Curve3>, {
points: ConstructorParameters<typeof Curve3>[0];
    
    },Curve3>, any>;
  curveBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CurveBlock> & Clonable, {
name: ConstructorParameters<typeof CurveBlock>[0];
    
    },CurveBlock>, any>;
  customBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomBlock> & Clonable, {
name: ConstructorParameters<typeof CustomBlock>[0];
    
    },CustomBlock>, any>;
  customParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomParticleEmitter> & Clonable, {},CustomParticleEmitter>, any>;
  customProceduralTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomProceduralTexture> & Clonable, {
name: ConstructorParameters<typeof CustomProceduralTexture>[0];
    texturePath: ConstructorParameters<typeof CustomProceduralTexture>[1];
    size: ConstructorParameters<typeof CustomProceduralTexture>[2];
    scene: ConstructorParameters<typeof CustomProceduralTexture>[3];
    fallbackTexture: ConstructorParameters<typeof CustomProceduralTexture>[4];
    generateMipMaps: ConstructorParameters<typeof CustomProceduralTexture>[5];
    skipJson: ConstructorParameters<typeof CustomProceduralTexture>[6];
    
    } & TextureProps,CustomProceduralTexture>, any>;
  customShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CustomShapeBlock> & Clonable, {
name: ConstructorParameters<typeof CustomShapeBlock>[0];
    
    },CustomShapeBlock>, any>;
  cylinderBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderBlock> & Clonable, {
name: ConstructorParameters<typeof CylinderBlock>[0];
    
    },CylinderBlock>, any>;
  cylinderDirectedParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderDirectedParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[0];
    height: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[1];
    radiusRange: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[2];
    direction1: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[3];
    direction2: ConstructorParameters<typeof CylinderDirectedParticleEmitter>[4];
    
    },CylinderDirectedParticleEmitter>, any>;
  cylinderParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof CylinderParticleEmitter>[0];
    height: ConstructorParameters<typeof CylinderParticleEmitter>[1];
    radiusRange: ConstructorParameters<typeof CylinderParticleEmitter>[2];
    directionRandomizer: ConstructorParameters<typeof CylinderParticleEmitter>[3];
    
    },CylinderParticleEmitter>, any>;
  cylinderShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderShapeBlock> & Clonable, {
name: ConstructorParameters<typeof CylinderShapeBlock>[0];
    
    },CylinderShapeBlock>, any>;
  dataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataBuffer>, {},DataBuffer>, any>;
  dataReader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DataReader>, {
buffer: ConstructorParameters<typeof DataReader>[0];
    
    },DataReader>, any>;
  database: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Database>, {
urlToScene: ConstructorParameters<typeof Database>[0];
    callbackManifestChecked: ConstructorParameters<typeof Database>[1];
    disableManifestCheck: ConstructorParameters<typeof Database>[2];
    
    },Database>, any>;
  debugBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DebugBlock> & Clonable, {
name: ConstructorParameters<typeof DebugBlock>[0];
    
    },DebugBlock>, any>;
  debugLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DebugLayer>, {
scene: ConstructorParameters<typeof DebugLayer>[0];
    
    },DebugLayer>, any>;
  decalMapConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DecalMapConfiguration>, {
material: ConstructorParameters<typeof DecalMapConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof DecalMapConfiguration>[1];
    
    },DecalMapConfiguration>, any>;
  decalMapDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DecalMapDefines>, {},DecalMapDefines>, any>;
  decode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Decode>> & MeshProps, {},ReturnType<typeof Decode>>, any>;
  decodeBase64ToBinary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64ToBinary>> & MeshProps, {},ReturnType<typeof DecodeBase64ToBinary>>, any>;
  decodeBase64ToString: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64ToString>> & MeshProps, {},ReturnType<typeof DecodeBase64ToString>>, any>;
  decodeBase64UrlToBinary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64UrlToBinary>> & MeshProps, {
        uri: Parameters<typeof DecodeBase64UrlToBinary>[0];
    
            },ReturnType<typeof DecodeBase64UrlToBinary>>, any>;
  decodeBase64UrlToString: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeBase64UrlToString>> & MeshProps, {},ReturnType<typeof DecodeBase64UrlToString>>, any>;
  decodeFloat32: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeFloat32>> & MeshProps, {
        dataView: Parameters<typeof DecodeFloat32>[0];
    offset: Parameters<typeof DecodeFloat32>[1];
    
            },ReturnType<typeof DecodeFloat32>>, any>;
  decodeRunLength: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof DecodeRunLength>> & MeshProps, {
        source: Parameters<typeof DecodeRunLength>[0];
    
            },ReturnType<typeof DecodeRunLength>>, any>;
  defaultCollisionCoordinator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultCollisionCoordinator>, {},DefaultCollisionCoordinator>, any>;
  defaultKTX2DecoderOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultKTX2DecoderOptions>, {},DefaultKTX2DecoderOptions>, any>;
  defaultLoadingScreen: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultLoadingScreen>, {
_renderingCanvas: ConstructorParameters<typeof DefaultLoadingScreen>[0];
    _loadingText: ConstructorParameters<typeof DefaultLoadingScreen>[1];
    _loadingDivBackgroundColor: ConstructorParameters<typeof DefaultLoadingScreen>[2];
    
    },DefaultLoadingScreen>, any>;
  defaultRenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultRenderingPipeline>, {
name: ConstructorParameters<typeof DefaultRenderingPipeline>[0];
    hdr: ConstructorParameters<typeof DefaultRenderingPipeline>[1];
    scene: ConstructorParameters<typeof DefaultRenderingPipeline>[2];
    cameras: ConstructorParameters<typeof DefaultRenderingPipeline>[3];
    automaticBuild: ConstructorParameters<typeof DefaultRenderingPipeline>[4];
    
    },DefaultRenderingPipeline>, any>;
  deferred: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Deferred>, {},Deferred>, any>;
  depthCullingState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthCullingState>, {
reset: ConstructorParameters<typeof DepthCullingState>[0];
    
    },DepthCullingState>, any>;
  depthOfFieldBlurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthOfFieldBlurPostProcess> & Clonable, {
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
    
    },DepthOfFieldBlurPostProcess>, any>;
  depthOfFieldEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthOfFieldEffect>, {
sceneOrEngine: ConstructorParameters<typeof DepthOfFieldEffect>[0];
    depthTexture: ConstructorParameters<typeof DepthOfFieldEffect>[1];
    blurLevel: ConstructorParameters<typeof DepthOfFieldEffect>[2];
    pipelineTextureType: ConstructorParameters<typeof DepthOfFieldEffect>[3];
    blockCompilation: ConstructorParameters<typeof DepthOfFieldEffect>[4];
    depthNotNormalized: ConstructorParameters<typeof DepthOfFieldEffect>[5];
    
    },DepthOfFieldEffect>, any>;
  depthOfFieldMergePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthOfFieldMergePostProcess> & Clonable, {
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
    
    },DepthOfFieldMergePostProcess>, any>;
  depthPeelingRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthPeelingRenderer>, {
scene: ConstructorParameters<typeof DepthPeelingRenderer>[0];
    passCount: ConstructorParameters<typeof DepthPeelingRenderer>[1];
    
    },DepthPeelingRenderer>, any>;
  depthPeelingSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthPeelingSceneComponent>, {
scene: ConstructorParameters<typeof DepthPeelingSceneComponent>[0];
    
    },DepthPeelingSceneComponent>, any>;
  depthReducer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthReducer>, {
camera: ConstructorParameters<typeof DepthReducer>[0];
    
    },DepthReducer>, any>;
  depthRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthRenderer>, {
scene: ConstructorParameters<typeof DepthRenderer>[0];
    type: ConstructorParameters<typeof DepthRenderer>[1];
    camera: ConstructorParameters<typeof DepthRenderer>[2];
    storeNonLinearDepth: ConstructorParameters<typeof DepthRenderer>[3];
    samplingMode: ConstructorParameters<typeof DepthRenderer>[4];
    storeCameraSpaceZ: ConstructorParameters<typeof DepthRenderer>[5];
    name: ConstructorParameters<typeof DepthRenderer>[6];
    
    },DepthRenderer>, any>;
  depthRendererSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthRendererSceneComponent>, {
scene: ConstructorParameters<typeof DepthRendererSceneComponent>[0];
    
    },DepthRendererSceneComponent>, any>;
  depthSortedParticle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthSortedParticle>, {
idx: ConstructorParameters<typeof DepthSortedParticle>[0];
    ind: ConstructorParameters<typeof DepthSortedParticle>[1];
    indLength: ConstructorParameters<typeof DepthSortedParticle>[2];
    materialIndex: ConstructorParameters<typeof DepthSortedParticle>[3];
    
    },DepthSortedParticle>, any>;
  depthSourceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DepthSourceBlock> & Clonable, {
name: ConstructorParameters<typeof DepthSourceBlock>[0];
    
    },DepthSourceBlock>, any>;
  derivativeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DerivativeBlock> & Clonable, {
name: ConstructorParameters<typeof DerivativeBlock>[0];
    
    },DerivativeBlock>, any>;
  desaturateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DesaturateBlock> & Clonable, {
name: ConstructorParameters<typeof DesaturateBlock>[0];
    
    },DesaturateBlock>, any>;
  detailMapConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DetailMapConfiguration>, {
material: ConstructorParameters<typeof DetailMapConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof DetailMapConfiguration>[1];
    
    },DetailMapConfiguration>, any>;
  deviceOrientationCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DeviceOrientationCamera> & Clonable, {
name: ConstructorParameters<typeof DeviceOrientationCamera>[0];
    position: ConstructorParameters<typeof DeviceOrientationCamera>[1];
    scene: ConstructorParameters<typeof DeviceOrientationCamera>[2];
    
    } & CameraProps,DeviceOrientationCamera>, any>;
  deviceSource: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DeviceSource>, {
deviceInputSystem: ConstructorParameters<typeof DeviceSource>[0];
    deviceType: ConstructorParameters<typeof DeviceSource>[1];
    deviceSlot: ConstructorParameters<typeof DeviceSource>[2];
    
    },DeviceSource>, any>;
  deviceSourceManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DeviceSourceManager>, {
engine: ConstructorParameters<typeof DeviceSourceManager>[0];
    
    },DeviceSourceManager>, any>;
  directionalLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DirectionalLight> & Clonable, {
name: ConstructorParameters<typeof DirectionalLight>[0];
    direction: ConstructorParameters<typeof DirectionalLight>[1];
    scene: ConstructorParameters<typeof DirectionalLight>[2];
    
    },DirectionalLight>, any>;
  directionalLightFrustumViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DirectionalLightFrustumViewer>, {
light: ConstructorParameters<typeof DirectionalLightFrustumViewer>[0];
    camera: ConstructorParameters<typeof DirectionalLightFrustumViewer>[1];
    
    },DirectionalLightFrustumViewer>, any>;
  discBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DiscBlock> & Clonable, {
name: ConstructorParameters<typeof DiscBlock>[0];
    
    },DiscBlock>, any>;
  discardBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DiscardBlock> & Clonable, {
name: ConstructorParameters<typeof DiscardBlock>[0];
    
    },DiscardBlock>, any>;
  displayPassPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DisplayPassPostProcess> & Clonable, {
name: ConstructorParameters<typeof DisplayPassPostProcess>[0];
    options: ConstructorParameters<typeof DisplayPassPostProcess>[1];
    camera: ConstructorParameters<typeof DisplayPassPostProcess>[2];
    samplingMode: ConstructorParameters<typeof DisplayPassPostProcess>[3];
    engine: ConstructorParameters<typeof DisplayPassPostProcess>[4];
    reusable: ConstructorParameters<typeof DisplayPassPostProcess>[5];
    
    },DisplayPassPostProcess>, any>;
  distanceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DistanceBlock> & Clonable, {
name: ConstructorParameters<typeof DistanceBlock>[0];
    
    },DistanceBlock>, any>;
  distanceConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DistanceConstraint>, {
maxDistance: ConstructorParameters<typeof DistanceConstraint>[0];
    scene: ConstructorParameters<typeof DistanceConstraint>[1];
    
    },DistanceConstraint>, any>;
  distanceJoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DistanceJoint>, {
jointData: ConstructorParameters<typeof DistanceJoint>[0];
    
    },DistanceJoint>, any>;
  divideBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DivideBlock> & Clonable, {
name: ConstructorParameters<typeof DivideBlock>[0];
    
    },DivideBlock>, any>;
  doNothingAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DoNothingAction>, {
triggerOptions: ConstructorParameters<typeof DoNothingAction>[0];
    condition: ConstructorParameters<typeof DoNothingAction>[1];
    
    },DoNothingAction>, any>;
  dotBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DotBlock> & Clonable, {
name: ConstructorParameters<typeof DotBlock>[0];
    
    },DotBlock>, any>;
  dracoCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DracoCompression>, {
numWorkersOrOptions: ConstructorParameters<typeof DracoCompression>[0];
    
    },DracoCompression>, any>;
  dracoDecoder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DracoDecoder>, {
configuration: ConstructorParameters<typeof DracoDecoder>[0];
    
    },DracoDecoder>, any>;
  dracoEncoder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DracoEncoder>, {
configuration: ConstructorParameters<typeof DracoEncoder>[0];
    
    },DracoEncoder>, any>;
  drawWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DrawWrapper>, {
engine: ConstructorParameters<typeof DrawWrapper>[0];
    createMaterialContext: ConstructorParameters<typeof DrawWrapper>[1];
    
    },DrawWrapper>, any>;
  dualShockPad: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DualShockPad>, {
id: ConstructorParameters<typeof DualShockPad>[0];
    index: ConstructorParameters<typeof DualShockPad>[1];
    gamepad: ConstructorParameters<typeof DualShockPad>[2];
    
    },DualShockPad>, any>;
  dynamicFloat32Array: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DynamicFloat32Array>, {
itemCapacity: ConstructorParameters<typeof DynamicFloat32Array>[0];
    
    },DynamicFloat32Array>, any>;
  dynamicTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DynamicTexture> & Clonable, {
name: ConstructorParameters<typeof DynamicTexture>[0];
    canvasOrSize: ConstructorParameters<typeof DynamicTexture>[1];
    sceneOrOptions: ConstructorParameters<typeof DynamicTexture>[2];
    generateMipMaps: ConstructorParameters<typeof DynamicTexture>[3];
    samplingMode: ConstructorParameters<typeof DynamicTexture>[4];
    format: ConstructorParameters<typeof DynamicTexture>[5];
    invertY: ConstructorParameters<typeof DynamicTexture>[6];
    
    } & TextureProps,DynamicTexture>, any>;
  easingFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EasingFunction>, {},EasingFunction>, any>;
  edgesRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EdgesRenderer>, {
source: ConstructorParameters<typeof EdgesRenderer>[0];
    epsilon: ConstructorParameters<typeof EdgesRenderer>[1];
    checkVerticesInsteadOfIndices: ConstructorParameters<typeof EdgesRenderer>[2];
    generateEdgesLines: ConstructorParameters<typeof EdgesRenderer>[3];
    options: ConstructorParameters<typeof EdgesRenderer>[4];
    
    },EdgesRenderer>, any>;
  effect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Effect>, {
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
    
    },Effect>, any>;
  effectFallbacks: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectFallbacks>, {},EffectFallbacks>, any>;
  effectLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectLayer>, {
name: ConstructorParameters<typeof EffectLayer>[0];
    scene: ConstructorParameters<typeof EffectLayer>[1];
    forceGLSL: ConstructorParameters<typeof EffectLayer>[2];
    thinEffectLayer: ConstructorParameters<typeof EffectLayer>[3];
    
    },EffectLayer>, any>;
  effectLayerSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectLayerSceneComponent>, {
scene: ConstructorParameters<typeof EffectLayerSceneComponent>[0];
    
    },EffectLayerSceneComponent>, any>;
  effectRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectRenderer>, {
engine: ConstructorParameters<typeof EffectRenderer>[0];
    options: ConstructorParameters<typeof EffectRenderer>[1];
    
    },EffectRenderer>, any>;
  effectWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EffectWrapper>, {
creationOptions: ConstructorParameters<typeof EffectWrapper>[0];
    
    },EffectWrapper>, any>;
  elasticEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ElasticEase>, {
oscillations: ConstructorParameters<typeof ElasticEase>[0];
    springiness: ConstructorParameters<typeof ElasticEase>[1];
    
    },ElasticEase>, any>;
  elbowBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ElbowBlock> & Clonable, {
name: ConstructorParameters<typeof ElbowBlock>[0];
    
    },ElbowBlock>, any>;
  encodeArrayBufferToBase64: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof EncodeArrayBufferToBase64>> & MeshProps, {},ReturnType<typeof EncodeArrayBufferToBase64>>, any>;
  endsWith: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof EndsWith>> & MeshProps, {},ReturnType<typeof EndsWith>>, any>;
  engine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Engine>, {
canvasOrContext: ConstructorParameters<typeof Engine>[0];
    antialias: ConstructorParameters<typeof Engine>[1];
    options: ConstructorParameters<typeof Engine>[2];
    adaptToDeviceRatio: ConstructorParameters<typeof Engine>[3];
    
    },Engine>, any>;
  engineInstrumentation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EngineInstrumentation>, {
engine: ConstructorParameters<typeof EngineInstrumentation>[0];
    
    },EngineInstrumentation>, any>;
  enumerateFloatValues: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof EnumerateFloatValues>> & MeshProps, {
        data: Parameters<typeof EnumerateFloatValues>[0];
    byteOffset: Parameters<typeof EnumerateFloatValues>[1];
    byteStride: Parameters<typeof EnumerateFloatValues>[2];
    componentCount: Parameters<typeof EnumerateFloatValues>[3];
    componentType: Parameters<typeof EnumerateFloatValues>[4];
    count: Parameters<typeof EnumerateFloatValues>[5];
    normalized: Parameters<typeof EnumerateFloatValues>[6];
    callback: Parameters<typeof EnumerateFloatValues>[7];
    
            },ReturnType<typeof EnumerateFloatValues>>, any>;
  environmentHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EnvironmentHelper>, {
options: ConstructorParameters<typeof EnvironmentHelper>[0];
    scene: ConstructorParameters<typeof EnvironmentHelper>[1];
    
    },EnvironmentHelper>, any>;
  equiRectangularCubeTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EquiRectangularCubeTexture> & Clonable, {
url: ConstructorParameters<typeof EquiRectangularCubeTexture>[0];
    scene: ConstructorParameters<typeof EquiRectangularCubeTexture>[1];
    size: ConstructorParameters<typeof EquiRectangularCubeTexture>[2];
    noMipmap: ConstructorParameters<typeof EquiRectangularCubeTexture>[3];
    gammaSpace: ConstructorParameters<typeof EquiRectangularCubeTexture>[4];
    onLoad: ConstructorParameters<typeof EquiRectangularCubeTexture>[5];
    onError: ConstructorParameters<typeof EquiRectangularCubeTexture>[6];
    supersample: ConstructorParameters<typeof EquiRectangularCubeTexture>[7];
    
    } & TextureProps,EquiRectangularCubeTexture>, any>;
  equiRectangularCubeTextureAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EquiRectangularCubeTextureAssetTask>, {
name: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[0];
    url: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[1];
    size: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[2];
    noMipmap: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[3];
    gammaSpace: ConstructorParameters<typeof EquiRectangularCubeTextureAssetTask>[4];
    
    },EquiRectangularCubeTextureAssetTask>, any>;
  eventState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<EventState>, {
mask: ConstructorParameters<typeof EventState>[0];
    skipNextObservers: ConstructorParameters<typeof EventState>[1];
    target: ConstructorParameters<typeof EventState>[2];
    currentTarget: ConstructorParameters<typeof EventState>[3];
    
    },EventState>, any>;
  executeCodeAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ExecuteCodeAction>, {
triggerOptions: ConstructorParameters<typeof ExecuteCodeAction>[0];
    func: ConstructorParameters<typeof ExecuteCodeAction>[1];
    condition: ConstructorParameters<typeof ExecuteCodeAction>[2];
    
    },ExecuteCodeAction>, any>;
  exitFullscreen: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ExitFullscreen>> & MeshProps, {},ReturnType<typeof ExitFullscreen>>, any>;
  exitPointerlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ExitPointerlock>> & MeshProps, {},ReturnType<typeof ExitPointerlock>>, any>;
  exponentialEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ExponentialEase>, {
exponent: ConstructorParameters<typeof ExponentialEase>[0];
    
    },ExponentialEase>, any>;
  externalTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ExternalTexture>, {
video: ConstructorParameters<typeof ExternalTexture>[0];
    
    },ExternalTexture>, any>;
  extractHighlightsPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ExtractHighlightsPostProcess> & Clonable, {
name: ConstructorParameters<typeof ExtractHighlightsPostProcess>[0];
    options: ConstructorParameters<typeof ExtractHighlightsPostProcess>[1];
    camera: ConstructorParameters<typeof ExtractHighlightsPostProcess>[2];
    samplingMode: ConstructorParameters<typeof ExtractHighlightsPostProcess>[3];
    engine: ConstructorParameters<typeof ExtractHighlightsPostProcess>[4];
    reusable: ConstructorParameters<typeof ExtractHighlightsPostProcess>[5];
    textureType: ConstructorParameters<typeof ExtractHighlightsPostProcess>[6];
    blockCompilation: ConstructorParameters<typeof ExtractHighlightsPostProcess>[7];
    
    },ExtractHighlightsPostProcess>, any>;
  extrudePolygon: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudePolygon>> & MeshProps, {
        name: Parameters<typeof ExtrudePolygon>[0];
    options: Parameters<typeof ExtrudePolygon>[1];
    scene: Parameters<typeof ExtrudePolygon>[2];
    earcutInjection: Parameters<typeof ExtrudePolygon>[3];
    
            },ReturnType<typeof ExtrudePolygon>>, any>;
  extrudeShape: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShape>> & MeshProps, {
        name: Parameters<typeof ExtrudeShape>[0];
    options: Parameters<typeof ExtrudeShape>[1];
    scene: Parameters<typeof ExtrudeShape>[2];
    
            },ReturnType<typeof ExtrudeShape>>, any>;
  extrudeShapeCustom: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ExtrudeShapeCustom>> & MeshProps, {
        name: Parameters<typeof ExtrudeShapeCustom>[0];
    options: Parameters<typeof ExtrudeShapeCustom>[1];
    scene: Parameters<typeof ExtrudeShapeCustom>[2];
    
            },ReturnType<typeof ExtrudeShapeCustom>>, any>;
  factorGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FactorGradient>, {
gradient: ConstructorParameters<typeof FactorGradient>[0];
    factor1: ConstructorParameters<typeof FactorGradient>[1];
    factor2: ConstructorParameters<typeof FactorGradient>[2];
    
    },FactorGradient>, any>;
  fadeInOutBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FadeInOutBehavior>, {},FadeInOutBehavior>, any>;
  filesInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FilesInput>, {
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
    
    },FilesInput>, any>;
  filterPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FilterPostProcess> & Clonable, {
name: ConstructorParameters<typeof FilterPostProcess>[0];
    kernelMatrix: ConstructorParameters<typeof FilterPostProcess>[1];
    options: ConstructorParameters<typeof FilterPostProcess>[2];
    camera: ConstructorParameters<typeof FilterPostProcess>[3];
    samplingMode: ConstructorParameters<typeof FilterPostProcess>[4];
    engine: ConstructorParameters<typeof FilterPostProcess>[5];
    reusable: ConstructorParameters<typeof FilterPostProcess>[6];
    
    },FilterPostProcess>, any>;
  findMainCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof FindMainCamera>> & MeshProps, {
        frameGraph: Parameters<typeof FindMainCamera>[0];
    
            },ReturnType<typeof FindMainCamera>>, any>;
  findMainObjectRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof FindMainObjectRenderer>> & MeshProps, {
        frameGraph: Parameters<typeof FindMainObjectRenderer>[0];
    
            },ReturnType<typeof FindMainObjectRenderer>>, any>;
  fixFlippedFaces: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof FixFlippedFaces>> & MeshProps, {
        positions: Parameters<typeof FixFlippedFaces>[0];
    indices: Parameters<typeof FixFlippedFaces>[1];
    
            },ReturnType<typeof FixFlippedFaces>>, any>;
  flowGraph: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraph>, {
params: ConstructorParameters<typeof FlowGraph>[0];
    
    },FlowGraph>, any>;
  flowGraphAbsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAbsBlock>, {
config: ConstructorParameters<typeof FlowGraphAbsBlock>[0];
    
    },FlowGraphAbsBlock>, any>;
  flowGraphAcosBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAcosBlock>, {
config: ConstructorParameters<typeof FlowGraphAcosBlock>[0];
    
    },FlowGraphAcosBlock>, any>;
  flowGraphAcoshBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAcoshBlock>, {
config: ConstructorParameters<typeof FlowGraphAcoshBlock>[0];
    
    },FlowGraphAcoshBlock>, any>;
  flowGraphAddBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAddBlock>, {
config: ConstructorParameters<typeof FlowGraphAddBlock>[0];
    
    },FlowGraphAddBlock>, any>;
  flowGraphAngleBetweenBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAngleBetweenBlock>, {
config: ConstructorParameters<typeof FlowGraphAngleBetweenBlock>[0];
    
    },FlowGraphAngleBetweenBlock>, any>;
  flowGraphArrayIndexBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphArrayIndexBlock>, {
config: ConstructorParameters<typeof FlowGraphArrayIndexBlock>[0];
    
    },FlowGraphArrayIndexBlock>, any>;
  flowGraphAsinBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAsinBlock>, {
config: ConstructorParameters<typeof FlowGraphAsinBlock>[0];
    
    },FlowGraphAsinBlock>, any>;
  flowGraphAsinhBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAsinhBlock>, {
config: ConstructorParameters<typeof FlowGraphAsinhBlock>[0];
    
    },FlowGraphAsinhBlock>, any>;
  flowGraphAtan2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAtan2Block>, {
config: ConstructorParameters<typeof FlowGraphAtan2Block>[0];
    
    },FlowGraphAtan2Block>, any>;
  flowGraphAtanBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAtanBlock>, {
config: ConstructorParameters<typeof FlowGraphAtanBlock>[0];
    
    },FlowGraphAtanBlock>, any>;
  flowGraphAtanhBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAtanhBlock>, {
config: ConstructorParameters<typeof FlowGraphAtanhBlock>[0];
    
    },FlowGraphAtanhBlock>, any>;
  flowGraphAxisAngleFromQuaternionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphAxisAngleFromQuaternionBlock>, {
config: ConstructorParameters<typeof FlowGraphAxisAngleFromQuaternionBlock>[0];
    
    },FlowGraphAxisAngleFromQuaternionBlock>, any>;
  flowGraphBezierCurveEasingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBezierCurveEasingBlock>, {
config: ConstructorParameters<typeof FlowGraphBezierCurveEasingBlock>[0];
    
    },FlowGraphBezierCurveEasingBlock>, any>;
  flowGraphBitwiseAndBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseAndBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseAndBlock>[0];
    
    },FlowGraphBitwiseAndBlock>, any>;
  flowGraphBitwiseLeftShiftBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseLeftShiftBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseLeftShiftBlock>[0];
    
    },FlowGraphBitwiseLeftShiftBlock>, any>;
  flowGraphBitwiseNotBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseNotBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseNotBlock>[0];
    
    },FlowGraphBitwiseNotBlock>, any>;
  flowGraphBitwiseOrBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseOrBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseOrBlock>[0];
    
    },FlowGraphBitwiseOrBlock>, any>;
  flowGraphBitwiseRightShiftBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseRightShiftBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseRightShiftBlock>[0];
    
    },FlowGraphBitwiseRightShiftBlock>, any>;
  flowGraphBitwiseXorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBitwiseXorBlock>, {
config: ConstructorParameters<typeof FlowGraphBitwiseXorBlock>[0];
    
    },FlowGraphBitwiseXorBlock>, any>;
  flowGraphBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBlock>, {
config: ConstructorParameters<typeof FlowGraphBlock>[0];
    
    },FlowGraphBlock>, any>;
  flowGraphBooleanToFloat: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBooleanToFloat>, {
config: ConstructorParameters<typeof FlowGraphBooleanToFloat>[0];
    
    },FlowGraphBooleanToFloat>, any>;
  flowGraphBooleanToInt: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBooleanToInt>, {
config: ConstructorParameters<typeof FlowGraphBooleanToInt>[0];
    
    },FlowGraphBooleanToInt>, any>;
  flowGraphBranchBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphBranchBlock>, {
config: ConstructorParameters<typeof FlowGraphBranchBlock>[0];
    
    },FlowGraphBranchBlock>, any>;
  flowGraphCallCounterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCallCounterBlock>, {
config: ConstructorParameters<typeof FlowGraphCallCounterBlock>[0];
    
    },FlowGraphCallCounterBlock>, any>;
  flowGraphCancelDelayBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCancelDelayBlock>, {
config: ConstructorParameters<typeof FlowGraphCancelDelayBlock>[0];
    
    },FlowGraphCancelDelayBlock>, any>;
  flowGraphCeilBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCeilBlock>, {
config: ConstructorParameters<typeof FlowGraphCeilBlock>[0];
    
    },FlowGraphCeilBlock>, any>;
  flowGraphClampBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphClampBlock>, {
config: ConstructorParameters<typeof FlowGraphClampBlock>[0];
    
    },FlowGraphClampBlock>, any>;
  flowGraphCodeExecutionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCodeExecutionBlock>, {
config: ConstructorParameters<typeof FlowGraphCodeExecutionBlock>[0];
    
    },FlowGraphCodeExecutionBlock>, any>;
  flowGraphCombineMatrix2DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineMatrix2DBlock>, {
config: ConstructorParameters<typeof FlowGraphCombineMatrix2DBlock>[0];
    
    },FlowGraphCombineMatrix2DBlock>, any>;
  flowGraphCombineMatrix3DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineMatrix3DBlock>, {
config: ConstructorParameters<typeof FlowGraphCombineMatrix3DBlock>[0];
    
    },FlowGraphCombineMatrix3DBlock>, any>;
  flowGraphCombineMatrixBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineMatrixBlock>, {
config: ConstructorParameters<typeof FlowGraphCombineMatrixBlock>[0];
    
    },FlowGraphCombineMatrixBlock>, any>;
  flowGraphCombineVector2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineVector2Block>, {
config: ConstructorParameters<typeof FlowGraphCombineVector2Block>[0];
    
    },FlowGraphCombineVector2Block>, any>;
  flowGraphCombineVector3Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineVector3Block>, {
config: ConstructorParameters<typeof FlowGraphCombineVector3Block>[0];
    
    },FlowGraphCombineVector3Block>, any>;
  flowGraphCombineVector4Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCombineVector4Block>, {
config: ConstructorParameters<typeof FlowGraphCombineVector4Block>[0];
    
    },FlowGraphCombineVector4Block>, any>;
  flowGraphConditionalDataBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphConditionalDataBlock>, {
config: ConstructorParameters<typeof FlowGraphConditionalDataBlock>[0];
    
    },FlowGraphConditionalDataBlock>, any>;
  flowGraphConjugateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphConjugateBlock>, {
config: ConstructorParameters<typeof FlowGraphConjugateBlock>[0];
    
    },FlowGraphConjugateBlock>, any>;
  flowGraphConnection: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphConnection>, {
name: ConstructorParameters<typeof FlowGraphConnection>[0];
    _connectionType: ConstructorParameters<typeof FlowGraphConnection>[1];
    _ownerBlock: ConstructorParameters<typeof FlowGraphConnection>[2];
    
    },FlowGraphConnection>, any>;
  flowGraphConsoleLogBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphConsoleLogBlock>, {
config: ConstructorParameters<typeof FlowGraphConsoleLogBlock>[0];
    
    },FlowGraphConsoleLogBlock>, any>;
  flowGraphConstantBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphConstantBlock>, {
config: ConstructorParameters<typeof FlowGraphConstantBlock>[0];
    
    },FlowGraphConstantBlock>, any>;
  flowGraphContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphContext>, {
params: ConstructorParameters<typeof FlowGraphContext>[0];
    
    },FlowGraphContext>, any>;
  flowGraphContextBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphContextBlock>, {
config: ConstructorParameters<typeof FlowGraphContextBlock>[0];
    
    },FlowGraphContextBlock>, any>;
  flowGraphCoordinator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCoordinator>, {
config: ConstructorParameters<typeof FlowGraphCoordinator>[0];
    
    },FlowGraphCoordinator>, any>;
  flowGraphCosBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCosBlock>, {
config: ConstructorParameters<typeof FlowGraphCosBlock>[0];
    
    },FlowGraphCosBlock>, any>;
  flowGraphCoshBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCoshBlock>, {
config: ConstructorParameters<typeof FlowGraphCoshBlock>[0];
    
    },FlowGraphCoshBlock>, any>;
  flowGraphCrossBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCrossBlock>, {
config: ConstructorParameters<typeof FlowGraphCrossBlock>[0];
    
    },FlowGraphCrossBlock>, any>;
  flowGraphCubeRootBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphCubeRootBlock>, {
config: ConstructorParameters<typeof FlowGraphCubeRootBlock>[0];
    
    },FlowGraphCubeRootBlock>, any>;
  flowGraphDataConnection: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDataConnection>, {
name: ConstructorParameters<typeof FlowGraphDataConnection>[0];
    connectionType: ConstructorParameters<typeof FlowGraphDataConnection>[1];
    ownerBlock: ConstructorParameters<typeof FlowGraphDataConnection>[2];
    richType: ConstructorParameters<typeof FlowGraphDataConnection>[3];
    _defaultValue: ConstructorParameters<typeof FlowGraphDataConnection>[4];
    _optional: ConstructorParameters<typeof FlowGraphDataConnection>[5];
    
    },FlowGraphDataConnection>, any>;
  flowGraphDataSwitchBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDataSwitchBlock>, {
config: ConstructorParameters<typeof FlowGraphDataSwitchBlock>[0];
    
    },FlowGraphDataSwitchBlock>, any>;
  flowGraphDebounceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDebounceBlock>, {
config: ConstructorParameters<typeof FlowGraphDebounceBlock>[0];
    
    },FlowGraphDebounceBlock>, any>;
  flowGraphDegToRadBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDegToRadBlock>, {
config: ConstructorParameters<typeof FlowGraphDegToRadBlock>[0];
    
    },FlowGraphDegToRadBlock>, any>;
  flowGraphDeterminantBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDeterminantBlock>, {
config: ConstructorParameters<typeof FlowGraphDeterminantBlock>[0];
    
    },FlowGraphDeterminantBlock>, any>;
  flowGraphDivideBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDivideBlock>, {
config: ConstructorParameters<typeof FlowGraphDivideBlock>[0];
    
    },FlowGraphDivideBlock>, any>;
  flowGraphDoNBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDoNBlock>, {
config: ConstructorParameters<typeof FlowGraphDoNBlock>[0];
    
    },FlowGraphDoNBlock>, any>;
  flowGraphDotBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphDotBlock>, {
config: ConstructorParameters<typeof FlowGraphDotBlock>[0];
    
    },FlowGraphDotBlock>, any>;
  flowGraphEBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphEBlock>, {
config: ConstructorParameters<typeof FlowGraphEBlock>[0];
    
    },FlowGraphEBlock>, any>;
  flowGraphEasingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphEasingBlock>, {
config: ConstructorParameters<typeof FlowGraphEasingBlock>[0];
    
    },FlowGraphEasingBlock>, any>;
  flowGraphEqualityBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphEqualityBlock>, {
config: ConstructorParameters<typeof FlowGraphEqualityBlock>[0];
    
    },FlowGraphEqualityBlock>, any>;
  flowGraphEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphEventBlock>, {},FlowGraphEventBlock>, any>;
  flowGraphExecutionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExecutionBlock>, {
config: ConstructorParameters<typeof FlowGraphExecutionBlock>[0];
    
    },FlowGraphExecutionBlock>, any>;
  flowGraphExpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExpBlock>, {
config: ConstructorParameters<typeof FlowGraphExpBlock>[0];
    
    },FlowGraphExpBlock>, any>;
  flowGraphExtractMatrix2DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractMatrix2DBlock>, {
config: ConstructorParameters<typeof FlowGraphExtractMatrix2DBlock>[0];
    
    },FlowGraphExtractMatrix2DBlock>, any>;
  flowGraphExtractMatrix3DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractMatrix3DBlock>, {
config: ConstructorParameters<typeof FlowGraphExtractMatrix3DBlock>[0];
    
    },FlowGraphExtractMatrix3DBlock>, any>;
  flowGraphExtractMatrixBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractMatrixBlock>, {
config: ConstructorParameters<typeof FlowGraphExtractMatrixBlock>[0];
    
    },FlowGraphExtractMatrixBlock>, any>;
  flowGraphExtractVector2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractVector2Block>, {
config: ConstructorParameters<typeof FlowGraphExtractVector2Block>[0];
    
    },FlowGraphExtractVector2Block>, any>;
  flowGraphExtractVector3Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractVector3Block>, {
config: ConstructorParameters<typeof FlowGraphExtractVector3Block>[0];
    
    },FlowGraphExtractVector3Block>, any>;
  flowGraphExtractVector4Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphExtractVector4Block>, {
config: ConstructorParameters<typeof FlowGraphExtractVector4Block>[0];
    
    },FlowGraphExtractVector4Block>, any>;
  flowGraphFlipFlopBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFlipFlopBlock>, {
config: ConstructorParameters<typeof FlowGraphFlipFlopBlock>[0];
    
    },FlowGraphFlipFlopBlock>, any>;
  flowGraphFloatToBoolean: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFloatToBoolean>, {
config: ConstructorParameters<typeof FlowGraphFloatToBoolean>[0];
    
    },FlowGraphFloatToBoolean>, any>;
  flowGraphFloatToInt: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFloatToInt>, {
config: ConstructorParameters<typeof FlowGraphFloatToInt>[0];
    
    },FlowGraphFloatToInt>, any>;
  flowGraphFloorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFloorBlock>, {
config: ConstructorParameters<typeof FlowGraphFloorBlock>[0];
    
    },FlowGraphFloorBlock>, any>;
  flowGraphForLoopBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphForLoopBlock>, {
config: ConstructorParameters<typeof FlowGraphForLoopBlock>[0];
    
    },FlowGraphForLoopBlock>, any>;
  flowGraphFractionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFractionBlock>, {
config: ConstructorParameters<typeof FlowGraphFractionBlock>[0];
    
    },FlowGraphFractionBlock>, any>;
  flowGraphFunctionReferenceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphFunctionReferenceBlock>, {
config: ConstructorParameters<typeof FlowGraphFunctionReferenceBlock>[0];
    
    },FlowGraphFunctionReferenceBlock>, any>;
  flowGraphGetAssetBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphGetAssetBlock>, {
config: ConstructorParameters<typeof FlowGraphGetAssetBlock>[0];
    
    },FlowGraphGetAssetBlock>, any>;
  flowGraphGetPropertyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphGetPropertyBlock>, {
config: ConstructorParameters<typeof FlowGraphGetPropertyBlock>[0];
    
    },FlowGraphGetPropertyBlock>, any>;
  flowGraphGetVariableBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphGetVariableBlock>, {
config: ConstructorParameters<typeof FlowGraphGetVariableBlock>[0];
    
    },FlowGraphGetVariableBlock>, any>;
  flowGraphGreaterThanBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphGreaterThanBlock>, {
config: ConstructorParameters<typeof FlowGraphGreaterThanBlock>[0];
    
    },FlowGraphGreaterThanBlock>, any>;
  flowGraphGreaterThanOrEqualBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphGreaterThanOrEqualBlock>, {
config: ConstructorParameters<typeof FlowGraphGreaterThanOrEqualBlock>[0];
    
    },FlowGraphGreaterThanOrEqualBlock>, any>;
  flowGraphIndexOfBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphIndexOfBlock>, {
config: ConstructorParameters<typeof FlowGraphIndexOfBlock>[0];
    
    },FlowGraphIndexOfBlock>, any>;
  flowGraphInfBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphInfBlock>, {
config: ConstructorParameters<typeof FlowGraphInfBlock>[0];
    
    },FlowGraphInfBlock>, any>;
  flowGraphIntToBoolean: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphIntToBoolean>, {
config: ConstructorParameters<typeof FlowGraphIntToBoolean>[0];
    
    },FlowGraphIntToBoolean>, any>;
  flowGraphIntToFloat: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphIntToFloat>, {
config: ConstructorParameters<typeof FlowGraphIntToFloat>[0];
    
    },FlowGraphIntToFloat>, any>;
  flowGraphInteger: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphInteger>, {
value: ConstructorParameters<typeof FlowGraphInteger>[0];
    
    },FlowGraphInteger>, any>;
  flowGraphInterpolationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphInterpolationBlock>, {
config: ConstructorParameters<typeof FlowGraphInterpolationBlock>[0];
    
    },FlowGraphInterpolationBlock>, any>;
  flowGraphInvertMatrixBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphInvertMatrixBlock>, {
config: ConstructorParameters<typeof FlowGraphInvertMatrixBlock>[0];
    
    },FlowGraphInvertMatrixBlock>, any>;
  flowGraphIsInfinityBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphIsInfinityBlock>, {
config: ConstructorParameters<typeof FlowGraphIsInfinityBlock>[0];
    
    },FlowGraphIsInfinityBlock>, any>;
  flowGraphIsNanBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphIsNanBlock>, {
config: ConstructorParameters<typeof FlowGraphIsNanBlock>[0];
    
    },FlowGraphIsNanBlock>, any>;
  flowGraphJsonPointerParserBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphJsonPointerParserBlock>, {
config: ConstructorParameters<typeof FlowGraphJsonPointerParserBlock>[0];
    
    },FlowGraphJsonPointerParserBlock>, any>;
  flowGraphLeadingZerosBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLeadingZerosBlock>, {
config: ConstructorParameters<typeof FlowGraphLeadingZerosBlock>[0];
    
    },FlowGraphLeadingZerosBlock>, any>;
  flowGraphLengthBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLengthBlock>, {
config: ConstructorParameters<typeof FlowGraphLengthBlock>[0];
    
    },FlowGraphLengthBlock>, any>;
  flowGraphLessThanBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLessThanBlock>, {
config: ConstructorParameters<typeof FlowGraphLessThanBlock>[0];
    
    },FlowGraphLessThanBlock>, any>;
  flowGraphLessThanOrEqualBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLessThanOrEqualBlock>, {
config: ConstructorParameters<typeof FlowGraphLessThanOrEqualBlock>[0];
    
    },FlowGraphLessThanOrEqualBlock>, any>;
  flowGraphLog10Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLog10Block>, {
config: ConstructorParameters<typeof FlowGraphLog10Block>[0];
    
    },FlowGraphLog10Block>, any>;
  flowGraphLog2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLog2Block>, {
config: ConstructorParameters<typeof FlowGraphLog2Block>[0];
    
    },FlowGraphLog2Block>, any>;
  flowGraphLogBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLogBlock>, {
config: ConstructorParameters<typeof FlowGraphLogBlock>[0];
    
    },FlowGraphLogBlock>, any>;
  flowGraphLogger: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphLogger>, {},FlowGraphLogger>, any>;
  flowGraphMathInterpolationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMathInterpolationBlock>, {
config: ConstructorParameters<typeof FlowGraphMathInterpolationBlock>[0];
    
    },FlowGraphMathInterpolationBlock>, any>;
  flowGraphMatrix2D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMatrix2D>, {
m: ConstructorParameters<typeof FlowGraphMatrix2D>[0];
    
    },FlowGraphMatrix2D>, any>;
  flowGraphMatrix3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMatrix3D>, {
array: ConstructorParameters<typeof FlowGraphMatrix3D>[0];
    
    },FlowGraphMatrix3D>, any>;
  flowGraphMatrixComposeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMatrixComposeBlock>, {
config: ConstructorParameters<typeof FlowGraphMatrixComposeBlock>[0];
    
    },FlowGraphMatrixComposeBlock>, any>;
  flowGraphMatrixDecomposeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMatrixDecomposeBlock>, {
config: ConstructorParameters<typeof FlowGraphMatrixDecomposeBlock>[0];
    
    },FlowGraphMatrixDecomposeBlock>, any>;
  flowGraphMatrixMultiplicationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMatrixMultiplicationBlock>, {
config: ConstructorParameters<typeof FlowGraphMatrixMultiplicationBlock>[0];
    
    },FlowGraphMatrixMultiplicationBlock>, any>;
  flowGraphMaxBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMaxBlock>, {
config: ConstructorParameters<typeof FlowGraphMaxBlock>[0];
    
    },FlowGraphMaxBlock>, any>;
  flowGraphMeshPickEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMeshPickEventBlock>, {
config: ConstructorParameters<typeof FlowGraphMeshPickEventBlock>[0];
    
    },FlowGraphMeshPickEventBlock>, any>;
  flowGraphMinBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMinBlock>, {
config: ConstructorParameters<typeof FlowGraphMinBlock>[0];
    
    },FlowGraphMinBlock>, any>;
  flowGraphModuloBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphModuloBlock>, {
config: ConstructorParameters<typeof FlowGraphModuloBlock>[0];
    
    },FlowGraphModuloBlock>, any>;
  flowGraphMultiGateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMultiGateBlock>, {
config: ConstructorParameters<typeof FlowGraphMultiGateBlock>[0];
    
    },FlowGraphMultiGateBlock>, any>;
  flowGraphMultiplyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphMultiplyBlock>, {
config: ConstructorParameters<typeof FlowGraphMultiplyBlock>[0];
    
    },FlowGraphMultiplyBlock>, any>;
  flowGraphNaNBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphNaNBlock>, {
config: ConstructorParameters<typeof FlowGraphNaNBlock>[0];
    
    },FlowGraphNaNBlock>, any>;
  flowGraphNegationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphNegationBlock>, {
config: ConstructorParameters<typeof FlowGraphNegationBlock>[0];
    
    },FlowGraphNegationBlock>, any>;
  flowGraphNormalizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphNormalizeBlock>, {
config: ConstructorParameters<typeof FlowGraphNormalizeBlock>[0];
    
    },FlowGraphNormalizeBlock>, any>;
  flowGraphOneBitsCounterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphOneBitsCounterBlock>, {
config: ConstructorParameters<typeof FlowGraphOneBitsCounterBlock>[0];
    
    },FlowGraphOneBitsCounterBlock>, any>;
  flowGraphPathConverter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPathConverter>, {
_context: ConstructorParameters<typeof FlowGraphPathConverter>[0];
    _separator: ConstructorParameters<typeof FlowGraphPathConverter>[1];
    
    },FlowGraphPathConverter>, any>;
  flowGraphPathConverterComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPathConverterComponent>, {
path: ConstructorParameters<typeof FlowGraphPathConverterComponent>[0];
    ownerBlock: ConstructorParameters<typeof FlowGraphPathConverterComponent>[1];
    
    },FlowGraphPathConverterComponent>, any>;
  flowGraphPauseAnimationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPauseAnimationBlock>, {
config: ConstructorParameters<typeof FlowGraphPauseAnimationBlock>[0];
    
    },FlowGraphPauseAnimationBlock>, any>;
  flowGraphPiBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPiBlock>, {
config: ConstructorParameters<typeof FlowGraphPiBlock>[0];
    
    },FlowGraphPiBlock>, any>;
  flowGraphPlayAnimationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPlayAnimationBlock>, {
config: ConstructorParameters<typeof FlowGraphPlayAnimationBlock>[0];
    
    },FlowGraphPlayAnimationBlock>, any>;
  flowGraphPointerOutEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPointerOutEventBlock>, {
config: ConstructorParameters<typeof FlowGraphPointerOutEventBlock>[0];
    
    },FlowGraphPointerOutEventBlock>, any>;
  flowGraphPointerOverEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPointerOverEventBlock>, {
config: ConstructorParameters<typeof FlowGraphPointerOverEventBlock>[0];
    
    },FlowGraphPointerOverEventBlock>, any>;
  flowGraphPowerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphPowerBlock>, {
config: ConstructorParameters<typeof FlowGraphPowerBlock>[0];
    
    },FlowGraphPowerBlock>, any>;
  flowGraphQuaternionFromAxisAngleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphQuaternionFromAxisAngleBlock>, {
config: ConstructorParameters<typeof FlowGraphQuaternionFromAxisAngleBlock>[0];
    
    },FlowGraphQuaternionFromAxisAngleBlock>, any>;
  flowGraphQuaternionFromDirectionsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphQuaternionFromDirectionsBlock>, {
config: ConstructorParameters<typeof FlowGraphQuaternionFromDirectionsBlock>[0];
    
    },FlowGraphQuaternionFromDirectionsBlock>, any>;
  flowGraphRadToDegBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphRadToDegBlock>, {
config: ConstructorParameters<typeof FlowGraphRadToDegBlock>[0];
    
    },FlowGraphRadToDegBlock>, any>;
  flowGraphRandomBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphRandomBlock>, {
config: ConstructorParameters<typeof FlowGraphRandomBlock>[0];
    
    },FlowGraphRandomBlock>, any>;
  flowGraphReceiveCustomEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphReceiveCustomEventBlock>, {
config: ConstructorParameters<typeof FlowGraphReceiveCustomEventBlock>[0];
    
    },FlowGraphReceiveCustomEventBlock>, any>;
  flowGraphRotate2DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphRotate2DBlock>, {
config: ConstructorParameters<typeof FlowGraphRotate2DBlock>[0];
    
    },FlowGraphRotate2DBlock>, any>;
  flowGraphRotate3DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphRotate3DBlock>, {
config: ConstructorParameters<typeof FlowGraphRotate3DBlock>[0];
    
    },FlowGraphRotate3DBlock>, any>;
  flowGraphRoundBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphRoundBlock>, {
config: ConstructorParameters<typeof FlowGraphRoundBlock>[0];
    
    },FlowGraphRoundBlock>, any>;
  flowGraphSaturateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSaturateBlock>, {
config: ConstructorParameters<typeof FlowGraphSaturateBlock>[0];
    
    },FlowGraphSaturateBlock>, any>;
  flowGraphSceneReadyEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSceneReadyEventBlock>, {},FlowGraphSceneReadyEventBlock>, any>;
  flowGraphSceneTickEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSceneTickEventBlock>, {},FlowGraphSceneTickEventBlock>, any>;
  flowGraphSendCustomEventBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSendCustomEventBlock>, {
config: ConstructorParameters<typeof FlowGraphSendCustomEventBlock>[0];
    
    },FlowGraphSendCustomEventBlock>, any>;
  flowGraphSequenceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSequenceBlock>, {
config: ConstructorParameters<typeof FlowGraphSequenceBlock>[0];
    
    },FlowGraphSequenceBlock>, any>;
  flowGraphSetDelayBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSetDelayBlock>, {
config: ConstructorParameters<typeof FlowGraphSetDelayBlock>[0];
    
    },FlowGraphSetDelayBlock>, any>;
  flowGraphSetPropertyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSetPropertyBlock>, {
config: ConstructorParameters<typeof FlowGraphSetPropertyBlock>[0];
    
    },FlowGraphSetPropertyBlock>, any>;
  flowGraphSetVariableBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSetVariableBlock>, {
config: ConstructorParameters<typeof FlowGraphSetVariableBlock>[0];
    
    },FlowGraphSetVariableBlock>, any>;
  flowGraphSignBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSignBlock>, {
config: ConstructorParameters<typeof FlowGraphSignBlock>[0];
    
    },FlowGraphSignBlock>, any>;
  flowGraphSignalConnection: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSignalConnection>, {},FlowGraphSignalConnection>, any>;
  flowGraphSinBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSinBlock>, {
config: ConstructorParameters<typeof FlowGraphSinBlock>[0];
    
    },FlowGraphSinBlock>, any>;
  flowGraphSinhBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSinhBlock>, {
config: ConstructorParameters<typeof FlowGraphSinhBlock>[0];
    
    },FlowGraphSinhBlock>, any>;
  flowGraphSquareRootBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSquareRootBlock>, {
config: ConstructorParameters<typeof FlowGraphSquareRootBlock>[0];
    
    },FlowGraphSquareRootBlock>, any>;
  flowGraphStopAnimationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphStopAnimationBlock>, {
config: ConstructorParameters<typeof FlowGraphStopAnimationBlock>[0];
    
    },FlowGraphStopAnimationBlock>, any>;
  flowGraphSubtractBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSubtractBlock>, {
config: ConstructorParameters<typeof FlowGraphSubtractBlock>[0];
    
    },FlowGraphSubtractBlock>, any>;
  flowGraphSwitchBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphSwitchBlock>, {
config: ConstructorParameters<typeof FlowGraphSwitchBlock>[0];
    
    },FlowGraphSwitchBlock>, any>;
  flowGraphTanBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTanBlock>, {
config: ConstructorParameters<typeof FlowGraphTanBlock>[0];
    
    },FlowGraphTanBlock>, any>;
  flowGraphTanhBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTanhBlock>, {
config: ConstructorParameters<typeof FlowGraphTanhBlock>[0];
    
    },FlowGraphTanhBlock>, any>;
  flowGraphThrottleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphThrottleBlock>, {
config: ConstructorParameters<typeof FlowGraphThrottleBlock>[0];
    
    },FlowGraphThrottleBlock>, any>;
  flowGraphTrailingZerosBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTrailingZerosBlock>, {
config: ConstructorParameters<typeof FlowGraphTrailingZerosBlock>[0];
    
    },FlowGraphTrailingZerosBlock>, any>;
  flowGraphTransformBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTransformBlock>, {
config: ConstructorParameters<typeof FlowGraphTransformBlock>[0];
    
    },FlowGraphTransformBlock>, any>;
  flowGraphTransformCoordinatesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTransformCoordinatesBlock>, {
config: ConstructorParameters<typeof FlowGraphTransformCoordinatesBlock>[0];
    
    },FlowGraphTransformCoordinatesBlock>, any>;
  flowGraphTransformCoordinatesSystemBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTransformCoordinatesSystemBlock>, {
config: ConstructorParameters<typeof FlowGraphTransformCoordinatesSystemBlock>[0];
    
    },FlowGraphTransformCoordinatesSystemBlock>, any>;
  flowGraphTransposeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTransposeBlock>, {
config: ConstructorParameters<typeof FlowGraphTransposeBlock>[0];
    
    },FlowGraphTransposeBlock>, any>;
  flowGraphTruncBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphTruncBlock>, {
config: ConstructorParameters<typeof FlowGraphTruncBlock>[0];
    
    },FlowGraphTruncBlock>, any>;
  flowGraphWaitAllBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphWaitAllBlock>, {
config: ConstructorParameters<typeof FlowGraphWaitAllBlock>[0];
    
    },FlowGraphWaitAllBlock>, any>;
  flowGraphWhileLoopBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowGraphWhileLoopBlock>, {
config: ConstructorParameters<typeof FlowGraphWhileLoopBlock>[0];
    
    },FlowGraphWhileLoopBlock>, any>;
  flowMap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlowMap>, {
width: ConstructorParameters<typeof FlowMap>[0];
    height: ConstructorParameters<typeof FlowMap>[1];
    data: ConstructorParameters<typeof FlowMap>[2];
    
    },FlowMap>, any>;
  fluidRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRenderer>, {
scene: ConstructorParameters<typeof FluidRenderer>[0];
    
    },FluidRenderer>, any>;
  fluidRendererSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRendererSceneComponent>, {
scene: ConstructorParameters<typeof FluidRendererSceneComponent>[0];
    
    },FluidRendererSceneComponent>, any>;
  fluidRenderingObject: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRenderingObject>, {
scene: ConstructorParameters<typeof FluidRenderingObject>[0];
    shaderLanguage: ConstructorParameters<typeof FluidRenderingObject>[1];
    
    },FluidRenderingObject>, any>;
  fluidRenderingObjectCustomParticles: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRenderingObjectCustomParticles>, {
scene: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[0];
    buffers: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[1];
    numParticles: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[2];
    shaderLanguage: ConstructorParameters<typeof FluidRenderingObjectCustomParticles>[3];
    
    },FluidRenderingObjectCustomParticles>, any>;
  fluidRenderingObjectParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRenderingObjectParticleSystem>, {
scene: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[0];
    ps: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[1];
    shaderLanguage: ConstructorParameters<typeof FluidRenderingObjectParticleSystem>[2];
    
    },FluidRenderingObjectParticleSystem>, any>;
  fluidRenderingTargetRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluidRenderingTargetRenderer>, {
scene: ConstructorParameters<typeof FluidRenderingTargetRenderer>[0];
    camera: ConstructorParameters<typeof FluidRenderingTargetRenderer>[1];
    shaderLanguage: ConstructorParameters<typeof FluidRenderingTargetRenderer>[2];
    
    },FluidRenderingTargetRenderer>, any>;
  flyCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCamera> & Clonable, {
name: ConstructorParameters<typeof FlyCamera>[0];
    position: ConstructorParameters<typeof FlyCamera>[1];
    scene: ConstructorParameters<typeof FlyCamera>[2];
    setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FlyCamera>[3];
    
    } & CameraProps,FlyCamera>, any>;
  flyCameraInputsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraInputsManager>, {
camera: ConstructorParameters<typeof FlyCameraInputsManager>[0];
    
    },FlyCameraInputsManager>, any>;
  flyCameraKeyboardInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraKeyboardInput>, {},FlyCameraKeyboardInput>, any>;
  flyCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FlyCameraMouseInput>, {},FlyCameraMouseInput>, any>;
  fogBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FogBlock> & Clonable, {
name: ConstructorParameters<typeof FogBlock>[0];
    
    },FogBlock>, any>;
  followBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowBehavior>, {},FollowBehavior>, any>;
  followCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCamera> & Clonable, {
name: ConstructorParameters<typeof FollowCamera>[0];
    position: ConstructorParameters<typeof FollowCamera>[1];
    scene: ConstructorParameters<typeof FollowCamera>[2];
    lockedTarget: ConstructorParameters<typeof FollowCamera>[3];
    
    } & CameraProps,FollowCamera>, any>;
  followCameraInputsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraInputsManager>, {
camera: ConstructorParameters<typeof FollowCameraInputsManager>[0];
    
    },FollowCameraInputsManager>, any>;
  followCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraKeyboardMoveInput>, {},FollowCameraKeyboardMoveInput>, any>;
  followCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraMouseWheelInput>, {},FollowCameraMouseWheelInput>, any>;
  followCameraPointersInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FollowCameraPointersInput>, {},FollowCameraPointersInput>, any>;
  fragCoordBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FragCoordBlock> & Clonable, {
name: ConstructorParameters<typeof FragCoordBlock>[0];
    
    },FragCoordBlock>, any>;
  fragDepthBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FragDepthBlock> & Clonable, {
name: ConstructorParameters<typeof FragDepthBlock>[0];
    
    },FragDepthBlock>, any>;
  fragmentOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FragmentOutputBlock> & Clonable, {
name: ConstructorParameters<typeof FragmentOutputBlock>[0];
    
    },FragmentOutputBlock>, any>;
  frameGraph: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraph>, {
scene: ConstructorParameters<typeof FrameGraph>[0];
    debugTextures: ConstructorParameters<typeof FrameGraph>[1];
    _linkedNodeRenderGraph: ConstructorParameters<typeof FrameGraph>[2];
    
    },FrameGraph>, any>;
  frameGraphAnaglyphTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphAnaglyphTask>, {
name: ConstructorParameters<typeof FrameGraphAnaglyphTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphAnaglyphTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphAnaglyphTask>[2];
    
    },FrameGraphAnaglyphTask>, any>;
  frameGraphBlackAndWhiteTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphBlackAndWhiteTask>, {
name: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphBlackAndWhiteTask>[2];
    
    },FrameGraphBlackAndWhiteTask>, any>;
  frameGraphBloomTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphBloomTask>, {
name: ConstructorParameters<typeof FrameGraphBloomTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphBloomTask>[1];
    weight: ConstructorParameters<typeof FrameGraphBloomTask>[2];
    kernel: ConstructorParameters<typeof FrameGraphBloomTask>[3];
    threshold: ConstructorParameters<typeof FrameGraphBloomTask>[4];
    hdr: ConstructorParameters<typeof FrameGraphBloomTask>[5];
    bloomScale: ConstructorParameters<typeof FrameGraphBloomTask>[6];
    
    },FrameGraphBloomTask>, any>;
  frameGraphBlurTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphBlurTask>, {
name: ConstructorParameters<typeof FrameGraphBlurTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphBlurTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphBlurTask>[2];
    
    },FrameGraphBlurTask>, any>;
  frameGraphCascadedShadowGeneratorTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCascadedShadowGeneratorTask>, {
name: ConstructorParameters<typeof FrameGraphCascadedShadowGeneratorTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphCascadedShadowGeneratorTask>[1];
    scene: ConstructorParameters<typeof FrameGraphCascadedShadowGeneratorTask>[2];
    
    },FrameGraphCascadedShadowGeneratorTask>, any>;
  frameGraphChromaticAberrationTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphChromaticAberrationTask>, {
name: ConstructorParameters<typeof FrameGraphChromaticAberrationTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphChromaticAberrationTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphChromaticAberrationTask>[2];
    
    },FrameGraphChromaticAberrationTask>, any>;
  frameGraphCircleOfConfusionTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCircleOfConfusionTask>, {
name: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphCircleOfConfusionTask>[2];
    
    },FrameGraphCircleOfConfusionTask>, any>;
  frameGraphClearTextureTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphClearTextureTask>, {
name: ConstructorParameters<typeof FrameGraphClearTextureTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphClearTextureTask>[1];
    
    },FrameGraphClearTextureTask>, any>;
  frameGraphContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphContext>, {
_engine: ConstructorParameters<typeof FrameGraphContext>[0];
    _textureManager: ConstructorParameters<typeof FrameGraphContext>[1];
    _scene: ConstructorParameters<typeof FrameGraphContext>[2];
    
    },FrameGraphContext>, any>;
  frameGraphCopyToTextureTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCopyToTextureTask>, {
name: ConstructorParameters<typeof FrameGraphCopyToTextureTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphCopyToTextureTask>[1];
    
    },FrameGraphCopyToTextureTask>, any>;
  frameGraphCullObjectsTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCullObjectsTask>, {
name: ConstructorParameters<typeof FrameGraphCullObjectsTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphCullObjectsTask>[1];
    scene: ConstructorParameters<typeof FrameGraphCullObjectsTask>[2];
    
    },FrameGraphCullObjectsTask>, any>;
  frameGraphCullPass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphCullPass>, {
name: ConstructorParameters<typeof FrameGraphCullPass>[0];
    parentTask: ConstructorParameters<typeof FrameGraphCullPass>[1];
    context: ConstructorParameters<typeof FrameGraphCullPass>[2];
    engine: ConstructorParameters<typeof FrameGraphCullPass>[3];
    
    },FrameGraphCullPass>, any>;
  frameGraphDepthOfFieldTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphDepthOfFieldTask>, {
name: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[1];
    blurLevel: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[2];
    hdr: ConstructorParameters<typeof FrameGraphDepthOfFieldTask>[3];
    
    },FrameGraphDepthOfFieldTask>, any>;
  frameGraphExecuteTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphExecuteTask>, {
name: ConstructorParameters<typeof FrameGraphExecuteTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphExecuteTask>[1];
    
    },FrameGraphExecuteTask>, any>;
  frameGraphExtractHighlightsTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphExtractHighlightsTask>, {
name: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphExtractHighlightsTask>[2];
    
    },FrameGraphExtractHighlightsTask>, any>;
  frameGraphFXAATask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphFXAATask>, {
name: ConstructorParameters<typeof FrameGraphFXAATask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphFXAATask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphFXAATask>[2];
    
    },FrameGraphFXAATask>, any>;
  frameGraphGenerateMipMapsTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphGenerateMipMapsTask>, {
name: ConstructorParameters<typeof FrameGraphGenerateMipMapsTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphGenerateMipMapsTask>[1];
    
    },FrameGraphGenerateMipMapsTask>, any>;
  frameGraphGeometryRendererTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphGeometryRendererTask>, {
name: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[1];
    scene: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[2];
    options: ConstructorParameters<typeof FrameGraphGeometryRendererTask>[3];
    
    },FrameGraphGeometryRendererTask>, any>;
  frameGraphGlowLayerTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphGlowLayerTask>, {
name: ConstructorParameters<typeof FrameGraphGlowLayerTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphGlowLayerTask>[1];
    scene: ConstructorParameters<typeof FrameGraphGlowLayerTask>[2];
    options: ConstructorParameters<typeof FrameGraphGlowLayerTask>[3];
    
    },FrameGraphGlowLayerTask>, any>;
  frameGraphGrainTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphGrainTask>, {
name: ConstructorParameters<typeof FrameGraphGrainTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphGrainTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphGrainTask>[2];
    
    },FrameGraphGrainTask>, any>;
  frameGraphHighlightLayerTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphHighlightLayerTask>, {
name: ConstructorParameters<typeof FrameGraphHighlightLayerTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphHighlightLayerTask>[1];
    scene: ConstructorParameters<typeof FrameGraphHighlightLayerTask>[2];
    options: ConstructorParameters<typeof FrameGraphHighlightLayerTask>[3];
    
    },FrameGraphHighlightLayerTask>, any>;
  frameGraphImageProcessingTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphImageProcessingTask>, {
name: ConstructorParameters<typeof FrameGraphImageProcessingTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphImageProcessingTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphImageProcessingTask>[2];
    
    },FrameGraphImageProcessingTask>, any>;
  frameGraphMotionBlurTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphMotionBlurTask>, {
name: ConstructorParameters<typeof FrameGraphMotionBlurTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphMotionBlurTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphMotionBlurTask>[2];
    
    },FrameGraphMotionBlurTask>, any>;
  frameGraphObjectRendererTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphObjectRendererTask>, {
name: ConstructorParameters<typeof FrameGraphObjectRendererTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphObjectRendererTask>[1];
    scene: ConstructorParameters<typeof FrameGraphObjectRendererTask>[2];
    options: ConstructorParameters<typeof FrameGraphObjectRendererTask>[3];
    existingObjectRenderer: ConstructorParameters<typeof FrameGraphObjectRendererTask>[4];
    
    },FrameGraphObjectRendererTask>, any>;
  frameGraphPass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphPass>, {
name: ConstructorParameters<typeof FrameGraphPass>[0];
    _parentTask: ConstructorParameters<typeof FrameGraphPass>[1];
    _context: ConstructorParameters<typeof FrameGraphPass>[2];
    
    },FrameGraphPass>, any>;
  frameGraphPassCubeTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphPassCubeTask>, {
name: ConstructorParameters<typeof FrameGraphPassCubeTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphPassCubeTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphPassCubeTask>[2];
    
    },FrameGraphPassCubeTask>, any>;
  frameGraphPassTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphPassTask>, {
name: ConstructorParameters<typeof FrameGraphPassTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphPassTask>[1];
    thinPostProcess: ConstructorParameters<typeof FrameGraphPassTask>[2];
    
    },FrameGraphPassTask>, any>;
  frameGraphPostProcessTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphPostProcessTask>, {
name: ConstructorParameters<typeof FrameGraphPostProcessTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphPostProcessTask>[1];
    postProcess: ConstructorParameters<typeof FrameGraphPostProcessTask>[2];
    
    },FrameGraphPostProcessTask>, any>;
  frameGraphRenderContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphRenderContext>, {
engine: ConstructorParameters<typeof FrameGraphRenderContext>[0];
    textureManager: ConstructorParameters<typeof FrameGraphRenderContext>[1];
    scene: ConstructorParameters<typeof FrameGraphRenderContext>[2];
    
    },FrameGraphRenderContext>, any>;
  frameGraphRenderPass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphRenderPass>, {
name: ConstructorParameters<typeof FrameGraphRenderPass>[0];
    parentTask: ConstructorParameters<typeof FrameGraphRenderPass>[1];
    context: ConstructorParameters<typeof FrameGraphRenderPass>[2];
    engine: ConstructorParameters<typeof FrameGraphRenderPass>[3];
    
    },FrameGraphRenderPass>, any>;
  frameGraphRenderTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphRenderTarget>, {
name: ConstructorParameters<typeof FrameGraphRenderTarget>[0];
    textureManager: ConstructorParameters<typeof FrameGraphRenderTarget>[1];
    renderTargets: ConstructorParameters<typeof FrameGraphRenderTarget>[2];
    renderTargetDepth: ConstructorParameters<typeof FrameGraphRenderTarget>[3];
    
    },FrameGraphRenderTarget>, any>;
  frameGraphSSRRenderingPipelineTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphSSRRenderingPipelineTask>, {
name: ConstructorParameters<typeof FrameGraphSSRRenderingPipelineTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphSSRRenderingPipelineTask>[1];
    textureType: ConstructorParameters<typeof FrameGraphSSRRenderingPipelineTask>[2];
    
    },FrameGraphSSRRenderingPipelineTask>, any>;
  frameGraphShadowGeneratorTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphShadowGeneratorTask>, {
name: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[1];
    _scene: ConstructorParameters<typeof FrameGraphShadowGeneratorTask>[2];
    
    },FrameGraphShadowGeneratorTask>, any>;
  frameGraphTAAObjectRendererTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphTAAObjectRendererTask>, {
name: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[1];
    scene: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[2];
    options: ConstructorParameters<typeof FrameGraphTAAObjectRendererTask>[3];
    
    },FrameGraphTAAObjectRendererTask>, any>;
  frameGraphTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphTask>, {
name: ConstructorParameters<typeof FrameGraphTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphTask>[1];
    
    },FrameGraphTask>, any>;
  frameGraphTextureManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphTextureManager>, {
engine: ConstructorParameters<typeof FrameGraphTextureManager>[0];
    _debugTextures: ConstructorParameters<typeof FrameGraphTextureManager>[1];
    _scene: ConstructorParameters<typeof FrameGraphTextureManager>[2];
    
    },FrameGraphTextureManager>, any>;
  frameGraphUtilityLayerRendererTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphUtilityLayerRendererTask>, {
name: ConstructorParameters<typeof FrameGraphUtilityLayerRendererTask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphUtilityLayerRendererTask>[1];
    scene: ConstructorParameters<typeof FrameGraphUtilityLayerRendererTask>[2];
    handleEvents: ConstructorParameters<typeof FrameGraphUtilityLayerRendererTask>[3];
    
    },FrameGraphUtilityLayerRendererTask>, any>;
  framingBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FramingBehavior>, {},FramingBehavior>, any>;
  freeCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCamera> & Clonable, {
name: ConstructorParameters<typeof FreeCamera>[0];
    position: ConstructorParameters<typeof FreeCamera>[1];
    scene: ConstructorParameters<typeof FreeCamera>[2];
    setActiveOnSceneIfNoneActive: ConstructorParameters<typeof FreeCamera>[3];
    
    } & CameraProps,FreeCamera>, any>;
  freeCameraDeviceOrientationInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraDeviceOrientationInput>, {},FreeCameraDeviceOrientationInput>, any>;
  freeCameraGamepadInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraGamepadInput>, {},FreeCameraGamepadInput>, any>;
  freeCameraInputsManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraInputsManager>, {
camera: ConstructorParameters<typeof FreeCameraInputsManager>[0];
    
    },FreeCameraInputsManager>, any>;
  freeCameraKeyboardMoveInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraKeyboardMoveInput>, {},FreeCameraKeyboardMoveInput>, any>;
  freeCameraMouseInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraMouseInput>, {
touchEnabled: ConstructorParameters<typeof FreeCameraMouseInput>[0];
    
    },FreeCameraMouseInput>, any>;
  freeCameraMouseWheelInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraMouseWheelInput>, {},FreeCameraMouseWheelInput>, any>;
  freeCameraTouchInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FreeCameraTouchInput>, {
allowMouse: ConstructorParameters<typeof FreeCameraTouchInput>[0];
    
    },FreeCameraTouchInput>, any>;
  fresnelBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FresnelBlock> & Clonable, {
name: ConstructorParameters<typeof FresnelBlock>[0];
    
    },FresnelBlock>, any>;
  fresnelParameters: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FresnelParameters> & Clonable, {
options: ConstructorParameters<typeof FresnelParameters>[0];
    
    },FresnelParameters>, any>;
  fromHalfFloat: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof FromHalfFloat>> & MeshProps, {
        value: Parameters<typeof FromHalfFloat>[0];
    
            },ReturnType<typeof FromHalfFloat>>, any>;
  frontFacingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrontFacingBlock> & Clonable, {
name: ConstructorParameters<typeof FrontFacingBlock>[0];
    
    },FrontFacingBlock>, any>;
  fxaaPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FxaaPostProcess> & Clonable, {
name: ConstructorParameters<typeof FxaaPostProcess>[0];
    options: ConstructorParameters<typeof FxaaPostProcess>[1];
    camera: ConstructorParameters<typeof FxaaPostProcess>[2];
    samplingMode: ConstructorParameters<typeof FxaaPostProcess>[3];
    engine: ConstructorParameters<typeof FxaaPostProcess>[4];
    reusable: ConstructorParameters<typeof FxaaPostProcess>[5];
    textureType: ConstructorParameters<typeof FxaaPostProcess>[6];
    
    },FxaaPostProcess>, any>;
  gIRSM: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GIRSM>, {
rsm: ConstructorParameters<typeof GIRSM>[0];
    
    },GIRSM>, any>;
  gIRSMManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GIRSMManager>, {
scene: ConstructorParameters<typeof GIRSMManager>[0];
    outputDimensions: ConstructorParameters<typeof GIRSMManager>[1];
    giTextureDimensions: ConstructorParameters<typeof GIRSMManager>[2];
    maxSamples: ConstructorParameters<typeof GIRSMManager>[3];
    giTextureType: ConstructorParameters<typeof GIRSMManager>[4];
    
    },GIRSMManager>, any>;
  gIRSMRenderPluginMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GIRSMRenderPluginMaterial>, {
material: ConstructorParameters<typeof GIRSMRenderPluginMaterial>[0];
    
    },GIRSMRenderPluginMaterial>, any>;
  gPUParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GPUParticleSystem> & Clonable, {
name: ConstructorParameters<typeof GPUParticleSystem>[0];
    options: ConstructorParameters<typeof GPUParticleSystem>[1];
    sceneOrEngine: ConstructorParameters<typeof GPUParticleSystem>[2];
    customEffect: ConstructorParameters<typeof GPUParticleSystem>[3];
    isAnimationSheetEnabled: ConstructorParameters<typeof GPUParticleSystem>[4];
    
    },GPUParticleSystem>, any>;
  gPUPicker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GPUPicker>, {},GPUPicker>, any>;
  gamepad: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Gamepad>, {
id: ConstructorParameters<typeof Gamepad>[0];
    index: ConstructorParameters<typeof Gamepad>[1];
    browserGamepad: ConstructorParameters<typeof Gamepad>[2];
    leftStickX: ConstructorParameters<typeof Gamepad>[3];
    leftStickY: ConstructorParameters<typeof Gamepad>[4];
    rightStickX: ConstructorParameters<typeof Gamepad>[5];
    rightStickY: ConstructorParameters<typeof Gamepad>[6];
    
    },Gamepad>, any>;
  gamepadCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GamepadCamera> & Clonable, {
name: ConstructorParameters<typeof GamepadCamera>[0];
    position: ConstructorParameters<typeof GamepadCamera>[1];
    scene: ConstructorParameters<typeof GamepadCamera>[2];
    
    } & CameraProps,GamepadCamera>, any>;
  gamepadManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GamepadManager>, {
_scene: ConstructorParameters<typeof GamepadManager>[0];
    
    },GamepadManager>, any>;
  gamepadSystemSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GamepadSystemSceneComponent>, {
scene: ConstructorParameters<typeof GamepadSystemSceneComponent>[0];
    
    },GamepadSystemSceneComponent>, any>;
  gaussianBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GaussianBlock> & Clonable, {
name: ConstructorParameters<typeof GaussianBlock>[0];
    
    },GaussianBlock>, any>;
  gaussianSplattingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GaussianSplattingBlock> & Clonable, {
name: ConstructorParameters<typeof GaussianSplattingBlock>[0];
    
    },GaussianSplattingBlock>, any>;
  gaussianSplattingMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GaussianSplattingMaterial> & Clonable, {
name: ConstructorParameters<typeof GaussianSplattingMaterial>[0];
    scene: ConstructorParameters<typeof GaussianSplattingMaterial>[1];
    
    } & MaterialProps,GaussianSplattingMaterial>, any>;
  gaussianSplattingMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GaussianSplattingMesh> & Clonable, {
name: ConstructorParameters<typeof GaussianSplattingMesh>[0];
    url: ConstructorParameters<typeof GaussianSplattingMesh>[1];
    scene: ConstructorParameters<typeof GaussianSplattingMesh>[2];
    keepInRam: ConstructorParameters<typeof GaussianSplattingMesh>[3];
    
    },GaussianSplattingMesh>, any>;
  generateBase64StringFromPixelData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromPixelData>> & MeshProps, {
        pixels: Parameters<typeof GenerateBase64StringFromPixelData>[0];
    size: Parameters<typeof GenerateBase64StringFromPixelData>[1];
    invertY: Parameters<typeof GenerateBase64StringFromPixelData>[2];
    
            },ReturnType<typeof GenerateBase64StringFromPixelData>>, any>;
  generateBase64StringFromTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromTexture>> & MeshProps, {
        texture: Parameters<typeof GenerateBase64StringFromTexture>[0];
    faceIndex: Parameters<typeof GenerateBase64StringFromTexture>[1];
    level: Parameters<typeof GenerateBase64StringFromTexture>[2];
    
            },ReturnType<typeof GenerateBase64StringFromTexture>>, any>;
  generateBase64StringFromTextureAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GenerateBase64StringFromTextureAsync>> & MeshProps, {
        texture: Parameters<typeof GenerateBase64StringFromTextureAsync>[0];
    faceIndex: Parameters<typeof GenerateBase64StringFromTextureAsync>[1];
    level: Parameters<typeof GenerateBase64StringFromTextureAsync>[2];
    
            },ReturnType<typeof GenerateBase64StringFromTextureAsync>>, any>;
  genericPad: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GenericPad>, {
id: ConstructorParameters<typeof GenericPad>[0];
    index: ConstructorParameters<typeof GenericPad>[1];
    browserGamepad: ConstructorParameters<typeof GenericPad>[2];
    
    },GenericPad>, any>;
  geometry: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Geometry>, {
id: ConstructorParameters<typeof Geometry>[0];
    scene: ConstructorParameters<typeof Geometry>[1];
    vertexData: ConstructorParameters<typeof Geometry>[2];
    updatable: ConstructorParameters<typeof Geometry>[3];
    mesh: ConstructorParameters<typeof Geometry>[4];
    
    },Geometry>, any>;
  geometryArcTan2Block: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryArcTan2Block> & Clonable, {
name: ConstructorParameters<typeof GeometryArcTan2Block>[0];
    
    },GeometryArcTan2Block>, any>;
  geometryBufferRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryBufferRenderer>, {
scene: ConstructorParameters<typeof GeometryBufferRenderer>[0];
    ratioOrDimensions: ConstructorParameters<typeof GeometryBufferRenderer>[1];
    depthFormat: ConstructorParameters<typeof GeometryBufferRenderer>[2];
    textureTypesAndFormats: ConstructorParameters<typeof GeometryBufferRenderer>[3];
    
    },GeometryBufferRenderer>, any>;
  geometryBufferRendererSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryBufferRendererSceneComponent>, {
scene: ConstructorParameters<typeof GeometryBufferRendererSceneComponent>[0];
    
    },GeometryBufferRendererSceneComponent>, any>;
  geometryClampBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryClampBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryClampBlock>[0];
    
    },GeometryClampBlock>, any>;
  geometryCollectionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryCollectionBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryCollectionBlock>[0];
    
    },GeometryCollectionBlock>, any>;
  geometryCrossBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryCrossBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryCrossBlock>[0];
    
    },GeometryCrossBlock>, any>;
  geometryCurveBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryCurveBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryCurveBlock>[0];
    
    },GeometryCurveBlock>, any>;
  geometryDesaturateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryDesaturateBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryDesaturateBlock>[0];
    
    },GeometryDesaturateBlock>, any>;
  geometryDistanceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryDistanceBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryDistanceBlock>[0];
    
    },GeometryDistanceBlock>, any>;
  geometryDotBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryDotBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryDotBlock>[0];
    
    },GeometryDotBlock>, any>;
  geometryEaseBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryEaseBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryEaseBlock>[0];
    
    },GeometryEaseBlock>, any>;
  geometryElbowBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryElbowBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryElbowBlock>[0];
    
    },GeometryElbowBlock>, any>;
  geometryInfoBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryInfoBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryInfoBlock>[0];
    
    },GeometryInfoBlock>, any>;
  geometryInputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryInputBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryInputBlock>[0];
    type: ConstructorParameters<typeof GeometryInputBlock>[1];
    
    },GeometryInputBlock>, any>;
  geometryInterceptorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryInterceptorBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryInterceptorBlock>[0];
    
    },GeometryInterceptorBlock>, any>;
  geometryLengthBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryLengthBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryLengthBlock>[0];
    
    },GeometryLengthBlock>, any>;
  geometryLerpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryLerpBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryLerpBlock>[0];
    
    },GeometryLerpBlock>, any>;
  geometryModBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryModBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryModBlock>[0];
    
    },GeometryModBlock>, any>;
  geometryNLerpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryNLerpBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryNLerpBlock>[0];
    
    },GeometryNLerpBlock>, any>;
  geometryOptimizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryOptimizeBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryOptimizeBlock>[0];
    
    },GeometryOptimizeBlock>, any>;
  geometryOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryOutputBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryOutputBlock>[0];
    
    },GeometryOutputBlock>, any>;
  geometryPosterizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryPosterizeBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryPosterizeBlock>[0];
    
    },GeometryPosterizeBlock>, any>;
  geometryPowBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryPowBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryPowBlock>[0];
    
    },GeometryPowBlock>, any>;
  geometryReplaceColorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryReplaceColorBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryReplaceColorBlock>[0];
    
    },GeometryReplaceColorBlock>, any>;
  geometryRotate2dBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryRotate2dBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryRotate2dBlock>[0];
    
    },GeometryRotate2dBlock>, any>;
  geometrySmoothStepBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometrySmoothStepBlock> & Clonable, {
name: ConstructorParameters<typeof GeometrySmoothStepBlock>[0];
    
    },GeometrySmoothStepBlock>, any>;
  geometryStepBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryStepBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryStepBlock>[0];
    
    },GeometryStepBlock>, any>;
  geometryTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryTextureBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryTextureBlock>[0];
    
    },GeometryTextureBlock>, any>;
  geometryTextureFetchBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryTextureFetchBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryTextureFetchBlock>[0];
    
    },GeometryTextureFetchBlock>, any>;
  geometryTransformBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryTransformBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryTransformBlock>[0];
    
    },GeometryTransformBlock>, any>;
  geometryTrigonometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GeometryTrigonometryBlock> & Clonable, {
name: ConstructorParameters<typeof GeometryTrigonometryBlock>[0];
    
    },GeometryTrigonometryBlock>, any>;
  getAngleBetweenQuaternions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetAngleBetweenQuaternions>> & MeshProps, {
        q1: Parameters<typeof GetAngleBetweenQuaternions>[0];
    q2: Parameters<typeof GetAngleBetweenQuaternions>[1];
    
            },ReturnType<typeof GetAngleBetweenQuaternions>>, any>;
  getClass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetClass>> & MeshProps, {
        fqdn: Parameters<typeof GetClass>[0];
    
            },ReturnType<typeof GetClass>>, any>;
  getClassName: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetClassName>> & MeshProps, {
        obj: Parameters<typeof GetClassName>[0];
    
            },ReturnType<typeof GetClassName>>, any>;
  getDOMTextContent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetDOMTextContent>> & MeshProps, {
        element: Parameters<typeof GetDOMTextContent>[0];
    
            },ReturnType<typeof GetDOMTextContent>>, any>;
  getDataOutConnectionByUniqueId: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetDataOutConnectionByUniqueId>> & MeshProps, {
        blocks: Parameters<typeof GetDataOutConnectionByUniqueId>[0];
    uniqueId: Parameters<typeof GetDataOutConnectionByUniqueId>[1];
    
            },ReturnType<typeof GetDataOutConnectionByUniqueId>>, any>;
  getEnvInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetEnvInfo>> & MeshProps, {
        data: Parameters<typeof GetEnvInfo>[0];
    
            },ReturnType<typeof GetEnvInfo>>, any>;
  getEnvironmentBRDFTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetEnvironmentBRDFTexture>> & MeshProps, {},ReturnType<typeof GetEnvironmentBRDFTexture>>, any>;
  getExrHeader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetExrHeader>> & MeshProps, {
        dataView: Parameters<typeof GetExrHeader>[0];
    offset: Parameters<typeof GetExrHeader>[1];
    
            },ReturnType<typeof GetExrHeader>>, any>;
  getExtensionFromUrl: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetExtensionFromUrl>> & MeshProps, {
        url: Parameters<typeof GetExtensionFromUrl>[0];
    
            },ReturnType<typeof GetExtensionFromUrl>>, any>;
  getFloatData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetFloatData>> & MeshProps, {
        data: Parameters<typeof GetFloatData>[0];
    size: Parameters<typeof GetFloatData>[1];
    type: Parameters<typeof GetFloatData>[2];
    byteOffset: Parameters<typeof GetFloatData>[3];
    byteStride: Parameters<typeof GetFloatData>[4];
    normalized: Parameters<typeof GetFloatData>[5];
    totalVertices: Parameters<typeof GetFloatData>[6];
    forceCopy: Parameters<typeof GetFloatData>[7];
    
            },ReturnType<typeof GetFloatData>>, any>;
  getFlowGraphAssetWithType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetFlowGraphAssetWithType>> & MeshProps, {
        assetsContext: Parameters<typeof GetFlowGraphAssetWithType>[0];
    type: Parameters<typeof GetFlowGraphAssetWithType>[1];
    index: Parameters<typeof GetFlowGraphAssetWithType>[2];
    useIndexAsUniqueId: Parameters<typeof GetFlowGraphAssetWithType>[3];
    
            },ReturnType<typeof GetFlowGraphAssetWithType>>, any>;
  getFogState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetFogState>> & MeshProps, {
        mesh: Parameters<typeof GetFogState>[0];
    scene: Parameters<typeof GetFogState>[1];
    
            },ReturnType<typeof GetFogState>>, any>;
  getFontOffset: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetFontOffset>> & MeshProps, {
        font: Parameters<typeof GetFontOffset>[0];
    
            },ReturnType<typeof GetFontOffset>>, any>;
  getForwardRay: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetForwardRay>> & MeshProps, {
        camera: Parameters<typeof GetForwardRay>[0];
    length: Parameters<typeof GetForwardRay>[1];
    transform: Parameters<typeof GetForwardRay>[2];
    origin: Parameters<typeof GetForwardRay>[3];
    
            },ReturnType<typeof GetForwardRay>>, any>;
  getForwardRayToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetForwardRayToRef>> & MeshProps, {
        camera: Parameters<typeof GetForwardRayToRef>[0];
    refRay: Parameters<typeof GetForwardRayToRef>[1];
    length: Parameters<typeof GetForwardRayToRef>[2];
    transform: Parameters<typeof GetForwardRayToRef>[3];
    origin: Parameters<typeof GetForwardRayToRef>[4];
    
            },ReturnType<typeof GetForwardRayToRef>>, any>;
  getHotSpotToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetHotSpotToRef>> & MeshProps, {
        mesh: Parameters<typeof GetHotSpotToRef>[0];
    hotSpotQuery: Parameters<typeof GetHotSpotToRef>[1];
    resPosition: Parameters<typeof GetHotSpotToRef>[2];
    resNormal: Parameters<typeof GetHotSpotToRef>[3];
    
            },ReturnType<typeof GetHotSpotToRef>>, any>;
  getIndividualParser: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetIndividualParser>> & MeshProps, {
        name: Parameters<typeof GetIndividualParser>[0];
    
            },ReturnType<typeof GetIndividualParser>>, any>;
  getInternalFormatFromBasisFormat: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetInternalFormatFromBasisFormat>> & MeshProps, {},ReturnType<typeof GetInternalFormatFromBasisFormat>>, any>;
  getMimeType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetMimeType>> & MeshProps, {},ReturnType<typeof GetMimeType>>, any>;
  getParser: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetParser>> & MeshProps, {
        name: Parameters<typeof GetParser>[0];
    
            },ReturnType<typeof GetParser>>, any>;
  getPointsCount: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetPointsCount>> & MeshProps, {
        allPoints: Parameters<typeof GetPointsCount>[0];
    
            },ReturnType<typeof GetPointsCount>>, any>;
  getQuaternionFromDirections: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetQuaternionFromDirections>> & MeshProps, {
        a: Parameters<typeof GetQuaternionFromDirections>[0];
    b: Parameters<typeof GetQuaternionFromDirections>[1];
    
            },ReturnType<typeof GetQuaternionFromDirections>>, any>;
  getQuaternionFromDirectionsToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetQuaternionFromDirectionsToRef>> & MeshProps, {
        a: Parameters<typeof GetQuaternionFromDirectionsToRef>[0];
    b: Parameters<typeof GetQuaternionFromDirectionsToRef>[1];
    result: Parameters<typeof GetQuaternionFromDirectionsToRef>[2];
    
            },ReturnType<typeof GetQuaternionFromDirectionsToRef>>, any>;
  getRegisteredSceneLoaderPluginMetadata: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetRegisteredSceneLoaderPluginMetadata>> & MeshProps, {},ReturnType<typeof GetRegisteredSceneLoaderPluginMetadata>>, any>;
  getSignalInConnectionByUniqueId: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetSignalInConnectionByUniqueId>> & MeshProps, {
        blocks: Parameters<typeof GetSignalInConnectionByUniqueId>[0];
    uniqueId: Parameters<typeof GetSignalInConnectionByUniqueId>[1];
    
            },ReturnType<typeof GetSignalInConnectionByUniqueId>>, any>;
  getTGAHeader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTGAHeader>> & MeshProps, {
        data: Parameters<typeof GetTGAHeader>[0];
    
            },ReturnType<typeof GetTGAHeader>>, any>;
  getTextureDataAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTextureDataAsync>> & MeshProps, {
        texture: Parameters<typeof GetTextureDataAsync>[0];
    width: Parameters<typeof GetTextureDataAsync>[1];
    height: Parameters<typeof GetTextureDataAsync>[2];
    face: Parameters<typeof GetTextureDataAsync>[3];
    lod: Parameters<typeof GetTextureDataAsync>[4];
    
            },ReturnType<typeof GetTextureDataAsync>>, any>;
  getTransformedPosition: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTransformedPosition>> & MeshProps, {
        mesh: Parameters<typeof GetTransformedPosition>[0];
    index: Parameters<typeof GetTransformedPosition>[1];
    res: Parameters<typeof GetTransformedPosition>[2];
    
            },ReturnType<typeof GetTransformedPosition>>, any>;
  getTypeByteLength: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTypeByteLength>> & MeshProps, {
        type: Parameters<typeof GetTypeByteLength>[0];
    
            },ReturnType<typeof GetTypeByteLength>>, any>;
  getTypedArrayConstructor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTypedArrayConstructor>> & MeshProps, {
        componentType: Parameters<typeof GetTypedArrayConstructor>[0];
    
            },ReturnType<typeof GetTypedArrayConstructor>>, any>;
  getTypedArrayData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof GetTypedArrayData>> & MeshProps, {
        data: Parameters<typeof GetTypedArrayData>[0];
    size: Parameters<typeof GetTypedArrayData>[1];
    type: Parameters<typeof GetTypedArrayData>[2];
    byteOffset: Parameters<typeof GetTypedArrayData>[3];
    byteStride: Parameters<typeof GetTypedArrayData>[4];
    normalized: Parameters<typeof GetTypedArrayData>[5];
    totalVertices: Parameters<typeof GetTypedArrayData>[6];
    forceCopy: Parameters<typeof GetTypedArrayData>[7];
    
            },ReturnType<typeof GetTypedArrayData>>, any>;
  gizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Gizmo>, {
gizmoLayer: ConstructorParameters<typeof Gizmo>[0];
    
    },Gizmo>, any>;
  gizmoManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GizmoManager>, {
_scene: ConstructorParameters<typeof GizmoManager>[0];
    thickness: ConstructorParameters<typeof GizmoManager>[1];
    utilityLayer: ConstructorParameters<typeof GizmoManager>[2];
    keepDepthUtilityLayer: ConstructorParameters<typeof GizmoManager>[3];
    
    },GizmoManager>, any>;
  glowLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GlowLayer>, {
name: ConstructorParameters<typeof GlowLayer>[0];
    scene: ConstructorParameters<typeof GlowLayer>[1];
    options: ConstructorParameters<typeof GlowLayer>[2];
    
    },GlowLayer>, any>;
  goldbergMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GoldbergMesh> & Clonable, {},GoldbergMesh>, any>;
  gradientBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GradientBlock> & Clonable, {
name: ConstructorParameters<typeof GradientBlock>[0];
    
    },GradientBlock>, any>;
  gradientBlockColorStep: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GradientBlockColorStep>, {
step: ConstructorParameters<typeof GradientBlockColorStep>[0];
    color: ConstructorParameters<typeof GradientBlockColorStep>[1];
    
    },GradientBlockColorStep>, any>;
  grainPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GrainPostProcess> & Clonable, {
name: ConstructorParameters<typeof GrainPostProcess>[0];
    options: ConstructorParameters<typeof GrainPostProcess>[1];
    camera: ConstructorParameters<typeof GrainPostProcess>[2];
    samplingMode: ConstructorParameters<typeof GrainPostProcess>[3];
    engine: ConstructorParameters<typeof GrainPostProcess>[4];
    reusable: ConstructorParameters<typeof GrainPostProcess>[5];
    textureType: ConstructorParameters<typeof GrainPostProcess>[6];
    blockCompilation: ConstructorParameters<typeof GrainPostProcess>[7];
    
    },GrainPostProcess>, any>;
  greasedLineBaseMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GreasedLineBaseMesh> & Clonable, {
name: ConstructorParameters<typeof GreasedLineBaseMesh>[0];
    scene: ConstructorParameters<typeof GreasedLineBaseMesh>[1];
    _options: ConstructorParameters<typeof GreasedLineBaseMesh>[2];
    
    },GreasedLineBaseMesh>, any>;
  greasedLineMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GreasedLineMesh> & Clonable, {
name: ConstructorParameters<typeof GreasedLineMesh>[0];
    scene: ConstructorParameters<typeof GreasedLineMesh>[1];
    _options: ConstructorParameters<typeof GreasedLineMesh>[2];
    
    },GreasedLineMesh>, any>;
  greasedLinePluginMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GreasedLinePluginMaterial>, {
material: ConstructorParameters<typeof GreasedLinePluginMaterial>[0];
    scene: ConstructorParameters<typeof GreasedLinePluginMaterial>[1];
    options: ConstructorParameters<typeof GreasedLinePluginMaterial>[2];
    
    },GreasedLinePluginMaterial>, any>;
  greasedLineRibbonMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GreasedLineRibbonMesh> & Clonable, {
name: ConstructorParameters<typeof GreasedLineRibbonMesh>[0];
    scene: ConstructorParameters<typeof GreasedLineRibbonMesh>[1];
    _options: ConstructorParameters<typeof GreasedLineRibbonMesh>[2];
    _pathOptions: ConstructorParameters<typeof GreasedLineRibbonMesh>[3];
    
    },GreasedLineRibbonMesh>, any>;
  greasedLineSimpleMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GreasedLineSimpleMaterial> & Clonable, {
name: ConstructorParameters<typeof GreasedLineSimpleMaterial>[0];
    scene: ConstructorParameters<typeof GreasedLineSimpleMaterial>[1];
    options: ConstructorParameters<typeof GreasedLineSimpleMaterial>[2];
    
    } & MaterialProps,GreasedLineSimpleMaterial>, any>;
  gridBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GridBlock> & Clonable, {
name: ConstructorParameters<typeof GridBlock>[0];
    
    },GridBlock>, any>;
  groundMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GroundMesh> & Clonable, {
name: ConstructorParameters<typeof GroundMesh>[0];
    scene: ConstructorParameters<typeof GroundMesh>[1];
    
    },GroundMesh>, any>;
  hDRCubeTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HDRCubeTexture> & Clonable, {
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
    prefilterIrradianceOnLoad: ConstructorParameters<typeof HDRCubeTexture>[10];
    prefilterUsingCdf: ConstructorParameters<typeof HDRCubeTexture>[11];
    
    } & TextureProps,HDRCubeTexture>, any>;
  hDRCubeTextureAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HDRCubeTextureAssetTask>, {
name: ConstructorParameters<typeof HDRCubeTextureAssetTask>[0];
    url: ConstructorParameters<typeof HDRCubeTextureAssetTask>[1];
    size: ConstructorParameters<typeof HDRCubeTextureAssetTask>[2];
    noMipmap: ConstructorParameters<typeof HDRCubeTextureAssetTask>[3];
    generateHarmonics: ConstructorParameters<typeof HDRCubeTextureAssetTask>[4];
    gammaSpace: ConstructorParameters<typeof HDRCubeTextureAssetTask>[5];
    reserved: ConstructorParameters<typeof HDRCubeTextureAssetTask>[6];
    
    },HDRCubeTextureAssetTask>, any>;
  hDRFiltering: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HDRFiltering>, {
engine: ConstructorParameters<typeof HDRFiltering>[0];
    options: ConstructorParameters<typeof HDRFiltering>[1];
    
    },HDRFiltering>, any>;
  halton2DSequence: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Halton2DSequence>, {
numSamples: ConstructorParameters<typeof Halton2DSequence>[0];
    baseX: ConstructorParameters<typeof Halton2DSequence>[1];
    baseY: ConstructorParameters<typeof Halton2DSequence>[2];
    width: ConstructorParameters<typeof Halton2DSequence>[3];
    height: ConstructorParameters<typeof Halton2DSequence>[4];
    
    },Halton2DSequence>, any>;
  handConstraintBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandConstraintBehavior>, {},HandConstraintBehavior>, any>;
  handleFallbacksForShadows: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof HandleFallbacksForShadows>> & MeshProps, {
        defines: Parameters<typeof HandleFallbacksForShadows>[0];
    fallbacks: Parameters<typeof HandleFallbacksForShadows>[1];
    maxSimultaneousLights: Parameters<typeof HandleFallbacksForShadows>[2];
    rank: Parameters<typeof HandleFallbacksForShadows>[3];
    
            },ReturnType<typeof HandleFallbacksForShadows>>, any>;
  hardwareScalingOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HardwareScalingOptimization>, {
priority: ConstructorParameters<typeof HardwareScalingOptimization>[0];
    maximumScale: ConstructorParameters<typeof HardwareScalingOptimization>[1];
    step: ConstructorParameters<typeof HardwareScalingOptimization>[2];
    
    },HardwareScalingOptimization>, any>;
  havokPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HavokPlugin>, {
_useDeltaForWorldStep: ConstructorParameters<typeof HavokPlugin>[0];
    hpInjection: ConstructorParameters<typeof HavokPlugin>[1];
    
    },HavokPlugin>, any>;
  heightToNormalBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HeightToNormalBlock> & Clonable, {
name: ConstructorParameters<typeof HeightToNormalBlock>[0];
    
    },HeightToNormalBlock>, any>;
  hemisphericLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HemisphericLight> & Clonable, {
name: ConstructorParameters<typeof HemisphericLight>[0];
    direction: ConstructorParameters<typeof HemisphericLight>[1];
    scene: ConstructorParameters<typeof HemisphericLight>[2];
    
    },HemisphericLight>, any>;
  hemisphericParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HemisphericParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof HemisphericParticleEmitter>[0];
    radiusRange: ConstructorParameters<typeof HemisphericParticleEmitter>[1];
    directionRandomizer: ConstructorParameters<typeof HemisphericParticleEmitter>[2];
    
    },HemisphericParticleEmitter>, any>;
  highlightLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HighlightLayer>, {
name: ConstructorParameters<typeof HighlightLayer>[0];
    scene: ConstructorParameters<typeof HighlightLayer>[1];
    options: ConstructorParameters<typeof HighlightLayer>[2];
    
    },HighlightLayer>, any>;
  highlightsPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HighlightsPostProcess> & Clonable, {
name: ConstructorParameters<typeof HighlightsPostProcess>[0];
    options: ConstructorParameters<typeof HighlightsPostProcess>[1];
    camera: ConstructorParameters<typeof HighlightsPostProcess>[2];
    samplingMode: ConstructorParameters<typeof HighlightsPostProcess>[3];
    engine: ConstructorParameters<typeof HighlightsPostProcess>[4];
    reusable: ConstructorParameters<typeof HighlightsPostProcess>[5];
    textureType: ConstructorParameters<typeof HighlightsPostProcess>[6];
    
    },HighlightsPostProcess>, any>;
  hinge2Joint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Hinge2Joint>, {
jointData: ConstructorParameters<typeof Hinge2Joint>[0];
    
    },Hinge2Joint>, any>;
  hingeConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HingeConstraint>, {
pivotA: ConstructorParameters<typeof HingeConstraint>[0];
    pivotB: ConstructorParameters<typeof HingeConstraint>[1];
    axisA: ConstructorParameters<typeof HingeConstraint>[2];
    axisB: ConstructorParameters<typeof HingeConstraint>[3];
    scene: ConstructorParameters<typeof HingeConstraint>[4];
    
    },HingeConstraint>, any>;
  hingeJoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HingeJoint>, {
jointData: ConstructorParameters<typeof HingeJoint>[0];
    
    },HingeJoint>, any>;
  htmlElementTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HtmlElementTexture> & Clonable, {
name: ConstructorParameters<typeof HtmlElementTexture>[0];
    element: ConstructorParameters<typeof HtmlElementTexture>[1];
    options: ConstructorParameters<typeof HtmlElementTexture>[2];
    
    } & TextureProps,HtmlElementTexture>, any>;
  hufUncompress: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof HufUncompress>> & MeshProps, {
        array: Parameters<typeof HufUncompress>[0];
    dataView: Parameters<typeof HufUncompress>[1];
    offset: Parameters<typeof HufUncompress>[2];
    nCompressed: Parameters<typeof HufUncompress>[3];
    outBuffer: Parameters<typeof HufUncompress>[4];
    nRaw: Parameters<typeof HufUncompress>[5];
    
            },ReturnType<typeof HufUncompress>>, any>;
  iblCdfGenerator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IblCdfGenerator>, {
sceneOrEngine: ConstructorParameters<typeof IblCdfGenerator>[0];
    
    },IblCdfGenerator>, any>;
  iblCdfGeneratorSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IblCdfGeneratorSceneComponent>, {
scene: ConstructorParameters<typeof IblCdfGeneratorSceneComponent>[0];
    
    },IblCdfGeneratorSceneComponent>, any>;
  iblShadowsRenderPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IblShadowsRenderPipeline>, {
name: ConstructorParameters<typeof IblShadowsRenderPipeline>[0];
    scene: ConstructorParameters<typeof IblShadowsRenderPipeline>[1];
    options: ConstructorParameters<typeof IblShadowsRenderPipeline>[2];
    cameras: ConstructorParameters<typeof IblShadowsRenderPipeline>[3];
    
    },IblShadowsRenderPipeline>, any>;
  icoSphereBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IcoSphereBlock> & Clonable, {
name: ConstructorParameters<typeof IcoSphereBlock>[0];
    
    },IcoSphereBlock>, any>;
  identityMatrixToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IdentityMatrixToRef>> & MeshProps, {
        result: Parameters<typeof IdentityMatrixToRef>[0];
    
            },ReturnType<typeof IdentityMatrixToRef>>, any>;
  imageAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageAssetTask>, {
name: ConstructorParameters<typeof ImageAssetTask>[0];
    url: ConstructorParameters<typeof ImageAssetTask>[1];
    
    },ImageAssetTask>, any>;
  imageProcessingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingBlock> & Clonable, {
name: ConstructorParameters<typeof ImageProcessingBlock>[0];
    
    },ImageProcessingBlock>, any>;
  imageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingConfiguration> & Clonable, {},ImageProcessingConfiguration>, any>;
  imageProcessingPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageProcessingPostProcess> & Clonable, {
name: ConstructorParameters<typeof ImageProcessingPostProcess>[0];
    options: ConstructorParameters<typeof ImageProcessingPostProcess>[1];
    camera: ConstructorParameters<typeof ImageProcessingPostProcess>[2];
    samplingMode: ConstructorParameters<typeof ImageProcessingPostProcess>[3];
    engine: ConstructorParameters<typeof ImageProcessingPostProcess>[4];
    reusable: ConstructorParameters<typeof ImageProcessingPostProcess>[5];
    textureType: ConstructorParameters<typeof ImageProcessingPostProcess>[6];
    imageProcessingConfiguration: ConstructorParameters<typeof ImageProcessingPostProcess>[7];
    
    },ImageProcessingPostProcess>, any>;
  imageSourceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageSourceBlock> & Clonable, {
name: ConstructorParameters<typeof ImageSourceBlock>[0];
    
    },ImageSourceBlock>, any>;
  importAnimationsAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ImportAnimationsAsync>> & MeshProps, {
        source: Parameters<typeof ImportAnimationsAsync>[0];
    scene: Parameters<typeof ImportAnimationsAsync>[1];
    options: Parameters<typeof ImportAnimationsAsync>[2];
    
            },ReturnType<typeof ImportAnimationsAsync>>, any>;
  importMeshAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ImportMeshAsync>> & MeshProps, {
        source: Parameters<typeof ImportMeshAsync>[0];
    scene: Parameters<typeof ImportMeshAsync>[1];
    options: Parameters<typeof ImportMeshAsync>[2];
    
            },ReturnType<typeof ImportMeshAsync>>, any>;
  incrementValueAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IncrementValueAction>, {
triggerOptions: ConstructorParameters<typeof IncrementValueAction>[0];
    target: ConstructorParameters<typeof IncrementValueAction>[1];
    propertyPath: ConstructorParameters<typeof IncrementValueAction>[2];
    value: ConstructorParameters<typeof IncrementValueAction>[3];
    condition: ConstructorParameters<typeof IncrementValueAction>[4];
    
    },IncrementValueAction>, any>;
  initializeCSG2Async: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof InitializeCSG2Async>> & MeshProps, {
        options: Parameters<typeof InitializeCSG2Async>[0];
    
            },ReturnType<typeof InitializeCSG2Async>>, any>;
  inputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InputBlock> & Clonable, {
name: ConstructorParameters<typeof InputBlock>[0];
    target: ConstructorParameters<typeof InputBlock>[1];
    type: ConstructorParameters<typeof InputBlock>[2];
    
    },InputBlock>, any>;
  instancedLinesMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstancedLinesMesh> & Clonable, {
name: ConstructorParameters<typeof InstancedLinesMesh>[0];
    source: ConstructorParameters<typeof InstancedLinesMesh>[1];
    
    },InstancedLinesMesh>, any>;
  instancedMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstancedMesh> & Clonable, {
name: ConstructorParameters<typeof InstancedMesh>[0];
    source: ConstructorParameters<typeof InstancedMesh>[1];
    
    },InstancedMesh>, any>;
  instancesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstancesBlock> & Clonable, {
name: ConstructorParameters<typeof InstancesBlock>[0];
    
    },InstancesBlock>, any>;
  instantiateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateBlock>[0];
    
    },InstantiateBlock>, any>;
  instantiateLinearBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateLinearBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateLinearBlock>[0];
    
    },InstantiateLinearBlock>, any>;
  instantiateOnFacesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateOnFacesBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateOnFacesBlock>[0];
    
    },InstantiateOnFacesBlock>, any>;
  instantiateOnVerticesBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateOnVerticesBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateOnVerticesBlock>[0];
    
    },InstantiateOnVerticesBlock>, any>;
  instantiateOnVolumeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateOnVolumeBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateOnVolumeBlock>[0];
    
    },InstantiateOnVolumeBlock>, any>;
  instantiateRadialBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiateRadialBlock> & Clonable, {
name: ConstructorParameters<typeof InstantiateRadialBlock>[0];
    
    },InstantiateRadialBlock>, any>;
  instantiatedEntries: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InstantiatedEntries>, {},InstantiatedEntries>, any>;
  intFloatConverterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IntFloatConverterBlock> & Clonable, {
name: ConstructorParameters<typeof IntFloatConverterBlock>[0];
    
    },IntFloatConverterBlock>, any>;
  interleaveScalar: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof InterleaveScalar>> & MeshProps, {
        source: Parameters<typeof InterleaveScalar>[0];
    out: Parameters<typeof InterleaveScalar>[1];
    
            },ReturnType<typeof InterleaveScalar>>, any>;
  internalTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InternalTexture>, {
engine: ConstructorParameters<typeof InternalTexture>[0];
    source: ConstructorParameters<typeof InternalTexture>[1];
    delayAllocation: ConstructorParameters<typeof InternalTexture>[2];
    
    },InternalTexture>, any>;
  interpolateValueAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InterpolateValueAction>, {
triggerOptions: ConstructorParameters<typeof InterpolateValueAction>[0];
    target: ConstructorParameters<typeof InterpolateValueAction>[1];
    propertyPath: ConstructorParameters<typeof InterpolateValueAction>[2];
    value: ConstructorParameters<typeof InterpolateValueAction>[3];
    duration: ConstructorParameters<typeof InterpolateValueAction>[4];
    condition: ConstructorParameters<typeof InterpolateValueAction>[5];
    stopOtherAnimations: ConstructorParameters<typeof InterpolateValueAction>[6];
    onInterpolationDone: ConstructorParameters<typeof InterpolateValueAction>[7];
    
    },InterpolateValueAction>, any>;
  intersectionInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IntersectionInfo>, {
bu: ConstructorParameters<typeof IntersectionInfo>[0];
    bv: ConstructorParameters<typeof IntersectionInfo>[1];
    distance: ConstructorParameters<typeof IntersectionInfo>[2];
    
    },IntersectionInfo>, any>;
  invertMatrixToArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof InvertMatrixToArray>> & MeshProps, {
        source: Parameters<typeof InvertMatrixToArray>[0];
    target: Parameters<typeof InvertMatrixToArray>[1];
    
            },ReturnType<typeof InvertMatrixToArray>>, any>;
  invertMatrixToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof InvertMatrixToRef>> & MeshProps, {
        source: Parameters<typeof InvertMatrixToRef>[0];
    target: Parameters<typeof InvertMatrixToRef>[1];
    
            },ReturnType<typeof InvertMatrixToRef>>, any>;
  iridescenceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<IridescenceBlock> & Clonable, {
name: ConstructorParameters<typeof IridescenceBlock>[0];
    
    },IridescenceBlock>, any>;
  isBase64DataUrl: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsBase64DataUrl>> & MeshProps, {},ReturnType<typeof IsBase64DataUrl>>, any>;
  isCSG2Ready: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsCSG2Ready>> & MeshProps, {},ReturnType<typeof IsCSG2Ready>>, any>;
  isDocumentAvailable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsDocumentAvailable>> & MeshProps, {},ReturnType<typeof IsDocumentAvailable>>, any>;
  isFileURL: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsFileURL>> & MeshProps, {},ReturnType<typeof IsFileURL>>, any>;
  isNavigatorAvailable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsNavigatorAvailable>> & MeshProps, {},ReturnType<typeof IsNavigatorAvailable>>, any>;
  isWindowObjectExist: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsWindowObjectExist>> & MeshProps, {},ReturnType<typeof IsWindowObjectExist>>, any>;
  isWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof IsWrapper>> & MeshProps, {
        effect: Parameters<typeof IsWrapper>[0];
    
            },ReturnType<typeof IsWrapper>>, any>;
  keyboardInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<KeyboardInfo>, {
type: ConstructorParameters<typeof KeyboardInfo>[0];
    event: ConstructorParameters<typeof KeyboardInfo>[1];
    
    },KeyboardInfo>, any>;
  keyboardInfoPre: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<KeyboardInfoPre>, {
type: ConstructorParameters<typeof KeyboardInfoPre>[0];
    event: ConstructorParameters<typeof KeyboardInfoPre>[1];
    
    },KeyboardInfoPre>, any>;
  khronosTextureContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<KhronosTextureContainer>, {
data: ConstructorParameters<typeof KhronosTextureContainer>[0];
    facesExpected: ConstructorParameters<typeof KhronosTextureContainer>[1];
    
    },KhronosTextureContainer>, any>;
  khronosTextureContainer2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<KhronosTextureContainer2>, {
engine: ConstructorParameters<typeof KhronosTextureContainer2>[0];
    numWorkersOrOptions: ConstructorParameters<typeof KhronosTextureContainer2>[1];
    
    },KhronosTextureContainer2>, any>;
  lastdAudioEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LastCreatedAudioEngine>> & MeshProps, {},ReturnType<typeof LastCreatedAudioEngine>>, any>;
  lattice: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Lattice>, {
options: ConstructorParameters<typeof Lattice>[0];
    
    },Lattice>, any>;
  latticeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LatticeBlock> & Clonable, {
name: ConstructorParameters<typeof LatticeBlock>[0];
    
    },LatticeBlock>, any>;
  latticePluginMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LatticePluginMaterial>, {
lattice: ConstructorParameters<typeof LatticePluginMaterial>[0];
    material: ConstructorParameters<typeof LatticePluginMaterial>[1];
    
    },LatticePluginMaterial>, any>;
  layer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Layer>, {
name: ConstructorParameters<typeof Layer>[0];
    imgUrl: ConstructorParameters<typeof Layer>[1];
    scene: ConstructorParameters<typeof Layer>[2];
    isBackground: ConstructorParameters<typeof Layer>[3];
    color: ConstructorParameters<typeof Layer>[4];
    forceGLSL: ConstructorParameters<typeof Layer>[5];
    
    },Layer>, any>;
  layerSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LayerSceneComponent>, {
scene: ConstructorParameters<typeof LayerSceneComponent>[0];
    
    },LayerSceneComponent>, any>;
  lazy: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Lazy>, {
factory: ConstructorParameters<typeof Lazy>[0];
    
    },Lazy>, any>;
  lengthBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LengthBlock> & Clonable, {
name: ConstructorParameters<typeof LengthBlock>[0];
    
    },LengthBlock>, any>;
  lensFlare: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LensFlare>, {
size: ConstructorParameters<typeof LensFlare>[0];
    position: ConstructorParameters<typeof LensFlare>[1];
    color: ConstructorParameters<typeof LensFlare>[2];
    imgUrl: ConstructorParameters<typeof LensFlare>[3];
    system: ConstructorParameters<typeof LensFlare>[4];
    
    },LensFlare>, any>;
  lensFlareSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LensFlareSystem>, {
name: ConstructorParameters<typeof LensFlareSystem>[0];
    emitter: ConstructorParameters<typeof LensFlareSystem>[1];
    scene: ConstructorParameters<typeof LensFlareSystem>[2];
    
    },LensFlareSystem>, any>;
  lensFlareSystemSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LensFlareSystemSceneComponent>, {
scene: ConstructorParameters<typeof LensFlareSystemSceneComponent>[0];
    
    },LensFlareSystemSceneComponent>, any>;
  lensRenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LensRenderingPipeline>, {
name: ConstructorParameters<typeof LensRenderingPipeline>[0];
    parameters: ConstructorParameters<typeof LensRenderingPipeline>[1];
    scene: ConstructorParameters<typeof LensRenderingPipeline>[2];
    ratio: ConstructorParameters<typeof LensRenderingPipeline>[3];
    cameras: ConstructorParameters<typeof LensRenderingPipeline>[4];
    
    },LensRenderingPipeline>, any>;
  lerpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LerpBlock> & Clonable, {
name: ConstructorParameters<typeof LerpBlock>[0];
    
    },LerpBlock>, any>;
  light: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Light> & Clonable, {
name: ConstructorParameters<typeof Light>[0];
    scene: ConstructorParameters<typeof Light>[1];
    
    },Light>, any>;
  lightBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LightBlock> & Clonable, {
name: ConstructorParameters<typeof LightBlock>[0];
    
    },LightBlock>, any>;
  lightGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LightGizmo>, {
gizmoLayer: ConstructorParameters<typeof LightGizmo>[0];
    
    },LightGizmo>, any>;
  lightInformationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LightInformationBlock> & Clonable, {
name: ConstructorParameters<typeof LightInformationBlock>[0];
    
    },LightInformationBlock>, any>;
  lineEdgesRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LineEdgesRenderer>, {
source: ConstructorParameters<typeof LineEdgesRenderer>[0];
    epsilon: ConstructorParameters<typeof LineEdgesRenderer>[1];
    checkVerticesInsteadOfIndices: ConstructorParameters<typeof LineEdgesRenderer>[2];
    
    },LineEdgesRenderer>, any>;
  linesMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LinesMesh> & Clonable, {
name: ConstructorParameters<typeof LinesMesh>[0];
    scene: ConstructorParameters<typeof LinesMesh>[1];
    parent: ConstructorParameters<typeof LinesMesh>[2];
    source: ConstructorParameters<typeof LinesMesh>[3];
    doNotCloneChildren: ConstructorParameters<typeof LinesMesh>[4];
    useVertexColor: ConstructorParameters<typeof LinesMesh>[5];
    useVertexAlpha: ConstructorParameters<typeof LinesMesh>[6];
    material: ConstructorParameters<typeof LinesMesh>[7];
    
    },LinesMesh>, any>;
  loadAssetContainerAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadAssetContainerAsync>> & MeshProps, {
        source: Parameters<typeof LoadAssetContainerAsync>[0];
    scene: Parameters<typeof LoadAssetContainerAsync>[1];
    options: Parameters<typeof LoadAssetContainerAsync>[2];
    
            },ReturnType<typeof LoadAssetContainerAsync>>, any>;
  loadFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadFile>> & MeshProps, {},ReturnType<typeof LoadFile>>, any>;
  loadFileError: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LoadFileError>, {
message: ConstructorParameters<typeof LoadFileError>[0];
    object: ConstructorParameters<typeof LoadFileError>[1];
    
    },LoadFileError>, any>;
  loadIESData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadIESData>> & MeshProps, {
        uint8Array: Parameters<typeof LoadIESData>[0];
    
            },ReturnType<typeof LoadIESData>>, any>;
  loadImage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadImage>> & MeshProps, {},ReturnType<typeof LoadImage>>, any>;
  loadSceneAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadSceneAsync>> & MeshProps, {
        source: Parameters<typeof LoadSceneAsync>[0];
    engine: Parameters<typeof LoadSceneAsync>[1];
    options: Parameters<typeof LoadSceneAsync>[2];
    
            },ReturnType<typeof LoadSceneAsync>>, any>;
  loadTextureFromTranscodeResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof LoadTextureFromTranscodeResult>> & MeshProps, {},ReturnType<typeof LoadTextureFromTranscodeResult>>, any>;
  lockConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LockConstraint>, {
pivotA: ConstructorParameters<typeof LockConstraint>[0];
    pivotB: ConstructorParameters<typeof LockConstraint>[1];
    axisA: ConstructorParameters<typeof LockConstraint>[2];
    axisB: ConstructorParameters<typeof LockConstraint>[3];
    scene: ConstructorParameters<typeof LockConstraint>[4];
    
    },LockConstraint>, any>;
  loopBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LoopBlock> & Clonable, {
name: ConstructorParameters<typeof LoopBlock>[0];
    
    },LoopBlock>, any>;
  mainAudioBus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MainAudioBus>, {
name: ConstructorParameters<typeof MainAudioBus>[0];
    engine: ConstructorParameters<typeof MainAudioBus>[1];
    
    },MainAudioBus>, any>;
  mapRangeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MapRangeBlock> & Clonable, {
name: ConstructorParameters<typeof MapRangeBlock>[0];
    
    },MapRangeBlock>, any>;
  mappingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MappingBlock> & Clonable, {
name: ConstructorParameters<typeof MappingBlock>[0];
    
    },MappingBlock>, any>;
  markAsDirty: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof MarkAsDirty>> & MeshProps, {
        matrix: Parameters<typeof MarkAsDirty>[0];
    
            },ReturnType<typeof MarkAsDirty>>, any>;
  material: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Material> & Clonable, {
name: ConstructorParameters<typeof Material>[0];
    scene: ConstructorParameters<typeof Material>[1];
    doNotAdd: ConstructorParameters<typeof Material>[2];
    forceGLSL: ConstructorParameters<typeof Material>[3];
    
    },Material>, any>;
  materialAnisotropicDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialAnisotropicDefines>, {},MaterialAnisotropicDefines>, any>;
  materialBRDFDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialBRDFDefines>, {},MaterialBRDFDefines>, any>;
  materialClearCoatDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialClearCoatDefines>, {},MaterialClearCoatDefines>, any>;
  materialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialDefines>, {
externalProperties: ConstructorParameters<typeof MaterialDefines>[0];
    
    },MaterialDefines>, any>;
  materialDetailMapDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialDetailMapDefines>, {},MaterialDetailMapDefines>, any>;
  materialGreasedLineDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialGreasedLineDefines>, {},MaterialGreasedLineDefines>, any>;
  materialIridescenceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialIridescenceDefines>, {},MaterialIridescenceDefines>, any>;
  materialPluginBase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialPluginBase>, {
material: ConstructorParameters<typeof MaterialPluginBase>[0];
    name: ConstructorParameters<typeof MaterialPluginBase>[1];
    priority: ConstructorParameters<typeof MaterialPluginBase>[2];
    defines: ConstructorParameters<typeof MaterialPluginBase>[3];
    addToPluginList: ConstructorParameters<typeof MaterialPluginBase>[4];
    enable: ConstructorParameters<typeof MaterialPluginBase>[5];
    resolveIncludes: ConstructorParameters<typeof MaterialPluginBase>[6];
    
    },MaterialPluginBase>, any>;
  materialPluginManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialPluginManager>, {
material: ConstructorParameters<typeof MaterialPluginManager>[0];
    
    },MaterialPluginManager>, any>;
  materialSheenDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSheenDefines>, {},MaterialSheenDefines>, any>;
  materialStencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialStencilState>, {},MaterialStencilState>, any>;
  materialSubSurfaceDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaterialSubSurfaceDefines>, {},MaterialSubSurfaceDefines>, any>;
  mathBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MathBlock> & Clonable, {
name: ConstructorParameters<typeof MathBlock>[0];
    
    },MathBlock>, any>;
  matrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Matrix> & Clonable, {},Matrix>, any>;
  matrixBuilderBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MatrixBuilderBlock> & Clonable, {
name: ConstructorParameters<typeof MatrixBuilderBlock>[0];
    
    },MatrixBuilderBlock>, any>;
  matrixComposeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MatrixComposeBlock> & Clonable, {
name: ConstructorParameters<typeof MatrixComposeBlock>[0];
    
    },MatrixComposeBlock>, any>;
  matrixDeterminantBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MatrixDeterminantBlock> & Clonable, {
name: ConstructorParameters<typeof MatrixDeterminantBlock>[0];
    
    },MatrixDeterminantBlock>, any>;
  matrixSplitterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MatrixSplitterBlock> & Clonable, {
name: ConstructorParameters<typeof MatrixSplitterBlock>[0];
    
    },MatrixSplitterBlock>, any>;
  matrixTransposeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MatrixTransposeBlock> & Clonable, {
name: ConstructorParameters<typeof MatrixTransposeBlock>[0];
    
    },MatrixTransposeBlock>, any>;
  maxBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MaxBlock> & Clonable, {
name: ConstructorParameters<typeof MaxBlock>[0];
    
    },MaxBlock>, any>;
  mergeGeometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MergeGeometryBlock> & Clonable, {
name: ConstructorParameters<typeof MergeGeometryBlock>[0];
    
    },MergeGeometryBlock>, any>;
  mergeMeshesOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MergeMeshesOptimization>, {},MergeMeshesOptimization>, any>;
  mesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Mesh> & Clonable, {
name: ConstructorParameters<typeof Mesh>[0];
    scene: ConstructorParameters<typeof Mesh>[1];
    parentOrOptions: ConstructorParameters<typeof Mesh>[2];
    source: ConstructorParameters<typeof Mesh>[3];
    doNotCloneChildren: ConstructorParameters<typeof Mesh>[4];
    clonePhysicsImpostor: ConstructorParameters<typeof Mesh>[5];
    
    } & MeshProps,Mesh>, any>;
  meshAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshAssetTask>, {
name: ConstructorParameters<typeof MeshAssetTask>[0];
    meshesNames: ConstructorParameters<typeof MeshAssetTask>[1];
    rootUrl: ConstructorParameters<typeof MeshAssetTask>[2];
    sceneFilename: ConstructorParameters<typeof MeshAssetTask>[3];
    extension: ConstructorParameters<typeof MeshAssetTask>[4];
    
    },MeshAssetTask>, any>;
  meshAttributeExistsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshAttributeExistsBlock> & Clonable, {
name: ConstructorParameters<typeof MeshAttributeExistsBlock>[0];
    
    },MeshAttributeExistsBlock>, any>;
  meshBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshBlock> & Clonable, {
name: ConstructorParameters<typeof MeshBlock>[0];
    
    },MeshBlock>, any>;
  meshDebugPluginMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshDebugPluginMaterial>, {
material: ConstructorParameters<typeof MeshDebugPluginMaterial>[0];
    options: ConstructorParameters<typeof MeshDebugPluginMaterial>[1];
    
    },MeshDebugPluginMaterial>, any>;
  meshExploder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshExploder>, {
meshes: ConstructorParameters<typeof MeshExploder>[0];
    centerMesh: ConstructorParameters<typeof MeshExploder>[1];
    
    },MeshExploder>, any>;
  meshLODLevel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshLODLevel>, {
distanceOrScreenCoverage: ConstructorParameters<typeof MeshLODLevel>[0];
    mesh: ConstructorParameters<typeof MeshLODLevel>[1];
    
    },MeshLODLevel>, any>;
  meshParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshParticleEmitter> & Clonable, {
mesh: ConstructorParameters<typeof MeshParticleEmitter>[0];
    
    },MeshParticleEmitter>, any>;
  meshShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshShapeBlock> & Clonable, {
name: ConstructorParameters<typeof MeshShapeBlock>[0];
    
    },MeshShapeBlock>, any>;
  meshUVSpaceRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshUVSpaceRenderer>, {
mesh: ConstructorParameters<typeof MeshUVSpaceRenderer>[0];
    scene: ConstructorParameters<typeof MeshUVSpaceRenderer>[1];
    options: ConstructorParameters<typeof MeshUVSpaceRenderer>[2];
    
    },MeshUVSpaceRenderer>, any>;
  meshoptCompression: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshoptCompression>, {},MeshoptCompression>, any>;
  minBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MinBlock> & Clonable, {
name: ConstructorParameters<typeof MinBlock>[0];
    
    },MinBlock>, any>;
  minMaxReducer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MinMaxReducer>, {
camera: ConstructorParameters<typeof MinMaxReducer>[0];
    
    },MinMaxReducer>, any>;
  mirrorTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MirrorTexture> & Clonable, {
name: ConstructorParameters<typeof MirrorTexture>[0];
    size: ConstructorParameters<typeof MirrorTexture>[1];
    scene: ConstructorParameters<typeof MirrorTexture>[2];
    generateMipMaps: ConstructorParameters<typeof MirrorTexture>[3];
    type: ConstructorParameters<typeof MirrorTexture>[4];
    samplingMode: ConstructorParameters<typeof MirrorTexture>[5];
    generateDepthBuffer: ConstructorParameters<typeof MirrorTexture>[6];
    
    } & TextureProps,MirrorTexture>, any>;
  modBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ModBlock> & Clonable, {
name: ConstructorParameters<typeof ModBlock>[0];
    
    },ModBlock>, any>;
  modelShape: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ModelShape>, {
id: ConstructorParameters<typeof ModelShape>[0];
    shape: ConstructorParameters<typeof ModelShape>[1];
    indices: ConstructorParameters<typeof ModelShape>[2];
    normals: ConstructorParameters<typeof ModelShape>[3];
    colors: ConstructorParameters<typeof ModelShape>[4];
    shapeUV: ConstructorParameters<typeof ModelShape>[5];
    posFunction: ConstructorParameters<typeof ModelShape>[6];
    vtxFunction: ConstructorParameters<typeof ModelShape>[7];
    material: ConstructorParameters<typeof ModelShape>[8];
    
    },ModelShape>, any>;
  morphTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MorphTarget> & Clonable, {
name: ConstructorParameters<typeof MorphTarget>[0];
    influence: ConstructorParameters<typeof MorphTarget>[1];
    scene: ConstructorParameters<typeof MorphTarget>[2];
    
    },MorphTarget>, any>;
  morphTargetManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MorphTargetManager> & Clonable, {
scene: ConstructorParameters<typeof MorphTargetManager>[0];
    
    },MorphTargetManager>, any>;
  morphTargetsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MorphTargetsBlock> & Clonable, {
name: ConstructorParameters<typeof MorphTargetsBlock>[0];
    
    },MorphTargetsBlock>, any>;
  motionBlurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MotionBlurPostProcess> & Clonable, {
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
    
    },MotionBlurPostProcess>, any>;
  motorEnabledJoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MotorEnabledJoint>, {
type: ConstructorParameters<typeof MotorEnabledJoint>[0];
    jointData: ConstructorParameters<typeof MotorEnabledJoint>[1];
    
    },MotorEnabledJoint>, any>;
  multiMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiMaterial> & Clonable, {
name: ConstructorParameters<typeof MultiMaterial>[0];
    scene: ConstructorParameters<typeof MultiMaterial>[1];
    
    } & MaterialProps,MultiMaterial>, any>;
  multiPick: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof MultiPick>> & MeshProps, {
        scene: Parameters<typeof MultiPick>[0];
    x: Parameters<typeof MultiPick>[1];
    y: Parameters<typeof MultiPick>[2];
    predicate: Parameters<typeof MultiPick>[3];
    camera: Parameters<typeof MultiPick>[4];
    trianglePredicate: Parameters<typeof MultiPick>[5];
    
            },ReturnType<typeof MultiPick>>, any>;
  multiPickWithRay: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof MultiPickWithRay>> & MeshProps, {
        scene: Parameters<typeof MultiPickWithRay>[0];
    ray: Parameters<typeof MultiPickWithRay>[1];
    predicate: Parameters<typeof MultiPickWithRay>[2];
    trianglePredicate: Parameters<typeof MultiPickWithRay>[3];
    
            },ReturnType<typeof MultiPickWithRay>>, any>;
  multiPointerScaleBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiPointerScaleBehavior>, {},MultiPointerScaleBehavior>, any>;
  multiRenderTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiRenderTarget> & Clonable, {
name: ConstructorParameters<typeof MultiRenderTarget>[0];
    size: ConstructorParameters<typeof MultiRenderTarget>[1];
    count: ConstructorParameters<typeof MultiRenderTarget>[2];
    scene: ConstructorParameters<typeof MultiRenderTarget>[3];
    options: ConstructorParameters<typeof MultiRenderTarget>[4];
    textureNames: ConstructorParameters<typeof MultiRenderTarget>[5];
    
    } & TextureProps,MultiRenderTarget>, any>;
  multiplyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiplyBlock> & Clonable, {
name: ConstructorParameters<typeof MultiplyBlock>[0];
    
    },MultiplyBlock>, any>;
  multiplyMatricesToArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof MultiplyMatricesToArray>> & MeshProps, {
        a: Parameters<typeof MultiplyMatricesToArray>[0];
    b: Parameters<typeof MultiplyMatricesToArray>[1];
    output: Parameters<typeof MultiplyMatricesToArray>[2];
    offset: Parameters<typeof MultiplyMatricesToArray>[3];
    
            },ReturnType<typeof MultiplyMatricesToArray>>, any>;
  multiplyMatricesToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof MultiplyMatricesToRef>> & MeshProps, {
        a: Parameters<typeof MultiplyMatricesToRef>[0];
    b: Parameters<typeof MultiplyMatricesToRef>[1];
    result: Parameters<typeof MultiplyMatricesToRef>[2];
    offset: Parameters<typeof MultiplyMatricesToRef>[3];
    
            },ReturnType<typeof MultiplyMatricesToRef>>, any>;
  nLerpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NLerpBlock> & Clonable, {
name: ConstructorParameters<typeof NLerpBlock>[0];
    
    },NLerpBlock>, any>;
  nativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeDataStream>, {},NativeDataStream>, any>;
  nativeEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeEngine>, {
options: ConstructorParameters<typeof NativeEngine>[0];
    
    },NativeEngine>, any>;
  nativeXRFrame: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeXRFrame>, {
_nativeImpl: ConstructorParameters<typeof NativeXRFrame>[0];
    
    },NativeXRFrame>, any>;
  nativeXRLayerRenderTargetTextureProvider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeXRLayerRenderTargetTextureProvider>, {
sessionManager: ConstructorParameters<typeof NativeXRLayerRenderTargetTextureProvider>[0];
    layerWrapper: ConstructorParameters<typeof NativeXRLayerRenderTargetTextureProvider>[1];
    
    },NativeXRLayerRenderTargetTextureProvider>, any>;
  nativeXRLayerWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeXRLayerWrapper>, {
layer: ConstructorParameters<typeof NativeXRLayerWrapper>[0];
    
    },NativeXRLayerWrapper>, any>;
  nativeXRRenderTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NativeXRRenderTarget>, {
_xrSessionManager: ConstructorParameters<typeof NativeXRRenderTarget>[0];
    
    },NativeXRRenderTarget>, any>;
  negateBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NegateBlock> & Clonable, {
name: ConstructorParameters<typeof NegateBlock>[0];
    
    },NegateBlock>, any>;
  node: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Node> & Clonable, {
name: ConstructorParameters<typeof Node>[0];
    scene: ConstructorParameters<typeof Node>[1];
    isPure: ConstructorParameters<typeof Node>[2];
    
    },Node>, any>;
  nodeGeometry: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometry> & Clonable, {
name: ConstructorParameters<typeof NodeGeometry>[0];
    
    },NodeGeometry>, any>;
  nodeGeometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBlock> & Clonable, {
name: ConstructorParameters<typeof NodeGeometryBlock>[0];
    
    },NodeGeometryBlock>, any>;
  nodeGeometryBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryBuildState>, {},NodeGeometryBuildState>, any>;
  nodeGeometryConnectionPoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeGeometryConnectionPoint>, {
name: ConstructorParameters<typeof NodeGeometryConnectionPoint>[0];
    ownerBlock: ConstructorParameters<typeof NodeGeometryConnectionPoint>[1];
    direction: ConstructorParameters<typeof NodeGeometryConnectionPoint>[2];
    
    },NodeGeometryConnectionPoint>, any>;
  nodeMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterial> & Clonable, {
name: ConstructorParameters<typeof NodeMaterial>[0];
    scene: ConstructorParameters<typeof NodeMaterial>[1];
    options: ConstructorParameters<typeof NodeMaterial>[2];
    
    } & MaterialProps,NodeMaterial>, any>;
  nodeMaterialBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialBlock> & Clonable, {
name: ConstructorParameters<typeof NodeMaterialBlock>[0];
    target: ConstructorParameters<typeof NodeMaterialBlock>[1];
    isFinalMerger: ConstructorParameters<typeof NodeMaterialBlock>[2];
    isFinalOutput: ConstructorParameters<typeof NodeMaterialBlock>[3];
    
    },NodeMaterialBlock>, any>;
  nodeMaterialConnectionPoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialConnectionPoint>, {
name: ConstructorParameters<typeof NodeMaterialConnectionPoint>[0];
    ownerBlock: ConstructorParameters<typeof NodeMaterialConnectionPoint>[1];
    direction: ConstructorParameters<typeof NodeMaterialConnectionPoint>[2];
    
    },NodeMaterialConnectionPoint>, any>;
  nodeMaterialConnectionPointCustomObject: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialConnectionPointCustomObject>, {
name: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[0];
    ownerBlock: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[1];
    direction: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[2];
    _blockType: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[3];
    _blockName: ConstructorParameters<typeof NodeMaterialConnectionPointCustomObject>[4];
    
    },NodeMaterialConnectionPointCustomObject>, any>;
  nodeMaterialDebugBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialDebugBlock> & Clonable, {
name: ConstructorParameters<typeof NodeMaterialDebugBlock>[0];
    
    },NodeMaterialDebugBlock>, any>;
  nodeMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialDefines>, {},NodeMaterialDefines>, any>;
  nodeMaterialTeleportInBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialTeleportInBlock> & Clonable, {
name: ConstructorParameters<typeof NodeMaterialTeleportInBlock>[0];
    
    },NodeMaterialTeleportInBlock>, any>;
  nodeMaterialTeleportOutBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeMaterialTeleportOutBlock> & Clonable, {
name: ConstructorParameters<typeof NodeMaterialTeleportOutBlock>[0];
    
    },NodeMaterialTeleportOutBlock>, any>;
  nodeParticleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeParticleBlock> & Clonable, {
name: ConstructorParameters<typeof NodeParticleBlock>[0];
    
    },NodeParticleBlock>, any>;
  nodeParticleBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeParticleBuildState>, {},NodeParticleBuildState>, any>;
  nodeParticleConnectionPoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeParticleConnectionPoint>, {
name: ConstructorParameters<typeof NodeParticleConnectionPoint>[0];
    ownerBlock: ConstructorParameters<typeof NodeParticleConnectionPoint>[1];
    direction: ConstructorParameters<typeof NodeParticleConnectionPoint>[2];
    
    },NodeParticleConnectionPoint>, any>;
  nodeParticleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeParticleSystemSet> & Clonable, {
name: ConstructorParameters<typeof NodeParticleSystemSet>[0];
    
    },NodeParticleSystemSet>, any>;
  nodeRenderGraph: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraph> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraph>[0];
    scene: ConstructorParameters<typeof NodeRenderGraph>[1];
    options: ConstructorParameters<typeof NodeRenderGraph>[2];
    
    },NodeRenderGraph>, any>;
  nodeRenderGraphAnaglyphPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphAnaglyphPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphAnaglyphPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphAnaglyphPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphAnaglyphPostProcessBlock>[2];
    
    },NodeRenderGraphAnaglyphPostProcessBlock>, any>;
  nodeRenderGraphBlackAndWhitePostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBlackAndWhitePostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphBlackAndWhitePostProcessBlock>[2];
    
    },NodeRenderGraphBlackAndWhitePostProcessBlock>, any>;
  nodeRenderGraphBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphBlock>[2];
    _additionalConstructionParameters: ConstructorParameters<typeof NodeRenderGraphBlock>[3];
    
    },NodeRenderGraphBlock>, any>;
  nodeRenderGraphBloomPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBloomPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[2];
    hdr: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[3];
    bloomScale: ConstructorParameters<typeof NodeRenderGraphBloomPostProcessBlock>[4];
    
    },NodeRenderGraphBloomPostProcessBlock>, any>;
  nodeRenderGraphBlurPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBlurPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphBlurPostProcessBlock>[2];
    
    },NodeRenderGraphBlurPostProcessBlock>, any>;
  nodeRenderGraphBuildState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphBuildState>, {},NodeRenderGraphBuildState>, any>;
  nodeRenderGraphCascadedShadowGeneratorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphCascadedShadowGeneratorBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphCascadedShadowGeneratorBlock>[2];
    
    },NodeRenderGraphCascadedShadowGeneratorBlock>, any>;
  nodeRenderGraphChromaticAberrationPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphChromaticAberrationPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphChromaticAberrationPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphChromaticAberrationPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphChromaticAberrationPostProcessBlock>[2];
    
    },NodeRenderGraphChromaticAberrationPostProcessBlock>, any>;
  nodeRenderGraphCircleOfConfusionPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphCircleOfConfusionPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphCircleOfConfusionPostProcessBlock>[2];
    
    },NodeRenderGraphCircleOfConfusionPostProcessBlock>, any>;
  nodeRenderGraphClearBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphClearBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphClearBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphClearBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphClearBlock>[2];
    
    },NodeRenderGraphClearBlock>, any>;
  nodeRenderGraphConnectionPoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphConnectionPoint>, {
name: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[0];
    ownerBlock: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[1];
    direction: ConstructorParameters<typeof NodeRenderGraphConnectionPoint>[2];
    
    },NodeRenderGraphConnectionPoint>, any>;
  nodeRenderGraphCopyTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphCopyTextureBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphCopyTextureBlock>[2];
    
    },NodeRenderGraphCopyTextureBlock>, any>;
  nodeRenderGraphCullObjectsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphCullObjectsBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphCullObjectsBlock>[2];
    
    },NodeRenderGraphCullObjectsBlock>, any>;
  nodeRenderGraphDepthOfFieldPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphDepthOfFieldPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[2];
    blurLevel: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[3];
    hdr: ConstructorParameters<typeof NodeRenderGraphDepthOfFieldPostProcessBlock>[4];
    
    },NodeRenderGraphDepthOfFieldPostProcessBlock>, any>;
  nodeRenderGraphElbowBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphElbowBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphElbowBlock>[2];
    
    },NodeRenderGraphElbowBlock>, any>;
  nodeRenderGraphExecuteBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphExecuteBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphExecuteBlock>[2];
    
    },NodeRenderGraphExecuteBlock>, any>;
  nodeRenderGraphExtractHighlightsPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphExtractHighlightsPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphExtractHighlightsPostProcessBlock>[2];
    
    },NodeRenderGraphExtractHighlightsPostProcessBlock>, any>;
  nodeRenderGraphFXAAPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphFXAAPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphFXAAPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphFXAAPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphFXAAPostProcessBlock>[2];
    
    },NodeRenderGraphFXAAPostProcessBlock>, any>;
  nodeRenderGraphGenerateMipmapsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphGenerateMipmapsBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphGenerateMipmapsBlock>[2];
    
    },NodeRenderGraphGenerateMipmapsBlock>, any>;
  nodeRenderGraphGeometryRendererBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphGeometryRendererBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[2];
    doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphGeometryRendererBlock>[3];
    
    },NodeRenderGraphGeometryRendererBlock>, any>;
  nodeRenderGraphGlowLayerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphGlowLayerBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[2];
    ldrMerge: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[3];
    layerTextureRatio: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[4];
    layerTextureFixedSize: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[5];
    layerTextureType: ConstructorParameters<typeof NodeRenderGraphGlowLayerBlock>[6];
    
    },NodeRenderGraphGlowLayerBlock>, any>;
  nodeRenderGraphGrainPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphGrainPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphGrainPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphGrainPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphGrainPostProcessBlock>[2];
    
    },NodeRenderGraphGrainPostProcessBlock>, any>;
  nodeRenderGraphHighlightLayerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphHighlightLayerBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[2];
    layerTextureRatio: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[3];
    layerTextureFixedSize: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[4];
    blurTextureSizeRatio: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[5];
    isStroke: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[6];
    layerTextureType: ConstructorParameters<typeof NodeRenderGraphHighlightLayerBlock>[7];
    
    },NodeRenderGraphHighlightLayerBlock>, any>;
  nodeRenderGraphImageProcessingPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphImageProcessingPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphImageProcessingPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphImageProcessingPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphImageProcessingPostProcessBlock>[2];
    
    },NodeRenderGraphImageProcessingPostProcessBlock>, any>;
  nodeRenderGraphInputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphInputBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphInputBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphInputBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphInputBlock>[2];
    type: ConstructorParameters<typeof NodeRenderGraphInputBlock>[3];
    
    },NodeRenderGraphInputBlock>, any>;
  nodeRenderGraphMotionBlurPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphMotionBlurPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphMotionBlurPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphMotionBlurPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphMotionBlurPostProcessBlock>[2];
    
    },NodeRenderGraphMotionBlurPostProcessBlock>, any>;
  nodeRenderGraphObjectRendererBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphObjectRendererBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[2];
    doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphObjectRendererBlock>[3];
    
    },NodeRenderGraphObjectRendererBlock>, any>;
  nodeRenderGraphOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphOutputBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphOutputBlock>[2];
    
    },NodeRenderGraphOutputBlock>, any>;
  nodeRenderGraphPassCubePostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphPassCubePostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphPassCubePostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphPassCubePostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphPassCubePostProcessBlock>[2];
    
    },NodeRenderGraphPassCubePostProcessBlock>, any>;
  nodeRenderGraphPassPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphPassPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphPassPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphPassPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphPassPostProcessBlock>[2];
    
    },NodeRenderGraphPassPostProcessBlock>, any>;
  nodeRenderGraphResourceContainerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphResourceContainerBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphResourceContainerBlock>[2];
    
    },NodeRenderGraphResourceContainerBlock>, any>;
  nodeRenderGraphSSRPostProcessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphSSRPostProcessBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphSSRPostProcessBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphSSRPostProcessBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphSSRPostProcessBlock>[2];
    textureType: ConstructorParameters<typeof NodeRenderGraphSSRPostProcessBlock>[3];
    
    },NodeRenderGraphSSRPostProcessBlock>, any>;
  nodeRenderGraphShadowGeneratorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphShadowGeneratorBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphShadowGeneratorBlock>[2];
    
    },NodeRenderGraphShadowGeneratorBlock>, any>;
  nodeRenderGraphTAAObjectRendererBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphTAAObjectRendererBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[2];
    doNotChangeAspectRatio: ConstructorParameters<typeof NodeRenderGraphTAAObjectRendererBlock>[3];
    
    },NodeRenderGraphTAAObjectRendererBlock>, any>;
  nodeRenderGraphTeleportInBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphTeleportInBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphTeleportInBlock>[2];
    
    },NodeRenderGraphTeleportInBlock>, any>;
  nodeRenderGraphTeleportOutBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphTeleportOutBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphTeleportOutBlock>[2];
    
    },NodeRenderGraphTeleportOutBlock>, any>;
  nodeRenderGraphUtilityLayerRendererBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphUtilityLayerRendererBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphUtilityLayerRendererBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphUtilityLayerRendererBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphUtilityLayerRendererBlock>[2];
    handleEvents: ConstructorParameters<typeof NodeRenderGraphUtilityLayerRendererBlock>[3];
    
    },NodeRenderGraphUtilityLayerRendererBlock>, any>;
  noiseBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NoiseBlock> & Clonable, {
name: ConstructorParameters<typeof NoiseBlock>[0];
    
    },NoiseBlock>, any>;
  noiseProceduralTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NoiseProceduralTexture> & Clonable, {
name: ConstructorParameters<typeof NoiseProceduralTexture>[0];
    size: ConstructorParameters<typeof NoiseProceduralTexture>[1];
    scene: ConstructorParameters<typeof NoiseProceduralTexture>[2];
    fallbackTexture: ConstructorParameters<typeof NoiseProceduralTexture>[3];
    generateMipMaps: ConstructorParameters<typeof NoiseProceduralTexture>[4];
    
    } & TextureProps,NoiseProceduralTexture>, any>;
  normalBlendBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NormalBlendBlock> & Clonable, {
name: ConstructorParameters<typeof NormalBlendBlock>[0];
    
    },NormalBlendBlock>, any>;
  normalizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NormalizeBlock> & Clonable, {
name: ConstructorParameters<typeof NormalizeBlock>[0];
    
    },NormalizeBlock>, any>;
  normalizeVectorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NormalizeVectorBlock> & Clonable, {
name: ConstructorParameters<typeof NormalizeVectorBlock>[0];
    
    },NormalizeVectorBlock>, any>;
  nullBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NullBlock> & Clonable, {
name: ConstructorParameters<typeof NullBlock>[0];
    
    },NullBlock>, any>;
  nullEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NullEngine>, {
options: ConstructorParameters<typeof NullEngine>[0];
    
    },NullEngine>, any>;
  nullEngineOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NullEngineOptions>, {},NullEngineOptions>, any>;
  objectRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ObjectRenderer> & Clonable, {
name: ConstructorParameters<typeof ObjectRenderer>[0];
    scene: ConstructorParameters<typeof ObjectRenderer>[1];
    options: ConstructorParameters<typeof ObjectRenderer>[2];
    
    },ObjectRenderer>, any>;
  observable: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Observable> & Clonable, {
onObserverAdded: ConstructorParameters<typeof Observable>[0];
    notifyIfTriggered: ConstructorParameters<typeof Observable>[1];
    
    },Observable>, any>;
  observer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Observer>, {
callback: ConstructorParameters<typeof Observer>[0];
    mask: ConstructorParameters<typeof Observer>[1];
    scope: ConstructorParameters<typeof Observer>[2];
    
    },Observer>, any>;
  occlusionMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OcclusionMaterial> & Clonable, {
name: ConstructorParameters<typeof OcclusionMaterial>[0];
    scene: ConstructorParameters<typeof OcclusionMaterial>[1];
    
    } & MaterialProps,OcclusionMaterial>, any>;
  octree: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Octree>, {
creationFunc: ConstructorParameters<typeof Octree>[0];
    maxBlockCapacity: ConstructorParameters<typeof Octree>[1];
    maxDepth: ConstructorParameters<typeof Octree>[2];
    
    },Octree>, any>;
  octreeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OctreeBlock>, {
minPoint: ConstructorParameters<typeof OctreeBlock>[0];
    maxPoint: ConstructorParameters<typeof OctreeBlock>[1];
    capacity: ConstructorParameters<typeof OctreeBlock>[2];
    depth: ConstructorParameters<typeof OctreeBlock>[3];
    maxDepth: ConstructorParameters<typeof OctreeBlock>[4];
    creationFunc: ConstructorParameters<typeof OctreeBlock>[5];
    
    },OctreeBlock>, any>;
  octreeSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OctreeSceneComponent>, {
scene: ConstructorParameters<typeof OctreeSceneComponent>[0];
    
    },OctreeSceneComponent>, any>;
  oimoJSPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OimoJSPlugin>, {
_useDeltaForWorldStep: ConstructorParameters<typeof OimoJSPlugin>[0];
    iterations: ConstructorParameters<typeof OimoJSPlugin>[1];
    oimoInjection: ConstructorParameters<typeof OimoJSPlugin>[2];
    
    },OimoJSPlugin>, any>;
  oneMinusBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OneMinusBlock> & Clonable, {
name: ConstructorParameters<typeof OneMinusBlock>[0];
    
    },OneMinusBlock>, any>;
  optimizeAnimations: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof OptimizeAnimations>> & MeshProps, {
        scene: Parameters<typeof OptimizeAnimations>[0];
    options: Parameters<typeof OptimizeAnimations>[1];
    
            },ReturnType<typeof OptimizeAnimations>>, any>;
  optimizeIndices: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof OptimizeIndices>> & MeshProps, {
        indices: Parameters<typeof OptimizeIndices>[0];
    
            },ReturnType<typeof OptimizeIndices>>, any>;
  outlineRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<OutlineRenderer>, {
scene: ConstructorParameters<typeof OutlineRenderer>[0];
    
    },OutlineRenderer>, any>;
  pBRAnisotropicConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRAnisotropicConfiguration>, {
material: ConstructorParameters<typeof PBRAnisotropicConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRAnisotropicConfiguration>[1];
    
    },PBRAnisotropicConfiguration>, any>;
  pBRBRDFConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRBRDFConfiguration>, {
material: ConstructorParameters<typeof PBRBRDFConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRBRDFConfiguration>[1];
    
    },PBRBRDFConfiguration>, any>;
  pBRBaseMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRBaseMaterial> & Clonable, {
name: ConstructorParameters<typeof PBRBaseMaterial>[0];
    scene: ConstructorParameters<typeof PBRBaseMaterial>[1];
    forceGLSL: ConstructorParameters<typeof PBRBaseMaterial>[2];
    
    } & MaterialProps,PBRBaseMaterial>, any>;
  pBRBaseSimpleMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRBaseSimpleMaterial> & Clonable, {
name: ConstructorParameters<typeof PBRBaseSimpleMaterial>[0];
    scene: ConstructorParameters<typeof PBRBaseSimpleMaterial>[1];
    
    } & MaterialProps,PBRBaseSimpleMaterial>, any>;
  pBRClearCoatConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRClearCoatConfiguration>, {
material: ConstructorParameters<typeof PBRClearCoatConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRClearCoatConfiguration>[1];
    
    },PBRClearCoatConfiguration>, any>;
  pBRIridescenceConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRIridescenceConfiguration>, {
material: ConstructorParameters<typeof PBRIridescenceConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRIridescenceConfiguration>[1];
    
    },PBRIridescenceConfiguration>, any>;
  pBRMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRMaterial> & Clonable, {
name: ConstructorParameters<typeof PBRMaterial>[0];
    scene: ConstructorParameters<typeof PBRMaterial>[1];
    forceGLSL: ConstructorParameters<typeof PBRMaterial>[2];
    
    } & MaterialProps,PBRMaterial>, any>;
  pBRMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRMaterialDefines>, {
externalProperties: ConstructorParameters<typeof PBRMaterialDefines>[0];
    
    },PBRMaterialDefines>, any>;
  pBRMetallicRoughnessBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRMetallicRoughnessBlock> & Clonable, {
name: ConstructorParameters<typeof PBRMetallicRoughnessBlock>[0];
    
    },PBRMetallicRoughnessBlock>, any>;
  pBRMetallicRoughnessMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRMetallicRoughnessMaterial> & Clonable, {
name: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[0];
    scene: ConstructorParameters<typeof PBRMetallicRoughnessMaterial>[1];
    
    } & MaterialProps,PBRMetallicRoughnessMaterial>, any>;
  pBRSheenConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRSheenConfiguration>, {
material: ConstructorParameters<typeof PBRSheenConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRSheenConfiguration>[1];
    
    },PBRSheenConfiguration>, any>;
  pBRSpecularGlossinessMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRSpecularGlossinessMaterial> & Clonable, {
name: ConstructorParameters<typeof PBRSpecularGlossinessMaterial>[0];
    scene: ConstructorParameters<typeof PBRSpecularGlossinessMaterial>[1];
    
    } & MaterialProps,PBRSpecularGlossinessMaterial>, any>;
  pBRSubSurfaceConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PBRSubSurfaceConfiguration>, {
material: ConstructorParameters<typeof PBRSubSurfaceConfiguration>[0];
    addToPluginList: ConstructorParameters<typeof PBRSubSurfaceConfiguration>[1];
    
    },PBRSubSurfaceConfiguration>, any>;
  padNumber: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PadNumber>> & MeshProps, {},ReturnType<typeof PadNumber>>, any>;
  parse: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Parse>> & MeshProps, {
        jsonData: Parameters<typeof Parse>[0];
    scene: Parameters<typeof Parse>[1];
    container: Parameters<typeof Parse>[2];
    rootUrl: Parameters<typeof Parse>[3];
    
            },ReturnType<typeof Parse>>, any>;
  parseBlockAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseBlockAsync>> & MeshProps, {
        serializationObject: Parameters<typeof ParseBlockAsync>[0];
    parseOptions: Parameters<typeof ParseBlockAsync>[1];
    
            },ReturnType<typeof ParseBlockAsync>>, any>;
  parseCoordinatorAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseCoordinatorAsync>> & MeshProps, {
        serializedObject: Parameters<typeof ParseCoordinatorAsync>[0];
    options: Parameters<typeof ParseCoordinatorAsync>[1];
    
            },ReturnType<typeof ParseCoordinatorAsync>>, any>;
  parseFloat16: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFloat16>> & MeshProps, {
        dataView: Parameters<typeof ParseFloat16>[0];
    offset: Parameters<typeof ParseFloat16>[1];
    
            },ReturnType<typeof ParseFloat16>>, any>;
  parseFloat32: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFloat32>> & MeshProps, {
        dataView: Parameters<typeof ParseFloat32>[0];
    offset: Parameters<typeof ParseFloat32>[1];
    
            },ReturnType<typeof ParseFloat32>>, any>;
  parseFlowGraph: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFlowGraph>> & MeshProps, {
        serializationObject: Parameters<typeof ParseFlowGraph>[0];
    options: Parameters<typeof ParseFlowGraph>[1];
    resolvedClasses: Parameters<typeof ParseFlowGraph>[2];
    
            },ReturnType<typeof ParseFlowGraph>>, any>;
  parseFlowGraphAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFlowGraphAsync>> & MeshProps, {
        serializationObject: Parameters<typeof ParseFlowGraphAsync>[0];
    options: Parameters<typeof ParseFlowGraphAsync>[1];
    
            },ReturnType<typeof ParseFlowGraphAsync>>, any>;
  parseFlowGraphBlockWithClassType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFlowGraphBlockWithClassType>> & MeshProps, {
        serializationObject: Parameters<typeof ParseFlowGraphBlockWithClassType>[0];
    parseOptions: Parameters<typeof ParseFlowGraphBlockWithClassType>[1];
    classType: Parameters<typeof ParseFlowGraphBlockWithClassType>[2];
    
            },ReturnType<typeof ParseFlowGraphBlockWithClassType>>, any>;
  parseFlowGraphContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseFlowGraphContext>> & MeshProps, {
        serializationObject: Parameters<typeof ParseFlowGraphContext>[0];
    options: Parameters<typeof ParseFlowGraphContext>[1];
    rightHanded: Parameters<typeof ParseFlowGraphContext>[2];
    
            },ReturnType<typeof ParseFlowGraphContext>>, any>;
  parseGraphConnectionWithClassType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseGraphConnectionWithClassType>> & MeshProps, {
        serializationObject: Parameters<typeof ParseGraphConnectionWithClassType>[0];
    ownerBlock: Parameters<typeof ParseGraphConnectionWithClassType>[1];
    classType: Parameters<typeof ParseGraphConnectionWithClassType>[2];
    
            },ReturnType<typeof ParseGraphConnectionWithClassType>>, any>;
  parseGraphDataConnection: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseGraphDataConnection>> & MeshProps, {
        serializationObject: Parameters<typeof ParseGraphDataConnection>[0];
    ownerBlock: Parameters<typeof ParseGraphDataConnection>[1];
    classType: Parameters<typeof ParseGraphDataConnection>[2];
    
            },ReturnType<typeof ParseGraphDataConnection>>, any>;
  parseInt32: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseInt32>> & MeshProps, {
        dataView: Parameters<typeof ParseInt32>[0];
    offset: Parameters<typeof ParseInt32>[1];
    
            },ReturnType<typeof ParseInt32>>, any>;
  parseInt64: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseInt64>> & MeshProps, {
        dataView: Parameters<typeof ParseInt64>[0];
    offset: Parameters<typeof ParseInt64>[1];
    
            },ReturnType<typeof ParseInt64>>, any>;
  parseNullTerminatedString: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseNullTerminatedString>> & MeshProps, {
        buffer: Parameters<typeof ParseNullTerminatedString>[0];
    offset: Parameters<typeof ParseNullTerminatedString>[1];
    
            },ReturnType<typeof ParseNullTerminatedString>>, any>;
  parseUint16: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseUint16>> & MeshProps, {
        dataView: Parameters<typeof ParseUint16>[0];
    offset: Parameters<typeof ParseUint16>[1];
    
            },ReturnType<typeof ParseUint16>>, any>;
  parseUint32: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseUint32>> & MeshProps, {
        dataView: Parameters<typeof ParseUint32>[0];
    offset: Parameters<typeof ParseUint32>[1];
    
            },ReturnType<typeof ParseUint32>>, any>;
  parseUint8: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseUint8>> & MeshProps, {
        dataView: Parameters<typeof ParseUint8>[0];
    offset: Parameters<typeof ParseUint8>[1];
    
            },ReturnType<typeof ParseUint8>>, any>;
  parseUint8Array: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseUint8Array>> & MeshProps, {
        array: Parameters<typeof ParseUint8Array>[0];
    offset: Parameters<typeof ParseUint8Array>[1];
    
            },ReturnType<typeof ParseUint8Array>>, any>;
  parseValue: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ParseValue>> & MeshProps, {
        dataView: Parameters<typeof ParseValue>[0];
    offset: Parameters<typeof ParseValue>[1];
    type: Parameters<typeof ParseValue>[2];
    size: Parameters<typeof ParseValue>[3];
    
            },ReturnType<typeof ParseValue>>, any>;
  particle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Particle>, {
particleSystem: ConstructorParameters<typeof Particle>[0];
    
    },Particle>, any>;
  particleBlendMultiplyBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleBlendMultiplyBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleBlendMultiplyBlock>[0];
    
    },ParticleBlendMultiplyBlock>, any>;
  particleConditionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleConditionBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleConditionBlock>[0];
    
    },ParticleConditionBlock>, any>;
  particleConverterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleConverterBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleConverterBlock>[0];
    
    },ParticleConverterBlock>, any>;
  particleDebugBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleDebugBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleDebugBlock>[0];
    
    },ParticleDebugBlock>, any>;
  particleElbowBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleElbowBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleElbowBlock>[0];
    
    },ParticleElbowBlock>, any>;
  particleGradientBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleGradientBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleGradientBlock>[0];
    
    },ParticleGradientBlock>, any>;
  particleGradientValueBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleGradientValueBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleGradientValueBlock>[0];
    
    },ParticleGradientValueBlock>, any>;
  particleInputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleInputBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleInputBlock>[0];
    type: ConstructorParameters<typeof ParticleInputBlock>[1];
    
    },ParticleInputBlock>, any>;
  particleLerpBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleLerpBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleLerpBlock>[0];
    
    },ParticleLerpBlock>, any>;
  particleMathBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleMathBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleMathBlock>[0];
    
    },ParticleMathBlock>, any>;
  particleRampGradientBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleRampGradientBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleRampGradientBlock>[0];
    
    },ParticleRampGradientBlock>, any>;
  particleRandomBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleRandomBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleRandomBlock>[0];
    
    },ParticleRandomBlock>, any>;
  particleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystem> & Clonable, {},ParticleSystem>, any>;
  particleSystemSet: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleSystemSet>, {},ParticleSystemSet>, any>;
  particleTeleportInBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTeleportInBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTeleportInBlock>[0];
    
    },ParticleTeleportInBlock>, any>;
  particleTeleportOutBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTeleportOutBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTeleportOutBlock>[0];
    
    },ParticleTeleportOutBlock>, any>;
  particleTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTextureBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTextureBlock>[0];
    
    },ParticleTextureBlock>, any>;
  particleTextureSourceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTextureSourceBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTextureSourceBlock>[0];
    
    },ParticleTextureSourceBlock>, any>;
  particleTriggerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTriggerBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTriggerBlock>[0];
    
    },ParticleTriggerBlock>, any>;
  particleTrigonometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ParticleTrigonometryBlock> & Clonable, {
name: ConstructorParameters<typeof ParticleTrigonometryBlock>[0];
    
    },ParticleTrigonometryBlock>, any>;
  passCubePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PassCubePostProcess> & Clonable, {
name: ConstructorParameters<typeof PassCubePostProcess>[0];
    options: ConstructorParameters<typeof PassCubePostProcess>[1];
    camera: ConstructorParameters<typeof PassCubePostProcess>[2];
    samplingMode: ConstructorParameters<typeof PassCubePostProcess>[3];
    engine: ConstructorParameters<typeof PassCubePostProcess>[4];
    reusable: ConstructorParameters<typeof PassCubePostProcess>[5];
    textureType: ConstructorParameters<typeof PassCubePostProcess>[6];
    blockCompilation: ConstructorParameters<typeof PassCubePostProcess>[7];
    
    },PassCubePostProcess>, any>;
  passPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PassPostProcess> & Clonable, {
name: ConstructorParameters<typeof PassPostProcess>[0];
    options: ConstructorParameters<typeof PassPostProcess>[1];
    camera: ConstructorParameters<typeof PassPostProcess>[2];
    samplingMode: ConstructorParameters<typeof PassPostProcess>[3];
    engine: ConstructorParameters<typeof PassPostProcess>[4];
    reusable: ConstructorParameters<typeof PassPostProcess>[5];
    textureType: ConstructorParameters<typeof PassPostProcess>[6];
    blockCompilation: ConstructorParameters<typeof PassPostProcess>[7];
    
    },PassPostProcess>, any>;
  path2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Path2>, {
x: ConstructorParameters<typeof Path2>[0];
    y: ConstructorParameters<typeof Path2>[1];
    
    },Path2>, any>;
  path3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Path3D>, {
path: ConstructorParameters<typeof Path3D>[0];
    firstNormal: ConstructorParameters<typeof Path3D>[1];
    raw: ConstructorParameters<typeof Path3D>[2];
    alignTangentsWithPath: ConstructorParameters<typeof Path3D>[3];
    
    },Path3D>, any>;
  pathCursor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PathCursor>, {
_path: ConstructorParameters<typeof PathCursor>[0];
    
    },PathCursor>, any>;
  perfCounter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerfCounter>, {},PerfCounter>, any>;
  performanceMonitor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerformanceMonitor>, {
frameSampleSize: ConstructorParameters<typeof PerformanceMonitor>[0];
    
    },PerformanceMonitor>, any>;
  performanceViewerCollector: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerformanceViewerCollector>, {
_scene: ConstructorParameters<typeof PerformanceViewerCollector>[0];
    _enabledStrategyCallbacks: ConstructorParameters<typeof PerformanceViewerCollector>[1];
    
    },PerformanceViewerCollector>, any>;
  perturbNormalBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PerturbNormalBlock> & Clonable, {
name: ConstructorParameters<typeof PerturbNormalBlock>[0];
    
    },PerturbNormalBlock>, any>;
  physics6DoFConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Physics6DoFConstraint>, {
constraintParams: ConstructorParameters<typeof Physics6DoFConstraint>[0];
    limits: ConstructorParameters<typeof Physics6DoFConstraint>[1];
    scene: ConstructorParameters<typeof Physics6DoFConstraint>[2];
    
    },Physics6DoFConstraint>, any>;
  physicsAggregate: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsAggregate>, {
transformNode: ConstructorParameters<typeof PhysicsAggregate>[0];
    type: ConstructorParameters<typeof PhysicsAggregate>[1];
    _options: ConstructorParameters<typeof PhysicsAggregate>[2];
    _scene: ConstructorParameters<typeof PhysicsAggregate>[3];
    
    },PhysicsAggregate>, any>;
  physicsBody: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsBody> & Clonable, {
transformNode: ConstructorParameters<typeof PhysicsBody>[0];
    motionType: ConstructorParameters<typeof PhysicsBody>[1];
    startsAsleep: ConstructorParameters<typeof PhysicsBody>[2];
    scene: ConstructorParameters<typeof PhysicsBody>[3];
    
    },PhysicsBody>, any>;
  physicsCharacterController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsCharacterController>, {
position: ConstructorParameters<typeof PhysicsCharacterController>[0];
    characterShapeOptions: ConstructorParameters<typeof PhysicsCharacterController>[1];
    scene: ConstructorParameters<typeof PhysicsCharacterController>[2];
    
    },PhysicsCharacterController>, any>;
  physicsConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsConstraint>, {
type: ConstructorParameters<typeof PhysicsConstraint>[0];
    options: ConstructorParameters<typeof PhysicsConstraint>[1];
    scene: ConstructorParameters<typeof PhysicsConstraint>[2];
    
    },PhysicsConstraint>, any>;
  physicsEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsEngine>, {
gravity: ConstructorParameters<typeof PhysicsEngine>[0];
    _physicsPlugin: ConstructorParameters<typeof PhysicsEngine>[1];
    
    },PhysicsEngine>, any>;
  physicsEngineV2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsEngineV2>, {
gravity: ConstructorParameters<typeof PhysicsEngineV2>[0];
    _physicsPlugin: ConstructorParameters<typeof PhysicsEngineV2>[1];
    
    },PhysicsEngineV2>, any>;
  physicsHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsHelper>, {
scene: ConstructorParameters<typeof PhysicsHelper>[0];
    
    },PhysicsHelper>, any>;
  physicsImpostor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsImpostor> & Clonable, {
object: ConstructorParameters<typeof PhysicsImpostor>[0];
    type: ConstructorParameters<typeof PhysicsImpostor>[1];
    _options: ConstructorParameters<typeof PhysicsImpostor>[2];
    _scene: ConstructorParameters<typeof PhysicsImpostor>[3];
    
    },PhysicsImpostor>, any>;
  physicsJoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsJoint>, {
type: ConstructorParameters<typeof PhysicsJoint>[0];
    jointData: ConstructorParameters<typeof PhysicsJoint>[1];
    
    },PhysicsJoint>, any>;
  physicsRadialExplosionEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRadialExplosionEventOptions>, {},PhysicsRadialExplosionEventOptions>, any>;
  physicsRaycastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsRaycastResult>, {},PhysicsRaycastResult>, any>;
  physicsShape: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShape>, {
options: ConstructorParameters<typeof PhysicsShape>[0];
    scene: ConstructorParameters<typeof PhysicsShape>[1];
    
    },PhysicsShape>, any>;
  physicsShapeBox: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeBox>, {
center: ConstructorParameters<typeof PhysicsShapeBox>[0];
    rotation: ConstructorParameters<typeof PhysicsShapeBox>[1];
    extents: ConstructorParameters<typeof PhysicsShapeBox>[2];
    scene: ConstructorParameters<typeof PhysicsShapeBox>[3];
    
    },PhysicsShapeBox>, any>;
  physicsShapeCapsule: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeCapsule>, {
pointA: ConstructorParameters<typeof PhysicsShapeCapsule>[0];
    pointB: ConstructorParameters<typeof PhysicsShapeCapsule>[1];
    radius: ConstructorParameters<typeof PhysicsShapeCapsule>[2];
    scene: ConstructorParameters<typeof PhysicsShapeCapsule>[3];
    
    },PhysicsShapeCapsule>, any>;
  physicsShapeContainer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeContainer>, {
scene: ConstructorParameters<typeof PhysicsShapeContainer>[0];
    
    },PhysicsShapeContainer>, any>;
  physicsShapeConvexHull: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeConvexHull>, {
mesh: ConstructorParameters<typeof PhysicsShapeConvexHull>[0];
    scene: ConstructorParameters<typeof PhysicsShapeConvexHull>[1];
    
    },PhysicsShapeConvexHull>, any>;
  physicsShapeCylinder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeCylinder>, {
pointA: ConstructorParameters<typeof PhysicsShapeCylinder>[0];
    pointB: ConstructorParameters<typeof PhysicsShapeCylinder>[1];
    radius: ConstructorParameters<typeof PhysicsShapeCylinder>[2];
    scene: ConstructorParameters<typeof PhysicsShapeCylinder>[3];
    
    },PhysicsShapeCylinder>, any>;
  physicsShapeGroundMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeGroundMesh>, {
groundMesh: ConstructorParameters<typeof PhysicsShapeGroundMesh>[0];
    scene: ConstructorParameters<typeof PhysicsShapeGroundMesh>[1];
    
    },PhysicsShapeGroundMesh>, any>;
  physicsShapeHeightField: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeHeightField>, {
heightFieldSizeX: ConstructorParameters<typeof PhysicsShapeHeightField>[0];
    heightFieldSizeZ: ConstructorParameters<typeof PhysicsShapeHeightField>[1];
    numHeightFieldSamplesX: ConstructorParameters<typeof PhysicsShapeHeightField>[2];
    numHeightFieldSamplesZ: ConstructorParameters<typeof PhysicsShapeHeightField>[3];
    heightFieldData: ConstructorParameters<typeof PhysicsShapeHeightField>[4];
    scene: ConstructorParameters<typeof PhysicsShapeHeightField>[5];
    
    },PhysicsShapeHeightField>, any>;
  physicsShapeMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeMesh>, {
mesh: ConstructorParameters<typeof PhysicsShapeMesh>[0];
    scene: ConstructorParameters<typeof PhysicsShapeMesh>[1];
    
    },PhysicsShapeMesh>, any>;
  physicsShapeSphere: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsShapeSphere>, {
center: ConstructorParameters<typeof PhysicsShapeSphere>[0];
    radius: ConstructorParameters<typeof PhysicsShapeSphere>[1];
    scene: ConstructorParameters<typeof PhysicsShapeSphere>[2];
    
    },PhysicsShapeSphere>, any>;
  physicsUpdraftEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsUpdraftEventOptions>, {},PhysicsUpdraftEventOptions>, any>;
  physicsViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsViewer>, {
scene: ConstructorParameters<typeof PhysicsViewer>[0];
    size: ConstructorParameters<typeof PhysicsViewer>[1];
    utilityLayer: ConstructorParameters<typeof PhysicsViewer>[2];
    
    },PhysicsViewer>, any>;
  physicsVortexEventOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PhysicsVortexEventOptions>, {},PhysicsVortexEventOptions>, any>;
  pick: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Pick>> & MeshProps, {
        scene: Parameters<typeof Pick>[0];
    x: Parameters<typeof Pick>[1];
    y: Parameters<typeof Pick>[2];
    predicate: Parameters<typeof Pick>[3];
    fastCheck: Parameters<typeof Pick>[4];
    camera: Parameters<typeof Pick>[5];
    trianglePredicate: Parameters<typeof Pick>[6];
    _enableDistantPicking: Parameters<typeof Pick>[7];
    
            },ReturnType<typeof Pick>>, any>;
  pickWithBoundingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PickWithBoundingInfo>> & MeshProps, {
        scene: Parameters<typeof PickWithBoundingInfo>[0];
    x: Parameters<typeof PickWithBoundingInfo>[1];
    y: Parameters<typeof PickWithBoundingInfo>[2];
    predicate: Parameters<typeof PickWithBoundingInfo>[3];
    fastCheck: Parameters<typeof PickWithBoundingInfo>[4];
    camera: Parameters<typeof PickWithBoundingInfo>[5];
    
            },ReturnType<typeof PickWithBoundingInfo>>, any>;
  pickWithRay: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PickWithRay>> & MeshProps, {
        scene: Parameters<typeof PickWithRay>[0];
    ray: Parameters<typeof PickWithRay>[1];
    predicate: Parameters<typeof PickWithRay>[2];
    fastCheck: Parameters<typeof PickWithRay>[3];
    trianglePredicate: Parameters<typeof PickWithRay>[4];
    
            },ReturnType<typeof PickWithRay>>, any>;
  pickingInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PickingInfo>, {},PickingInfo>, any>;
  planeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PlaneBlock> & Clonable, {
name: ConstructorParameters<typeof PlaneBlock>[0];
    
    },PlaneBlock>, any>;
  planeDragGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PlaneDragGizmo>, {
dragPlaneNormal: ConstructorParameters<typeof PlaneDragGizmo>[0];
    color: ConstructorParameters<typeof PlaneDragGizmo>[1];
    gizmoLayer: ConstructorParameters<typeof PlaneDragGizmo>[2];
    parent: ConstructorParameters<typeof PlaneDragGizmo>[3];
    hoverColor: ConstructorParameters<typeof PlaneDragGizmo>[4];
    disableColor: ConstructorParameters<typeof PlaneDragGizmo>[5];
    
    },PlaneDragGizmo>, any>;
  planeRotationGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PlaneRotationGizmo>, {
planeNormal: ConstructorParameters<typeof PlaneRotationGizmo>[0];
    color: ConstructorParameters<typeof PlaneRotationGizmo>[1];
    gizmoLayer: ConstructorParameters<typeof PlaneRotationGizmo>[2];
    tessellation: ConstructorParameters<typeof PlaneRotationGizmo>[3];
    parent: ConstructorParameters<typeof PlaneRotationGizmo>[4];
    useEulerRotation: ConstructorParameters<typeof PlaneRotationGizmo>[5];
    thickness: ConstructorParameters<typeof PlaneRotationGizmo>[6];
    hoverColor: ConstructorParameters<typeof PlaneRotationGizmo>[7];
    disableColor: ConstructorParameters<typeof PlaneRotationGizmo>[8];
    
    },PlaneRotationGizmo>, any>;
  playAnimationAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PlayAnimationAction>, {
triggerOptions: ConstructorParameters<typeof PlayAnimationAction>[0];
    target: ConstructorParameters<typeof PlayAnimationAction>[1];
    from: ConstructorParameters<typeof PlayAnimationAction>[2];
    to: ConstructorParameters<typeof PlayAnimationAction>[3];
    loop: ConstructorParameters<typeof PlayAnimationAction>[4];
    condition: ConstructorParameters<typeof PlayAnimationAction>[5];
    
    },PlayAnimationAction>, any>;
  playSoundAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PlaySoundAction>, {
triggerOptions: ConstructorParameters<typeof PlaySoundAction>[0];
    sound: ConstructorParameters<typeof PlaySoundAction>[1];
    condition: ConstructorParameters<typeof PlaySoundAction>[2];
    
    },PlaySoundAction>, any>;
  pointLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointLight> & Clonable, {
name: ConstructorParameters<typeof PointLight>[0];
    position: ConstructorParameters<typeof PointLight>[1];
    scene: ConstructorParameters<typeof PointLight>[2];
    
    },PointLight>, any>;
  pointListBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointListBlock> & Clonable, {
name: ConstructorParameters<typeof PointListBlock>[0];
    
    },PointListBlock>, any>;
  pointParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointParticleEmitter> & Clonable, {},PointParticleEmitter>, any>;
  pointShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointShapeBlock> & Clonable, {
name: ConstructorParameters<typeof PointShapeBlock>[0];
    
    },PointShapeBlock>, any>;
  pointerDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerDragBehavior>, {
options: ConstructorParameters<typeof PointerDragBehavior>[0];
    
    },PointerDragBehavior>, any>;
  pointerInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerInfo>, {
type: ConstructorParameters<typeof PointerInfo>[0];
    event: ConstructorParameters<typeof PointerInfo>[1];
    pickInfo: ConstructorParameters<typeof PointerInfo>[2];
    inputManager: ConstructorParameters<typeof PointerInfo>[3];
    
    },PointerInfo>, any>;
  pointerInfoBase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerInfoBase>, {
type: ConstructorParameters<typeof PointerInfoBase>[0];
    event: ConstructorParameters<typeof PointerInfoBase>[1];
    
    },PointerInfoBase>, any>;
  pointerInfoPre: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointerInfoPre>, {
type: ConstructorParameters<typeof PointerInfoPre>[0];
    event: ConstructorParameters<typeof PointerInfoPre>[1];
    localX: ConstructorParameters<typeof PointerInfoPre>[2];
    localY: ConstructorParameters<typeof PointerInfoPre>[3];
    
    },PointerInfoPre>, any>;
  pointsCloudSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointsCloudSystem>, {
name: ConstructorParameters<typeof PointsCloudSystem>[0];
    pointSize: ConstructorParameters<typeof PointsCloudSystem>[1];
    scene: ConstructorParameters<typeof PointsCloudSystem>[2];
    options: ConstructorParameters<typeof PointsCloudSystem>[3];
    
    },PointsCloudSystem>, any>;
  pointsGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PointsGroup>, {
id: ConstructorParameters<typeof PointsGroup>[0];
    posFunction: ConstructorParameters<typeof PointsGroup>[1];
    
    },PointsGroup>, any>;
  polar: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Polar> & Clonable, {
radius: ConstructorParameters<typeof Polar>[0];
    theta: ConstructorParameters<typeof Polar>[1];
    
    },Polar>, any>;
  polygonMeshBuilder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PolygonMeshBuilder>, {
name: ConstructorParameters<typeof PolygonMeshBuilder>[0];
    contours: ConstructorParameters<typeof PolygonMeshBuilder>[1];
    scene: ConstructorParameters<typeof PolygonMeshBuilder>[2];
    earcutInjection: ConstructorParameters<typeof PolygonMeshBuilder>[3];
    
    },PolygonMeshBuilder>, any>;
  polyhedronData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PolyhedronData>, {
name: ConstructorParameters<typeof PolyhedronData>[0];
    category: ConstructorParameters<typeof PolyhedronData>[1];
    vertex: ConstructorParameters<typeof PolyhedronData>[2];
    face: ConstructorParameters<typeof PolyhedronData>[3];
    
    },PolyhedronData>, any>;
  positionGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PositionGizmo>, {
gizmoLayer: ConstructorParameters<typeof PositionGizmo>[0];
    thickness: ConstructorParameters<typeof PositionGizmo>[1];
    gizmoManager: ConstructorParameters<typeof PositionGizmo>[2];
    options: ConstructorParameters<typeof PositionGizmo>[3];
    
    },PositionGizmo>, any>;
  positionNormalTextureVertex: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PositionNormalTextureVertex> & Clonable, {
position: ConstructorParameters<typeof PositionNormalTextureVertex>[0];
    normal: ConstructorParameters<typeof PositionNormalTextureVertex>[1];
    uv: ConstructorParameters<typeof PositionNormalTextureVertex>[2];
    
    },PositionNormalTextureVertex>, any>;
  positionNormalVertex: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PositionNormalVertex> & Clonable, {
position: ConstructorParameters<typeof PositionNormalVertex>[0];
    normal: ConstructorParameters<typeof PositionNormalVertex>[1];
    
    },PositionNormalVertex>, any>;
  postProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcess> & Clonable, {
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
    
    },PostProcess>, any>;
  postProcessManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessManager>, {
scene: ConstructorParameters<typeof PostProcessManager>[0];
    
    },PostProcessManager>, any>;
  postProcessRenderEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderEffect>, {
engine: ConstructorParameters<typeof PostProcessRenderEffect>[0];
    name: ConstructorParameters<typeof PostProcessRenderEffect>[1];
    getPostProcesses: ConstructorParameters<typeof PostProcessRenderEffect>[2];
    singleInstance: ConstructorParameters<typeof PostProcessRenderEffect>[3];
    
    },PostProcessRenderEffect>, any>;
  postProcessRenderPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipeline>, {
_engine: ConstructorParameters<typeof PostProcessRenderPipeline>[0];
    name: ConstructorParameters<typeof PostProcessRenderPipeline>[1];
    
    },PostProcessRenderPipeline>, any>;
  postProcessRenderPipelineManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManager>, {},PostProcessRenderPipelineManager>, any>;
  postProcessRenderPipelineManagerSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PostProcessRenderPipelineManagerSceneComponent>, {
scene: ConstructorParameters<typeof PostProcessRenderPipelineManagerSceneComponent>[0];
    
    },PostProcessRenderPipelineManagerSceneComponent>, any>;
  posterizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PosterizeBlock> & Clonable, {
name: ConstructorParameters<typeof PosterizeBlock>[0];
    
    },PosterizeBlock>, any>;
  powBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PowBlock> & Clonable, {
name: ConstructorParameters<typeof PowBlock>[0];
    
    },PowBlock>, any>;
  powerEase: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PowerEase>, {
power: ConstructorParameters<typeof PowerEase>[0];
    
    },PowerEase>, any>;
  prePassOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassOutputBlock> & Clonable, {
name: ConstructorParameters<typeof PrePassOutputBlock>[0];
    
    },PrePassOutputBlock>, any>;
  prePassRenderer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassRenderer>, {
scene: ConstructorParameters<typeof PrePassRenderer>[0];
    
    },PrePassRenderer>, any>;
  prePassRendererSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassRendererSceneComponent>, {
scene: ConstructorParameters<typeof PrePassRendererSceneComponent>[0];
    
    },PrePassRendererSceneComponent>, any>;
  prePassTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrePassTextureBlock> & Clonable, {
name: ConstructorParameters<typeof PrePassTextureBlock>[0];
    target: ConstructorParameters<typeof PrePassTextureBlock>[1];
    
    },PrePassTextureBlock>, any>;
  predicateCondition: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PredicateCondition>, {
actionManager: ConstructorParameters<typeof PredicateCondition>[0];
    predicate: ConstructorParameters<typeof PredicateCondition>[1];
    
    },PredicateCondition>, any>;
  predictor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Predictor>> & MeshProps, {
        source: Parameters<typeof Predictor>[0];
    
            },ReturnType<typeof Predictor>>, any>;
  prepareAttributesForBakedVertexAnimation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareAttributesForBakedVertexAnimation>> & MeshProps, {
        attribs: Parameters<typeof PrepareAttributesForBakedVertexAnimation>[0];
    mesh: Parameters<typeof PrepareAttributesForBakedVertexAnimation>[1];
    defines: Parameters<typeof PrepareAttributesForBakedVertexAnimation>[2];
    
            },ReturnType<typeof PrepareAttributesForBakedVertexAnimation>>, any>;
  prepareAttributesForBones: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareAttributesForBones>> & MeshProps, {
        attribs: Parameters<typeof PrepareAttributesForBones>[0];
    mesh: Parameters<typeof PrepareAttributesForBones>[1];
    defines: Parameters<typeof PrepareAttributesForBones>[2];
    fallbacks: Parameters<typeof PrepareAttributesForBones>[3];
    
            },ReturnType<typeof PrepareAttributesForBones>>, any>;
  prepareAttributesForInstances: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareAttributesForInstances>> & MeshProps, {
        attribs: Parameters<typeof PrepareAttributesForInstances>[0];
    defines: Parameters<typeof PrepareAttributesForInstances>[1];
    
            },ReturnType<typeof PrepareAttributesForInstances>>, any>;
  prepareAttributesForMorphTargets: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareAttributesForMorphTargets>> & MeshProps, {
        attribs: Parameters<typeof PrepareAttributesForMorphTargets>[0];
    mesh: Parameters<typeof PrepareAttributesForMorphTargets>[1];
    defines: Parameters<typeof PrepareAttributesForMorphTargets>[2];
    usePositionMorph: Parameters<typeof PrepareAttributesForMorphTargets>[3];
    
            },ReturnType<typeof PrepareAttributesForMorphTargets>>, any>;
  prepareAttributesForMorphTargetsInfluencers: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareAttributesForMorphTargetsInfluencers>> & MeshProps, {
        attribs: Parameters<typeof PrepareAttributesForMorphTargetsInfluencers>[0];
    mesh: Parameters<typeof PrepareAttributesForMorphTargetsInfluencers>[1];
    influencers: Parameters<typeof PrepareAttributesForMorphTargetsInfluencers>[2];
    
            },ReturnType<typeof PrepareAttributesForMorphTargetsInfluencers>>, any>;
  prepareDefinesAndAttributesForMorphTargets: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesAndAttributesForMorphTargets>> & MeshProps, {
        morphTargetManager: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[0];
    defines: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[1];
    attribs: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[2];
    mesh: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[3];
    usePositionMorph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[4];
    useNormalMorph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[5];
    useTangentMorph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[6];
    useUVMorph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[7];
    useUV2Morph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[8];
    useColorMorph: Parameters<typeof PrepareDefinesAndAttributesForMorphTargets>[9];
    
            },ReturnType<typeof PrepareDefinesAndAttributesForMorphTargets>>, any>;
  prepareDefinesForAttributes: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForAttributes>> & MeshProps, {
        mesh: Parameters<typeof PrepareDefinesForAttributes>[0];
    defines: Parameters<typeof PrepareDefinesForAttributes>[1];
    useVertexColor: Parameters<typeof PrepareDefinesForAttributes>[2];
    useBones: Parameters<typeof PrepareDefinesForAttributes>[3];
    useMorphTargets: Parameters<typeof PrepareDefinesForAttributes>[4];
    useVertexAlpha: Parameters<typeof PrepareDefinesForAttributes>[5];
    useBakedVertexAnimation: Parameters<typeof PrepareDefinesForAttributes>[6];
    
            },ReturnType<typeof PrepareDefinesForAttributes>>, any>;
  prepareDefinesForBakedVertexAnimation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForBakedVertexAnimation>> & MeshProps, {
        mesh: Parameters<typeof PrepareDefinesForBakedVertexAnimation>[0];
    defines: Parameters<typeof PrepareDefinesForBakedVertexAnimation>[1];
    
            },ReturnType<typeof PrepareDefinesForBakedVertexAnimation>>, any>;
  prepareDefinesForBones: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForBones>> & MeshProps, {
        mesh: Parameters<typeof PrepareDefinesForBones>[0];
    defines: Parameters<typeof PrepareDefinesForBones>[1];
    
            },ReturnType<typeof PrepareDefinesForBones>>, any>;
  prepareDefinesForCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForCamera>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForCamera>[0];
    defines: Parameters<typeof PrepareDefinesForCamera>[1];
    
            },ReturnType<typeof PrepareDefinesForCamera>>, any>;
  prepareDefinesForClipPlanes: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForClipPlanes>> & MeshProps, {
        primaryHolder: Parameters<typeof PrepareDefinesForClipPlanes>[0];
    secondaryHolder: Parameters<typeof PrepareDefinesForClipPlanes>[1];
    defines: Parameters<typeof PrepareDefinesForClipPlanes>[2];
    
            },ReturnType<typeof PrepareDefinesForClipPlanes>>, any>;
  prepareDefinesForFrameBoundValues: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForFrameBoundValues>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForFrameBoundValues>[0];
    engine: Parameters<typeof PrepareDefinesForFrameBoundValues>[1];
    material: Parameters<typeof PrepareDefinesForFrameBoundValues>[2];
    defines: Parameters<typeof PrepareDefinesForFrameBoundValues>[3];
    useInstances: Parameters<typeof PrepareDefinesForFrameBoundValues>[4];
    useClipPlane: Parameters<typeof PrepareDefinesForFrameBoundValues>[5];
    useThinInstances: Parameters<typeof PrepareDefinesForFrameBoundValues>[6];
    
            },ReturnType<typeof PrepareDefinesForFrameBoundValues>>, any>;
  prepareDefinesForLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForLight>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForLight>[0];
    mesh: Parameters<typeof PrepareDefinesForLight>[1];
    light: Parameters<typeof PrepareDefinesForLight>[2];
    lightIndex: Parameters<typeof PrepareDefinesForLight>[3];
    defines: Parameters<typeof PrepareDefinesForLight>[4];
    specularSupported: Parameters<typeof PrepareDefinesForLight>[5];
    state: Parameters<typeof PrepareDefinesForLight>[6];
    
            },ReturnType<typeof PrepareDefinesForLight>>, any>;
  prepareDefinesForLights: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForLights>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForLights>[0];
    mesh: Parameters<typeof PrepareDefinesForLights>[1];
    defines: Parameters<typeof PrepareDefinesForLights>[2];
    specularSupported: Parameters<typeof PrepareDefinesForLights>[3];
    maxSimultaneousLights: Parameters<typeof PrepareDefinesForLights>[4];
    disableLighting: Parameters<typeof PrepareDefinesForLights>[5];
    
            },ReturnType<typeof PrepareDefinesForLights>>, any>;
  prepareDefinesForMergedUV: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForMergedUV>> & MeshProps, {
        texture: Parameters<typeof PrepareDefinesForMergedUV>[0];
    defines: Parameters<typeof PrepareDefinesForMergedUV>[1];
    key: Parameters<typeof PrepareDefinesForMergedUV>[2];
    
            },ReturnType<typeof PrepareDefinesForMergedUV>>, any>;
  prepareDefinesForMisc: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForMisc>> & MeshProps, {
        mesh: Parameters<typeof PrepareDefinesForMisc>[0];
    scene: Parameters<typeof PrepareDefinesForMisc>[1];
    useLogarithmicDepth: Parameters<typeof PrepareDefinesForMisc>[2];
    pointsCloud: Parameters<typeof PrepareDefinesForMisc>[3];
    fogEnabled: Parameters<typeof PrepareDefinesForMisc>[4];
    alphaTest: Parameters<typeof PrepareDefinesForMisc>[5];
    defines: Parameters<typeof PrepareDefinesForMisc>[6];
    applyDecalAfterDetail: Parameters<typeof PrepareDefinesForMisc>[7];
    useVertexPulling: Parameters<typeof PrepareDefinesForMisc>[8];
    renderingMesh: Parameters<typeof PrepareDefinesForMisc>[9];
    
            },ReturnType<typeof PrepareDefinesForMisc>>, any>;
  prepareDefinesForMorphTargets: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForMorphTargets>> & MeshProps, {
        mesh: Parameters<typeof PrepareDefinesForMorphTargets>[0];
    defines: Parameters<typeof PrepareDefinesForMorphTargets>[1];
    
            },ReturnType<typeof PrepareDefinesForMorphTargets>>, any>;
  prepareDefinesForMultiview: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForMultiview>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForMultiview>[0];
    defines: Parameters<typeof PrepareDefinesForMultiview>[1];
    
            },ReturnType<typeof PrepareDefinesForMultiview>>, any>;
  prepareDefinesForOIT: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForOIT>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForOIT>[0];
    defines: Parameters<typeof PrepareDefinesForOIT>[1];
    needAlphaBlending: Parameters<typeof PrepareDefinesForOIT>[2];
    
            },ReturnType<typeof PrepareDefinesForOIT>>, any>;
  prepareDefinesForPrePass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareDefinesForPrePass>> & MeshProps, {
        scene: Parameters<typeof PrepareDefinesForPrePass>[0];
    defines: Parameters<typeof PrepareDefinesForPrePass>[1];
    canRenderToMRT: Parameters<typeof PrepareDefinesForPrePass>[2];
    
            },ReturnType<typeof PrepareDefinesForPrePass>>, any>;
  prepareStringDefinesForClipPlanes: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareStringDefinesForClipPlanes>> & MeshProps, {
        primaryHolder: Parameters<typeof PrepareStringDefinesForClipPlanes>[0];
    secondaryHolder: Parameters<typeof PrepareStringDefinesForClipPlanes>[1];
    defines: Parameters<typeof PrepareStringDefinesForClipPlanes>[2];
    
            },ReturnType<typeof PrepareStringDefinesForClipPlanes>>, any>;
  prepareUniformsAndSamplersForLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareUniformsAndSamplersForLight>> & MeshProps, {
        lightIndex: Parameters<typeof PrepareUniformsAndSamplersForLight>[0];
    uniformsList: Parameters<typeof PrepareUniformsAndSamplersForLight>[1];
    samplersList: Parameters<typeof PrepareUniformsAndSamplersForLight>[2];
    projectedLightTexture: Parameters<typeof PrepareUniformsAndSamplersForLight>[3];
    uniformBuffersList: Parameters<typeof PrepareUniformsAndSamplersForLight>[4];
    updateOnlyBuffersList: Parameters<typeof PrepareUniformsAndSamplersForLight>[5];
    iesLightTexture: Parameters<typeof PrepareUniformsAndSamplersForLight>[6];
    clusteredLightTextures: Parameters<typeof PrepareUniformsAndSamplersForLight>[7];
    
            },ReturnType<typeof PrepareUniformsAndSamplersForLight>>, any>;
  prepareUniformsAndSamplersList: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PrepareUniformsAndSamplersList>> & MeshProps, {
        uniformsListOrOptions: Parameters<typeof PrepareUniformsAndSamplersList>[0];
    samplersList: Parameters<typeof PrepareUniformsAndSamplersList>[1];
    defines: Parameters<typeof PrepareUniformsAndSamplersList>[2];
    maxSimultaneousLights: Parameters<typeof PrepareUniformsAndSamplersList>[3];
    
            },ReturnType<typeof PrepareUniformsAndSamplersList>>, any>;
  pressureObserverWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PressureObserverWrapper>, {
options: ConstructorParameters<typeof PressureObserverWrapper>[0];
    
    },PressureObserverWrapper>, any>;
  prismaticConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PrismaticConstraint>, {
pivotA: ConstructorParameters<typeof PrismaticConstraint>[0];
    pivotB: ConstructorParameters<typeof PrismaticConstraint>[1];
    axisA: ConstructorParameters<typeof PrismaticConstraint>[2];
    axisB: ConstructorParameters<typeof PrismaticConstraint>[3];
    scene: ConstructorParameters<typeof PrismaticConstraint>[4];
    
    },PrismaticConstraint>, any>;
  proceduralTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProceduralTexture> & Clonable, {
name: ConstructorParameters<typeof ProceduralTexture>[0];
    size: ConstructorParameters<typeof ProceduralTexture>[1];
    fragment: ConstructorParameters<typeof ProceduralTexture>[2];
    scene: ConstructorParameters<typeof ProceduralTexture>[3];
    fallbackTexture: ConstructorParameters<typeof ProceduralTexture>[4];
    generateMipMaps: ConstructorParameters<typeof ProceduralTexture>[5];
    isCube: ConstructorParameters<typeof ProceduralTexture>[6];
    textureType: ConstructorParameters<typeof ProceduralTexture>[7];
    
    } & TextureProps,ProceduralTexture>, any>;
  proceduralTextureSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProceduralTextureSceneComponent>, {
scene: ConstructorParameters<typeof ProceduralTextureSceneComponent>[0];
    
    },ProceduralTextureSceneComponent>, any>;
  proximityCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ProximityCastResult>, {},ProximityCastResult>, any>;
  pushAttributesForInstances: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof PushAttributesForInstances>> & MeshProps, {
        attribs: Parameters<typeof PushAttributesForInstances>[0];
    needsPreviousMatrices: Parameters<typeof PushAttributesForInstances>[1];
    
            },ReturnType<typeof PushAttributesForInstances>>, any>;
  pushMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<PushMaterial> & Clonable, {
name: ConstructorParameters<typeof PushMaterial>[0];
    scene: ConstructorParameters<typeof PushMaterial>[1];
    storeEffectOnSubMeshes: ConstructorParameters<typeof PushMaterial>[2];
    forceGLSL: ConstructorParameters<typeof PushMaterial>[3];
    
    } & MaterialProps,PushMaterial>, any>;
  quadraticErrorSimplification: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<QuadraticErrorSimplification>, {
_mesh: ConstructorParameters<typeof QuadraticErrorSimplification>[0];
    
    },QuadraticErrorSimplification>, any>;
  quaternion: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Quaternion> & Clonable, {
x: ConstructorParameters<typeof Quaternion>[0];
    y: ConstructorParameters<typeof Quaternion>[1];
    z: ConstructorParameters<typeof Quaternion>[2];
    w: ConstructorParameters<typeof Quaternion>[3];
    
    },Quaternion>, any>;
  queueNewFrame: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof QueueNewFrame>> & MeshProps, {
        func: Parameters<typeof QueueNewFrame>[0];
    requester: Parameters<typeof QueueNewFrame>[1];
    
            },ReturnType<typeof QueueNewFrame>>, any>;
  rSMCreatePluginMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RSMCreatePluginMaterial>, {
material: ConstructorParameters<typeof RSMCreatePluginMaterial>[0];
    
    },RSMCreatePluginMaterial>, any>;
  ragdoll: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Ragdoll>, {
skeleton: ConstructorParameters<typeof Ragdoll>[0];
    rootTransformNode: ConstructorParameters<typeof Ragdoll>[1];
    config: ConstructorParameters<typeof Ragdoll>[2];
    
    },Ragdoll>, any>;
  randomBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RandomBlock> & Clonable, {
name: ConstructorParameters<typeof RandomBlock>[0];
    
    },RandomBlock>, any>;
  randomGUID: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RandomGUID>> & MeshProps, {},ReturnType<typeof RandomGUID>>, any>;
  randomNumberBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RandomNumberBlock> & Clonable, {
name: ConstructorParameters<typeof RandomNumberBlock>[0];
    
    },RandomNumberBlock>, any>;
  rawCubeTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RawCubeTexture> & Clonable, {
scene: ConstructorParameters<typeof RawCubeTexture>[0];
    data: ConstructorParameters<typeof RawCubeTexture>[1];
    size: ConstructorParameters<typeof RawCubeTexture>[2];
    format: ConstructorParameters<typeof RawCubeTexture>[3];
    type: ConstructorParameters<typeof RawCubeTexture>[4];
    generateMipMaps: ConstructorParameters<typeof RawCubeTexture>[5];
    invertY: ConstructorParameters<typeof RawCubeTexture>[6];
    samplingMode: ConstructorParameters<typeof RawCubeTexture>[7];
    compression: ConstructorParameters<typeof RawCubeTexture>[8];
    
    } & TextureProps,RawCubeTexture>, any>;
  rawTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RawTexture> & Clonable, {
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
    waitDataToBeReady: ConstructorParameters<typeof RawTexture>[11];
    
    } & TextureProps,RawTexture>, any>;
  rawTexture2DArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RawTexture2DArray> & Clonable, {
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
    
    } & TextureProps,RawTexture2DArray>, any>;
  rawTexture3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RawTexture3D> & Clonable, {
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
    
    } & TextureProps,RawTexture3D>, any>;
  ray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Ray> & Clonable, {
origin: ConstructorParameters<typeof Ray>[0];
    direction: ConstructorParameters<typeof Ray>[1];
    length: ConstructorParameters<typeof Ray>[2];
    epsilon: ConstructorParameters<typeof Ray>[3];
    
    },Ray>, any>;
  rayHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RayHelper>, {
ray: ConstructorParameters<typeof RayHelper>[0];
    
    },RayHelper>, any>;
  readExrDataAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ReadExrDataAsync>> & MeshProps, {
        data: Parameters<typeof ReadExrDataAsync>[0];
    
            },ReturnType<typeof ReadExrDataAsync>>, any>;
  readFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ReadFile>> & MeshProps, {},ReturnType<typeof ReadFile>>, any>;
  readFileError: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReadFileError>, {
message: ConstructorParameters<typeof ReadFileError>[0];
    file: ConstructorParameters<typeof ReadFileError>[1];
    
    },ReadFileError>, any>;
  recastJSCrowd: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RecastJSCrowd>, {
plugin: ConstructorParameters<typeof RecastJSCrowd>[0];
    maxAgents: ConstructorParameters<typeof RecastJSCrowd>[1];
    maxAgentRadius: ConstructorParameters<typeof RecastJSCrowd>[2];
    scene: ConstructorParameters<typeof RecastJSCrowd>[3];
    
    },RecastJSCrowd>, any>;
  recastJSPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RecastJSPlugin>, {
recastInjection: ConstructorParameters<typeof RecastJSPlugin>[0];
    
    },RecastJSPlugin>, any>;
  reciprocalBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReciprocalBlock> & Clonable, {
name: ConstructorParameters<typeof ReciprocalBlock>[0];
    
    },ReciprocalBlock>, any>;
  rectAreaLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RectAreaLight> & Clonable, {
name: ConstructorParameters<typeof RectAreaLight>[0];
    position: ConstructorParameters<typeof RectAreaLight>[1];
    width: ConstructorParameters<typeof RectAreaLight>[2];
    height: ConstructorParameters<typeof RectAreaLight>[3];
    scene: ConstructorParameters<typeof RectAreaLight>[4];
    
    },RectAreaLight>, any>;
  reflectBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectBlock> & Clonable, {
name: ConstructorParameters<typeof ReflectBlock>[0];
    
    },ReflectBlock>, any>;
  reflectionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectionBlock> & Clonable, {
name: ConstructorParameters<typeof ReflectionBlock>[0];
    
    },ReflectionBlock>, any>;
  reflectionProbe: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectionProbe>, {
name: ConstructorParameters<typeof ReflectionProbe>[0];
    size: ConstructorParameters<typeof ReflectionProbe>[1];
    scene: ConstructorParameters<typeof ReflectionProbe>[2];
    generateMipMaps: ConstructorParameters<typeof ReflectionProbe>[3];
    useFloat: ConstructorParameters<typeof ReflectionProbe>[4];
    linearSpace: ConstructorParameters<typeof ReflectionProbe>[5];
    
    },ReflectionProbe>, any>;
  reflectionTextureBaseBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectionTextureBaseBlock> & Clonable, {
name: ConstructorParameters<typeof ReflectionTextureBaseBlock>[0];
    
    },ReflectionTextureBaseBlock>, any>;
  reflectionTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectionTextureBlock> & Clonable, {
name: ConstructorParameters<typeof ReflectionTextureBlock>[0];
    
    },ReflectionTextureBlock>, any>;
  reflectiveShadowMap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReflectiveShadowMap>, {
scene: ConstructorParameters<typeof ReflectiveShadowMap>[0];
    light: ConstructorParameters<typeof ReflectiveShadowMap>[1];
    textureDimensions: ConstructorParameters<typeof ReflectiveShadowMap>[2];
    
    },ReflectiveShadowMap>, any>;
  reflector: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Reflector>, {
scene: ConstructorParameters<typeof Reflector>[0];
    hostname: ConstructorParameters<typeof Reflector>[1];
    port: ConstructorParameters<typeof Reflector>[2];
    
    },Reflector>, any>;
  refractBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RefractBlock> & Clonable, {
name: ConstructorParameters<typeof RefractBlock>[0];
    
    },RefractBlock>, any>;
  refractionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RefractionBlock> & Clonable, {
name: ConstructorParameters<typeof RefractionBlock>[0];
    
    },RefractionBlock>, any>;
  refractionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RefractionPostProcess> & Clonable, {
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
    
    },RefractionPostProcess>, any>;
  refractionTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RefractionTexture> & Clonable, {
name: ConstructorParameters<typeof RefractionTexture>[0];
    size: ConstructorParameters<typeof RefractionTexture>[1];
    scene: ConstructorParameters<typeof RefractionTexture>[2];
    generateMipMaps: ConstructorParameters<typeof RefractionTexture>[3];
    
    } & TextureProps,RefractionTexture>, any>;
  registerClass: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterClass>> & MeshProps, {
        className: Parameters<typeof RegisterClass>[0];
    type: Parameters<typeof RegisterClass>[1];
    
            },ReturnType<typeof RegisterClass>>, any>;
  registerMaterialPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterMaterialPlugin>> & MeshProps, {
        pluginName: Parameters<typeof RegisterMaterialPlugin>[0];
    factory: Parameters<typeof RegisterMaterialPlugin>[1];
    
            },ReturnType<typeof RegisterMaterialPlugin>>, any>;
  registerNativeTypeAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterNativeTypeAsync>> & MeshProps, {
        typeName: Parameters<typeof RegisterNativeTypeAsync>[0];
    constructor: Parameters<typeof RegisterNativeTypeAsync>[1];
    
            },ReturnType<typeof RegisterNativeTypeAsync>>, any>;
  registerSceneLoaderPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterSceneLoaderPlugin>> & MeshProps, {
        plugin: Parameters<typeof RegisterSceneLoaderPlugin>[0];
    
            },ReturnType<typeof RegisterSceneLoaderPlugin>>, any>;
  registerTargetForLateAnimationBinding: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RegisterTargetForLateAnimationBinding>> & MeshProps, {
        scene: Parameters<typeof RegisterTargetForLateAnimationBinding>[0];
    runtimeAnimation: Parameters<typeof RegisterTargetForLateAnimationBinding>[1];
    originalValue: Parameters<typeof RegisterTargetForLateAnimationBinding>[2];
    
            },ReturnType<typeof RegisterTargetForLateAnimationBinding>>, any>;
  remapBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RemapBlock> & Clonable, {
name: ConstructorParameters<typeof RemapBlock>[0];
    
    },RemapBlock>, any>;
  removeUnreferencedVerticesData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RemoveUnreferencedVerticesData>> & MeshProps, {
        meshes: Parameters<typeof RemoveUnreferencedVerticesData>[0];
    
            },ReturnType<typeof RemoveUnreferencedVerticesData>>, any>;
  renderTargetTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RenderTargetTexture> & Clonable, {
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
    
    } & TextureProps,RenderTargetTexture>, any>;
  renderTargetWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RenderTargetWrapper>, {
isMulti: ConstructorParameters<typeof RenderTargetWrapper>[0];
    isCube: ConstructorParameters<typeof RenderTargetWrapper>[1];
    size: ConstructorParameters<typeof RenderTargetWrapper>[2];
    engine: ConstructorParameters<typeof RenderTargetWrapper>[3];
    label: ConstructorParameters<typeof RenderTargetWrapper>[4];
    
    },RenderTargetWrapper>, any>;
  renderingGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RenderingGroup>, {
index: ConstructorParameters<typeof RenderingGroup>[0];
    scene: ConstructorParameters<typeof RenderingGroup>[1];
    opaqueSortCompareFn: ConstructorParameters<typeof RenderingGroup>[2];
    alphaTestSortCompareFn: ConstructorParameters<typeof RenderingGroup>[3];
    transparentSortCompareFn: ConstructorParameters<typeof RenderingGroup>[4];
    
    },RenderingGroup>, any>;
  renderingManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RenderingManager>, {
scene: ConstructorParameters<typeof RenderingManager>[0];
    
    },RenderingManager>, any>;
  replaceColorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReplaceColorBlock> & Clonable, {
name: ConstructorParameters<typeof ReplaceColorBlock>[0];
    
    },ReplaceColorBlock>, any>;
  requestFile: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RequestFile>> & MeshProps, {},ReturnType<typeof RequestFile>>, any>;
  requestFileError: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RequestFileError>, {
message: ConstructorParameters<typeof RequestFileError>[0];
    request: ConstructorParameters<typeof RequestFileError>[1];
    
    },RequestFileError>, any>;
  requestFullscreen: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RequestFullscreen>> & MeshProps, {
        element: Parameters<typeof RequestFullscreen>[0];
    
            },ReturnType<typeof RequestFullscreen>>, any>;
  requestPointerlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof RequestPointerlock>> & MeshProps, {
        element: Parameters<typeof RequestPointerlock>[0];
    
            },ReturnType<typeof RequestPointerlock>>, any>;
  resizeImageBitmap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ResizeImageBitmap>> & MeshProps, {
        engine: Parameters<typeof ResizeImageBitmap>[0];
    image: Parameters<typeof ResizeImageBitmap>[1];
    bufferWidth: Parameters<typeof ResizeImageBitmap>[2];
    bufferHeight: Parameters<typeof ResizeImageBitmap>[3];
    
            },ReturnType<typeof ResizeImageBitmap>>, any>;
  reverseLutFromBitmap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ReverseLutFromBitmap>> & MeshProps, {
        bitmap: Parameters<typeof ReverseLutFromBitmap>[0];
    lut: Parameters<typeof ReverseLutFromBitmap>[1];
    
            },ReturnType<typeof ReverseLutFromBitmap>>, any>;
  richType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RichType>, {
typeName: ConstructorParameters<typeof RichType>[0];
    defaultValue: ConstructorParameters<typeof RichType>[1];
    animationType: ConstructorParameters<typeof RichType>[2];
    
    },RichType>, any>;
  rollingAverage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RollingAverage>, {
length: ConstructorParameters<typeof RollingAverage>[0];
    
    },RollingAverage>, any>;
  rotate2dBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Rotate2dBlock> & Clonable, {
name: ConstructorParameters<typeof Rotate2dBlock>[0];
    
    },Rotate2dBlock>, any>;
  rotationGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RotationGizmo>, {
gizmoLayer: ConstructorParameters<typeof RotationGizmo>[0];
    tessellation: ConstructorParameters<typeof RotationGizmo>[1];
    useEulerRotation: ConstructorParameters<typeof RotationGizmo>[2];
    thickness: ConstructorParameters<typeof RotationGizmo>[3];
    gizmoManager: ConstructorParameters<typeof RotationGizmo>[4];
    options: ConstructorParameters<typeof RotationGizmo>[5];
    
    },RotationGizmo>, any>;
  rotationXBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RotationXBlock> & Clonable, {
name: ConstructorParameters<typeof RotationXBlock>[0];
    
    },RotationXBlock>, any>;
  rotationYBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RotationYBlock> & Clonable, {
name: ConstructorParameters<typeof RotationYBlock>[0];
    
    },RotationYBlock>, any>;
  rotationZBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RotationZBlock> & Clonable, {
name: ConstructorParameters<typeof RotationZBlock>[0];
    
    },RotationZBlock>, any>;
  runtimeAnimation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RuntimeAnimation>, {
target: ConstructorParameters<typeof RuntimeAnimation>[0];
    animation: ConstructorParameters<typeof RuntimeAnimation>[1];
    scene: ConstructorParameters<typeof RuntimeAnimation>[2];
    host: ConstructorParameters<typeof RuntimeAnimation>[3];
    
    },RuntimeAnimation>, any>;
  runtimeError: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RuntimeError>, {
message: ConstructorParameters<typeof RuntimeError>[0];
    errorCode: ConstructorParameters<typeof RuntimeError>[1];
    innerError: ConstructorParameters<typeof RuntimeError>[2];
    
    },RuntimeError>, any>;
  sSAO2RenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SSAO2RenderingPipeline>, {
name: ConstructorParameters<typeof SSAO2RenderingPipeline>[0];
    scene: ConstructorParameters<typeof SSAO2RenderingPipeline>[1];
    ratio: ConstructorParameters<typeof SSAO2RenderingPipeline>[2];
    cameras: ConstructorParameters<typeof SSAO2RenderingPipeline>[3];
    forceGeometryBuffer: ConstructorParameters<typeof SSAO2RenderingPipeline>[4];
    textureType: ConstructorParameters<typeof SSAO2RenderingPipeline>[5];
    
    },SSAO2RenderingPipeline>, any>;
  sSAORenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SSAORenderingPipeline>, {
name: ConstructorParameters<typeof SSAORenderingPipeline>[0];
    scene: ConstructorParameters<typeof SSAORenderingPipeline>[1];
    ratio: ConstructorParameters<typeof SSAORenderingPipeline>[2];
    cameras: ConstructorParameters<typeof SSAORenderingPipeline>[3];
    
    },SSAORenderingPipeline>, any>;
  sSRRenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SSRRenderingPipeline>, {
name: ConstructorParameters<typeof SSRRenderingPipeline>[0];
    scene: ConstructorParameters<typeof SSRRenderingPipeline>[1];
    cameras: ConstructorParameters<typeof SSRRenderingPipeline>[2];
    forceGeometryBuffer: ConstructorParameters<typeof SSRRenderingPipeline>[3];
    textureType: ConstructorParameters<typeof SSRRenderingPipeline>[4];
    useScreenspaceDepth: ConstructorParameters<typeof SSRRenderingPipeline>[5];
    
    },SSRRenderingPipeline>, any>;
  scaleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScaleBlock> & Clonable, {
name: ConstructorParameters<typeof ScaleBlock>[0];
    
    },ScaleBlock>, any>;
  scaleGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScaleGizmo>, {
gizmoLayer: ConstructorParameters<typeof ScaleGizmo>[0];
    thickness: ConstructorParameters<typeof ScaleGizmo>[1];
    gizmoManager: ConstructorParameters<typeof ScaleGizmo>[2];
    options: ConstructorParameters<typeof ScaleGizmo>[3];
    
    },ScaleGizmo>, any>;
  scalingBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScalingBlock> & Clonable, {
name: ConstructorParameters<typeof ScalingBlock>[0];
    
    },ScalingBlock>, any>;
  scalingMatrixToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ScalingMatrixToRef>> & MeshProps, {
        x: Parameters<typeof ScalingMatrixToRef>[0];
    y: Parameters<typeof ScalingMatrixToRef>[1];
    z: Parameters<typeof ScalingMatrixToRef>[2];
    result: Parameters<typeof ScalingMatrixToRef>[3];
    
            },ReturnType<typeof ScalingMatrixToRef>>, any>;
  scanData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ScanData>> & MeshProps, {
        decoder: Parameters<typeof ScanData>[0];
    header: Parameters<typeof ScanData>[1];
    dataView: Parameters<typeof ScanData>[2];
    offset: Parameters<typeof ScanData>[3];
    
            },ReturnType<typeof ScanData>>, any>;
  scene: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Scene>, {
engine: ConstructorParameters<typeof Scene>[0];
    options: ConstructorParameters<typeof Scene>[1];
    
    },Scene>, any>;
  sceneDepthBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneDepthBlock> & Clonable, {
name: ConstructorParameters<typeof SceneDepthBlock>[0];
    
    },SceneDepthBlock>, any>;
  sceneInstrumentation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneInstrumentation>, {
scene: ConstructorParameters<typeof SceneInstrumentation>[0];
    
    },SceneInstrumentation>, any>;
  sceneOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneOptimization>, {
priority: ConstructorParameters<typeof SceneOptimization>[0];
    
    },SceneOptimization>, any>;
  sceneOptimizer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneOptimizer>, {
scene: ConstructorParameters<typeof SceneOptimizer>[0];
    options: ConstructorParameters<typeof SceneOptimizer>[1];
    autoGeneratePriorities: ConstructorParameters<typeof SceneOptimizer>[2];
    improvementMode: ConstructorParameters<typeof SceneOptimizer>[3];
    
    },SceneOptimizer>, any>;
  sceneOptimizerOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneOptimizerOptions>, {
targetFrameRate: ConstructorParameters<typeof SceneOptimizerOptions>[0];
    trackerDuration: ConstructorParameters<typeof SceneOptimizerOptions>[1];
    
    },SceneOptimizerOptions>, any>;
  sceneRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SceneRecorder>, {},SceneRecorder>, any>;
  screenSizeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSizeBlock> & Clonable, {
name: ConstructorParameters<typeof ScreenSizeBlock>[0];
    
    },ScreenSizeBlock>, any>;
  screenSpaceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceBlock> & Clonable, {
name: ConstructorParameters<typeof ScreenSpaceBlock>[0];
    
    },ScreenSpaceBlock>, any>;
  screenSpaceCurvaturePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceCurvaturePostProcess> & Clonable, {
name: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[0];
    scene: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[1];
    options: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[2];
    camera: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[3];
    samplingMode: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[4];
    engine: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[5];
    reusable: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[6];
    textureType: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[7];
    blockCompilation: ConstructorParameters<typeof ScreenSpaceCurvaturePostProcess>[8];
    
    },ScreenSpaceCurvaturePostProcess>, any>;
  screenSpaceReflectionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScreenSpaceReflectionPostProcess> & Clonable, {
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
    
    },ScreenSpaceReflectionPostProcess>, any>;
  setBasisTranscoderWorker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetBasisTranscoderWorker>> & MeshProps, {},ReturnType<typeof SetBasisTranscoderWorker>>, any>;
  setColorsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetColorsBlock> & Clonable, {
name: ConstructorParameters<typeof SetColorsBlock>[0];
    
    },SetColorsBlock>, any>;
  setCorsBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetCorsBehavior>> & MeshProps, {},ReturnType<typeof SetCorsBehavior>>, any>;
  setMaterialIDBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetMaterialIDBlock> & Clonable, {
name: ConstructorParameters<typeof SetMaterialIDBlock>[0];
    
    },SetMaterialIDBlock>, any>;
  setNormalsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetNormalsBlock> & Clonable, {
name: ConstructorParameters<typeof SetNormalsBlock>[0];
    
    },SetNormalsBlock>, any>;
  setParentAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetParentAction>, {
triggerOptions: ConstructorParameters<typeof SetParentAction>[0];
    target: ConstructorParameters<typeof SetParentAction>[1];
    parent: ConstructorParameters<typeof SetParentAction>[2];
    condition: ConstructorParameters<typeof SetParentAction>[3];
    
    },SetParentAction>, any>;
  setPositionsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetPositionsBlock> & Clonable, {
name: ConstructorParameters<typeof SetPositionsBlock>[0];
    
    },SetPositionsBlock>, any>;
  setStateAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetStateAction>, {
triggerOptions: ConstructorParameters<typeof SetStateAction>[0];
    target: ConstructorParameters<typeof SetStateAction>[1];
    value: ConstructorParameters<typeof SetStateAction>[2];
    condition: ConstructorParameters<typeof SetStateAction>[3];
    
    },SetStateAction>, any>;
  setTangentsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetTangentsBlock> & Clonable, {
name: ConstructorParameters<typeof SetTangentsBlock>[0];
    
    },SetTangentsBlock>, any>;
  setToDefaultGaussianSplatting: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetToDefaultGaussianSplatting>> & MeshProps, {
        nodeMaterial: Parameters<typeof SetToDefaultGaussianSplatting>[0];
    
            },ReturnType<typeof SetToDefaultGaussianSplatting>>, any>;
  setToDefaultSFE: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SetToDefaultSFE>> & MeshProps, {
        nodeMaterial: Parameters<typeof SetToDefaultSFE>[0];
    
            },ReturnType<typeof SetToDefaultSFE>>, any>;
  setUVsBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetUVsBlock> & Clonable, {
name: ConstructorParameters<typeof SetUVsBlock>[0];
    
    },SetUVsBlock>, any>;
  setValueAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetValueAction>, {
triggerOptions: ConstructorParameters<typeof SetValueAction>[0];
    target: ConstructorParameters<typeof SetValueAction>[1];
    propertyPath: ConstructorParameters<typeof SetValueAction>[2];
    value: ConstructorParameters<typeof SetValueAction>[3];
    condition: ConstructorParameters<typeof SetValueAction>[4];
    
    },SetValueAction>, any>;
  setupSpriteSheetBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SetupSpriteSheetBlock> & Clonable, {
name: ConstructorParameters<typeof SetupSpriteSheetBlock>[0];
    
    },SetupSpriteSheetBlock>, any>;
  shaderCodeInliner: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderCodeInliner>, {
sourceCode: ConstructorParameters<typeof ShaderCodeInliner>[0];
    numMaxIterations: ConstructorParameters<typeof ShaderCodeInliner>[1];
    
    },ShaderCodeInliner>, any>;
  shaderMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShaderMaterial> & Clonable, {
name: ConstructorParameters<typeof ShaderMaterial>[0];
    scene: ConstructorParameters<typeof ShaderMaterial>[1];
    shaderPath: ConstructorParameters<typeof ShaderMaterial>[2];
    options: ConstructorParameters<typeof ShaderMaterial>[3];
    storeEffectOnSubMeshes: ConstructorParameters<typeof ShaderMaterial>[4];
    
    } & MaterialProps,ShaderMaterial>, any>;
  shadowDepthWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowDepthWrapper>, {
baseMaterial: ConstructorParameters<typeof ShadowDepthWrapper>[0];
    scene: ConstructorParameters<typeof ShadowDepthWrapper>[1];
    options: ConstructorParameters<typeof ShadowDepthWrapper>[2];
    
    },ShadowDepthWrapper>, any>;
  shadowGenerator: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowGenerator>, {
mapSize: ConstructorParameters<typeof ShadowGenerator>[0];
    light: ConstructorParameters<typeof ShadowGenerator>[1];
    usefullFloatFirst: ConstructorParameters<typeof ShadowGenerator>[2];
    camera: ConstructorParameters<typeof ShadowGenerator>[3];
    useRedTextureType: ConstructorParameters<typeof ShadowGenerator>[4];
    forceGLSL: ConstructorParameters<typeof ShadowGenerator>[5];
    
    },ShadowGenerator>, any>;
  shadowGeneratorSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowGeneratorSceneComponent>, {
scene: ConstructorParameters<typeof ShadowGeneratorSceneComponent>[0];
    
    },ShadowGeneratorSceneComponent>, any>;
  shadowLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowLight> & Clonable, {},ShadowLight>, any>;
  shadowMapBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShadowMapBlock> & Clonable, {
name: ConstructorParameters<typeof ShadowMapBlock>[0];
    
    },ShadowMapBlock>, any>;
  shapeCastResult: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ShapeCastResult>, {},ShapeCastResult>, any>;
  sharpenPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SharpenPostProcess> & Clonable, {
name: ConstructorParameters<typeof SharpenPostProcess>[0];
    options: ConstructorParameters<typeof SharpenPostProcess>[1];
    camera: ConstructorParameters<typeof SharpenPostProcess>[2];
    samplingMode: ConstructorParameters<typeof SharpenPostProcess>[3];
    engine: ConstructorParameters<typeof SharpenPostProcess>[4];
    reusable: ConstructorParameters<typeof SharpenPostProcess>[5];
    textureType: ConstructorParameters<typeof SharpenPostProcess>[6];
    blockCompilation: ConstructorParameters<typeof SharpenPostProcess>[7];
    
    },SharpenPostProcess>, any>;
  sheenBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SheenBlock> & Clonable, {
name: ConstructorParameters<typeof SheenBlock>[0];
    
    },SheenBlock>, any>;
  simplexPerlin3DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SimplexPerlin3DBlock> & Clonable, {
name: ConstructorParameters<typeof SimplexPerlin3DBlock>[0];
    
    },SimplexPerlin3DBlock>, any>;
  simplicationQueueSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SimplicationQueueSceneComponent>, {
scene: ConstructorParameters<typeof SimplicationQueueSceneComponent>[0];
    
    },SimplicationQueueSceneComponent>, any>;
  simplificationQueue: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SimplificationQueue>, {},SimplificationQueue>, any>;
  simplificationSettings: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SimplificationSettings>, {
quality: ConstructorParameters<typeof SimplificationSettings>[0];
    distance: ConstructorParameters<typeof SimplificationSettings>[1];
    optimizeMesh: ConstructorParameters<typeof SimplificationSettings>[2];
    
    },SimplificationSettings>, any>;
  sixDofDragBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SixDofDragBehavior>, {},SixDofDragBehavior>, any>;
  size: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Size> & Clonable, {
width: ConstructorParameters<typeof Size>[0];
    height: ConstructorParameters<typeof Size>[1];
    
    },Size>, any>;
  skeleton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Skeleton> & Clonable, {
name: ConstructorParameters<typeof Skeleton>[0];
    id: ConstructorParameters<typeof Skeleton>[1];
    scene: ConstructorParameters<typeof Skeleton>[2];
    
    },Skeleton>, any>;
  skeletonViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SkeletonViewer>, {
skeleton: ConstructorParameters<typeof SkeletonViewer>[0];
    mesh: ConstructorParameters<typeof SkeletonViewer>[1];
    scene: ConstructorParameters<typeof SkeletonViewer>[2];
    autoUpdateBonesMatrices: ConstructorParameters<typeof SkeletonViewer>[3];
    renderingGroupId: ConstructorParameters<typeof SkeletonViewer>[4];
    options: ConstructorParameters<typeof SkeletonViewer>[5];
    
    },SkeletonViewer>, any>;
  sliderConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SliderConstraint>, {
pivotA: ConstructorParameters<typeof SliderConstraint>[0];
    pivotB: ConstructorParameters<typeof SliderConstraint>[1];
    axisA: ConstructorParameters<typeof SliderConstraint>[2];
    axisB: ConstructorParameters<typeof SliderConstraint>[3];
    scene: ConstructorParameters<typeof SliderConstraint>[4];
    
    },SliderConstraint>, any>;
  smartArray: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmartArray>, {
capacity: ConstructorParameters<typeof SmartArray>[0];
    
    },SmartArray>, any>;
  smartArrayNoDuplicate: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmartArrayNoDuplicate>, {},SmartArrayNoDuplicate>, any>;
  smartFilterFragmentOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmartFilterFragmentOutputBlock> & Clonable, {
name: ConstructorParameters<typeof SmartFilterFragmentOutputBlock>[0];
    
    },SmartFilterFragmentOutputBlock>, any>;
  smartFilterTextureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmartFilterTextureBlock> & Clonable, {
name: ConstructorParameters<typeof SmartFilterTextureBlock>[0];
    
    },SmartFilterTextureBlock>, any>;
  smoothStepBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SmoothStepBlock> & Clonable, {
name: ConstructorParameters<typeof SmoothStepBlock>[0];
    
    },SmoothStepBlock>, any>;
  snapshotRenderingHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SnapshotRenderingHelper>, {
scene: ConstructorParameters<typeof SnapshotRenderingHelper>[0];
    options: ConstructorParameters<typeof SnapshotRenderingHelper>[1];
    
    },SnapshotRenderingHelper>, any>;
  solidParticle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SolidParticle>, {
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
    
    },SolidParticle>, any>;
  solidParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SolidParticleSystem>, {
name: ConstructorParameters<typeof SolidParticleSystem>[0];
    scene: ConstructorParameters<typeof SolidParticleSystem>[1];
    options: ConstructorParameters<typeof SolidParticleSystem>[2];
    
    },SolidParticleSystem>, any>;
  solidParticleVertex: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SolidParticleVertex>, {},SolidParticleVertex>, any>;
  sound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Sound> & Clonable, {
name: ConstructorParameters<typeof Sound>[0];
    urlOrArrayBuffer: ConstructorParameters<typeof Sound>[1];
    scene: ConstructorParameters<typeof Sound>[2];
    readyToPlayCallback: ConstructorParameters<typeof Sound>[3];
    options: ConstructorParameters<typeof Sound>[4];
    
    },Sound>, any>;
  soundTrack: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SoundTrack>, {
scene: ConstructorParameters<typeof SoundTrack>[0];
    options: ConstructorParameters<typeof SoundTrack>[1];
    
    },SoundTrack>, any>;
  specularPowerToRoughness: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof SpecularPowerToRoughness>> & MeshProps, {
        specularPower: Parameters<typeof SpecularPowerToRoughness>[0];
    p0: Parameters<typeof SpecularPowerToRoughness>[1];
    p1: Parameters<typeof SpecularPowerToRoughness>[2];
    p2: Parameters<typeof SpecularPowerToRoughness>[3];
    p3: Parameters<typeof SpecularPowerToRoughness>[4];
    
            },ReturnType<typeof SpecularPowerToRoughness>>, any>;
  sphereBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphereBlock> & Clonable, {
name: ConstructorParameters<typeof SphereBlock>[0];
    
    },SphereBlock>, any>;
  sphereDirectedParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphereDirectedParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof SphereDirectedParticleEmitter>[0];
    direction1: ConstructorParameters<typeof SphereDirectedParticleEmitter>[1];
    direction2: ConstructorParameters<typeof SphereDirectedParticleEmitter>[2];
    
    },SphereDirectedParticleEmitter>, any>;
  sphereParticleEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphereParticleEmitter> & Clonable, {
radius: ConstructorParameters<typeof SphereParticleEmitter>[0];
    radiusRange: ConstructorParameters<typeof SphereParticleEmitter>[1];
    directionRandomizer: ConstructorParameters<typeof SphereParticleEmitter>[2];
    
    },SphereParticleEmitter>, any>;
  sphereShapeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphereShapeBlock> & Clonable, {
name: ConstructorParameters<typeof SphereShapeBlock>[0];
    
    },SphereShapeBlock>, any>;
  spherical: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Spherical> & Clonable, {
radius: ConstructorParameters<typeof Spherical>[0];
    theta: ConstructorParameters<typeof Spherical>[1];
    phi: ConstructorParameters<typeof Spherical>[2];
    
    },Spherical>, any>;
  sphericalHarmonics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalHarmonics>, {},SphericalHarmonics>, any>;
  sphericalPolynomial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SphericalPolynomial>, {},SphericalPolynomial>, any>;
  splatReaderBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SplatReaderBlock> & Clonable, {
name: ConstructorParameters<typeof SplatReaderBlock>[0];
    
    },SplatReaderBlock>, any>;
  spotLight: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpotLight> & Clonable, {
name: ConstructorParameters<typeof SpotLight>[0];
    position: ConstructorParameters<typeof SpotLight>[1];
    direction: ConstructorParameters<typeof SpotLight>[2];
    angle: ConstructorParameters<typeof SpotLight>[3];
    exponent: ConstructorParameters<typeof SpotLight>[4];
    scene: ConstructorParameters<typeof SpotLight>[5];
    
    },SpotLight>, any>;
  springConstraint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpringConstraint>, {
pivotA: ConstructorParameters<typeof SpringConstraint>[0];
    pivotB: ConstructorParameters<typeof SpringConstraint>[1];
    axisA: ConstructorParameters<typeof SpringConstraint>[2];
    axisB: ConstructorParameters<typeof SpringConstraint>[3];
    minDistance: ConstructorParameters<typeof SpringConstraint>[4];
    maxDistance: ConstructorParameters<typeof SpringConstraint>[5];
    stiffness: ConstructorParameters<typeof SpringConstraint>[6];
    damping: ConstructorParameters<typeof SpringConstraint>[7];
    scene: ConstructorParameters<typeof SpringConstraint>[8];
    
    },SpringConstraint>, any>;
  sprite: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Sprite>, {
name: ConstructorParameters<typeof Sprite>[0];
    manager: ConstructorParameters<typeof Sprite>[1];
    
    },Sprite>, any>;
  spriteManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpriteManager>, {
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
    
    },SpriteManager>, any>;
  spriteMap: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpriteMap>, {
name: ConstructorParameters<typeof SpriteMap>[0];
    atlasJSON: ConstructorParameters<typeof SpriteMap>[1];
    spriteSheet: ConstructorParameters<typeof SpriteMap>[2];
    options: ConstructorParameters<typeof SpriteMap>[3];
    scene: ConstructorParameters<typeof SpriteMap>[4];
    
    },SpriteMap>, any>;
  spritePackedManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpritePackedManager>, {
name: ConstructorParameters<typeof SpritePackedManager>[0];
    imgUrl: ConstructorParameters<typeof SpritePackedManager>[1];
    capacity: ConstructorParameters<typeof SpritePackedManager>[2];
    scene: ConstructorParameters<typeof SpritePackedManager>[3];
    spriteJSON: ConstructorParameters<typeof SpritePackedManager>[4];
    epsilon: ConstructorParameters<typeof SpritePackedManager>[5];
    samplingMode: ConstructorParameters<typeof SpritePackedManager>[6];
    options: ConstructorParameters<typeof SpritePackedManager>[7];
    
    },SpritePackedManager>, any>;
  spriteSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpriteSceneComponent>, {
scene: ConstructorParameters<typeof SpriteSceneComponent>[0];
    
    },SpriteSceneComponent>, any>;
  stage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Stage>, {
items: ConstructorParameters<typeof Stage>[0];
    
    },Stage>, any>;
  standardMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StandardMaterial> & Clonable, {
name: ConstructorParameters<typeof StandardMaterial>[0];
    scene: ConstructorParameters<typeof StandardMaterial>[1];
    forceGLSL: ConstructorParameters<typeof StandardMaterial>[2];
    
    } & MaterialProps,StandardMaterial>, any>;
  standardMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StandardMaterialDefines>, {
externalProperties: ConstructorParameters<typeof StandardMaterialDefines>[0];
    
    },StandardMaterialDefines>, any>;
  standardRenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StandardRenderingPipeline>, {
name: ConstructorParameters<typeof StandardRenderingPipeline>[0];
    scene: ConstructorParameters<typeof StandardRenderingPipeline>[1];
    ratio: ConstructorParameters<typeof StandardRenderingPipeline>[2];
    originalPostProcess: ConstructorParameters<typeof StandardRenderingPipeline>[3];
    cameras: ConstructorParameters<typeof StandardRenderingPipeline>[4];
    
    },StandardRenderingPipeline>, any>;
  startsWith: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof StartsWith>> & MeshProps, {},ReturnType<typeof StartsWith>>, any>;
  stateCondition: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StateCondition>, {
actionManager: ConstructorParameters<typeof StateCondition>[0];
    target: ConstructorParameters<typeof StateCondition>[1];
    value: ConstructorParameters<typeof StateCondition>[2];
    
    },StateCondition>, any>;
  staticSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StaticSound>, {
name: ConstructorParameters<typeof StaticSound>[0];
    engine: ConstructorParameters<typeof StaticSound>[1];
    
    },StaticSound>, any>;
  staticSoundBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StaticSoundBuffer>, {
engine: ConstructorParameters<typeof StaticSoundBuffer>[0];
    
    },StaticSoundBuffer>, any>;
  stencilState: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StencilState>, {},StencilState>, any>;
  stencilStateComposer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StencilStateComposer>, {
reset: ConstructorParameters<typeof StencilStateComposer>[0];
    
    },StencilStateComposer>, any>;
  stepBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StepBlock> & Clonable, {
name: ConstructorParameters<typeof StepBlock>[0];
    
    },StepBlock>, any>;
  stereoscopicArcRotateCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicArcRotateCamera> & Clonable, {
name: ConstructorParameters<typeof StereoscopicArcRotateCamera>[0];
    alpha: ConstructorParameters<typeof StereoscopicArcRotateCamera>[1];
    beta: ConstructorParameters<typeof StereoscopicArcRotateCamera>[2];
    radius: ConstructorParameters<typeof StereoscopicArcRotateCamera>[3];
    target: ConstructorParameters<typeof StereoscopicArcRotateCamera>[4];
    interaxialDistance: ConstructorParameters<typeof StereoscopicArcRotateCamera>[5];
    isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicArcRotateCamera>[6];
    scene: ConstructorParameters<typeof StereoscopicArcRotateCamera>[7];
    
    } & CameraProps,StereoscopicArcRotateCamera>, any>;
  stereoscopicFreeCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicFreeCamera> & Clonable, {
name: ConstructorParameters<typeof StereoscopicFreeCamera>[0];
    position: ConstructorParameters<typeof StereoscopicFreeCamera>[1];
    interaxialDistance: ConstructorParameters<typeof StereoscopicFreeCamera>[2];
    isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicFreeCamera>[3];
    scene: ConstructorParameters<typeof StereoscopicFreeCamera>[4];
    
    } & CameraProps,StereoscopicFreeCamera>, any>;
  stereoscopicGamepadCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicGamepadCamera> & Clonable, {
name: ConstructorParameters<typeof StereoscopicGamepadCamera>[0];
    position: ConstructorParameters<typeof StereoscopicGamepadCamera>[1];
    interaxialDistance: ConstructorParameters<typeof StereoscopicGamepadCamera>[2];
    isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicGamepadCamera>[3];
    scene: ConstructorParameters<typeof StereoscopicGamepadCamera>[4];
    
    } & CameraProps,StereoscopicGamepadCamera>, any>;
  stereoscopicInterlacePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicInterlacePostProcess> & Clonable, {
name: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[0];
    rigCameras: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[1];
    isStereoscopicHoriz: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[2];
    samplingMode: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[3];
    engine: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[4];
    reusable: ConstructorParameters<typeof StereoscopicInterlacePostProcess>[5];
    
    },StereoscopicInterlacePostProcess>, any>;
  stereoscopicInterlacePostProcessI: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicInterlacePostProcessI> & Clonable, {
name: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[0];
    rigCameras: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[1];
    isStereoscopicHoriz: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[2];
    isStereoscopicInterlaced: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[3];
    samplingMode: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[4];
    engine: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[5];
    reusable: ConstructorParameters<typeof StereoscopicInterlacePostProcessI>[6];
    
    },StereoscopicInterlacePostProcessI>, any>;
  stereoscopicScreenUniversalCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicScreenUniversalCamera> & Clonable, {
name: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[0];
    position: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[1];
    scene: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[2];
    distanceToProjectionPlane: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[3];
    distanceBetweenEyes: ConstructorParameters<typeof StereoscopicScreenUniversalCamera>[4];
    
    } & CameraProps,StereoscopicScreenUniversalCamera>, any>;
  stereoscopicUniversalCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StereoscopicUniversalCamera> & Clonable, {
name: ConstructorParameters<typeof StereoscopicUniversalCamera>[0];
    position: ConstructorParameters<typeof StereoscopicUniversalCamera>[1];
    interaxialDistance: ConstructorParameters<typeof StereoscopicUniversalCamera>[2];
    isStereoscopicSideBySide: ConstructorParameters<typeof StereoscopicUniversalCamera>[3];
    scene: ConstructorParameters<typeof StereoscopicUniversalCamera>[4];
    
    } & CameraProps,StereoscopicUniversalCamera>, any>;
  stickValues: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StickValues>, {
x: ConstructorParameters<typeof StickValues>[0];
    y: ConstructorParameters<typeof StickValues>[1];
    
    },StickValues>, any>;
  stopAnimationAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StopAnimationAction>, {
triggerOptions: ConstructorParameters<typeof StopAnimationAction>[0];
    target: ConstructorParameters<typeof StopAnimationAction>[1];
    condition: ConstructorParameters<typeof StopAnimationAction>[2];
    
    },StopAnimationAction>, any>;
  stopSoundAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StopSoundAction>, {
triggerOptions: ConstructorParameters<typeof StopSoundAction>[0];
    sound: ConstructorParameters<typeof StopSoundAction>[1];
    condition: ConstructorParameters<typeof StopSoundAction>[2];
    
    },StopSoundAction>, any>;
  storageBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StorageBuffer>, {
engine: ConstructorParameters<typeof StorageBuffer>[0];
    size: ConstructorParameters<typeof StorageBuffer>[1];
    creationFlags: ConstructorParameters<typeof StorageBuffer>[2];
    label: ConstructorParameters<typeof StorageBuffer>[3];
    
    },StorageBuffer>, any>;
  storageReadBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StorageReadBlock> & Clonable, {
name: ConstructorParameters<typeof StorageReadBlock>[0];
    
    },StorageReadBlock>, any>;
  storageWriteBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StorageWriteBlock> & Clonable, {
name: ConstructorParameters<typeof StorageWriteBlock>[0];
    
    },StorageWriteBlock>, any>;
  streamingSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StreamingSound>, {
name: ConstructorParameters<typeof StreamingSound>[0];
    engine: ConstructorParameters<typeof StreamingSound>[1];
    
    },StreamingSound>, any>;
  stringDictionary: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StringDictionary>, {},StringDictionary>, any>;
  subEmitter: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubEmitter> & Clonable, {
particleSystem: ConstructorParameters<typeof SubEmitter>[0];
    
    },SubEmitter>, any>;
  subMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubMesh> & Clonable, {
materialIndex: ConstructorParameters<typeof SubMesh>[0];
    verticesStart: ConstructorParameters<typeof SubMesh>[1];
    verticesCount: ConstructorParameters<typeof SubMesh>[2];
    indexStart: ConstructorParameters<typeof SubMesh>[3];
    indexCount: ConstructorParameters<typeof SubMesh>[4];
    mesh: ConstructorParameters<typeof SubMesh>[5];
    renderingMesh: ConstructorParameters<typeof SubMesh>[6];
    createBoundingBox: ConstructorParameters<typeof SubMesh>[7];
    addToMesh: ConstructorParameters<typeof SubMesh>[8];
    
    },SubMesh>, any>;
  subSurfaceBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubSurfaceBlock> & Clonable, {
name: ConstructorParameters<typeof SubSurfaceBlock>[0];
    
    },SubSurfaceBlock>, any>;
  subSurfaceSceneComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubSurfaceSceneComponent>, {
scene: ConstructorParameters<typeof SubSurfaceSceneComponent>[0];
    
    },SubSurfaceSceneComponent>, any>;
  subdivide: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Subdivide>> & MeshProps, {
        vertexData: Parameters<typeof Subdivide>[0];
    level: Parameters<typeof Subdivide>[1];
    options: Parameters<typeof Subdivide>[2];
    
            },ReturnType<typeof Subdivide>>, any>;
  subdivideBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubdivideBlock> & Clonable, {
name: ConstructorParameters<typeof SubdivideBlock>[0];
    
    },SubdivideBlock>, any>;
  subtractBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SubtractBlock> & Clonable, {
name: ConstructorParameters<typeof SubtractBlock>[0];
    
    },SubtractBlock>, any>;
  surfaceMagnetismBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SurfaceMagnetismBehavior>, {},SurfaceMagnetismBehavior>, any>;
  switchBooleanAction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SwitchBooleanAction>, {
triggerOptions: ConstructorParameters<typeof SwitchBooleanAction>[0];
    target: ConstructorParameters<typeof SwitchBooleanAction>[1];
    propertyPath: ConstructorParameters<typeof SwitchBooleanAction>[2];
    condition: ConstructorParameters<typeof SwitchBooleanAction>[3];
    
    },SwitchBooleanAction>, any>;
  systemBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SystemBlock> & Clonable, {
name: ConstructorParameters<typeof SystemBlock>[0];
    
    },SystemBlock>, any>;
  tAARenderingPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TAARenderingPipeline>, {
name: ConstructorParameters<typeof TAARenderingPipeline>[0];
    scene: ConstructorParameters<typeof TAARenderingPipeline>[1];
    cameras: ConstructorParameters<typeof TAARenderingPipeline>[2];
    textureType: ConstructorParameters<typeof TAARenderingPipeline>[3];
    
    },TAARenderingPipeline>, any>;
  tBNBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TBNBlock> & Clonable, {
name: ConstructorParameters<typeof TBNBlock>[0];
    
    },TBNBlock>, any>;
  targetCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TargetCamera> & Clonable, {
name: ConstructorParameters<typeof TargetCamera>[0];
    position: ConstructorParameters<typeof TargetCamera>[1];
    scene: ConstructorParameters<typeof TargetCamera>[2];
    setActiveOnSceneIfNoneActive: ConstructorParameters<typeof TargetCamera>[3];
    
    } & CameraProps,TargetCamera>, any>;
  targetedAnimation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TargetedAnimation>, {
parent: ConstructorParameters<typeof TargetedAnimation>[0];
    
    },TargetedAnimation>, any>;
  teleportInBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TeleportInBlock> & Clonable, {
name: ConstructorParameters<typeof TeleportInBlock>[0];
    
    },TeleportInBlock>, any>;
  teleportOutBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TeleportOutBlock> & Clonable, {
name: ConstructorParameters<typeof TeleportOutBlock>[0];
    
    },TeleportOutBlock>, any>;
  testBase64DataUrl: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof TestBase64DataUrl>> & MeshProps, {},ReturnType<typeof TestBase64DataUrl>>, any>;
  textFileAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextFileAssetTask>, {
name: ConstructorParameters<typeof TextFileAssetTask>[0];
    url: ConstructorParameters<typeof TextFileAssetTask>[1];
    
    },TextFileAssetTask>, any>;
  texture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Texture> & Clonable, {
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
    
    } & TextureProps,Texture>, any>;
  textureAssetTask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureAssetTask>, {
name: ConstructorParameters<typeof TextureAssetTask>[0];
    url: ConstructorParameters<typeof TextureAssetTask>[1];
    noMipmap: ConstructorParameters<typeof TextureAssetTask>[2];
    invertY: ConstructorParameters<typeof TextureAssetTask>[3];
    samplingMode: ConstructorParameters<typeof TextureAssetTask>[4];
    
    },TextureAssetTask>, any>;
  textureBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureBlock> & Clonable, {
name: ConstructorParameters<typeof TextureBlock>[0];
    fragmentOnly: ConstructorParameters<typeof TextureBlock>[1];
    
    },TextureBlock>, any>;
  textureOptimization: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureOptimization>, {
priority: ConstructorParameters<typeof TextureOptimization>[0];
    maximumSize: ConstructorParameters<typeof TextureOptimization>[1];
    step: ConstructorParameters<typeof TextureOptimization>[2];
    
    },TextureOptimization>, any>;
  texturePacker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TexturePacker>, {
name: ConstructorParameters<typeof TexturePacker>[0];
    meshes: ConstructorParameters<typeof TexturePacker>[1];
    options: ConstructorParameters<typeof TexturePacker>[2];
    scene: ConstructorParameters<typeof TexturePacker>[3];
    
    },TexturePacker>, any>;
  texturePackerFrame: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TexturePackerFrame>, {
id: ConstructorParameters<typeof TexturePackerFrame>[0];
    scale: ConstructorParameters<typeof TexturePackerFrame>[1];
    offset: ConstructorParameters<typeof TexturePackerFrame>[2];
    
    },TexturePackerFrame>, any>;
  textureSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextureSampler>, {},TextureSampler>, any>;
  thinAnaglyphPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinAnaglyphPostProcess>, {
name: ConstructorParameters<typeof ThinAnaglyphPostProcess>[0];
    engine: ConstructorParameters<typeof ThinAnaglyphPostProcess>[1];
    options: ConstructorParameters<typeof ThinAnaglyphPostProcess>[2];
    
    },ThinAnaglyphPostProcess>, any>;
  thinBlackAndWhitePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinBlackAndWhitePostProcess>, {
name: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[0];
    engine: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[1];
    options: ConstructorParameters<typeof ThinBlackAndWhitePostProcess>[2];
    
    },ThinBlackAndWhitePostProcess>, any>;
  thinBloomEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinBloomEffect>, {
name: ConstructorParameters<typeof ThinBloomEffect>[0];
    engine: ConstructorParameters<typeof ThinBloomEffect>[1];
    scale: ConstructorParameters<typeof ThinBloomEffect>[2];
    blockCompilation: ConstructorParameters<typeof ThinBloomEffect>[3];
    
    },ThinBloomEffect>, any>;
  thinBlurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinBlurPostProcess>, {
name: ConstructorParameters<typeof ThinBlurPostProcess>[0];
    engine: ConstructorParameters<typeof ThinBlurPostProcess>[1];
    direction: ConstructorParameters<typeof ThinBlurPostProcess>[2];
    kernel: ConstructorParameters<typeof ThinBlurPostProcess>[3];
    options: ConstructorParameters<typeof ThinBlurPostProcess>[4];
    
    },ThinBlurPostProcess>, any>;
  thinChromaticAberrationPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinChromaticAberrationPostProcess>, {
name: ConstructorParameters<typeof ThinChromaticAberrationPostProcess>[0];
    engine: ConstructorParameters<typeof ThinChromaticAberrationPostProcess>[1];
    options: ConstructorParameters<typeof ThinChromaticAberrationPostProcess>[2];
    
    },ThinChromaticAberrationPostProcess>, any>;
  thinCircleOfConfusionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinCircleOfConfusionPostProcess>, {
name: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[0];
    engine: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[1];
    options: ConstructorParameters<typeof ThinCircleOfConfusionPostProcess>[2];
    
    },ThinCircleOfConfusionPostProcess>, any>;
  thinDepthOfFieldEffect: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinDepthOfFieldEffect>, {
name: ConstructorParameters<typeof ThinDepthOfFieldEffect>[0];
    engine: ConstructorParameters<typeof ThinDepthOfFieldEffect>[1];
    blurLevel: ConstructorParameters<typeof ThinDepthOfFieldEffect>[2];
    depthNotNormalized: ConstructorParameters<typeof ThinDepthOfFieldEffect>[3];
    blockCompilation: ConstructorParameters<typeof ThinDepthOfFieldEffect>[4];
    
    },ThinDepthOfFieldEffect>, any>;
  thinEffectLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinEffectLayer>, {
name: ConstructorParameters<typeof ThinEffectLayer>[0];
    scene: ConstructorParameters<typeof ThinEffectLayer>[1];
    forceGLSL: ConstructorParameters<typeof ThinEffectLayer>[2];
    dontCheckIfReady: ConstructorParameters<typeof ThinEffectLayer>[3];
    _additionalImportShadersAsync: ConstructorParameters<typeof ThinEffectLayer>[4];
    
    },ThinEffectLayer>, any>;
  thinEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinEngine>, {
canvasOrContext: ConstructorParameters<typeof ThinEngine>[0];
    antialias: ConstructorParameters<typeof ThinEngine>[1];
    options: ConstructorParameters<typeof ThinEngine>[2];
    adaptToDeviceRatio: ConstructorParameters<typeof ThinEngine>[3];
    
    },ThinEngine>, any>;
  thinExtractHighlightsPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinExtractHighlightsPostProcess>, {
name: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[0];
    engine: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[1];
    options: ConstructorParameters<typeof ThinExtractHighlightsPostProcess>[2];
    
    },ThinExtractHighlightsPostProcess>, any>;
  thinFXAAPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinFXAAPostProcess>, {
name: ConstructorParameters<typeof ThinFXAAPostProcess>[0];
    engine: ConstructorParameters<typeof ThinFXAAPostProcess>[1];
    options: ConstructorParameters<typeof ThinFXAAPostProcess>[2];
    
    },ThinFXAAPostProcess>, any>;
  thinGlowBlurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinGlowBlurPostProcess>, {
name: ConstructorParameters<typeof ThinGlowBlurPostProcess>[0];
    engine: ConstructorParameters<typeof ThinGlowBlurPostProcess>[1];
    direction: ConstructorParameters<typeof ThinGlowBlurPostProcess>[2];
    kernel: ConstructorParameters<typeof ThinGlowBlurPostProcess>[3];
    options: ConstructorParameters<typeof ThinGlowBlurPostProcess>[4];
    
    },ThinGlowBlurPostProcess>, any>;
  thinGlowLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinGlowLayer>, {
name: ConstructorParameters<typeof ThinGlowLayer>[0];
    scene: ConstructorParameters<typeof ThinGlowLayer>[1];
    options: ConstructorParameters<typeof ThinGlowLayer>[2];
    dontCheckIfReady: ConstructorParameters<typeof ThinGlowLayer>[3];
    
    },ThinGlowLayer>, any>;
  thinGrainPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinGrainPostProcess>, {
name: ConstructorParameters<typeof ThinGrainPostProcess>[0];
    engine: ConstructorParameters<typeof ThinGrainPostProcess>[1];
    options: ConstructorParameters<typeof ThinGrainPostProcess>[2];
    
    },ThinGrainPostProcess>, any>;
  thinHighlightLayer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinHighlightLayer>, {
name: ConstructorParameters<typeof ThinHighlightLayer>[0];
    scene: ConstructorParameters<typeof ThinHighlightLayer>[1];
    options: ConstructorParameters<typeof ThinHighlightLayer>[2];
    dontCheckIfReady: ConstructorParameters<typeof ThinHighlightLayer>[3];
    
    },ThinHighlightLayer>, any>;
  thinImageProcessingPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinImageProcessingPostProcess>, {
name: ConstructorParameters<typeof ThinImageProcessingPostProcess>[0];
    engine: ConstructorParameters<typeof ThinImageProcessingPostProcess>[1];
    options: ConstructorParameters<typeof ThinImageProcessingPostProcess>[2];
    
    },ThinImageProcessingPostProcess>, any>;
  thinMatrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinMatrix>, {},ThinMatrix>, any>;
  thinMotionBlurPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinMotionBlurPostProcess>, {
name: ConstructorParameters<typeof ThinMotionBlurPostProcess>[0];
    scene: ConstructorParameters<typeof ThinMotionBlurPostProcess>[1];
    options: ConstructorParameters<typeof ThinMotionBlurPostProcess>[2];
    
    },ThinMotionBlurPostProcess>, any>;
  thinPassCubePostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinPassCubePostProcess>, {
name: ConstructorParameters<typeof ThinPassCubePostProcess>[0];
    engine: ConstructorParameters<typeof ThinPassCubePostProcess>[1];
    options: ConstructorParameters<typeof ThinPassCubePostProcess>[2];
    
    },ThinPassCubePostProcess>, any>;
  thinPassPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinPassPostProcess>, {
name: ConstructorParameters<typeof ThinPassPostProcess>[0];
    engine: ConstructorParameters<typeof ThinPassPostProcess>[1];
    options: ConstructorParameters<typeof ThinPassPostProcess>[2];
    
    },ThinPassPostProcess>, any>;
  thinRenderTargetTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinRenderTargetTexture>, {
engine: ConstructorParameters<typeof ThinRenderTargetTexture>[0];
    size: ConstructorParameters<typeof ThinRenderTargetTexture>[1];
    options: ConstructorParameters<typeof ThinRenderTargetTexture>[2];
    
    },ThinRenderTargetTexture>, any>;
  thinTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ThinTexture>, {
internalTexture: ConstructorParameters<typeof ThinTexture>[0];
    
    },ThinTexture>, any>;
  toHalfFloat: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof ToHalfFloat>> & MeshProps, {
        value: Parameters<typeof ToHalfFloat>[0];
    
            },ReturnType<typeof ToHalfFloat>>, any>;
  tonemapPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TonemapPostProcess> & Clonable, {
name: ConstructorParameters<typeof TonemapPostProcess>[0];
    _operator: ConstructorParameters<typeof TonemapPostProcess>[1];
    exposureAdjustment: ConstructorParameters<typeof TonemapPostProcess>[2];
    camera: ConstructorParameters<typeof TonemapPostProcess>[3];
    samplingMode: ConstructorParameters<typeof TonemapPostProcess>[4];
    engine: ConstructorParameters<typeof TonemapPostProcess>[5];
    textureFormat: ConstructorParameters<typeof TonemapPostProcess>[6];
    reusable: ConstructorParameters<typeof TonemapPostProcess>[7];
    
    },TonemapPostProcess>, any>;
  torusBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TorusBlock> & Clonable, {
name: ConstructorParameters<typeof TorusBlock>[0];
    
    },TorusBlock>, any>;
  touchCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchCamera> & Clonable, {
name: ConstructorParameters<typeof TouchCamera>[0];
    position: ConstructorParameters<typeof TouchCamera>[1];
    scene: ConstructorParameters<typeof TouchCamera>[2];
    
    } & CameraProps,TouchCamera>, any>;
  trailMesh: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrailMesh> & Clonable, {
name: ConstructorParameters<typeof TrailMesh>[0];
    generator: ConstructorParameters<typeof TrailMesh>[1];
    scene: ConstructorParameters<typeof TrailMesh>[2];
    diameterOrOptions: ConstructorParameters<typeof TrailMesh>[3];
    length: ConstructorParameters<typeof TrailMesh>[4];
    autoStart: ConstructorParameters<typeof TrailMesh>[5];
    
    },TrailMesh>, any>;
  trajectory: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Trajectory>, {
segmentLength: ConstructorParameters<typeof Trajectory>[0];
    
    },Trajectory>, any>;
  trajectoryClassifier: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrajectoryClassifier>, {},TrajectoryClassifier>, any>;
  transcodeAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof TranscodeAsync>> & MeshProps, {},ReturnType<typeof TranscodeAsync>>, any>;
  transformBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TransformBlock> & Clonable, {
name: ConstructorParameters<typeof TransformBlock>[0];
    
    },TransformBlock>, any>;
  transformFeedbackBoundingHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TransformFeedbackBoundingHelper>, {
engine: ConstructorParameters<typeof TransformFeedbackBoundingHelper>[0];
    
    },TransformFeedbackBoundingHelper>, any>;
  transformNode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TransformNode> & Clonable, {
name: ConstructorParameters<typeof TransformNode>[0];
    scene: ConstructorParameters<typeof TransformNode>[1];
    isPure: ConstructorParameters<typeof TransformNode>[2];
    
    },TransformNode>, any>;
  translationBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TranslationBlock> & Clonable, {
name: ConstructorParameters<typeof TranslationBlock>[0];
    
    },TranslationBlock>, any>;
  translationMatrixToRef: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof TranslationMatrixToRef>> & MeshProps, {
        x: Parameters<typeof TranslationMatrixToRef>[0];
    y: Parameters<typeof TranslationMatrixToRef>[1];
    z: Parameters<typeof TranslationMatrixToRef>[2];
    result: Parameters<typeof TranslationMatrixToRef>[3];
    
            },ReturnType<typeof TranslationMatrixToRef>>, any>;
  triPlanarBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TriPlanarBlock> & Clonable, {
name: ConstructorParameters<typeof TriPlanarBlock>[0];
    hideSourceZ: ConstructorParameters<typeof TriPlanarBlock>[1];
    
    },TriPlanarBlock>, any>;
  trigonometryBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TrigonometryBlock> & Clonable, {
name: ConstructorParameters<typeof TrigonometryBlock>[0];
    
    },TrigonometryBlock>, any>;
  twirlBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TwirlBlock> & Clonable, {
name: ConstructorParameters<typeof TwirlBlock>[0];
    
    },TwirlBlock>, any>;
  uncompressPIZ: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UncompressPIZ>> & MeshProps, {
        decoder: Parameters<typeof UncompressPIZ>[0];
    
            },ReturnType<typeof UncompressPIZ>>, any>;
  uncompressPXR: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UncompressPXR>> & MeshProps, {
        decoder: Parameters<typeof UncompressPXR>[0];
    
            },ReturnType<typeof UncompressPXR>>, any>;
  uncompressRAW: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UncompressRAW>> & MeshProps, {
        decoder: Parameters<typeof UncompressRAW>[0];
    
            },ReturnType<typeof UncompressRAW>>, any>;
  uncompressRLE: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UncompressRLE>> & MeshProps, {
        decoder: Parameters<typeof UncompressRLE>[0];
    
            },ReturnType<typeof UncompressRLE>>, any>;
  uncompressZIP: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UncompressZIP>> & MeshProps, {
        decoder: Parameters<typeof UncompressZIP>[0];
    
            },ReturnType<typeof UncompressZIP>>, any>;
  uniformBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UniformBuffer>, {
engine: ConstructorParameters<typeof UniformBuffer>[0];
    data: ConstructorParameters<typeof UniformBuffer>[1];
    dynamic: ConstructorParameters<typeof UniformBuffer>[2];
    name: ConstructorParameters<typeof UniformBuffer>[3];
    forceNoUniformBuffer: ConstructorParameters<typeof UniformBuffer>[4];
    trackUBOsInFrame: ConstructorParameters<typeof UniformBuffer>[5];
    
    },UniformBuffer>, any>;
  universalCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UniversalCamera> & Clonable, {
name: ConstructorParameters<typeof UniversalCamera>[0];
    position: ConstructorParameters<typeof UniversalCamera>[1];
    scene: ConstructorParameters<typeof UniversalCamera>[2];
    
    } & CameraProps,UniversalCamera>, any>;
  unregisterAllMaterialPlugins: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UnregisterAllMaterialPlugins>> & MeshProps, {},ReturnType<typeof UnregisterAllMaterialPlugins>>, any>;
  unregisterMaterialPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UnregisterMaterialPlugin>> & MeshProps, {
        pluginName: Parameters<typeof UnregisterMaterialPlugin>[0];
    
            },ReturnType<typeof UnregisterMaterialPlugin>>, any>;
  updateAgeBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateAgeBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateAgeBlock>[0];
    
    },UpdateAgeBlock>, any>;
  updateAngleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateAngleBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateAngleBlock>[0];
    
    },UpdateAngleBlock>, any>;
  updateAttractorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateAttractorBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateAttractorBlock>[0];
    
    },UpdateAttractorBlock>, any>;
  updateColorBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateColorBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateColorBlock>[0];
    
    },UpdateColorBlock>, any>;
  updateDirectionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateDirectionBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateDirectionBlock>[0];
    
    },UpdateDirectionBlock>, any>;
  updateFlowMapBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateFlowMapBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateFlowMapBlock>[0];
    
    },UpdateFlowMapBlock>, any>;
  updatePositionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdatePositionBlock> & Clonable, {
name: ConstructorParameters<typeof UpdatePositionBlock>[0];
    
    },UpdatePositionBlock>, any>;
  updateScaleBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateScaleBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateScaleBlock>[0];
    
    },UpdateScaleBlock>, any>;
  updateSpriteCellIndexBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<UpdateSpriteCellIndexBlock> & Clonable, {
name: ConstructorParameters<typeof UpdateSpriteCellIndexBlock>[0];
    
    },UpdateSpriteCellIndexBlock>, any>;
  uploadContent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UploadContent>> & MeshProps, {
        texture: Parameters<typeof UploadContent>[0];
    data: Parameters<typeof UploadContent>[1];
    
            },ReturnType<typeof UploadContent>>, any>;
  uploadEnvLevelsAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UploadEnvLevelsAsync>> & MeshProps, {
        texture: Parameters<typeof UploadEnvLevelsAsync>[0];
    data: Parameters<typeof UploadEnvLevelsAsync>[1];
    info: Parameters<typeof UploadEnvLevelsAsync>[2];
    
            },ReturnType<typeof UploadEnvLevelsAsync>>, any>;
  uploadEnvSpherical: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UploadEnvSpherical>> & MeshProps, {
        texture: Parameters<typeof UploadEnvSpherical>[0];
    info: Parameters<typeof UploadEnvSpherical>[1];
    
            },ReturnType<typeof UploadEnvSpherical>>, any>;
  uploadIrradianceLevelsAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UploadIrradianceLevelsAsync>> & MeshProps, {
        mainTexture: Parameters<typeof UploadIrradianceLevelsAsync>[0];
    imageData: Parameters<typeof UploadIrradianceLevelsAsync>[1];
    size: Parameters<typeof UploadIrradianceLevelsAsync>[2];
    imageType: Parameters<typeof UploadIrradianceLevelsAsync>[3];
    dominantDirection: Parameters<typeof UploadIrradianceLevelsAsync>[4];
    
            },ReturnType<typeof UploadIrradianceLevelsAsync>>, any>;
  uploadRadianceLevelsAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof UploadRadianceLevelsAsync>> & MeshProps, {
        texture: Parameters<typeof UploadRadianceLevelsAsync>[0];
    imageData: Parameters<typeof UploadRadianceLevelsAsync>[1];
    imageType: Parameters<typeof UploadRadianceLevelsAsync>[2];
    
            },ReturnType<typeof UploadRadianceLevelsAsync>>, any>;
  vRCameraMetrics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRCameraMetrics>, {},VRCameraMetrics>, any>;
  vRDeviceOrientationArcRotateCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRDeviceOrientationArcRotateCamera> & Clonable, {
name: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[0];
    alpha: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[1];
    beta: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[2];
    radius: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[3];
    target: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[4];
    scene: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[5];
    compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[6];
    vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationArcRotateCamera>[7];
    
    } & CameraProps,VRDeviceOrientationArcRotateCamera>, any>;
  vRDeviceOrientationFreeCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRDeviceOrientationFreeCamera> & Clonable, {
name: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[0];
    position: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[1];
    scene: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[2];
    compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[3];
    vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationFreeCamera>[4];
    
    } & CameraProps,VRDeviceOrientationFreeCamera>, any>;
  vRDeviceOrientationGamepadCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRDeviceOrientationGamepadCamera> & Clonable, {
name: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[0];
    position: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[1];
    scene: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[2];
    compensateDistortion: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[3];
    vrCameraMetrics: ConstructorParameters<typeof VRDeviceOrientationGamepadCamera>[4];
    
    } & CameraProps,VRDeviceOrientationGamepadCamera>, any>;
  vRDistortionCorrectionPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRDistortionCorrectionPostProcess> & Clonable, {
name: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[0];
    camera: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[1];
    isRightEye: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[2];
    vrMetrics: ConstructorParameters<typeof VRDistortionCorrectionPostProcess>[3];
    
    },VRDistortionCorrectionPostProcess>, any>;
  vRExperienceHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRExperienceHelper>, {
scene: ConstructorParameters<typeof VRExperienceHelper>[0];
    webVROptions: ConstructorParameters<typeof VRExperienceHelper>[1];
    
    },VRExperienceHelper>, any>;
  vRMultiviewToSingleviewPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VRMultiviewToSingleviewPostProcess> & Clonable, {
name: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[0];
    camera: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[1];
    scaleFactor: ConstructorParameters<typeof VRMultiviewToSingleviewPostProcess>[2];
    
    },VRMultiviewToSingleviewPostProcess>, any>;
  validatedNativeDataStream: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValidatedNativeDataStream>, {},ValidatedNativeDataStream>, any>;
  valueCondition: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValueCondition>, {
actionManager: ConstructorParameters<typeof ValueCondition>[0];
    target: ConstructorParameters<typeof ValueCondition>[1];
    propertyPath: ConstructorParameters<typeof ValueCondition>[2];
    value: ConstructorParameters<typeof ValueCondition>[3];
    operator: ConstructorParameters<typeof ValueCondition>[4];
    
    },ValueCondition>, any>;
  vector2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Vector2> & Clonable, {
x: ConstructorParameters<typeof Vector2>[0];
    y: ConstructorParameters<typeof Vector2>[1];
    
    },Vector2>, any>;
  vector2ToFixed: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Vector2ToFixed>> & MeshProps, {
        vector: Parameters<typeof Vector2ToFixed>[0];
    decimalCount: Parameters<typeof Vector2ToFixed>[1];
    
            },ReturnType<typeof Vector2ToFixed>>, any>;
  vector3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Vector3> & Clonable, {
x: ConstructorParameters<typeof Vector3>[0];
    y: ConstructorParameters<typeof Vector3>[1];
    z: ConstructorParameters<typeof Vector3>[2];
    
    },Vector3>, any>;
  vector3ToFixed: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Vector3ToFixed>> & MeshProps, {
        vector: Parameters<typeof Vector3ToFixed>[0];
    decimalCount: Parameters<typeof Vector3ToFixed>[1];
    
            },ReturnType<typeof Vector3ToFixed>>, any>;
  vector4: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Vector4> & Clonable, {
x: ConstructorParameters<typeof Vector4>[0];
    y: ConstructorParameters<typeof Vector4>[1];
    z: ConstructorParameters<typeof Vector4>[2];
    w: ConstructorParameters<typeof Vector4>[3];
    
    },Vector4>, any>;
  vector4ToFixed: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Vector4ToFixed>> & MeshProps, {
        vector: Parameters<typeof Vector4ToFixed>[0];
    decimalCount: Parameters<typeof Vector4ToFixed>[1];
    
            },ReturnType<typeof Vector4ToFixed>>, any>;
  vectorConverterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VectorConverterBlock> & Clonable, {
name: ConstructorParameters<typeof VectorConverterBlock>[0];
    
    },VectorConverterBlock>, any>;
  vectorMergerBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VectorMergerBlock> & Clonable, {
name: ConstructorParameters<typeof VectorMergerBlock>[0];
    
    },VectorMergerBlock>, any>;
  vectorSplitterBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VectorSplitterBlock> & Clonable, {
name: ConstructorParameters<typeof VectorSplitterBlock>[0];
    
    },VectorSplitterBlock>, any>;
  vertexAnimationBaker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VertexAnimationBaker>, {
scene: ConstructorParameters<typeof VertexAnimationBaker>[0];
    meshOrSkeleton: ConstructorParameters<typeof VertexAnimationBaker>[1];
    
    },VertexAnimationBaker>, any>;
  vertexBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VertexBuffer>, {
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
    
    },VertexBuffer>, any>;
  vertexData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VertexData> & Clonable, {},VertexData>, any>;
  vertexOutputBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VertexOutputBlock> & Clonable, {
name: ConstructorParameters<typeof VertexOutputBlock>[0];
    
    },VertexOutputBlock>, any>;
  videoRecorder: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VideoRecorder>, {
engine: ConstructorParameters<typeof VideoRecorder>[0];
    options: ConstructorParameters<typeof VideoRecorder>[1];
    
    },VideoRecorder>, any>;
  videoTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VideoTexture> & Clonable, {
name: ConstructorParameters<typeof VideoTexture>[0];
    src: ConstructorParameters<typeof VideoTexture>[1];
    scene: ConstructorParameters<typeof VideoTexture>[2];
    generateMipMaps: ConstructorParameters<typeof VideoTexture>[3];
    invertY: ConstructorParameters<typeof VideoTexture>[4];
    samplingMode: ConstructorParameters<typeof VideoTexture>[5];
    settings: ConstructorParameters<typeof VideoTexture>[6];
    onError: ConstructorParameters<typeof VideoTexture>[7];
    format: ConstructorParameters<typeof VideoTexture>[8];
    
    } & TextureProps,VideoTexture>, any>;
  viewDirectionBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ViewDirectionBlock> & Clonable, {
name: ConstructorParameters<typeof ViewDirectionBlock>[0];
    
    },ViewDirectionBlock>, any>;
  viewport: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Viewport> & Clonable, {
x: ConstructorParameters<typeof Viewport>[0];
    y: ConstructorParameters<typeof Viewport>[1];
    width: ConstructorParameters<typeof Viewport>[2];
    height: ConstructorParameters<typeof Viewport>[3];
    
    },Viewport>, any>;
  virtualJoystick: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VirtualJoystick>, {
leftJoystick: ConstructorParameters<typeof VirtualJoystick>[0];
    customizations: ConstructorParameters<typeof VirtualJoystick>[1];
    
    },VirtualJoystick>, any>;
  virtualJoysticksCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VirtualJoysticksCamera> & Clonable, {
name: ConstructorParameters<typeof VirtualJoysticksCamera>[0];
    position: ConstructorParameters<typeof VirtualJoysticksCamera>[1];
    scene: ConstructorParameters<typeof VirtualJoysticksCamera>[2];
    
    } & CameraProps,VirtualJoysticksCamera>, any>;
  volumetricLightScatteringPostProcess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VolumetricLightScatteringPostProcess> & Clonable, {
name: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[0];
    ratio: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[1];
    camera: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[2];
    mesh: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[3];
    samples: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[4];
    samplingMode: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[5];
    engine: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[6];
    reusable: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[7];
    scene: ConstructorParameters<typeof VolumetricLightScatteringPostProcess>[8];
    
    },VolumetricLightScatteringPostProcess>, any>;
  voronoiNoiseBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VoronoiNoiseBlock> & Clonable, {
name: ConstructorParameters<typeof VoronoiNoiseBlock>[0];
    
    },VoronoiNoiseBlock>, any>;
  wav2Decode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof Wav2Decode>> & MeshProps, {
        buffer: Parameters<typeof Wav2Decode>[0];
    j: Parameters<typeof Wav2Decode>[1];
    nx: Parameters<typeof Wav2Decode>[2];
    ox: Parameters<typeof Wav2Decode>[3];
    ny: Parameters<typeof Wav2Decode>[4];
    oy: Parameters<typeof Wav2Decode>[5];
    mx: Parameters<typeof Wav2Decode>[6];
    
            },ReturnType<typeof Wav2Decode>>, any>;
  waveBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WaveBlock> & Clonable, {
name: ConstructorParameters<typeof WaveBlock>[0];
    
    },WaveBlock>, any>;
  webGL2ParticleSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGL2ParticleSystem>, {
parent: ConstructorParameters<typeof WebGL2ParticleSystem>[0];
    engine: ConstructorParameters<typeof WebGL2ParticleSystem>[1];
    
    },WebGL2ParticleSystem>, any>;
  webGL2ShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGL2ShaderProcessor>, {},WebGL2ShaderProcessor>, any>;
  webGLDataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLDataBuffer>, {
resource: ConstructorParameters<typeof WebGLDataBuffer>[0];
    
    },WebGLDataBuffer>, any>;
  webGLHardwareTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLHardwareTexture>, {
existingTexture: ConstructorParameters<typeof WebGLHardwareTexture>[0];
    context: ConstructorParameters<typeof WebGLHardwareTexture>[1];
    
    },WebGLHardwareTexture>, any>;
  webGLPipelineContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGLPipelineContext>, {},WebGLPipelineContext>, any>;
  webGPUCacheBindGroups: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUCacheBindGroups>, {
device: ConstructorParameters<typeof WebGPUCacheBindGroups>[0];
    cacheSampler: ConstructorParameters<typeof WebGPUCacheBindGroups>[1];
    engine: ConstructorParameters<typeof WebGPUCacheBindGroups>[2];
    
    },WebGPUCacheBindGroups>, any>;
  webGPUCacheRenderPipeline: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUCacheRenderPipeline>, {
device: ConstructorParameters<typeof WebGPUCacheRenderPipeline>[0];
    emptyVertexBuffer: ConstructorParameters<typeof WebGPUCacheRenderPipeline>[1];
    
    },WebGPUCacheRenderPipeline>, any>;
  webGPUCacheSampler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUCacheSampler>, {
device: ConstructorParameters<typeof WebGPUCacheSampler>[0];
    
    },WebGPUCacheSampler>, any>;
  webGPUDataBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUDataBuffer>, {
resource: ConstructorParameters<typeof WebGPUDataBuffer>[0];
    capacity: ConstructorParameters<typeof WebGPUDataBuffer>[1];
    
    },WebGPUDataBuffer>, any>;
  webGPUDrawContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUDrawContext>, {
bufferManager: ConstructorParameters<typeof WebGPUDrawContext>[0];
    _dummyIndexBuffer: ConstructorParameters<typeof WebGPUDrawContext>[1];
    
    },WebGPUDrawContext>, any>;
  webGPUEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUEngine>, {
canvas: ConstructorParameters<typeof WebGPUEngine>[0];
    options: ConstructorParameters<typeof WebGPUEngine>[1];
    
    },WebGPUEngine>, any>;
  webGPUPipelineContext: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUPipelineContext>, {
shaderProcessingContext: ConstructorParameters<typeof WebGPUPipelineContext>[0];
    engine: ConstructorParameters<typeof WebGPUPipelineContext>[1];
    
    },WebGPUPipelineContext>, any>;
  webGPURenderTargetWrapper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPURenderTargetWrapper>, {
isMulti: ConstructorParameters<typeof WebGPURenderTargetWrapper>[0];
    isCube: ConstructorParameters<typeof WebGPURenderTargetWrapper>[1];
    size: ConstructorParameters<typeof WebGPURenderTargetWrapper>[2];
    engine: ConstructorParameters<typeof WebGPURenderTargetWrapper>[3];
    label: ConstructorParameters<typeof WebGPURenderTargetWrapper>[4];
    
    },WebGPURenderTargetWrapper>, any>;
  webGPUShaderProcessor: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebGPUShaderProcessor>, {},WebGPUShaderProcessor>, any>;
  webRequest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebRequest>, {},WebRequest>, any>;
  webXRAbstractFeature: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRAbstractFeature>, {
_xrSessionManager: ConstructorParameters<typeof WebXRAbstractFeature>[0];
    
    },WebXRAbstractFeature>, any>;
  webXRAbstractMotionController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRAbstractMotionController>, {
scene: ConstructorParameters<typeof WebXRAbstractMotionController>[0];
    layout: ConstructorParameters<typeof WebXRAbstractMotionController>[1];
    gamepadObject: ConstructorParameters<typeof WebXRAbstractMotionController>[2];
    handedness: ConstructorParameters<typeof WebXRAbstractMotionController>[3];
    _doNotLoadControllerMesh: ConstructorParameters<typeof WebXRAbstractMotionController>[4];
    _controllerCache: ConstructorParameters<typeof WebXRAbstractMotionController>[5];
    
    },WebXRAbstractMotionController>, any>;
  webXRAnchorSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRAnchorSystem>, {
_xrSessionManager: ConstructorParameters<typeof WebXRAnchorSystem>[0];
    _options: ConstructorParameters<typeof WebXRAnchorSystem>[1];
    
    },WebXRAnchorSystem>, any>;
  webXRBackgroundRemover: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRBackgroundRemover>, {
_xrSessionManager: ConstructorParameters<typeof WebXRBackgroundRemover>[0];
    options: ConstructorParameters<typeof WebXRBackgroundRemover>[1];
    
    },WebXRBackgroundRemover>, any>;
  webXRCamera: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRCamera> & Clonable, {
name: ConstructorParameters<typeof WebXRCamera>[0];
    scene: ConstructorParameters<typeof WebXRCamera>[1];
    _xrSessionManager: ConstructorParameters<typeof WebXRCamera>[2];
    
    } & WebXRCameraProps,WebXRCamera>, any>;
  webXRControllerComponent: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRControllerComponent>, {
id: ConstructorParameters<typeof WebXRControllerComponent>[0];
    type: ConstructorParameters<typeof WebXRControllerComponent>[1];
    _buttonIndex: ConstructorParameters<typeof WebXRControllerComponent>[2];
    _axesIndices: ConstructorParameters<typeof WebXRControllerComponent>[3];
    
    },WebXRControllerComponent>, any>;
  webXRControllerMovement: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRControllerMovement>, {
_xrSessionManager: ConstructorParameters<typeof WebXRControllerMovement>[0];
    options: ConstructorParameters<typeof WebXRControllerMovement>[1];
    
    },WebXRControllerMovement>, any>;
  webXRControllerPhysics: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRControllerPhysics>, {
_xrSessionManager: ConstructorParameters<typeof WebXRControllerPhysics>[0];
    _options: ConstructorParameters<typeof WebXRControllerPhysics>[1];
    
    },WebXRControllerPhysics>, any>;
  webXRControllerPointerSelection: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRControllerPointerSelection>, {
_xrSessionManager: ConstructorParameters<typeof WebXRControllerPointerSelection>[0];
    _options: ConstructorParameters<typeof WebXRControllerPointerSelection>[1];
    
    },WebXRControllerPointerSelection>, any>;
  webXRDefaultExperience: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDefaultExperience>, {},WebXRDefaultExperience>, any>;
  webXRDepthSensing: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDepthSensing>, {
_xrSessionManager: ConstructorParameters<typeof WebXRDepthSensing>[0];
    options: ConstructorParameters<typeof WebXRDepthSensing>[1];
    
    },WebXRDepthSensing>, any>;
  webXRDomOverlay: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRDomOverlay>, {
_xrSessionManager: ConstructorParameters<typeof WebXRDomOverlay>[0];
    options: ConstructorParameters<typeof WebXRDomOverlay>[1];
    
    },WebXRDomOverlay>, any>;
  webXREnterExitUI: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXREnterExitUI>, {
_scene: ConstructorParameters<typeof WebXREnterExitUI>[0];
    options: ConstructorParameters<typeof WebXREnterExitUI>[1];
    
    },WebXREnterExitUI>, any>;
  webXREnterExitUIButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXREnterExitUIButton>, {
element: ConstructorParameters<typeof WebXREnterExitUIButton>[0];
    sessionMode: ConstructorParameters<typeof WebXREnterExitUIButton>[1];
    referenceSpaceType: ConstructorParameters<typeof WebXREnterExitUIButton>[2];
    
    },WebXREnterExitUIButton>, any>;
  webXRExperienceHelper: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRExperienceHelper>, {
_scene: ConstructorParameters<typeof WebXRExperienceHelper>[0];
    
    },WebXRExperienceHelper>, any>;
  webXREyeTracking: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXREyeTracking>, {
_xrSessionManager: ConstructorParameters<typeof WebXREyeTracking>[0];
    
    },WebXREyeTracking>, any>;
  webXRFeaturePointSystem: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRFeaturePointSystem>, {
_xrSessionManager: ConstructorParameters<typeof WebXRFeaturePointSystem>[0];
    
    },WebXRFeaturePointSystem>, any>;
  webXRFeaturesManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRFeaturesManager>, {
_xrSessionManager: ConstructorParameters<typeof WebXRFeaturesManager>[0];
    
    },WebXRFeaturesManager>, any>;
  webXRGenericHandController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRGenericHandController>, {
scene: ConstructorParameters<typeof WebXRGenericHandController>[0];
    gamepadObject: ConstructorParameters<typeof WebXRGenericHandController>[1];
    handedness: ConstructorParameters<typeof WebXRGenericHandController>[2];
    
    },WebXRGenericHandController>, any>;
  webXRGenericTriggerMotionController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRGenericTriggerMotionController>, {
scene: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[0];
    gamepadObject: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[1];
    handedness: ConstructorParameters<typeof WebXRGenericTriggerMotionController>[2];
    
    },WebXRGenericTriggerMotionController>, any>;
  webXRHTCViveMotionController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRHTCViveMotionController>, {
scene: ConstructorParameters<typeof WebXRHTCViveMotionController>[0];
    gamepadObject: ConstructorParameters<typeof WebXRHTCViveMotionController>[1];
    handedness: ConstructorParameters<typeof WebXRHTCViveMotionController>[2];
    
    },WebXRHTCViveMotionController>, any>;
  webXRHand: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRHand>, {
xrController: ConstructorParameters<typeof WebXRHand>[0];
    _jointMeshes: ConstructorParameters<typeof WebXRHand>[1];
    _handMesh: ConstructorParameters<typeof WebXRHand>[2];
    rigMapping: ConstructorParameters<typeof WebXRHand>[3];
    _leftHandedMeshes: ConstructorParameters<typeof WebXRHand>[4];
    _jointsInvisible: ConstructorParameters<typeof WebXRHand>[5];
    _jointScaleFactor: ConstructorParameters<typeof WebXRHand>[6];
    
    },WebXRHand>, any>;
  webXRHandTracking: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRHandTracking>, {
_xrSessionManager: ConstructorParameters<typeof WebXRHandTracking>[0];
    options: ConstructorParameters<typeof WebXRHandTracking>[1];
    
    },WebXRHandTracking>, any>;
  webXRHitTest: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRHitTest>, {
_xrSessionManager: ConstructorParameters<typeof WebXRHitTest>[0];
    options: ConstructorParameters<typeof WebXRHitTest>[1];
    
    },WebXRHitTest>, any>;
  webXRHitTestLegacy: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRHitTestLegacy>, {
_xrSessionManager: ConstructorParameters<typeof WebXRHitTestLegacy>[0];
    options: ConstructorParameters<typeof WebXRHitTestLegacy>[1];
    
    },WebXRHitTestLegacy>, any>;
  webXRImageTracking: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRImageTracking>, {
_xrSessionManager: ConstructorParameters<typeof WebXRImageTracking>[0];
    options: ConstructorParameters<typeof WebXRImageTracking>[1];
    
    },WebXRImageTracking>, any>;
  webXRInput: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRInput>, {
xrSessionManager: ConstructorParameters<typeof WebXRInput>[0];
    xrCamera: ConstructorParameters<typeof WebXRInput>[1];
    _options: ConstructorParameters<typeof WebXRInput>[2];
    
    },WebXRInput>, any>;
  webXRInputSource: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRInputSource>, {
_scene: ConstructorParameters<typeof WebXRInputSource>[0];
    inputSource: ConstructorParameters<typeof WebXRInputSource>[1];
    _options: ConstructorParameters<typeof WebXRInputSource>[2];
    
    },WebXRInputSource>, any>;
  webXRLayerRenderTargetTextureProvider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRLayerRenderTargetTextureProvider>, {
_scene: ConstructorParameters<typeof WebXRLayerRenderTargetTextureProvider>[0];
    layerWrapper: ConstructorParameters<typeof WebXRLayerRenderTargetTextureProvider>[1];
    
    },WebXRLayerRenderTargetTextureProvider>, any>;
  webXRLayers: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRLayers>, {
_xrSessionManager: ConstructorParameters<typeof WebXRLayers>[0];
    _options: ConstructorParameters<typeof WebXRLayers>[1];
    
    },WebXRLayers>, any>;
  webXRLightEstimation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRLightEstimation>, {
_xrSessionManager: ConstructorParameters<typeof WebXRLightEstimation>[0];
    options: ConstructorParameters<typeof WebXRLightEstimation>[1];
    
    },WebXRLightEstimation>, any>;
  webXRManagedOutputCanvas: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRManagedOutputCanvas>, {
_xrSessionManager: ConstructorParameters<typeof WebXRManagedOutputCanvas>[0];
    _options: ConstructorParameters<typeof WebXRManagedOutputCanvas>[1];
    
    },WebXRManagedOutputCanvas>, any>;
  webXRMeshDetector: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRMeshDetector>, {
_xrSessionManager: ConstructorParameters<typeof WebXRMeshDetector>[0];
    _options: ConstructorParameters<typeof WebXRMeshDetector>[1];
    
    },WebXRMeshDetector>, any>;
  webXRMicrosoftMixedRealityController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRMicrosoftMixedRealityController>, {
scene: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[0];
    gamepadObject: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[1];
    handedness: ConstructorParameters<typeof WebXRMicrosoftMixedRealityController>[2];
    
    },WebXRMicrosoftMixedRealityController>, any>;
  webXRMotionControllerTeleportation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRMotionControllerTeleportation>, {
_xrSessionManager: ConstructorParameters<typeof WebXRMotionControllerTeleportation>[0];
    _options: ConstructorParameters<typeof WebXRMotionControllerTeleportation>[1];
    
    },WebXRMotionControllerTeleportation>, any>;
  webXRNearInteraction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRNearInteraction>, {
_xrSessionManager: ConstructorParameters<typeof WebXRNearInteraction>[0];
    _options: ConstructorParameters<typeof WebXRNearInteraction>[1];
    
    },WebXRNearInteraction>, any>;
  webXROculusTouchMotionController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXROculusTouchMotionController>, {
scene: ConstructorParameters<typeof WebXROculusTouchMotionController>[0];
    gamepadObject: ConstructorParameters<typeof WebXROculusTouchMotionController>[1];
    handedness: ConstructorParameters<typeof WebXROculusTouchMotionController>[2];
    _legacyMapping: ConstructorParameters<typeof WebXROculusTouchMotionController>[3];
    _forceLegacyControllers: ConstructorParameters<typeof WebXROculusTouchMotionController>[4];
    
    },WebXROculusTouchMotionController>, any>;
  webXRPlaneDetector: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRPlaneDetector>, {
_xrSessionManager: ConstructorParameters<typeof WebXRPlaneDetector>[0];
    _options: ConstructorParameters<typeof WebXRPlaneDetector>[1];
    
    },WebXRPlaneDetector>, any>;
  webXRProfiledMotionController: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRProfiledMotionController>, {
scene: ConstructorParameters<typeof WebXRProfiledMotionController>[0];
    xrInput: ConstructorParameters<typeof WebXRProfiledMotionController>[1];
    _profile: ConstructorParameters<typeof WebXRProfiledMotionController>[2];
    _repositoryUrl: ConstructorParameters<typeof WebXRProfiledMotionController>[3];
    controllerCache: ConstructorParameters<typeof WebXRProfiledMotionController>[4];
    
    },WebXRProfiledMotionController>, any>;
  webXRRawCameraAccess: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRRawCameraAccess>, {
_xrSessionManager: ConstructorParameters<typeof WebXRRawCameraAccess>[0];
    options: ConstructorParameters<typeof WebXRRawCameraAccess>[1];
    
    },WebXRRawCameraAccess>, any>;
  webXRSessionManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRSessionManager>, {
scene: ConstructorParameters<typeof WebXRSessionManager>[0];
    
    },WebXRSessionManager>, any>;
  webXRSpaceWarp: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRSpaceWarp>, {
_xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarp>[0];
    
    },WebXRSpaceWarp>, any>;
  webXRSpaceWarpRenderTargetTextureProvider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRSpaceWarpRenderTargetTextureProvider>, {
_scene: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[0];
    _xrSessionManager: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[1];
    _xrWebGLBinding: ConstructorParameters<typeof WebXRSpaceWarpRenderTargetTextureProvider>[2];
    
    },WebXRSpaceWarpRenderTargetTextureProvider>, any>;
  webXRWalkingLocomotion: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WebXRWalkingLocomotion>, {
sessionManager: ConstructorParameters<typeof WebXRWalkingLocomotion>[0];
    options: ConstructorParameters<typeof WebXRWalkingLocomotion>[1];
    
    },WebXRWalkingLocomotion>, any>;
  weightedSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WeightedSound>, {
loop: ConstructorParameters<typeof WeightedSound>[0];
    sounds: ConstructorParameters<typeof WeightedSound>[1];
    weights: ConstructorParameters<typeof WeightedSound>[2];
    
    },WeightedSound>, any>;
  workerPool: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WorkerPool>, {
workers: ConstructorParameters<typeof WorkerPool>[0];
    
    },WorkerPool>, any>;
  worleyNoise3DBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<WorleyNoise3DBlock> & Clonable, {
name: ConstructorParameters<typeof WorleyNoise3DBlock>[0];
    
    },WorleyNoise3DBlock>, any>;
  xRSpaceWarpRenderTarget: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<XRSpaceWarpRenderTarget> & Clonable, {
motionVectorTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[0];
    depthStencilTexture: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[1];
    scene: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[2];
    size: ConstructorParameters<typeof XRSpaceWarpRenderTarget>[3];
    
    } & TextureProps,XRSpaceWarpRenderTarget>, any>;
  xbox360Pad: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Xbox360Pad>, {
id: ConstructorParameters<typeof Xbox360Pad>[0];
    index: ConstructorParameters<typeof Xbox360Pad>[1];
    gamepad: ConstructorParameters<typeof Xbox360Pad>[2];
    xboxOne: ConstructorParameters<typeof Xbox360Pad>[3];
    
    },Xbox360Pad>, any>;
  _BasisTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_BasisTextureLoader>, {},_BasisTextureLoader>, any>;
  _CommonDispose: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _CommonDispose>> & MeshProps, {
        commonEngine: Parameters<typeof _CommonDispose>[0];
    canvas: Parameters<typeof _CommonDispose>[1];
    
            },ReturnType<typeof _CommonDispose>>, any>;
  _CommonInit: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _CommonInit>> & MeshProps, {
        commonEngine: Parameters<typeof _CommonInit>[0];
    canvas: Parameters<typeof _CommonInit>[1];
    creationOptions: Parameters<typeof _CommonInit>[2];
    
            },ReturnType<typeof _CommonInit>>, any>;
  _DDSTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_DDSTextureLoader>, {},_DDSTextureLoader>, any>;
  _ENVTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_ENVTextureLoader>, {},_ENVTextureLoader>, any>;
  _ExrTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_ExrTextureLoader>, {},_ExrTextureLoader>, any>;
  _GetAudioEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _GetAudioEngine>> & MeshProps, {
        engine: Parameters<typeof _GetAudioEngine>[0];
    
            },ReturnType<typeof _GetAudioEngine>>, any>;
  _GetCompatibleTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _GetCompatibleTextureLoader>> & MeshProps, {
        extension: Parameters<typeof _GetCompatibleTextureLoader>[0];
    mimeType: Parameters<typeof _GetCompatibleTextureLoader>[1];
    
            },ReturnType<typeof _GetCompatibleTextureLoader>>, any>;
  _HDRTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_HDRTextureLoader>, {},_HDRTextureLoader>, any>;
  _HasAudioAnalyzerOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _HasAudioAnalyzerOptions>> & MeshProps, {
        options: Parameters<typeof _HasAudioAnalyzerOptions>[0];
    
            },ReturnType<typeof _HasAudioAnalyzerOptions>>, any>;
  _HasSpatialAudioListenerOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _HasSpatialAudioListenerOptions>> & MeshProps, {
        options: Parameters<typeof _HasSpatialAudioListenerOptions>[0];
    
            },ReturnType<typeof _HasSpatialAudioListenerOptions>>, any>;
  _HasSpatialAudioOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _HasSpatialAudioOptions>> & MeshProps, {
        options: Parameters<typeof _HasSpatialAudioOptions>[0];
    
            },ReturnType<typeof _HasSpatialAudioOptions>>, any>;
  _HasStereoAudioOptions: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _HasStereoAudioOptions>> & MeshProps, {
        options: Parameters<typeof _HasStereoAudioOptions>[0];
    
            },ReturnType<typeof _HasStereoAudioOptions>>, any>;
  _IESTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_IESTextureLoader>, {},_IESTextureLoader>, any>;
  _InstancesBatch: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_InstancesBatch>, {
parent: ConstructorParameters<typeof _InstancesBatch>[0];
    
    },_InstancesBatch>, any>;
  _KTXTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_KTXTextureLoader>, {},_KTXTextureLoader>, any>;
  _MeshCollisionData: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_MeshCollisionData>, {},_MeshCollisionData>, any>;
  _OcclusionDataStorage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_OcclusionDataStorage>, {},_OcclusionDataStorage>, any>;
  _PrimaryIsoTriangle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_PrimaryIsoTriangle>, {},_PrimaryIsoTriangle>, any>;
  _SetStereoscopicAnaglyphRigMode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _SetStereoscopicAnaglyphRigMode>> & MeshProps, {
        camera: Parameters<typeof _SetStereoscopicAnaglyphRigMode>[0];
    
            },ReturnType<typeof _SetStereoscopicAnaglyphRigMode>>, any>;
  _SetStereoscopicRigMode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _SetStereoscopicRigMode>> & MeshProps, {
        camera: Parameters<typeof _SetStereoscopicRigMode>[0];
    
            },ReturnType<typeof _SetStereoscopicRigMode>>, any>;
  _SetVrRigMode: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _SetVrRigMode>> & MeshProps, {
        camera: Parameters<typeof _SetVrRigMode>[0];
    rigParams: Parameters<typeof _SetVrRigMode>[1];
    
            },ReturnType<typeof _SetVrRigMode>>, any>;
  _TGATextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TGATextureLoader>, {},_TGATextureLoader>, any>;
  _TimeToken: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_TimeToken>, {},_TimeToken>, any>;
  _UpdateRGBDAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _UpdateRGBDAsync>> & MeshProps, {
        internalTexture: Parameters<typeof _UpdateRGBDAsync>[0];
    data: Parameters<typeof _UpdateRGBDAsync>[1];
    sphericalPolynomial: Parameters<typeof _UpdateRGBDAsync>[2];
    lodScale: Parameters<typeof _UpdateRGBDAsync>[3];
    lodOffset: Parameters<typeof _UpdateRGBDAsync>[4];
    
            },ReturnType<typeof _UpdateRGBDAsync>>, any>;
  _WebAudioBus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioBus>, {
name: ConstructorParameters<typeof _WebAudioBus>[0];
    engine: ConstructorParameters<typeof _WebAudioBus>[1];
    options: ConstructorParameters<typeof _WebAudioBus>[2];
    
    },_WebAudioBus>, any>;
  _WebAudioEngine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioEngine>, {
options: ConstructorParameters<typeof _WebAudioEngine>[0];
    
    },_WebAudioEngine>, any>;
  _WebAudioMainBus: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioMainBus>, {
name: ConstructorParameters<typeof _WebAudioMainBus>[0];
    engine: ConstructorParameters<typeof _WebAudioMainBus>[1];
    
    },_WebAudioMainBus>, any>;
  _WebAudioSoundSource: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioSoundSource>, {
name: ConstructorParameters<typeof _WebAudioSoundSource>[0];
    webAudioNode: ConstructorParameters<typeof _WebAudioSoundSource>[1];
    engine: ConstructorParameters<typeof _WebAudioSoundSource>[2];
    options: ConstructorParameters<typeof _WebAudioSoundSource>[3];
    
    },_WebAudioSoundSource>, any>;
  _WebAudioStaticSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioStaticSound>, {
name: ConstructorParameters<typeof _WebAudioStaticSound>[0];
    engine: ConstructorParameters<typeof _WebAudioStaticSound>[1];
    options: ConstructorParameters<typeof _WebAudioStaticSound>[2];
    
    },_WebAudioStaticSound>, any>;
  _WebAudioStaticSoundBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioStaticSoundBuffer> & Clonable, {
engine: ConstructorParameters<typeof _WebAudioStaticSoundBuffer>[0];
    
    },_WebAudioStaticSoundBuffer>, any>;
  _WebAudioStreamingSound: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<_WebAudioStreamingSound>, {
name: ConstructorParameters<typeof _WebAudioStreamingSound>[0];
    engine: ConstructorParameters<typeof _WebAudioStreamingSound>[1];
    options: ConstructorParameters<typeof _WebAudioStreamingSound>[2];
    
    },_WebAudioStreamingSound>, any>;
  _injectLTSFileTools: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof _injectLTSFileTools>> & MeshProps, {},ReturnType<typeof _injectLTSFileTools>>, any>;
  addToBlockFactory: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof addToBlockFactory>> & MeshProps, {
        module: Parameters<typeof addToBlockFactory>[0];
    blockName: Parameters<typeof addToBlockFactory>[1];
    factory: Parameters<typeof addToBlockFactory>[2];
    
            },ReturnType<typeof addToBlockFactory>>, any>;
  allocateAndCopyTypedBuffer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof allocateAndCopyTypedBuffer>> & MeshProps, {
        type: Parameters<typeof allocateAndCopyTypedBuffer>[0];
    sizeOrDstBuffer: Parameters<typeof allocateAndCopyTypedBuffer>[1];
    sizeInBytes: Parameters<typeof allocateAndCopyTypedBuffer>[2];
    copyBuffer: Parameters<typeof allocateAndCopyTypedBuffer>[3];
    
            },ReturnType<typeof allocateAndCopyTypedBuffer>>, any>;
  blockFactory: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof blockFactory>> & MeshProps, {
        blockName: Parameters<typeof blockFactory>[0];
    
            },ReturnType<typeof blockFactory>>, any>;
  captureEquirectangularFromScene: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof captureEquirectangularFromScene>> & MeshProps, {
        scene: Parameters<typeof captureEquirectangularFromScene>[0];
    options: Parameters<typeof captureEquirectangularFromScene>[1];
    
            },ReturnType<typeof captureEquirectangularFromScene>>, any>;
  className: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof className>> & MeshProps, {
        name: Parameters<typeof className>[0];
    module: Parameters<typeof className>[1];
    
            },ReturnType<typeof className>>, any>;
  computeMaxExtents: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof computeMaxExtents>> & MeshProps, {
        meshes: Parameters<typeof computeMaxExtents>[0];
    animationGroup: Parameters<typeof computeMaxExtents>[1];
    animationStep: Parameters<typeof computeMaxExtents>[2];
    
            },ReturnType<typeof computeMaxExtents>>, any>;
  createDetailMapPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createDetailMapPlugin>> & MeshProps, {
        material: Parameters<typeof createDetailMapPlugin>[0];
    
            },ReturnType<typeof createDetailMapPlugin>>, any>;
  createPBRAnisotropicPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRAnisotropicPlugin>> & MeshProps, {
        material: Parameters<typeof createPBRAnisotropicPlugin>[0];
    
            },ReturnType<typeof createPBRAnisotropicPlugin>>, any>;
  createPBRBRDFPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRBRDFPlugin>> & MeshProps, {
        material: Parameters<typeof createPBRBRDFPlugin>[0];
    
            },ReturnType<typeof createPBRBRDFPlugin>>, any>;
  createPBRClearCoatPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRClearCoatPlugin>> & MeshProps, {
        material: Parameters<typeof createPBRClearCoatPlugin>[0];
    
            },ReturnType<typeof createPBRClearCoatPlugin>>, any>;
  createPBRIridescencePlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRIridescencePlugin>> & MeshProps, {
        material: Parameters<typeof createPBRIridescencePlugin>[0];
    
            },ReturnType<typeof createPBRIridescencePlugin>>, any>;
  createPBRSheenPlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRSheenPlugin>> & MeshProps, {
        material: Parameters<typeof createPBRSheenPlugin>[0];
    
            },ReturnType<typeof createPBRSheenPlugin>>, any>;
  createPBRSubSurfacePlugin: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createPBRSubSurfacePlugin>> & MeshProps, {
        material: Parameters<typeof createPBRSubSurfacePlugin>[0];
    
            },ReturnType<typeof createPBRSubSurfacePlugin>>, any>;
  createYieldingScheduler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof createYieldingScheduler>> & MeshProps, {
        yieldAfterMS: Parameters<typeof createYieldingScheduler>[0];
    
            },ReturnType<typeof createYieldingScheduler>>, any>;
  deepMerge: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof deepMerge>> & MeshProps, {
        objects: Parameters<typeof deepMerge>[0];
    
            },ReturnType<typeof deepMerge>>, any>;
  editableInPropertyPage: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof editableInPropertyPage>> & MeshProps, {
        displayName: Parameters<typeof editableInPropertyPage>[0];
    propertyType: Parameters<typeof editableInPropertyPage>[1];
    groupName: Parameters<typeof editableInPropertyPage>[2];
    options: Parameters<typeof editableInPropertyPage>[3];
    
            },ReturnType<typeof editableInPropertyPage>>, any>;
  expandToProperty: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof expandToProperty>> & MeshProps, {
        callback: Parameters<typeof expandToProperty>[0];
    targetKey: Parameters<typeof expandToProperty>[1];
    
            },ReturnType<typeof expandToProperty>>, any>;
  extractMinAndMax: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof extractMinAndMax>> & MeshProps, {
        positions: Parameters<typeof extractMinAndMax>[0];
    start: Parameters<typeof extractMinAndMax>[1];
    count: Parameters<typeof extractMinAndMax>[2];
    bias: Parameters<typeof extractMinAndMax>[3];
    stride: Parameters<typeof extractMinAndMax>[4];
    
            },ReturnType<typeof extractMinAndMax>>, any>;
  extractMinAndMaxIndexed: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof extractMinAndMaxIndexed>> & MeshProps, {
        positions: Parameters<typeof extractMinAndMaxIndexed>[0];
    indices: Parameters<typeof extractMinAndMaxIndexed>[1];
    indexStart: Parameters<typeof extractMinAndMaxIndexed>[2];
    indexCount: Parameters<typeof extractMinAndMaxIndexed>[3];
    bias: Parameters<typeof extractMinAndMaxIndexed>[4];
    
            },ReturnType<typeof extractMinAndMaxIndexed>>, any>;
  getAnimationTypeByFlowGraphType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof getAnimationTypeByFlowGraphType>> & MeshProps, {
        flowGraphType: Parameters<typeof getAnimationTypeByFlowGraphType>[0];
    
            },ReturnType<typeof getAnimationTypeByFlowGraphType>>, any>;
  getDimensionsFromTextureSize: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof getDimensionsFromTextureSize>> & MeshProps, {
        size: Parameters<typeof getDimensionsFromTextureSize>[0];
    
            },ReturnType<typeof getDimensionsFromTextureSize>>, any>;
  getRichTypeByAnimationType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof getRichTypeByAnimationType>> & MeshProps, {
        animationType: Parameters<typeof getRichTypeByAnimationType>[0];
    
            },ReturnType<typeof getRichTypeByAnimationType>>, any>;
  getRichTypeByFlowGraphType: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof getRichTypeByFlowGraphType>> & MeshProps, {
        flowGraphType: Parameters<typeof getRichTypeByFlowGraphType>[0];
    
            },ReturnType<typeof getRichTypeByFlowGraphType>>, any>;
  getRichTypeFromValue: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof getRichTypeFromValue>> & MeshProps, {
        value: Parameters<typeof getRichTypeFromValue>[0];
    
            },ReturnType<typeof getRichTypeFromValue>>, any>;
  inlineScheduler: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof inlineScheduler>> & MeshProps, {
        coroutine: Parameters<typeof inlineScheduler>[0];
    onStep: Parameters<typeof inlineScheduler>[1];
    onError: Parameters<typeof inlineScheduler>[2];
    
            },ReturnType<typeof inlineScheduler>>, any>;
  makeAsyncFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof makeAsyncFunction>> & MeshProps, {
        coroutineFactory: Parameters<typeof makeAsyncFunction>[0];
    scheduler: Parameters<typeof makeAsyncFunction>[1];
    abortSignal: Parameters<typeof makeAsyncFunction>[2];
    
            },ReturnType<typeof makeAsyncFunction>>, any>;
  makeSyncFunction: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof makeSyncFunction>> & MeshProps, {
        coroutineFactory: Parameters<typeof makeSyncFunction>[0];
    abortSignal: Parameters<typeof makeSyncFunction>[1];
    
            },ReturnType<typeof makeSyncFunction>>, any>;
  nativeOverride: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof nativeOverride>> & MeshProps, {
        target: Parameters<typeof nativeOverride>[0];
    propertyKey: Parameters<typeof nativeOverride>[1];
    descriptor: Parameters<typeof nativeOverride>[2];
    predicate: Parameters<typeof nativeOverride>[3];
    
            },ReturnType<typeof nativeOverride>>, any>;
  normalizeEnvInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof normalizeEnvInfo>> & MeshProps, {
        info: Parameters<typeof normalizeEnvInfo>[0];
    
            },ReturnType<typeof normalizeEnvInfo>>, any>;
  registerTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof registerTextureLoader>> & MeshProps, {
        extension: Parameters<typeof registerTextureLoader>[0];
    loaderFactory: Parameters<typeof registerTextureLoader>[1];
    
            },ReturnType<typeof registerTextureLoader>>, any>;
  runCoroutine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutine>> & MeshProps, {
        coroutine: Parameters<typeof runCoroutine>[0];
    scheduler: Parameters<typeof runCoroutine>[1];
    onSuccess: Parameters<typeof runCoroutine>[2];
    onError: Parameters<typeof runCoroutine>[3];
    abortSignal: Parameters<typeof runCoroutine>[4];
    
            },ReturnType<typeof runCoroutine>>, any>;
  runCoroutineAsync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutineAsync>> & MeshProps, {
        coroutine: Parameters<typeof runCoroutineAsync>[0];
    scheduler: Parameters<typeof runCoroutineAsync>[1];
    abortSignal: Parameters<typeof runCoroutineAsync>[2];
    
            },ReturnType<typeof runCoroutineAsync>>, any>;
  runCoroutineSync: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof runCoroutineSync>> & MeshProps, {
        coroutine: Parameters<typeof runCoroutineSync>[0];
    abortSignal: Parameters<typeof runCoroutineSync>[1];
    
            },ReturnType<typeof runCoroutineSync>>, any>;
  serialize: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serialize>> & MeshProps, {
        sourceName: Parameters<typeof serialize>[0];
    
            },ReturnType<typeof serialize>>, any>;
  serializeAsCameraReference: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsCameraReference>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsCameraReference>[0];
    
            },ReturnType<typeof serializeAsCameraReference>>, any>;
  serializeAsColor3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColor3>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsColor3>[0];
    
            },ReturnType<typeof serializeAsColor3>>, any>;
  serializeAsColor4: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColor4>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsColor4>[0];
    
            },ReturnType<typeof serializeAsColor4>>, any>;
  serializeAsColorCurves: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsColorCurves>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsColorCurves>[0];
    
            },ReturnType<typeof serializeAsColorCurves>>, any>;
  serializeAsFresnelParameters: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsFresnelParameters>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsFresnelParameters>[0];
    
            },ReturnType<typeof serializeAsFresnelParameters>>, any>;
  serializeAsImageProcessingConfiguration: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsImageProcessingConfiguration>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsImageProcessingConfiguration>[0];
    
            },ReturnType<typeof serializeAsImageProcessingConfiguration>>, any>;
  serializeAsMatrix: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsMatrix>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsMatrix>[0];
    
            },ReturnType<typeof serializeAsMatrix>>, any>;
  serializeAsMeshReference: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsMeshReference>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsMeshReference>[0];
    
            },ReturnType<typeof serializeAsMeshReference>>, any>;
  serializeAsQuaternion: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsQuaternion>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsQuaternion>[0];
    
            },ReturnType<typeof serializeAsQuaternion>>, any>;
  serializeAsTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsTexture>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsTexture>[0];
    
            },ReturnType<typeof serializeAsTexture>>, any>;
  serializeAsVector2: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsVector2>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsVector2>[0];
    
            },ReturnType<typeof serializeAsVector2>>, any>;
  serializeAsVector3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof serializeAsVector3>> & MeshProps, {
        sourceName: Parameters<typeof serializeAsVector3>[0];
    
            },ReturnType<typeof serializeAsVector3>>, any>;
  setAndStartTimer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof setAndStartTimer>> & MeshProps, {
        options: Parameters<typeof setAndStartTimer>[0];
    
            },ReturnType<typeof setAndStartTimer>>, any>;
  setOpenGLOrientationForUV: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof setOpenGLOrientationForUV>> & MeshProps, {
        value: Parameters<typeof setOpenGLOrientationForUV>[0];
    
            },ReturnType<typeof setOpenGLOrientationForUV>>, any>;
  textureSizeIsObject: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof textureSizeIsObject>> & MeshProps, {
        size: Parameters<typeof textureSizeIsObject>[0];
    
            },ReturnType<typeof textureSizeIsObject>>, any>;
  unregisterTextureLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ReturnType<typeof unregisterTextureLoader>> & MeshProps, {
        extension: Parameters<typeof unregisterTextureLoader>[0];
    
            },ReturnType<typeof unregisterTextureLoader>>, any>;
}
