// Text Transformers functions

// Text transform to UpperCase
export function toUpperCase (text) {
  return text.toUpperCase()
}

// Text transform to LowerCase
export function toLowerCase (text) {
  return text.toLowerCase()
}

// Text transform to CamelCase
export function toCamelCase (text) {
  return text
    .split(' ')
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

// Text transform to PascalCase
export function toPascalCase (text) {
  return text
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

// Text transform to SnakeCase
export function toSnakeCase (text) {
  return text
    .trim()
    .split(' ')
    .map((word, index) => {
      return word.toLowerCase()
    })
    .join('_')
}

// Text transform to KebabCase
export function toKebabCase (text) {
  return text
    .trim()
    .split(' ')
    .map(word => {
      return word.toLowerCase()
    })
    .join('-')
}

// Text transform to Trimed
export function toTrimmed (text) {
  return text.replace(/ +/g, '')
}
