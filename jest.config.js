module.exports = {
    "setupTestFrameworkScriptFile": "<rootDir>/enzymeConfig.js",
    "setupFiles": [
      "<rootDir>/enzymeConfig.js"
    ],
    "snapshotSerializers": ["jest-emotion/serializer"],
    "moduleNameMapper": {
      "^.+\\.svg$": "<rootDir>/src/__mocks__/svgMock.js"},
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/",
      "/lib/"
    ],
  }