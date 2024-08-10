import { FC } from 'react'

export interface StringObject {
  [key: string]: string
}

export interface ComponentObject {
  [key: string]: FC<SectionProps>
}

export interface SectionProps {
  styles: string
}
