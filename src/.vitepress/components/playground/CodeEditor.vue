<template>
  <div class="container" ref="editor"></div>
</template>

<script setup>
import { EditorView, minimalSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { onMounted, unref, useTemplateRef } from "vue";
import { useData } from "vitepress";

const editor = useTemplateRef("editor");
const { isDark } = useData();

const emit = defineEmits(["input"]);
const props = defineProps({
  value: { type: String, default: "" },
  language: { type: String, required: true },
});

function getLanguage() {
  switch (props.language) {
    case "html":
      return html();
    case "handlebars":
      return html(); // TODO Port code-mirror handlebars-lang to v6
    default:
      return javascript(); // TODO Fix highlighting of JS objects
  }
}

onMounted(() => {
  const extensions = [
    minimalSetup,
    getLanguage(),
    EditorView.updateListener.of((viewUpdate) => {
      emit("input", viewUpdate.state.doc.toString());
    }),
  ];
  if (isDark.value) extensions.push(oneDark);

  new EditorView({
    extensions,
    parent: unref(editor),
    doc: props.value,
  });
});
</script>

<style scoped>
.container {
  padding: 2.2rem 5px 5px 5px;
}
:deep(.cm-editor) {
  background-color: var(--vp-c-bg-soft);
}
</style>
