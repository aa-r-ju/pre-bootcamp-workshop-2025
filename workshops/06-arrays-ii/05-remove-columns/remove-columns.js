// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++) {
    let row = originalGrid[i];
    console.log(row, "epr");
    let newRow = row.slice(0, row.length - numColumns);
    newGrid.push(newRow);
  }

  return newGrid;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
