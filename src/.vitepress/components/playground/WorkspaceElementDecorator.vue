<template>
  <div class="workspace-element">
    <div
      ref="title"
      class="we-header"
      :contenteditable="canBeRenamed"
      @keydown.enter.prevent="titleChanged"
      @blur="titleChanged"
      v-text="title"
    />
    <div class="we-actions">
      <button v-if="canBeRenamed" class="we-action we-rename" @click="focusAndSelectTitle()">[rename]</button>
      <button v-if="canBeRenamed" class="we-action" @click="$emit('delete')">[delete]</button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cssClass: {
      type: String,
      default: "",
    },
    headerCssClass: {
      type: String,
      default: "",
    },
    canBeRenamed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    titleChanged() {
      if (this.canBeRenamed) {
        this.$emit("renameTo", this.$refs.title.innerText);
      }
    },
    focusAndSelectTitle() {
      this.$refs.title.focus();
      const range = document.createRange();
      range.selectNodeContents(this.$refs.title);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    },
  },
};
</script>

<style>
.workspace-element {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  flex: 1 1 30%;
  min-width: 20em;
  min-height: 4rem;
  border-radius: 4px;
}

.we-header {
  position: absolute;
  font-family: monospace;
  font-size: small;
  right: 4px;
  top: 4px;
  border: 1px solid var(--vp-c-default-2);
  border-radius: 2px;
  padding: 0.1rem 0.6rem;
  z-index: 10;
}

.we-actions {
  position: absolute;
  font-family: monospace;
  left: 0.2rem;
  top: 0;
  text-align: right;
  margin: 0;
  z-index: 10;
}
.we-actions > .we-action {
  font-size: small;
  font-weight: 700;
  padding: 0.2rem;
}
</style>
