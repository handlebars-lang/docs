import highlightFallback from "@vuepress/markdown/lib/highlight";
import hljs from "highlight.js/lib/core";
import hljsHandlebars from "highlight.js/lib/languages/handlebars";
import hljsJavaScript from "highlight.js/lib/languages/javascript";
import hljsXml from "highlight.js/lib/languages/xml";
import hljsPlaintext from "highlight.js/lib/languages/plaintext";

export function useHighlightJsForCode() {
  return {
    name: "use highlight.js for code-highlighting",
    chainMarkdown(config) {
      config.options.highlight(highlightCode);
    },
  };
}

hljs.registerLanguage("handlebars", hljsHandlebars);
hljs.registerLanguage("xml", hljsXml);
hljs.registerLanguage("javascript", hljsJavaScript);
hljs.registerLanguage("plaintext", hljsPlaintext);

const languageMapping = {
  json: "javascript",
  javascript: "javascript",
  html: "xml",
  handlebars: "handlebars",
  hbs: "handlebars",
};

function highlightCode(str, lang) {
  if (lang == null) {
    return highlightFallback(str);
  }
  return highlightCodeWithLanguage(str, lang);
}

function highlightCodeWithLanguage(str, lang) {
  if (languageMapping[lang] == null) {
    return highlightFallback(str, lang);
  }
  let code = hljs.highlight(str, { language: languageMapping[lang] });
  return `<pre v-pre class="language-${lang}"><code>${code.value}</code></pre>`;
}
