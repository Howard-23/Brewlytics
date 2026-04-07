<script setup lang="ts">
import type { PageStat } from '~/types/brewlytics'

defineProps<{
  items: PageStat[]
}>()
</script>

<template>
  <div class="data-grid grid-cols-1 md:grid-cols-3">
    <BaseCard v-for="item in items" :key="item.label">
      <p class="text-sm font-medium text-stone-500">
        {{ item.label }}
      </p>
      <p class="mt-4 font-display text-3xl font-semibold text-ink">
        {{ item.value }}
      </p>
      <p class="mt-3 text-sm leading-6 text-stone-600">
        {{ item.note }}
      </p>
    </BaseCard>
  </div>
</template>
