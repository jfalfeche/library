import { FC } from 'react'
import cn from 'classnames'

interface Props {
  isMini: boolean
  onClick: () => void
}

const Item: FC<Props> = ({ isMini, onClick }) => {
  return (
    <button
      className={cn(
        'item-card flex shadow-xl m-auto bg-blue-400 transition-all',
        { 'h-16 w-16 rounded-full hover:h-24 hover:w-24': isMini },
        {
          'h-44 w-44  rounded-3xl  hover:w-52 hover:h-52': !isMini,
        },
      )}
      onClick={onClick}
    ></button>
  )
}

export default Item
