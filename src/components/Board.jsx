import Strike from "./Strike";
import Tile from "./Tile";
import React from "react";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  // Define the grid layout
  const grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  // Helper function to determine tile classes
  const getTileClassName = (index) => {
    let className;
    if (index % 3 !== 2) className += " right-border";
    if (index < 6) className += " bottom-border";
    return className;
  };

  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((index) => (
            <Tile
              key={index}
              playerTurn={playerTurn}
              onClick={() => onTileClick(index)}
              value={tiles[index]}
              className={getTileClassName(index)}
            />
          ))}
        </React.Fragment>
      ))}

      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
