import type {
  ChannelSplit,
  CustomerSegment,
  InsightNote,
  InventoryItem,
  InventoryStatus,
  KpiMetric,
  OrderStatus,
  OrderTicket,
  PageStat,
  RevenuePoint,
  TimelineEvent,
  WorkspaceNotice,
  WorkspaceNoticeTone
} from '~/types/brewlytics'
import { createBrewlyticsSeed } from '~/composables/useBrewlyticsData'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 1,
  notation: 'compact',
  style: 'currency'
})

const preciseCurrencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  minimumFractionDigits: 2,
  style: 'currency'
})

const integerFormatter = new Intl.NumberFormat('en-US')

const percentage = (value: number) => `${value.toFixed(1)}%`

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T

const formatTimelineTime = () =>
  new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit'
  }).format(new Date())

const formatSyncLabel = (value: string) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(value))

const formatStock = (stockLevel: number, stockUnit: string) => `${stockLevel} ${stockUnit}`

const nextOrderAction: Record<OrderStatus, { label: string, next: OrderStatus }> = {
  Brewing: { label: 'Mark ready', next: 'Ready' },
  Delivered: { label: 'Reopen', next: 'Brewing' },
  Ready: { label: 'Deliver', next: 'Delivered' }
}

const channelWeights: Record<string, number> = {
  All: 1,
  'App pickup': 0.78,
  Delivery: 0.52,
  'In-store': 1.08,
  Subscriptions: 0.34
}

