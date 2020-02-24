const esLint = require('gulp-eslint')
const config = require('../../.eslintrc.json')

const checkLint = gulp => {
  const srcFiles = [
    'index.ts',
    // api
    'packages/api/**/*.ts',

    // client
    'packages/client/**/*.tsx',
    'packages/client/**/*.ts',

    '!./node_modules/**',
    '!./packages/**/node_modules/**'
  ]

  return gulp
    .src(srcFiles, { base: '../..' })
    .pipe(esLint(config))
    .pipe(esLint.format())
    .pipe(esLint.failAfterError())
}

module.exports = gulp => _ => {
  return checkLint(gulp)
}
