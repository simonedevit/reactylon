
//@ts-nocheck
import type { BabylonProps, ExcludeReadonlyAndPrivate } from '../types/types';
import type { MeshProps, GuiProps, Clonable, WebXRCameraProps, TextureProps, MaterialProps, CameraProps } from '../types/props';
import type { AbstractButton3D } from '@babylonjs/gui';
import type { AdvancedDynamicTexture } from '@babylonjs/gui';
import type { AdvancedDynamicTextureInstrumentation } from '@babylonjs/gui';
import type { BaseGradient } from '@babylonjs/gui';
import type { BaseSlider } from '@babylonjs/gui';
import type { Button } from '@babylonjs/gui';
import type { Button3D } from '@babylonjs/gui';
import type { Checkbox } from '@babylonjs/gui';
import type { ColorPicker } from '@babylonjs/gui';
import type { Container } from '@babylonjs/gui';
import type { Container3D } from '@babylonjs/gui';
import type { Control } from '@babylonjs/gui';
import type { Control3D } from '@babylonjs/gui';
import type { CylinderPanel } from '@babylonjs/gui';
import type { DisplayGrid } from '@babylonjs/gui';
import type { Ellipse } from '@babylonjs/gui';
import type { FluentBackplateMaterial } from '@babylonjs/gui';
import type { FluentButtonMaterial } from '@babylonjs/gui';
import type { FluentMaterial } from '@babylonjs/gui';
import type { FluentMaterialDefines } from '@babylonjs/gui';
import type { FocusableButton } from '@babylonjs/gui';
import type { FrameGraphGUITask } from '@babylonjs/gui';
import type { GUI3DManager } from '@babylonjs/gui';
import type { GizmoHandle } from '@babylonjs/gui';
import type { Grid } from '@babylonjs/gui';
import type { HandMenu } from '@babylonjs/gui';
import type { HandleMaterial } from '@babylonjs/gui';
import type { HolographicBackplate } from '@babylonjs/gui';
import type { HolographicButton } from '@babylonjs/gui';
import type { HolographicSlate } from '@babylonjs/gui';
import type { Image } from '@babylonjs/gui';
import type { ImageBasedSlider } from '@babylonjs/gui';
import type { ImageScrollBar } from '@babylonjs/gui';
import type { InputText } from '@babylonjs/gui';
import type { InputTextArea } from '@babylonjs/gui';
import type { Line } from '@babylonjs/gui';
import type { LinearGradient } from '@babylonjs/gui';
import type { MRDLBackplateMaterial } from '@babylonjs/gui';
import type { MRDLSliderBarMaterial } from '@babylonjs/gui';
import type { MRDLSliderThumbMaterial } from '@babylonjs/gui';
import type { Matrix2D } from '@babylonjs/gui';
import type { Measure } from '@babylonjs/gui';
import type { MeshButton3D } from '@babylonjs/gui';
import type { MultiLine } from '@babylonjs/gui';
import type { MultiLinePoint } from '@babylonjs/gui';
import type { NearMenu } from '@babylonjs/gui';
import type { NodeRenderGraphGUIBlock } from '@babylonjs/gui';
import type { RadialGradient } from '@babylonjs/gui';
import type { RadioButton } from '@babylonjs/gui';
import type { RadioGroup } from '@babylonjs/gui';
import type { Rectangle } from '@babylonjs/gui';
import type { ScatterPanel } from '@babylonjs/gui';
import type { ScrollBar } from '@babylonjs/gui';
import type { ScrollViewer } from '@babylonjs/gui';
import type { SelectionPanel } from '@babylonjs/gui';
import type { SelectorGroup } from '@babylonjs/gui';
import type { SlateGizmo } from '@babylonjs/gui';
import type { Slider } from '@babylonjs/gui';
import type { Slider3D } from '@babylonjs/gui';
import type { SpherePanel } from '@babylonjs/gui';
import type { StackPanel } from '@babylonjs/gui';
import type { StackPanel3D } from '@babylonjs/gui';
import type { Style } from '@babylonjs/gui';
import type { TextBlock } from '@babylonjs/gui';
import type { ToggleButton } from '@babylonjs/gui';
import type { TouchButton3D } from '@babylonjs/gui';
import type { TouchHolographicButton } from '@babylonjs/gui';
import type { TouchHolographicButtonV3 } from '@babylonjs/gui';
import type { TouchHolographicMenu } from '@babylonjs/gui';
import type { TouchMeshButton3D } from '@babylonjs/gui';
import type { ValueAndUnit } from '@babylonjs/gui';
import type { Vector2WithInfo } from '@babylonjs/gui';
import type { Vector3WithInfo } from '@babylonjs/gui';
import type { VirtualKeyboard } from '@babylonjs/gui';
import type { VolumeBasedPanel } from '@babylonjs/gui';
import type { XmlLoader } from '@babylonjs/gui';
import type { RowProps, ColumnProps } from '../types/props';
    
