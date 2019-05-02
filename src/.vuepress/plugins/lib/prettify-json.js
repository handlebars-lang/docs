const prettier = require("prettier");

module.exports = {
  prettifyJson
};

function prettifyJson(object, options = { width: 40 }) {
  return prettier.format(JSON.stringify(object), {
    parser: "json5",
    printWidth: options.width
  });
}
