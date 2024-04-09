import { Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'

import pages from './pages'

interface Routes {
  path: string
  element: React.ReactNode
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<pages.Default.component></pages.Default.component>}>
    <Component />
  </Suspense>
)

const routes: Routes[] = Object.values(pages).map(({ path, component }) => {
  return {
    path,
    element: getRouteElement(component),
  }
})

export default createHashRouter(routes)
