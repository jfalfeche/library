import { Suspense, useState } from 'react'

import Loader from '../Loader'
import PlanetScene from '@app/components/PlanetScene'
import NavBar from '@app/components/NavBar'
import Section from '@app/components/Sections'

import { SECTIONS } from '@app/components/Sections/constants'

const Home = () => {
  const [section, setSection] = useState<string | undefined>()
  const renderBackground = () => (
    <section className="fixed -z-50 top-0 left-0 w-full h-screen">
      <Suspense fallback={<Loader />}>
        <PlanetScene />
      </Suspense>
    </section>
  )
  const renderNav = () => (
    <NavBar onClick={setSection} items={SECTIONS} activeItem={section} />
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
