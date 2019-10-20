import { lazyGetHandlebars } from "./lazy-get-handlebars";
import json5 from "json5";

/**
 * Return the output of the example
 */
export async function executeExample(example) {
  const handlebars = await getDedicatedHandlebarsInstance(example);
  prepareHandlebarsRuntime(handlebars, example);

  const template = handlebars.compile(example.template);
  const input = json5.parse(example.input);
  return template(input);
}

async function getDedicatedHandlebarsInstance(example) {
  const singletonHandlebarsInstance = await lazyGetHandlebars(example.handlebarsVersion);
  return singletonHandlebarsInstance.create();
}

function prepareHandlebarsRuntime(Handlebars, example) {
  registerPartials(example, Handlebars);
  runPreparationScript(example, Handlebars);
}

function runPreparationScript(example, Handlebars) {
  const compiledPreparationScript = Function("Handlebars", example.preparationScript);
  compiledPreparationScript.call(undefined, Handlebars);
}

function registerPartials(example, Handlebars) {
  example.partials.forEach(partial => {
    Handlebars.registerPartial(partial.name, partial.content);
  });
}
