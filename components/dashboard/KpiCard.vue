<script setup lang="ts">
import type { KpiMetric } from '~/types/brewlytics'

const props = defineProps<{
  metric: KpiMetric
}>()

const deltaTone = computed(() => {
  if (props.metric.delta > 0) {
    return props.metric.tone === 'ember' ? 'text-ember' : 'text-pine'
  }

  return 'text-ember'
})

const surfaceTone = computed(() => {
  switch (props.metric.tone) {
    case 'sage':
      return 'from-sage/18 to-white'
    case 'ember':
      return 'from-ember/18 to-white'
    default:
      return 'from-roast/16 to-white'
  }
})
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="rounded-[24px] bg-gradient-to-br p-5" :class="surfaceTone">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-sm font-medium text-stone-500">
            {{ metric.title }}
          </p>
          <p class="mt-3 font-display text-3xl font-semibold text-ink">
            {{ metric.value }}
          </p>
        </div>
        <BaseBadge :tone="metric.delta >= 0 ? 'success' : 'danger'">
          {{ metric.delta >= 0 ? '+' : '' }}{{ metric.delta }}%
        </BaseBadge>
      </div>
      <p class="mt-6 text-sm leading-6 text-stone-600">
        {{ metric.description }}
      </p>
      <p class="mt-4 text-xs font-semibold uppercase tracking-[0.2em]" :class="deltaTone">
        {{ metric.delta >= 0 ? 'Growing faster than target' : 'Needs attention' }}
      </p>
    </div>
  </BaseCard>
</template>
