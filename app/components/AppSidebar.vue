<template>
  <Sidebar class="border-r bg-background">
    <SidebarHeader class="border-b px-6 py-4">
      <div class="flex items-center gap-2">
        <svg class="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-base font-semibold">FREEBIRD</span>
      </div>
    </SidebarHeader>

    <SidebarContent class="px-3 py-4">
      <SidebarGroup>
        <SidebarMenu class="space-y-1">
          <SidebarMenuItem v-for="item in menuItems" :key="item.title">
            <SidebarMenuButton 
              :is-active="item.isActive"
              as-child
              class="w-full justify-start gap-3 px-3 py-2 text-sm"
            >
              <a :href="item.url">
                <component :is="item.icon" class="h-4 w-4 shrink-0" />
                <span>{{ item.title }}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter class="border-t p-4">
      <div class="mb-3 flex items-center gap-3">
        <Avatar class="h-10 w-10">
          <AvatarImage src="https://picsum.photos/id/237/200/300" alt="Abdullah Aydeniz" />
          <AvatarFallback class="text-sm">AA</AvatarFallback>
        </Avatar>
        <div class="flex min-w-0 flex-1 flex-col">
          <span class="truncate text-sm font-medium">Abdullah Aydeniz</span>
          <span class="truncate text-xs text-muted-foreground">Product Designer</span>
        </div>
      </div>
      <Button variant="outline" size="sm" class="w-full">
        Görüntüle
      </Button>
    </SidebarFooter>
  </Sidebar>
</template>

<script setup lang="ts">
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Newspaper, 
  Bell, 
  FileSpreadsheet, 
  Send, 
  File, 
  Settings 
} from 'lucide-vue-next'

interface MenuItem {
  title: string
  url: string
  icon: any
  isActive?: boolean
}

const menuItems: MenuItem[] = [
  {
    title: 'İzlence',
    url: '/',
    icon: LayoutDashboard,
    isActive: true
  },
  {
    title: 'Sayfalar',
    url: '/pages',
    icon: File
  },
  {
    title: 'Menüler',
    url: '/menus',
    icon: FileText
  },
  {
    title: 'Haberler',
    url: '/news',
    icon: Newspaper
  },
  {
    title: 'Duyurular',
    url: '/announcements',
    icon: Bell
  },
  {
    title: 'ERP',
    url: '/erp',
    icon: FileSpreadsheet
  },
  {
    title: 'Pilot Başvuruları',
    url: '/pilot-applications',
    icon: Send
  },
  {
    title: 'Formlar',
    url: '/forms',
    icon: FileText
  },
  {
    title: 'Dosyalar',
    url: '/files',
    icon: File
  },
  {
    title: 'Site Ayarları',
    url: '/settings',
    icon: Settings
  }
]
</script>
