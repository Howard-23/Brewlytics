globalThis.__timing__.logStart('Load chunks/build/OrderTable-DEsSXGV3');import { c as _sfc_main$3, d as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderTable",
  __ssrInlineRender: true,
  props: {
    items: {},
    activeCount: {},
    searchValue: {},
    statusFilter: {}
  },
  emits: ["advance-status", "update:searchValue", "update:statusFilter"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toneMap = {
      Brewing: "warning",
      Delivered: "neutral",
      Ready: "success"
    };
    const statusOptions = ["All", "Brewing", "Ready", "Delivered"];
    const actionLabel = (status) => {
      switch (status) {
        case "Brewing":
          return "Mark ready";
        case "Ready":
          return "Deliver";
        default:
          return "Reopen";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      const _component_BaseBadge = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}> Order flow </h3><p class="mt-1 text-sm text-stone-500"${_scopeId}> Live ticket visibility across in-store, app pickup, and delivery. </p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.activeCount)} active `);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.activeCount) + " active ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"${_scopeId}><label class="relative block lg:max-w-xs lg:flex-1"${_scopeId}><span class="sr-only"${_scopeId}>Search orders</span><input${ssrRenderAttr("value", __props.searchValue)} type="text" placeholder="Search guest, ticket, item..." class="w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-roast/25"${_scopeId}></label><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(statusOptions, (option) => {
              _push2(`<button type="button" class="${ssrRenderClass([__props.statusFilter === option ? "bg-ink text-foam" : "bg-white/75 text-stone-500 hover:text-ink", "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"])}"${_scopeId}>${ssrInterpolate(option)}</button>`);
            });
            _push2(`<!--]--></div></div><div class="mt-6 overflow-x-auto"${_scopeId}><table class="min-w-full border-separate border-spacing-y-3"${_scopeId}><thead${_scopeId}><tr class="text-left text-xs uppercase tracking-[0.18em] text-stone-500"${_scopeId}><th class="px-4"${_scopeId}>Ticket</th><th class="px-4"${_scopeId}>Guest</th><th class="px-4"${_scopeId}>Item</th><th class="px-4"${_scopeId}>Channel</th><th class="px-4"${_scopeId}>Total</th><th class="px-4"${_scopeId}>Age</th><th class="px-4"${_scopeId}>Status</th><th class="px-4 text-right"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<tr class="rounded-2xl bg-white/75 text-sm text-ink shadow-[0_10px_30px_rgba(31,24,17,0.05)]"${_scopeId}><td class="rounded-l-2xl px-4 py-4 font-semibold"${_scopeId}>${ssrInterpolate(item.id)}</td><td class="px-4 py-4"${_scopeId}>${ssrInterpolate(item.customer)}</td><td class="px-4 py-4"${_scopeId}>${ssrInterpolate(item.item)}</td><td class="px-4 py-4 text-stone-500"${_scopeId}>${ssrInterpolate(item.channel)}</td><td class="px-4 py-4 font-semibold"${_scopeId}>${ssrInterpolate(item.total)}</td><td class="px-4 py-4 text-stone-500"${_scopeId}>${ssrInterpolate(item.time)}</td><td class="px-4 py-4"${_scopeId}>`);
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
              _push2(`</td><td class="rounded-r-2xl px-4 py-4 text-right"${_scopeId}><button type="button" class="rounded-full bg-stone-900/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam"${_scopeId}>${ssrInterpolate(actionLabel(item.status))}</button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.items.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="8" class="rounded-2xl bg-white/75 px-4 py-8 text-center text-sm text-stone-500"${_scopeId}> No orders match the current filters. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, " Order flow "),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, " Live ticket visibility across in-store, app pickup, and delivery. ")
                ]),
                createVNode(_component_BaseBadge, { tone: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.activeCount) + " active ", 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" }, [
                createVNode("label", { class: "relative block lg:max-w-xs lg:flex-1" }, [
                  createVNode("span", { class: "sr-only" }, "Search orders"),
                  createVNode("input", {
                    value: __props.searchValue,
                    type: "text",
                    placeholder: "Search guest, ticket, item...",
                    class: "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-roast/25",
                    onInput: ($event) => emit("update:searchValue", $event.target.value)
                  }, null, 40, ["value", "onInput"])
                ]),
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(statusOptions, (option) => {
                    return createVNode("button", {
                      key: option,
                      type: "button",
                      class: ["rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition", __props.statusFilter === option ? "bg-ink text-foam" : "bg-white/75 text-stone-500 hover:text-ink"],
                      onClick: ($event) => emit("update:statusFilter", option)
                    }, toDisplayString(option), 11, ["onClick"]);
                  }), 64))
                ])
              ]),
              createVNode("div", { class: "mt-6 overflow-x-auto" }, [
                createVNode("table", { class: "min-w-full border-separate border-spacing-y-3" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "text-left text-xs uppercase tracking-[0.18em] text-stone-500" }, [
                      createVNode("th", { class: "px-4" }, "Ticket"),
                      createVNode("th", { class: "px-4" }, "Guest"),
                      createVNode("th", { class: "px-4" }, "Item"),
                      createVNode("th", { class: "px-4" }, "Channel"),
                      createVNode("th", { class: "px-4" }, "Total"),
                      createVNode("th", { class: "px-4" }, "Age"),
                      createVNode("th", { class: "px-4" }, "Status"),
                      createVNode("th", { class: "px-4 text-right" }, "Action")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: "rounded-2xl bg-white/75 text-sm text-ink shadow-[0_10px_30px_rgba(31,24,17,0.05)]"
                      }, [
                        createVNode("td", { class: "rounded-l-2xl px-4 py-4 font-semibold" }, toDisplayString(item.id), 1),
                        createVNode("td", { class: "px-4 py-4" }, toDisplayString(item.customer), 1),
                        createVNode("td", { class: "px-4 py-4" }, toDisplayString(item.item), 1),
                        createVNode("td", { class: "px-4 py-4 text-stone-500" }, toDisplayString(item.channel), 1),
                        createVNode("td", { class: "px-4 py-4 font-semibold" }, toDisplayString(item.total), 1),
                        createVNode("td", { class: "px-4 py-4 text-stone-500" }, toDisplayString(item.time), 1),
                        createVNode("td", { class: "px-4 py-4" }, [
                          createVNode(_component_BaseBadge, {
                            tone: toneMap[item.status]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["tone"])
                        ]),
                        createVNode("td", { class: "rounded-r-2xl px-4 py-4 text-right" }, [
                          createVNode("button", {
                            type: "button",
                            class: "rounded-full bg-stone-900/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam",
                            onClick: ($event) => emit("advance-status", item.id)
                          }, toDisplayString(actionLabel(item.status)), 9, ["onClick"])
                        ])
                      ]);
                    }), 128)),
                    __props.items.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "8",
                        class: "rounded-2xl bg-white/75 px-4 py-8 text-center text-sm text-stone-500"
                      }, " No orders match the current filters. ")
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/OrderTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/OrderTable-DEsSXGV3');
//# sourceMappingURL=OrderTable-DEsSXGV3.mjs.map
