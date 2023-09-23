import { retrieveHandlebarsVersions } from "./.vitepress/lib/handlebars-versions.js";
import { getHandlebarsCliHelp } from "./.vitepress/lib/handlebars-cli-help.js";

export default {
  async load() {
    return {
      versions: await retrieveHandlebarsVersions(),
      cliHelp: await getHandlebarsCliHelp(),
    };
  },
};
