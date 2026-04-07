globalThis.__timing__.logStart('Load chunks/build/InsightPanel-BL7Nn0A0');import { c as _sfc_main$3, d as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightPanel",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  emits: ["apply"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$3;
      const _component_BaseBadge = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}> Smart recommendations </h3><p class="mt-1 text-sm text-stone-500"${_scopeId}> Signals translated into practical next actions for the team. </p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` AI summary `);
                } else {
                  return [
                    createTextVNode(" AI summary ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item) => {
              _push2(`<article class="rounded-[24px] border border-white/80 bg-white/70 p-5"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-roast/70"${_scopeId}>${ssrInterpolate(item.label)}</p><h4 class="mt-3 text-lg font-semibold text-ink"${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="mt-3 text-sm leading-6 text-stone-600"${_scopeId}>${ssrInterpolate(item.body)}</p><div class="mt-4 flex justify-end"${_scopeId}><button type="button" class="${ssrRenderClass([item.applied ? "bg-sage/15 text-pine" : "bg-ink text-foam hover:bg-roast", "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition"])}"${ssrIncludeBooleanAttr(item.applied) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(item.applied ? "Applied" : "Apply playbook")}</button></div></article>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, " Smart recommendations "),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, " Signals translated into practical next actions for the team. ")
                ]),
                createVNode(_component_BaseBadge, { tone: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode(" AI summary ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 space-y-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
                  return openBlock(), createBlock("article", {
                    key: item.title,
                    class: "rounded-[24px] border border-white/80 bg-white/70 p-5"
                  }, [
                    createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-roast/70" }, toDisplayString(item.label), 1),
                    createVNode("h4", { class: "mt-3 text-lg font-semibold text-ink" }, toDisplayString(item.title), 1),
                    createVNode("p", { class: "mt-3 text-sm leading-6 text-stone-600" }, toDisplayString(item.body), 1),
                    createVNode("div", { class: "mt-4 flex justify-end" }, [
                      createVNode("button", {
                        type: "button",
                        class: ["rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition", item.applied ? "bg-sage/15 text-pine" : "bg-ink text-foam hover:bg-roast"],
                        disabled: item.applied,
                        onClick: ($event) => emit("apply", item.title)
                      }, toDisplayString(item.applied ? "Applied" : "Apply playbook"), 11, ["disabled", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/InsightPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/InsightPanel-BL7Nn0A0');
//# sourceMappingURL=InsightPanel-BL7Nn0A0.mjs.map
