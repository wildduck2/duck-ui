'use client'
import { cn } from '@/lib'
import { IoIosHeart, IoMdHeartEmpty } from 'react-icons/io'
import data from '@emoji-mart/data'
import { init, SearchIndex } from 'emoji-mart'
import Picker from '@emoji-mart/react'
import {
  AlertDialogCustom,
  AvatarGroup,
  Badge,
  type LikedType,
  type CommentType,
  Button,
  CheckboxGroup,
  ImageGroup,
  InitDataType,
  Kanban,
  KanbanColumnAddRowBodyArgs,
  KanbanColumnRowBodyContentArgs,
  KanbanColumnRowComponentArgs,
  PopoverWrapper,
  Separator,
  AvatarCustom,
  PopoverClose,
  Input,
  Textarea,
  ScrollArea,
  MDXMinimalTextEditor,
} from '../ui'
import {
  ArrowBigUp,
  EllipsisVertical,
  Heart,
  LucideIcon,
  MessageCircle,
  MessageSquare,
  Paperclip,
  Plus,
  Reply,
  SendHorizontal,
  X,
} from 'lucide-react'
import React from 'react'
import { differenceInDays, format, formatDistanceToNow } from 'date-fns'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import { z } from 'zod'
import localFont from 'next/font/local'

export const initData: InitDataType = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Page "About" and "Contact" components',
      description: "Page 'About' and 'Contact' components are not rendered because it is not the main page",
      subtasks: [
        {
          id: 'subtask-1',
          title: 'About page',
        },
        {
          id: 'subtask-2',
          title: 'Home data fetching',
        },
      ],
      attachments: [
        {
          id: 'attachment-1',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/princess-min.d694ac37.png',
          alt: 'Princess Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-2',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/jake-min.e1358fa8.png',
          alt: 'Jake Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-3',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/bmo-min.b4f5c828.png',
          alt: 'BMO Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-4',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/finn-min.008b490d.png',
          alt: 'Finn Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-5',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/jake-min.e1358fa8.png',
          alt: 'Jake Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-6',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/bmo-min.b4f5c828.png',
          alt: 'BMO Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-7',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/princess-min.d694ac37.png',
          alt: 'Princess Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-8',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/jake-min.e1358fa8.png',
          alt: 'Jake Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-9',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/princess-min.d694ac37.png',
          alt: 'Princess Bubblegum',
          size: '10KB',
        },
        {
          id: 'attachment-10',
          type: 'image',
          filename: 'image.png',
          url: 'https://dnd.hellopangea.com/static/media/bmo-min.b4f5c828.png',
          alt: 'BMO Bubblegum',
          size: '10KB',
        },
      ],
      links: [
        {
          id: 'link-1',
          title: 'Link 1',
        },
      ],
      comments: [
        {
          id: 'comment-1',
          user: {
            id: 'user-1',
            name: 'stephany davis',
            avatarUrl:
              'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          content: 'BTW Ahemd, you have to finished this task today! we are on a deadline. 💀',
          createdAt: '2021-01-01T00:00:00.000Z',
          likes: {
            amount: 4,
            users: [],
          },
        },
        {
          id: 'comment-2',
          user: {
            id: 'user-2',
            name: 'wildduck',
            avatarUrl:
              'https://media.licdn.com/dms/image/v2/D4D03AQGLX-Gb_qm3Rw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725258661460?e=2147483647&v=beta&t=sajP4AdQ68WfKRPPirMnLXbn4J1oIOSDBfGnuwqZ6SQ',
          },
          content:
            'Okay Lol. I am going to finish this task. not today. 😎, and I use arch, vim and Rust BTW, forgot to mention Elixir...girl.',
          createdAt: '2021-01-01T00:00:00.000Z',
          likes: {
            amount: 4089,
            users: [],
          },
        },
      ],
      taggedUsers: [
        {
          id: 'user-1',
          name: 'John Doe',
          avatarUrl:
            'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 'user-2',
          name: 'Jane Doe',
          avatarUrl:
            'https://images.unsplash.com/photo-1723200166097-4eed8c141f03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 'user-3',
          name: 'John Smith',
          avatarUrl:
            'https://images.unsplash.com/photo-1659857279356-0a8d7d23b653?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      labels: [
        {
          id: 'label-1',
          content: 'Design',
        },
        {
          id: 'label-2',
          content: 'Website',
        },
      ],
      options: [{}],
    },
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default function SwapyMainDemo() {
  return (
    <div className="flex items-start gap-4 p-4  select-none">
      <Kanban
        initData={initData}
        kanbanColumnHeader={{ children: KanbanColumnHeaderTemplate, className: 'bg-red-500' }}
        kanbanColumnAddRow={{ children: KanbanColumnAddRowTemplate }}
        kanbanColumnRow={{
          children: KanbanColumnRowTemplate,
          options: {
            draggingOnOriginStyle: 'hidden',
            draggingOutStyle: 'sdfsdfsdf',
          },
        }}
      />
    </div>
  )
}

export const KanbanColumnAddRowTemplate: React.FC<KanbanColumnAddRowBodyArgs> = () => {
  const [data, setData] = React.useState(['sdf'])
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <AlertDialogCustom
      type="sheet"
      // drawerData={data.length > 0}
      header={{
        head: 'Add Task',
        description: 'Set your daily tasks here.',
      }}
      footer={{
        className: 'flex w-full justify-between items-end',
        submit: <Button variant="default">Submit</Button>,
        cancel: <Button variant="outline">Cancel</Button>,
      }}
      state={goal}
      trigger={{
        children: (
          <div className="flex items-center gap-2 mb-1rem mx-2 border-1 border-transparent">
            <Button
              // variant={'secondary'}
              className={cn('w-full')}
            >
              <Plus className={cn('size-6')} />
            </Button>
          </div>
        ),
      }}
      content={{
        className:
          '[&>div]:flex [&>div]:flex-col [&>div]:place-content-center [&>div]:w-full [&>div]:place-self-center sm:max-w-[450px]',
        children: (
          <ContentComponent
            goal={goal}
            onClick={onClick}
          />
        ),
      }}
    />
  )
}
export const ContentComponent = ({ goal, onClick }: { goal: number; onClick: (adjustment: number) => void }) => {
  const [title, setTitle] = React.useState<string>('')
  return (
    <div className="w-full h-[84vh] flex items-start justify-center pt-4 pb-2">
      <div className="p-4 pb-0">
        <form className="w-full">
          <div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="goal"
              >
                title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="goal"
                type="number"
                placeholder="Goal"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="goal"
              >
                title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="goal"
                type="number"
                placeholder="Goal"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export const KanbanColumnHeaderTemplate: React.FC<KanbanColumnRowBodyContentArgs> = ({ column }) => {
  return (
    <>
      <div className={cn('flex items-center gap-2')}>
        <Badge
          size={'icon'}
          className={cn('size-[9px] bg-red-500')}
        />
        <h3>{column.title}</h3>
        <span>{column.taskIds.length}</span>
      </div>
      <div>
        <EllipsisVertical className={cn('size-5')} />
      </div>
    </>
  )
}

export const KanbanColumnRowTemplate: React.FC<KanbanColumnRowComponentArgs> = ({ task }) => {
  const { id, links, title, labels, options, comments, subtasks, attachments, description, taggedUsers } = task ?? {}
  return (
    <div className="w-full">
      <div className={cn('flex items-center justify-between mb-[1rem]')}>
        <div className={cn('flex items-center gap-2')}>
          {labels.map((label, index) => (
            <Badge
              key={label.id}
              className={cn('', label.className)}
            >
              {label.content}
            </Badge>
          ))}
        </div>
        <EllipsisVertical className={cn('size-5')} />
      </div>
      <div className={cn('flex flex-col items-center justify-between mb-[1rem] gap-2')}>
        <h3 className={cn('text-lg font leading-none tracking-tight')}>{title}</h3>
        <p className={cn('text-sm text-muted-foreground')}>{description}</p>
      </div>
      <div className={cn('flex flex-col items-center justify-between mb-[1rem]')}>
        <CheckboxGroup subtasks={subtasks} />
        <Separator className={cn('my-2 h-[1px] bg-muted-foreground/20')} />
        <Button
          variant="outline"
          className="w-full hover:bg-muted-foreground/20 justify-start"
          icon={{
            icon: Plus,
          }}
        >
          Add subtask
        </Button>
      </div>
      <div className="flex items-center justify-start gap-2 mb-3">
        <ImageGroup
          imgs={attachments.map(attachment => ({
            image: {
              ...attachment,
            },
          }))}
          max_imgs={6}
        />
      </div>
      <Separator className={cn('my-2 h-[1px]')} />
      <div className={cn('relative overflow flex items-center justify-between')}>
        <div className={cn('flex items-center justify-start gap-2 shrink-0')}>
          <AvatarGroup
            users={taggedUsers}
            max_users={2}
          />
        </div>
        <div className={cn('flex items-center justify-start gap-1 shrink-0')}>
          <CommentsLayout comments={comments} />
          <Button
            className="p-0"
            variant={'ghost'}
            size={'icon'}
            icon={{
              icon: Paperclip,
            }}
            label={{
              children: 'Attachment',
              showLabel: true,
              showCommand: true,
              side: 'top',
              className: 'text-xs',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export interface CommentsLayoutProps {
  comments: CommentType[]
}

export const CommentsLayout: React.FC<CommentsLayoutProps> = ({ comments }) => {
  return (
    <PopoverWrapper
      wrapper={{
        open: true,
      }}
      trigger={{
        asChild: true,
        children: (
          <Button
            className="p-0"
            variant={'ghost'}
            size={'icon'}
            icon={{
              icon: MessageSquare,
            }}
            label={{
              children: 'Comments',
              showLabel: true,
              showCommand: true,
              side: 'top',
              className: 'text-xs',
            }}
          />
        ),
      }}
      content={{
        side: 'top',
        className: 'p-0 w-96 mb-2',
        children: (
          <div>
            <div className="flex items-center justify-between pt-4 px-4">
              <h3 className="text-lg font-medium leading-none tracking-tight">Comments</h3>
              <PopoverClose className="size-4 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1">
                <X className="size-4" />
              </PopoverClose>
            </div>

            <div className="flex flex-col gap-2 p-4">
              {comments.map(comment => (
                <Comment
                  key={comment.id}
                  comment={comment}
                />
              ))}
            </div>
            <div className="flex items-center justify-between py-2 px-4 bg-secondary/30 gap-2">
              <div className="flex items-center gap-2">
                <AvatarCustom
                  className="w-8 h-8 border-none"
                  avatar_image={{
                    src: 'https://media.licdn.com/dms/image/v2/D4D03AQGLX-Gb_qm3Rw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725258661460?e=2147483647&v=beta&t=sajP4AdQ68WfKRPPirMnLXbn4J1oIOSDBfGnuwqZ6SQ',
                  }}
                  fallback={{
                    className: 'w-8 h-8 bg-secondary/20',
                  }}
                />
              </div>

              <div className="relative w-full">
                <MDXMinimalTextEditor
                  className={cn('w-full font-medium h-42')}
                  name="comment"
                  valid={true}
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <Button
                  size={'icon'}
                  variant={'outline'}
                  className="rounded-full h-8 w-8 bg-secondary/20"
                  icon={{
                    children: Plus,
                  }}
                />
                <Button
                  size={'icon'}
                  variant={'outline'}
                  className="rounded-full h-8 w-8 bg-secondary/20"
                  icon={{
                    children: ArrowBigUp,
                  }}
                />
              </div>
            </div>
          </div>
        ),
      }}
    />
  )
}

export interface CommentProps extends React.HTMLProps<HTMLDivElement> {
  comment: CommentType
}

export const Comment: React.FC<CommentProps> = ({ comment, className, ...props }) => {
  const commentDate = new Date(comment.createdAt!)
  const daysDifference = differenceInDays(new Date(), commentDate)

  return (
    <div
      className={cn(
        'flex items-start justify-start gap-2 bg-secondary/40 p-4 rounded-md hover:bg-secondary/70',
        className
      )}
      {...props}
    >
      <AvatarCustom
        className="w-8 h-8"
        avatar_image={{
          // ...comment.user,
          src: comment.user.avatarUrl,
        }}
        fallback={{
          className: 'w-8 h-8',
        }}
      />
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <div className="flex items-center justify-start w-full gap-2">
          <div className="flex items-center justify-start w-full gap-2">
            <p className="text-sm font-medium">{comment.user.name}</p>
            <p className="text-sm text-muted-foreground">
              {daysDifference > 1 ? format(commentDate, 'PP') : formatDistanceToNow(commentDate, { addSuffix: true })}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <LikeButton likes={comment.likes} />
            <Separator
              orientation="vertical"
              className="h-4 bg-muted-foreground/80"
            />
            <ReplyButton />
          </div>
        </div>
        <p className={cn('text-sm', EmojiFont.className)}>{comment.content}</p>
        {
          // FIX: idk what the fuck to fix but it's a red line to break the code <3
          // TODO: you have to make some magic here :D
        }
        <div className=""></div>
      </div>
    </div>
  )
}

// Font files can be colocated inside of `pages`
const EmojiFont = localFont({ src: '../../../assets/fonts/font.ttf' })

export interface LikeButtonProps extends React.HTMLProps<HTMLDivElement> {
  likes: LikedType
}
export const LikeButton: React.FC<LikeButtonProps> = ({ likes, className, ...props }) => {
  const { users, amount } = likes
  const [nlikes, setLikes] = React.useState(amount)

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Button
        size={'icon'}
        variant={'nothing'}
        className="rounded-full h-auto w-auto"
        onClick={() => setLikes(nlikes + 1)}
        icon={{
          children: (nlikes > 0 ? IoIosHeart : IoMdHeartEmpty) as LucideIcon,
        }}
      >
        {nlikes}
      </Button>
    </div>
  )
}

export const ReplyButton = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        // size={'icon'}
        variant={'ghost'}
        className="w-5 h-5 p-3"
        icon={{
          children: Reply,
        }}
      />
    </div>
  )
}