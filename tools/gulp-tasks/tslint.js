const tslint = require('tslint')
const gulpTslint = require('gulp-tslint')
const path = require('path')

function checkLint(gulp) {
  const program = tslint.Linter.createProgram(
    path.join(__dirname, '../../tsconfig.json')
  )

  const srcFiles = [
    'index.ts',
    // api
    'packages/api/**/*.ts',

    // client
    'packages/client/**/*.tsx',
    'packages/client/**/*.ts'
  ]

  return gulp
    .src(srcFiles, { base: '../..' })
    .pipe(
      gulpTslint({
        configuration: path.resolve(__dirname, '../../tslint.json'),
        program,
        formatter: 'verbose'
      })
    )
    .pipe(gulpTslint.report())
}

module.exports = gulp => _ => {
  return checkLint(gulp)
}
