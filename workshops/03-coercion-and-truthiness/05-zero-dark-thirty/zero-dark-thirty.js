// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }

  let result;
  let val = "";

  let number = String(num);
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== "0") {
      val += number[i];
    }
  }
  result = Number(val);

  return result;
}

console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));
console.log(zeroDarkThirty(0));
