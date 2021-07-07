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

const Row = ({ gameState, rowIndex, onCellClick }) => {
  return (
    <RowContainer>
      {
        gameState.map((cell, cellIndex) => {
            return (
              <Cell
                key={`cell_${rowIndex}_${cellIndex}`}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
                onCellClick={onCellClick}
                content={cell}
              />
          )
        })
      }
    </RowContainer>
  );
};

export default Row;
