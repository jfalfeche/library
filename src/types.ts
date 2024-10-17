import { FC } from 'react'

export interface StringObject {
  [key: string]: string
}

export interface SectionProps {
  styles: string
}

export interface SectionObject {
  name: string
  component: FC<SectionProps>
  iconPath: string
}

export interface SectionList {
  [key: string]: SectionObject
}
