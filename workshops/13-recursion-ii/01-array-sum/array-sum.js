// YOUR CODE BELOW
function arraySum(arr) {
  let sum = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += arraySum(item);
    } else {
      sum += item;
    }
  }

  return sum;
}

console.log(arraySum([1, [2, 3, [4]]]));
