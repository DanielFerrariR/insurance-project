const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../../..'),
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'mdx', 'md'],
  testMatch: ['<rootDir>/spec/jest/**/*.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|svg)$': 'jest-transform-stub',
    '^.+\\.(md)$': 'jest-raw-loader'
  },
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^spec(.*)$': '<rootDir>/spec$1'
  },
  setupFiles: ['<rootDir>/spec/jest/config/setEnvVars.js'],
  setupFilesAfterEnv: ['<rootDir>/spec/jest/config/setupEnv.js'],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
