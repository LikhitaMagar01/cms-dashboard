import type { Stat, Country, Activity } from '~/types/dashboard'
import type { ChartData } from 'chart.js'

export const useDashboardData = () => {
  const stats: Stat[] = [
    {
      title: 'Toplam trafik',
      value: '534',
      trend: {
        value: '+24.57%',
        isPositive: true
      }
    },
    {
      title: 'Potansiyel müşteriler',
      value: '26',
      trend: {
        value: '+8%',
        isPositive: true
      }
    },
    {
      title: 'Harcanan ortalama zaman',
      value: '1d 37s',
      trend: {
        value: '-5.82%',
        isPositive: false
      }
    },
    {
      title: 'Dönüşüm oranı',
      value: '5.16%',
      trend: {
        value: '+1.22%',
        isPositive: true
      }
    }
  ]

  const countries: Country[] = [
    { name: 'Türkiye', flag: '🇹🇷', value: 257 },
    { name: 'Amerika', flag: '🇺🇸', value: 125 },
    { name: 'Kanada', flag: '🇨🇦', value: 86 },
    { name: 'Birleşik Krallık', flag: '🇬🇧', value: 78 },
    { name: 'Almanya', flag: '🇩🇪', value: 67 }
  ]

  const activities: Activity[] = [
    {
      id: 1,
      name: 'Abdullah Aydeniz',
      avatar: 'https://picsum.photos/id/237/200/300',
      action: '"Blog" isimli bir sayfa ekledi.',
      date: '13.04.2022',
      time: '16.22'
    },
    {
      id: 2,
      name: 'Annette Black',
      avatar: 'https://picsum.photos/id/237/200/300',
      action: '"Main" isimli menüyü düzenledi.',
      date: '13.04.2022',
      time: '14.30'
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      avatar: 'https://picsum.photos/id/237/200/300',
      action: '"Flights" isimli duyuruyu sildi.',
      date: '11.04.2022',
      time: '15.46'
    },
    {
      id: 4,
      name: 'Jacob Jones',
      avatar: 'https://picsum.photos/id/237/200/300',
      action: 'Ayarlardan Google Maps API şifresini değiştirdi.',
      date: '10.04.2022',
      time: '12.50'
    }
  ]

  // Chart.js compatible data - specifically typed for line chart
  const chartData: ChartData<'line'> = {
    labels: ['08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    datasets: [
      {
        label: 'Trafik',
        data: [510, 518, 520, 515, 522, 528, 530, 526, 532, 520, 515, 540],
        borderColor: '#3b82f6',
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3b82f6',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
      }
    ]
  }

  return {
    stats,
    countries,
    activities,
    chartData
  }
}
