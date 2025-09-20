'use client'

import { Block } from '@gentleduck/registers'
import { AnimatePresence, motion } from 'motion/react'
import * as React from 'react'
import { useLiftMode } from '~/hooks/use-lift-mode'

export function BlockWrapper({ block, children }: React.PropsWithChildren<{ block: Block }>) {
  const { isLiftMode } = useLiftMode(block.name)

  return (
    <>
      {children}
      <AnimatePresence>
        {isLiftMode && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-30 bg-background/90 fill-mode-backwards"
            exit={{
              opacity: 0,
              transition: { duration: 0.38, ease: 'easeOut' },
            }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.18, duration: 0.2, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
