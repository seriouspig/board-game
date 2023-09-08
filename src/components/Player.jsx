import React, { useEffect, useState } from 'react'
import './Player.css'
import {player} from "../data"

const Player = ({playerPos}) => {

console.log(playerPos)

  return (
    <div
      className="player"
      style={{ left: playerPos[0] * 32 + "px", top: playerPos[1] * 32 + "px" }}
    ></div>
  );
}

export default Player