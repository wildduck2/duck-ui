'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@gentleduck/registry-ui-duckui/collapsible'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible className="flex w-[350px] flex-col gap-2" onOpenChange={setIsOpen} open={isOpen}>
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="font-semibold text-sm">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger size={'icon'}>
          <ChevronsUpDown />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
