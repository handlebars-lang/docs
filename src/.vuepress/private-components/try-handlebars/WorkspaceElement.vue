<template>
    <workspace-element-decorator :css-class="cssClass" :title="title">
        <code-editor css-class="we-content" :value="value" @input="updateCode" :language="language"
                     :active="interactive"/>
    </workspace-element-decorator>
</template>
<script>
    import CodeEditor from "./CodeEditor.vue";
    import WorkspaceElementDecorator from './WorkspaceElementDecorator.vue'

    export default {
        components: {CodeEditor, WorkspaceElementDecorator},
        props: [
            "title",
            "value",
            "cssClass",
            "language",
            "interactive"
        ],
        data() {
            return {
                currentExampleState: {},
                code: null,
                caret: 0
            };
        },
        mounted() {
        },
        computed: {
            prismaElementCssClass() {
                return ["we-content", `language-${this.$props.language}`];
            },
        },
        methods: {
            updateCode(newCode) {
                this.$emit('input', newCode)
            },

        },
        beforeMount() {
            this.currentExampleState = this.$props.parsedExample;
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
