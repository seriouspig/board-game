import React, { useEffect, useState } from "react";
import "./Board.css";
import { board } from "../data";
import Player from "./Player";

const Board = ({executeMove, numberOfMoves}) => {
  const [playerPos, setPlayerPos] = useState([4, 4]);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(1);



  const updatePossibleMoves = () => {
    console.log("Updating Possible Moves");
    let x = playerPos[0];
    let y = playerPos[1];
    let newPossibleMoves = [];
    if (y !== 0 && board[currentBoard][y - 1][x] !== 1) {
      newPossibleMoves.push([x, y - 1]);
      setPossibleMoves(newPossibleMoves);
    }
    if (y !== board[currentBoard].length - 1 && board[currentBoard][y + 1][x] !== 1) {
      newPossibleMoves.push([x, y + 1]);
      setPossibleMoves(newPossibleMoves);
    }
    if (x !== board[currentBoard][0].length - 1 && board[currentBoard][y][x + 1] !== 1) {
      newPossibleMoves.push([x + 1, y]);
      setPossibleMoves(newPossibleMoves);
    }
    if (x !== 0 && board[currentBoard][y][x - 1] !== 1) {
      newPossibleMoves.push([x - 1, y]);
      setPossibleMoves(newPossibleMoves);
    }
  };

  useEffect(() => {
    updatePossibleMoves();
  }, [playerPos]);

  const getPossibleMoves = (x, y) => {
    if (
      possibleMoves.some((move) => move[0] === x && move[1] === y) &&
      numberOfMoves > 0
    ) {
      return "possible-move";
    } else {
      return "";
    }
  };

  const move = (x, y) => {
    if (possibleMoves.some((move) => move[0] === x && move[1] === y) && numberOfMoves > 0) {  
    setPlayerPos([x, y]);
    setPossibleMoves([]);
    executeMove();
    }
  };

  return (
    <div className="board container">
      <Player playerPos={playerPos} />
      {board[currentBoard].map((row, y) => {
        return (
          <div className="board row" key={y}>
            {row.map((square, x) => {
              return (
                <div
                  key={x}
                  className={`board square ${
                    square === 1 ? "wall" : ""
                  } ${getPossibleMoves(x, y)}`}
                  onClick={() => {
                    move(x, y);
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
