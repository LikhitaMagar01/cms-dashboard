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
    { name: 'Almanya', flag: '🇩🇪', value: 67 },
    { name: 'Fransa', flag: '🇫🇷', value: 55 },
    { name: 'Japonya', flag: '🇯🇵', value: 43 }
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
  const chartDatasets = [
    // Toplam trafik
    {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
      datasets: [
        {
          label: 'Toplam trafik',
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
    },
    {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
      datasets: [
        {
          label: 'Potansiyel müşteriler',
          data: [18, 20, 22, 19, 24, 26, 23, 25, 24, 26, 25, 26],
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
    },
    {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
      datasets: [
        {
          label: 'Harcanan ortalama zaman',
          data: [95, 98, 102, 97, 94, 90, 88, 92, 89, 87, 85, 83],
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
    },
    {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
      datasets: [
        {
          label: 'Dönüşüm oranı',
          data: [4.8, 4.9, 5.0, 5.1, 5.0, 5.2, 5.1, 5.15, 5.2, 5.18, 5.16, 5.16],
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
  ]

  return {
    stats,
    countries,
    activities,
    chartDatasets
  }
}
