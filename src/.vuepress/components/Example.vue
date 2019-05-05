<template>
    <div>
        <router-link class="example-show-in-playground" :to="normalizedPath">Open in interactive playground!</router-link>
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
<style lang="stylus">
    .example-show-in-playground {
        margin-left: $weContentPadding;
        color: white;
        font-size: 0.8rem;
        padding: $weContentPadding;
        background-color: $baseColor;
    }
</style>
