// YOUR CODE BELOW
function taxCalculator(price, state) {
  if (state === "NY") {
    return price + price * 0.04;
  } else if (state === "NJ") {
    return price + price * 0.06625;
  } else {
    return price;
  }
}
console.log(taxCalculator(100, "NY"));
console.log(taxCalculator(100, "NJ"));
console.log(taxCalculator(200, "NY"));
console.log(taxCalculator(200, "NJ"));
