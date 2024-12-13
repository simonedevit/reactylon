// suppress warning React component capital letter

const originalError = console.error.bind(console.error)

beforeAll(() => {
    console.error = (msg, ...rest) =>
        !msg.toString().includes('If you meant to render a React component, start its name with an uppercase letter.') && originalError(msg, ...rest);
})

afterAll(() => {
    console.error = originalError
})