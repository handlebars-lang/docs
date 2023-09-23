import { getHighlighter } from "shiki";

let highlighter;

async function loadHighlighter() {
  if (highlighter) return highlighter;

  highlighter = getHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["json", "javascript", "handlebars", "html"],
    paths: {
      wasm: "/shiki/dist/",
      languages: "/shiki/languages/",
      themes: "/shiki/themes/",
    },
  });

  return await highlighter;
}

export { loadHighlighter };
