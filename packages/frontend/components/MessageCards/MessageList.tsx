import React from 'react'
import MessageCard from './MessageCard'
import MessageProps from '../../interfaces/messageProps'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'

export default function MessageList(props: MessageProps) {
  const cards = props.cardData.map((message, i) => (
    <MessageCard key={i} {...message} />
  ))

  const breakpointColumnsObj = {
    default: 3,
    1160: 2,
    860: 1,
  }

  return (
    <div className={styles.fanart_board}>
      <MasonryBoard breakpointCols={breakpointColumnsObj}>{cards}</MasonryBoard>
    </div>
  )
}