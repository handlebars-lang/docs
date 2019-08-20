import json5 from "json5";
import yaml from "js-yaml";

export function serializeToYaml(parsedExample) {
  const exampleAsJsObject = asFrontMatterJsObject(parsedExample);
  return yaml.safeDump(exampleAsJsObject);
}

function asFrontMatterJsObject(parsedExample) {
  if (parsedExample.template == null) {
    throw new Error("Example must have a 'template' property: " + JSON.stringify(parsedExample));
  }
  const exampleAsJsObject = {
    template: parsedExample.template
  };
  _addPartialsToExample();
  _addPreparationScriptToExample();
  _addInputIfNotEmpty();
  return exampleAsJsObject;

  function _addPartialsToExample() {
    if (parsedExample.partials == null || parsedExample.partials.length === 0) {
      return;
    }
    exampleAsJsObject.partials = {};
    parsedExample.partials.forEach(partial => {
      exampleAsJsObject.partials[partial.name] = partial.content;
    });
  }

  function _addPreparationScriptToExample() {
    let preparationScript = parsedExample.preparationScript;
    if (preparationScript == null || preparationScript.length === 0) {
      return;
    }
    exampleAsJsObject.preparationScript = preparationScript;
  }

  function _addInputIfNotEmpty() {
    let input = parsedExample.input;
    if (input == null || input.match(/^\s*{\s*}\s*$/)) {
      return;
    }
    try {
      exampleAsJsObject.input = json5.parse(input);
    } catch (error) {
      throw new Error(`Error while parsing 'input' as json5 '${input}': ` + error.message);
    }
  }
}
