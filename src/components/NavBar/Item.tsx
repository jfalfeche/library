import { FC } from 'react'

interface Props {
  isMini: boolean
}

const Item: FC<Props> = ({ isMini }) => {
  return <div className="flex h-56 w-56 bg-blue-400 rounded-3xl"></div>
}

export default Item
