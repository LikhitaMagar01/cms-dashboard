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
              <TableHead class="w-[200px]">Ad ve Soyad</TableHead>
              <TableHead class="min-w-[300px]">İşlem</TableHead>
              <TableHead class="w-[120px]">Tarih</TableHead>
              <TableHead class="w-[100px]">Saat</TableHead>
              <TableHead class="w-[80px]">Aksiyon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="activity in activities" :key="activity.id">
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
                      <MoreVertical class="h-4 w-4" />
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
import { MoreVertical } from 'lucide-vue-next'

const { activities } = useDashboardData()

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}
</script>
