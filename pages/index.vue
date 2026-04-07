<script setup lang="ts">
const {
  applyInsight,
  channelSplit,
  currentInsights,
  filteredOrders,
  filteredRevenueSeries,
  focusedSegment,
  kpis,
  logShiftUpdate,
  orderSearch,
  setOrderSearch,
  setOrderStatusFilter,
  orderStats,
  orderStatusFilter,
  overviewStats,
  segments,
  selectedChannel,
  setFocusedSegment,
  setSelectedChannel,
  timelineEntries,
  updateOrderStatus
} = useBrewlyticsWorkspace()

const activeOrderCount = computed(() => Number(orderStats.value[0]?.value.replace(/,/g, '') ?? '0'))

useSeoMeta({
  title: 'Overview',
  description: 'Overview dashboard for Brewlytics coffee shop operations.'
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <AppTopbar
      title="Coffee operations, translated into sharp decisions."
      description="Brewlytics connects revenue, queue flow, stock health, and customer behavior in one control layer for modern coffee teams."
    />

    <PageHero
      eyebrow="Operator overview"
      title="See the pulse of every shift without hunting through spreadsheets."
      description="Designed for multi-location coffee brands that need fast answers, cleaner handoffs, and calmer service peaks."
    />

    <StatStrip :items="overviewStats" />

    <section class="data-grid grid-cols-1 xl:grid-cols-[1.4fr,0.9fr]">
      <AreaTrendChart
        title="Revenue momentum"
        subtitle="Seven-day sales performance across the current active dashboard view."
        :points="filteredRevenueSeries"
      />
      <InsightPanel :items="currentInsights" @apply="applyInsight" />
    </section>

    <section class="data-grid grid-cols-1 md:grid-cols-3">
      <KpiCard v-for="metric in kpis" :key="metric.title" :metric="metric" />
    </section>

    <section class="data-grid grid-cols-1 xl:grid-cols-[1.1fr,1fr]">
      <ChannelSplitCard
        title="Sales mix"
        subtitle="Order channel distribution for the current trading window."
        :items="channelSplit"
        :selected-channel="selectedChannel"
        @select-channel="setSelectedChannel"
      />
      <TimelineCard :items="timelineEntries" @log="logShiftUpdate" />
    </section>

    <SectionHeading
      eyebrow="Customer lens"
      title="Segments worth protecting and growing"
      description="Customer insights stay practical: who spends most, who visits often, and where campaigns will compound."
    />

    <SegmentCards :items="segments" :focused-segment="focusedSegment" @focus="setFocusedSegment" />

    <OrderTable
      :items="filteredOrders"
      :active-count="activeOrderCount"
      :search-value="orderSearch"
      :status-filter="orderStatusFilter"
      @advance-status="updateOrderStatus"
      @update:search-value="setOrderSearch"
      @update:status-filter="setOrderStatusFilter"
    />
  </div>
</template>
