'use client'

import { Card, CardContent } from '@gentleduck/registry-ui-duckui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@gentleduck/registry-ui-duckui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

export default function CarouselDemo() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      plugins={[plugin.current]}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={`item-${index + 1}`}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
