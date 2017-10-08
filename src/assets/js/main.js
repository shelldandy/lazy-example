import './general'
import loopQuery from './lib/loopQuery'

const images = document.querySelectorAll('img')

loopQuery(images, (index, image) => {
  const src = image.getAttribute('data-src')
  image.src = src
})
