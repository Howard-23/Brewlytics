<script setup lang="ts">
import type { RevenuePoint } from '~/types/brewlytics'

const props = defineProps<{
  title: string
  subtitle: string
  points: RevenuePoint[]
}>()

const width = 420
const height = 220
const padding = 18

const maxValue = computed(() => Math.max(...props.points.map((point) => point.value), 1))

const coordinates = computed(() =>
  props.points.map((point, index) => {
    const x = padding + (index * (width - padding * 2)) / Math.max(props.points.length - 1, 1)
    const y = height - padding - (point.value / maxValue.value) * (height - padding * 2)
    return { ...point, x, y }
  })
)

const linePath = computed(() =>
  coordinates.value
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')
)

const areaPath = computed(() => {
  const first = coordinates.value[0]
  const last = coordinates.value[coordinates.value.length - 1]

  if (!first || !last) {
    return ''
  }

  return `${linePath.value} L ${last.x} ${height - padding} L ${first.x} ${height - padding} Z`
})
</script>

<template>
  <BaseCard>
    <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          {{ subtitle }}
        </p>
      </div>
      <BaseBadge tone="accent">
        Live curve
      </BaseBadge>
    </div>

    <div class="mt-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-roast/5 p-4 sm:p-5">
      <svg
        viewBox="0 0 420 220"
        class="h-52 w-full"
        fill="none"
        role="img"
        aria-label="Trend chart"
      >
        <defs>
          <linearGradient id="brewlyticsArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5f3b2a" stop-opacity="0.24" />
            <stop offset="100%" stop-color="#5f3b2a" stop-opacity="0.04" />
          </linearGradient>
        </defs>
        <line
          v-for="index in 4"
          :key="index"
          x1="0"
          :y1="index * 44"
          x2="420"
          :y2="index * 44"
          stroke="rgba(95, 59, 42, 0.08)"
          stroke-dasharray="4 8"
        />
        <path :d="areaPath" fill="url(#brewlyticsArea)" />
        <path :d="linePath" stroke="#5f3b2a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <circle
          v-for="point in coordinates"
          :key="point.label"
          :cx="point.x"
          :cy="point.y"
          r="5"
          fill="#fffaf2"
          stroke="#5f3b2a"
          stroke-width="3"
        />
      </svg>
      <div class="mt-3 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
        <span v-for="point in points" :key="point.label">{{ point.label }}</span>
      </div>
    </div>
  </BaseCard>
</template>
