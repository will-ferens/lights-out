export const createBoard = (gridDimensions) => {
  // Start with an array with set dimensions
  const grid = Array(gridDimensions)
  let validBoard = false;
  for (let i = 0; i < grid.length; i++) {
    // Each row an array with set length
    grid[i] = Array(gridDimensions)
    for (let j = 0; j < grid.length; j++) {
      // Random toggle I / 0
      let cellState = Math.floor(Math.random() * 2)
      grid[i][j] = cellState

      // If at least one cell is toggled, validate board
      if (!validBoard && cellState) {
        validBoard = true;
      }
    }
  }

  if (!validBoard) {
    createBoard(gridDimensions)
  } else {
    return grid
  }
}