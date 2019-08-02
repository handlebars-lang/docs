/* eslint-disable no-console */

const Handlebars = require("handlebars");
const { prettifyJson } = require("./lib/prettify-json");

module.exports = {
  addParsedExampleToPage
};

function addParsedExampleToPage() {
  return {
    name: "prerender-example-code",
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      if (frontmatter.example == null) {
        return;
      }
      addParsedExampleOrErrorToFrontMatter(frontmatter, _filePath);
    }
  };
}

function addParsedExampleOrErrorToFrontMatter(frontmatter, filePath) {
  try {
    frontmatter.parsedExample = parseExample(frontmatter.example);
  } catch (error) {
    frontmatter.errorWhileParsingExample = {
      message: error.message,
      stack: error.stack
    };
    console.error("Error while running handlebars for example page " + filePath, error.stack);
  }
}

function parseExample(example) {
  const normalizedExample = normalizeExample(example);
  try {
    const output = runHandlebars(normalizedExample);
    return prepareResultForRendering(normalizedExample, output);
  } catch (error) {
    return prepareErrorResult(normalizedExample, error);
  }
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

function prepareErrorResult(example, error) {
  return {
    template: example.template,
    partials: partialsAsNameContentArray(example),
    preparationScript: example.preparationScript,
    input: prettifyJson(example.input),
    error: error
  };
}
