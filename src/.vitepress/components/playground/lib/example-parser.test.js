import { describe, it, expect } from "vitest";
import { ExampleParser } from "./example-parser";

function multilineBlock(strings, ...values) {
  return String.raw(strings, ...values).trim() + "\n";
}

describe("the example parser", () => {
  it("should parse a simple example", async () => {
    let parser = new ExampleParser({
      template: "{{name}}\n",
      input: { name: "Erwin" },
    });

    expect(await parser.parse()).toEqual({
      error: null,
      input: '{ name: "Erwin" }\n',
      output: "Erwin\n",
      partials: [],
      preparationScript: "",
      template: "{{name}}\n",
    });
  });

  it("should parse an example with an helper correctly", async () => {
    let parser = new ExampleParser({
      template: "{{helper}}\n",
      // language=JavaScript
      preparationScript: 'Handlebars.registerHelper("helper", () => "abc");\n',
      input: {},
    });

    expect(await parser.parse()).toEqual({
      error: null,
      input: "{}\n",
      output: "abc\n",
      partials: [],
      preparationScript: 'Handlebars.registerHelper("helper", () => "abc");\n',
      template: "{{helper}}\n",
    });
  });

  it("should parse an example with an partials correctly", async () => {
    let parser = new ExampleParser({
      template: "{{> myPartial}}\n",
      partials: {
        myPartial: "Hello",
      },
      input: {},
    });

    expect(await parser.parse()).toEqual({
      error: null,
      input: "{}\n",
      output: "Hello",
      partials: [
        {
          name: "myPartial",
          content: "Hello",
        },
      ],
      preparationScript: "",
      template: "{{> myPartial}}\n",
    });
  });

  it("should treat missing input as 'null'", async () => {
    let parser = new ExampleParser({
      template: "{{> myPartial}}\n",
      partials: {
        myPartial: "Hello",
      },
    });

    expect(await parser.parse()).toEqual({
      error: null,
      input: "null\n",
      output: "Hello",
      partials: [
        {
          name: "myPartial",
          content: "Hello",
        },
      ],
      preparationScript: "",
      template: "{{> myPartial}}\n",
    });
  });

  it("should store errors that occur while executing handlebars", async () => {
    let parser = new ExampleParser({
      template: "{{helper}}",
      // language=JavaScript
      preparationScript: multilineBlock`
Handlebars.registerHelper("helper", () => {
  throw new Error("Test-Error");
});
`,
      input: {},
    });

    const parsedExample = await parser.parse();

    expectErrorInExample(parsedExample, "Test-Error");
  });

  it("should store errors that occur while parsing the handlebars template", async () => {
    let parser = new ExampleParser({
      template: "{{helper",
      input: {},
    });

    const parsedExample = await parser.parse();

    expectErrorInExample(
      parsedExample,
      "Parse error on line 1:\n{{helper\n--^\nExpecting 'ID', 'STRING', 'NUMBER', 'BOOLEAN', 'UNDEFINED', 'NULL', 'DATA', got 'INVALID'",
    );
  });

  it("should store the input, even if an error happens during the execution", async () => {
    let parser = new ExampleParser({
      template: "{{helper",
      input: { someVariable: 3 },
    });

    const parsedExample = await parser.parse();

    expect(parsedExample.input).toContain("someVariable");
  });
});

function expectErrorInExample(parsedExample, errorMessage) {
  expect(parsedExample).toBeTruthy();
  expect(parsedExample.error).toBeTruthy();
  expect(parsedExample.error.message).toEqual(errorMessage);
  expect(parsedExample.error.stack).toBeTruthy();
  expect(parsedExample.output).toBeNull();
}
