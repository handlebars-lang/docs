/* eslint-env node */

import cp from "child_process";

export function updateHandlebarsCliHelp() {
  let handlebarsHelp = getHandlebarsHelpFromCli();

  return {
    name: "update the 'handlebars --help' output.",
    extendMarkdown(md) {
      md.block.ruler.before("fence", "handlebars_help_output", function (state, startLine, endLine, silent) {
        const pos = state.bMarks[startLine] + state.tShift[startLine];
        const max = state.eMarks[startLine];
        if (state.src.slice(pos, max) !== "!HANDLEBARS_HELP!") {
          return false;
        }

        if (silent) {
          return true;
        }

        state.line = startLine + 1;

        // inspired by the snippet-parser https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/markdown/lib/snippet.js
        const token = state.push("fence", "code", 0);
        token.info = "";
        token.content = handlebarsHelp;
        token.markup = "```";
        token.map = [startLine, startLine + 1];
        return true;
      });
    },
  };
}

function getHandlebarsHelpFromCli() {
  const handlebarsCli = require.resolve("handlebars/bin/handlebars");
  const nodeExecutable = process.argv[0];
  const { stdout } = cp.spawnSync(nodeExecutable, [handlebarsCli, "--help"], {
    argv0: "handlebars",
    stdio: ["pipe", "pipe", "pipe"],
    encoding: "utf-8",
  });
  return stdout;
}
