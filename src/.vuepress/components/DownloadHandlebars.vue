<template>
    <a :href="href"><slot></slot></a>
</template>
<script>
    export default {
        props: [
            'type'
        ],
        data() {
            const version = this.$handlebarsVersions.latest
            return {
                urlForType: {
                    full: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/${version}/handlebars.min.js`,
                    runtime: `https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/${version}/handlebars-runtime.min.js`,
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
