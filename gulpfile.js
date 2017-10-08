const requireDir = require('require-dir')
const gulp = require('gulp')

// Add all the tasks and files, boom!
requireDir('gulp', {
  recurse: true
})

gulp.task('build', gulp.series(
  'clean',
  'images',
  'scripts',
  'fonts',
  'markup',
  'styles'
))

gulp.task('serve', gulp.parallel('browser-sync', 'watch'))
gulp.task('release', gulp.series('build', 'zip'))
gulp.task('default', gulp.series('build', 'serve'))
gulp.task('production', gulp.series('build', 'critical'))
gulp.task('deploy', gulp.series('production', 'ghPages'))
