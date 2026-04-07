import type {
  ChannelSplit,
  CustomerSegment,
  InsightNote,
  InventoryItem,
  KpiMetric,
  NavItem,
  OrderTicket,
  PageStat,
  RevenuePoint,
  TimelineEvent
} from '~/types/brewlytics'

export const createBrewlyticsSeed = () => {
  const navItems: NavItem[] = [
    { label: 'Overview', shortLabel: 'Home', to: '/' },
    { label: 'Analytics', shortLabel: 'Stats', to: '/analytics' },
    { label: 'Orders', shortLabel: 'Orders', to: '/orders' },
    { label: 'Inventory', shortLabel: 'Stock', to: '/inventory' },
    { label: 'Customers', shortLabel: 'People', to: '/customers' }
  ]

  const kpis: KpiMetric[] = [
    {
      title: 'Net revenue',
      value: '$48.2K',
      delta: 14.8,
      description: 'Week-over-week lift driven by mobile pickup bundles.',
      tone: 'roast'
    },
    {
      title: 'Average ticket',
      value: '$13.40',
      delta: 6.1,
      description: 'Pastry pairings and oat milk upsells remain the strongest attach.',
      tone: 'sage'
    },
    {
      title: 'Waste rate',
      value: '2.8%',
      delta: -1.4,
      description: 'Cold brew batching is now aligned with the afternoon rush curve.',
      tone: 'ember'
    }
  ]

  const revenueSeries: RevenuePoint[] = [
    { label: 'Mon', value: 12 },
    { label: 'Tue', value: 18 },
    { label: 'Wed', value: 16 },
    { label: 'Thu', value: 24 },
    { label: 'Fri', value: 30 },
    { label: 'Sat', value: 34 },
    { label: 'Sun', value: 28 }
  ]

  const orderLoadSeries: RevenuePoint[] = [
    { label: '6a', value: 14 },
    { label: '8a', value: 30 },
    { label: '10a', value: 22 },
    { label: '12p', value: 35 },
    { label: '2p', value: 24 },
    { label: '4p', value: 19 },
    { label: '6p', value: 27 }
  ]

  const channelSplit: ChannelSplit[] = [
    { label: 'In-store', value: 45, color: '#5f3b2a' },
    { label: 'App pickup', value: 30, color: '#d7b074' },
    { label: 'Delivery', value: 15, color: '#7a8f6c' },
    { label: 'Subscriptions', value: 10, color: '#c86b4a' }
  ]

  const orders: OrderTicket[] = [
    {
      id: '#1048',
      customer: 'Mia Torres',
      item: 'Vanilla oat latte',
      channel: 'App pickup',
      total: '$12.60',
      totalValue: 12.6,
      time: '2 min ago',
      status: 'Brewing'
    },
    {
      id: '#1047',
      customer: 'Noah Kim',
      item: 'Cold brew flight',
      channel: 'In-store',
      total: '$16.20',
      totalValue: 16.2,
      time: '5 min ago',
      status: 'Ready'
    },
    {
      id: '#1046',
      customer: 'Sana Patel',
      item: 'Matcha tonic',
      channel: 'Delivery',
      total: '$18.90',
      totalValue: 18.9,
      time: '11 min ago',
      status: 'Delivered'
    },
    {
      id: '#1045',
      customer: 'Ethan Brooks',
      item: 'Espresso and croissant',
      channel: 'In-store',
      total: '$9.40',
      totalValue: 9.4,
      time: '18 min ago',
      status: 'Delivered'
    },
    {
      id: '#1044',
      customer: 'Ivy Chen',
      item: 'Roaster subscription box',
      channel: 'Subscriptions',
      total: '$22.50',
      totalValue: 22.5,
      time: '22 min ago',
      status: 'Delivered'
    },
    {
      id: '#1043',
      customer: 'Liam Carter',
      item: 'Flat white and canele',
      channel: 'App pickup',
      total: '$14.80',
      totalValue: 14.8,
      time: '25 min ago',
      status: 'Ready'
    },
    {
      id: '#1042',
      customer: 'Zoe Rivera',
      item: 'Cortado duo',
      channel: 'In-store',
      total: '$11.70',
      totalValue: 11.7,
      time: '28 min ago',
      status: 'Brewing'
    },
    {
      id: '#1041',
      customer: 'Ava Singh',
      item: 'Maple cold brew',
      channel: 'Delivery',
      total: '$19.30',
      totalValue: 19.3,
      time: '31 min ago',
      status: 'Ready'
    },
    {
      id: '#1040',
      customer: 'Lucas Moore',
      item: 'Hazelnut latte',
      channel: 'App pickup',
      total: '$15.10',
      totalValue: 15.1,
      time: '37 min ago',
      status: 'Delivered'
    },
    {
      id: '#1039',
      customer: 'Emma Flores',
      item: 'Espresso tonic',
      channel: 'In-store',
      total: '$8.90',
      totalValue: 8.9,
      time: '42 min ago',
      status: 'Delivered'
    }
  ]

  const inventory: InventoryItem[] = [
    {
      name: 'Single-origin espresso',
      stock: '42 kg',
      stockLevel: 42,
      stockUnit: 'kg',
      reorderAmount: 18,
      daysLeft: 12,
      status: 'Healthy',
      vendor: 'Atlas Roasters'
    },
    {
      name: 'Oat milk',
      stock: '84 cartons',
      stockLevel: 84,
      stockUnit: 'cartons',
      reorderAmount: 36,
      daysLeft: 6,
      status: 'Watch',
      vendor: 'Field Pantry'
    },
    {
      name: 'Cold brew kegs',
      stock: '8 kegs',
      stockLevel: 8,
      stockUnit: 'kegs',
      reorderAmount: 10,
      daysLeft: 3,
      status: 'Critical',
      vendor: 'Nightshift Supply'
    },
    {
      name: 'Pastry boxes',
      stock: '126 units',
      stockLevel: 126,
      stockUnit: 'units',
      reorderAmount: 48,
      daysLeft: 18,
      status: 'Healthy',
      vendor: 'Paper Form'
    }
  ]

  const segments: CustomerSegment[] = [
    {
      name: 'Morning regulars',
      count: '1,284',
      countValue: 1284,
      spend: '$18.90',
      spendValue: 18.9,
      trend: '+12% visit frequency',
      color: 'from-roast to-crema'
    },
    {
      name: 'Remote workers',
      count: '624',
      countValue: 624,
      spend: '$24.10',
      spendValue: 24.1,
      trend: '+8% dwell time',
      color: 'from-pine to-sage'
    },
    {
      name: 'Weekend explorers',
      count: '902',
      countValue: 902,
      spend: '$16.70',
      spendValue: 16.7,
      trend: '+19% new customers',
      color: 'from-ember to-crema'
    }
  ]

  const insightNotes: InsightNote[] = [
    {
      title: 'Afternoon recovery window',
      body: 'A 3:00 pm push notification with a pastry reward lifted cold drink conversion by 17% on weekdays.',
      label: 'Campaign insight',
      applied: false
    },
    {
      title: 'High-value loyalty cohort',
      body: 'Customers buying beans plus one handcrafted drink return 2.3x more often than drink-only shoppers.',
      label: 'Retention signal',
      applied: false
    }
  ]

  const timeline: TimelineEvent[] = [
    {
      time: '06:45',
      title: 'Batch prep finished',
      body: 'Espresso beans dialed in at 19.4g dose and cold brew taps rotated for lunch volume.'
    },
    {
      time: '09:10',
      title: 'Rush threshold crossed',
      body: 'Mobile pickup queue hit 14 concurrent drinks. Extra bar assigned to pickup handoff.'
    },
    {
      time: '12:35',
      title: 'Inventory alert triggered',
      body: 'Oat milk crossed the replenishment threshold with less than one week of projected stock left.'
    }
  ]

  const overviewStats: PageStat[] = [
    { label: 'Stores synced', value: '12', note: 'Live POS and app data' },
    { label: 'Orders today', value: '382', note: 'Peak at 12:15 pm' },
    { label: 'Repeat guests', value: '68%', note: 'Loyalty members' }
  ]

  const analyticsStats: PageStat[] = [
    { label: 'Revenue growth', value: '+14.8%', note: 'vs previous week' },
    { label: 'Conversion rate', value: '7.2%', note: 'App ordering funnel' },
    { label: 'Promo ROI', value: '4.6x', note: 'Pastry bundle campaign' }
  ]

  const orderStats: PageStat[] = [
    { label: 'Open tickets', value: '24', note: 'Across all channels' },
    { label: 'Fulfillment SLA', value: '94%', note: 'Under 8 minutes' },
    { label: 'Pickup accuracy', value: '99.1%', note: 'Last 7 days' }
  ]

  const inventoryStats: PageStat[] = [
    { label: 'Critical SKUs', value: '3', note: 'Needs attention today' },
    { label: 'Waste saved', value: '$1.2K', note: 'This month' },
    { label: 'Vendor score', value: '96%', note: 'On-time delivery rate' }
  ]

  const customerStats: PageStat[] = [
    { label: 'Loyalty members', value: '8.4K', note: 'Across all locations' },
    { label: 'Retention rate', value: '73%', note: '30-day repeat purchase' },
    { label: 'NPS', value: '64', note: 'Post-order survey average' }
  ]

  return {
    analyticsStats,
    channelSplit,
    customerStats,
    insightNotes,
    inventory,
    inventoryStats,
    kpis,
    navItems,
    orderLoadSeries,
    orderStats,
    orders,
    overviewStats,
    revenueSeries,
    segments,
    timeline
  }
}

export const useBrewlyticsData = () => createBrewlyticsSeed()
