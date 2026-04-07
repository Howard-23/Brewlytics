<script setup lang="ts">
import type { CustomerSegment } from '~/types/brewlytics'

const props = defineProps<{
  items: CustomerSegment[]
  focusedSegment: string
}>()

const emit = defineEmits<{
  focus: [name: string]
}>()
</script>

<template>
  <div class="data-grid grid-cols-1 xl:grid-cols-3">
    <BaseCard
      v-for="item in items"
      :key="item.name"
      class="overflow-hidden"
    >
      <div
        class="rounded-[24px] bg-gradient-to-br p-5 text-foam transition"
        :class="[item.color, focusedSegment === item.name ? 'ring-2 ring-white/70' : '']"
      >
        <p class="text-sm uppercase tracking-[0.18em] text-foam/75">
          Segment
        </p>
        <h3 class="mt-3 font-display text-2xl font-semibold">
          {{ item.name }}
        </h3>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.16em] text-foam/70">Audience</p>
            <p class="mt-2 text-2xl font-semibold">{{ item.count }}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.16em] text-foam/70">Avg spend</p>
            <p class="mt-2 text-2xl font-semibold">{{ item.spend }}</p>
          </div>
        </div>
        <p class="mt-6 text-sm leading-6 text-foam/80">
          {{ item.trend }}
        </p>
        <button
          type="button"
          class="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-white/10"
          @click="emit('focus', item.name)"
        >
          {{ focusedSegment === item.name ? 'Clear focus' : 'Focus segment' }}
        </button>
      </div>
    </BaseCard>
  </div>
</template>
