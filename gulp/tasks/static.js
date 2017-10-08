const gulp = require('gulp')
const config = require('../config')
const del = require('del')

gulp.task('clean', () =>
  del([config.directories.dist.base])
)

gulp.task('clean:production', () =>
  del([
    config.directories.dist.styles,
    config.directories.dist.scripts
  ])
)

gulp.task('images', () =>
  gulp.src(config.directories.src.images + '/**/*')
    .pipe(gulp.dest(config.directories.dist.images))
)
