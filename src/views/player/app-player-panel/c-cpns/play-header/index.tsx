import React, { memo } from 'react'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import type { FC, ReactNode } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
}

const HYPlayHeader: FC<Iprops> = () => {
  const { playSongList, currentSong } = useAppSelector(
    (state) => ({
      playSongList: state.player.playSongList,
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  )

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playSongList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </HeaderWrapper>
  )
}

export default memo(HYPlayHeader)
