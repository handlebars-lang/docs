const axios = require("axios");

module.exports = function storeHandlebarsVersionAtVuePrototype(options, ctx) {
  return {
    name: "storeHandlebarsVersionAtVuePrototype",
    async enhanceAppFiles() {
      const version = await retrieveHandlebarsVersionFromNpmjs();
      return {
        name: "storeHandlebarsVersionAtVuePrototype",
        content: `export default ({ Vue }) => { 
                        Vue.prototype.$handlebarsVersion = ${version}
                    }`
      };
    }
  };
};

async function retrieveHandlebarsVersionFromNpmjs() {
  const metadata = await retrieveHandlebarsMetadataFromNpmjs();
  return JSON.stringify(metadata["dist-tags"].latest);
}

async function retrieveHandlebarsMetadataFromNpmjs() {
  debugger;
  const response = await axios.get("http://registry.npmjs.org/handlebars/");
  return response.data;
}
