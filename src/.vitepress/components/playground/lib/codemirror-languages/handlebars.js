import { parser } from "./handlebars.parser.js";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { html, htmlLanguage } from "@codemirror/lang-html";
import { styleTags, tags as t } from "@lezer/highlight";
import { parseMixed } from "@lezer/common";

let parserWithMetadata = parser.configure({
  strict: false,
  props: [
    styleTags({
      Name: t.name,
      Prop: t.name,
      Array: t.name,
      Context: t.name,
      BlockParam: t.name,
      Bool: t.bool,
      Number: t.number,
      This: t.className,
      "BlockHelper As DataVariable PartialBlock Else BlockHelperClose": t.className,
      Partial: t.className,
      InlinePartial: t.className,
      String: t.string,
      Comment1: t.blockComment,
      Comment2: t.blockComment,
      "# > | @": t.annotation,
      '"/"': t.annotation,
      "=": t.operator,
      "MustacheOpen MustacheClose {{{ }}} {{{{ }}}}": [t.brace, t.bool],
      "( ) [ ]": t.bracket,
    }),
  ],
  wrap: parseMixed((node) => {
    return node.type.isTop
      ? {
          parser: htmlLanguage.parser,
          overlay: (node) => node.name === "Text",
        }
      : null;
  }),
});

const language = LRLanguage.define({
  name: "handlebars",
  parser: parserWithMetadata,
  languageData: {
    commentTokens: { block: { open: "{{!", close: "}}" } },
  },
});

export function handlebars() {
  return new LanguageSupport(language, [html().support]);
}
