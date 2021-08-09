const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globalSetup: '<rootDir>/tests/globalSetup/index.ts',
  preset: 'ts-jest',

  testEnvironment: 'node',

  maxWorkers: '1',

  roots: [
    '<rootDir>',
  ],
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts',
    '<rootDir>/tests/**/*.test.ts',
    '<rootDir>/tests/*.spec.ts',
    '<rootDir>/__tests__/*.spec.ts',
    '<rootDir>/__tests__/*.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/tests/fixtures/',
    '\\\\node_modules\\\\',
    '/node_modules/',
  ],
  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
