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
      required: true,
    },
  },
};
</script>

<style scoped>
.workspace-error {
  border: 2px solid red;
  border-radius: 4px;
  padding: 2rem;
}
</style>
