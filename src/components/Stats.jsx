import React from 'react'
import './Stats.css'

const Stats = ({numberOfMoves}) => {
  return (
    <div className="stats container">
        <div className="stats moves-left">Moves left: {numberOfMoves}</div>
    </div>
  )
}

export default Stats