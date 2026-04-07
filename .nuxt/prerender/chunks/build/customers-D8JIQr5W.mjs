globalThis.__timing__.logStart('Load chunks/build/customers-D8JIQr5W');import { _ as _sfc_main$4, a as _sfc_main$2, b as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { _ as _sfc_main$3 } from './SegmentCards-BeBsUptd.mjs';
import { _ as _sfc_main$5 } from './InsightPanel-BL7Nn0A0.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
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
  __name: "customers",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      applyInsight,
      currentInsights,
      customerStats,
      focusedSegment,
      segments,
      setFocusedSegment
    } = useBrewlyticsWorkspace();
    useSeoMeta({
      title: "Customers",
      description: "Customer insights for Brewlytics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$4;
      const _component_PageHero = _sfc_main$2;
      const _component_StatStrip = _sfc_main$1;
      const _component_SegmentCards = _sfc_main$3;
      const _component_InsightPanel = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppTopbar, {
        title: "Customer insight with a retail operator's level of clarity.",
        description: "Understand which guests return, what raises basket size, and which behaviors deserve targeted retention plays."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Guest intelligence",
        title: "Tie loyalty, visit cadence, and spend behavior back to practical action.",
        description: "Customer insight is organized around segments and measurable opportunities so store and growth teams can act from the same source of truth."
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatStrip, { items: unref(customerStats) }, null, _parent));
      _push(ssrRenderComponent(_component_SegmentCards, {
        items: unref(segments),
        "focused-segment": unref(focusedSegment),
        onFocus: unref(setFocusedSegment)
      }, null, _parent));
      _push(ssrRenderComponent(_component_InsightPanel, {
        items: unref(currentInsights),
        onApply: unref(applyInsight)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/customers-D8JIQr5W');
//# sourceMappingURL=customers-D8JIQr5W.mjs.map
