/* eslint-disable no-console */

const Handlebars = require("handlebars");
const { prettifyJson } = require("./lib/prettify-json");

module.exports = function prerenderExampleCode() {
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
    return parseExample(example);
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
    partials: example.partials || {},
    preparationScript: example.preparationScript || ""
  };
}

function runHandlebars(example) {
  const handlebars = Handlebars.create();
  prepareHandlebarsRuntime(handlebars, example);
  const template = handlebars.compile(example.template);
  return template(example.input);
}

function prepareHandlebarsRuntime(handlebars, example) {
  registerPartials(handlebars, example);
  runPreparationScript(example, handlebars);
}

function runPreparationScript(example, handlebars) {
  const compiledPreparationScript = Function("Handlebars", example.preparationScript);
  compiledPreparationScript.call(undefined, handlebars);
}

function registerPartials(handlebars, example) {
  handlebars.registerPartial(example.partials);
}

function prepareResultForRendering(example, output) {
  return {
    template: example.template,
    partials: partialsAsNameContentArray(example),
    preparationScript: example.preparationScript,
    input: prettifyJson(example.input),
    output: output
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
