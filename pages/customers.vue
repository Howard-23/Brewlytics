<script setup lang="ts">
const {
  applyInsight,
  currentInsights,
  customerStats,
  focusedSegment,
  segments,
  setFocusedSegment
} = useBrewlyticsWorkspace()

useSeoMeta({
  title: 'Customers',
  description: 'Customer insights for Brewlytics.'
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <AppTopbar
      title="Customer insight with a retail operator's level of clarity."
      description="Understand which guests return, what raises basket size, and which behaviors deserve targeted retention plays."
    />

    <PageHero
      eyebrow="Guest intelligence"
      title="Tie loyalty, visit cadence, and spend behavior back to practical action."
      description="Customer insight is organized around segments and measurable opportunities so store and growth teams can act from the same source of truth."
    />

    <StatStrip :items="customerStats" />

    <SegmentCards :items="segments" :focused-segment="focusedSegment" @focus="setFocusedSegment" />

    <InsightPanel :items="currentInsights" @apply="applyInsight" />
  </div>
</template>
