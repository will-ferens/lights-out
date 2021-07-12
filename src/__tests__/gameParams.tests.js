import {
  createBoard,
  toggleCellState,
  checkForWin,
} from "../constants/gameParams";

describe("create game board", () => {
  test("creates array of arg length", () => {
    const boardDimensions = 5;
    expect(createBoard(boardDimensions).length).toBe(5);
  });
  test("creates board with at least one cell toggled on", () => {
    const gameBoard = createBoard(5);
    let toggledCells = 0;

    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard.length; j++) {
        if (gameBoard[i][j] === 1) {
          toggledCells += 1;
        }
      }
    }

    expect(toggledCells > 0).toBeTruthy();
  });
});

describe("toggle cell state", () => {
  let gameBoard = [
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1],
  ];
  test("should toggle cell from 1 to 0", () => {
    toggleCellState(0, 0, gameBoard);
    expect(gameBoard[0][0]).toBe(0);
  });
  test("should toggle cell from 0 to 1", () => {
    toggleCellState(0, 0, gameBoard);
    expect(gameBoard[0][0]).toBe(1);
  });
  test("should exit if out of bounds", () => {
    expect(toggleCellState(-1, 0, gameBoard)).toBeUndefined();
  });
});

describe("check for win condition", () => {
  test("should return false if any cell is active", () => {
    let gameBoard = [
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(checkForWin(gameBoard)).toBe(false);
  });
  test("should return true if all cells are inactive", () => {
    let gameBoard = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(checkForWin(gameBoard)).toBe(true);
  });
});
