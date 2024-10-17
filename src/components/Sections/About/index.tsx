import { FC } from 'react'
import { SectionProps } from '@app/types'

import classNames from 'classnames'

const About: FC<SectionProps> = ({ styles }) => {
  return <div className={classNames(styles)}>about</div>
}

export default About
