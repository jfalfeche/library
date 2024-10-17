import { FC } from 'react'
import { SECTIONS } from './constants'

interface Props {
  type?: string
}

const Section: FC<Props> = ({ type }) => {
  if (!type) return

  const Component = SECTIONS[type].component
  
  return (
    <div
      className='section-container bg-cover bg-center rounded-lg h-[calc(100vh-18rem)] m-16 p-1 w-2/3 backdrop-blur shadow-xl'
    >
      <div className="inner-container h-full rounded-lg backdrop-blur">
        {/* TODO: Add exit icon to minimize open section */}
        <Component styles="opacity-1 p-8" />
      </div>
    </div>
  )
}
export default Section
