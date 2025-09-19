import { cn } from '@gentleduck/libs/cn'
import { Button } from '@gentleduck/registry-ui-duckui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@gentleduck/registry-ui-duckui/card'
import { Switch } from '@gentleduck/registry-ui-duckui/switch'
import { BellRing, Check } from 'lucide-react'

const notifications = [
  {
    description: '1 hour ago',
    title: 'Your call has been confirmed.',
  },
  {
    description: '1 hour ago',
    title: 'You have a new message!',
  },
  {
    description: '2 hours ago',
    title: 'Your subscription is expiring soon!',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="font-medium text-sm leading-none">Push Notifications</p>
            <p className="text-muted-foreground text-sm">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              key={`notification-${index + 1}`}>
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="font-medium text-sm leading-none">{notification.title}</p>
                <p className="text-muted-foreground text-sm">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
