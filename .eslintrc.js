module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:jest/recommended", "prettier", "prettier/vue"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module"
  }
};
