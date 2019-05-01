<template>
    <div class="workspace">
        <!-- TODO: Remove comment when interactivity is implemented -->
        <!-- <div class="workspace-header">
            <div class="version-chooser">
                Handlebars: <handlebars-version-chooser />
            </div>
        </div> -->
        <div class="workspace-row">
            <workspace-element 
                title="Template"
                styleClass="workspace-template"
                :prerenderedValue="currentExample.template.html" 
                language="handlebars"
                :value="currentExample.template.raw"
            />
            <workspace-element 
                v-for="partial in currentExample.partials" :key="partial.name"
                :title="'{{> ' + partial.name + '}}'"
                styleClass="workspace-partial"
                language="handlebars"
                :prerenderedValue="partial.html" 
                :value="partial.raw"
            />
        </div>
        <div class="workspace-row">
            <workspace-element 
                title="Input"
                styleClass="workspace-input"
                language="json"
                :prerenderedValue="currentExample.input.html" 
                :value="currentExample.input.raw"
            />
            <workspace-element 
                title="Output"
                styleClass="workspace-output"
                language="html"
                :prerenderedValue="currentExample.output.html" 
                :value="currentExample.output.raw"
            />
        </div>
    </div>
</template>
<script>
    import Layout from '@theme/layouts/Layout.vue'
    import WorkspaceElement from './WorkspaceElement.vue'
    import HandlebarsVersionChooser from './HandlebarsVersionChooser.vue'
   
    export default {
        components: {Layout, WorkspaceElement, HandlebarsVersionChooser},
        props: [
            'parsedExample'
        ],
        data() {
            return {
            }
        },
        computed: {
            currentExample() {
                // TODO: Choose an updated example once interactivity 
                // is implemented
                return this.$props.parsedExample
            }
        }
    }
</script>
<style lang="stylus">

    .workspace-header {
        margin: $exampleWorkspaceDefaultMargin;   
        background-color: #fff;
        padding: 0.5rem;
    }

    .workspace-row {
        display: flex;
        flex-wrap: wrap;
    }
</style>
