import { limitWaitingTime, TimeoutError } from "./limit-waiting-time";

describe("limitWaitingTime", () => {
  it("should resolve if the given promise resolves", async () => {
    const timeoutCallback = jest.fn();
    const testPromise = delay(100).then(() => "a");

    const resultPromise = limitWaitingTime(testPromise, 200, timeoutCallback);

    await expect(resultPromise).resolves.toEqual("a");
    expect(timeoutCallback).not.toHaveBeenCalled();
  });

  it("should reject the promise after a timeout", async () => {
    const timeoutCallback = jest.fn();
    const testPromise = delay(200).then(() => "a");

    const resultPromise = limitWaitingTime(testPromise, 100, timeoutCallback);

    await expect(resultPromise).rejects.toEqual(new TimeoutError("Timed out after 100ms"));
    expect(timeoutCallback).toHaveBeenCalledTimes(1);
  });

  it("should reject if the given promise reject before the timeout, without calling the timeoutCallback ", async () => {
    const timeoutCallback = jest.fn();
    const testPromise = delay(100).then(() => {
      throw new Error("b");
    });

    const resultPromise = limitWaitingTime(testPromise, 200, timeoutCallback);

    await expect(resultPromise).rejects.toEqual(new Error("b"));
    expect(timeoutCallback).not.toHaveBeenCalled();
  });
});

async function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
