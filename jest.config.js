module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: moduleNameMapper,
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/*.spec.(js|jsx|ts|tsx)',
    '**/tests/**/*.spec.(js|jsx|ts|tsx)',
    '**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**',
    '**/pages/**',
    '!**/node_modules/**'
  ],
  modulePathIgnorePatterns: [
    '__snapshots__'
  ],
  preset: '@vue/cli-plugin-unit-jest'
};
