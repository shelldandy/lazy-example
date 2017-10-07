const sharp = require('sharp')
const {cwd} = require('process')
const config = require('../config')
const deasync = require('deasync')

sharp.prototype.toBufferSync = function () {
  let done = false
  let data
  this.toBuffer((err, _data_) => {
    if (err) throw err
    data = _data_
    done = true
  })
  deasync.loopWhile(() => {
    return !done
  })
  return data
}

const blur = name => {
  const SUPPORTED_MIMES = {
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'png': 'image/png'
  }
  const toBase64 = (extension, data) => `data:${SUPPORTED_MIMES[extension]};base64,${data.toString('base64')}`
  const path = cwd() + '/' + config.directories.src.images + '/' + name
  const extension = path.split('.').pop().toLowerCase()
  if (typeof SUPPORTED_MIMES[extension] === 'undefined') {
    throw new Error('Unsupported image format')
  }
  const buffer = sharp(path).resize(16).toBufferSync()
  const presrc = toBase64(extension, buffer)
  const src = `assets/images/${name}`
  return `<img src="${presrc}" data-src="${src}" class="lazy" />`
}

module.exports = blur
