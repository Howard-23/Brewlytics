import { c as _sfc_main$1, d as _sfc_main$2 } from "./BaseBadge--E3ulyTu.js";
import { defineComponent, computed, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
const width = 420;
const height = 220;
const padding = 18;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AreaTrendChart",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    points: {}
  },
  setup(__props) {
    const props = __props;
    const maxValue = computed(() => Math.max(...props.points.map((point) => point.value), 1));
    const coordinates = computed(
      () => props.points.map((point, index) => {
        const x = padding + index * (width - padding * 2) / Math.max(props.points.length - 1, 1);
        const y = height - padding - point.value / maxValue.value * (height - padding * 2);
        return { ...point, x, y };
      })
    );
    const linePath = computed(
      () => coordinates.value.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")
    );
    const areaPath = computed(() => {
      const first = coordinates.value[0];
      const last = coordinates.value[coordinates.value.length - 1];
      if (!first || !last) {
        return "";
      }
      return `${linePath.value} L ${last.x} ${height - padding} L ${first.x} ${height - padding} Z`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$1;
      const _component_BaseBadge = _sfc_main$2;
      _push(ssrRenderComponent(_component_BaseCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"${_scopeId}><div${_scopeId}><h3 class="font-display text-xl font-semibold text-ink"${_scopeId}>${ssrInterpolate(__props.title)}</h3><p class="mt-1 text-sm text-stone-500"${_scopeId}>${ssrInterpolate(__props.subtitle)}</p></div>`);
            _push2(ssrRenderComponent(_component_BaseBadge, { tone: "accent" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Live curve `);
                } else {
                  return [
                    createTextVNode(" Live curve ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-roast/5 p-4 sm:p-5"${_scopeId}><svg viewBox="0 0 420 220" class="h-52 w-full" fill="none" role="img" aria-label="Trend chart"${_scopeId}><defs${_scopeId}><linearGradient id="brewlyticsArea" x1="0" y1="0" x2="0" y2="1"${_scopeId}><stop offset="0%" stop-color="#5f3b2a" stop-opacity="0.24"${_scopeId}></stop><stop offset="100%" stop-color="#5f3b2a" stop-opacity="0.04"${_scopeId}></stop></linearGradient></defs><!--[-->`);
            ssrRenderList(4, (index) => {
              _push2(`<line x1="0"${ssrRenderAttr("y1", index * 44)} x2="420"${ssrRenderAttr("y2", index * 44)} stroke="rgba(95, 59, 42, 0.08)" stroke-dasharray="4 8"${_scopeId}></line>`);
            });
            _push2(`<!--]--><path${ssrRenderAttr("d", unref(areaPath))} fill="url(#brewlyticsArea)"${_scopeId}></path><path${ssrRenderAttr("d", unref(linePath))} stroke="#5f3b2a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><!--[-->`);
            ssrRenderList(unref(coordinates), (point) => {
              _push2(`<circle${ssrRenderAttr("cx", point.x)}${ssrRenderAttr("cy", point.y)} r="5" fill="#fffaf2" stroke="#5f3b2a" stroke-width="3"${_scopeId}></circle>`);
            });
            _push2(`<!--]--></svg><div class="mt-3 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-500"${_scopeId}><!--[-->`);
            ssrRenderList(__props.points, (point) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(point.label)}</span>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "font-display text-xl font-semibold text-ink" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "mt-1 text-sm text-stone-500" }, toDisplayString(__props.subtitle), 1)
                ]),
                createVNode(_component_BaseBadge, { tone: "accent" }, {
                  default: withCtx(() => [
                    createTextVNode(" Live curve ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-8 overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-roast/5 p-4 sm:p-5" }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 420 220",
                  class: "h-52 w-full",
                  fill: "none",
                  role: "img",
                  "aria-label": "Trend chart"
                }, [
                  createVNode("defs", null, [
                    createVNode("linearGradient", {
                      id: "brewlyticsArea",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "1"
                    }, [
                      createVNode("stop", {
                        offset: "0%",
                        "stop-color": "#5f3b2a",
                        "stop-opacity": "0.24"
                      }),
                      createVNode("stop", {
                        offset: "100%",
                        "stop-color": "#5f3b2a",
                        "stop-opacity": "0.04"
                      })
                    ])
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(4, (index) => {
                    return createVNode("line", {
                      key: index,
                      x1: "0",
                      y1: index * 44,
                      x2: "420",
                      y2: index * 44,
                      stroke: "rgba(95, 59, 42, 0.08)",
                      "stroke-dasharray": "4 8"
                    }, null, 8, ["y1", "y2"]);
                  }), 64)),
                  createVNode("path", {
                    d: unref(areaPath),
                    fill: "url(#brewlyticsArea)"
                  }, null, 8, ["d"]),
                  createVNode("path", {
                    d: unref(linePath),
                    stroke: "#5f3b2a",
                    "stroke-width": "4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, null, 8, ["d"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(coordinates), (point) => {
                    return openBlock(), createBlock("circle", {
                      key: point.label,
                      cx: point.x,
                      cy: point.y,
                      r: "5",
                      fill: "#fffaf2",
                      stroke: "#5f3b2a",
                      "stroke-width": "3"
                    }, null, 8, ["cx", "cy"]);
                  }), 128))
                ])),
                createVNode("div", { class: "mt-3 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-500" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.points, (point) => {
                    return openBlock(), createBlock("span", {
                      key: point.label
                    }, toDisplayString(point.label), 1);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/AreaTrendChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AreaTrendChart-DiKsjSxT.js.map
