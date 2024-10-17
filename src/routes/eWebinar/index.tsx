import { Suspense, useState } from 'react'

import Button from '@app/App/common/Button'
import Loader from '../Loader'
import PlanetScene from '@app/components/PlanetScene'

import {
  DEFAULT_WIDGET,
  HIDDEN_SELECTION,
  WIDGETS,
  WIDGET_NAMES,
  WIDGET_TYPES,
} from './constants'

const createMarkup = (type: string) => {
  return { __html: WIDGETS[type] }
}

const EWebinar = () => {
  const [activeWidget, setActiveWidget] = useState(DEFAULT_WIDGET)

  const renderBackground = () => (
    <section className="fixed -z-50 top-0 left-0 w-full h-screen">
      <Suspense fallback={<Loader />}>
        <PlanetScene />
      </Suspense>
    </section>
  )

  const renderWidgetSelection = () => {
    return (
      <div className="flex p-16 justify-end h-screen items-center">
        <div className="z-50 space-y-4 my-auto">
          {Object.keys(WIDGET_TYPES)
            .map(key => {
              const type = WIDGET_TYPES[key]

              if (HIDDEN_SELECTION.includes(type)) return

              return (
                <Button
                  key={type}
                  styles="flex opacity-95"
                  onClick={() => setActiveWidget(type)}
                >
                  {WIDGET_NAMES[type]}
                </Button>
              )
            })
            .filter(Boolean)}
        </div>
      </div>
    )
  }

  const renderWidget = (type: string) => {
    return (
      <div className="flex h-screen items-center">
        <div
          className="z-50 opacity-95 w-3/4"
          dangerouslySetInnerHTML={createMarkup(type)}
        />
      </div>
    )
  }

  return (
    <>
      <div className="w-full grid grid-cols-3 h-screen">
        <div className="col-span-1 w-full">{renderWidgetSelection()}</div>
        <div className="col-span-2 w-full">{renderWidget(activeWidget)}</div>
      </div>
      {renderBackground()}
    </>
  )
}

export default EWebinar
