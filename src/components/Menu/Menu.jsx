import React from 'react'
import {
  DesktopViewport,
  MobileViewport,
} from './styles'
import { MenuMobile } from './MenuMobile'
import { MenuDesktop } from './MenuDesktop'

const Menu = (props) => {
  return(
    <>
      <DesktopViewport>
        <MenuDesktop/>
      </DesktopViewport>
      <MobileViewport>
        <MenuMobile/>
      </MobileViewport>
    </>
  )
}

export { Menu }