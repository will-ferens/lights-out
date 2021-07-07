import React, { useState } from "react";
import styled from "styled-components";

import { createBoard } from "../../constants/gameParams"

import Row from "./Row/Row";
const boardDimensions = 5;
const BoardContainer = styled.section`
`;

const Board = () => {
  const [gameState, setGameState] = useState(createBoard(boardDimensions))

  function onCellClick(x, y, gameState, setGameState) {
    let newGamestate = [...gameState]

    toggleCellState(x, y, newGamestate)

    let neighbors = [
      {
        x: x - 1,
        y: y
      },
      {
        x: x + 1,
        y: y
      },
      {
        x: x,
        y: y - 1
      },
      {
        x: x,
        y: y + 1
      }
    ]

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      toggleCellState(neighbor.x, neighbor.y, newGamestate)
    }
    setGameState(newGamestate);
  }

  function toggleCellState(x, y, board) {
    if (x >= 0 && x < boardDimensions && y >= 0 && y < boardDimensions) {
      board[x][y] = !board[x][y] * 1;
    }
  }
  return (
    <BoardContainer>
      {
        gameState.map((row, index) => {
          return (
            <Row
              key={`row_${index}`}
              rowIndex={index}
              row={row}
              gameState={gameState}
              onCellClick={onCellClick}
              setGameState={setGameState}
            />
          )
        })
      }
    </BoardContainer>
  );
};

export default Board;
