import { lazy } from 'react'

interface PathComponent {
  path: string
  filePath: string
  component: string
}

const PATH_COMPONENTS: PathComponent[] = [
  {
    path: '*',
    filePath: './Loader',
    component: 'Default',
  },
  {
    path: 'home',
    filePath: './Home',
    component: 'Home',
  },
]

export default PATH_COMPONENTS.reduce(
  (
    acc: { [key: string]: { path: string; component: React.ElementType } },
    pathComponent: PathComponent,
  ) => {
    const { component, path, filePath } = pathComponent
    acc[component] = { path, component: lazy(() => import(filePath)) }

    return acc
  },
  {},
)
