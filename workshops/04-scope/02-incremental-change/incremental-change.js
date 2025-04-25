let counter = 0;

// YOUR CODE BELOW

function incrementalChange(num) {
  return (counter += num);
}
console.log(incrementalChange(2));
console.log(incrementalChange(6));
console.log(incrementalChange(-1));
