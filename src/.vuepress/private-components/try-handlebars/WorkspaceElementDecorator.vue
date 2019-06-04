<template>
    <div :class="['workspace-element', cssClass]">
        <div class="we-header">{{ title }}</div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: [
            "title",
            "cssClass",
        ],
    };
</script>
<style lang="stylus">

    .workspace-element {
        position: relative;
        box-shadow: 0 0 5px;
        margin: 0.5rem;
        flex: 1 1 30%;
        min-width: 20em;
    }

    .we-header {
        font-size: $weHeaderHeight;
        color: $weHeaderColor;
        position: absolute
        font-family: monospace;
        right: 0
        border: 1px solid darken($weHeaderColor, 50%)
        top: 0
        text-align: right
        padding: $weHeaderMargin
        margin: 0
        z-index: 10
        background: radial-gradient(ellipse at center, alpha($weHeaderColor, 0.25) 0%, alpha($weHeaderColor, 0) 90%);
    }
</style>
