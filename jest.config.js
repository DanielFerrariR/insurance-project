module.exports = {
  ...require('./spec/jest/config/jestCommon'),
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
  projects: ['./spec/jest/config/jestClient.js']
}
