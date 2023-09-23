import { executeExample } from "../execute-example";
import { lazyGetHandlebars } from "./lazy-get-handlebars";

onmessage = async function (parsedExampleWithVersion) {
  try {
    const handlebars = await lazyGetHandlebars(parsedExampleWithVersion.data.handlebarsVersion);
    const result = executeExample(handlebars, parsedExampleWithVersion.data);

    postMessage(result);
  } catch (e) {
    postMessage({ error: e.message });
  }
};
