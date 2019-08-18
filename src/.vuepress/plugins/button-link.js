/* eslint-env node */

export function buttonLink() {
  return {
    name: "button link",
    extendMarkdown(md) {
      // Add a post-processing rule that gives all links with a text like "Learn more:" the css-class "learn-more-button"
      md.inline.ruler2.push("button_link", function learnMore(state) {
        if (state.src.startsWith("!button[")) {
          const token = state.tokens[1];
          if (token && token.type === "link_open") {
            token.attrPush(["class", "button-link"]);
            state.tokens.shift();
          }
        }
      });
    }
  };
}
