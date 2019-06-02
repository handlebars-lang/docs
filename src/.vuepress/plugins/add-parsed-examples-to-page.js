const Handlebars = require("handlebars");
const { prettifyJson } = require("./lib/prettify-json");

module.exports = function prerenderExampleCode(options, ctx) {
  return {
    name: "prerender-example-code",
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      const example = frontmatter.example;
      if (example != null) {
        frontmatter.parsedExample = parseExampleWithErrorHandling(example, _filePath);
      }
    }
  };
};

function parseExampleWithErrorHandling(example, filepath) {
  try {
    return parseExample(example, filepath);
  } catch (error) {
    console.error("Error while running handlebars for example page " + filepath, error.stack);
    return error.message;
  }
}

function parseExample(example) {
  const normalizedExample = normalizeExample(example);
  const output = runHandlebars(normalizedExample);
  return prepareResultForRendering(normalizedExample, output);
}

function normalizeExample(example) {
  return {
    ...example,
    partials: example.partials || {}
  };
}

function runHandlebars(example) {
  const handlebars = Handlebars.create();
  handlebars.registerPartial(example.partials);
  const template = handlebars.compile(example.template);
  return template(example.input);
}

function prepareResultForRendering(example, output) {
  return {
    template: example.template,
    partials: partialsAsNameContentArray(example),
    input: prettifyJson(example.input),
    output
  };
}

function partialsAsNameContentArray(example) {
  return Object.keys(example.partials).map(partialName => {
    return {
      name: partialName,
      content: example.partials[partialName]
    };
  });
}
