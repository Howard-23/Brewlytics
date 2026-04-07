<script setup lang="ts">
import type { NavItem } from '~/types/brewlytics'

defineProps<{
  items: NavItem[]
}>()

const route = useRoute()

const isActive = (to: string) => route.path === to
</script>

<template>
  <aside class="glass-panel hidden w-full max-w-[280px] rounded-[32px] p-6 lg:flex lg:flex-col">
    <div class="flex items-center gap-3">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-foam">
        B
      </div>
      <div>
        <p class="font-display text-xl font-semibold text-ink">
          Brewlytics
        </p>
        <p class="text-sm text-stone-500">
          Coffee ops intelligence
        </p>
      </div>
    </div>

    <nav class="mt-10 space-y-2">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        :class="[
          'group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200',
          isActive(item.to)
            ? 'bg-ink text-foam shadow-float'
            : 'text-stone-600 hover:bg-white/70 hover:text-ink'
        ]"
      >
        <span>{{ item.label }}</span>
        <span
          :class="[
            'rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em]',
            isActive(item.to) ? 'bg-white/10 text-foam/90' : 'bg-stone-900/5 text-stone-500'
          ]"
        >
          {{ item.shortLabel }}
        </span>
      </NuxtLink>
    </nav>

    <div class="mt-auto rounded-[28px] bg-ink p-5 text-foam">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-foam/70">
        Forecast
      </p>
      <p class="mt-3 font-display text-2xl font-semibold">
        +18% weekend lift
      </p>
      <p class="mt-2 text-sm leading-6 text-foam/75">
        Late-morning bundle demand is rising. Prep more ready-to-go pastry inventory by 10:30 am.
      </p>
    </div>
  </aside>
</template>
