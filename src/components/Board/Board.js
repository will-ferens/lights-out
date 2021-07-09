import React, { useState } from "react";
import styled from "styled-components";

import { createBoard, toggleCellState, checkForWin, boardDimensions } from "../../constants/gameParams";

import Header from "../Header/Header";
import Row from "./Row/Row";
import MovesCount from "../Controls/MovesCount/MovesCount"
import Restart from "../Controls/Restart/Restart"

const BoardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoardWrapper = styled.div``
const WinMessage = styled.div`
  h3 {
    display: inline;
  }
`

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Board = () => {
  const [gameState, setGameState] = useState(createBoard(boardDimensions));
  const [totalMoves, countMoves] = useState(0);
  const [winConditionMet, setWinCondition] = useState(false);

  function onCellClick(x, y, gameState) {
    countMoves(totalMoves + 1);
    // Copy current game state
    let newGamestate = [...gameState];

    toggleCellState(x, y, newGamestate);
    
    toggleCellState(x - 1, y, newGamestate);
    toggleCellState(x + 1, y, newGamestate);
    toggleCellState(x, y - 1, newGamestate);
    toggleCellState(x, y + 1, newGamestate);

    // Return new gameState
    setWinCondition(checkForWin(newGamestate));
    setGameState(newGamestate);
  }


  return (
    <BoardContainer>
      <Header />
      {winConditionMet
        ?
        <WinMessage>
          <h2>You won!</h2>
          <div>
            <span>
              It only took &nbsp;
              <MovesCount value={totalMoves} />
              &nbsp; moves.
            </span>
          </div>
          <div>
            <p>Play Again?</p>
            <Restart
              setGameState={setGameState}
              createBoard={createBoard}
              countMoves={countMoves}
              dimensions={boardDimensions}
              totalMoves={totalMoves}
            />
          </div>
        </WinMessage>
        :
        <BoardWrapper>
          <ControlsContainer>
            <MovesCount value={totalMoves} />
            <Restart
              setGameState={setGameState}
              createBoard={createBoard}
              countMoves={countMoves}
              dimensions={boardDimensions}
              totalMoves={totalMoves}
            />
          </ControlsContainer>
          {gameState.map((row, index) => {
            return (
              <Row
                data-testid="row"
                key={`row_${index}`}
                row={row}
                rowIndex={index}
                gameState={gameState}
                onCellClick={onCellClick}
              />
            );
          })}
          </BoardWrapper>
        }
    </BoardContainer>
  );
};

export default Board;
