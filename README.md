
# 📦 Char-Roopantar

A simple and lightweight JavaScript utility library to transform text into different formats like `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `UPPERCASE`, `lowercase`, and more.



## ✨ Features

- ✅ Convert text to `camelCase`
- ✅ Convert text to `PascalCase`
- ✅ Convert text to `snake_case`
- ✅ Convert text to `kebab-case`
- ✅ Convert text to `UPPERCASE` and `lowercase`
- ✅ Remove extra spaces (trim)
- ✅ Tiny, fast, and dependency-free

---

## 📦 Installation

```bash
npm install char-roopantar
````

---

## 🚀 Usage

### In Node.js or React:

```js
import {
  toUpperCase,
  toLowerCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTrimmed
} from 'char-roopantar';

console.log(toCamelCase("hello world")); // helloWorld
console.log(toPascalCase("hello world")); // HelloWorld
console.log(toSnakeCase("hello world")); // hello_world
console.log(toKebabCase("hello world")); // hello-world
console.log(toUpperCase("hello world")); // HELLO WORLD
console.log(toLowerCase("HELLO WORLD")); // hello world
console.log(toTrimmed("hello     world")); // helloworld
```

---

## 🌐 CDN for Browser

You can use it directly in the browser using [esm.sh](https://esm.sh):

```html
<script type="module">
  import { toCamelCase } from 'https://esm.sh/char-roopantar';

  console.log(toCamelCase("hello world")); // helloWorld
</script>
```

---

## 📁 Available Methods

| Function         | Description                   |
| ---------------- | ----------------------------- |
| `toUpperCase()`  | Convert text to all UPPERCASE |
| `toLowerCase()`  | Convert text to all lowercase |
| `toCamelCase()`  | Convert text to camelCase     |
| `toPascalCase()` | Convert text to PascalCase    |
| `toSnakeCase()`  | Convert text to snake\_case   |
| `toKebabCase()`  | Convert text to kebab-case    |
| `toTrimmed()`    | Remove all spaces             |

---

## 🔧 Contribution

Pull requests and feedback are welcome!
If you find a bug or want to suggest a feature, feel free to open an issue.

---

## 🧑‍💻 Author

**Prashant Kumar**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).



