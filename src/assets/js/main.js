import './general'
import loopQuery from './lib/loopQuery'

const images = document.querySelectorAll('img')

loopQuery(images, (index, image) => {
  const src = image.getAttribute('data-src')
  setTimeout(() => {
    image.src = src
  }, Math.floor(Math.random() * (1000 + 1) + 500))
})
