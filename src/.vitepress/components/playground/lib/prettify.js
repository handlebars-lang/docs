import * as prettier from "prettier";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginESTree from "prettier/plugins/estree";

export async function prettify(object) {
  return prettier.format(JSON.stringify(object || null), {
    parser: "json5",
    plugins: [prettierPluginBabel, prettierPluginESTree],
    printWidth: 40,
  });
}
