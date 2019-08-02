/* eslint-disable no-console */

const handlebarsVersions = require("./lib/handlebars-versions");

module.exports = {
  storeHandlebarsVersionAtVuePrototype
};

function storeHandlebarsVersionAtVuePrototype() {
  return {
    name: "storeHandlebarsVersionAtVuePrototype",
    async enhanceAppFiles() {
      const versions = await handlebarsVersions.retrieveVersions();
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
