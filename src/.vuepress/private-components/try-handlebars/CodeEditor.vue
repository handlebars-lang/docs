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
    import select from "selection-range";
    import hljsHandlebars from "highlight.js/lib/languages/handlebars";
    import hljsJavaScript from "highlight.js/lib/languages/javascript";
    import hljsXml from "highlight.js/lib/languages/xml";
    import "highlight.js/styles/a11y-dark.css";

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
                return this.code
            }
        },
        methods: {
            keyup() {
                this.updateSelection();
                if (this.$props.active) {
                    this.code = this.$refs.codeElement.innerText;
                    this.$emit("input", this.code);
                }
            },
            insertEnter() {
                document.execCommand("insertHTML", false, "\n");
                const currentSelection = select(this.$refs.codeElement);
                if (currentSelection.start === this.selection.start) {
                    // sometimes, we have to insert another "\n" to make the cursor go to the next line
                    document.execCommand("insertHTML", false, "\n");
                }
            },
            updateSelection() {
                this.selection = select(this.$refs.codeElement);
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
                        select(this.$refs.codeElement, this.selection);
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
