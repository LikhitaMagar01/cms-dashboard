<template>
  <Card class="h-full">
    <CardHeader>
      <div class="flex items-center justify-between !flex-wrap">
        <CardTitle>{{ chartTitle }}</CardTitle>
        <div class="flex !flex-wrap items-center gap-2">
          <Button
            v-for="period in periods"
            :key="period"
            variant="ghost"
            size="sm"
            :class="selectedPeriod === period ? '!bg-blue-100 !text-blue-700 !border-0' : '!bg-slate-100 !text-gray-700'"
            @click="selectedPeriod = period"
          >
            {{ period }}
          </Button>
          <Popover>
            <PopoverTrigger as-child>
              <Button variant="outline" size="sm" class="gap-2 !border-blue-500 !text-blue-600 !bg-white">
                <CalendarIcon class="w-4 h-4" />
                Tarih seç
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar
                v-model="date"
                initial-focus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-center flex-1">
      <div class="h-[200px] md:h-[250px] lg:h-[300px] w-full">
        <LineChart :data="chartData as ChartData<'line'>" :options="chartOptions" />
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
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { DateValue } from '@internationalized/date'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps<{
  activeCardIndex: number
}>()

const periods = ['Bugün', 'Haftalık', 'Aylık', 'Yıllık']
const selectedPeriod = ref('Bugün')

const date = ref<DateValue>()

const { chartDatasets, stats } = useDashboardData()

const chartData = computed(() => (chartDatasets[props.activeCardIndex] || chartDatasets[0])!)

const chartTitle = computed(() => stats[props.activeCardIndex]?.title || stats[0]!.title)

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
        display: false,
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
  },
}))
</script>
