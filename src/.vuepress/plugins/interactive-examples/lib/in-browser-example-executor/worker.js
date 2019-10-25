import { executeExample } from "../execute-example";
import { lazyGetHandlebars } from "./lazy-get-handlebars";
import registerPromiseWorker from "promise-worker/register";

registerPromiseWorker(async function(parsedExampleWithVersion) {
  const handlebars = await lazyGetHandlebars(parsedExampleWithVersion.handlebarsVersion);
  return executeExample(handlebars, parsedExampleWithVersion);
});
