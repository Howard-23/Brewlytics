globalThis.__timing__.logStart('Load chunks/build/analytics-DKkjQNkz');import { _ as _sfc_main$4, a as _sfc_main$2, b as _sfc_main$1 } from './BaseBadge--E3ulyTu.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './ChannelSplitCard-C3_-cO6x.mjs';
import { _ as _sfc_main$3 } from './AreaTrendChart-DiKsjSxT.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file://C:/Users/LEGION/Downloads/New%20folder/node_modules/vue/server-renderer/index.mjs';
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
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      analyticsStats,
      channelSplit,
      filteredOrderLoadSeries,
      filteredRevenueSeries,
      kpis,
      selectedChannel,
      setSelectedChannel
    } = useBrewlyticsWorkspace();
    useSeoMeta({
      title: "Analytics",
      description: "Performance analytics for Brewlytics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTopbar = _sfc_main$4;
      const _component_PageHero = _sfc_main$2;
      const _component_StatStrip = _sfc_main$1;
      const _component_KpiCard = _sfc_main$1$1;
      const _component_AreaTrendChart = _sfc_main$3;
      const _component_ChannelSplitCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 sm:space-y-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppTopbar, {
        title: "Analytics built for the next shift, not last quarter.",
        description: "Track growth, conversion, and demand timing with visuals tuned for operators who need action in minutes."
      }, null, _parent));
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Performance analytics",
        title: "Read demand patterns at a glance and move from reporting to response.",
        description: "Revenue, order pressure, and channel mix are now connected to the live dashboard filter state."
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatStrip, { items: unref(analyticsStats) }, null, _parent));
      _push(`<section class="data-grid grid-cols-1 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(kpis), (metric) => {
        _push(ssrRenderComponent(_component_KpiCard, {
          key: metric.title,
          metric
        }, null, _parent));
      });
      _push(`<!--]--></section><section class="data-grid grid-cols-1 xl:grid-cols-[1.35fr,0.95fr]">`);
      _push(ssrRenderComponent(_component_AreaTrendChart, {
        title: "Weekly revenue curve",
        subtitle: "Gross sales acceleration from Monday through Sunday.",
        points: unref(filteredRevenueSeries)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ChannelSplitCard, {
        title: "Channel contribution",
        subtitle: "Select a channel to push that view across the dashboard.",
        items: unref(channelSplit),
        "selected-channel": unref(selectedChannel),
        onSelectChannel: unref(setSelectedChannel)
      }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_AreaTrendChart, {
        title: "Hourly order pressure",
        subtitle: "Queue intensity over the trading day for the active channel filter.",
        points: unref(filteredOrderLoadSeries)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/analytics-DKkjQNkz');
//# sourceMappingURL=analytics-DKkjQNkz.mjs.map
