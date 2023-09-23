import { ExampleParser } from "./example-parser.js";

export function deindent(string, ...values) {
  const result = String.raw(string, ...values);
  return result.replace(/^\s*/gm, "");
}

export async function parseExample(example) {
  if (example == null) {
    return;
  }

  const exampleParser = new ExampleParser(example);
  return exampleParser.parse();
}
