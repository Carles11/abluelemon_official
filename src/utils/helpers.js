const getSlug = text => text
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')

const getLastStr = (str, separator = '/') => str.substring(str.lastIndexOf(separator) + 1)

const truncateStr = (str, limit = 75) => {
  const total = (str.split())[0].length

  let result = ''
  if (total > limit) {
    result = `${str.substring(0, limit)}...`
  } else {
    result = str
  }

  return result
}

export { getSlug, getLastStr, truncateStr }
