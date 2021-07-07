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

const Row = ({ gameState, rowIndex, onCellClick, row }) => {
  return (
    <RowContainer>
      {
        // Render each row in board
        row.map((cell, cellIndex) => {
            return (
              <Cell
                key={`cell_${rowIndex}_${cellIndex}`}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                gameState={gameState}
                cellState={cell}
                onCellClick={onCellClick}
              />
          )
        })
      }
    </RowContainer>
  );
};

export default Row;
