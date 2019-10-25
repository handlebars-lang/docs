describe("ths 'promise-race' function", () => {
  it("should return the first resolving promise", async () => {
    await expect(Promise.race([delay(100).then(() => "a"), delay(200).then(() => "b")])).resolves.toEqual("a");
    await expect(Promise.race([delay(200).then(() => "a"), delay(100).then(() => "b")])).resolves.toEqual("b");
    await expect(
      Promise.race([
        delay(200).then(() => "a"),
        delay(100).then(() => {
          throw new Error("b");
        })
      ])
    ).rejects.toEqual(new Error("b"));
  });

  it("should not cause an UnhandledPromiseRejectionWarning", async () => {
    await expect(
      Promise.race([
        delay(100).then(() => "a"),
        delay(200).then(() => {
          throw new Error("b");
        })
      ])
    ).resolves.toEqual("a");
  });
});

async function delay(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}
