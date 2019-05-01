<template>
<div>
    <Layout>
        <template v-slot:page-top>
            <div class="try-handlebars">
                <workspace :parsedExample="$frontmatter.parsedExample"/>
            </div>
        </template>
    </Layout>
</div>
</template>
<script>
    import Layout from '@theme/layouts/Layout.vue'
    import Workspace from '../private-components/try-handlebars/Workspace.vue'

    import HandlebarsVersionChooser from '../private-components/try-handlebars/HandlebarsVersionChooser.vue'
    
    export default {
        components: {Layout, HandlebarsVersionChooser, Workspace},
        data() {
            return {
                code: '',
                codeMirrorOptions: {

                }
            }
        },
        computed: {
        }
    }
</script>
<style lang="stylus">
    .try-handlebars {
        margin-top: $navbarHeight;
    }
</style>
