<template>
  <pre
    @keyup="keyup"
    @keydown.13.prevent="insertEnter"
    @mouseup="updateSelection"
    ref="container"
    :class="cssClass"
  ><code :contenteditable="active" spellcheck="false" :class="codeElementCssClass" ref="codeElement"
         v-html="codeHtml"></code></pre>
</template>
<script>
import Vue from "vue";
import hljs from "highlight.js/lib/highlight";
import hljsHandlebars from "highlight.js/lib/languages/handlebars";
import hljsJavaScript from "highlight.js/lib/languages/javascript";
import hljsXml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/a11y-dark.css";

// selectionRange needs browser-APIs on import, load lazy and not in prerendering phase
let selectionRange = function() {};
if (typeof window !== "undefined") {
  import("selection-range").then((module) => {
    selectionRange = module.default
  });
}

hljs.registerLanguage("handlebars", hljsHandlebars);
hljs.registerLanguage("xml", hljsXml);
hljs.registerLanguage("javascript", hljsJavaScript);

const languageMapping = {
  json: "javascript",
  html: "xml",
  handlebars: "handlebars"
};

export default {
  props: ["value", "cssClass", "language", "active"],
  data() {
    return {
      code: this.$props.value,
      selection: null
    };
  },
  mounted() {
    this.keyup = debounce(this.keyup, 1000, { leading: true, trailing:true });
  },
  computed: {
    codeElementCssClass() {
      return ["ce-code-content", "hljs", this.hljsLanguage];
    },
    hljsLanguage() {
      return languageMapping[this.$props.language];
    },
    codeHtml() {
      if (this.hljsLanguage) {
        return hljs.highlight(this.hljsLanguage, this.code).value;
      }
      return this.code;
    }
  },
  methods: {
    keyup() {
      console.log(this.$refs.codeElement.innerText);
      this.updateSelection();
      if (this.$props.active) {
        this.code = this.$refs.codeElement.innerText;
        this.$emit("input", this.code);
      }
    },
    insertEnter() {
      document.execCommand("insertHTML", false, "\n");
      const currentSelection = selectionRange(this.$refs.codeElement);
      if (currentSelection.start === this.selection.start) {
        // sometimes, we have to insert another "\n" to make the cursor go to the next line
        document.execCommand("insertHTML", false, "\n");
      }
    },
    updateSelection() {
      this.selection = selectionRange(this.$refs.codeElement);
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== this.code) {
        this.code = newVal;
      }
    },
    codeHtml() {
      Vue.nextTick(() => {
        if (this.selection != null) {
          selectionRange(this.$refs.codeElement, this.selection);
        }
      });
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
