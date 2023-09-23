<template>
  <workspace-element-decorator
    v-bind="{ title, canBeRenamed: interactive && canBeRenamed }"
    @renameTo="$emit('renameTo', $event)"
    @delete="$emit('delete', $event)"
  >
    <code-editor v-if="interactive && mounted" :value="modelValue" :language="language" @input="delegateInputEvent" />
    <highlighted-code v-else :value="modelValue" :language="language" />
  </workspace-element-decorator>
</template>
<script>
import { defineAsyncComponent } from "vue";
import WorkspaceElementDecorator from "./WorkspaceElementDecorator.vue";
import HighlightedCode from "./HighlightedCode.vue";

export default {
  components: {
    HighlightedCode,
    "code-editor": defineAsyncComponent(() => import("./CodeEditor.vue")),
    WorkspaceElementDecorator,
  },
  props: {
    modelValue: { type: String, default: "" },
    title: { type: String, required: true },
    language: { type: String, required: true },
    interactive: { type: Boolean, required: true },
    canBeRenamed: { type: Boolean, default: false },
  },
  data() {
    return {
      mounted: false,
    };
  },
  beforeMount() {
    this.$data.mounted = true;
  },
  methods: {
    delegateInputEvent(newCode) {
      this.$emit("input", newCode);
      this.$emit("update:model-value", newCode);
    },
  },
};
</script>
