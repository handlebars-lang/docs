<template>
  <highlighted-code
    :value="actuallyDisplayedValue"
    ref="codeElement"
    :contenteditable="true"
    :css-class="cssClass"
    :language="language"
    @keyup="emitInputEvent"
    @keydown.exact.enter.prevent="insertNewline"
    @keydown.exact.tab.prevent="insertTab"
    @keydown.shift.tab.prevent="deindentLine"
    @compositionstart="freezeCurrentValue"
    @compositionend="unfreezeCurrentValue"
    @beforeUpdateHtml="preserveSelection"
  />
</template>
<script>
import Vue from "vue";
import HighlightedCode from "./HighlightedCode.vue";
import { getSelection, setSelection } from "./selectionRange";

export default {
  components: { HighlightedCode },
  props: ["value", "cssClass", "language"],
  data() {
    return {
      frozenValue: null
    };
  },
  mounted() {
    this.codeElement = this.$refs.codeElement.$el;
  },
  computed: {
    actuallyDisplayedValue() {
      return this.frozenValue || this.$props.value;
    }
  },
  methods: {
    freezeCurrentValue() {
      this.frozenValue = this.$props.value;
    },
    unfreezeCurrentValue() {
      this.frozenValue = null;
      this.emitInputEvent();
    },
    emitInputEvent() {
      this.$emit("input", this.codeElement.innerText);
    },
    blur() {
      this.enableInputEvents();
      this.emitInputEvent();
    },
    preserveSelection() {
      if (this.codeElement == null) {
        return;
      }
      const selection = getSelection(this.codeElement);
      if (selection == null) {
        return;
      }
      // when redrawing is done, restore the selection
      Vue.nextTick(() => setSelection(this.codeElement, selection));
    },
    insertNewline() {
      const selectionBefore = getSelection(this.codeElement);
      document.execCommand("insertHTML", false, "\n");
      const selectionAfter = getSelection(this.codeElement);
      if (selectionBefore.start === selectionAfter.start) {
        // sometimes, we have to insert another "\n" to make the cursor go to the next line
        document.execCommand("insertHTML", false, "\n");
      }
    },
    insertTab() {
      document.execCommand("insertHTML", false, "\t");
    },
    deindentLine() {
      // TODO: Not yet implemented
    }
  }
};
</script>
<style lang="stylus">
code.ce-code-content {
    height: 100%;
    box-sizing: border-box;
}
</style>
