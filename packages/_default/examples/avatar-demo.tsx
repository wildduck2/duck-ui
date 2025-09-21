import { Avatar, AvatarFallback, AvatarImage } from '@/registry/default/ui/avatar'

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
