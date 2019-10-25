import debounce from "debounce-promise";

describe("the 'debounce-promise' package", () => {
  it("should debounce promise based function", async () => {
    const mockFunction = jest.fn(async value => Promise.resolve(value));
    const debouncedFunction = debounce(mockFunction, 100);
    const results = await Promise.all([1, 2, 3, 4].map(debouncedFunction));
    expect(results).toEqual([4, 4, 4, 4]);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
