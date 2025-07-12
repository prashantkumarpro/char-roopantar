const {
  toUpperCase,
  toLowerCase,
  toCamelCase,
  toPascalCase
} = require('char-roopantar')

import {
  toSnakeCase,
  toKebabCase,
  toTrimmed
} from './transformers/transformers.mjs'

console.log(toUpperCase('this is only for test.'))
console.log(toPascalCase('this is only for test.'))
console.log(toTrimmed('this is only for test.'))
console.log(toKebabCase('this is only for test.'))
console.log(toSnakeCase('this is only for test.'))
console.log(toLowerCase('this is only for test.'))
console.log(toCamelCase('this is only for test.'))
console.log(toPascalCase('this is only for test.'))

