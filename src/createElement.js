/**
 * createELement function
 * @param {* string} tag
 * @param {* string} label
 * @param {* string} styles
 * @param {* array} attrs
 * @returns HTMLElement
 */
const createElement = (tag, label = '', styles = '', attrs = []) => {
  const elem = document.createElement(tag)

  if (label) elem.innerText = String(label)

  if (styles) styles.split(' ').map(style => elem.classList.add(style))

  if (attrs.length) attrs.forEach(attr => elem[attr.key] = attr.value)

  return elem
}

export default createElement
