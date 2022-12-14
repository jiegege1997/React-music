import React, { memo } from 'react'
import classNames from 'classnames'
import { formatTime } from '@/utils/format'
import { PlayListWrapper } from './style'
import { useAppSelector, shallowEqualApp } from '@/store'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const HYPlayList: FC<Iprops> = () => {
  const { playSongList, songIndex } = useAppSelector(
    (state) => ({
      playSongList: state.player.playSongList,
      songIndex: state.player.playSongIndex
    }),
    shallowEqualApp
  )
  return (
    <PlayListWrapper>
      {playSongList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames('play-item', {
              active: songIndex === index
            })}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatTime(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
}

export default memo(HYPlayList)
