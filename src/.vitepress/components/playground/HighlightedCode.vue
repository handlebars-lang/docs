<template>
  <div class="container code-dark" v-html="codeDark"></div>
  <div class="container code-light" v-html="codeLight"></div>
</template>

<script>
import { loadHighlighter } from "./lib/code-highlighter.js";
import { renderToHtml } from "shiki";

export default {
  props: {
    value: { type: String, default: "" },
    cssClass: { type: String, default: "" },
    // https://github.com/shikijs/shiki/blob/f705b0fc7c8a31bfadd40322db86421cccc31c6f/docs/languages.md
    language: { type: String, required: true },
  },
  data() {
    return {
      codeDark: "",
      codeLight: "",
    };
  },
  watch: {
    value: function () {
      this.valueToHtml();
    },
  },
  created() {
    this.valueToHtml();
  },
  methods: {
    async valueToHtml() {
      // Dynamically loading shiki themes doesn't work in SSR mode
      if (!import.meta.env.SSR) {
        const highlighter = await loadHighlighter();

        const tokensDark = highlighter.codeToThemedTokens(this.value, this.$props.language, "github-dark");
        this.codeDark = renderToHtml(tokensDark, { bg: "transparent" });

        const tokensLight = highlighter.codeToThemedTokens(this.value, this.$props.language, "github-light");
        this.codeLight = renderToHtml(tokensLight, { bg: "transparent" });
      }
    },
  },
};
</script>

<style scoped>
html:not(.dark) .code-dark {
  display: none;
}
.dark .code-light {
  display: none;
}

.container {
  padding: 1.5rem;
  overflow-x: auto;
}
.container:deep(pre) {
  margin: 0;
}
</style>
