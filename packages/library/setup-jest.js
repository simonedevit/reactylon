import { jest } from '@jest/globals';

// Mock react-dom/server because Jest is executed in jsdom test environment
jest.mock('react-dom/server', () => {
    return {
        renderToStaticMarkup: jest.fn(),
    };
});

// Suppress warning React component capital letter (Babylon.js elements are JSXIntrinsicElements)
const originalError = console.error.bind(console.error);

beforeAll(() => {
    console.error = (msg, ...rest) => !msg.toString().includes('If you meant to render a React component, start its name with an uppercase letter.') && originalError(msg, ...rest);
});

afterAll(() => {
    console.error = originalError;
});
