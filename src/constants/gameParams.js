export const boardDimensions = 5;

export const createBoard = (boardDimensions) => {
  // Start with an array with set dimensions
  const grid = Array(boardDimensions);
  let validBoard = false;
  for (let i = 0; i < grid.length; i++) {
    // Each row an array with set length
    grid[i] = Array(boardDimensions);
    for (let j = 0; j < grid.length; j++) {
      // Random toggle I / 0
      let cellState = Math.floor(Math.random() * 2);
      grid[i][j] = cellState;

      // If at least one cell is toggled, validate board
      if (!validBoard && cellState) {
        validBoard = true;
      }
    }
  }

  if (!validBoard) {
    createBoard(boardDimensions);
  } else {
    return grid;
  }
};

export const toggleCellState = (x, y, board) => {
  // Check if neighbor is on board
  if (x >= 0 && x < boardDimensions && y >= 0 && y < boardDimensions) {
    // Toggle cell state, cast to 1 or 0
    board[x][y] = !board[x][y] * 1;
  } else {
    return;
  }
};

export const checkForWin = (board) => {
  let completedBoard = false;
  let toggledCells = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        toggledCells += 1;
      }
    }
  }

  if (toggledCells === 0) {
    completedBoard = true;
  }

  return completedBoard;
};
