import { parser } from "./js-object.parser.js";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

let parserWithMetadata = parser.configure({
  props: [
    styleTags({
      PropertyDefinition: t.propertyName,
      BooleanLiteral: t.bool,
      Number: t.number,
      Escape: t.escape,
      String: t.string,
      LineComment: t.lineComment,
      BlockComment: t.blockComment,
      "[ ]": t.squareBracket,
      "{ }": t.brace,
    }),
  ],
});

const language = LRLanguage.define({
  name: "js-object",
  parser: parserWithMetadata,
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"'] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
  },
});

export function jsObject() {
  return new LanguageSupport(language, []);
}
