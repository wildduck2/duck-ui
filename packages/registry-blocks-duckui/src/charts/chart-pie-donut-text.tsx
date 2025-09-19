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
import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

export const description = 'A donut chart with text'

const chartData = [
  { browser: 'chrome', fill: 'var(--color-chrome)', visitors: 275 },
  { browser: 'safari', fill: 'var(--color-safari)', visitors: 200 },
  { browser: 'firefox', fill: 'var(--color-firefox)', visitors: 287 },
  { browser: 'edge', fill: 'var(--color-edge)', visitors: 173 },
  { browser: 'other', fill: 'var(--color-other)', visitors: 190 },
]

const chartConfig = {
  chrome: {
    color: 'var(--chart-1)',
    label: 'Chrome',
  },
  edge: {
    color: 'var(--chart-4)',
    label: 'Edge',
  },
  firefox: {
    color: 'var(--chart-3)',
    label: 'Firefox',
  },
  other: {
    color: 'var(--chart-5)',
    label: 'Other',
  },
  safari: {
    color: 'var(--chart-2)',
    label: 'Safari',
  },
  visitors: {
    label: 'Visitors',
  },
} satisfies ChartConfig

export default function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer className="mx-auto aspect-square max-h-[250px]" config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Pie data={chartData} dataKey="visitors" innerRadius={60} nameKey="browser" strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                        <tspan className="fill-foreground font-bold text-3xl" x={viewBox.cx} y={viewBox.cy}>
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan className="fill-muted-foreground" x={viewBox.cx} y={(viewBox.cy || 0) + 24}>
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  )
}
