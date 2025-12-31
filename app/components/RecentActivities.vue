<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="text-base font-semibold">Son işlemler</CardTitle>
        <Button variant="link" size="sm" class="h-auto p-0 text-xs text-blue-600">
          Tümünü gör
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div class="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[200px]">
                <button
                  @click="toggleSort('name')"
                  class="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900"
                >
                  Ad ve Soyad
                  <svg
                    v-if="sortBy === 'name'"
                    class="w-3 h-3 transition-transform"
                    :class="{ 'rotate-180': sortOrder === 'desc' }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011.707-.707l4.586 4.586V3a1 1 0 112 0v11.586l4.586-4.586A1 1 0 1117 12.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 10z" clip-rule="evenodd" />
                  </svg>
                </button>
              </TableHead>
              <TableHead class="min-w-[300px]">
                <button
                  @click="toggleSort('action')"
                  class="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900"
                >
                  İşlem
                  <svg
                    v-if="sortBy === 'action'"
                    class="w-3 h-3 transition-transform"
                    :class="{ 'rotate-180': sortOrder === 'desc' }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011.707-.707l4.586 4.586V3a1 1 0 112 0v11.586l4.586-4.586A1 1 0 1117 12.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 10z" clip-rule="evenodd" />
                  </svg>
                </button>
              </TableHead>
              <TableHead class="w-[120px]">
                <button
                  @click="toggleSort('date')"
                  class="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900"
                >
                  Tarih
                  <svg
                    v-if="sortBy === 'date'"
                    class="w-3 h-3 transition-transform"
                    :class="{ 'rotate-180': sortOrder === 'desc' }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011.707-.707l4.586 4.586V3a1 1 0 112 0v11.586l4.586-4.586A1 1 0 1117 12.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 10z" clip-rule="evenodd" />
                  </svg>
                </button>
              </TableHead>
              <TableHead class="w-[100px]">
                <button
                  @click="toggleSort('time')"
                  class="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900"
                >
                  Saat
                  <svg
                    v-if="sortBy === 'time'"
                    class="w-3 h-3 transition-transform"
                    :class="{ 'rotate-180': sortOrder === 'desc' }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011.707-.707l4.586 4.586V3a1 1 0 112 0v11.586l4.586-4.586A1 1 0 1117 12.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 10z" clip-rule="evenodd" />
                  </svg>
                </button>
              </TableHead>
              <TableHead class="w-[80px]">
                <span class="text-xs font-semibold text-gray-700">Aksiyon</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="(activity, index) in sortedActivities"
              :key="activity.id"
              :class="index % 2 === 1 ? 'bg-gray-50' : ''"
            >
              <TableCell>
                <div class="flex items-center gap-3">
                  <Avatar class="h-8 w-8">
                    <AvatarImage :src="activity.avatar" :alt="activity.name" />
                    <AvatarFallback class="text-xs">{{ getInitials(activity.name) }}</AvatarFallback>
                  </Avatar>
                  <span class="text-sm font-medium">{{ activity.name }}</span>
                </div>
              </TableCell>
              <TableCell class="text-sm">{{ activity.action }}</TableCell>
              <TableCell class="text-sm">{{ activity.date }}</TableCell>
              <TableCell class="text-sm">{{ activity.time }}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="sm" class="h-8 w-8 p-0">
                      <MoreVertical class="h-4 w-4 text-blue-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Görüntüle</DropdownMenuItem>
                    <DropdownMenuItem>Düzenle</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem class="text-red-600">Sil</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MoreVertical } from 'lucide-vue-next'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const { activities } = useDashboardData()

const sortBy = ref<'name' | 'action' | 'date' | 'time'>('date')
const sortOrder = ref<'asc' | 'desc'>('desc')

const toggleSort = (field: 'name' | 'action' | 'date' | 'time') => {
  if (sortBy.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = field
    sortOrder.value = 'desc'
  }
}

const sortedActivities = computed(() => {
  const sorted = [...activities]
  sorted.sort((a, b) => {
    let aVal = a[sortBy.value]
    let bVal = b[sortBy.value]

    if (typeof aVal === 'string') {
      return sortOrder.value === 'asc' ? (aVal as string).localeCompare(bVal as string) : (bVal as string).localeCompare(aVal as string)
    } else {
      return sortOrder.value === 'asc' ? (aVal as any) - (bVal as any) : (bVal as any) - (aVal as any)
    }
  })
  return sorted
})

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}
</script>
