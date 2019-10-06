const gulp = require('gulp')

const loadTask = fileName => {
  return require(`./tools/gulp-tasks/${fileName}`)(gulp)
}

gulp.task('tslint', loadTask('tslint'))
gulp.task('lint', gulp.series(['tslint']))
