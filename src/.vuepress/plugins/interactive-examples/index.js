/* eslint-disable no-console */
/* eslint-env node */

import { ExampleParser } from "./lib/example-parser";
import { ErrorCollector } from "./lib/error-collector";
import path from "path";

export function interactiveExamples() {
  const errorCollector = new ErrorCollector();
  return {
    name: "interactive-examples",
    plugins: {
      "@vuepress/register-components": {
        componentsDir: path.join(__dirname, "global-components")
      }
    },
    extendPageData($page) {
      const { frontmatter, _filePath } = $page;

      if (frontmatter.example == null) {
        return;
      }

      const exampleParser = new ExampleParser(frontmatter.example);
      frontmatter.parsedExample = exampleParser.parse();
      if (frontmatter.example.errorExpected === true) {
        errorCollector.expectError(_filePath, frontmatter.parsedExample.error);
      } else {
        errorCollector.expectSuccess(_filePath, frontmatter.parsedExample.error);
      }
    },
    generated() {
      // executed only when "building", not when "developing".
      errorCollector.failOnErrors();
    }
  };
}
