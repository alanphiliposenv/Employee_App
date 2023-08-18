module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[t[j]sx?s': 'ts-jest',
    '^.+\\.css?s': '<rootDir>/transform.js'
  },
  testEnvironment: 'jsdom',
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.tsx?$'
};
