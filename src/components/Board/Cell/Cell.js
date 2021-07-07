import React from "react";
import styled from "styled-components";

const CellContainer = styled.div`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 45px;
  height: 45px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 45px;
  &.active {
    background: #ccc;
  }
`;

const Cell = ({ rowIndex, cellIndex, onCellClick, cellState, gameState, setGameState }) => {
  return (
    <CellContainer
      cellState={cellState}
      className={cellState ? 'active' : ''}
      onClick={() => onCellClick(rowIndex, cellIndex, gameState, setGameState)}
    />
  );
};

export default Cell;
