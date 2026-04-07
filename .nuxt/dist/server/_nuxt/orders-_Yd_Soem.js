import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./BaseBadge--E3ulyTu.js";
import { _ as _sfc_main$4 } from "./OrderTable-DEsSXGV3.js";
import { _ as _sfc_main$5 } from "./TimelineCard-CPvx-yVg.js";
import { _ as _sfc_main$6 } from "./AreaTrendChart-DiKsjSxT.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
    const activeOrderCount = computed(() => Number(orderStats.value[0]?.value.replace(/,/g, "") ?? "0"));
    useSeoMeta({
      title: "Orders",
      description: "Order operations for Brewlytics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$1;
      const _component_PageHero = _sfc_main$2;
      const _component_StatStrip = _sfc_main$3;
      const _component_OrderTable = _sfc_main$4;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=orders-_Yd_Soem.js.map
