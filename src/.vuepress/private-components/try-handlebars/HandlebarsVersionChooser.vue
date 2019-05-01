<template>
<select v-model="selected">
    <option disabled value="">Please select one</option>
    <option v-for="version in versions" :key="version" :value="version">{{version}}</option>
</select>
</template>
<script>
    import axios from 'axios'
    import Layout from '@theme/layouts/Layout.vue'
    export default {
        components: {Layout},
        props: [
            'examplePath'
        ],
        data() {
            return {
                versions: this.$handlebarsVersions.allVersions,
                selected: this.$handlebarsVersions.latest
            }
        },
        computed: {
        }
    }
</script>
<style lang="stylus">
</style>
