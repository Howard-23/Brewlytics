globalThis.__timing__.logStart('Load chunks/build/useBrewlyticsWorkspace-Cia6rH_I');import { computed, toRef, isRef } from 'vue';
import { b as useNuxtApp } from './server.mjs';

const createBrewlyticsSeed = () => {
  const navItems = [
    { label: "Overview", shortLabel: "Home", to: "/" },
    { label: "Analytics", shortLabel: "Stats", to: "/analytics" },
    { label: "Orders", shortLabel: "Orders", to: "/orders" },
    { label: "Inventory", shortLabel: "Stock", to: "/inventory" },
    { label: "Customers", shortLabel: "People", to: "/customers" }
  ];
  const kpis = [
    {
      title: "Net revenue",
      value: "$48.2K",
      delta: 14.8,
      description: "Week-over-week lift driven by mobile pickup bundles.",
      tone: "roast"
    },
    {
      title: "Average ticket",
      value: "$13.40",
      delta: 6.1,
      description: "Pastry pairings and oat milk upsells remain the strongest attach.",
      tone: "sage"
    },
    {
      title: "Waste rate",
      value: "2.8%",
      delta: -1.4,
      description: "Cold brew batching is now aligned with the afternoon rush curve.",
      tone: "ember"
    }
  ];
  const revenueSeries = [
    { label: "Mon", value: 12 },
    { label: "Tue", value: 18 },
    { label: "Wed", value: 16 },
    { label: "Thu", value: 24 },
    { label: "Fri", value: 30 },
    { label: "Sat", value: 34 },
    { label: "Sun", value: 28 }
  ];
  const orderLoadSeries = [
    { label: "6a", value: 14 },
    { label: "8a", value: 30 },
    { label: "10a", value: 22 },
    { label: "12p", value: 35 },
    { label: "2p", value: 24 },
    { label: "4p", value: 19 },
    { label: "6p", value: 27 }
  ];
  const channelSplit = [
    { label: "In-store", value: 45, color: "#5f3b2a" },
    { label: "App pickup", value: 30, color: "#d7b074" },
    { label: "Delivery", value: 15, color: "#7a8f6c" },
    { label: "Subscriptions", value: 10, color: "#c86b4a" }
  ];
  const orders = [
    {
      id: "#1048",
      customer: "Mia Torres",
      item: "Vanilla oat latte",
      channel: "App pickup",
      total: "$12.60",
      totalValue: 12.6,
      time: "2 min ago",
      status: "Brewing"
    },
    {
      id: "#1047",
      customer: "Noah Kim",
      item: "Cold brew flight",
      channel: "In-store",
      total: "$16.20",
      totalValue: 16.2,
      time: "5 min ago",
      status: "Ready"
    },
    {
      id: "#1046",
      customer: "Sana Patel",
      item: "Matcha tonic",
      channel: "Delivery",
      total: "$18.90",
      totalValue: 18.9,
      time: "11 min ago",
      status: "Delivered"
    },
    {
      id: "#1045",
      customer: "Ethan Brooks",
      item: "Espresso and croissant",
      channel: "In-store",
      total: "$9.40",
      totalValue: 9.4,
      time: "18 min ago",
      status: "Delivered"
    },
    {
      id: "#1044",
      customer: "Ivy Chen",
      item: "Roaster subscription box",
      channel: "Subscriptions",
      total: "$22.50",
      totalValue: 22.5,
      time: "22 min ago",
      status: "Delivered"
    },
    {
      id: "#1043",
      customer: "Liam Carter",
      item: "Flat white and canele",
      channel: "App pickup",
      total: "$14.80",
      totalValue: 14.8,
      time: "25 min ago",
      status: "Ready"
    },
    {
      id: "#1042",
      customer: "Zoe Rivera",
      item: "Cortado duo",
      channel: "In-store",
      total: "$11.70",
      totalValue: 11.7,
      time: "28 min ago",
      status: "Brewing"
    },
    {
      id: "#1041",
      customer: "Ava Singh",
      item: "Maple cold brew",
      channel: "Delivery",
      total: "$19.30",
      totalValue: 19.3,
      time: "31 min ago",
      status: "Ready"
    },
    {
      id: "#1040",
      customer: "Lucas Moore",
      item: "Hazelnut latte",
      channel: "App pickup",
      total: "$15.10",
      totalValue: 15.1,
      time: "37 min ago",
      status: "Delivered"
    },
    {
      id: "#1039",
      customer: "Emma Flores",
      item: "Espresso tonic",
      channel: "In-store",
      total: "$8.90",
      totalValue: 8.9,
      time: "42 min ago",
      status: "Delivered"
    }
  ];
  const inventory = [
    {
      name: "Single-origin espresso",
      stock: "42 kg",
      stockLevel: 42,
      stockUnit: "kg",
      reorderAmount: 18,
      daysLeft: 12,
      status: "Healthy",
      vendor: "Atlas Roasters"
    },
    {
      name: "Oat milk",
      stock: "84 cartons",
      stockLevel: 84,
      stockUnit: "cartons",
      reorderAmount: 36,
      daysLeft: 6,
      status: "Watch",
      vendor: "Field Pantry"
    },
    {
      name: "Cold brew kegs",
      stock: "8 kegs",
      stockLevel: 8,
      stockUnit: "kegs",
      reorderAmount: 10,
      daysLeft: 3,
      status: "Critical",
      vendor: "Nightshift Supply"
    },
    {
      name: "Pastry boxes",
      stock: "126 units",
      stockLevel: 126,
      stockUnit: "units",
      reorderAmount: 48,
      daysLeft: 18,
      status: "Healthy",
      vendor: "Paper Form"
    }
  ];
  const segments = [
    {
      name: "Morning regulars",
      count: "1,284",
      countValue: 1284,
      spend: "$18.90",
      spendValue: 18.9,
      trend: "+12% visit frequency",
      color: "from-roast to-crema"
    },
    {
      name: "Remote workers",
      count: "624",
      countValue: 624,
      spend: "$24.10",
      spendValue: 24.1,
      trend: "+8% dwell time",
      color: "from-pine to-sage"
    },
    {
      name: "Weekend explorers",
      count: "902",
      countValue: 902,
      spend: "$16.70",
      spendValue: 16.7,
      trend: "+19% new customers",
      color: "from-ember to-crema"
    }
  ];
  const insightNotes = [
    {
      title: "Afternoon recovery window",
      body: "A 3:00 pm push notification with a pastry reward lifted cold drink conversion by 17% on weekdays.",
      label: "Campaign insight",
      applied: false
    },
    {
      title: "High-value loyalty cohort",
      body: "Customers buying beans plus one handcrafted drink return 2.3x more often than drink-only shoppers.",
      label: "Retention signal",
      applied: false
    }
  ];
  const timeline = [
    {
      time: "06:45",
      title: "Batch prep finished",
      body: "Espresso beans dialed in at 19.4g dose and cold brew taps rotated for lunch volume."
    },
    {
      time: "09:10",
      title: "Rush threshold crossed",
      body: "Mobile pickup queue hit 14 concurrent drinks. Extra bar assigned to pickup handoff."
    },
    {
      time: "12:35",
      title: "Inventory alert triggered",
      body: "Oat milk crossed the replenishment threshold with less than one week of projected stock left."
    }
  ];
  const overviewStats = [
    { label: "Stores synced", value: "12", note: "Live POS and app data" },
    { label: "Orders today", value: "382", note: "Peak at 12:15 pm" },
    { label: "Repeat guests", value: "68%", note: "Loyalty members" }
  ];
  const analyticsStats = [
    { label: "Revenue growth", value: "+14.8%", note: "vs previous week" },
    { label: "Conversion rate", value: "7.2%", note: "App ordering funnel" },
    { label: "Promo ROI", value: "4.6x", note: "Pastry bundle campaign" }
  ];
  const orderStats = [
    { label: "Open tickets", value: "24", note: "Across all channels" },
    { label: "Fulfillment SLA", value: "94%", note: "Under 8 minutes" },
    { label: "Pickup accuracy", value: "99.1%", note: "Last 7 days" }
  ];
  const inventoryStats = [
    { label: "Critical SKUs", value: "3", note: "Needs attention today" },
    { label: "Waste saved", value: "$1.2K", note: "This month" },
    { label: "Vendor score", value: "96%", note: "On-time delivery rate" }
  ];
  const customerStats = [
    { label: "Loyalty members", value: "8.4K", note: "Across all locations" },
    { label: "Retention rate", value: "73%", note: "30-day repeat purchase" },
    { label: "NPS", value: "64", note: "Post-order survey average" }
  ];
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
  };
};
const useBrewlyticsData = () => createBrewlyticsSeed();
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 1,
  notation: "compact",
  style: "currency"
});
const preciseCurrencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  minimumFractionDigits: 2,
  style: "currency"
});
const integerFormatter = new Intl.NumberFormat("en-US");
const percentage = (value) => `${value.toFixed(1)}%`;
const clone = (value) => JSON.parse(JSON.stringify(value));
const formatTimelineTime = () => new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  hour12: false,
  minute: "2-digit"
}).format(/* @__PURE__ */ new Date());
const formatSyncLabel = (value) => new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit"
}).format(new Date(value));
const formatStock = (stockLevel, stockUnit) => `${stockLevel} ${stockUnit}`;
const nextOrderAction = {
  Brewing: { label: "Mark ready", next: "Ready" },
  Delivered: { label: "Reopen", next: "Brewing" },
  Ready: { label: "Deliver", next: "Delivered" }
};
const channelWeights = {
  All: 1,
  "App pickup": 0.78,
  Delivery: 0.52,
  "In-store": 1.08,
  Subscriptions: 0.34
};
const useBrewlyticsWorkspace = () => {
  const seed = createBrewlyticsSeed();
  const orders = useState("brewlytics-orders", () => clone(seed.orders));
  const inventory = useState("brewlytics-inventory", () => clone(seed.inventory));
  const insights = useState("brewlytics-insights", () => clone(seed.insightNotes));
  const timeline = useState("brewlytics-timeline", () => clone(seed.timeline));
  const selectedChannel = useState("brewlytics-channel", () => "All");
  const orderStatusFilter = useState("brewlytics-order-status", () => "All");
  const inventoryStatusFilter = useState("brewlytics-inventory-status", () => "All");
  const orderSearch = useState("brewlytics-order-search", () => "");
  const focusedSegment = useState("brewlytics-focused-segment", () => "All");
  const notice = useState("brewlytics-notice", () => ({
    message: "Dashboard ready. Filters, actions, export, and sync are live.",
    tone: "neutral"
  }));
  const syncedAt = useState("brewlytics-synced-at", () => (/* @__PURE__ */ new Date()).toISOString());
  const channelOptions = ["All", ...seed.channelSplit.map((item) => item.label)];
  const orderStatusOptions = ["All", "Brewing", "Ready", "Delivered"];
  const inventoryStatusOptions = ["All", "Healthy", "Watch", "Critical"];
  const setNotice = (message, tone = "neutral") => {
    notice.value = { message, tone };
  };
  const dismissNotice = () => {
    notice.value = null;
  };
  const filteredOrders = computed(() => {
    const query = orderSearch.value.trim().toLowerCase();
    return orders.value.filter((item) => {
      const channelMatch = selectedChannel.value === "All" || item.channel === selectedChannel.value;
      const statusMatch = orderStatusFilter.value === "All" || item.status === orderStatusFilter.value;
      const queryMatch = query.length === 0 || [item.customer, item.item, item.channel, item.id].some((value) => value.toLowerCase().includes(query));
      return channelMatch && statusMatch && queryMatch;
    });
  });
  const filteredInventory = computed(
    () => inventory.value.filter((item) => inventoryStatusFilter.value === "All" || item.status === inventoryStatusFilter.value)
  );
  const filteredRevenueSeries = computed(() => {
    var _a;
    const weight = (_a = channelWeights[selectedChannel.value]) != null ? _a : 1;
    return seed.revenueSeries.map((point) => ({
      ...point,
      value: Math.max(4, Math.round(point.value * weight))
    }));
  });
  const filteredOrderLoadSeries = computed(() => {
    var _a;
    const weight = (_a = channelWeights[selectedChannel.value]) != null ? _a : 1;
    const statusFactor = orderStatusFilter.value === "All" ? 1 : orderStatusFilter.value === "Brewing" ? 0.72 : 0.88;
    return seed.orderLoadSeries.map((point) => ({
      ...point,
      value: Math.max(3, Math.round(point.value * weight * statusFactor))
    }));
  });
  const channelSplit = computed(() => {
    var _a;
    const totals = Object.fromEntries(seed.channelSplit.map((item) => [item.label, 0]));
    for (const order of orders.value) {
      totals[order.channel] = ((_a = totals[order.channel]) != null ? _a : 0) + order.totalValue;
    }
    const totalRevenue = Object.values(totals).reduce((sum, value) => sum + value, 0) || 1;
    let allocated = 0;
    return seed.channelSplit.map((item, index, array) => {
      const rawValue = Math.round(totals[item.label] / totalRevenue * 100);
      const value = index === array.length - 1 ? Math.max(0, 100 - allocated) : rawValue;
      allocated += value;
      return {
        label: item.label,
        value,
        color: item.color
      };
    });
  });
  const openOrders = computed(() => orders.value.filter((item) => item.status !== "Delivered").length);
  const deliveredOrders = computed(() => orders.value.filter((item) => item.status === "Delivered").length);
  const criticalInventoryCount = computed(() => inventory.value.filter((item) => item.status === "Critical").length);
  const appliedInsightCount = computed(() => insights.value.filter((item) => item.applied).length);
  const kpis = computed(() => {
    const revenueValue = filteredRevenueSeries.value.reduce((sum, point) => sum + point.value, 0) * 300 + deliveredOrders.value * 160;
    const averageTicket = orders.value.reduce((sum, item) => sum + item.totalValue, 0) / Math.max(orders.value.length, 1);
    const wasteRate = Math.max(1.4, 2.9 + criticalInventoryCount.value * 0.6 - appliedInsightCount.value * 0.25);
    return [
      {
        title: "Net revenue",
        value: currencyFormatter.format(revenueValue),
        delta: Number((9.8 + deliveredOrders.value * 0.7).toFixed(1)),
        description: `${selectedChannel.value === "All" ? "Cross-channel" : selectedChannel.value} performance is reflected live in this figure.`,
        tone: "roast"
      },
      {
        title: "Average ticket",
        value: preciseCurrencyFormatter.format(averageTicket),
        delta: Number((4.5 + appliedInsightCount.value * 0.8).toFixed(1)),
        description: "Advancing ticket status and channel filters updates the active basket mix immediately.",
        tone: "sage"
      },
      {
        title: "Waste rate",
        value: percentage(wasteRate),
        delta: Number((-0.6 - appliedInsightCount.value * 0.4).toFixed(1)),
        description: "Restocking critical inputs and applying recommendations lowers projected waste.",
        tone: "ember"
      }
    ];
  });
  const overviewStats = computed(() => [
    {
      label: "Stores synced",
      value: "12",
      note: `Manual sync last run at ${formatSyncLabel(syncedAt.value)}`
    },
    {
      label: "Orders in view",
      value: integerFormatter.format(filteredOrders.value.length),
      note: selectedChannel.value === "All" ? "Across every active channel" : `Filtered to ${selectedChannel.value}`
    },
    {
      label: "Repeat guests",
      value: `${68 + appliedInsightCount.value}%`,
      note: focusedSegment.value === "All" ? "Loyalty view across all segments" : `Focused on ${focusedSegment.value}`
    }
  ]);
  const analyticsStats = computed(() => [
    {
      label: "Revenue growth",
      value: `+${(10.2 + deliveredOrders.value * 0.6).toFixed(1)}%`,
      note: selectedChannel.value === "All" ? "Compared with the previous week" : `Lift for ${selectedChannel.value}`
    },
    {
      label: "Conversion rate",
      value: `${(5.8 + appliedInsightCount.value * 0.7 + openOrders.value * 0.1).toFixed(1)}%`,
      note: "Influenced by channel mix and service readiness"
    },
    {
      label: "Promo ROI",
      value: `${(3.8 + appliedInsightCount.value * 0.6).toFixed(1)}x`,
      note: "Applying playbooks compounds campaign efficiency"
    }
  ]);
  const orderStats = computed(() => [
    {
      label: "Open tickets",
      value: integerFormatter.format(openOrders.value),
      note: selectedChannel.value === "All" ? "Across all channels" : `${selectedChannel.value} tickets in progress`
    },
    {
      label: "Fulfillment SLA",
      value: `${Math.min(99, 88 + deliveredOrders.value)}%`,
      note: "Orders progressed in the table improve this metric"
    },
    {
      label: "Pickup accuracy",
      value: `${(96.2 + appliedInsightCount.value * 0.4).toFixed(1)}%`,
      note: "Ready and delivered states are reflected immediately"
    }
  ]);
  const inventoryStats = computed(() => [
    {
      label: "Critical SKUs",
      value: integerFormatter.format(criticalInventoryCount.value),
      note: criticalInventoryCount.value === 0 ? "No urgent replenishment" : "Items that still need intervention today"
    },
    {
      label: "Waste saved",
      value: currencyFormatter.format(900 + appliedInsightCount.value * 250 + inventory.value.length * 80),
      note: "Improves as recommendations are applied and stock is stabilized"
    },
    {
      label: "Vendor score",
      value: `${Math.min(99, 92 + inventory.value.filter((item) => item.status === "Healthy").length * 2)}%`,
      note: "Driven by healthy runway across critical ingredients"
    }
  ]);
  const customerStats = computed(() => {
    const memberCount = seed.segments.reduce((sum, segment) => sum + segment.countValue, 0);
    return [
      {
        label: "Loyalty members",
        value: currencyFormatter.formatToParts(memberCount).filter((part) => part.type !== "currency").map((part) => part.value).join("").trim(),
        note: "Unified audience across connected stores"
      },
      {
        label: "Retention rate",
        value: `${(71 + appliedInsightCount.value * 1.5).toFixed(0)}%`,
        note: focusedSegment.value === "All" ? "30-day repeat purchase" : `${focusedSegment.value} retention lens`
      },
      {
        label: "NPS",
        value: `${63 + appliedInsightCount.value}`,
        note: "Customer sentiment improves as service and targeting align"
      }
    ];
  });
  const segments = computed(
    () => seed.segments.map((segment) => {
      const multiplier = focusedSegment.value === "All" || focusedSegment.value === segment.name ? 1 : 0.92;
      const spendLift = selectedChannel.value === "Subscriptions" ? 1.08 : 1;
      return {
        ...segment,
        countValue: Math.round(segment.countValue * multiplier),
        count: integerFormatter.format(Math.round(segment.countValue * multiplier)),
        spendValue: Number((segment.spendValue * spendLift).toFixed(2)),
        spend: preciseCurrencyFormatter.format(segment.spendValue * spendLift)
      };
    })
  );
  const timelineEntries = computed(() => timeline.value.slice(0, 6));
  const currentInsights = computed(
    () => insights.value.map((item) => ({
      ...item,
      label: item.applied ? "Playbook applied" : item.label
    }))
  );
  const selectedChannelLabel = computed(
    () => selectedChannel.value === "All" ? "All channels" : selectedChannel.value
  );
  const setSelectedChannel = (channel) => {
    selectedChannel.value = channel;
    setNotice(`Dashboard filtered to ${channel === "All" ? "all channels" : channel}.`, "neutral");
  };
  const setOrderSearch = (value) => {
    orderSearch.value = value;
  };
  const setOrderStatusFilter = (value) => {
    orderStatusFilter.value = value;
    setNotice(value === "All" ? "Showing all order statuses." : `Showing ${value.toLowerCase()} orders.`, "neutral");
  };
  const setInventoryStatusFilter = (value) => {
    inventoryStatusFilter.value = value;
    setNotice(value === "All" ? "Showing inventory across all health states." : `Showing ${value.toLowerCase()} inventory.`, "neutral");
  };
  const setFocusedSegment = (segment) => {
    focusedSegment.value = focusedSegment.value === segment ? "All" : segment;
    setNotice(
      focusedSegment.value === "All" ? "Customer view reset to all segments." : `${focusedSegment.value} is now the active focus segment.`,
      "success"
    );
  };
  const syncDashboard = () => {
    syncedAt.value = (/* @__PURE__ */ new Date()).toISOString();
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: "Manual sync completed",
        body: `Dashboard data refreshed for ${selectedChannelLabel.value.toLowerCase()}.`
      },
      ...timeline.value
    ].slice(0, 8);
    setNotice(`Data synced successfully at ${formatSyncLabel(syncedAt.value)}.`, "success");
  };
  const logShiftUpdate = () => {
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: "Operator note logged",
        body: `Current focus: ${selectedChannelLabel.value}, ${orderStatusFilter.value === "All" ? "all ticket states" : orderStatusFilter.value.toLowerCase()} orders.`
      },
      ...timeline.value
    ].slice(0, 8);
    setNotice("Shift timeline updated with a manual note.", "neutral");
  };
  const updateOrderStatus = (orderId) => {
    const current = orders.value.find((item) => item.id === orderId);
    if (!current) {
      return;
    }
    const action = nextOrderAction[current.status];
    orders.value = orders.value.map(
      (item) => item.id === orderId ? {
        ...item,
        status: action.next,
        time: "just now"
      } : item
    );
    if (action.next === "Delivered") {
      timeline.value = [
        {
          time: formatTimelineTime(),
          title: `Order ${orderId} delivered`,
          body: `${current.customer}'s ${current.item.toLowerCase()} moved into completed service.`
        },
        ...timeline.value
      ].slice(0, 8);
    }
    setNotice(`${orderId} updated to ${action.next}.`, "success");
  };
  const restockItem = (name) => {
    const current = inventory.value.find((item) => item.name === name);
    if (!current) {
      return;
    }
    inventory.value = inventory.value.map(
      (item) => item.name === name ? {
        ...item,
        stockLevel: item.stockLevel + item.reorderAmount,
        stock: formatStock(item.stockLevel + item.reorderAmount, item.stockUnit),
        daysLeft: item.daysLeft + 7,
        status: item.daysLeft + 7 >= 10 ? "Healthy" : "Watch"
      } : item
    );
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: `${name} restocked`,
        body: `Reorder sent to ${current.vendor} for ${current.reorderAmount} ${current.stockUnit}.`
      },
      ...timeline.value
    ].slice(0, 8);
    setNotice(`${name} replenishment logged and metrics updated.`, "success");
  };
  const applyInsight = (title) => {
    const existing = insights.value.find((item) => item.title === title);
    if (!existing || existing.applied) {
      return;
    }
    insights.value = insights.value.map(
      (item) => item.title === title ? {
        ...item,
        applied: true
      } : item
    );
    timeline.value = [
      {
        time: formatTimelineTime(),
        title: `${title} activated`,
        body: "The recommendation has been marked as applied and reflected in dashboard metrics."
      },
      ...timeline.value
    ].slice(0, 8);
    setNotice(`Insight applied: ${title}.`, "success");
  };
  const exportReport = () => {
    ({
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
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
    });
    setNotice("Report exported as a JSON snapshot of the live dashboard.", "success");
  };
  const orderActionLabel = (status) => nextOrderAction[status].label;
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
  };
};

export { useBrewlyticsData as a, useBrewlyticsWorkspace as u };;globalThis.__timing__.logEnd('Load chunks/build/useBrewlyticsWorkspace-Cia6rH_I');
//# sourceMappingURL=useBrewlyticsWorkspace-Cia6rH_I.mjs.map
