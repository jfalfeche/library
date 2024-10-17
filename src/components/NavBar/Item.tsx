import { FC } from 'react'
import cn from 'classnames'

interface Props {
  iconPath: string
  isMini: boolean
  onClick: () => void
}

const Item: FC<Props> = ({ iconPath, isMini, onClick }) => {
  return (
    <button
      className={cn(
        'item-card flex shadow-xl m-auto',
        { 'h-16 w-16 ': isMini },
        { 'h-44 w-44  rounded-3xl ': !isMini },
      )}
      onClick={onClick}
    >
      <img
        src={iconPath}
        className={cn(
          'absolute transition-all',
          { 'h-16 w-16': isMini },
          {
            'h-56 w-56 -m-6': !isMini,
          },
        )}
      />
      <div
        className={cn(
          'w-full h-full bg-gradient-to-r from-indigo-500 transition-all',
          { 'rounded-full': isMini },
          { 'rounded-3xl ': !isMini },
        )}
      />
    </button>
  )
}

export default Item
