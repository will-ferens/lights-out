import React, { useState } from "react";
import styled from "styled-components";

import { createBoard } from "../../constants/gameParams"

import Row from "./Row/Row";
import MovesCount from "../Controls/MovesCount/MovesCount"
import Restart from "../Controls/Restart/Restart"

const boardDimensions = 5;
const BoardContainer = styled.section`
`;

const Board = () => {
  const [gameState, setGameState] = useState(createBoard(boardDimensions))
  const [totalMoves, countMoves] = useState(0)

  function onCellClick(x, y, gameState) {
    countMoves(totalMoves + 1)
    // Copy current game state
    let newGamestate = [...gameState]

    toggleCellState(x, y, newGamestate)

    // Find adjacent cells
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

    // Toggle adjacent cells
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      toggleCellState(neighbor.x, neighbor.y, newGamestate)
    }

    // Return new gameState
    setGameState(newGamestate);
  }

  function toggleCellState(x, y, board) {
    // Check if neighbor is on board
    if (x >= 0 && x < boardDimensions && y >= 0 && y < boardDimensions) {
      // Toggle cell state, cast to 1 or 0
      board[x][y] = !board[x][y] * 1;
    }
  }
  return (
    <BoardContainer>
      <MovesCount value={totalMoves} />
      <Restart 
        setGameState={setGameState} 
        createBoard={createBoard} 
        dimensions={boardDimensions}
        countMoves={countMoves}
        totalMoves={totalMoves}
      />
      {
        gameState.map((row, index) => {
          return (
            <Row
              key={`row_${index}`}
              row={row}
              rowIndex={index}
              gameState={gameState}
              onCellClick={onCellClick}
            />
          )
        })
      }
    </BoardContainer>
  );
};

export default Board;
