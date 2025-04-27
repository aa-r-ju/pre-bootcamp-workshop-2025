// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
  let bigArr = [];
  let arr = [];
  for (let i = 1; i <= numColumns; i++) {
    arr.push(i);
  }
  for (let j = 1; j <= numRows; j++) {
    bigArr.push(arr.slice());
  }
  return bigArr;
}

console.log(makeGrid(3, 4));
