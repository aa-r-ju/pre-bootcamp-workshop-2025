// YOUR CODE BELOW
function functionLogger(fun, val) {
  console.log("Function starting");
  let result = fun(val);
  console.log("Function complete");
  return result;
}

function squareNum(x) {
  return x * x;
}
let squareOfFour = functionLogger(squareNum, 4);

console.log(squareOfFour);
