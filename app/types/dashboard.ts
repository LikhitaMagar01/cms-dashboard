export interface Stat {
  title: string
  value: string
  trend: {
    value: string
    isPositive: boolean
  }
}

export interface Country {
  name: string
  flag: string
  value: number
}

export interface Activity {
  id: number
  name: string
  avatar: string
  action: string
  date: string
  time: string
}

export interface MenuItem {
  title: string
  url: string
  icon: any
  isActive?: boolean
}
