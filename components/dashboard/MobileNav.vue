<script setup lang="ts">
import type { NavItem } from '~/types/brewlytics'

defineProps<{
  items: NavItem[]
}>()

const route = useRoute()
</script>

<template>
  <nav class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
    <div class="glass-panel grid grid-cols-5 rounded-[24px] p-2">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="rounded-2xl px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition"
        :class="route.path === item.to ? 'bg-ink text-foam' : 'text-stone-500'"
      >
        {{ item.shortLabel }}
      </NuxtLink>
    </div>
  </nav>
</template>
