<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="grid gap-6 lg:grid-cols-[1.5fr,0.9fr] lg:items-end">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-roast/70">
          {{ eyebrow }}
        </p>
        <h2 class="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
          {{ description }}
        </p>
      </div>

      <div class="rounded-[28px] bg-ink p-5 text-foam">
        <p class="text-xs uppercase tracking-[0.18em] text-foam/70">
          Daily briefing
        </p>
        <p class="mt-3 text-sm leading-6 text-foam/80">
          Espresso demand spikes first, pastry attachment follows within 18 minutes, and cold drinks recover the afternoon slump.
        </p>
      </div>
    </div>
  </BaseCard>
</template>
