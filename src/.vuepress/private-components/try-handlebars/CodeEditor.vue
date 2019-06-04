<template>
    <ClientOnly>
        <div :class="cssClass">
            <code-mirror :value="value" @change="onCodeChanged" :options="codeMirrorOptions"/>
        </div>
    </ClientOnly>
</template>
<script>
    import CodeMirror from 'vue-cm'
    import 'codemirror/mode/javascript/javascript.js'
    import 'codemirror/mode/handlebars/handlebars'
    import 'codemirror/mode/xml/xml'

    export default {
        components: {CodeMirror},
        props: ["value", "cssClass", "language"],
        data() {
            return {
                frozenValue: null
            };
        },
        computed: {
            codeMirrorOptions() {
                return {
                    mode: languageToModeMapping[this.language],
                    theme: 'base16-dark',
                    lineWrapping: true
                }
            }
        },
        methods: {
            onCodeChanged(newValue) {
                this.$emit('input', newValue)
            },
        }
    };

    const languageToModeMapping = {
        'handlebars': {
            name: 'handlebars'
        },
        'json': {
            name: 'javascript',
        },
        'javascript': {
            name: 'javascript'
        },
        'html': {
            name: 'xml',
            html: true
        }
    }


</script>
<style lang="stylus">
    @import '~codemirror/lib/codemirror.css'
    @import '~codemirror/theme/base16-dark.css'

    .cm-s-base16-dark.CodeMirror {
        background: none;
        height: auto;
        overflow: hidden;
    }
</style>
