const gulp = require('gulp')
const config = require('../config')
const ghPages = require('gulp-gh-pages')

gulp.task('ghPages', () =>
  gulp.src(`${config.directories.dist.base}/**/*`)
  .pipe(ghPages())
)
