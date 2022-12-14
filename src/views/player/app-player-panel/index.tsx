import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HYPlayHeader from './c-cpns/play-header'
import HYPlayList from './c-cpns/play-list'
import HYLyricPanel from './c-cpns/lyric-panel'
import { PanelWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const PlayerPanel: FC<Iprops> = () => {
  return (
    <PanelWrapper>
      <HYPlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <HYPlayList />
        <HYLyricPanel />
      </div>
    </PanelWrapper>
  )
}

export default memo(PlayerPanel)
