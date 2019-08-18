import { ExampleSerializer } from "./example-serializer";
import { multilineBlock } from "../../../test-utils/multilineblock";

describe("the example-serializer", () => {
  theSerializerShould(
    "hide empty partials and preparation-script",
    {
      error: null,
      input: '{ name: "Erwin" }\n',
      output: "Erwin\n",
      partials: [],
      preparationScript: "",
      template: "{{name}}\n"
    },
    { template: "{{name}}\n", input: { name: "Erwin" } },
    multilineBlock`
template: |
  {{name}}
input:
  name: Erwin
`
  );

  theSerializerShould(
    "handle missing input object gracefully",
    {
      error: null,
      output: "Erwin\n",
      partials: [],
      preparationScript: "",
      template: "{{name}}\n"
    },
    { template: "{{name}}\n" },
    multilineBlock`
template: |
  {{name}}
`
  );
});

function theSerializerShould(description, parsedExample, expectedExampleAsJsObject, expectedExampleAsYaml) {
  describe(`the parser should ${description}`, () => {
    it("in the js-object", function() {
      let exampleAsJsObject = new ExampleSerializer(parsedExample).toJsObject();
      expect(exampleAsJsObject).toEqual(expectedExampleAsJsObject);
    });

    it("in the generated YAML", function() {
      let exampleAsYaml = new ExampleSerializer(parsedExample).toYaml();
      expect(exampleAsYaml).toEqual(expectedExampleAsYaml);
    });
  });
}
