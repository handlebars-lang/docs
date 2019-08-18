import { prettifyJson } from "./prettify-json";
import Handlebars from "handlebars";

export class ExampleParser {
  constructor(originalExample) {
    this.originalExample = originalExample;
    this.normalizedExample = null;
    this.parseError = null;
    this.handlebarsExecutionError = null;
    this.handlebarsOutput = null;
  }

  /**
   * Entrypoint for parsing
   */
  parse() {
    this._normalizeExample();
    this._tryToRunHandlebars();
    return this._prepareResultForRendering();
  }

  _normalizeExample() {
    this.normalizedExample = {
      ...this.originalExample,
      partials: this.originalExample.partials || {},
      preparationScript: this.originalExample.preparationScript || ""
    };
  }

  _tryToRunHandlebars() {
    try {
      this.handlebarsOutput = this._runHandlebars();
    } catch (error) {
      this.handlebarsExecutionError = error;
    }
  }

  _runHandlebars() {
    const handlebars = Handlebars.create();
    handlebars.registerPartial(this.normalizedExample.partials);
    this._runPreparationScript(handlebars);
    const template = handlebars.compile(this.normalizedExample.template);
    return template(this.normalizedExample.input);
  }

  _runPreparationScript(handlebars) {
    const compiledPreparationScript = Function("Handlebars", this.normalizedExample.preparationScript);
    compiledPreparationScript.call(undefined, handlebars);
  }

  _prepareResultForRendering() {
    return {
      template: this.normalizedExample.template,
      partials: this._partialsAsNameContentArray(),
      preparationScript: this.normalizedExample.preparationScript,
      input: prettifyJson(this.normalizedExample.input),
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
