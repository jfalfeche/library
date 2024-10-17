import { FC } from 'react'
import { SectionProps } from '@app/types'

import classNames from 'classnames'

const Projects: FC<SectionProps> = ({ styles }) => {
  return <div className={classNames(styles)}>projects</div>
}

export default Projects
