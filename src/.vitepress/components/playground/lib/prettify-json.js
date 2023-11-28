import * as prettier from "prettier";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginESTree from "prettier/plugins/estree";

export async function prettifyJson(object, options = { width: 40 }) {
  return (
    object &&
    prettier.format(JSON.stringify(object), {
      parser: "json5",
      plugins: [prettierPluginBabel, prettierPluginESTree],
      printWidth: options.width,
    })
  );
}
