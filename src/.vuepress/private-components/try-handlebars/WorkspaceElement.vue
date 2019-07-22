<template>
  <workspace-element-decorator
    v-bind="{ cssClass, headerCssClass, title, canBeRenamed: interactive && canBeRenamed }"
    @renameTo="$emit('renameTo', $event)"
    @delete="$emit('delete', $event)"
  >
    <code-editor
      v-if="interactive && mounted"
      css-class="we-content"
      :value="value"
      :language="language"
      :active="true"
      @input="delegateInputEvent"
    />
    <highlighted-code v-else css-class="we-content" :value="value" :language="language" />
  </workspace-element-decorator>
</template>
<script>
import WorkspaceElementDecorator from "./WorkspaceElementDecorator.vue";
import HighlightedCode from "./HighlightedCode.vue";

export default {
  components: { HighlightedCode, "code-editor": () => import("./CodeEditor.vue"), WorkspaceElementDecorator },
  props: {
    title: { type: String, required: true },
    value: { type: String, default: "" },
    cssClass: { type: String, default: "" },
    headerCssClass: { type: String, default: "" },
    language: { type: String, required: true },
    interactive: { type: Boolean, required: true },
    canBeRenamed: { type: Boolean, default: false }
  },
  data() {
    return {
      mounted: false
    };
  },
  beforeMount() {
    this.$data.mounted = true;
  },
  methods: {
    delegateInputEvent(newCode) {
      this.$emit("input", newCode);
    }
  }
};
</script>
<style lang="stylus">

.we-content,
    // fix for conflicting styles of vuepress default-theme: declare more specific style
.theme-default-content .we-content {
    margin: 0;
    line-height: 1.5em;
    flex: 1 1 100%;
    white-space: pre-wrap;
    overflow-x: auto;
    height: 100%;
    box-sizing: border-box;
    border-radius: 0;
    padding: $weContentPaddingTop $weContentPadding $weContentPadding $weContentPadding
    background-color: $weContentBgColor
}
</style>
