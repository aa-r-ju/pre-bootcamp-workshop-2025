// YOUR CODE BELOW
function stringify(callback) {
  return function () {
    let val = String(callback());
    return val;
  };
}

function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
console.log(newFunction()); // => '100'
