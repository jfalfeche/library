import { Suspense, useState } from 'react'

import Loader from '../Loader'
import PlanetScene from '@app/components/PlanetScene'
import NavBar from '@app/components/NavBar'
import Section from '@app/components/Sections'

import { SECTIONS } from '@app/components/Sections/constants'
import { SectionObject } from '@app/types'

const Home = () => {
  const [section, setSection] = useState<SectionObject | undefined>()

  const renderBackground = () => (
    <section className="fixed -z-50 top-0 left-0 w-full h-screen">
      <Suspense fallback={<Loader />}>
        <PlanetScene />
      </Suspense>
    </section>
  )

  const renderWelcomeMessage = () => {
    return (
      <div className="text-9xl text-white justify-center text-center">
        <div>Hi</div>
      </div>
    )
  }

  const renderNav = () => (
    <NavBar onClick={setSection} items={SECTIONS} activeItem={section} />
  )

  const renderSection = () => <Section type={section?.name} />
  return (
    <>
      {renderWelcomeMessage()}
      {renderNav()}
      {renderSection()}
      {renderBackground()}
    </>
  )
}

export default Home
