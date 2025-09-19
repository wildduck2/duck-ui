import { cn } from '@gentleduck/libs/cn'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import React from 'react'
import { siteConfig } from '~/config/site'
import { getRegistryComponent, getRegistryItem } from '~/lib/get-registry-item'
import { absoluteUrl } from '~/lib/utils'

export const revalidate = false
export const dynamic = 'force-static'
export const dynamicParams = false

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name)
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    name: string
  }>
}): Promise<Metadata> {
  const { name } = await params
  const item = await getCachedRegistryItem(name)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    description,
    openGraph: {
      description,
      images: [
        {
          alt: siteConfig.name,
          height: 630,
          url: siteConfig.ogImage,
          width: 1200,
        },
      ],
      title,
      type: 'article',
      url: absoluteUrl(`/view/${item.name}`),
    },
    title: item.description,
    twitter: {
      card: 'summary_large_image',
      creator: '@shadcn',
      description,
      images: [siteConfig.ogImage],
      title,
    },
  }
}

export async function generateStaticParams() {
  const { Index } = await import('~/__ui_registry__/index')
  // const index = z.record(registry_entry_schema).parse(Index)

  return Object.values(Index)
    .filter((block) =>
      ['registry:block', 'registry:component', 'registry:example', 'registry:internal'].includes(block.type),
    )
    .map((block) => ({
      name: block.name,
    }))
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    name: string
  }>
}) {
  const { name } = await params
  const item = await getCachedRegistryItem(name)
  const Component = getRegistryComponent(name)

  if (!Component || !item) {
    return notFound()
  }

  return (
    <>
      <div className={cn('h-screen flex flex-col items-center justify-center')}>
        <Component />
      </div>
    </>
  )
}
