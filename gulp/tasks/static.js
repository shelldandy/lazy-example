const gulp = require('gulp')
const config = require('../config')
const del = require('del')

gulp.task('clean', () =>
  del([config.directories.dist.base])
)

gulp.task('clean:css', () =>
  del([config.directories.dist.styles])
)

gulp.task('images', () =>
  gulp.src(config.directories.src.images + '/**/*')
    .pipe(gulp.dest(config.directories.dist.images))
)
