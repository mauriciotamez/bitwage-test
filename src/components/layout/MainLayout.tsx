import { ThemeProvider } from '@/components/theme/theme-provider'
import Navbar from './Navbar'
import { type ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout ({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-10 py-6 flex flex-col h-screen">
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  )
}
