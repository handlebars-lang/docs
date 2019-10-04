<template>
  <div class="flex">
    <slot />
  </div>
</template>
<style scoped lang="stylus">
.flex {
    display: flex;
    align-items: stretch;

    > * {
        flex: 1 1 auto;
        margin-left: 0.5rem;
    }

    > *:first-child {
        margin-left: 0;
    }
}
</style>
