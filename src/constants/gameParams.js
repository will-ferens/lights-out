export const createBoard = (x, y) => {
  let newBoard = [];
  let validBoard = false;

  for (let i = 0; i < x; i++) {
    let row = [];
    for (let j = 0; j < y; j++) {
      let cellState = Math.round(Math.random()) === 1 ? 1 : 0;
      if (!validBoard && cellState) {
        validBoard = true;
      }
      row.push(cellState);
    }
    newBoard.push(row);
  }
  if (!validBoard) {
    createBoard(x, y)
  } else {
    return newBoard
  }
}