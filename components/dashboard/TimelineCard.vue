<script setup lang="ts">
import type { TimelineEvent } from '~/types/brewlytics'

withDefaults(defineProps<{
  items: TimelineEvent[]
  showAction?: boolean
}>(), {
  showAction: true
})

const emit = defineEmits<{
  log: []
}>()
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          Shift timeline
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          Operational checkpoints pulled from the live store feed.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <BaseBadge tone="neutral">
          Today
        </BaseBadge>
        <button
          v-if="showAction"
          type="button"
          class="rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam"
          @click="emit('log')"
        >
          Log update
        </button>
      </div>
    </div>

    <div class="mt-8 space-y-6">
      <div
        v-for="item in items"
        :key="`${item.time}-${item.title}`"
        class="grid gap-4 sm:grid-cols-[72px,1fr]"
      >
        <div class="text-sm font-semibold text-roast">{{ item.time }}</div>
        <div class="relative rounded-[24px] border border-white/80 bg-white/70 p-5">
          <span class="absolute -left-2 top-6 hidden h-4 w-4 rounded-full border-4 border-mist bg-roast sm:block" />
          <h4 class="text-base font-semibold text-ink">{{ item.title }}</h4>
          <p class="mt-2 text-sm leading-6 text-stone-600">{{ item.body }}</p>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
