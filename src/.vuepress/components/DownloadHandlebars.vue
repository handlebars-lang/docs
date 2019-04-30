<template>
    <a :href="href"><slot></slot></a>
</template>
<script>
    export default {
        props: [
            'type'
        ],
        data() {
            const handlebarsVersions = this.$handlebarsVersions
            return {
                urlForType: {
                    awsFull: `http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v${handlebarsVersions.latest}.js`,
                    awsRuntime: `http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars.runtime-v${handlebarsVersions.latest}.js`,
                }
            }
        },
        computed: {
            href() {
                const url = this.urlForType[this.$props.type];
                if (url == null) {
                    throw new Error("Unkown url type for DownloadHandlebars: " + this.$props.type)
                }
                return url
            }
        }
    }
</script>
<style>
    
</style>
