import React from "react";
import { accent, secondary, active } from "../../../constants/colors";
import styled from "styled-components";

const RestartButton = styled.button`
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  font-size: 18px;
  height: 32px;
  border-radius: 3px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  background-color: ${active};
  border: none;
  color: ${secondary};
  cursor: pointer;
  &:hover {
    background-color: ${accent};
    color: ${secondary};
  }
`;

const Restart = ({
  createBoard,
  dimensions,
  setGameState,
  countMoves,
  totalMoves,
}) => {
  return (
    <RestartButton
      onClick={() =>
        setGameState(createBoard(dimensions), countMoves(totalMoves * 0))
      }
    >
      Restart
    </RestartButton>
  );
};

export default Restart;
