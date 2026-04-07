globalThis.__timing__.logStart('Load chunks/build/inventory-BTKPlBeY');import { _ as _sfc_main$4, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$3$1, d as _sfc_main$6 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './InsightPanel-BL7Nn0A0.mjs';
import { _ as _sfc_main$5 } from './TimelineCard-CPvx-yVg.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InventoryList",
  __ssrInlineRender: true,
  props: {
    items: {},
    statusFilter: {},
    urgentCount: {}
  },
  emits: ["restock", "update:statusFilter"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toneMap = {
      Critical: "danger",
      Healthy: "success",
      Watch: "warning"
    };
    const statusOptions = ["All", "Healthy", "Watch", "Critical"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3$1;
      const _component_BaseBadge = _sfc_main$6;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}> Inventory runway </h3><p class="mt-1 text-sm text-stone-500"${_scopeId}> Replenishment health by key ingredients and packaging. </p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.urgentCount)} urgent vendor ${ssrInterpolate(__props.urgentCount === 1 ? "ping" : "pings")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.urgentCount) + " urgent vendor " + toDisplayString(__props.urgentCount === 1 ? "ping" : "pings"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(statusOptions, (option) => {
              _push2(`<button type="button" class="${ssrRenderClass([__props.statusFilter === option ? "bg-ink text-foam" : "bg-white/75 text-stone-500 hover:text-ink", "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"])}"${_scopeId}>${ssrInterpolate(option)}</button>`);
            });
            _push2(`<!--]--></div><div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<div class="rounded-[24px] border border-white/80 bg-white/70 p-4"${_scopeId}><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId}><div${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}><h4 class="text-base font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.name)}</h4>`);
              _push2(ssrRenderComponent(_component_BaseBadge, {
                tone: toneMap[item.status]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><p class="mt-2 text-sm text-stone-500"${_scopeId}>${ssrInterpolate(item.vendor)}</p></div><div class="grid grid-cols-2 gap-4 text-sm sm:text-right"${_scopeId}><div${_scopeId}><p class="text-stone-500"${_scopeId}>Available</p><p class="mt-1 font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.stock)}</p></div><div${_scopeId}><p class="text-stone-500"${_scopeId}>Runway</p><p class="mt-1 font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.daysLeft)} days</p></div></div></div><div class="mt-4 flex justify-end"${_scopeId}><button type="button" class="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-roast"${_scopeId}> Restock ${ssrInterpolate(item.reorderAmount)} ${ssrInterpolate(item.stockUnit)}</button></div></div>`);
            });
            _push2(`<!--]-->`);
            if (__props.items.length === 0) {
              _push2(`<div class="rounded-[24px] border border-white/80 bg-white/70 p-5 text-sm text-stone-500"${_scopeId}> No inventory items match the current health filter. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, " Inventory runway "),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, " Replenishment health by key ingredients and packaging. ")
                ]),
                createVNode(_component_BaseBadge, { tone: "warning" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.urgentCount) + " urgent vendor " + toDisplayString(__props.urgentCount === 1 ? "ping" : "pings"), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 flex flex-wrap gap-2" }, [
                (openBlock(), createBlock(Fragment, null, renderList(statusOptions, (option) => {
                  return createVNode("button", {
                    key: option,
                    type: "button",
                    class: ["rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition", __props.statusFilter === option ? "bg-ink text-foam" : "bg-white/75 text-stone-500 hover:text-ink"],
                    onClick: ($event) => emit("update:statusFilter", option)
                  }, toDisplayString(option), 11, ["onClick"]);
                }), 64))
              ]),
              createVNode("div", { class: "mt-6 space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.name,
                    class: "rounded-[24px] border border-white/80 bg-white/70 p-4"
                  }, [
                    createVNode("div", { class: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                          createVNode("h4", { class: "text-base font-semibold text-ink" }, toDisplayString(item.name), 1),
                          createVNode(_component_BaseBadge, {
                            tone: toneMap[item.status]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["tone"])
                        ]),
                        createVNode("p", { class: "mt-2 text-sm text-stone-500" }, toDisplayString(item.vendor), 1)
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 text-sm sm:text-right" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-stone-500" }, "Available"),
                          createVNode("p", { class: "mt-1 font-semibold text-ink" }, toDisplayString(item.stock), 1)
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-stone-500" }, "Runway"),
                          createVNode("p", { class: "mt-1 font-semibold text-ink" }, toDisplayString(item.daysLeft) + " days", 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-4 flex justify-end" }, [
                      createVNode("button", {
                        type: "button",
                        class: "rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-roast",
                        onClick: ($event) => emit("restock", item.name)
                      }, " Restock " + toDisplayString(item.reorderAmount) + " " + toDisplayString(item.stockUnit), 9, ["onClick"])
                    ])
                  ]);
                }), 128)),
                __props.items.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-[24px] border border-white/80 bg-white/70 p-5 text-sm text-stone-500"
                }, " No inventory items match the current health filter. ")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/InventoryList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inventory",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      applyInsight,
      currentInsights,
      filteredInventory,
      inventoryStats,
      inventoryStatusFilter,
      logShiftUpdate,
      restockItem,
      setInventoryStatusFilter,
      timelineEntries
    } = useBrewlyticsWorkspace();
    const urgentCount = computed(() => filteredInventory.value.filter((item) => item.status === "Critical").length);
    useSeoMeta({
      title: "Inventory",
      description: "Inventory management for Brewlytics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$4;
      const _component_PageHero = _sfc_main$2;
      const _component_StatStrip = _sfc_main$1$1;
      const _component_InventoryList = _sfc_main$1;
      const _component_InsightPanel = _sfc_main$3;
      const _component_TimelineCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppTopbar, {
        title: "Inventory visibility that protects margin and service.",
        description: "Keep ingredients, packaging, and vendor timing aligned with real demand so stockouts and waste stay rare."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Stock intelligence",
        title: "Balance freshness, availability, and vendor reliability in one operating view.",
        description: "Filter stock health, trigger replenishment, and let the metrics react immediately."
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatStrip, { items: unref(inventoryStats) }, null, _parent));
      _push(`<section class="data-grid grid-cols-1 xl:grid-cols-[1.3fr,0.9fr]">`);
      _push(ssrRenderComponent(_component_InventoryList, {
        items: unref(filteredInventory),
        "status-filter": unref(inventoryStatusFilter),
        "urgent-count": unref(urgentCount),
        onRestock: unref(restockItem),
        "onUpdate:statusFilter": unref(setInventoryStatusFilter)
      }, null, _parent));
      _push(ssrRenderComponent(_component_InsightPanel, {
        items: unref(currentInsights),
        onApply: unref(applyInsight)
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_TimelineCard, {
        items: unref(timelineEntries),
        onLog: unref(logShiftUpdate)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inventory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/inventory-BTKPlBeY');
//# sourceMappingURL=inventory-BTKPlBeY.mjs.map
