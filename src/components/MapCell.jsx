import React from 'react'
import "./MapCell.css";
import { board } from "../data";

const MapCell = ({tile, currentTile}) => {
  return (
    <div className={`map-cell container ${currentTile ? "current-tile" : ""}`}>
      {board[tile].map((row, y) => {
        return (
          <div className="map-cell row" key={y}>
            {row.map((square, x) => {
              return (
                <div
                  key={x}
                  className={`map-cell square ${
                    square === 1 ? "wall" : ""
                  }`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default MapCell