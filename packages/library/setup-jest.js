import { jest } from '@jest/globals';
import * as BabylonCore from '@babylonjs/core';
import * as BabylonGui from '@babylonjs/gui';
import { BabylonPackages, lowercaseFirstLetter } from '@dvmstudios/reactylon-common'
import { register } from './src/core/inventory';

// Mock react-dom/server because Jest is executed in jsdom test environment
jest.mock('react-dom/server', () => {
    return {
        renderToStaticMarkup: jest.fn(),
    };
});

// Mock HTMLCanvasElement and its getContext method
HTMLCanvasElement.prototype.getContext = jest.fn(() => {
    return {
        fillRect: jest.fn(),
        clearRect: jest.fn(),
        getImageData: jest.fn(),
        putImageData: jest.fn(),
        createImageData: jest.fn(),
        setTransform: jest.fn(),
        drawImage: jest.fn(),
        save: jest.fn(),
        fillText: jest.fn(),
        restore: jest.fn(),
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        closePath: jest.fn(),
        stroke: jest.fn(),
        translate: jest.fn(),
        scale: jest.fn(),
        rotate: jest.fn(),
        arc: jest.fn(),
        fill: jest.fn(),
        measureText: jest.fn(() => ({ width: 0 })),
        transform: jest.fn(),
        rect: jest.fn(),
        clip: jest.fn(),
    }
});

// Suppress warning React component capital letter (Babylon.js elements are JSXIntrinsicElements)
const originalError = console.error.bind(console.error);

beforeAll(() => {
    // Populate inventory with all Babylon.js core elements
    const coreElements = Object.entries(BabylonCore).reduce((obj, [key, value]) => {
        const type = lowercaseFirstLetter(key.replace('Create', '')); // MeshBuilder case
        if (!obj[type]) {
            obj[type] = [value, BabylonPackages.CORE];
        }
        return obj;
    }, {});

    // Populate inventory with all Babylon.js GUI elements
    const guiElements = Object.entries(BabylonGui).reduce((obj, [key, value]) => {
        const type = lowercaseFirstLetter(key);
        if (!obj[type]) {
            obj[type] = [value, BabylonPackages.GUI];
        }
        return obj;
    }, {});

    register(coreElements);
    register(guiElements);

    console.error = (msg, ...rest) => !msg.toString().includes('If you meant to render a React component, start its name with an uppercase letter.') && originalError(msg, ...rest);
});

afterAll(() => {
    console.error = originalError;
});
