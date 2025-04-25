// YOUR CODE BELOW
function onlyOne(val1, val2, val3) {
  let result = 0;
  if (val1) {
    result += 1;
  } else {
    result += 0;
  }
  if (val2) {
    result += 1;
  } else {
    result += 0;
  }
  if (val3) {
    result += 1;
  } else {
    result += 0;
  }
  return result === 1;
}

console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2));
