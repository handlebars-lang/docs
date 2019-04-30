<template>
<div>
    <Layout>
        <template v-slot:page-top>
            <div class="workspace">
                <handlebars-version-chooser/>
            </div>
        </template>
    </Layout>
</div>
</template>
<script>
    import Layout from '@theme/layouts/Layout.vue'
    import HandlebarsVersionChooser from '../private-components/try-handlebars/HandlebarsVersionChooser.vue'
    export default {
        components: {Layout, HandlebarsVersionChooser},
        props: [
            'examplePath'
        ],
        data() {
            return {
            }
        },
        computed: {
        }
    }
</script>
<style lang="stylus">
    .workspace {
        margin-top: $navbarHeight;
        border: 1px solid black;
    }
</style>
