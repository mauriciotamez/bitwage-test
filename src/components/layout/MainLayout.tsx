import { ThemeProvider } from '@/components/theme/theme-provider'
import Navbar from './Navbar'
import { type ReactNode } from 'react'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-4 py-2 sm:px-10 sm:py-6 flex flex-col h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
