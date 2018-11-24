const getSlug = text =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

const getLastStr = (str, separator = '/') =>
  str.substring(str.lastIndexOf(separator) + 1);

export { getSlug, getLastStr };
