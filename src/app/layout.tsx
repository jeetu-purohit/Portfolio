import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/src/components/ThemeProviders'
import ReactLenis from 'lenis/react'
import './globals.css'
import Navbar from '../components/common/Navbar'
import GridPattern from '../components/ui/grid-pattern'
import Footer from '../components/common/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Jeetu Purohit",
  description: 'Portfolio ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className='font-inter'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <GridPattern className='' />
              <Navbar />
              {children}
              <Footer />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
