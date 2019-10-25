import { prettifyJson } from "../../../lib/prettify-json";
import { executeExample } from "./execute-example";
import Handlebars from "handlebars";

export class ExampleParser {
  constructor({ template, input, partials, preparationScript }) {
    this.normalizedExample = {
      template: useDefaultValueIfMissing(template, ""),
      input: useDefaultValueIfMissing(input, null),
      partials: useDefaultValueIfMissing(partials, {}),
      preparationScript: useDefaultValueIfMissing(preparationScript, "")
    };
  }

  /**
   * Entrypoint for parsing
   */
  parse() {
    const parsedExample = {
      template: this.normalizedExample.template,
      partials: this._partialsAsNameContentArray(),
      preparationScript: this.normalizedExample.preparationScript,
      input: prettifyJson(this.normalizedExample.input)
    };

    return this._executeAndBuildExample(parsedExample);
  }

  _partialsAsNameContentArray() {
    return Object.keys(this.normalizedExample.partials).map(partialName => {
      return {
        name: partialName,
        content: this.normalizedExample.partials[partialName]
      };
    });
  }

  _executeAndBuildExample(parsedExample) {
    try {
      const output = executeExample(Handlebars, parsedExample);
      return { ...parsedExample, output, error: null };
    } catch (error) {
      const errorWithEnumerableProperties = this._handlebarsExecutionErrorWithEnumerableProperties(error);
      return { ...parsedExample, output: null, error: errorWithEnumerableProperties };
    }
  }

  _handlebarsExecutionErrorWithEnumerableProperties(error) {
    if (error == null) {
      return null;
    }
    return {
      message: error.message,
      stack: error.stack
    };
  }
}

function useDefaultValueIfMissing(value, defaultValue) {
  return value == null ? defaultValue : value;
}
