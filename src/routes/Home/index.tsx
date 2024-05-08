import { Suspense } from 'react'

import Scene from './components/Scene'
import Loader from '../Loader'

const Home = () => {
  return (
    <section className="w-full h-screen">
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </section>
  )
}

export default Home
