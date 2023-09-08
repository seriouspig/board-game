import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Stats from "./components/Stats";
import Dice from "./components/Dice";
import Map from "./components/Map";

function App() {
  const [count, setCount] = useState(0);
  const [numberOfMoves, setNumberOfMoves] = useState(5);
  const [currentTile, setCurrentTile] = useState([3, 3]);

  const executeMove = () => {
    setNumberOfMoves(numberOfMoves - 1);
  };

  const rollDice = () => {
    let result = Math.floor(Math.random() * 6) + 1;
    setNumberOfMoves(result);
  };

  return (
    <>
      <Stats numberOfMoves={numberOfMoves} />
      <Dice rollDice={rollDice} />
      <Board executeMove={executeMove} numberOfMoves={numberOfMoves} />
      <Map currentTile={currentTile} />
    </>
  );
}

export default App;
