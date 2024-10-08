/**
 * @type {import('prettier').Options}
 */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: true,
  importOrder: ["^~(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  arrowParens: "avoid"
};
