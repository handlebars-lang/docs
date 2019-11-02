import { interactiveExamples } from "./index";

describe("the interactive-examples plugin", () => {
  let plugin;
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeAll(() => {
    // disable console as there may be confusing output when running tests
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  beforeEach(() => (plugin = interactiveExamples()));

  describe("extendPageData()", () => {
    it("should extend the page data with the parsed example", () => {
      const frontmatter = modifyFrontMatterWithExtendPageData("test.md", {
        example: { template: "{{test}}", input: { test: "abc" } }
      });

      expect(frontmatter.parsedExample).toEqual({
        template: "{{test}}",
        partials: [],
        preparationScript: "",
        input: '{ test: "abc" }\n',
        output: "abc",
        error: null
      });
    });

    it("should add an error property if the example execution fails", () => {
      const frontmatter = modifyFrontMatterWithExtendPageData("test.md", {
        example: { template: "{{", input: { test: "abc" } }
      });

      expect(frontmatter.parsedExample.error.message).toMatch(/Parse error on line 1/);
      expect(frontmatter.parsedExample.error.stack).toMatch(/Error: [\S\s]*at/);

      delete frontmatter.parsedExample.error;
      expect(frontmatter.parsedExample).toEqual({
        template: "{{",
        partials: [],
        preparationScript: "",
        input: '{ test: "abc" }\n',
        output: null
      });
    });
  });

  describe("generated()", () => {
    const succeedingExample = { template: "{{test}}", input: {} };
    const failingExample = { template: "{{", input: {} };
    it("should not fail if all examples were executed without error", () => {
      runExtendPageData("test1.md", { example: succeedingExample });
      runExtendPageData("test2.md", { example: succeedingExample });
      expect(() => plugin.generated()).not.toThrow();
    });

    it("should not fail if all failing examples were marked as 'errorExpected''", () => {
      runExtendPageData("test1.md", { example: succeedingExample });
      runExtendPageData("test2.md", { example: { ...failingExample, errorExpected: true } });
      runExtendPageData("test3.md", { example: { ...failingExample, errorExpected: true } });
      expect(() => plugin.generated()).not.toThrow();
    });

    it("should fail if any failing example was not marked as 'errorExpected''", () => {
      runExtendPageData("test1.md", { example: succeedingExample });
      runExtendPageData("test2.md", { example: failingExample });
      runExtendPageData("test3.md", { example: { ...failingExample, errorExpected: true } });
      expect(() => plugin.generated()).toThrow("Errors in example files found (test2.md)");
    });

    it("should fail if any succeeding example was marked as 'errorExpected''", () => {
      runExtendPageData("test1.md", { example: succeedingExample });
      runExtendPageData("test2.md", { example: { ...failingExample, errorExpected: true } });
      runExtendPageData("test3.md", { example: { ...succeedingExample, errorExpected: true } });
      expect(() => plugin.generated()).toThrow("Errors in example files found (test3.md)");
    });
  });

  it("should throw an error if the example execution causes an error", () => {
    const frontmatter = {
      example: {
        template: "{{",
        input: {}
      }
    };
    const _filePath = "test.md";

    plugin.extendPageData({ frontmatter, _filePath });

    expect(() => plugin.generated()).toThrow("mess");
  });

  function modifyFrontMatterWithExtendPageData(_filePath, frontmatter) {
    runExtendPageData(_filePath, frontmatter);
    return frontmatter;
  }

  function runExtendPageData(_filePath, frontmatter) {
    plugin.extendPageData({ frontmatter, _filePath });
  }
});
