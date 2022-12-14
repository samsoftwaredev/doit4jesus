import type { Config } from '@jest/types';
import { defaults } from 'jest-config';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  silent: false,
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  forceExit: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['src/model/*'],
  setupFiles: ['dotenv/config'],
  // clearMocks: true,
};

export default config;
