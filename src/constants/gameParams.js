export const createBoard = (gridDimensions) => {
  const grid = Array(gridDimensions)
  let validBoard = false;
  for (let i = 0; i < grid.length; i++) {
    grid[i] = Array(gridDimensions)
    for (let j = 0; j < grid.length; j++) {
      let cellState = Math.floor(Math.random() * 2)
      grid[i][j] = cellState
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