/**
 * Make a document.querySelectorAll loopable
 * @author Todd Motto
 * @tutorial https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack
 * @param {NodeList} elements
 * @param {Function} callback function that takes element and index
 * @param {this} scope what this refers to
 */
const loopQuery = (elements, callback, scope) => {
  for (let i = 0; i < elements.length; i++) {
    callback.call(scope, i, elements[i])
  }
}

export default loopQuery
