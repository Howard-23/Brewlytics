globalThis.__timing__.logStart('Load chunks/build/SegmentCards-BeBsUptd');import { c as _sfc_main$3 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SegmentCards",
  __ssrInlineRender: true,
  props: {
    items: {},
    focusedSegment: {}
  },
  emits: ["focus"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "data-grid grid-cols-1 xl:grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: item.name,
          class: "overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([[item.color, __props.focusedSegment === item.name ? "ring-2 ring-white/70" : ""], "rounded-[24px] bg-gradient-to-br p-5 text-foam transition"])}"${_scopeId}><p class="text-sm uppercase tracking-[0.18em] text-foam/75"${_scopeId}> Segment </p><h3 class="mt-3 font-display text-2xl font-semibold"${_scopeId}>${ssrInterpolate(item.name)}</h3><div class="mt-8 grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><p class="text-xs uppercase tracking-[0.16em] text-foam/70"${_scopeId}>Audience</p><p class="mt-2 text-2xl font-semibold"${_scopeId}>${ssrInterpolate(item.count)}</p></div><div${_scopeId}><p class="text-xs uppercase tracking-[0.16em] text-foam/70"${_scopeId}>Avg spend</p><p class="mt-2 text-2xl font-semibold"${_scopeId}>${ssrInterpolate(item.spend)}</p></div></div><p class="mt-6 text-sm leading-6 text-foam/80"${_scopeId}>${ssrInterpolate(item.trend)}</p><button type="button" class="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-white/10"${_scopeId}>${ssrInterpolate(__props.focusedSegment === item.name ? "Clear focus" : "Focus segment")}</button></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["rounded-[24px] bg-gradient-to-br p-5 text-foam transition", [item.color, __props.focusedSegment === item.name ? "ring-2 ring-white/70" : ""]]
                }, [
                  createVNode("p", { class: "text-sm uppercase tracking-[0.18em] text-foam/75" }, " Segment "),
                  createVNode("h3", { class: "mt-3 font-display text-2xl font-semibold" }, toDisplayString(item.name), 1),
                  createVNode("div", { class: "mt-8 grid grid-cols-2 gap-4" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs uppercase tracking-[0.16em] text-foam/70" }, "Audience"),
                      createVNode("p", { class: "mt-2 text-2xl font-semibold" }, toDisplayString(item.count), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs uppercase tracking-[0.16em] text-foam/70" }, "Avg spend"),
                      createVNode("p", { class: "mt-2 text-2xl font-semibold" }, toDisplayString(item.spend), 1)
                    ])
                  ]),
                  createVNode("p", { class: "mt-6 text-sm leading-6 text-foam/80" }, toDisplayString(item.trend), 1),
                  createVNode("button", {
                    type: "button",
                    class: "mt-6 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-white/10",
                    onClick: ($event) => emit("focus", item.name)
                  }, toDisplayString(__props.focusedSegment === item.name ? "Clear focus" : "Focus segment"), 9, ["onClick"])
                ], 2)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/SegmentCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/SegmentCards-BeBsUptd');
//# sourceMappingURL=SegmentCards-BeBsUptd.mjs.map
