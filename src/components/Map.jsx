import React from "react";
import "./Map.css";
import { board, map } from "../data";
import MapCell from "./MapCell";

const Map = ({currentTile}) => {

    const checkIfCurrentTile = (x, y) => {
        if (currentTile[0] === x && currentTile[1] === y) {
            return true;
        }

    }

  return (
    <div className="map container">
      {map.map((row, y) => {
        return (
          <div className="board row" key={y}>
            {row.map((square, x) => {
              return <MapCell tile={map[y][x]} currentTile={checkIfCurrentTile(x, y)}/>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Map;
