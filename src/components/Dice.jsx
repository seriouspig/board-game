import React from 'react'
import './Dice.css'

const Dice = ({rollDice}) => {
  return (
    <div>
        <div className="btn" onClick={rollDice}>
            Roll Dice
        </div>
    </div>
  )
}

export default Dice