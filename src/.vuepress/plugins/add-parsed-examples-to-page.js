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

      const output = runHandlebars(example, _filePath);

      if (example != null) {
        const parsedExample = {
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
        frontmatter.parsedExample = parsedExample;
      }
    }
  };
};

function runHandlebars(example, pageName) {
  try {
    const handlebars = Handlebars.create();
    handlebars.registerPartial(example.partials);
    const template = handlebars.compile(example.template);
    return template(example.input);
  } catch (error) {
    console.error(
      "Erorr while running handlebars for example page " + pageName
    );
    return error.message;
  }
}
