<template>
  <Card class="flex flex-col h-full">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="text-base font-semibold">Ülkelere göre...</CardTitle>
        <Button variant="link" size="sm" class="h-auto p-0 text-xs text-blue-600">
          Tümünü gör
        </Button>
      </div>
    </CardHeader>
    <CardContent class="flex-1 flex flex-col justify-between">
      <div class="space-y-4">
        <div
          v-for="(country, index) in countries"
          :key="country.name"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <span class="text-sm text-muted-foreground">{{ index + 1 }}.</span>
            <span class="text-xl">{{ country.flag }}</span>
            <span class="text-sm font-medium">{{ country.name }}</span>
          </div>
          <span class="text-sm font-medium">{{ country.value }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
const { countries } = useDashboardData()
</script>
