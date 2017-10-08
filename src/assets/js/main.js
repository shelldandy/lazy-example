import './general'
import loopQuery from './lib/loopQuery'

const images = document.querySelectorAll('img')

loopQuery(images, (index, image) => {
  const src = image.getAttribute('data-src')
  console.log(src)
  setTimeout(() => {
    image.src = src
  }, Math.floor(Math.random() * (2000 + 1) + 500))
})
