<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card v-for="stat in stats" :key="stat.title" class="bg-card">
      <CardContent class="p-6">
        <div class="space-y-2">
          <p class="text-sm text-muted-foreground">{{ stat.title }}</p>
          <div class="flex items-end justify-between">
            <div class="text-3xl font-bold">{{ stat.value }}</div>
            <div class="flex items-center gap-1 text-sm font-medium" :class="stat.trend.isPositive ? 'text-blue-600' : 'text-red-600'">
              <TrendingUp v-if="stat.trend.isPositive" class="h-4 w-4" />
              <TrendingDown v-else class="h-4 w-4" />
              <span>{{ stat.trend.value }}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'

const { stats } = useDashboardData()
</script>
