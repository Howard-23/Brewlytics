import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./BaseBadge--E3ulyTu.js";
import { _ as _sfc_main$5 } from "./AreaTrendChart-DiKsjSxT.js";
import { _ as _sfc_main$6 } from "./InsightPanel-BL7Nn0A0.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./ChannelSplitCard-C3_-cO6x.js";
import { _ as _sfc_main$9 } from "./TimelineCard-CPvx-yVg.js";
import { defineComponent, mergeProps, useSSRContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$a } from "./SegmentCards-BeBsUptd.js";
import { _ as _sfc_main$b } from "./OrderTable-DEsSXGV3.js";
import { u as useBrewlyticsWorkspace } from "./useBrewlyticsWorkspace-Cia6rH_I.js";
import { a as useSeoMeta } from "./v3-D3yb2fAg.js";
import "../server.mjs";
import "C:/Users/LEGION/Downloads/New folder/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/LEGION/Downloads/New folder/node_modules/hookable/dist/index.mjs";
import "C:/Users/LEGION/Downloads/New folder/node_modules/unctx/dist/index.mjs";
import "C:/Users/LEGION/Downloads/New folder/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/LEGION/Downloads/New folder/node_modules/defu/dist/defu.mjs";
import "C:/Users/LEGION/Downloads/New folder/node_modules/ufo/dist/index.mjs";
import "C:/Users/LEGION/Downloads/New folder/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, _attrs))}><div class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-[0.24em] text-roast/70">${ssrInterpolate(__props.eyebrow)}</p><h2 class="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">${ssrInterpolate(__props.title)}</h2><p class="mt-3 text-sm leading-6 text-stone-600 sm:text-base">${ssrInterpolate(__props.description)}</p></div>`);
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionHeading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
    } = useBrewlyticsWorkspace();
    const activeOrderCount = computed(() => Number(orderStats.value[0]?.value.replace(/,/g, "") ?? "0"));
    useSeoMeta({
      title: "Overview",
      description: "Overview dashboard for Brewlytics coffee shop operations."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$2;
      const _component_PageHero = _sfc_main$3;
      const _component_StatStrip = _sfc_main$4;
      const _component_AreaTrendChart = _sfc_main$5;
      const _component_InsightPanel = _sfc_main$6;
      const _component_KpiCard = _sfc_main$7;
      const _component_ChannelSplitCard = _sfc_main$8;
      const _component_TimelineCard = _sfc_main$9;
      const _component_SectionHeading = _sfc_main$1;
      const _component_SegmentCards = _sfc_main$a;
      const _component_OrderTable = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppTopbar, {
        title: "Coffee operations, translated into sharp decisions.",
        description: "Brewlytics connects revenue, queue flow, stock health, and customer behavior in one control layer for modern coffee teams."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Operator overview",
        title: "See the pulse of every shift without hunting through spreadsheets.",
        description: "Designed for multi-location coffee brands that need fast answers, cleaner handoffs, and calmer service peaks."
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatStrip, { items: unref(overviewStats) }, null, _parent));
      _push(`<section class="data-grid grid-cols-1 xl:grid-cols-[1.4fr,0.9fr]">`);
      _push(ssrRenderComponent(_component_AreaTrendChart, {
        title: "Revenue momentum",
        subtitle: "Seven-day sales performance across the current active dashboard view.",
        points: unref(filteredRevenueSeries)
      }, null, _parent));
      _push(ssrRenderComponent(_component_InsightPanel, {
        items: unref(currentInsights),
        onApply: unref(applyInsight)
      }, null, _parent));
      _push(`</section><section class="data-grid grid-cols-1 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(kpis), (metric) => {
        _push(ssrRenderComponent(_component_KpiCard, {
          key: metric.title,
          metric
        }, null, _parent));
      });
      _push(`<!--]--></section><section class="data-grid grid-cols-1 xl:grid-cols-[1.1fr,1fr]">`);
      _push(ssrRenderComponent(_component_ChannelSplitCard, {
        title: "Sales mix",
        subtitle: "Order channel distribution for the current trading window.",
        items: unref(channelSplit),
        "selected-channel": unref(selectedChannel),
        onSelectChannel: unref(setSelectedChannel)
      }, null, _parent));
      _push(ssrRenderComponent(_component_TimelineCard, {
        items: unref(timelineEntries),
        onLog: unref(logShiftUpdate)
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        eyebrow: "Customer lens",
        title: "Segments worth protecting and growing",
        description: "Customer insights stay practical: who spends most, who visits often, and where campaigns will compound."
      }, null, _parent));
      _push(ssrRenderComponent(_component_SegmentCards, {
        items: unref(segments),
        "focused-segment": unref(focusedSegment),
        onFocus: unref(setFocusedSegment)
      }, null, _parent));
      _push(ssrRenderComponent(_component_OrderTable, {
        items: unref(filteredOrders),
        "active-count": unref(activeOrderCount),
        "search-value": unref(orderSearch),
        "status-filter": unref(orderStatusFilter),
        onAdvanceStatus: unref(updateOrderStatus),
        "onUpdate:searchValue": unref(setOrderSearch),
        "onUpdate:statusFilter": unref(setOrderStatusFilter)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CGn25Caa.js.map
