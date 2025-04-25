// YOUR CODE BELOW
function howEqual(arg1, arg2) {
  let result;
  if (arg1 === arg2) {
    return (result = "strictly");
  } else if (arg1 == arg2) {
    return (result = "loosely");
  } else {
    return (result = "not equal");
  }
  return result;
}

console.log(howEqual(0, "0"));
console.log(howEqual(3, 9 / 3));
console.log(howEqual(true, "truthy"));
