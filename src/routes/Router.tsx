import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import paths from './paths'

const Loading = lazy(() => import('./Loading'))
const Home = lazy(() => import('./Home'))
const Default = Loading

interface Routes {
  path: string
  element: React.ReactNode
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<Default></Default>}>
    <Component />
  </Suspense>
)

const routes: Routes[] = [
  { path: paths.LOADING, element: getRouteElement(Default) },
  { path: paths.HOME, element: getRouteElement(Home) },
]

export default createBrowserRouter(routes)
