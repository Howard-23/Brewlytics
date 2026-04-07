globalThis.__timing__.logStart('Load chunks/build/TimelineCard-CPvx-yVg');import { c as _sfc_main$3, d as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimelineCard",
  __ssrInlineRender: true,
  props: {
    items: {},
    showAction: { type: Boolean, default: true }
  },
  emits: ["log"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      const _component_BaseBadge = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}> Shift timeline </h3><p class="mt-1 text-sm text-stone-500"${_scopeId}> Operational checkpoints pulled from the live store feed. </p></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "neutral" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Today `);
                } else {
                  return [
                    createTextVNode(" Today ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.showAction) {
              _push2(`<button type="button" class="rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam"${_scopeId}> Log update </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="mt-8 space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<div class="grid gap-4 sm:grid-cols-[72px,1fr]"${_scopeId}><div class="text-sm font-semibold text-roast"${_scopeId}>${ssrInterpolate(item.time)}</div><div class="relative rounded-[24px] border border-white/80 bg-white/70 p-5"${_scopeId}><span class="absolute -left-2 top-6 hidden h-4 w-4 rounded-full border-4 border-mist bg-roast sm:block"${_scopeId}></span><h4 class="text-base font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="mt-2 text-sm leading-6 text-stone-600"${_scopeId}>${ssrInterpolate(item.body)}</p></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, " Shift timeline "),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, " Operational checkpoints pulled from the live store feed. ")
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseBadge, { tone: "neutral" }, {
                    default: withCtx(() => [
                      createTextVNode(" Today ")
                    ]),
                    _: 1
                  }),
                  __props.showAction ? (openBlock(), createBlock("button", {
                    key: 0,
                    type: "button",
                    class: "rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam",
                    onClick: ($event) => emit("log")
                  }, " Log update ", 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "mt-8 space-y-6" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                  return openBlock(), createBlock("div", {
                    key: `${item.time}-${item.title}`,
                    class: "grid gap-4 sm:grid-cols-[72px,1fr]"
                  }, [
                    createVNode("div", { class: "text-sm font-semibold text-roast" }, toDisplayString(item.time), 1),
                    createVNode("div", { class: "relative rounded-[24px] border border-white/80 bg-white/70 p-5" }, [
                      createVNode("span", { class: "absolute -left-2 top-6 hidden h-4 w-4 rounded-full border-4 border-mist bg-roast sm:block" }),
                      createVNode("h4", { class: "text-base font-semibold text-ink" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "mt-2 text-sm leading-6 text-stone-600" }, toDisplayString(item.body), 1)
                    ])
                  ]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/TimelineCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/TimelineCard-CPvx-yVg');
//# sourceMappingURL=TimelineCard-CPvx-yVg.mjs.map
