const FontFaceObserver = require('fontfaceobserver')
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css?family=Fira+Mono'
link.setAttribute('type', 'text/css')
link.setAttribute('async', 'async')
document.body.appendChild(link)
// When the fonts are loaded append class to the html
const roboto = new FontFaceObserver('Fira Mono')
roboto.load().then(() => {
  document.documentElement.classList.add('wf-active')
})
