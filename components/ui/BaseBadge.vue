<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'accent'
    pill?: boolean
  }>(),
  {
    tone: 'neutral',
    pill: true
  }
)

const toneClass = computed(() => {
  switch (props.tone) {
    case 'success':
      return 'bg-sage/15 text-pine'
    case 'warning':
      return 'bg-crema/25 text-roast'
    case 'danger':
      return 'bg-ember/15 text-ember'
    case 'accent':
      return 'bg-roast text-foam'
    default:
      return 'bg-white/70 text-stone-600'
  }
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]',
      pill ? 'rounded-full' : 'rounded-xl',
      toneClass
    ]"
  >
    <slot />
  </span>
</template>
