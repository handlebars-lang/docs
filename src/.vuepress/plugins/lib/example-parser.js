const { prettifyJson } = require("./prettify-json");
const Handlebars = require("handlebars");

class ExampleParser {
  constructor(originalExample, filePath) {
    this.filePath = filePath;
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
      error: this.handlebarsExecutionError
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

module.exports = {
  ExampleParser
};