export const useBrewlyticsWorkspace = () => {
  const seed = createBrewlyticsSeed()

  const orders = useState<OrderTicket[]>('brewlytics-orders', () => clone(seed.orders))
  const inventory = useState<InventoryItem[]>('brewlytics-inventory', () => clone(seed.inventory))
  const insights = useState<InsightNote[]>('brewlytics-insights', () => clone(seed.insightNotes))
  const timeline = useState<TimelineEvent[]>('brewlytics-timeline', () => clone(seed.timeline))
  const selectedChannel = useState<string>('brewlytics-channel', () => 'All')
  const orderStatusFilter = useState<'All' | OrderStatus>('brewlytics-order-status', () => 'All')
  const inventoryStatusFilter = useState<'All' | InventoryStatus>('brewlytics-inventory-status', () => 'All')
  const orderSearch = useState('brewlytics-order-search', () => '')
  const focusedSegment = useState<string>('brewlytics-focused-segment', () => 'All')
  const notice = useState<WorkspaceNotice | null>('brewlytics-notice', () => ({
    message: 'Dashboard ready. Filters, actions, export, and sync are live.',
    tone: 'neutral'
  }))
  const syncedAt = useState('brewlytics-synced-at', () => new Date().toISOString())

  const channelOptions = ['All', ...seed.channelSplit.map((item) => item.label)]
  const orderStatusOptions: Array<'All' | OrderStatus> = ['All', 'Brewing', 'Ready', 'Delivered']
  const inventoryStatusOptions: Array<'All' | InventoryStatus> = ['All', 'Healthy', 'Watch', 'Critical']

  const setNotice = (message: string, tone: WorkspaceNoticeTone = 'neutral') => {
    notice.value = { message, tone }
  }

  const dismissNotice = () => {
    notice.value = null
  }

  const filteredOrders = computed(() => {
    const query = orderSearch.value.trim().toLowerCase()

    return orders.value.filter((item) => {
      const channelMatch = selectedChannel.value === 'All' || item.channel === selectedChannel.value
      const statusMatch = orderStatusFilter.value === 'All' || item.status === orderStatusFilter.value
      const queryMatch =
        query.length === 0 ||
        [item.customer, item.item, item.channel, item.id].some((value) => value.toLowerCase().includes(query))

      return channelMatch && statusMatch && queryMatch
    })
  })

  const filteredInventory = computed(() =>
    inventory.value.filter((item) => inventoryStatusFilter.value === 'All' || item.status === inventoryStatusFilter.value)
  )

  const filteredRevenueSeries = computed<RevenuePoint[]>(() => {
    const weight = channelWeights[selectedChannel.value] ?? 1

    return seed.revenueSeries.map((point) => ({
      ...point,
      value: Math.max(4, Math.round(point.value * weight))
    }))
  })

  const filteredOrderLoadSeries = computed<RevenuePoint[]>(() => {
    const weight = channelWeights[selectedChannel.value] ?? 1
    const statusFactor = orderStatusFilter.value === 'All' ? 1 : orderStatusFilter.value === 'Brewing' ? 0.72 : 0.88

    return seed.orderLoadSeries.map((point) => ({
      ...point,
      value: Math.max(3, Math.round(point.value * weight * statusFactor))
    }))
  })

  const channelSplit = computed<ChannelSplit[]>(() => {
    const totals = Object.fromEntries(seed.channelSplit.map((item) => [item.label, 0]))

    for (const order of orders.value) {
      totals[order.channel] = (totals[order.channel] ?? 0) + order.totalValue
    }

    const totalRevenue = Object.values(totals).reduce((sum, value) => sum + value, 0) || 1
    let allocated = 0

    return seed.channelSplit.map((item, index, array) => {
      const rawValue = Math.round((totals[item.label] / totalRevenue) * 100)
      const value = index === array.length - 1 ? Math.max(0, 100 - allocated) : rawValue
      allocated += value

      return {
        label: item.label,
        value,
        color: item.color
      }
    })
  })

  const openOrders = computed(() => orders.value.filter((item) => item.status !== 'Delivered').length)
  const deliveredOrders = computed(() => orders.value.filter((item) => item.status === 'Delivered').length)
  const criticalInventoryCount = computed(() => inventory.value.filter((item) => item.status === 'Critical').length)
  const appliedInsightCount = computed(() => insights.value.filter((item) => item.applied).length)

  const kpis = computed<KpiMetric[]>(() => {
    const revenueValue =
      filteredRevenueSeries.value.reduce((sum, point) => sum + point.value, 0) * 300 +
      deliveredOrders.value * 160

    const averageTicket =
      orders.value.reduce((sum, item) => sum + item.totalValue, 0) / Math.max(orders.value.length, 1)

    const wasteRate = Math.max(1.4, 2.9 + criticalInventoryCount.value * 0.6 - appliedInsightCount.value * 0.25)

    return [
      {
        title: 'Net revenue',
        value: currencyFormatter.format(revenueValue),
        delta: Number((9.8 + deliveredOrders.value * 0.7).toFixed(1)),
        description: `${selectedChannel.value === 'All' ? 'Cross-channel' : selectedChannel.value} performance is reflected live in this figure.`,
        tone: 'roast'
      },
      {
        title: 'Average ticket',
        value: preciseCurrencyFormatter.format(averageTicket),
        delta: Number((4.5 + appliedInsightCount.value * 0.8).toFixed(1)),
        description: 'Advancing ticket status and channel filters updates the active basket mix immediately.',
        tone: 'sage'
      },
      {
        title: 'Waste rate',
        value: percentage(wasteRate),
        delta: Number((-0.6 - appliedInsightCount.value * 0.4).toFixed(1)),
        description: 'Restocking critical inputs and applying recommendations lowers projected waste.',
        tone: 'ember'
      }
    ]
  })

  const overviewStats = computed<PageStat[]>(() => [
    {
      label: 'Stores synced',
      value: '12',
      note: `Manual sync last run at ${formatSyncLabel(syncedAt.value)}`
    },
    {
      label: 'Orders in view',
      value: integerFormatter.format(filteredOrders.value.length),
      note: selectedChannel.value === 'All' ? 'Across every active channel' : `Filtered to ${selectedChannel.value}`
    },
    {
      label: 'Repeat guests',
      value: `${68 + appliedInsightCount.value}%`,
      note: focusedSegment.value === 'All' ? 'Loyalty view across all segments' : `Focused on ${focusedSegment.value}`
    }
  ])

  const analyticsStats = computed<PageStat[]>(() => [
    {
      label: 'Revenue growth',
      value: `+${(10.2 + deliveredOrders.value * 0.6).toFixed(1)}%`,
      note: selectedChannel.value === 'All' ? 'Compared with the previous week' : `Lift for ${selectedChannel.value}`
    },
    {
      label: 'Conversion rate',
      value: `${(5.8 + appliedInsightCount.value * 0.7 + openOrders.value * 0.1).toFixed(1)}%`,
      note: 'Influenced by channel mix and service readiness'
    },
    {
      label: 'Promo ROI',
      value: `${(3.8 + appliedInsightCount.value * 0.6).toFixed(1)}x`,
      note: 'Applying playbooks compounds campaign efficiency'
    }
  ])

  const orderStats = computed<PageStat[]>(() => [
    {
      label: 'Open tickets',
      value: integerFormatter.format(openOrders.value),
      note: selectedChannel.value === 'All' ? 'Across all channels' : `${selectedChannel.value} tickets in progress`
    },
    {
      label: 'Fulfillment SLA',
      value: `${Math.min(99, 88 + deliveredOrders.value)}%`,
      note: 'Orders progressed in the table improve this metric'
    },
    {
      label: 'Pickup accuracy',
      value: `${(96.2 + appliedInsightCount.value * 0.4).toFixed(1)}%`,
      note: 'Ready and delivered states are reflected immediately'
    }
  ])

  const inventoryStats = computed<PageStat[]>(() => [
    {
      label: 'Critical SKUs',
      value: integerFormatter.format(criticalInventoryCount.value),
      note: criticalInventoryCount.value === 0 ? 'No urgent replenishment' : 'Items that still need intervention today'
    },
    {
      label: 'Waste saved',
      value: currencyFormatter.format(900 + appliedInsightCount.value * 250 + inventory.value.length * 80),
      note: 'Improves as recommendations are applied and stock is stabilized'
    },
    {
      label: 'Vendor score',
      value: `${Math.min(99, 92 + inventory.value.filter((item) => item.status === 'Healthy').length * 2)}%`,
      note: 'Driven by healthy runway across critical ingredients'
    }
  ])

  const customerStats = computed<PageStat[]>(() => {
    const memberCount = seed.segments.reduce((sum, segment) => sum + segment.countValue, 0)

    return [
      {
        label: 'Loyalty members',
        value: currencyFormatter
          .formatToParts(memberCount)
          .filter((part) => part.type !== 'currency')
          .map((part) => part.value)
          .join('')
          .trim(),
        note: 'Unified audience across connected stores'
      },
      {
        label: 'Retention rate',
        value: `${(71 + appliedInsightCount.value * 1.5).toFixed(0)}%`,
        note: focusedSegment.value === 'All' ? '30-day repeat purchase' : `${focusedSegment.value} retention lens`
      },
      {
        label: 'NPS',
        value: `${63 + appliedInsightCount.value}`,
        note: 'Customer sentiment improves as service and targeting align'
      }
    ]
  })

  const segments = computed<CustomerSegment[]>(() =>
    seed.segments.map((segment) => {
      const multiplier = focusedSegment.value === 'All' || focusedSegment.value === segment.name ? 1 : 0.92
      const spendLift = selectedChannel.value === 'Subscriptions' ? 1.08 : 1

      return {
        ...segment,
        countValue: Math.round(segment.countValue * multiplier),
        count: integerFormatter.format(Math.round(segment.countValue * multiplier)),
        spendValue: Number((segment.spendValue * spendLift).toFixed(2)),
        spend: preciseCurrencyFormatter.format(segment.spendValue * spendLift)
      }
    })
  )

  const timelineEntries = computed<TimelineEvent[]>(() => timeline.value.slice(0, 6))

  const currentInsights = computed<InsightNote[]>(() =>
    insights.value.map((item) => ({
      ...item,
      label: item.applied ? 'Playbook applied' : item.label
    }))
  )

  const selectedChannelLabel = computed(() =>
    selectedChannel.value === 'All' ? 'All channels' : selectedChannel.value
  )

  const setSelectedChannel = (channel: string) => {
    selectedChannel.value = channel
    setNotice(`Dashboard filtered to ${channel === 'All' ? 'all channels' : channel}.`, 'neutral')
  }

  const setOrderSearch = (value: string) => {
    orderSearch.value = value
  }

  const setOrderStatusFilter = (value: 'All' | OrderStatus) => {
    orderStatusFilter.value = value
    setNotice(value === 'All' ? 'Showing all order statuses.' : `Showing ${value.toLowerCase()} orders.`, 'neutral')
  }

  const setInventoryStatusFilter = (value: 'All' | InventoryStatus) => {
    inventoryStatusFilter.value = value
    setNotice(value === 'All' ? 'Showing inventory across all health states.' : `Showing ${value.toLowerCase()} inventory.`, 'neutral')
  }

  const setFocusedSegment = (segment: string) => {
    focusedSegment.value = focusedSegment.value === segment ? 'All' : segment
    setNotice(
      focusedSegment.value === 'All'
        ? 'Customer view reset to all segments.'
        : `${focusedSegment.value} is now the active focus segment.`,
      'success'
    )
  }

  const syncDashboard = () => {
    syncedAt.value = new Date().toISOString()
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: 'Manual sync completed',
        body: `Dashboard data refreshed for ${selectedChannelLabel.value.toLowerCase()}.`
      },
      ...timeline.value
    ].slice(0, 8)

    setNotice(`Data synced successfully at ${formatSyncLabel(syncedAt.value)}.`, 'success')
  }

  const logShiftUpdate = () => {
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: 'Operator note logged',
        body: `Current focus: ${selectedChannelLabel.value}, ${orderStatusFilter.value === 'All' ? 'all ticket states' : orderStatusFilter.value.toLowerCase()} orders.`
      },
      ...timeline.value
    ].slice(0, 8)

    setNotice('Shift timeline updated with a manual note.', 'neutral')
  }

  const updateOrderStatus = (orderId: string) => {
    const current = orders.value.find((item) => item.id === orderId)

    if (!current) {
      return
    }

    const action = nextOrderAction[current.status]

    orders.value = orders.value.map((item) =>
      item.id === orderId
        ? {
            ...item,
            status: action.next,
            time: 'just now'
          }
        : item
    )

    if (action.next === 'Delivered') {
      timeline.value = [
        {
          time: formatTimelineTime(),
          title: `Order ${orderId} delivered`,
          body: `${current.customer}'s ${current.item.toLowerCase()} moved into completed service.`
        },
        ...timeline.value
      ].slice(0, 8)
    }

    setNotice(`${orderId} updated to ${action.next}.`, 'success')
  }

  const restockItem = (name: string) => {
    const current = inventory.value.find((item) => item.name === name)

    if (!current) {
      return
    }

    inventory.value = inventory.value.map((item) =>
      item.name === name
        ? {
            ...item,
            stockLevel: item.stockLevel + item.reorderAmount,
            stock: formatStock(item.stockLevel + item.reorderAmount, item.stockUnit),
            daysLeft: item.daysLeft + 7,
            status: item.daysLeft + 7 >= 10 ? 'Healthy' : 'Watch'
          }
        : item
    )

    timeline.value = [
      {
        time: formatTimelineTime(),
        title: `${name} restocked`,
        body: `Reorder sent to ${current.vendor} for ${current.reorderAmount} ${current.stockUnit}.`
      },
      ...timeline.value
    ].slice(0, 8)

    setNotice(`${name} replenishment logged and metrics updated.`, 'success')
  }

  const applyInsight = (title: string) => {
    const existing = insights.value.find((item) => item.title === title)

    if (!existing || existing.applied) {
      return
    }

    insights.value = insights.value.map((item) =>
      item.title === title
        ? {
            ...item,
            applied: true
          }
        : item
    )

    timeline.value = [
      {
        time: formatTimelineTime(),
        title: `${title} activated`,
        body: 'The recommendation has been marked as applied and reflected in dashboard metrics.'
      },
      ...timeline.value
    ].slice(0, 8)

    setNotice(`Insight applied: ${title}.`, 'success')
  }

  const exportReport = () => {
    const report = {
      exportedAt: new Date().toISOString(),
      selectedChannel: selectedChannel.value,
      orderStatusFilter: orderStatusFilter.value,
      inventoryStatusFilter: inventoryStatusFilter.value,
      focusedSegment: focusedSegment.value,
      stats: {
        overview: overviewStats.value,
        analytics: analyticsStats.value,
        orders: orderStats.value,
        inventory: inventoryStats.value,
        customers: customerStats.value,
        kpis: kpis.value
      },
      orders: filteredOrders.value,
      inventory: filteredInventory.value,
      insights: currentInsights.value,
      timeline: timelineEntries.value
    }

    if (process.client) {
      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = `brewlytics-report-${new Date().toISOString().slice(0, 10)}.json`
      anchor.click()
      URL.revokeObjectURL(url)
    }

    setNotice('Report exported as a JSON snapshot of the live dashboard.', 'success')
  }

  const orderActionLabel = (status: OrderStatus) => nextOrderAction[status].label

  return {
    analyticsStats,
    applyInsight,
    channelOptions,
    channelSplit,
    currentInsights,
    customerStats,
    dismissNotice,
    exportReport,
    filteredInventory,
    filteredOrderLoadSeries,
    filteredOrders,
    filteredRevenueSeries,
    focusedSegment,
    inventory,
    inventoryStats,
    inventoryStatusFilter,
    inventoryStatusOptions,
    kpis,
    navItems: seed.navItems,
    notice,
    orderActionLabel,
    orderSearch,
    orderStats,
    orderStatusFilter,
    orderStatusOptions,
    overviewStats,
    restockItem,
    segments,
    selectedChannel,
    selectedChannelLabel,
    setFocusedSegment,
    setInventoryStatusFilter,
    setOrderSearch,
    setOrderStatusFilter,
    setSelectedChannel,
    syncDashboard,
    syncedAt,
    timelineEntries,
    logShiftUpdate,
    updateOrderStatus
  }
}
