<template>
  <div class="flex">
    <slot />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.flex > :deep(*) {
  flex: 1 1 auto;
}
</style>
