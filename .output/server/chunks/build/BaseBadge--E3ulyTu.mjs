globalThis.__timing__.logStart('Load chunks/build/BaseBadge--E3ulyTu');import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { u as useBrewlyticsWorkspace } from './useBrewlyticsWorkspace-Cia6rH_I.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppTopbar",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    const { selectedChannelLabel, syncedAt } = useBrewlyticsWorkspace();
    const syncLabel = computed(
      () => new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit"
      }).format(new Date(syncedAt.value))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between" }, _attrs))}><div class="max-w-2xl"><p class="text-xs font-semibold uppercase tracking-[0.26em] text-roast/65"> Brewlytics OS </p><h1 class="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">${ssrInterpolate(__props.title)}</h1><p class="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">${ssrInterpolate(__props.description)}</p></div><div class="flex flex-wrap items-center gap-3 self-start sm:self-auto"><button type="button" class="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-right shadow-panel transition hover:border-roast/15 hover:bg-white"><p class="text-xs uppercase tracking-[0.18em] text-stone-500"> Live sync </p><p class="mt-1 text-sm font-semibold text-ink"> Updated ${ssrInterpolate(unref(syncLabel))}</p></button><div class="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-panel"><p class="text-xs uppercase tracking-[0.18em] text-stone-500"> Active view </p><p class="mt-1 text-sm font-semibold text-ink">${ssrInterpolate(unref(selectedChannelLabel))}</p></div><button type="button" class="rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-foam transition hover:bg-roast"> Export report </button></div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/AppTopbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "glass-panel rounded-[28px] p-5 sm:p-6" }, _ctx.$attrs, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({ class: "overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-6 lg:grid-cols-[1.5fr,0.9fr] lg:items-end"${_scopeId}><div${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.24em] text-roast/70"${_scopeId}>${ssrInterpolate(__props.eyebrow)}</p><h2 class="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"${_scopeId}>${ssrInterpolate(__props.title)}</h2><p class="mt-4 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base"${_scopeId}>${ssrInterpolate(__props.description)}</p></div><div class="rounded-[28px] bg-ink p-5 text-foam"${_scopeId}><p class="text-xs uppercase tracking-[0.18em] text-foam/70"${_scopeId}> Daily briefing </p><p class="mt-3 text-sm leading-6 text-foam/80"${_scopeId}> Espresso demand spikes first, pastry attachment follows within 18 minutes, and cold drinks recover the afternoon slump. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-6 lg:grid-cols-[1.5fr,0.9fr] lg:items-end" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.24em] text-roast/70" }, toDisplayString(__props.eyebrow), 1),
                  createVNode("h2", { class: "mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "mt-4 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base" }, toDisplayString(__props.description), 1)
                ]),
                createVNode("div", { class: "rounded-[28px] bg-ink p-5 text-foam" }, [
                  createVNode("p", { class: "text-xs uppercase tracking-[0.18em] text-foam/70" }, " Daily briefing "),
                  createVNode("p", { class: "mt-3 text-sm leading-6 text-foam/80" }, " Espresso demand spikes first, pastry attachment follows within 18 minutes, and cold drinks recover the afternoon slump. ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/PageHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StatStrip",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-grid grid-cols-1 md:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: item.label
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-sm font-medium text-stone-500"${_scopeId}>${ssrInterpolate(item.label)}</p><p class="mt-4 font-display text-3xl font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.value)}</p><p class="mt-3 text-sm leading-6 text-stone-600"${_scopeId}>${ssrInterpolate(item.note)}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-sm font-medium text-stone-500" }, toDisplayString(item.label), 1),
                createVNode("p", { class: "mt-4 font-display text-3xl font-semibold text-ink" }, toDisplayString(item.value), 1),
                createVNode("p", { class: "mt-3 text-sm leading-6 text-stone-600" }, toDisplayString(item.note), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/StatStrip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseBadge",
  __ssrInlineRender: true,
  props: {
    tone: { default: "neutral" },
    pill: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const toneClass = computed(() => {
      switch (props.tone) {
        case "success":
          return "bg-sage/15 text-pine";
        case "warning":
          return "bg-crema/25 text-roast";
        case "danger":
          return "bg-ember/15 text-ember";
        case "accent":
          return "bg-roast text-foam";
        default:
          return "bg-white/70 text-stone-600";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [
          "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
          __props.pill ? "rounded-full" : "rounded-xl",
          unref(toneClass)
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$4 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main$3 as c, _sfc_main as d };;globalThis.__timing__.logEnd('Load chunks/build/BaseBadge--E3ulyTu');
//# sourceMappingURL=BaseBadge--E3ulyTu.mjs.map
