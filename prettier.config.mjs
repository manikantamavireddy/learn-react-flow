// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  useTabs: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
}

export default config
