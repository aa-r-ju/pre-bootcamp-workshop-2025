// YOUR CODE BELOW
function theTruthCounts(arr) {
  let count = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      count += theTruthCounts(item);
    } else if (item) {
      count += 1;
    }
  }

  return count;
}

console.log(theTruthCounts([0, [true, ["yes"]]])); // => 2
