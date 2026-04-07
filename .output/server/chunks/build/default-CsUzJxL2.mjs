globalThis.__timing__.logStart('Load chunks/build/default-CsUzJxL2');import { _ as __nuxt_component_0 } from './nuxt-link-DseVkz9C.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, computed, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import { a as useBrewlyticsData, u as useBrewlyticsWorkspace } from './useBrewlyticsWorkspace-Cia6rH_I.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const route = useRoute();
    const isActive = (to) => route.path === to;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "glass-panel hidden w-full max-w-[280px] rounded-[32px] p-6 lg:flex lg:flex-col" }, _attrs))}><div class="flex items-center gap-3"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-foam"> B </div><div><p class="font-display text-xl font-semibold text-ink"> Brewlytics </p><p class="text-sm text-stone-500"> Coffee ops intelligence </p></div></div><nav class="mt-10 space-y-2"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: [
            "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200",
            isActive(item.to) ? "bg-ink text-foam shadow-float" : "text-stone-600 hover:bg-white/70 hover:text-ink"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span><span class="${ssrRenderClass([
                "rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em]",
                isActive(item.to) ? "bg-white/10 text-foam/90" : "bg-stone-900/5 text-stone-500"
              ])}"${_scopeId}>${ssrInterpolate(item.shortLabel)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.label), 1),
                createVNode("span", {
                  class: [
                    "rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em]",
                    isActive(item.to) ? "bg-white/10 text-foam/90" : "bg-stone-900/5 text-stone-500"
                  ]
                }, toDisplayString(item.shortLabel), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="mt-auto rounded-[28px] bg-ink p-5 text-foam"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-foam/70"> Forecast </p><p class="mt-3 font-display text-2xl font-semibold"> +18% weekend lift </p><p class="mt-2 text-sm leading-6 text-foam/75"> Late-morning bundle demand is rising. Prep more ready-to-go pastry inventory by 10:30 am. </p></div></aside>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/AppSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNotice",
  __ssrInlineRender: true,
  setup(__props) {
    const { notice } = useBrewlyticsWorkspace();
    const toneClass = computed(() => {
      var _a;
      switch ((_a = notice.value) == null ? void 0 : _a.tone) {
        case "success":
          return "border-sage/25 bg-sage/10 text-pine";
        case "warning":
          return "border-crema/50 bg-crema/20 text-roast";
        default:
          return "border-white/80 bg-white/70 text-stone-700";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(notice)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["mb-6 flex items-start justify-between gap-4 rounded-[24px] border px-4 py-4 shadow-panel sm:mb-8 sm:px-5", unref(toneClass)]
        }, _attrs))}><div><p class="text-xs font-semibold uppercase tracking-[0.18em]"> Activity </p><p class="mt-2 text-sm leading-6">${ssrInterpolate(unref(notice).message)}</p></div><button type="button" class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-stone-900/5"> Dismiss </button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/AppNotice.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MobileNav",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed inset-x-4 bottom-4 z-40 lg:hidden" }, _attrs))}><div class="glass-panel grid grid-cols-5 rounded-[24px] p-2"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: ["rounded-2xl px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition", unref(route).path === item.to ? "bg-ink text-foam" : "text-stone-500"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.shortLabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.shortLabel), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/MobileNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { navItems } = useBrewlyticsData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSidebar = _sfc_main$3;
      const _component_AppNotice = _sfc_main$2;
      const _component_MobileNav = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mx-auto flex max-w-[1600px] gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-8 lg:pt-8">`);
      _push(ssrRenderComponent(_component_AppSidebar, { items: unref(navItems) }, null, _parent));
      _push(`<main class="min-w-0 flex-1">`);
      _push(ssrRenderComponent(_component_AppNotice, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      _push(ssrRenderComponent(_component_MobileNav, { items: unref(navItems) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/default-CsUzJxL2');
//# sourceMappingURL=default-CsUzJxL2.mjs.map
