<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre :class="cssClass"><!--
  --><code
            spellcheck="false"
            :class="['ce-code-content', 'hljs', hljsLanguage]"
            v-html="codeHtml"
    /><!--
--></pre>
</template>
<script>
import hljs from "highlight.js/lib/core";
import hljsHandlebars from "highlight.js/lib/languages/handlebars";
import hljsJavaScript from "highlight.js/lib/languages/javascript";
import hljsXml from "highlight.js/lib/languages/xml";
import hljsPlaintext from "highlight.js/lib/languages/plaintext";

hljs.registerLanguage("handlebars", hljsHandlebars);
hljs.registerLanguage("xml", hljsXml);
hljs.registerLanguage("javascript", hljsJavaScript);
hljs.registerLanguage("plaintext", hljsPlaintext);

const languageMapping = {
  json: "javascript",
  javascript: "javascript",
  html: "xml",
  handlebars: "handlebars",
};

export default {
  props: {
    value: { type: String, default: "" },
    cssClass: { type: String, default: "" },
    language: { type: String, required: true },
  },
  computed: {
    hljsLanguage() {
      return languageMapping[this.$props.language] || "plaintext";
    },
    codeHtml() {
      this.$emit("beforeUpdateHtml");
      return hljs.highlight(this.value, { language: this.hljsLanguage }).value;
    },
  },
};
</script>
<style lang="stylus" scoped>
code.ce-code-content {
    box-sizing: border-box;
    background: transparent;
    overflow: initial;
}
</style>
