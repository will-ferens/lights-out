import React from "react";
import styled from "styled-components";

const RestartButton = styled.button`
  height: 32px;
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
