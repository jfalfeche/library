import { FC } from 'react'

interface Props {
  type?: string
}

const Section: FC<Props> = ({ type }) => {
  if (!type) return

  return <></>
}

export default Section
