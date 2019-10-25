import json5 from "json5";

export function runExample(Handlebars, parsedExample) {
  const handlebars = Handlebars.create();
  parsedExample.partials.forEach(partial => {
    handlebars.registerPartial(partial.name, partial.content);
  });
  runPreparationScript(handlebars, parsedExample.preparationScript);
  return run(handlebars, parsedExample);
}

function run(handlebars, parsedExample) {
  const template = handlebars.compile(parsedExample.template);
  let input = json5.parse(parsedExample.input);
  return template(input);
}

function runPreparationScript(handlebars, preparationScript) {
  const compiledPreparationScript = Function("Handlebars", preparationScript);
  compiledPreparationScript.call(undefined, handlebars);
}
