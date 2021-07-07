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
`;

const Cell = ({ rowIndex, cellIndex, onCellClick }) => {
  return <CellContainer onClick={() => onCellClick(rowIndex, cellIndex)}/>;
};

export default Cell;
