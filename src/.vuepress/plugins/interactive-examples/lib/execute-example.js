import json5 from "json5";

export function executeExample(Handlebars, parsedExample) {
  const handlebars = prepareHandlebarsInstance(Handlebars, parsedExample);
  return compileAndRun(handlebars, parsedExample);
}

function prepareHandlebarsInstance(Handlebars, parsedExample) {
  const handlebars = Handlebars.create();
  registerPartials(handlebars, parsedExample.partials);
  runPreparationScript(handlebars, parsedExample.preparationScript);
  return handlebars;
}

function registerPartials(handlebars, partials) {
  partials.forEach(partial => {
    handlebars.registerPartial(partial.name, partial.content);
  });
}

function runPreparationScript(handlebars, preparationScript) {
  const compiledPreparationScript = Function("Handlebars", preparationScript);
  compiledPreparationScript.call(undefined, handlebars);
}

function compileAndRun(handlebars, parsedExample) {
  const template = handlebars.compile(parsedExample.template);
  let inputObject = json5.parse(parsedExample.input);
  return template(inputObject);
}
