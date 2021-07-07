import React, { useState } from "react";
import styled from "styled-components";

import { createBoard } from "../../constants/gameParams"

import Row from "./Row/Row";

const BoardContainer = styled.section`
`;

const Board = () => {
  const [gameState, setGameState] = useState(createBoard(5, 5))
  function onCellClick(x, y) {
    console.log(`x: ${x}, y: ${y}`)
  }
  return (
    <BoardContainer>
      {
        gameState.map((row, index) => {
          return (
            <Row
              key={`row_${index}`}
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
