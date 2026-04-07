<script setup lang="ts">
import type { InsightNote } from '~/types/brewlytics'

defineProps<{
  items: InsightNote[]
}>()

const emit = defineEmits<{
  apply: [title: string]
}>()
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          Smart recommendations
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          Signals translated into practical next actions for the team.
        </p>
      </div>
      <BaseBadge tone="accent">
        AI summary
      </BaseBadge>
    </div>

    <div class="mt-6 space-y-4">
      <article
        v-for="item in items"
        :key="item.title"
        class="rounded-[24px] border border-white/80 bg-white/70 p-5"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-roast/70">
          {{ item.label }}
        </p>
        <h4 class="mt-3 text-lg font-semibold text-ink">
          {{ item.title }}
        </h4>
        <p class="mt-3 text-sm leading-6 text-stone-600">
          {{ item.body }}
        </p>
        <div class="mt-4 flex justify-end">
          <button
            type="button"
            class="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition"
            :class="item.applied ? 'bg-sage/15 text-pine' : 'bg-ink text-foam hover:bg-roast'"
            :disabled="item.applied"
            @click="emit('apply', item.title)"
          >
            {{ item.applied ? 'Applied' : 'Apply playbook' }}
          </button>
        </div>
      </article>
    </div>
  </BaseCard>
</template>
