// YOUR CODE BELOW
function sumNums(num) {
  if (num === 1) return 1;
  return num + sumNums(num - 1);
}
