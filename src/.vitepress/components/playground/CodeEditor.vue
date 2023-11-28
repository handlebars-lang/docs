<template>
  <div class="container" ref="editor"></div>
</template>

<script>
import { EditorView, minimalSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";

export default {
  components: {},
  props: {
    value: { type: String, default: "" },
    language: { type: String, required: true },
  },
  mounted() {
    new EditorView({
      extensions: [
        // TODO add dark mode
        minimalSetup,
        this.getLanguage(),
        EditorView.updateListener.of((viewUpdate) => {
          this.$emit("input", viewUpdate.state.doc.toString());
        }),
      ],
      parent: this.$refs.editor,
      doc: this.value,
    });
  },
  methods: {
    getLanguage() {
      switch (this.language) {
        case "html":
          return html();
        case "handlebars":
          return html(); // TODO Port code-mirror handlebars-lang to v6
        default:
          return javascript();
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1.2rem;
}
</style>
