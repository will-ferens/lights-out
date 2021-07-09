import React from "react";
import styled from "styled-components";
import { secondary, active } from "../../../constants/colors";

const CellContainer = styled.div`
  background: ${secondary};
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 45px;
  height: 45px;
  margin: 2px;
  padding: 0;
  text-align: center;
  width: 45px;
  border-radius: 50%;
  transition: all 0.5s;
  &.active {
    background: ${active};
  }
`;

const Cell = ({ rowIndex, cellIndex, onCellClick, cellState, gameState }) => {
  return (
    <CellContainer
      cellState={cellState}
      // Check for active state
      className={cellState ? "active" : ""}
      onClick={() => onCellClick(rowIndex, cellIndex, gameState)}
    />
  );
};

export default Cell;
