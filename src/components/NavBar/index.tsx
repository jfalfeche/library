import { FC } from 'react'
import cn from 'classnames'

import Item from './Item'

interface Props {
  onClick: Function
  items: { [key: string]: string }
  activeItem?: string
}

const NavBar: FC<Props> = ({ onClick, items, activeItem }) => {
  const isMini = !!activeItem

  const clickItem = (itemKey: string) => {
    onClick(itemKey)
  }

  const renderNav = () => {
    return (
      <div
        className={cn(
          { 'fixed left-24 bottom-24': isMini },
          { 'flex items-center justify-center h-screen': !isMini },
        )}
      >
        <div
          className={cn(
            { 'flex gap-4': isMini },
            { 'grid grid-cols-2 gap-8': !isMini },
          )}
        >
          {Object.keys(items).map(key => (
            <Item key={key} isMini={isMini} onClick={() => clickItem(key)} />
          ))}
        </div>
      </div>
    )
  }

  return renderNav()
}

export default NavBar
