// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'sort-imports': 'error',
      "@angular-eslint/directive-selector": ["error", { type: "attribute", style: "camelCase" }],
      "@angular-eslint/component-selector": ["error", { type: "element", style: "kebab-case" }],
      'prettier/prettier': ['error', { parser: 'typescript' }]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      prettier
    ],
    rules: {
      'prettier/prettier': ['error', { parser: 'angular' }]
    },
  }
);
