// YOUR CODE BELOW
function callCount() {
  let val = 0;

  return function () {
    val++;
    return val;
  };
}
let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2
