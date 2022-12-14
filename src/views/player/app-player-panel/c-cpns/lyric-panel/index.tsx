import React, { memo, useRef, useEffect } from 'react'
import classNames from 'classnames'

import { scrollTo } from '@/utils/ui-helper'

import { PannelWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

export default memo(function HYLyricPanel() {
  const { currentLyrics, currentLyricIndex } = useAppSelector(
    (state) => ({
      currentLyrics: state.player.lyrics,
      currentLyricIndex: state.player.lyricIndex
    }),
    shallowEqualApp
  )

  // other hooks
  const panelRef = useRef<any>(null)
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {currentLyrics.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', {
                active: index === currentLyricIndex
              })}
            >
              {item.text}
            </div>
          )
        })}
      </div>
    </PannelWrapper>
  )
})
