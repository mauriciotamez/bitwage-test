import { ThemeProvider } from '@/components/theme-provider'
import Navbar from './Navbar'
import { type ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode // ReactNode is a type for any JSX content
}

export default function MainLayout ({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='px-10 py-6'>
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  )
}
