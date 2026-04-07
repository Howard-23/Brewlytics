<script setup lang="ts">
const {
  applyInsight,
  currentInsights,
  filteredInventory,
  inventoryStats,
  inventoryStatusFilter,
  logShiftUpdate,
  restockItem,
  setInventoryStatusFilter,
  timelineEntries
} = useBrewlyticsWorkspace()

const urgentCount = computed(() => filteredInventory.value.filter((item) => item.status === 'Critical').length)

useSeoMeta({
  title: 'Inventory',
  description: 'Inventory management for Brewlytics.'
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <AppTopbar
      title="Inventory visibility that protects margin and service."
      description="Keep ingredients, packaging, and vendor timing aligned with real demand so stockouts and waste stay rare."
    />

    <PageHero
      eyebrow="Stock intelligence"
      title="Balance freshness, availability, and vendor reliability in one operating view."
      description="Filter stock health, trigger replenishment, and let the metrics react immediately."
    />

    <StatStrip :items="inventoryStats" />

    <section class="data-grid grid-cols-1 xl:grid-cols-[1.3fr,0.9fr]">
      <InventoryList
        :items="filteredInventory"
        :status-filter="inventoryStatusFilter"
        :urgent-count="urgentCount"
        @restock="restockItem"
        @update:status-filter="setInventoryStatusFilter"
      />
      <InsightPanel :items="currentInsights" @apply="applyInsight" />
    </section>

    <TimelineCard :items="timelineEntries" @log="logShiftUpdate" />
  </div>
</template>
