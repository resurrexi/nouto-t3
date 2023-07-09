/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
}

module.exports = config
