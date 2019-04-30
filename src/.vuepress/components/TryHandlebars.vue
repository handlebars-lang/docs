<template>
<div>
    <Layout>
        <template v-slot:page-top>
            <div class="content default">
                <p>dies ist ein test</p>
            </div>
        </template>
    </Layout>
</div>
</template>
<script>
    import Layout from '@theme/layouts/Layout.vue'
    export default {
        components: {Layout},
        props: [
            'examplePath'
        ],
        async mounted() {
        },
        data() {
            return {
                loaded: false

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
