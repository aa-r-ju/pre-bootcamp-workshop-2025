// YOUR CODE BELOW
function veryOddMutant(arr) {
  let countRemoved = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";
      countRemoved++;
    }
  }
  return countRemoved;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(veryOddMutant(allTheNums));
console.log(allTheNums);
