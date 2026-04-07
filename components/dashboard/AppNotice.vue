<script setup lang="ts">
const { dismissNotice, notice } = useBrewlyticsWorkspace()

const toneClass = computed(() => {
  switch (notice.value?.tone) {
    case 'success':
      return 'border-sage/25 bg-sage/10 text-pine'
    case 'warning':
      return 'border-crema/50 bg-crema/20 text-roast'
    default:
      return 'border-white/80 bg-white/70 text-stone-700'
  }
})
</script>

<template>
  <div
    v-if="notice"
    class="mb-6 flex items-start justify-between gap-4 rounded-[24px] border px-4 py-4 shadow-panel sm:mb-8 sm:px-5"
    :class="toneClass"
  >
    <div>
      <p class="text-xs font-semibold uppercase tracking-[0.18em]">
        Activity
      </p>
      <p class="mt-2 text-sm leading-6">
        {{ notice.message }}
      </p>
    </div>
    <button
      type="button"
      class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-stone-900/5"
      @click="dismissNotice"
    >
      Dismiss
    </button>
  </div>
</template>
