<template>
  <div class="flex">
    <slot />
  </div>
</template>
<style scoped lang="stylus">
@media (min-width: $MQMobileNarrow) {
    .flex {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        margin-left: -0.5rem;

        > * {
            flex: 1 1 auto;
            margin-left: 0.5rem;
        }
    }
}
</style>
