'use client'

import { cn } from '@gentleduck/libs/cn'
import { Block } from '@gentleduck/registers'
import { Badge } from '@gentleduck/registry-ui-duckui/badge'
import { Label } from '@gentleduck/registry-ui-duckui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@gentleduck/registry-ui-duckui/popover'
import { Separator } from '@gentleduck/registry-ui-duckui/separator'
import { Switch } from '@gentleduck/registry-ui-duckui/switch'
import { TabsList, TabsTrigger } from '@gentleduck/registry-ui-duckui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@gentleduck/registry-ui-duckui/toggle-group'
import { CircleHelp, Monitor, Smartphone, Tablet } from 'lucide-react'
import * as React from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { BlockCopyButton } from '~/components/blocks'
import { StyleSwitcher } from '~/components/themes'
import { V0Button } from '~/components/V0'
import { useLiftMode } from '~/hooks/use-lift-mode'
import { trackEvent } from '~/lib/events'

export function BlockToolbar({
  block,
  resizablePanelRef,
}: {
  block: Block & { hasLiftMode: boolean }
  resizablePanelRef: React.RefObject<ImperativePanelHandle>
}) {
  const { isLiftMode, toggleLiftMode } = useLiftMode(block.name)

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="flex items-center gap-2">
        <TabsList className="hidden h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
          <TabsTrigger className="h-[1.45rem] rounded-xs px-2 text-xs" disabled={isLiftMode} value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="h-[1.45rem] rounded-xs px-2 text-xs" disabled={isLiftMode} value="code">
            Code
          </TabsTrigger>
        </TabsList>
        <Separator className="mx-2 hidden h-4 md:flex" orientation="vertical" />
        <StyleSwitcher className="h-[calc(theme(spacing.7)_-_1px)] dark:h-7" disabled={isLiftMode} />
        <Popover placement="top" sideOffset={20}>
          <PopoverTrigger
            className="hidden text-muted-foreground hover:text-foreground disabled:opacity-50 sm:flex"
            disabled={isLiftMode}>
            <CircleHelp className="h-3.5 w-3.5" />
            <span className="sr-only">Block description</span>
          </PopoverTrigger>
          <PopoverContent className="space-y-3 rounded-[0.5rem] text-sm">
            <p className="font-medium">What is the difference between the New York and Default style?</p>
            <p>A style comes with its own set of components, animations, icons and more.</p>
            <p>
              The <span className="font-medium">Default</span> style has larger inputs, uses lucide-react for icons and
              tailwindcss-animate for animations.
            </p>
            <p>
              The <span className="font-medium">New York</span> style ships with smaller buttons and inputs. It also
              uses shadows on cards and buttons.
            </p>
          </PopoverContent>
        </Popover>
        <div className="hidden items-center gap-2 sm:flex">
          <Separator className="mx-2 mr-0 hidden h-4 md:flex" orientation="vertical" />
          <div className="flex items-center gap-2">
            <a href={`#${block.name}`}>
              <Badge className={cn('bg-transparent', isLiftMode && 'opacity-50')} variant="secondary">
                {block.name}
              </Badge>
            </a>
          </div>
        </div>
      </div>
      {block.code && (
        <div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
          {block.hasLiftMode && (
            <>
              <div className="flex h-7 items-center justify-between gap-2">
                <Label className="text-xs" htmlFor={`lift-mode-${block.name}`}>
                  Lift Mode
                </Label>
                <Switch
                  checked={isLiftMode}
                  id={`lift-mode-${block.name}`}
                  onCheckedChange={(value) => {
                    resizablePanelRef.current?.resize(100)
                    toggleLiftMode(block.name)

                    if (value) {
                      trackEvent({
                        name: 'enable_lift_mode',
                        properties: {
                          name: block.name,
                        },
                      })
                    }
                  }}
                />
              </div>
              <Separator className="mx-2 hidden h-4 lg:inline-flex" orientation="vertical" />
            </>
          )}
          <div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-xs md:flex">
            <ToggleGroup
              defaultValue="100"
              disabled={isLiftMode}
              onValueChange={(value) => {
                if (resizablePanelRef.current) {
                  resizablePanelRef.current.resize(Number.parseInt(value))
                }
              }}
              type="single">
              <ToggleGroupItem className="h-[22px] w-[22px] rounded-xs p-0" value="100">
                <Monitor className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem className="h-[22px] w-[22px] rounded-xs p-0" value="60">
                <Tablet className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem className="h-[22px] w-[22px] rounded-xs p-0" value="30">
                <Smartphone className="h-3.5 w-3.5" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Separator className="mx-2 hidden h-4 md:flex" orientation="vertical" />
          <BlockCopyButton code={block.code} disabled={isLiftMode} event="copy_block_code" name={block.name} />
          <V0Button
            block={{
              code: block.code,
              description: block.description || 'Edit in v0',
              name: block.name,
            }}
            disabled={isLiftMode}
            id={`v0-button-${block.name}`}
          />
        </div>
      )}
    </div>
  )
}
