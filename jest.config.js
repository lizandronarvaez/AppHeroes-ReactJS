export default {
  // CUALQUIERA DE LOS DOS SIRVE
  testEnvironment: 'jsdom',
  // testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    'node_modules/(?!query-string/.*)'
  ],
}