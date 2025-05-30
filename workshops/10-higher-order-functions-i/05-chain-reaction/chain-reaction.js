// YOUR CODE BELOW
function chainReaction(value, array) {
  let total = value;
  for (let i = 0; i < array.length; i++) {
    total = array[i](total);
  }
  return total;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15
