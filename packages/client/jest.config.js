module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.test.json',
      diagnostics: false
    }
  },
  testMatch: ['<rootDir>/components/**/*test.tsx'],
  preset: 'ts-jest',
  testEnvironment: 'node'
}
