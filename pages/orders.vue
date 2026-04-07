<script setup lang="ts">
const {
  filteredOrderLoadSeries,
  filteredOrders,
  logShiftUpdate,
  orderSearch,
  setOrderSearch,
  setOrderStatusFilter,
  orderStats,
  orderStatusFilter,
  timelineEntries,
  updateOrderStatus
} = useBrewlyticsWorkspace()

const activeOrderCount = computed(() => Number(orderStats.value[0]?.value.replace(/,/g, '') ?? '0'))

useSeoMeta({
  title: 'Orders',
  description: 'Order operations for Brewlytics.'
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <AppTopbar
      title="Order operations that stay calm during the rush."
      description="Monitor active tickets, fulfillment speed, and service handoffs from one place with no queue blind spots."
    />

    <PageHero
      eyebrow="Service operations"
      title="Spot pressure before guests feel it."
      description="Filter live orders, search tickets, and advance status directly from the dashboard."
    />

    <StatStrip :items="orderStats" />

    <section class="data-grid grid-cols-1 xl:grid-cols-[1.2fr,0.9fr]">
      <OrderTable
        :items="filteredOrders"
        :active-count="activeOrderCount"
        :search-value="orderSearch"
        :status-filter="orderStatusFilter"
        @advance-status="updateOrderStatus"
        @update:search-value="setOrderSearch"
        @update:status-filter="setOrderStatusFilter"
      />
      <TimelineCard :items="timelineEntries" @log="logShiftUpdate" />
    </section>

    <AreaTrendChart
      title="Service demand rhythm"
      subtitle="Peak load pattern used to plan staffing and batching windows."
      :points="filteredOrderLoadSeries"
    />
  </div>
</template>
