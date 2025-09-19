'use client'

import { cn } from '@gentleduck/libs/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarNavItem } from 'types/nav'
import { type DocsConfig } from '~/config/docs'

export interface DocsSidebarNavProps {
  config: DocsConfig
}

export function DocsSidebarNav({ config }: DocsSidebarNavProps) {
  const pathname = usePathname()

  const items = pathname?.startsWith('/charts') ? config.chartsNav : config.sidebarNav

  return (
    items.length && (
      <div className="w-full flex flex-col">
        {items.map((item, index) => (
          <CategoryItem item={item} key={index} pathname={pathname} />
        ))}
      </div>
    )
  )
}

// Memoized category component to prevent unnecessary re-renders
const CategoryItem = ({ item, pathname }: { item: SidebarNavItem; pathname: string | null }) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <div className="flex items-center justify-between w-full text-start text-sm font-semibold [&>div]:justify-between [&>div]:w-full h-[36px]">
        {item.title}
        {item.label && (
          <span className="ml-2 rounded-md bg- px-1.5 py-0.5 text-sm font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
            {item.label}
          </span>
        )}
      </div>
      <div className="border-l">
        {item?.items?.length && <DocsSidebarNavItems items={item.items} pathname={pathname} />}
      </div>
    </div>
  )
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
  className?: string
}

export function DocsSidebarNavItems({ items, pathname }: DocsSidebarNavItemsProps) {
  return (
    items?.length && (
      <ul>
        {items.map((item, index) => (
          <DocsSidebarNavItem item={item} key={index} pathname={pathname} />
        ))}
      </ul>
    )
  )
}

export function DocsSidebarNavItem({ item, pathname }: { item: SidebarNavItem; pathname: string | null }) {
  if (item.href && !item.disabled) {
    return (
      <li className={cn(pathname === item.href && 'border-l border-primary')}>
        <Link
          className={cn(
            'group flex w-full items-center px-4 py-1 focus-visible:border-l border-primary focus-visible:outline-none font-medium text-sm',
            pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground',
          )}
          href={item.href}
          rel={item.external ? 'noreferrer' : ''}
          target={item.external ? '_blank' : ''}>
          {item.title}
          {item.label && (
            <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 leading-none text-accent no-underline group-hover:no-underline text-xs font-medium">
              {item.label}
            </span>
          )}
        </Link>
      </li>
    )
  }

  return (
    <span
      className={cn(
        'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline',
      )}>
      {item.title}
      {item.label && (
        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 leading-none text-muted-foreground no-underline group-hover:no-underline text-sm">
          {item.label}
        </span>
      )}
    </span>
  )
}
