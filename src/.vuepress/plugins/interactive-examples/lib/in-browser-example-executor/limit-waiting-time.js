export async function limitWaitingTime(promiseToWaitFor, maxWaitMillis, timeoutCallback) {
  try {
    return await Promise.race([
      promiseToWaitFor,
      rejectAfter(maxWaitMillis, () => new TimeoutError(`Timed out after ${maxWaitMillis}ms`))
    ]);
  } catch (error) {
    if (error instanceof TimeoutError) {
      timeoutCallback();
    }
    throw error;
  }
}

async function rejectAfter(milliseconds, errorProvider) {
  return new Promise((resolve, reject) => setTimeout(() => reject(errorProvider()), milliseconds));
}

export class TimeoutError extends Error {
  constructor(message) {
    super(message);
  }
}
