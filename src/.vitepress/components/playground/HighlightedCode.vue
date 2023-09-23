<template>
  <div class="container code" v-html="code"></div>
</template>

<script>
import { getSingletonHighlighter } from "shiki";

export default {
  props: {
    value: { type: String, default: "" },
    cssClass: { type: String, default: "" },
    // https://github.com/shikijs/shiki/blob/f705b0fc7c8a31bfadd40322db86421cccc31c6f/docs/languages.md
    language: { type: String, required: true },
  },
  data() {
    return {
      code: "",
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
      const highlighter = await getSingletonHighlighter({
        langs: ["json", "javascript", "handlebars", "html"],
        themes: ["github-dark", "github-light"],
      });

      this.code = highlighter.codeToHtml(this.value, {
        lang: this.$props.language,
        themes: { light: "github-light", dark: "github-dark" },
      });
    },
  },
};
</script>

<style>
html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
}
html .shiki {
  background-color: transparent !important;
}
</style>

<style scoped>
.container {
  padding: 1.5rem;
  overflow-x: auto;
}
.container:deep(pre) {
  margin: 0;
}
</style>
