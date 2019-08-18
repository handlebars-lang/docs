import json5 from "json5";
import yaml from "js-yaml";

export class ExampleSerializer {
  constructor(parsedExample) {
    this.parsedExample = parsedExample;
    this.exampleAsJsObject = undefined;
  }

  toYaml() {
    const exampleAsJsObject = this.toJsObject();
    return yaml.safeDump(exampleAsJsObject);
  }

  toJsObject() {
    this.exampleAsJsObject = {
      template: this.parsedExample.template
    };
    this._addInputIfNotEmpty();
    this._addPreparationScriptToExample();
    this._addPartialsToExample();
    return this.exampleAsJsObject;
  }

  _addInputIfNotEmpty() {
    let input = this.parsedExample.input;
    if (input == null) {
      return;
    }
    try {
      this.exampleAsJsObject.input = json5.parse(input);
    } catch (error) {
      throw new Error(`Error while parsing json5-string '${input}': ` + error.message);
    }
  }

  _addPreparationScriptToExample() {
    let preparationScript = this.parsedExample.preparationScript;
    if (preparationScript == null || preparationScript.length === 0) {
      return;
    }
    this.exampleAsJsObject.preparationScript = preparationScript;
  }

  _addPartialsToExample() {
    if (this.parsedExample.partials == null || this.parsedExample.partials.length === 0) {
      return;
    }
    this.exampleAsJsObject.partials = {};
    this.parsedExample.partials.forEach(partial => {
      this.exampleAsJsObject.partials[partial.name] = partial.content;
    });
  }
}
