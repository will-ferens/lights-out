import React from "react";
import styled from "styled-components";

import Cell from "../Cell/Cell"

const RowContainer = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Row = ({ gameState, rowIndex, onCellClick, setGameState, row }) => {
  return (
    <RowContainer>
      {
        row.map((cell, cellIndex) => {
            return (
              <Cell
                key={`cell_${rowIndex}_${cellIndex}`}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                onCellClick={onCellClick}
                cellState={cell}
                gameState={gameState}
                setGameState={setGameState}
              />
          )
        })
      }
    </RowContainer>
  );
};

export default Row;
