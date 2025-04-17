import { jest } from '@jest/globals';
import * as BabylonCore from '@babylonjs/core';
import { BabylonPackages, lowercaseFirstLetter } from '@dvmstudios/reactylon-common'
import { register } from './src/core/inventory';

// Mock react-dom/server because Jest is executed in jsdom test environment
jest.mock('react-dom/server', () => {
    return {
        renderToStaticMarkup: jest.fn(),
    };
});

// Suppress warning React component capital letter (Babylon.js elements are JSXIntrinsicElements)
const originalError = console.error.bind(console.error);

beforeAll(() => {
    // Populate inventory with all Babylon.js core elements
    const coreElements = Object.entries(BabylonCore).reduce((obj, [key, value]) => {
        const type = key.replace('Create', ''); // MeshBuilder case
        obj[lowercaseFirstLetter(type)] = [value, BabylonPackages.CORE];
        return obj;
    }, {});

    register(coreElements);
    console.error = (msg, ...rest) => !msg.toString().includes('If you meant to render a React component, start its name with an uppercase letter.') && originalError(msg, ...rest);
});

afterAll(() => {
    console.error = originalError;
});
