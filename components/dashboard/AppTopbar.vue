<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

const { exportReport, selectedChannelLabel, syncDashboard, syncedAt } = useBrewlyticsWorkspace()

const syncLabel = computed(() =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(syncedAt.value))
)
</script>

<template>
  <header class="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
    <div class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.26em] text-roast/65">
        Brewlytics OS
      </p>
      <h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
        {{ description }}
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-3 self-start sm:self-auto">
      <button
        type="button"
        class="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-right shadow-panel transition hover:border-roast/15 hover:bg-white"
        @click="syncDashboard"
      >
        <p class="text-xs uppercase tracking-[0.18em] text-stone-500">
          Live sync
        </p>
        <p class="mt-1 text-sm font-semibold text-ink">
          Updated {{ syncLabel }}
        </p>
      </button>
      <div class="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-panel">
        <p class="text-xs uppercase tracking-[0.18em] text-stone-500">
          Active view
        </p>
        <p class="mt-1 text-sm font-semibold text-ink">
          {{ selectedChannelLabel }}
        </p>
      </div>
      <button
        type="button"
        class="rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-foam transition hover:bg-roast"
        @click="exportReport"
      >
        Export report
      </button>
    </div>
  </header>
</template>
