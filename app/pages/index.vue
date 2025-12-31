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
          <StatsCards />

          <div class="grid gap-6 lg:grid-cols-3">
            <div class="lg:col-span-2">
              <TrafficChart />
            </div>
            <div>
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
</script>
