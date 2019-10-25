import ExecuteHandlebarsWorker from "worker-loader?inline&fallback!./worker";
import debounce from "debounce-promise";
import { WorkerWithTerminationTimeout } from "./worker-with-termination-timeout";
import { executeOneAfterAnother } from "./execute-one-after-another";

const HANDLEBARS_EXECUTION_TIME_LIMIT_MILLIS = 2000;
const DEBOUNCE_DELAY = 200;

const workerWithTimeout = new WorkerWithTerminationTimeout(
  () => new ExecuteHandlebarsWorker(),
  HANDLEBARS_EXECUTION_TIME_LIMIT_MILLIS
);

export async function executeExample(parsedExample) {
  return debouncedSequentialExecuteExample(parsedExample);
}

const debouncedSequentialExecuteExample = debounce(executeOneAfterAnother(executeExampleNow), DEBOUNCE_DELAY);

async function executeExampleNow(parsedExample) {
  return workerWithTimeout.postMessage(parsedExample);
}
