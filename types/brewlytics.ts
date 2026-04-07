export interface NavItem {
  label: string
  to: string
  shortLabel: string
}

export type OrderStatus = 'Brewing' | 'Ready' | 'Delivered'
export type InventoryStatus = 'Healthy' | 'Watch' | 'Critical'
export type WorkspaceNoticeTone = 'neutral' | 'success' | 'warning'

export interface KpiMetric {
  title: string
  value: string
  delta: number
  description: string
  tone: 'roast' | 'sage' | 'ember'
}

export interface RevenuePoint {
  label: string
  value: number
}

export interface ChannelSplit {
  label: string
  value: number
  color: string
}

export interface OrderTicket {
  id: string
  customer: string
  item: string
  channel: string
  total: string
  totalValue: number
  time: string
  status: OrderStatus
}

export interface InventoryItem {
  name: string
  stock: string
  stockLevel: number
  stockUnit: string
  reorderAmount: number
  daysLeft: number
  status: InventoryStatus
  vendor: string
}

export interface CustomerSegment {
  name: string
  count: string
  countValue: number
  spend: string
  spendValue: number
  trend: string
  color: string
}

export interface InsightNote {
  title: string
  body: string
  label: string
  applied: boolean
}

export interface TimelineEvent {
  time: string
  title: string
  body: string
}

export interface PageStat {
  label: string
  value: string
  note: string
}

export interface WorkspaceNotice {
  message: string
  tone: WorkspaceNoticeTone
}
