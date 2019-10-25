import { executeOneAfterAnother } from "./execute-one-after-another";

describe("oneAfterAnother", () => {
  it("without: ensure call order with non-wrapped function", async () => {
    const mockFunction = jest.fn();
    const promise1 = delay(100).then(() => mockFunction("a"));
    const promise2 = delay(50).then(() => mockFunction("b"));
    const promise3 = delay(0).then(() => mockFunction("c"));

    await Promise.all([promise1, promise2, promise3]);
    expect(mockFunction).toHaveBeenNthCalledWith(1, "c");
    expect(mockFunction).toHaveBeenNthCalledWith(2, "b");
    expect(mockFunction).toHaveBeenNthCalledWith(3, "a");
  });

  it("should resolve promises in sequence", async () => {
    const wrappedFunction = executeOneAfterAnother(delay);
    const mockFunction = jest.fn();
    const promise1 = wrappedFunction(100).then(() => mockFunction("a"));
    const promise2 = wrappedFunction(50).then(() => mockFunction("b"));
    const promise3 = wrappedFunction(0).then(() => mockFunction("c"));

    await Promise.all([promise1, promise2, promise3]);
    expect(mockFunction).toHaveBeenNthCalledWith(1, "a");
    expect(mockFunction).toHaveBeenNthCalledWith(2, "b");
    expect(mockFunction).toHaveBeenNthCalledWith(3, "c");
  });
});

async function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
