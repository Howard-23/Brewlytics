globalThis.__timing__.logStart('Load chunks/build/orders-_Yd_Soem');import { _ as _sfc_main$4, a as _sfc_main$2, b as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { _ as _sfc_main$3 } from './OrderTable-DEsSXGV3.mjs';
import { _ as _sfc_main$5 } from './TimelineCard-CPvx-yVg.mjs';
import { _ as _sfc_main$6 } from './AreaTrendChart-DiKsjSxT.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';
import { u as useBrewlyticsWorkspace } from './useBrewlyticsWorkspace-Cia6rH_I.mjs';
import { u as useSeoMeta } from './v3-D3yb2fAg.mjs';
import './server.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/LEGION/Downloads/New%20folder/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/devalue/index.js';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue-router/vue-router.node.mjs';

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
