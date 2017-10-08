import loadCSS from './loadCSS'
const FontFaceObserver = require('fontfaceobserver')
loadCSS('https://fonts.googleapis.com/css?family=Fira+Mono')

// When the fonts are loaded append class to the html
const roboto = new FontFaceObserver('Fira Mono')
roboto.load().then(() => {
  document.documentElement.classList.add('wf-active')
})
