import * as Components from '@app/components/Sections/sections'

import { SectionList, } from '@app/types'

export const SECTIONS: SectionList = {
  about: {
    name: 'about',
    component: Components.About,
    iconPath: '../../../public/about.png',
  },
  experience: {
    name: 'experience',
    component: Components.Experience,
    iconPath: 'https://i.imgur.com/enfyvZD.png',
  },
  projects: {
    name: 'projects',
    component: Components.Projects,
    iconPath: 'https://i.imgur.com/ZsOCJoJ.png',
  },
  contact: {
    name: 'contact',
    component: Components.Contact,
    iconPath: 'https://i.imgur.com/h9egYfc.png',
  }
}

/*
  Public Paths for the Icons
  about: 'https://i.imgur.com/MAdwgyO.png'
  experience: 'https://i.imgur.com/enfyvZD.png'
  projects: 'https://i.imgur.com/ZsOCJoJ.png'
  contact: 'https://i.imgur.com/h9egYfc.png'
*/