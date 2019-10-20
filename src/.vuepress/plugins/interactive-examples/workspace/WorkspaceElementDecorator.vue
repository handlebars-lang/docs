<template>
  <div :class="['workspace-element', cssClass]">
    <div
      ref="title"
      :class="['we-header', headerCssClass]"
      :contenteditable="canBeRenamed"
      @keydown.enter.prevent="titleChanged"
      @blur="titleChanged"
      v-text="title"
    />
    <div class="we-actions">
      <span v-if="canBeRenamed" class="we-action we-rename" @click="focusAndSelectTitle()">[rename]</span>
      <span v-if="canBeRenamed" class="we-action " @click="$emit('delete')">[delete]</span>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    cssClass: {
      type: String,
      default: ""
    },
    headerCssClass: {
      type: String,
      default: ""
    },
    canBeRenamed: {
      type: Boolean,
      default: false
    }
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
    }
  }
};
</script>
<style lang="stylus">

.workspace-element {
    position: relative;
    box-shadow: 0 0 5px;
    margin: 0.5rem;
    flex: 1 1 30%;
    min-width: 20em;
}

.we-header {
    font-size: $weHeaderHeight;
    color: $weHeaderColor;
    position: absolute
    font-family: monospace;
    right: 0
    border: 1px solid darken($weHeaderColor, 50%)
    top: 0
    text-align: right
    padding: $weHeaderMargin
    margin: 0
    z-index: 10
    background: radial-gradient(ellipse at center, alpha($weHeaderColor, 0.25) 0%, alpha($weHeaderColor, 0) 90%);
}

.we-actions {
  font-size: $weHeaderHeight;
  color: $weHeaderColor;
  position: absolute
  font-family: monospace;
  left: 0
  top: 0
  text-align: right
  padding: $weHeaderMargin
  margin: 0
  z-index: 10

  > .we-action {
    font-size: 80%;
    font-weight: 700;
    padding: 0.25rem;

    &:hover {
      background-color: darken($weHeaderColor, 50%)
      color: black;

    }
  }
}
</style>
