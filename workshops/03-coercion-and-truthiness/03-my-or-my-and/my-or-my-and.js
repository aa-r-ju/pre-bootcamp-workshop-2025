// YOUR CODE BELOW
function myOr(a, b, c) {
  if (a) return a;
  if (b) return b;
  return c;
}

console.log(myOr(true, true, false)); // => true
console.log(myOr(false, null, 0)); // => 0

function myAnd(a, b, c) {
  if (!a) return a;
  if (!b) return b;
  return c;
}

console.log(myAnd(1, "apples", true)); // => true
console.log(myAnd(1, null, true)); // => null
