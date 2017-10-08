const FontFaceObserver = require('fontfaceobserver')
const link = document.createElement('link')
link.href = 'https://fonts.googleapis.com/css?family=Fira+Mono'
link.rel = 'stylesheet'
document.head.appendChild(link)
// When the fonts are loaded append class to the html
const roboto = new FontFaceObserver('Roboto')
roboto.load().then(() => {
  document.documentElement.classList.add('wf-active')
})
