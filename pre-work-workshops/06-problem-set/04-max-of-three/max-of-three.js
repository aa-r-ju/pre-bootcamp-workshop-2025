// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));
console.log(maxOfThree(150, 500, 200));
