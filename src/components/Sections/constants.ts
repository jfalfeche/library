import * as Components from '@app/components/Sections/sections'

import { ComponentObject, StringObject } from '@app/types'

export const SECTIONS: StringObject = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  contact: 'contact',
}

export const SECTION_COMPONENTS: ComponentObject = {
  default: Components.About,
  about: Components.About,
  experience: Components.Experience,
  projects: Components.Projects,
  contact: Components.Contact,
}

export const SECTION_BACKGROUNDS: StringObject = {
  default: '/public/about.jpg',
  about: '/public/about.jpg',
  experience: '/public/experience.jpg',
  projects: '/public/projects.jpg',
  contact: '/public/contact.jpg',
}
