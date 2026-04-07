<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <section class="glass-panel rounded-[28px] p-5 sm:p-6" v-bind="$attrs">
    <slot />
  </section>
</template>
