<script setup lang="ts">
const { navItems } = useBrewlyticsData()
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto flex max-w-[1600px] gap-6 px-4 pb-28 pt-4 sm:px-6 lg:px-8 lg:pb-8 lg:pt-8">
      <AppSidebar :items="navItems" />

      <main class="min-w-0 flex-1">
        <AppNotice />
        <slot />
      </main>
    </div>

    <MobileNav :items="navItems" />
  </div>
</template>
