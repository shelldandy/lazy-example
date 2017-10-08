function loadCSS (href, before, media) {
  var ss = window.document.createElement('link')
  var ref = before || window.document.getElementsByTagName('script')[ 0 ]
  var sheets = window.document.styleSheets
  ss.rel = 'stylesheet'
  ss.href = href
  ss.media = 'only x'
  ref.parentNode.insertBefore(ss, ref)
  function toggleMedia () {
    var defined
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[ i ].href && sheets[ i ].href.indexOf(href) > -1) {
        defined = true
      }
    }
    if (defined) {
      ss.media = media || 'all'
    } else {
      setTimeout(toggleMedia)
    }
  }
  toggleMedia()
  return ss
}

export default loadCSS
