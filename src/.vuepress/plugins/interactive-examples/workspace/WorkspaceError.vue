<template>
  <workspace-element-decorator title="Error">
    <div class="workspace-error">
      {{ error.message }}
      <hr />
      {{ error.stack }}
    </div>
  </workspace-element-decorator>
</template>
<script>
import WorkspaceElementDecorator from "./WorkspaceElementDecorator.vue";

export default {
  components: { WorkspaceElementDecorator },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="stylus">

.workspace-error {
    font-size: 0.8rem;
    pading: $we
    white-space: pre-wrap
    color: white;
    border: 3px solid red;
    background-color: #400;
    padding: $weContentPaddingTop $weContentPadding $weContentPadding $weContentPadding
    font-family: monospace;
}
</style>
