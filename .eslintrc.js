module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:jest/recommended", "prettier", "prettier/vue"],
  plugins: ["jest"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
  },
  env: {
    "jest/globals": false,
    jest: false,
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        "jest/globals": true,
        jest: true,
      },
      rules: {
        "jest/expect-expect": ["warn", { assertFunctionNames: ["expect", "expectErrorInExample", "assertYamlEquals"] }],
      },
    },
    {
      files: ["src/.vuepress/plugins/**/*.js"],
      env: {
        node: true,
      },
    },
    {
      files: [
        "src/usage-examples/precompilation/precompile-in-nodejs.js",
        "src/zh/usage-examples/precompilation/precompile-in-nodejs.js",
      ],
      env: {
        node: true,
      },
      rules: {
        "no-console": "off",
      },
    },
  ],
};
