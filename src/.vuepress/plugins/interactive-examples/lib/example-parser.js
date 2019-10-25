import { prettifyJson } from "../../../lib/prettify-json";
import { runExample } from "./handlebars-runner";
import Handlebars from "handlebars";

export class ExampleParser {
  constructor(originalExample) {
    const defaultValues = { template: "", input: null, partials: {}, preparationScript: "" };
    this.normalizedExample = { ...defaultValues, ...originalExample };
  }

  static useDefaultValueIfMissing(value, defaultValue) {
    return value == null ? defaultValue : value;
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

  _executeAndBuildExample(parsedExample) {
    try {
      const output = runExample(Handlebars, parsedExample);
      return { ...parsedExample, output, error: null };
    } catch (error) {
      const errorWithEnumerableProperties = this._handlebarsExecutionErrorWithEnumerableProperties(error);
      return { ...parsedExample, output: null, error: errorWithEnumerableProperties };
    }
  }

  _partialsAsNameContentArray() {
    return Object.keys(this.normalizedExample.partials).map(partialName => {
      return {
        name: partialName,
        content: this.normalizedExample.partials[partialName]
      };
    });
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
