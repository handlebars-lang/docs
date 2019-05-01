const {
  highlightHandlebars,
  highlightJson,
  highlightHtml
} = require("./lib/highlight-code");
const Handlebars = require("handlebars");

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
    template: {
      raw: example.template,
      html: highlightHandlebars(example.template)
    },
    partials: Object.keys(example.partials).map(partialName => {
      return {
        name: partialName,
        raw: example.partials[partialName],
        html: highlightHandlebars(example.partials[partialName])
      };
    }),
    input: {
      raw: example.input,
      html: highlightJson(JSON.stringify(example.input, 0, 2))
    },
    output: {
      raw: output,
      html: highlightHtml(output)
    }
  };
}

function runHandlebars(example, pageName) {
  const handlebars = Handlebars.create();
  handlebars.registerPartial(example.partials);
  const template = handlebars.compile(example.template);
  try {
    return template(example.input);
  } catch (error) {
    console.error(
      "Error while running handlebars for example page " + pageName,
      error.stack
    );
    return error.message;
  }
}
