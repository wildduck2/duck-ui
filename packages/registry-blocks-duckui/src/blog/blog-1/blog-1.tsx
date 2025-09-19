import { Badge } from '@gentleduck/registry-ui-duckui/badge'
import { Button } from '@gentleduck/registry-ui-duckui/button'
import { Card, CardContent, CardHeader } from '@gentleduck/registry-ui-duckui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@gentleduck/registry-ui-duckui/select'

import { ChevronRight } from 'lucide-react'

export default function Blog02Page() {
  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="font-bold text-3xl tracking-tight">Posts</h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card className="overflow-hidden rounded-md py-0 shadow-none" key={i}>
            <CardHeader className="p-0">
              <div className="aspect-video w-full border-b bg-muted" />
            </CardHeader>
            <CardContent className="pb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">Technology</Badge>
                <span className="font-medium text-muted-foreground text-xs">5 min read</span>
              </div>

              <h3 className="mt-4 font-semibold text-[1.35rem] tracking-tight">
                A beginner&apos;s guide to blackchain for engineers
              </h3>
              <p className="mt-2 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse various enim in eros.
              </p>

              <Button className="mt-6 shadow-none" size="sm">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
