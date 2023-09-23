import ExecuteHandlebarsWorker from "./worker?worker";
import pDebounce from "p-debounce";
import { WorkerWithTerminationTimeout } from "./worker-with-termination-timeout";
import { executeOneAfterAnother } from "./execute-one-after-another";

const HANDLEBARS_EXECUTION_TIME_LIMIT_MILLIS = 2000;
const DEBOUNCE_DELAY = 200;

const workerWithTimeout = new WorkerWithTerminationTimeout(
  () => new ExecuteHandlebarsWorker(),
  HANDLEBARS_EXECUTION_TIME_LIMIT_MILLIS,
);

async function executeExampleNow(parsedExample) {
  return workerWithTimeout.postMessage(parsedExample);
}

const debouncedSequentialExecuteExample = pDebounce(executeOneAfterAnother(executeExampleNow), DEBOUNCE_DELAY);

export async function executeExample(parsedExample) {
  return debouncedSequentialExecuteExample(parsedExample);
}
