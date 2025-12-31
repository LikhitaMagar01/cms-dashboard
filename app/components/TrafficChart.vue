<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle>Toplam trafik</CardTitle>
        <div class="flex items-center gap-2">
          <Button
            v-for="period in periods"
            :key="period"
            :variant="selectedPeriod === period ? 'default' : 'ghost'"
            size="sm"
            @click="selectedPeriod = period"
          >
            {{ period }}
          </Button>
          <Button variant="outline" size="sm" class="gap-2">
            <CalendarIcon class="w-4 h-4" />
            Tarih seç
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div class="h-[300px] w-full">
        <LineChart :data="chartData" :options="chartOptions" />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const periods = ['Bugün', 'Haftalık', 'Aylık', 'Yıllık']
const selectedPeriod = ref('Bugün')

const { chartData } = useDashboardData()

const typedChartData = computed<ChartData<'line'>>(() => chartData)

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'hsl(var(--background))',
      titleColor: 'hsl(var(--foreground))',
      bodyColor: 'hsl(var(--foreground))',
      borderColor: 'hsl(var(--border))',
      borderWidth: 1,
      cornerRadius: 6,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'hsl(var(--muted))',
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
    y: {
      grid: {
        color: 'hsl(var(--muted))',
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
  },
}))
</script>
