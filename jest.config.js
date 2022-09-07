const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],

  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },

  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  globals: {
    "ts-jest": {
      "tsConfig": 'tsconfig.json'
    }
  },
}

module.exports = createJestConfig(customJestConfig)
