<template>
    <div :class="[ 'workspace-element', cssClass ]">
        <div class="we-header">{{title}}</div>
        <pre-code :styleClass="prismaElementCssClass" v-html="prerenderedValue" />
    </div>
</template>
<script>
    import PreCode from './PreCode.vue'
   
    export default {
        components: {PreCode},
        props: [
            'title',
            'prerenderedValue',
            'value',
            'cssClass',
            'language'
        ],
        data() {
            return {
                currentExampleState: {}
            }
        },
        computed: {
            prismaElementCssClass() {
                return [ 'we-content', `language-${this.$props.language}` ]
            }
        },
        beforeMount() {
            this.currentExampleState = this.$props.parsedExample
        }
    }
</script>
<style lang="stylus">
    .workspace-element {
        box-shadow: 0 0 5px;
        margin: $exampleWorkspaceDefaultMargin;
        background-color: white;
        display: flex;
        flex: 1 1 30%;
        flex-direction: column;
    }

    .we-header {
        padding: $exampleWorkspaceDefaultMargin;
    }

    pre.we-content[class*="language-"] {
        padding: $exampleWorkspaceDefaultPadding;
        margin: 0;
        flex: 1 1 100%;
        white-space: pre-wrap;
        overflow-x: auto;
    }
</style>