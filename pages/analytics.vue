<script setup lang="ts">
const {
  analyticsStats,
  channelSplit,
  filteredOrderLoadSeries,
  filteredRevenueSeries,
  kpis,
  selectedChannel,
  setSelectedChannel
} = useBrewlyticsWorkspace()

useSeoMeta({
  title: 'Analytics',
  description: 'Performance analytics for Brewlytics.'
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <AppTopbar
      title="Analytics built for the next shift, not last quarter."
      description="Track growth, conversion, and demand timing with visuals tuned for operators who need action in minutes."
    />

    <PageHero
      eyebrow="Performance analytics"
      title="Read demand patterns at a glance and move from reporting to response."
      description="Revenue, order pressure, and channel mix are now connected to the live dashboard filter state."
    />

    <StatStrip :items="analyticsStats" />

    <section class="data-grid grid-cols-1 md:grid-cols-3">
      <KpiCard v-for="metric in kpis" :key="metric.title" :metric="metric" />
    </section>

    <section class="data-grid grid-cols-1 xl:grid-cols-[1.35fr,0.95fr]">
      <AreaTrendChart
        title="Weekly revenue curve"
        subtitle="Gross sales acceleration from Monday through Sunday."
        :points="filteredRevenueSeries"
      />
      <ChannelSplitCard
        title="Channel contribution"
        subtitle="Select a channel to push that view across the dashboard."
        :items="channelSplit"
        :selected-channel="selectedChannel"
        @select-channel="setSelectedChannel"
      />
    </section>

    <AreaTrendChart
      title="Hourly order pressure"
      subtitle="Queue intensity over the trading day for the active channel filter."
      :points="filteredOrderLoadSeries"
    />
  </div>
</template>
