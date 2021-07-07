import React, { useState } from "react";
import styled from "styled-components";

import Row from "./Row/Row";

const BoardContainer = styled.section`
`;

const Board = () => {
  const [gameState, setGameState] = useState(Array(5).fill().map(_ => Array(5).fill(0)))
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
