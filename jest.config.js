module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
  // moduleNameMapper: {
  //   '^styled-components':
  //     '<roorDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  // }
}