export interface JSXElements {
  abstractButton3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AbstractButton3D>, {
name: ConstructorParameters<typeof AbstractButton3D>[0];
    
    } & GuiProps,AbstractButton3D>, any>;
  advancedDynamicTexture: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AdvancedDynamicTexture> & Clonable, {
name: ConstructorParameters<typeof AdvancedDynamicTexture>[0];
    widthOrOptions: ConstructorParameters<typeof AdvancedDynamicTexture>[1];
    _height: ConstructorParameters<typeof AdvancedDynamicTexture>[2];
    scene: ConstructorParameters<typeof AdvancedDynamicTexture>[3];
    generateMipMaps: ConstructorParameters<typeof AdvancedDynamicTexture>[4];
    samplingMode: ConstructorParameters<typeof AdvancedDynamicTexture>[5];
    invertY: ConstructorParameters<typeof AdvancedDynamicTexture>[6];
    
    } & GuiProps & TextureProps,AdvancedDynamicTexture>, any>;
  advancedDynamicTextureInstrumentation: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<AdvancedDynamicTextureInstrumentation>, {
texture: ConstructorParameters<typeof AdvancedDynamicTextureInstrumentation>[0];
    
    } & GuiProps,AdvancedDynamicTextureInstrumentation>, any>;
  baseGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseGradient>, {} & GuiProps,BaseGradient>, any>;
  baseSlider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseSlider> & Clonable, {
name: ConstructorParameters<typeof BaseSlider>[0];
    
    } & GuiProps,BaseSlider>, any>;
  button2D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Button> & Clonable, {
name: ConstructorParameters<typeof Button>[0];
    
    } & GuiProps,Button>, any>;
  button3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Button3D>, {
name: ConstructorParameters<typeof Button3D>[0];
    options: ConstructorParameters<typeof Button3D>[1];
    
    } & GuiProps,Button3D>, any>;
  checkbox: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Checkbox> & Clonable, {
name: ConstructorParameters<typeof Checkbox>[0];
    
    } & GuiProps,Checkbox>, any>;
  colorPicker: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ColorPicker> & Clonable, {
name: ConstructorParameters<typeof ColorPicker>[0];
    
    } & GuiProps,ColorPicker>, any>;
  container: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Container> & Clonable, {
name: ConstructorParameters<typeof Container>[0];
    
    } & GuiProps,Container>, any>;
  container3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Container3D>, {
name: ConstructorParameters<typeof Container3D>[0];
    
    } & GuiProps,Container3D>, any>;
  control: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Control> & Clonable, {
name: ConstructorParameters<typeof Control>[0];
    
    } & GuiProps,Control>, any>;
  control3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Control3D>, {
name: ConstructorParameters<typeof Control3D>[0];
    
    } & GuiProps,Control3D>, any>;
  cylinderPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderPanel>, {} & GuiProps,CylinderPanel>, any>;
  displayGrid: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DisplayGrid> & Clonable, {
name: ConstructorParameters<typeof DisplayGrid>[0];
    
    } & GuiProps,DisplayGrid>, any>;
  ellipse2D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Ellipse> & Clonable, {
name: ConstructorParameters<typeof Ellipse>[0];
    
    } & GuiProps,Ellipse>, any>;
  fluentBackplateMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluentBackplateMaterial> & Clonable, {
name: ConstructorParameters<typeof FluentBackplateMaterial>[0];
    scene: ConstructorParameters<typeof FluentBackplateMaterial>[1];
    
    } & GuiProps & MaterialProps,FluentBackplateMaterial>, any>;
  fluentButtonMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluentButtonMaterial> & Clonable, {
name: ConstructorParameters<typeof FluentButtonMaterial>[0];
    scene: ConstructorParameters<typeof FluentButtonMaterial>[1];
    
    } & GuiProps & MaterialProps,FluentButtonMaterial>, any>;
  fluentMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluentMaterial> & Clonable, {
name: ConstructorParameters<typeof FluentMaterial>[0];
    scene: ConstructorParameters<typeof FluentMaterial>[1];
    
    } & GuiProps & MaterialProps,FluentMaterial>, any>;
  fluentMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluentMaterialDefines>, {} & GuiProps,FluentMaterialDefines>, any>;
  focusableButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FocusableButton> & Clonable, {
name: ConstructorParameters<typeof FocusableButton>[0];
    
    } & GuiProps,FocusableButton>, any>;
  frameGraphGUITask: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FrameGraphGUITask>, {
name: ConstructorParameters<typeof FrameGraphGUITask>[0];
    frameGraph: ConstructorParameters<typeof FrameGraphGUITask>[1];
    adt: ConstructorParameters<typeof FrameGraphGUITask>[2];
    
    } & GuiProps,FrameGraphGUITask>, any>;
  gUI3DManager: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GUI3DManager>, {
scene: ConstructorParameters<typeof GUI3DManager>[0];
    
    } & GuiProps,GUI3DManager>, any>;
  gizmoHandle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<GizmoHandle>, {
gizmo: ConstructorParameters<typeof GizmoHandle>[0];
    scene: ConstructorParameters<typeof GizmoHandle>[1];
    
    } & GuiProps,GizmoHandle>, any>;
  grid: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Grid> & Clonable, {
name: ConstructorParameters<typeof Grid>[0];
    
    } & GuiProps,Grid>, any>;
  handMenu: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandMenu>, {
xr: ConstructorParameters<typeof HandMenu>[0];
    name: ConstructorParameters<typeof HandMenu>[1];
    
    } & GuiProps,HandMenu>, any>;
  handleMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HandleMaterial> & Clonable, {
name: ConstructorParameters<typeof HandleMaterial>[0];
    scene: ConstructorParameters<typeof HandleMaterial>[1];
    
    } & GuiProps & MaterialProps,HandleMaterial>, any>;
  holographicBackplate: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HolographicBackplate>, {
name: ConstructorParameters<typeof HolographicBackplate>[0];
    _shareMaterials: ConstructorParameters<typeof HolographicBackplate>[1];
    
    } & GuiProps,HolographicBackplate>, any>;
  holographicButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HolographicButton>, {
name: ConstructorParameters<typeof HolographicButton>[0];
    shareMaterials: ConstructorParameters<typeof HolographicButton>[1];
    
    } & GuiProps,HolographicButton>, any>;
  holographicSlate: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<HolographicSlate>, {
name: ConstructorParameters<typeof HolographicSlate>[0];
    
    } & GuiProps,HolographicSlate>, any>;
  image2D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Image> & Clonable, {
name: ConstructorParameters<typeof Image>[0];
    url: ConstructorParameters<typeof Image>[1];
    
    } & GuiProps,Image>, any>;
  imageBasedSlider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageBasedSlider> & Clonable, {
name: ConstructorParameters<typeof ImageBasedSlider>[0];
    
    } & GuiProps,ImageBasedSlider>, any>;
  imageScrollBar: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ImageScrollBar> & Clonable, {
name: ConstructorParameters<typeof ImageScrollBar>[0];
    
    } & GuiProps,ImageScrollBar>, any>;
  inputText: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InputText> & Clonable, {
name: ConstructorParameters<typeof InputText>[0];
    text: ConstructorParameters<typeof InputText>[1];
    
    } & GuiProps,InputText>, any>;
  inputTextArea: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<InputTextArea> & Clonable, {
name: ConstructorParameters<typeof InputTextArea>[0];
    text: ConstructorParameters<typeof InputTextArea>[1];
    
    } & GuiProps,InputTextArea>, any>;
  line: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Line> & Clonable, {
name: ConstructorParameters<typeof Line>[0];
    
    } & GuiProps,Line>, any>;
  linearGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<LinearGradient>, {
x0: ConstructorParameters<typeof LinearGradient>[0];
    y0: ConstructorParameters<typeof LinearGradient>[1];
    x1: ConstructorParameters<typeof LinearGradient>[2];
    y1: ConstructorParameters<typeof LinearGradient>[3];
    
    } & GuiProps,LinearGradient>, any>;
  mRDLBackplateMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MRDLBackplateMaterial> & Clonable, {
name: ConstructorParameters<typeof MRDLBackplateMaterial>[0];
    scene: ConstructorParameters<typeof MRDLBackplateMaterial>[1];
    
    } & GuiProps & MaterialProps,MRDLBackplateMaterial>, any>;
  mRDLSliderBarMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MRDLSliderBarMaterial> & Clonable, {
name: ConstructorParameters<typeof MRDLSliderBarMaterial>[0];
    scene: ConstructorParameters<typeof MRDLSliderBarMaterial>[1];
    
    } & GuiProps & MaterialProps,MRDLSliderBarMaterial>, any>;
  mRDLSliderThumbMaterial: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MRDLSliderThumbMaterial> & Clonable, {
name: ConstructorParameters<typeof MRDLSliderThumbMaterial>[0];
    scene: ConstructorParameters<typeof MRDLSliderThumbMaterial>[1];
    
    } & GuiProps & MaterialProps,MRDLSliderThumbMaterial>, any>;
  matrix2D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Matrix2D>, {
m00: ConstructorParameters<typeof Matrix2D>[0];
    m01: ConstructorParameters<typeof Matrix2D>[1];
    m10: ConstructorParameters<typeof Matrix2D>[2];
    m11: ConstructorParameters<typeof Matrix2D>[3];
    m20: ConstructorParameters<typeof Matrix2D>[4];
    m21: ConstructorParameters<typeof Matrix2D>[5];
    
    } & GuiProps,Matrix2D>, any>;
  measure: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Measure>, {
left: ConstructorParameters<typeof Measure>[0];
    top: ConstructorParameters<typeof Measure>[1];
    width: ConstructorParameters<typeof Measure>[2];
    height: ConstructorParameters<typeof Measure>[3];
    
    } & GuiProps,Measure>, any>;
  meshButton3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MeshButton3D>, {
mesh: ConstructorParameters<typeof MeshButton3D>[0];
    name: ConstructorParameters<typeof MeshButton3D>[1];
    
    } & GuiProps,MeshButton3D>, any>;
  multiLine: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiLine> & Clonable, {
name: ConstructorParameters<typeof MultiLine>[0];
    
    } & GuiProps,MultiLine>, any>;
  multiLinePoint: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<MultiLinePoint>, {
multiLine: ConstructorParameters<typeof MultiLinePoint>[0];
    
    } & GuiProps,MultiLinePoint>, any>;
  nearMenu: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NearMenu>, {
name: ConstructorParameters<typeof NearMenu>[0];
    
    } & GuiProps,NearMenu>, any>;
  nodeRenderGraphGUIBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<NodeRenderGraphGUIBlock> & Clonable, {
name: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[0];
    frameGraph: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[1];
    scene: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[2];
    
    } & GuiProps,NodeRenderGraphGUIBlock>, any>;
  radialGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RadialGradient>, {
x0: ConstructorParameters<typeof RadialGradient>[0];
    y0: ConstructorParameters<typeof RadialGradient>[1];
    r0: ConstructorParameters<typeof RadialGradient>[2];
    x1: ConstructorParameters<typeof RadialGradient>[3];
    y1: ConstructorParameters<typeof RadialGradient>[4];
    r1: ConstructorParameters<typeof RadialGradient>[5];
    
    } & GuiProps,RadialGradient>, any>;
  radioButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RadioButton> & Clonable, {
name: ConstructorParameters<typeof RadioButton>[0];
    
    } & GuiProps,RadioButton>, any>;
  radioGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RadioGroup>, {} & GuiProps,RadioGroup>, any>;
  rectangle: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Rectangle> & Clonable, {
name: ConstructorParameters<typeof Rectangle>[0];
    
    } & GuiProps,Rectangle>, any>;
  scatterPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScatterPanel>, {} & GuiProps,ScatterPanel>, any>;
  scrollBar: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScrollBar> & Clonable, {
name: ConstructorParameters<typeof ScrollBar>[0];
    
    } & GuiProps,ScrollBar>, any>;
  scrollViewer: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScrollViewer> & Clonable, {
name: ConstructorParameters<typeof ScrollViewer>[0];
    isImageBased: ConstructorParameters<typeof ScrollViewer>[1];
    
    } & GuiProps,ScrollViewer>, any>;
  selectionPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SelectionPanel> & Clonable, {
name: ConstructorParameters<typeof SelectionPanel>[0];
    groups: ConstructorParameters<typeof SelectionPanel>[1];
    
    } & GuiProps,SelectionPanel>, any>;
  selectorGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SelectorGroup>, {
name: ConstructorParameters<typeof SelectorGroup>[0];
    
    } & GuiProps,SelectorGroup>, any>;
  slateGizmo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SlateGizmo>, {
utilityLayer: ConstructorParameters<typeof SlateGizmo>[0];
    
    } & GuiProps,SlateGizmo>, any>;
  slider: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Slider> & Clonable, {
name: ConstructorParameters<typeof Slider>[0];
    
    } & GuiProps,Slider>, any>;
  slider3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Slider3D>, {
name: ConstructorParameters<typeof Slider3D>[0];
    sliderBackplateVisible: ConstructorParameters<typeof Slider3D>[1];
    
    } & GuiProps,Slider3D>, any>;
  spherePanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpherePanel>, {} & GuiProps,SpherePanel>, any>;
  stackPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StackPanel> & Clonable, {
name: ConstructorParameters<typeof StackPanel>[0];
    
    } & GuiProps,StackPanel>, any>;
  stackPanel3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<StackPanel3D>, {
isVertical: ConstructorParameters<typeof StackPanel3D>[0];
    
    } & GuiProps,StackPanel3D>, any>;
  style: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Style>, {
host: ConstructorParameters<typeof Style>[0];
    
    } & GuiProps,Style>, any>;
  textBlock: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TextBlock> & Clonable, {
name: ConstructorParameters<typeof TextBlock>[0];
    text: ConstructorParameters<typeof TextBlock>[1];
    
    } & GuiProps,TextBlock>, any>;
  toggleButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ToggleButton> & Clonable, {
name: ConstructorParameters<typeof ToggleButton>[0];
    group: ConstructorParameters<typeof ToggleButton>[1];
    
    } & GuiProps,ToggleButton>, any>;
  touchButton3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchButton3D>, {
name: ConstructorParameters<typeof TouchButton3D>[0];
    collisionMesh: ConstructorParameters<typeof TouchButton3D>[1];
    
    } & GuiProps,TouchButton3D>, any>;
  touchHolographicButton: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchHolographicButton>, {
name: ConstructorParameters<typeof TouchHolographicButton>[0];
    shareMaterials: ConstructorParameters<typeof TouchHolographicButton>[1];
    
    } & GuiProps,TouchHolographicButton>, any>;
  touchHolographicButtonV3: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchHolographicButtonV3>, {
name: ConstructorParameters<typeof TouchHolographicButtonV3>[0];
    shareMaterials: ConstructorParameters<typeof TouchHolographicButtonV3>[1];
    
    } & GuiProps,TouchHolographicButtonV3>, any>;
  touchHolographicMenu: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchHolographicMenu>, {
name: ConstructorParameters<typeof TouchHolographicMenu>[0];
    
    } & GuiProps,TouchHolographicMenu>, any>;
  touchMeshButton3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<TouchMeshButton3D>, {
mesh: ConstructorParameters<typeof TouchMeshButton3D>[0];
    name: ConstructorParameters<typeof TouchMeshButton3D>[1];
    
    } & GuiProps,TouchMeshButton3D>, any>;
  valueAndUnit: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ValueAndUnit>, {
value: ConstructorParameters<typeof ValueAndUnit>[0];
    unit: ConstructorParameters<typeof ValueAndUnit>[1];
    negativeValueAllowed: ConstructorParameters<typeof ValueAndUnit>[2];
    
    } & GuiProps,ValueAndUnit>, any>;
  vector2WithInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Vector2WithInfo> & Clonable, {
source: ConstructorParameters<typeof Vector2WithInfo>[0];
    buttonIndex: ConstructorParameters<typeof Vector2WithInfo>[1];
    
    } & GuiProps,Vector2WithInfo>, any>;
  vector3WithInfo: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Vector3WithInfo> & Clonable, {
source: ConstructorParameters<typeof Vector3WithInfo>[0];
    buttonIndex: ConstructorParameters<typeof Vector3WithInfo>[1];
    
    } & GuiProps,Vector3WithInfo>, any>;
  virtualKeyboard: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VirtualKeyboard> & Clonable, {} & GuiProps,VirtualKeyboard>, any>;
  volumeBasedPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VolumeBasedPanel>, {
name: ConstructorParameters<typeof VolumeBasedPanel>[0];
    
    } & GuiProps,VolumeBasedPanel>, any>;
  xmlLoader: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<XmlLoader>, {
parentClass: ConstructorParameters<typeof XmlLoader>[0];
    
    } & GuiProps,XmlLoader>, any>;
  row: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Container>,RowProps,Grid>, any>;
  column: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<Container>,ColumnProps,Grid>, any>;
}
