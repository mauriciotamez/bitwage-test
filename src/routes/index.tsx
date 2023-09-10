import {
  createBrowserRouter
} from 'react-router-dom'
import { protectedRoutes } from './protected'

const Router = createBrowserRouter(protectedRoutes)

export default Router
