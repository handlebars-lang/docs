<template>
    <div>
        <router-link :to="normalizedPath">Open example</router-link>
        <workspace :parsedExample="exampleData"/>
    </div>
</template>
<script>
    import Workspace from '../private-components/try-handlebars/Workspace.vue'
    export default {
        components: {Workspace},
        props: [
            'examplePage'
        ],
        computed: {
            exampleData() {
                const pageData = this.findPageByHtmlOrMarkdownPath()
                return pageData.frontmatter.parsedExample
            },
            normalizedPath() {
              return this.$props.examplePage.replace(/\.(html|md)$/,'')+'.html'
            }
        },
        methods: {
            findPageByHtmlOrMarkdownPath() {
                const pageData = this.$site.pages.find((page) => {
                    console.log(page.regularPath)
                    return page.regularPath === this.normalizedPath
                })
                if (pageData == null) {
                    throw new Error(`Page ${normalizedPath} not found`)
                }
                return pageData
            }
        }
    }
</script>
<style>
    
</style>
