// YOUR CODE BELOW
function sumDigits(num) {
  const str = String(num);
  if (str.length === 1) {
    return Number(str);
  }
  return Number(str[str.length - 1]) + sumDigits(str.slice(0, -1));
}

// Example:
console.log(sumDigits(1234));
