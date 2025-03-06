import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@duck/libs/cn'
import { ThemeProvider } from '~/components/providers'
import { TailwindIndicator } from '~/components/tailwind-indicator'
import { DefaultToaster } from '@duck/registry-ui-duckui/toast'
import { DefaultSonner } from '@duck/registry-ui-duckui/sonner'
import { ThemeSwitcher } from '~/components/theme-switcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-svh bg-background font-sans antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-svh flex-col bg-background">
              {children}
            </div>
          </div>
          <ThemeSwitcher />
          <DefaultSonner />
          <DefaultToaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
