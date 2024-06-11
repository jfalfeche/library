import { Suspense, useState } from 'react'

import Loader from '../Loader'
import PlanetScene from '@app/components/PlanetScene'
import NavBar from '@app/components/NavBar'
import Section from '@app/components/Section'
import { SECTIONS } from './constants'

const Home = () => {
  const [section, setSection] = useState<string | undefined>()

  const renderBackground = () => (
    <section className="fixed z-0 top-0 left-0 w-full h-screen">
      <Suspense fallback={<Loader />}>
        <PlanetScene />
      </Suspense>
    </section>
  )

  const renderNav = () => (
    <section className="z-50">
      <NavBar onClick={setSection} items={SECTIONS} activeItem={section} />
    </section>
  )

  const renderSection = () => <Section type={section} />

  return (
    <>
      {renderNav()}
      {renderSection()}
      {renderBackground()}
    </>
  )
}

export default Home
