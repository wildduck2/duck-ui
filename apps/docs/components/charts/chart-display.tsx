import { cn } from '@gentleduck/libs/cn'
import * as React from 'react'
import { getRegistryItem } from '~/lib/get-registry-item'
import { highlightCode } from '~/lib/highlight-code'
import { ChartToolbar } from './chart-toolbar'

export async function ChartDisplay({ name, children, className }: { name: string } & React.ComponentProps<'div'>) {
  const chart = await getCachedRegistryItem(name)
  const highlightedCode = await getChartHighlightedCode(chart?.files?.[0]?.content ?? '')

  if (!chart || !highlightedCode) {
    return null
  }

  return (
    <div
      className={cn(
        'themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-200 ease-in-out hover:z-30',
        className,
      )}>
      <ChartToolbar
        // @ts-ignore
        chart={{
          ...chart,
          highlightedCode,
        }}
        className="bg-card text-card-foreground relative z-20 flex justify-end border-b px-3 py-2.5">
        {children}
      </ChartToolbar>
      <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">{children}</div>
    </div>
  )
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name)
})

const getChartHighlightedCode = React.cache(async (content: string) => {
  return await highlightCode(content)
})
