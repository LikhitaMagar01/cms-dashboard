# CMS Dashboard

A modern, responsive dashboard built with Nuxt 4 (vue 3 in composition API), shadcn-vue, and TailwindCSS featuring real-time analytics, traffic charts, and activity monitoring.

## Features

- 📊 **Real-time Analytics**: Traffic statistics with trend indicators
- 📈 **Interactive Charts**: Line chart with period filters (Daily, Weekly, Monthly, Yearly)
- 🌍 **Geographic Insights**: Top countries by traffic with flags
- 📋 **Activity Monitoring**: Recent user activities with sortable table
- 🎨 **Modern UI**: Built with shadcn-vue components and TailwindCSS
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎯 **Type-Safe**: Full TypeScript support

## Tech Stack

- **Framework**: Nuxt 4.2.2
- **UI Components**: shadcn-vue 2.4.3
- **Styling**: TailwindCSS 4.1.18
- **Charts**: Chart.js 4.5.1 + vue-chartjs 5.3.3
- **Icons**: lucide-vue-next
- **State Management**: Vue 3 Composition API

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Folder Structure

```
cms-dashboard/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css              # Global styles and theme
│   ├── components/
│   │   ├── ui/                       # shadcn-vue components
│   │   │   ├── avatar/
│   │   │   ├── badge/
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── dropdown-menu/
│   │   │   ├── sidebar/
│   │   │   ├── table/
│   │   │   └── ...
│   │   ├── AppSidebar.vue            # Sidebar navigation
│   │   ├── StatsCards.vue            # Statistics cards
│   │   ├── TrafficChart.vue          # Traffic line chart
│   │   ├── CountriesList.vue         # Countries widget
│   │   └── RecentActivities.vue      # Activities table
│   ├── composables/
│   │   └── useDashboardData.ts       # Dashboard data composable
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   ├── pages/
│   │   └── index.vue                 # Dashboard page
│   └── app.vue                       # Root component
├── components.json                   # shadcn-vue config
├── nuxt.config.ts                    # Nuxt config
├── package.json                      # Dependencies
└── tsconfig.json                     # TypeScript config
```

## Key Components

### Dashboard Widgets

- **StatsCards**: 4 metric cards with trend indicators (Traffic, Customers, Time, Conversion)
- **TrafficChart**: Interactive line chart with period filters and date picker
- **CountriesList**: Top 5 countries by traffic with flags and numbers
- **RecentActivities**: Sortable table with user activities and actions

### Navigation

- **AppSidebar**: Collapsible sidebar with menu items and user profile

## Customization

### Adding Menu Items

Edit `app/components/AppSidebar.vue`:

```typescript
{
  title: 'New Page',
  url: '/new-page',
  icon: IconComponent,
  isActive: false
}
```

### Modifying Dashboard Data

Edit `app/composables/useDashboardData.ts` to update stats, countries, activities, or chart data.

### Theme Customization

Modify CSS variables in `app/assets/css/main.css`:

```css
:root {
  --primary: oklch(0.588 0.207 255.29);  /* Blue primary color */
  --radius: 0.625rem;                     /* Border radius */
  /* ... other variables */
}
```

### Adding shadcn Components

```bash
npx shadcn-vue@latest add [component-name]
```

## Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - 2-column grids
- **Desktop**: `> 1024px` - Full multi-column layout

## License

Private project

redeploy