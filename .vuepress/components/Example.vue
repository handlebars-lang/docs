<template>
<div>
    
</div>
</template>
<script>
    import Layout from '@theme/layouts/Layout.vue'
    export default {
        components: {Layout},
        props: [
            'examplePage'
        ],
        computed: {
            template() {

            },
            exampleData() {
                return findPageByHtmlOrMarkdownPath(this.$props.examplePage)
                .findPageByHtmlOrMarkdownPath
            }
        },
        methods: {
            findPageByHtmlOrMarkdownPath(path) {
                const normalizedPath = path.replace(/\.(html|md)$/,'.html')
                return this.$site.pages.find((page) => {
                    return page.regularPath === normalizedPath
                })
            }
        }
    }
</script>
<style>
    
</style>
