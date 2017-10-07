'use strict'
// We use this to read flags in the command line
const argv = require('yargs').argv
const { env } = require('process')
// Add your conditions here 💅
const production = !!argv.prod || !!argv.production || env.NODE_ENV === 'production'

module.exports = {
  directories: {
    src: {
      base: 'src',
                  markup: 'src/pug',
            fonts: 'src/assets/fonts',
      icons: 'src/assets/icons',
      images: 'src/assets/images',
      scripts: 'src/assets/js',
      styles: 'src/assets/styles'
    },
    dist: {
      base: 'dist',
      markup: 'dist',
      fonts: 'dist/assets/fonts',
      icons: 'dist/assets/icons',
      images: 'dist/assets/images',
      scripts: 'dist/assets/js',
      styles: 'dist/assets/css',
    }
  },
  project: {
    cssMainFile: 'src/assets/styles/main.scss',
    cssVendorFile: 'src/assets/styles/vendor.scss',
    jsMainFile: 'src/assets/js/main.js',
    fontFiles: [
      'src/assets/fonts/**/*',
      
    ]
  },
  onError: error => {
    console.log(error.toString())
    this.emit('end')
  },
  production,
  // Stuff for PurifyCss
  purify: ['./dist/**/*.js', './dist/**/*.html'],
  deploy: {
    ftp: {
      user: '',
      password: '',
      host: '',
      port: '21',
      remotePath: './'
    }
  }
}
