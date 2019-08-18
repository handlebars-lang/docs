/* eslint-disable no-console */
/* eslint-env node */

import { ExampleParser } from "../lib/example-parser";
import { ErrorCollector } from "./lib/error-collector";

export function addParsedExampleToPage() {
  const errorCollector = new ErrorCollector();
  return {
    name: "add-parsed-example-to-page",
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      if (frontmatter.example == null) {
        return;
      }

      const exampleParser = new ExampleParser(frontmatter.example);
      frontmatter.parsedExample = exampleParser.parse();

      errorCollector.collectErrorIfNotNull(_filePath, exampleParser.handlebarsExecutionError);
    },
    generated() {
      // executed only when "building", not when "developing".
      errorCollector.failOnErrors();
    }
  };
}
