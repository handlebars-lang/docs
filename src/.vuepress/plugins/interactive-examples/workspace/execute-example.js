import { lazyGetHandlebars } from "./lazy-get-handlebars";
import { runExample } from "../lib/handlebars-runner";

/**
 * Return the output of the example
 */
export async function executeExample(example) {
  const handlebars = await lazyGetHandlebars(example.handlebarsVersion);
  return runExample(handlebars, example);
}
