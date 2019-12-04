module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
  ],
}
