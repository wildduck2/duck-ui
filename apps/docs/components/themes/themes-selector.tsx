'use client'

import { useMediaQuery } from '@gentleduck/hooks/use-media-query'
import { cn } from '@gentleduck/libs/cn'
import { Skeleton } from '@gentleduck/registry-ui-duckui/skeleton'
import { ToggleGroup, ToggleGroupItem } from '@gentleduck/registry-ui-duckui/toggle-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@gentleduck/registry-ui-duckui/tooltip'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { useThemesConfig } from '~/hooks/use-themes-config'
import { THEMES, Theme } from '~/lib/themes'

export function ThemesSwitcher({ themes = THEMES, className }: React.ComponentProps<'div'> & { themes?: Theme[] }) {
  const { theme: mode } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const { themesConfig, setThemesConfig } = useThemesConfig()
  const activeTheme = themesConfig.activeTheme
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1',
          className,
        )}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-transparent">
            <Skeleton className="h-6 w-6 rounded-sm" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <ToggleGroup
      type="single"
      value={activeTheme.name}
      onValueChange={(value) => {
        const theme = themes.find((theme) => theme.name === value)
        if (!theme) {
          return
        }

        setThemesConfig({ ...themesConfig, activeTheme: theme })
      }}
      className={cn('flex items-center justify-center gap-0.5 py-4 lg:flex-col lg:justify-start lg:gap-1', className)}>
      {themes.map((theme) => {
        const isActive = theme.name === activeTheme.name
        const isDarkTheme = ['Midnight'].includes(theme.name)
        const cssVars = mounted && mode === 'dark' ? theme.cssVars.dark : theme.cssVars.light
        console.log(cssVars)

        return (
          <Tooltip key={theme.name} placement={isDesktop ? 'left' : 'top'}>
            <TooltipTrigger>
              <ToggleGroupItem
                value={theme.name}
                className={cn(
                  'group flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-transparent p-0 hover:bg-transparent focus-visible:bg-transparent aria-checked:border-[var(--color-1)]',
                  mounted && isDarkTheme && mode !== 'dark' ? 'invert-[1]' : '',
                )}
                style={
                  {
                    ...cssVars,
                    '--color-1': `${cssVars['--chart-1']}`,
                    '--color-2': `${cssVars['--chart-2']}`,
                    '--color-3': `${cssVars['--chart-3']}`,
                    '--color-4': `${cssVars['--chart-4']}`,
                  } as React.CSSProperties
                }>
                <div className="h-6 w-6 overflow-hidden rounded-sm">
                  <div
                    className={cn(
                      'grid h-12 w-12 -translate-x-1/4 -translate-y-1/4 grid-cols-2 overflow-hidden rounded-md transition-all ease-in-out group-hover:rotate-45',
                      isActive ? 'rotate-45 group-hover:rotate-0' : 'rotate-0',
                    )}>
                    <span className="flex h-6 w-6 bg-[var(--color-1)]" />
                    <span className="flex h-6 w-6 bg-[var(--color-2)]" />
                    <span className="flex h-6 w-6 bg-[var(--color-3)]" />
                    <span className="flex h-6 w-6 bg-[var(--color-4)]" />
                    <span className="sr-only">{theme.name}</span>
                  </div>
                </div>
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent className="bg-black text-white">{theme.name}</TooltipContent>
          </Tooltip>
        )
      })}
    </ToggleGroup>
  )
}
