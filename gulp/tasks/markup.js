const gulp = require('gulp')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const production = config.production
const fs = require('fs')

// Performance my dude
const {cwd} = require('process')
const BlurryPug = require('lqip-pug')
const blurry = new BlurryPug({
  baseDir: cwd() + '/' + config.directories.src.images,
  compiledPath: 'assets/images'
})

gulp.task('markup', () =>
  gulp.src(config.directories.src.markup + '/*.pug')
    .pipe($.pug({
      baseDir: config.directories.src.markup,
      locals: {
        icon: name => fs.readFileSync(`./src/assets/icons/${name}.svg`),
        production,
        blur: name => blurry.blur(name)
      }
    })).on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.markup))
)

gulp.task('critical', () =>
  gulp.src(config.directories.dist.markup + '/*.html')
    .pipe($.htmlReplace({
      cssInline: {
        src: gulp.src(config.directories.dist.styles + '/main.min.css'),
        tpl: '<style>%s</style>'
      },
      jsInline: {
        src: gulp.src(config.directories.dist.scripts + '/main.min.js'),
        tpl: '<script>%s</script>'
      }
    }))
    .pipe(gulp.dest(config.directories.dist.markup))
)
