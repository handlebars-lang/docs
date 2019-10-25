import { executeExample } from "./execute-example";
import Handlebars from "handlebars";

describe("the handlebars runner", () => {
  it("should run a simple example", () => {
    expect(runWithAppliedDefaultValues({ template: "{{name}}", input: '{ name: "Erwin"}' })).toEqual("Erwin");
  });

  it("should register partials", () => {
    expect(
      runWithAppliedDefaultValues({
        template: "template {{>partial}}",
        partials: [{ name: "partial", content: "partial {{name}}" }],
        input: '{ name: "Erwin"}'
      })
    ).toEqual("template partial Erwin");
  });

  it("should execute the preparation-script", () => {
    expect(
      runWithAppliedDefaultValues({
        template: "{{loud name}}",
        // language=JavaScript
        preparationScript: 'Handlebars.registerHelper("loud", function (arg) { return arg.toUpperCase() })',
        input: '{ name: "Erwin"}'
      })
    ).toEqual("ERWIN");
  });

  it("should throw parse errors", () => {
    expect(() => runWithAppliedDefaultValues({ template: "{{loud" })).toThrow();
  });
});

function runWithAppliedDefaultValues(incompleteExample) {
  const exampleDefaults = { template: "", partials: [], preparationScript: "", input: "{}" };
  return executeExample(Handlebars, { ...exampleDefaults, ...incompleteExample });
}
