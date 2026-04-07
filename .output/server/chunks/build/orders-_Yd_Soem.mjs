globalThis.__timing__.logStart('Load chunks/build/orders-_Yd_Soem');import { _ as _sfc_main$4, a as _sfc_main$2, b as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { _ as _sfc_main$3 } from './OrderTable-DEsSXGV3.mjs';
import { _ as _sfc_main$5 } from './TimelineCard-CPvx-yVg.mjs';
import { _ as _sfc_main$6 } from './AreaTrendChart-DiKsjSxT.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBrewlyticsWorkspace } from './useBrewlyticsWorkspace-Cia6rH_I.mjs';
import { u as useSeoMeta } from './v3-D3yb2fAg.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
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
    } = useBrewlyticsWorkspace();
    const activeOrderCount = computed(() => {
      var _a, _b;
      return Number((_b = (_a = orderStats.value[0]) == null ? void 0 : _a.value.replace(/,/g, "")) != null ? _b : "0");
    });
    useSeoMeta({
      title: "Orders",
      description: "Order operations for Brewlytics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$4;
      const _component_PageHero = _sfc_main$2;
      const _component_StatStrip = _sfc_main$1;
      const _component_OrderTable = _sfc_main$3;
      const _component_TimelineCard = _sfc_main$5;
      const _component_AreaTrendChart = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppTopbar, {
        title: "Order operations that stay calm during the rush.",
        description: "Monitor active tickets, fulfillment speed, and service handoffs from one place with no queue blind spots."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Service operations",
        title: "Spot pressure before guests feel it.",
        description: "Filter live orders, search tickets, and advance status directly from the dashboard."
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatStrip, { items: unref(orderStats) }, null, _parent));
      _push(`<section class="data-grid grid-cols-1 xl:grid-cols-[1.2fr,0.9fr]">`);
      _push(ssrRenderComponent(_component_OrderTable, {
        items: unref(filteredOrders),
        "active-count": unref(activeOrderCount),
        "search-value": unref(orderSearch),
        "status-filter": unref(orderStatusFilter),
        onAdvanceStatus: unref(updateOrderStatus),
        "onUpdate:searchValue": unref(setOrderSearch),
        "onUpdate:statusFilter": unref(setOrderStatusFilter)
      }, null, _parent));
      _push(ssrRenderComponent(_component_TimelineCard, {
        items: unref(timelineEntries),
        onLog: unref(logShiftUpdate)
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_AreaTrendChart, {
        title: "Service demand rhythm",
        subtitle: "Peak load pattern used to plan staffing and batching windows.",
        points: unref(filteredOrderLoadSeries)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/orders-_Yd_Soem');
//# sourceMappingURL=orders-_Yd_Soem.mjs.map
