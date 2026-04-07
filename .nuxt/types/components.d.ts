
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AppNotice: typeof import("../../components/dashboard/AppNotice.vue")['default']
  AppSidebar: typeof import("../../components/dashboard/AppSidebar.vue")['default']
  AppTopbar: typeof import("../../components/dashboard/AppTopbar.vue")['default']
  AreaTrendChart: typeof import("../../components/dashboard/AreaTrendChart.vue")['default']
  ChannelSplitCard: typeof import("../../components/dashboard/ChannelSplitCard.vue")['default']
  InsightPanel: typeof import("../../components/dashboard/InsightPanel.vue")['default']
  InventoryList: typeof import("../../components/dashboard/InventoryList.vue")['default']
  KpiCard: typeof import("../../components/dashboard/KpiCard.vue")['default']
  MobileNav: typeof import("../../components/dashboard/MobileNav.vue")['default']
  OrderTable: typeof import("../../components/dashboard/OrderTable.vue")['default']
  PageHero: typeof import("../../components/dashboard/PageHero.vue")['default']
  SegmentCards: typeof import("../../components/dashboard/SegmentCards.vue")['default']
  StatStrip: typeof import("../../components/dashboard/StatStrip.vue")['default']
  TimelineCard: typeof import("../../components/dashboard/TimelineCard.vue")['default']
  BaseBadge: typeof import("../../components/ui/BaseBadge.vue")['default']
  BaseCard: typeof import("../../components/ui/BaseCard.vue")['default']
  SectionHeading: typeof import("../../components/ui/SectionHeading.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAppNotice: LazyComponent<typeof import("../../components/dashboard/AppNotice.vue")['default']>
  LazyAppSidebar: LazyComponent<typeof import("../../components/dashboard/AppSidebar.vue")['default']>
  LazyAppTopbar: LazyComponent<typeof import("../../components/dashboard/AppTopbar.vue")['default']>
  LazyAreaTrendChart: LazyComponent<typeof import("../../components/dashboard/AreaTrendChart.vue")['default']>
  LazyChannelSplitCard: LazyComponent<typeof import("../../components/dashboard/ChannelSplitCard.vue")['default']>
  LazyInsightPanel: LazyComponent<typeof import("../../components/dashboard/InsightPanel.vue")['default']>
  LazyInventoryList: LazyComponent<typeof import("../../components/dashboard/InventoryList.vue")['default']>
  LazyKpiCard: LazyComponent<typeof import("../../components/dashboard/KpiCard.vue")['default']>
  LazyMobileNav: LazyComponent<typeof import("../../components/dashboard/MobileNav.vue")['default']>
  LazyOrderTable: LazyComponent<typeof import("../../components/dashboard/OrderTable.vue")['default']>
  LazyPageHero: LazyComponent<typeof import("../../components/dashboard/PageHero.vue")['default']>
  LazySegmentCards: LazyComponent<typeof import("../../components/dashboard/SegmentCards.vue")['default']>
  LazyStatStrip: LazyComponent<typeof import("../../components/dashboard/StatStrip.vue")['default']>
  LazyTimelineCard: LazyComponent<typeof import("../../components/dashboard/TimelineCard.vue")['default']>
  LazyBaseBadge: LazyComponent<typeof import("../../components/ui/BaseBadge.vue")['default']>
  LazyBaseCard: LazyComponent<typeof import("../../components/ui/BaseCard.vue")['default']>
  LazySectionHeading: LazyComponent<typeof import("../../components/ui/SectionHeading.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
