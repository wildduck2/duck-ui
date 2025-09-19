import { ScrollArea } from '@gentleduck/registry-ui-duckui/scroll-area'
import * as React from 'react'
import { cn } from '@/lib/utils'

// Demo Component
export default function ScrollAreaDemo() {
  return (
    <>
      <h3>Vertical (width = 4px)</h3>
      <ScrollArea alwaysVisible className="h-[200px] w-[350px] rounded-md border p-4" orientation="both">
        {Array.from({ length: 30 }).map((_, i) => (
          <p className="mb-2 whitespace-nowrap" key={i}>
            Line {i + 1}: Lorem ipsum dolor sit amet... aasdfasdfa asdfa sdfasdf asdf asdf asdfasdf asdf asdf asdf
          </p>
        ))}
      </ScrollArea>

      <h3 className="mt-6">Horizontal (height = 4px)</h3>
      <ScrollArea className="w-[400px] rounded-md border mt-2" orientation="horizontal" style={{ height: 100 }}>
        <div className="p-4" style={{ width: 2000 }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <span className="mr-4" key={i}>
              Item {i + 1}
            </span>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}
