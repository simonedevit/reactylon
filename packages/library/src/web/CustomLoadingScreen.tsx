import { ILoadingScreen } from '@babylonjs/core';
import { createRoot } from 'react-dom/client';

class CustomLoadingScreen implements ILoadingScreen {
    //optional, but needed due to interface definitions
    public loadingUIBackgroundColor: string;
    public loadingUIText: string;
    private _loadingDiv: HTMLDivElement;
    private _renderingCanvas: HTMLCanvasElement;

    /**
     * Creates a new loading screen rendering the React element in input
     * @param renderingCanvas defines the canvas used to render the scene
     */
    constructor(renderingCanvas: HTMLCanvasElement, Loader: React.FC) {
        this._resizeLoadingUI = this._resizeLoadingUI.bind(this);
        this._renderingCanvas = renderingCanvas;
        /* if (this._loadingDiv) {
            // Do not add a loading screen if there is already one
            return;
        } */
        this._loadingDiv = document.createElement('div');
        this._loadingDiv.id = 'loader';
        this._loadingDiv.style.display = 'none';
        document.body.appendChild(this._loadingDiv);
        const loadingDiv = createRoot(this._loadingDiv);
        loadingDiv.render(<Loader />);
    }

    // Resize
    _resizeLoadingUI() {
        const canvasRect = this._renderingCanvas.getBoundingClientRect();
        const canvasPositioning = window.getComputedStyle(this._renderingCanvas).position;
        if (!this._loadingDiv) {
            return;
        }
        this._loadingDiv.style.position = canvasPositioning === 'fixed' ? 'fixed' : 'absolute';
        const scrollLeft = document.documentElement.scrollLeft;
        const scrollTop = document.documentElement.scrollTop;
        this._loadingDiv.style.left = canvasRect.left + scrollLeft + 'px';
        this._loadingDiv.style.top = canvasRect.top + scrollTop + 'px';
        this._loadingDiv.style.width = canvasRect.width + 'px';
        this._loadingDiv.style.height = canvasRect.height + 'px';
    }

    /**
     * Function called to display the loading screen
     */
    displayLoadingUI() {
        this._resizeLoadingUI();
        window.addEventListener('resize', this._resizeLoadingUI);
        this._loadingDiv.style.display = 'block';
    }

    /**
     * Function called to hide the loading screen
     */
    hideLoadingUI() {
        window.removeEventListener('resize', this._resizeLoadingUI);
        this._loadingDiv.style.display = 'none';
    }
}

export default CustomLoadingScreen;
