import { ExampleUnparser } from "./example-unparser";

describe("test", () => {
  it("should return a original yaml for a parsed example", () => {
    let unparser = new ExampleUnparser({
      template: "{{title}} {{content}} {{>partial1}}",
      partials: [{ name: "partial1", contents: "{{xyz}}" }, { name: "partial2", contents: "{{xyz}}" }],
      preparationScript: `Handlebars.registerHelper`,
      input: {
        title: "example",
        contents: "text",
        xyz: "abc"
      },
      output: "example text abc"
    });

    unparser.unparse();
    // TODO: expectations missing
  });
});
