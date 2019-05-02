const Handlebars = require("handlebars");
const { prettifyJson } = require("./lib/prettify-json");

module.exports = function prerenderExampleCode(options, ctx) {
  return {
    name: "prerender-example-code",
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      const example = frontmatter.example;
      if (example != null) {
        frontmatter.parsedExample = parseExample(example, _filePath);
      }
    }
  };
};

function parseExample(example, _filePath) {
  const output = runHandlebars(example, _filePath);
  return {
    template: example.template,
    partials: Object.keys(example.partials).map(partialName => {
      return {
        name: partialName,
        content: example.partials[partialName]
      };
    }),
    input: prettifyJson(example.input),
    output
  };
}

function runHandlebars(example, pageName) {
  const handlebars = Handlebars.create();
  handlebars.registerPartial(example.partials);
  const template = handlebars.compile(example.template);
  try {
    return template(example.input);
  } catch (error) {
    console.error("Error while running handlebars for example page " + pageName, error.stack);
    return error.message;
  }
}
