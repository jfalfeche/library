import { SECTION_KEYS } from '@app/routes/Home/constants'
import { FC } from 'react'
import Item from './Item'

interface Props {
  onClick: Function
  items: { [key: string]: string }
  activeItem?: string
}

const NavBar: FC<Props> = ({ onClick, items, activeItem }) => {
  const isMini = !!activeItem

  const renderMiniNav = () => {
    return <></>
  }

  const renderNav = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 gap-4">
          {SECTION_KEYS.map(key => (
            <Item key={key} isMini={isMini} />
          ))}
        </div>
      </div>
    )
  }

  if (activeItem) {
    return renderMiniNav()
  }

  return renderNav()
}

export default NavBar
