/* eslint-disable no-console */

const { ExampleParser } = require("./lib/example-parser");
const { ErrorCollector } = require("./lib/error-collector");

module.exports = {
  addParsedExampleToPage
};

function addParsedExampleToPage() {
  const errorCollector = new ErrorCollector();

  return {
    name: "prerender-example-code",
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      if (frontmatter.example == null) {
        return;
      }

      const exampleParser = new ExampleParser(frontmatter.example, _filePath);
      frontmatter.parsedExample = exampleParser.parse();
      frontmatter.errorWhileParsingExample = exampleParser.parseError;

      errorCollector.collectErrorIfNotNull(_filePath, exampleParser.parseError);
      errorCollector.collectErrorIfNotNull(_filePath, exampleParser.handlebarsExecutionError);
      console.log(exampleParser.handlebarsExecutionError);
    },
    generated() {
      // executed only when "building", not when "developing".
      errorCollector.failOnErrors();
    }
  };
}
