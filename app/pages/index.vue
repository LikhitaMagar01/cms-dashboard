<template>
  <SidebarProvider>
    <div class="flex min-h-screen w-full bg-background">
      <AppSidebar />

      <SidebarInset class="flex-1">
        <header class="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger class="-ml-1" />
          <h1 class="text-lg font-semibold">İzlence</h1>
        </header>

        <main class="flex-1 space-y-6 p-6">
          <StatsCards v-model:active-card-index="activeCardIndex" />

          <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="sm:col-span-1 md:col-span-1 lg:col-span-2 h-full">
              <TrafficChart :active-card-index="activeCardIndex" />
            </div>
            <div class="sm:col-span-1 md:col-span-1 lg:col-span-1 h-full">
              <CountriesList />
            </div>
          </div>

          <RecentActivities />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCardIndex = ref(0)
</script>
