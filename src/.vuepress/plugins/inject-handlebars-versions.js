/* eslint-disable no-console */
/* eslint-env node */

import { retrieveHandlebarsVersions } from "../lib/handlebars-versions";

export function storeHandlebarsVersionAtVuePrototype() {
  return {
    name: "storeHandlebarsVersionAtVuePrototype",
    async enhanceAppFiles() {
      const versions = await retrieveHandlebarsVersions();
      console.log("Injecting handlebars versions" + JSON.stringify(versions));
      return {
        name: "storeHandlebarsVersionAtVuePrototype",
        content: `export default ({ Vue }) => { 
                        Vue.prototype.$handlebarsVersions = ${JSON.stringify(versions)}
                    }`
      };
    }
  };
}
