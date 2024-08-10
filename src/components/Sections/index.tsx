import { FC } from 'react'
import { SECTION_BACKGROUNDS, SECTION_COMPONENTS } from './constants'
import classNames from 'classnames'

interface Props {
  type?: string
}

const Section: FC<Props> = ({ type }) => {
  if (!type) return

  const Component = SECTION_COMPONENTS[type]
  const BG_URL = SECTION_BACKGROUNDS[type]

  console.log(BG_URL)
  console.log(`bg-[url('${BG_URL}')]`)
  return (
    <div
      className={classNames(
        `bg-[url('${BG_URL}')]`,
        'section-container bg-cover bg-center rounded-lg h-[calc(100vh-18rem)] m-16 p-1 w-1/2 backdrop-blur',
      )}
    >
      <div className="inner-container h-full rounded-lg backdrop-blur">
        {/* TODO: Add exit icon to minimize open section */}
        <Component styles="opacity-1 p-8" />
      </div>
    </div>
  )
}
export default Section
