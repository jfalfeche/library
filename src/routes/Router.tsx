import { lazy, Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'

import paths from './paths'

const Landing = lazy(() => import('./Landing'))
const Default = Landing

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
  { path: paths.LANDING, element: getRouteElement(Default) },
]

export default createHashRouter(routes)
