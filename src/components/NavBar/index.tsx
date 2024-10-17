import { FC } from 'react'
import { SectionList, SectionObject } from '@app/types'
import cn from 'classnames'

import Item from './Item'

interface Props {
  onClick: Function
  items: SectionList
  activeItem?: SectionObject
}

const NavBar: FC<Props> = ({ onClick, items, activeItem }) => {
  const isMini = !!activeItem

  const clickItem = (item: SectionObject) => {
    onClick(item)
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
            { 'grid grid-cols-4 gap-12': !isMini },
          )}
        >
          {Object.keys(items).map(key => (
            <Item
              key={key}
              iconPath={items[key].iconPath}
              isMini={isMini}
              onClick={() => clickItem(items[key])}
            />
          ))}
        </div>
      </div>
    )
  }

  return renderNav()
}

export default NavBar
