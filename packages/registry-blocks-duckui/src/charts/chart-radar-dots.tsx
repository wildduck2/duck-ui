'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@gentleduck/registry-ui-duckui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@gentleduck/registry-ui-duckui/chart'
import { TrendingUp } from 'lucide-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

export const description = 'A radar chart with dots'

const chartData = [
  { desktop: 186, month: 'January' },
  { desktop: 305, month: 'February' },
  { desktop: 237, month: 'March' },
  { desktop: 273, month: 'April' },
  { desktop: 209, month: 'May' },
  { desktop: 214, month: 'June' },
]

const chartConfig = {
  desktop: {
    color: 'var(--chart-1)',
    label: 'Desktop',
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Radar Chart - Dots</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer className="mx-auto aspect-square max-h-[250px]" config={chartConfig}>
          <RadarChart data={chartData}>
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              dot={{
                fillOpacity: 1,
                r: 4,
              }}
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground leading-none">January - June 2024</div>
      </CardFooter>
    </Card>
  )
}
