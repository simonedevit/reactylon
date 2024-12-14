/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  moduleNameMapper: {
    '^@types$': '<rootDir>/src/types/types.ts',
    '^@props$': '<rootDir>/src/types/props.ts',
    '^@constants$': '<rootDir>/src/constants.ts',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      //tsconfig: './tsconfig.json',
      useESM: true
    }],
  },
};