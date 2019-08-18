import { prettifyJson } from "./prettify-json";
import Handlebars from "handlebars";

export class ExampleParser {
  constructor(originalExample) {
    const template = originalExample.template;
    const partials = originalExample.partials || {};
    const preparationScript = originalExample.preparationScript || "";

    let input = originalExample.input;
    if (input === undefined) {
      input = null;
    }

    this.normalizedExample = { template, input, partials, preparationScript };

    this.prettifiedInputAsString = null;
    this.handlebarsExecutionError = null;
    this.handlebarsOutput = null;
  }

  /**
   * Entrypoint for parsing
   */
  parse() {
    try {
      this._runHandlebars();
      this._prettifyInput();
    } catch (error) {
      this.handlebarsExecutionError = error;
    }
    return this._prepareResultForRendering();
  }

  _runHandlebars() {
    const handlebars = Handlebars.create();
    handlebars.registerPartial(this.normalizedExample.partials);
    this._runPreparationScript(handlebars);
    const template = handlebars.compile(this.normalizedExample.template);
    this.handlebarsOutput = template(this.normalizedExample.input);
  }

  _runPreparationScript(handlebars) {
    const compiledPreparationScript = Function("Handlebars", this.normalizedExample.preparationScript);
    compiledPreparationScript.call(undefined, handlebars);
  }

  _prettifyInput() {
    // if (this.normalizedExample.input == null) {
    //   throw new Error("Example property 'input' may not be null or undefined")
    // }
    this.prettifiedInputAsString = prettifyJson(this.normalizedExample.input);
  }

  _prepareResultForRendering() {
    return {
      template: this.normalizedExample.template,
      partials: this._partialsAsNameContentArray(),
      preparationScript: this.normalizedExample.preparationScript,
      input: this.prettifiedInputAsString,
      output: this.handlebarsOutput,
      error: this._handlebarsExecutionErrorWithEnumerableProperties()
    };
  }

  _handlebarsExecutionErrorWithEnumerableProperties() {
    if (this.handlebarsExecutionError == null) {
      return null;
    }
    return {
      message: this.handlebarsExecutionError.message,
      stack: this.handlebarsExecutionError.stack
    };
  }

  _partialsAsNameContentArray() {
    return Object.keys(this.normalizedExample.partials).map(partialName => {
      return {
        name: partialName,
        content: this.normalizedExample.partials[partialName]
      };
    });
  }
}
