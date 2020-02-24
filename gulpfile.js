const gulp = require('gulp')

const loadTask = fileName => {
  return require(`./tools/gulp-tasks/${fileName}`)(gulp)
}

gulp.task('eslint', loadTask('eslint'))
gulp.task('lint', gulp.series(['eslint']))
