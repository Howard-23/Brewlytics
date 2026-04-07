globalThis.__timing__.logStart('Load chunks/build/ChannelSplitCard-C3_-cO6x');import { c as _sfc_main$3, d as _sfc_main$2 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KpiCard",
  __ssrInlineRender: true,
  props: {
    metric: {}
  },
  setup(__props) {
    const props = __props;
    const deltaTone = computed(() => {
      if (props.metric.delta > 0) {
        return props.metric.tone === "ember" ? "text-ember" : "text-pine";
      }
      return "text-ember";
    });
    const surfaceTone = computed(() => {
      switch (props.metric.tone) {
        case "sage":
          return "from-sage/18 to-white";
        case "ember":
          return "from-ember/18 to-white";
        default:
          return "from-roast/16 to-white";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      const _component_BaseBadge = _sfc_main$2;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({ class: "overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(surfaceTone), "rounded-[24px] bg-gradient-to-br p-5"])}"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-stone-500"${_scopeId}>${ssrInterpolate(__props.metric.title)}</p><p class="mt-3 font-display text-3xl font-semibold text-ink"${_scopeId}>${ssrInterpolate(__props.metric.value)}</p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, {
              tone: __props.metric.delta >= 0 ? "success" : "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.metric.delta >= 0 ? "+" : "")}${ssrInterpolate(__props.metric.delta)}% `);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.metric.delta >= 0 ? "+" : "") + toDisplayString(__props.metric.delta) + "% ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="mt-6 text-sm leading-6 text-stone-600"${_scopeId}>${ssrInterpolate(__props.metric.description)}</p><p class="${ssrRenderClass([unref(deltaTone), "mt-4 text-xs font-semibold uppercase tracking-[0.2em]"])}"${_scopeId}>${ssrInterpolate(__props.metric.delta >= 0 ? "Growing faster than target" : "Needs attention")}</p></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["rounded-[24px] bg-gradient-to-br p-5", unref(surfaceTone)]
              }, [
                createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-sm font-medium text-stone-500" }, toDisplayString(__props.metric.title), 1),
                    createVNode("p", { class: "mt-3 font-display text-3xl font-semibold text-ink" }, toDisplayString(__props.metric.value), 1)
                  ]),
                  createVNode(_component_BaseBadge, {
                    tone: __props.metric.delta >= 0 ? "success" : "danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.metric.delta >= 0 ? "+" : "") + toDisplayString(__props.metric.delta) + "% ", 1)
                    ]),
                    _: 1
                  }, 8, ["tone"])
                ]),
                createVNode("p", { class: "mt-6 text-sm leading-6 text-stone-600" }, toDisplayString(__props.metric.description), 1),
                createVNode("p", {
                  class: ["mt-4 text-xs font-semibold uppercase tracking-[0.2em]", unref(deltaTone)]
                }, toDisplayString(__props.metric.delta >= 0 ? "Growing faster than target" : "Needs attention"), 3)
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/KpiCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChannelSplitCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    items: {},
    selectedChannel: {}
  },
  emits: ["select-channel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const gradient = computed(() => {
      let progress = 0;
      return `conic-gradient(${props.items.map((item) => {
        const start = progress;
        progress += item.value;
        return `${item.color} ${start}% ${progress}%`;
      }).join(", ")})`;
    });
    const selectedShare = computed(() => {
      var _a, _b;
      if (props.selectedChannel === "All") {
        return 100;
      }
      return (_b = (_a = props.items.find((item) => item.label === props.selectedChannel)) == null ? void 0 : _a.value) != null ? _b : 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      const _component_BaseBadge = _sfc_main$2;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-start justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}>${ssrInterpolate(__props.title)}</h3><p class="mt-1 text-sm text-stone-500"${_scopeId}>${ssrInterpolate(__props.subtitle)}</p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "neutral" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 4 channels `);
                } else {
                  return [
                    createTextVNode(" 4 channels ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-8 grid gap-6 md:grid-cols-[200px,1fr] md:items-center"${_scopeId}><div class="mx-auto flex h-44 w-44 items-center justify-center rounded-full" style="${ssrRenderStyle({ background: unref(gradient) })}"${_scopeId}><div class="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-foam text-center shadow-panel"${_scopeId}><span class="text-xs uppercase tracking-[0.2em] text-stone-500"${_scopeId}>${ssrInterpolate(__props.selectedChannel === "All" ? "Blend" : "Focus")}</span><span class="mt-1 font-display text-2xl font-semibold text-ink"${_scopeId}>${ssrInterpolate(unref(selectedShare))}%</span></div></div><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<button type="button" class="${ssrRenderClass([__props.selectedChannel === item.label ? "border-roast/20 bg-roast text-foam" : "border-white/80 bg-white/70 hover:border-roast/15 hover:bg-white", "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition"])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="h-3 w-3 rounded-full" style="${ssrRenderStyle({ backgroundColor: item.color })}"${_scopeId}></span><span class="${ssrRenderClass([__props.selectedChannel === item.label ? "text-foam" : "text-ink", "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(item.label)}</span></div><span class="${ssrRenderClass([__props.selectedChannel === item.label ? "text-foam/80" : "text-stone-500", "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(item.value)}%</span></button>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, toDisplayString(__props.subtitle), 1)
                ]),
                createVNode(_component_BaseBadge, { tone: "neutral" }, {
                  default: withCtx(() => [
                    createTextVNode(" 4 channels ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-8 grid gap-6 md:grid-cols-[200px,1fr] md:items-center" }, [
                createVNode("div", {
                  class: "mx-auto flex h-44 w-44 items-center justify-center rounded-full",
                  style: { background: unref(gradient) }
                }, [
                  createVNode("div", { class: "flex h-24 w-24 flex-col items-center justify-center rounded-full bg-foam text-center shadow-panel" }, [
                    createVNode("span", { class: "text-xs uppercase tracking-[0.2em] text-stone-500" }, toDisplayString(__props.selectedChannel === "All" ? "Blend" : "Focus"), 1),
                    createVNode("span", { class: "mt-1 font-display text-2xl font-semibold text-ink" }, toDisplayString(unref(selectedShare)) + "%", 1)
                  ])
                ], 4),
                createVNode("div", { class: "space-y-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                    return openBlock(), createBlock("button", {
                      key: item.label,
                      type: "button",
                      class: ["flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition", __props.selectedChannel === item.label ? "border-roast/20 bg-roast text-foam" : "border-white/80 bg-white/70 hover:border-roast/15 hover:bg-white"],
                      onClick: ($event) => emit("select-channel", __props.selectedChannel === item.label ? "All" : item.label)
                    }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", {
                          class: "h-3 w-3 rounded-full",
                          style: { backgroundColor: item.color }
                        }, null, 4),
                        createVNode("span", {
                          class: ["text-sm font-semibold", __props.selectedChannel === item.label ? "text-foam" : "text-ink"]
                        }, toDisplayString(item.label), 3)
                      ]),
                      createVNode("span", {
                        class: ["text-sm font-semibold", __props.selectedChannel === item.label ? "text-foam/80" : "text-stone-500"]
                      }, toDisplayString(item.value) + "%", 3)
                    ], 10, ["onClick"]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ChannelSplitCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };;globalThis.__timing__.logEnd('Load chunks/build/ChannelSplitCard-C3_-cO6x');
//# sourceMappingURL=ChannelSplitCard-C3_-cO6x.mjs.map
