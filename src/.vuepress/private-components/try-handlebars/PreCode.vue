<template>
    <pre :class="styleClass"><code><slot></slot></code></pre>
</template>
<script>
    export default {
        props: [
            'codeHtml',
            'styleClass'
        ],
    }
</script>