import { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import { MainLayout } from '@/components/layout'
import { Spinner } from '@/components/ui/Spinner'

const Dashboard = lazy(async () => await import('@/pages/dashboard'))
const Table = lazy(async () => await import('@/pages/table'))
const Profile = lazy(async () => await import('@/pages/profile'))

const App = () => {
  return (
      <MainLayout>
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <Spinner size="xl" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '', // This route handles the homepage
    element: <App />,
    children: [
      {
        path: '', // Empty string path renders the Dashboard component as the homepage
        element: <Dashboard />
      },
      {
        path: '/table',
        element: <Table />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]
