<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-roast/70">
        {{ eyebrow }}
      </p>
      <h2 class="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {{ title }}
      </h2>
      <p class="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
        {{ description }}
      </p>
    </div>
    <slot name="action" />
  </div>
</template>
