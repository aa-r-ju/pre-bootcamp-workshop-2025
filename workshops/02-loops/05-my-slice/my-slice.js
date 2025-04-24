// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let str = "";

  for (let i = startIdx; i < endIdx; i++) {
    str += originalString[i];
  }
  return str;
}
console.log(mySlice("slice and dice"));
console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5));
