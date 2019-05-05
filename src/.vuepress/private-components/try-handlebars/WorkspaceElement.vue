<template>
    <workspace-element-decorator :css-class="cssClass" :title="title">
        <code-editor
                v-if="interactive"
                css-class="we-content"
                :value="value"
                @input="delegateInputEvent"
                :language="language"
                :active="true"
        />
        <highlighted-code
                v-else
                css-class="we-content"
                :value="value"
                :language="language"
        />
    </workspace-element-decorator>
</template>
<script>
    import WorkspaceElementDecorator from "./WorkspaceElementDecorator.vue";
    import HighlightedCode from "./HighlightedCode.vue";

    export default {
        components: {HighlightedCode, "code-editor": () => import("./CodeEditor.vue"), WorkspaceElementDecorator},
        props: ["title", "value", "cssClass", "language", "interactive"],
        methods: {
            delegateInputEvent(newCode) {
                this.$emit("input", newCode);
            }
        }
    };
</script>
<style lang="stylus">

    pre.we-content,
        // fix for intervening styles of vuepress default-theme
    .content pre.we-content {
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.5em;
        padding: 0;

        flex: 1 1 100%;
        white-space: pre-wrap;
        overflow-x: auto;
        height: 100%;
        border-radius: 0;

        > code {
            padding: $weContentPaddingTop $weContentPadding $weContentPadding $weContentPadding
            background-color: $weContentBgColor
        }
    }
</style>
