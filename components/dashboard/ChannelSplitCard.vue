<script setup lang="ts">
import type { ChannelSplit } from '~/types/brewlytics'

const props = defineProps<{
  title: string
  subtitle: string
  items: ChannelSplit[]
  selectedChannel: string
}>()

const emit = defineEmits<{
  'select-channel': [value: string]
}>()

const gradient = computed(() => {
  let progress = 0

  return `conic-gradient(${props.items
    .map((item) => {
      const start = progress
      progress += item.value
      return `${item.color} ${start}% ${progress}%`
    })
    .join(', ')})`
})

const selectedShare = computed(() => {
  if (props.selectedChannel === 'All') {
    return 100
  }

  return props.items.find((item) => item.label === props.selectedChannel)?.value ?? 0
})
</script>

<template>
  <BaseCard>
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          {{ title }}
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          {{ subtitle }}
        </p>
      </div>
      <BaseBadge tone="neutral">
        4 channels
      </BaseBadge>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-[200px,1fr] md:items-center">
      <div class="mx-auto flex h-44 w-44 items-center justify-center rounded-full" :style="{ background: gradient }">
        <div class="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-foam text-center shadow-panel">
          <span class="text-xs uppercase tracking-[0.2em] text-stone-500">{{ selectedChannel === 'All' ? 'Blend' : 'Focus' }}</span>
          <span class="mt-1 font-display text-2xl font-semibold text-ink">{{ selectedShare }}%</span>
        </div>
      </div>
      <div class="space-y-4">
        <button
          v-for="item in items"
          :key="item.label"
          type="button"
          class="flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition"
          :class="selectedChannel === item.label ? 'border-roast/20 bg-roast text-foam' : 'border-white/80 bg-white/70 hover:border-roast/15 hover:bg-white'"
          @click="emit('select-channel', selectedChannel === item.label ? 'All' : item.label)"
        >
          <div class="flex items-center gap-3">
            <span class="h-3 w-3 rounded-full" :style="{ backgroundColor: item.color }" />
            <span class="text-sm font-semibold" :class="selectedChannel === item.label ? 'text-foam' : 'text-ink'">{{ item.label }}</span>
          </div>
          <span class="text-sm font-semibold" :class="selectedChannel === item.label ? 'text-foam/80' : 'text-stone-500'">{{ item.value }}%</span>
        </button>
      </div>
    </div>
  </BaseCard>
</template>
