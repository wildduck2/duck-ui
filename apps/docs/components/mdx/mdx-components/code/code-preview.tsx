'use client'

import { cn } from '@gentleduck/libs/cn'
import { Block } from '@gentleduck/registers'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@gentleduck/registry-ui-duckui/resizable'
import { Tabs, TabsContent } from '@gentleduck/registry-ui-duckui/tabs'
import React from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { BlockToolbar } from '~/components/blocks'
import { Icons } from '~/components/icons'
import { useLiftMode } from '~/hooks/use-lift-mode'

export function CodePreview({ block }: { block: Block & { hasLiftMode: boolean } }) {
  const { isLiftMode } = useLiftMode(block.name)
  const [isLoading, setIsLoading] = React.useState(true)
  const ref = React.useRef<ImperativePanelHandle>(null)

  return (
    <Tabs
      className="relative grid w-full scroll-m-20 gap-4"
      defaultValue="preview"
      id={block.name}
      style={
        {
          '--container-height': block.container?.height,
        } as React.CSSProperties
      }>
      <BlockToolbar block={block} resizablePanelRef={ref as never} />
      <TabsContent
        className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
        value="preview">
        <ResizablePanelGroup className="relative z-10" direction="horizontal">
          <ResizablePanel
            className={cn(
              'relative rounded-lg border bg-background',
              isLiftMode ? 'border-border/50' : 'border-border',
            )}
            defaultSize={100}
            minSize={30}
            ref={ref}>
            {isLoading ? (
              <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
                <Icons.spinner className="h-4 w-4 animate-spin" />
                Loading...
              </div>
            ) : null}
            <iframe
              allowTransparency
              className="chunk-mode relative z-20 w-full bg-background"
              height={block.container?.height ?? 450}
              onLoad={() => {
                setIsLoading(false)
              }}
              src={`/blocks/${block.name}`}
            />
          </ResizablePanel>
          <ResizableHandle
            className={cn(
              'relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block',
              isLiftMode && 'invisible',
            )}
          />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </TabsContent>
      <TabsContent value="code">
        <div
          className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.highlightedCode }}
          data-rehype-pretty-code-fragment
        />
      </TabsContent>
    </Tabs>
  )
}
