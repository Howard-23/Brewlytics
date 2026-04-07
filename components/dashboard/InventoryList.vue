<script setup lang="ts">
import type { InventoryItem, InventoryStatus } from '~/types/brewlytics'

const props = defineProps<{
  items: InventoryItem[]
  statusFilter: 'All' | InventoryStatus
  urgentCount: number
}>()

const emit = defineEmits<{
  restock: [name: string]
  'update:statusFilter': [value: 'All' | InventoryStatus]
}>()

const toneMap: Record<InventoryItem['status'], 'success' | 'warning' | 'danger'> = {
  Critical: 'danger',
  Healthy: 'success',
  Watch: 'warning'
}

const statusOptions: Array<'All' | InventoryStatus> = ['All', 'Healthy', 'Watch', 'Critical']
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          Inventory runway
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          Replenishment health by key ingredients and packaging.
        </p>
      </div>
      <BaseBadge tone="warning">
        {{ urgentCount }} urgent vendor {{ urgentCount === 1 ? 'ping' : 'pings' }}
      </BaseBadge>
    </div>

    <div class="mt-6 flex flex-wrap gap-2">
      <button
        v-for="option in statusOptions"
        :key="option"
        type="button"
        class="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"
        :class="statusFilter === option ? 'bg-ink text-foam' : 'bg-white/75 text-stone-500 hover:text-ink'"
        @click="emit('update:statusFilter', option)"
      >
        {{ option }}
      </button>
    </div>

    <div class="mt-6 space-y-4">
      <div
        v-for="item in items"
        :key="item.name"
        class="rounded-[24px] border border-white/80 bg-white/70 p-4"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <h4 class="text-base font-semibold text-ink">{{ item.name }}</h4>
              <BaseBadge :tone="toneMap[item.status]">{{ item.status }}</BaseBadge>
            </div>
            <p class="mt-2 text-sm text-stone-500">{{ item.vendor }}</p>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm sm:text-right">
            <div>
              <p class="text-stone-500">Available</p>
              <p class="mt-1 font-semibold text-ink">{{ item.stock }}</p>
            </div>
            <div>
              <p class="text-stone-500">Runway</p>
              <p class="mt-1 font-semibold text-ink">{{ item.daysLeft }} days</p>
            </div>
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <button
            type="button"
            class="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foam transition hover:bg-roast"
            @click="emit('restock', item.name)"
          >
            Restock {{ item.reorderAmount }} {{ item.stockUnit }}
          </button>
        </div>
      </div>
      <div
        v-if="items.length === 0"
        class="rounded-[24px] border border-white/80 bg-white/70 p-5 text-sm text-stone-500"
      >
        No inventory items match the current health filter.
      </div>
    </div>
  </BaseCard>
</template>
