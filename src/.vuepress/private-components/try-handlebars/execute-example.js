import { lazyGetHandlebars } from "./lazy-get-handlebars";
import json5 from "json5";
import debounce from "lodash.debounce";

export const debounceExecuteExample = debounce(executeExample, 5000, { trailing: true });

/**
 * Return the output of the example
 */
export async function executeExample(example) {
  const Handlebars = await getDedicatedHandlebarsInstance();
  example.partials.forEach(partial => {
    Handlebars.registerPartial(partial.name, partial.content);
  });
  const template = Handlebars.compile(example.template);
  const input = json5.parse(example.input);
  example.output = template(input);

  async function getDedicatedHandlebarsInstance() {
    const singletonHandlebarsInstance = await lazyGetHandlebars(example.handlebarsVersion);
    return singletonHandlebarsInstance.create();
  }
}
