import { serializeToYaml } from "./example-serializer";
import { safeLoad } from "js-yaml";

describe("the example-serializer", () => {
  it("should hide empty partials and preparation-script and input", () => {
    assertYamlEquals(
      serializeToYaml({
        error: null,
        input: "{  }\n",
        output: "\n",
        partials: [],
        preparationScript: "",
        template: "{{name}}\n"
      }),
      `
template: |
  {{name}}
`
    );
  });

  it("should parse the input as json5", () => {
    assertYamlEquals(
      serializeToYaml({
        error: null,
        input: "{ name: 'Erwin' }\n",
        output: "Erwin\n",
        partials: [],
        preparationScript: "",
        template: "{{name}}\n"
      }),
      `
template: |
  {{name}}
input:
  name: Erwin
    `
    );
  });

  it("should convert partial-list to an object with partial name as keys", () => {
    assertYamlEquals(
      serializeToYaml({
        error: null,
        input: "{}\n",
        output: "\n",
        partials: [
          {
            name: "partial1",
            content: "{{name1}}"
          },
          {
            name: "partial2",
            content: "{{name2}}"
          }
        ],
        preparationScript: "",
        template: ""
      }),
      `
      template: ''
      partials:
        partial1: '{{name1}}'
        partial2: '{{name2}}'
    `
    );
  });

  it("should return yaml properties in the correct order ", () => {
    expect(
      serializeToYaml({
        error: null,
        preparationScript: "Handlebars.registerHelper()",
        input: "{name:'Erwin'}\n",
        partials: [
          {
            name: "p1",
            content: "{{name1}}"
          },
          {
            name: "p2",
            content: "{{name2}}"
          }
        ],
        output: "\n",
        template: ""
      })
    ).toMatch(/[\S\s]*template[\S\s]*partials[\S\s]*preparationScript[\S\s]*input/);
  });

  it("should handle missing input, preparationScript, partials and output", () => {
    assertYamlEquals(serializeToYaml({ template: "Hi there!" }), `template: 'Hi there!'`);
  });

  it("should throw if template is missing", () => {
    expect(() => serializeToYaml({ preparationScript: "abc" })).toThrow(/must have a 'template' property/i);
  });

  it("should throw if the input is not a valid json5 string", () => {
    expect(() => serializeToYaml({ template: "", input: "[ 5" })).toThrow(/Error while parsing 'input' as json5/i);
  });
});

function assertYamlEquals(actual, expected) {
  const actualJsObject = safeLoad(actual);
  const expectedJsObject = safeLoad(expected);
  expect(actualJsObject).toEqual(expectedJsObject);
}
