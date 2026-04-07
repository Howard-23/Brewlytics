<script setup lang="ts">
import type { OrderStatus, OrderTicket } from '~/types/brewlytics'

const props = defineProps<{
  items: OrderTicket[]
  activeCount: number
  searchValue: string
  statusFilter: 'All' | OrderStatus
}>()

const emit = defineEmits<{
  'advance-status': [id: string]
  'update:searchValue': [value: string]
  'update:statusFilter': [value: 'All' | OrderStatus]
}>()

const toneMap: Record<OrderTicket['status'], 'warning' | 'success' | 'neutral'> = {
  Brewing: 'warning',
  Delivered: 'neutral',
  Ready: 'success'
}

const statusOptions: Array<'All' | OrderStatus> = ['All', 'Brewing', 'Ready', 'Delivered']

const actionLabel = (status: OrderStatus) => {
  switch (status) {
    case 'Brewing':
      return 'Mark ready'
    case 'Ready':
      return 'Deliver'
    default:
      return 'Reopen'
  }
}
</script>

<template>
  <BaseCard>
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="font-display text-xl font-semibold text-ink">
          Order flow
        </h3>
        <p class="mt-1 text-sm text-stone-500">
          Live ticket visibility across in-store, app pickup, and delivery.
        </p>
      </div>
      <BaseBadge tone="accent">
        {{ activeCount }} active
      </BaseBadge>
    </div>

    <div class="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <label class="relative block lg:max-w-xs lg:flex-1">
        <span class="sr-only">Search orders</span>
        <input
          :value="searchValue"
          type="text"
          placeholder="Search guest, ticket, item..."
          class="w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-roast/25"
          @input="emit('update:searchValue', ($event.target as HTMLInputElement).value)"
        >
      </label>

      <div class="flex flex-wrap gap-2">
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
    </div>

    <div class="mt-6 overflow-x-auto">
      <table class="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr class="text-left text-xs uppercase tracking-[0.18em] text-stone-500">
            <th class="px-4">Ticket</th>
            <th class="px-4">Guest</th>
            <th class="px-4">Item</th>
            <th class="px-4">Channel</th>
            <th class="px-4">Total</th>
            <th class="px-4">Age</th>
            <th class="px-4">Status</th>
            <th class="px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
            class="rounded-2xl bg-white/75 text-sm text-ink shadow-[0_10px_30px_rgba(31,24,17,0.05)]"
          >
            <td class="rounded-l-2xl px-4 py-4 font-semibold">{{ item.id }}</td>
            <td class="px-4 py-4">{{ item.customer }}</td>
            <td class="px-4 py-4">{{ item.item }}</td>
            <td class="px-4 py-4 text-stone-500">{{ item.channel }}</td>
            <td class="px-4 py-4 font-semibold">{{ item.total }}</td>
            <td class="px-4 py-4 text-stone-500">{{ item.time }}</td>
            <td class="px-4 py-4">
              <BaseBadge :tone="toneMap[item.status]">{{ item.status }}</BaseBadge>
            </td>
            <td class="rounded-r-2xl px-4 py-4 text-right">
              <button
                type="button"
                class="rounded-full bg-stone-900/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-foam"
                @click="emit('advance-status', item.id)"
              >
                {{ actionLabel(item.status) }}
              </button>
            </td>
          </tr>
          <tr v-if="items.length === 0">
            <td colspan="8" class="rounded-2xl bg-white/75 px-4 py-8 text-center text-sm text-stone-500">
              No orders match the current filters.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseCard>
</template>
