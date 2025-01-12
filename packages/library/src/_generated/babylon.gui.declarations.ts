//@ts-nocheck
import { type BabylonProps, type ExcludeReadonlyAndPrivate } from '../types/types';
import { type MeshProps, type GuiProps, type Clonable, type WebXRCameraProps, type TextureProps, type MaterialProps, type CameraProps } from '../types/props';
import { FrameGraphGUITask } from '@babylonjs/gui/2D/FrameGraph/guiTask';
import { NodeRenderGraphGUIBlock } from '@babylonjs/gui/2D/FrameGraph/renderGraphGUIBlock';
import { AdvancedDynamicTextureInstrumentation } from '@babylonjs/gui/2D/adtInstrumentation';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { Button } from '@babylonjs/gui/2D/controls/button';
import { Checkbox } from '@babylonjs/gui/2D/controls/checkbox';
import { ColorPicker } from '@babylonjs/gui/2D/controls/colorpicker';
import { Container } from '@babylonjs/gui/2D/controls/container';
import { Control } from '@babylonjs/gui/2D/controls/control';
import { DisplayGrid } from '@babylonjs/gui/2D/controls/displayGrid';
import { Ellipse } from '@babylonjs/gui/2D/controls/ellipse';
import { FocusableButton } from '@babylonjs/gui/2D/controls/focusableButton';
import { BaseGradient } from '@babylonjs/gui/2D/controls/gradient/BaseGradient';
import { LinearGradient } from '@babylonjs/gui/2D/controls/gradient/LinearGradient';
import { RadialGradient } from '@babylonjs/gui/2D/controls/gradient/RadialGradient';
import { Grid } from '@babylonjs/gui/2D/controls/grid';
import { Image } from '@babylonjs/gui/2D/controls/image';
import { InputText } from '@babylonjs/gui/2D/controls/inputText';
import { InputTextArea } from '@babylonjs/gui/2D/controls/inputTextArea';
import { Line } from '@babylonjs/gui/2D/controls/line';
import { MultiLine } from '@babylonjs/gui/2D/controls/multiLine';
import { RadioButton } from '@babylonjs/gui/2D/controls/radioButton';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';
import { ScrollViewer } from '@babylonjs/gui/2D/controls/scrollViewers/scrollViewer';
import { _ScrollViewerWindow } from '@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow';
import { RadioGroup } from '@babylonjs/gui/2D/controls/selector';
import { SelectionPanel } from '@babylonjs/gui/2D/controls/selector';
import { SelectorGroup } from '@babylonjs/gui/2D/controls/selector';
import { BaseSlider } from '@babylonjs/gui/2D/controls/sliders/baseSlider';
import { ImageBasedSlider } from '@babylonjs/gui/2D/controls/sliders/imageBasedSlider';
import { ImageScrollBar } from '@babylonjs/gui/2D/controls/sliders/imageScrollBar';
import { ScrollBar } from '@babylonjs/gui/2D/controls/sliders/scrollBar';
import { Slider } from '@babylonjs/gui/2D/controls/sliders/slider';
import { StackPanel } from '@babylonjs/gui/2D/controls/stackPanel';
import { TextBlock } from '@babylonjs/gui/2D/controls/textBlock';
import { ToggleButton } from '@babylonjs/gui/2D/controls/toggleButton';
import { VirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard';
import { Matrix2D } from '@babylonjs/gui/2D/math2D';
import { Vector2WithInfo } from '@babylonjs/gui/2D/math2D';
import { Measure } from '@babylonjs/gui/2D/measure';
import { MultiLinePoint } from '@babylonjs/gui/2D/multiLinePoint';
import { Style } from '@babylonjs/gui/2D/style';
import { ValueAndUnit } from '@babylonjs/gui/2D/valueAndUnit';
import { XmlLoader } from '@babylonjs/gui/2D/xmlLoader';
import { DefaultBehavior } from '@babylonjs/gui/3D/behaviors/defaultBehavior';
import { TouchHolographicButton } from '@babylonjs/gui/3D/controls/MRTK3/touchHolographicButton';
import { AbstractButton3D } from '@babylonjs/gui/3D/controls/abstractButton3D';
import { Button3D } from '@babylonjs/gui/3D/controls/button3D';
import { Container3D } from '@babylonjs/gui/3D/controls/container3D';
import { ContentDisplay3D } from '@babylonjs/gui/3D/controls/contentDisplay3D';
import { Control3D } from '@babylonjs/gui/3D/controls/control3D';
import { CylinderPanel } from '@babylonjs/gui/3D/controls/cylinderPanel';
import { HandMenu } from '@babylonjs/gui/3D/controls/handMenu';
import { HolographicBackplate } from '@babylonjs/gui/3D/controls/holographicBackplate';
import { HolographicButton } from '@babylonjs/gui/3D/controls/holographicButton';
import { HolographicSlate } from '@babylonjs/gui/3D/controls/holographicSlate';
import { MeshButton3D } from '@babylonjs/gui/3D/controls/meshButton3D';
import { NearMenu } from '@babylonjs/gui/3D/controls/nearMenu';
import { ScatterPanel } from '@babylonjs/gui/3D/controls/scatterPanel';
import { Slider3D } from '@babylonjs/gui/3D/controls/slider3D';
import { SpherePanel } from '@babylonjs/gui/3D/controls/spherePanel';
import { StackPanel3D } from '@babylonjs/gui/3D/controls/stackPanel3D';
import { TouchButton3D } from '@babylonjs/gui/3D/controls/touchButton3D';
import { TouchHolographicMenu } from '@babylonjs/gui/3D/controls/touchHolographicMenu';
import { TouchMeshButton3D } from '@babylonjs/gui/3D/controls/touchMeshButton3D';
import { VolumeBasedPanel } from '@babylonjs/gui/3D/controls/volumeBasedPanel';
import { GizmoHandle } from '@babylonjs/gui/3D/gizmos/gizmoHandle';
import { SlateGizmo } from '@babylonjs/gui/3D/gizmos/slateGizmo';
import { GUI3DManager } from '@babylonjs/gui/3D/gui3DManager';
import { FluentMaterial } from '@babylonjs/gui/3D/materials/fluent/fluentMaterial';
import { FluentMaterialDefines } from '@babylonjs/gui/3D/materials/fluent/fluentMaterial';
import { FluentBackplateMaterial } from '@babylonjs/gui/3D/materials/fluentBackplate/fluentBackplateMaterial';
import { FluentButtonMaterial } from '@babylonjs/gui/3D/materials/fluentButton/fluentButtonMaterial';
import { HandleMaterial } from '@babylonjs/gui/3D/materials/handle/handleMaterial';
import { MRDLBackglowMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlBackglowMaterial';
import { MRDLBackplateMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlBackplateMaterial';
import { MRDLFrontplateMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlFrontplateMaterial';
import { MRDLInnerquadMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlInnerquadMaterial';
import { MRDLSliderBarMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlSliderBarMaterial';
import { MRDLSliderThumbMaterial } from '@babylonjs/gui/3D/materials/mrdl/mrdlSliderThumbMaterial';
import { Vector3WithInfo } from '@babylonjs/gui/3D/vector3WithInfo';

export interface JSXElements {
    frameGraphGUITask: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FrameGraphGUITask>,
            {
                name: ConstructorParameters<typeof FrameGraphGUITask>[0];
                frameGraph: ConstructorParameters<typeof FrameGraphGUITask>[1];
                adt: ConstructorParameters<typeof FrameGraphGUITask>[2];
            } & GuiProps,
            FrameGraphGUITask
        >,
        any
    >;
    nodeRenderGraphGUIBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NodeRenderGraphGUIBlock> & Clonable,
            {
                name: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[0];
                frameGraph: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[1];
                scene: ConstructorParameters<typeof NodeRenderGraphGUIBlock>[2];
            } & GuiProps,
            NodeRenderGraphGUIBlock
        >,
        any
    >;
    advancedDynamicTextureInstrumentation: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AdvancedDynamicTextureInstrumentation>,
            {
                texture: ConstructorParameters<typeof AdvancedDynamicTextureInstrumentation>[0];
            } & GuiProps,
            AdvancedDynamicTextureInstrumentation
        >,
        any
    >;
    advancedDynamicTexture: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AdvancedDynamicTexture> & Clonable,
            {
                name: ConstructorParameters<typeof AdvancedDynamicTexture>[0];
                widthOrOptions: ConstructorParameters<typeof AdvancedDynamicTexture>[1];
                _height: ConstructorParameters<typeof AdvancedDynamicTexture>[2];
                scene: ConstructorParameters<typeof AdvancedDynamicTexture>[3];
                generateMipMaps: ConstructorParameters<typeof AdvancedDynamicTexture>[4];
                samplingMode: ConstructorParameters<typeof AdvancedDynamicTexture>[5];
                invertY: ConstructorParameters<typeof AdvancedDynamicTexture>[6];
            } & GuiProps &
                TextureProps,
            AdvancedDynamicTexture
        >,
        any
    >;
    button2D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Button> & Clonable,
            {
                name: ConstructorParameters<typeof Button>[0];
            } & GuiProps,
            Button
        >,
        any
    >;
    checkbox: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Checkbox> & Clonable,
            {
                name: ConstructorParameters<typeof Checkbox>[0];
            } & GuiProps,
            Checkbox
        >,
        any
    >;
    colorPicker: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ColorPicker> & Clonable,
            {
                name: ConstructorParameters<typeof ColorPicker>[0];
            } & GuiProps,
            ColorPicker
        >,
        any
    >;
    container: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Container> & Clonable,
            {
                name: ConstructorParameters<typeof Container>[0];
            } & GuiProps,
            Container
        >,
        any
    >;
    control: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Control> & Clonable,
            {
                name: ConstructorParameters<typeof Control>[0];
            } & GuiProps,
            Control
        >,
        any
    >;
    displayGrid: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<DisplayGrid> & Clonable,
            {
                name: ConstructorParameters<typeof DisplayGrid>[0];
            } & GuiProps,
            DisplayGrid
        >,
        any
    >;
    ellipse: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Ellipse> & Clonable,
            {
                name: ConstructorParameters<typeof Ellipse>[0];
            } & GuiProps,
            Ellipse
        >,
        any
    >;
    focusableButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FocusableButton> & Clonable,
            {
                name: ConstructorParameters<typeof FocusableButton>[0];
            } & GuiProps,
            FocusableButton
        >,
        any
    >;
    baseGradient: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<BaseGradient>, {} & GuiProps, BaseGradient>, any>;
    linearGradient: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<LinearGradient>,
            {
                x0: ConstructorParameters<typeof LinearGradient>[0];
                y0: ConstructorParameters<typeof LinearGradient>[1];
                x1: ConstructorParameters<typeof LinearGradient>[2];
                y1: ConstructorParameters<typeof LinearGradient>[3];
            } & GuiProps,
            LinearGradient
        >,
        any
    >;
    radialGradient: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RadialGradient>,
            {
                x0: ConstructorParameters<typeof RadialGradient>[0];
                y0: ConstructorParameters<typeof RadialGradient>[1];
                r0: ConstructorParameters<typeof RadialGradient>[2];
                x1: ConstructorParameters<typeof RadialGradient>[3];
                y1: ConstructorParameters<typeof RadialGradient>[4];
                r1: ConstructorParameters<typeof RadialGradient>[5];
            } & GuiProps,
            RadialGradient
        >,
        any
    >;
    grid: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Grid> & Clonable,
            {
                name: ConstructorParameters<typeof Grid>[0];
            } & GuiProps,
            Grid
        >,
        any
    >;
    image2D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Image> & Clonable,
            {
                name: ConstructorParameters<typeof Image>[0];
                url: ConstructorParameters<typeof Image>[1];
            } & GuiProps,
            Image
        >,
        any
    >;
    inputText: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InputText> & Clonable,
            {
                name: ConstructorParameters<typeof InputText>[0];
                text: ConstructorParameters<typeof InputText>[1];
            } & GuiProps,
            InputText
        >,
        any
    >;
    inputTextArea: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<InputTextArea> & Clonable,
            {
                name: ConstructorParameters<typeof InputTextArea>[0];
                text: ConstructorParameters<typeof InputTextArea>[1];
            } & GuiProps,
            InputTextArea
        >,
        any
    >;
    line: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Line> & Clonable,
            {
                name: ConstructorParameters<typeof Line>[0];
            } & GuiProps,
            Line
        >,
        any
    >;
    multiLine: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiLine> & Clonable,
            {
                name: ConstructorParameters<typeof MultiLine>[0];
            } & GuiProps,
            MultiLine
        >,
        any
    >;
    radioButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<RadioButton> & Clonable,
            {
                name: ConstructorParameters<typeof RadioButton>[0];
            } & GuiProps,
            RadioButton
        >,
        any
    >;
    rectangle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Rectangle> & Clonable,
            {
                name: ConstructorParameters<typeof Rectangle>[0];
            } & GuiProps,
            Rectangle
        >,
        any
    >;
    scrollViewer: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScrollViewer> & Clonable,
            {
                name: ConstructorParameters<typeof ScrollViewer>[0];
                isImageBased: ConstructorParameters<typeof ScrollViewer>[1];
            } & GuiProps,
            ScrollViewer
        >,
        any
    >;
    _ScrollViewerWindow: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<_ScrollViewerWindow> & Clonable,
            {
                name: ConstructorParameters<typeof _ScrollViewerWindow>[0];
            } & GuiProps,
            _ScrollViewerWindow
        >,
        any
    >;
    radioGroup: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<RadioGroup>, {} & GuiProps, RadioGroup>, any>;
    selectionPanel: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SelectionPanel> & Clonable,
            {
                name: ConstructorParameters<typeof SelectionPanel>[0];
                groups: ConstructorParameters<typeof SelectionPanel>[1];
            } & GuiProps,
            SelectionPanel
        >,
        any
    >;
    selectorGroup: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SelectorGroup>,
            {
                name: ConstructorParameters<typeof SelectorGroup>[0];
            } & GuiProps,
            SelectorGroup
        >,
        any
    >;
    baseSlider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<BaseSlider> & Clonable,
            {
                name: ConstructorParameters<typeof BaseSlider>[0];
            } & GuiProps,
            BaseSlider
        >,
        any
    >;
    imageBasedSlider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageBasedSlider> & Clonable,
            {
                name: ConstructorParameters<typeof ImageBasedSlider>[0];
            } & GuiProps,
            ImageBasedSlider
        >,
        any
    >;
    imageScrollBar: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ImageScrollBar> & Clonable,
            {
                name: ConstructorParameters<typeof ImageScrollBar>[0];
            } & GuiProps,
            ImageScrollBar
        >,
        any
    >;
    scrollBar: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ScrollBar> & Clonable,
            {
                name: ConstructorParameters<typeof ScrollBar>[0];
            } & GuiProps,
            ScrollBar
        >,
        any
    >;
    slider: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Slider> & Clonable,
            {
                name: ConstructorParameters<typeof Slider>[0];
            } & GuiProps,
            Slider
        >,
        any
    >;
    stackPanel: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StackPanel> & Clonable,
            {
                name: ConstructorParameters<typeof StackPanel>[0];
            } & GuiProps,
            StackPanel
        >,
        any
    >;
    textBlock: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TextBlock> & Clonable,
            {
                name: ConstructorParameters<typeof TextBlock>[0];
                text: ConstructorParameters<typeof TextBlock>[1];
            } & GuiProps,
            TextBlock
        >,
        any
    >;
    toggleButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ToggleButton> & Clonable,
            {
                name: ConstructorParameters<typeof ToggleButton>[0];
                group: ConstructorParameters<typeof ToggleButton>[1];
            } & GuiProps,
            ToggleButton
        >,
        any
    >;
    virtualKeyboard: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<VirtualKeyboard> & Clonable, {} & GuiProps, VirtualKeyboard>, any>;
    matrix2D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Matrix2D>,
            {
                m00: ConstructorParameters<typeof Matrix2D>[0];
                m01: ConstructorParameters<typeof Matrix2D>[1];
                m10: ConstructorParameters<typeof Matrix2D>[2];
                m11: ConstructorParameters<typeof Matrix2D>[3];
                m20: ConstructorParameters<typeof Matrix2D>[4];
                m21: ConstructorParameters<typeof Matrix2D>[5];
            } & GuiProps,
            Matrix2D
        >,
        any
    >;
    vector2WithInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Vector2WithInfo> & Clonable,
            {
                source: ConstructorParameters<typeof Vector2WithInfo>[0];
                buttonIndex: ConstructorParameters<typeof Vector2WithInfo>[1];
            } & GuiProps,
            Vector2WithInfo
        >,
        any
    >;
    measure: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Measure>,
            {
                left: ConstructorParameters<typeof Measure>[0];
                top: ConstructorParameters<typeof Measure>[1];
                width: ConstructorParameters<typeof Measure>[2];
                height: ConstructorParameters<typeof Measure>[3];
            } & GuiProps,
            Measure
        >,
        any
    >;
    multiLinePoint: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MultiLinePoint>,
            {
                multiLine: ConstructorParameters<typeof MultiLinePoint>[0];
            } & GuiProps,
            MultiLinePoint
        >,
        any
    >;
    style: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Style>,
            {
                host: ConstructorParameters<typeof Style>[0];
            } & GuiProps,
            Style
        >,
        any
    >;
    valueAndUnit: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<ValueAndUnit>,
            {
                value: ConstructorParameters<typeof ValueAndUnit>[0];
                unit: ConstructorParameters<typeof ValueAndUnit>[1];
                negativeValueAllowed: ConstructorParameters<typeof ValueAndUnit>[2];
            } & GuiProps,
            ValueAndUnit
        >,
        any
    >;
    xmlLoader: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<XmlLoader>,
            {
                parentClass: ConstructorParameters<typeof XmlLoader>[0];
            } & GuiProps,
            XmlLoader
        >,
        any
    >;
    defaultBehavior: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<DefaultBehavior>, {} & GuiProps, DefaultBehavior>, any>;
    touchHolographicButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchHolographicButton>,
            {
                name: ConstructorParameters<typeof TouchHolographicButton>[0];
                shareMaterials: ConstructorParameters<typeof TouchHolographicButton>[1];
            } & GuiProps,
            TouchHolographicButton
        >,
        any
    >;
    abstractButton3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<AbstractButton3D>,
            {
                name: ConstructorParameters<typeof AbstractButton3D>[0];
            } & GuiProps,
            AbstractButton3D
        >,
        any
    >;
    button3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Button3D>,
            {
                name: ConstructorParameters<typeof Button3D>[0];
                options: ConstructorParameters<typeof Button3D>[1];
            } & GuiProps,
            Button3D
        >,
        any
    >;
    container3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Container3D>,
            {
                name: ConstructorParameters<typeof Container3D>[0];
            } & GuiProps,
            Container3D
        >,
        any
    >;
    contentDisplay3D: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ContentDisplay3D>, {} & GuiProps, ContentDisplay3D>, any>;
    control3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Control3D>,
            {
                name: ConstructorParameters<typeof Control3D>[0];
            } & GuiProps,
            Control3D
        >,
        any
    >;
    cylinderPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<CylinderPanel>, {} & GuiProps, CylinderPanel>, any>;
    handMenu: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HandMenu>,
            {
                xr: ConstructorParameters<typeof HandMenu>[0];
                name: ConstructorParameters<typeof HandMenu>[1];
            } & GuiProps,
            HandMenu
        >,
        any
    >;
    holographicBackplate: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HolographicBackplate>,
            {
                name: ConstructorParameters<typeof HolographicBackplate>[0];
                _shareMaterials: ConstructorParameters<typeof HolographicBackplate>[1];
            } & GuiProps,
            HolographicBackplate
        >,
        any
    >;
    holographicButton: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HolographicButton>,
            {
                name: ConstructorParameters<typeof HolographicButton>[0];
                shareMaterials: ConstructorParameters<typeof HolographicButton>[1];
            } & GuiProps,
            HolographicButton
        >,
        any
    >;
    holographicSlate: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HolographicSlate>,
            {
                name: ConstructorParameters<typeof HolographicSlate>[0];
            } & GuiProps,
            HolographicSlate
        >,
        any
    >;
    meshButton3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MeshButton3D>,
            {
                mesh: ConstructorParameters<typeof MeshButton3D>[0];
                name: ConstructorParameters<typeof MeshButton3D>[1];
            } & GuiProps,
            MeshButton3D
        >,
        any
    >;
    nearMenu: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<NearMenu>,
            {
                name: ConstructorParameters<typeof NearMenu>[0];
            } & GuiProps,
            NearMenu
        >,
        any
    >;
    scatterPanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<ScatterPanel>, {} & GuiProps, ScatterPanel>, any>;
    slider3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Slider3D>,
            {
                name: ConstructorParameters<typeof Slider3D>[0];
                sliderBackplateVisible: ConstructorParameters<typeof Slider3D>[1];
            } & GuiProps,
            Slider3D
        >,
        any
    >;
    spherePanel: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<SpherePanel>, {} & GuiProps, SpherePanel>, any>;
    stackPanel3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<StackPanel3D>,
            {
                isVertical: ConstructorParameters<typeof StackPanel3D>[0];
            } & GuiProps,
            StackPanel3D
        >,
        any
    >;
    touchButton3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchButton3D>,
            {
                name: ConstructorParameters<typeof TouchButton3D>[0];
                collisionMesh: ConstructorParameters<typeof TouchButton3D>[1];
            } & GuiProps,
            TouchButton3D
        >,
        any
    >;
    touchHolographicMenu: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchHolographicMenu>,
            {
                name: ConstructorParameters<typeof TouchHolographicMenu>[0];
            } & GuiProps,
            TouchHolographicMenu
        >,
        any
    >;
    touchMeshButton3D: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<TouchMeshButton3D>,
            {
                mesh: ConstructorParameters<typeof TouchMeshButton3D>[0];
                name: ConstructorParameters<typeof TouchMeshButton3D>[1];
            } & GuiProps,
            TouchMeshButton3D
        >,
        any
    >;
    volumeBasedPanel: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<VolumeBasedPanel>,
            {
                name: ConstructorParameters<typeof VolumeBasedPanel>[0];
            } & GuiProps,
            VolumeBasedPanel
        >,
        any
    >;
    gizmoHandle: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GizmoHandle>,
            {
                gizmo: ConstructorParameters<typeof GizmoHandle>[0];
                scene: ConstructorParameters<typeof GizmoHandle>[1];
            } & GuiProps,
            GizmoHandle
        >,
        any
    >;
    slateGizmo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<SlateGizmo>,
            {
                utilityLayer: ConstructorParameters<typeof SlateGizmo>[0];
            } & GuiProps,
            SlateGizmo
        >,
        any
    >;
    gUI3DManager: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<GUI3DManager>,
            {
                scene: ConstructorParameters<typeof GUI3DManager>[0];
            } & GuiProps,
            GUI3DManager
        >,
        any
    >;
    fluentMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluentMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof FluentMaterial>[0];
                scene: ConstructorParameters<typeof FluentMaterial>[1];
            } & GuiProps &
                MaterialProps,
            FluentMaterial
        >,
        any
    >;
    fluentMaterialDefines: React.DetailedHTMLProps<BabylonProps<ExcludeReadonlyAndPrivate<FluentMaterialDefines>, {} & GuiProps, FluentMaterialDefines>, any>;
    fluentBackplateMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluentBackplateMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof FluentBackplateMaterial>[0];
                scene: ConstructorParameters<typeof FluentBackplateMaterial>[1];
            } & GuiProps &
                MaterialProps,
            FluentBackplateMaterial
        >,
        any
    >;
    fluentButtonMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<FluentButtonMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof FluentButtonMaterial>[0];
                scene: ConstructorParameters<typeof FluentButtonMaterial>[1];
            } & GuiProps &
                MaterialProps,
            FluentButtonMaterial
        >,
        any
    >;
    handleMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<HandleMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof HandleMaterial>[0];
                scene: ConstructorParameters<typeof HandleMaterial>[1];
            } & GuiProps &
                MaterialProps,
            HandleMaterial
        >,
        any
    >;
    mRDLBackglowMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLBackglowMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLBackglowMaterial>[0];
                scene: ConstructorParameters<typeof MRDLBackglowMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLBackglowMaterial
        >,
        any
    >;
    mRDLBackplateMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLBackplateMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLBackplateMaterial>[0];
                scene: ConstructorParameters<typeof MRDLBackplateMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLBackplateMaterial
        >,
        any
    >;
    mRDLFrontplateMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLFrontplateMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLFrontplateMaterial>[0];
                scene: ConstructorParameters<typeof MRDLFrontplateMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLFrontplateMaterial
        >,
        any
    >;
    mRDLInnerquadMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLInnerquadMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLInnerquadMaterial>[0];
                scene: ConstructorParameters<typeof MRDLInnerquadMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLInnerquadMaterial
        >,
        any
    >;
    mRDLSliderBarMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLSliderBarMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLSliderBarMaterial>[0];
                scene: ConstructorParameters<typeof MRDLSliderBarMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLSliderBarMaterial
        >,
        any
    >;
    mRDLSliderThumbMaterial: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<MRDLSliderThumbMaterial> & Clonable,
            {
                name: ConstructorParameters<typeof MRDLSliderThumbMaterial>[0];
                scene: ConstructorParameters<typeof MRDLSliderThumbMaterial>[1];
            } & GuiProps &
                MaterialProps,
            MRDLSliderThumbMaterial
        >,
        any
    >;
    vector3WithInfo: React.DetailedHTMLProps<
        BabylonProps<
            ExcludeReadonlyAndPrivate<Vector3WithInfo> & Clonable,
            {
                source: ConstructorParameters<typeof Vector3WithInfo>[0];
                buttonIndex: ConstructorParameters<typeof Vector3WithInfo>[1];
            } & GuiProps,
            Vector3WithInfo
        >,
        any
    >;
}
