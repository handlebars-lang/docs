/**
 *
 * @param {}asyncFunction
 * @returns {function(): Promise<*>}
 */
export function executeOneAfterAnother(asyncFunction) {
  let lastExecutionDone = Promise.resolve();

  return function(/* same args as asyncFunction */) {
    lastExecutionDone = runWhenCompleted(lastExecutionDone, () => asyncFunction.apply(this, [...arguments]));
    return lastExecutionDone;
  };
}

async function runWhenCompleted(promiseToBeCompleted, functionToRun) {
  return promiseToBeCompleted.then(functionToRun, functionToRun);
}
