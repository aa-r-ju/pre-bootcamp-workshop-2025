// YOUR CODE BELOW
function timesTable(num) {
  return function (val) {
    return num * val;
  };
}

let ninesTable = timesTable(9);
console.log(ninesTable(8)); // => 72

let twelvesTable = timesTable(12);
console.log(twelvesTable(100)); // => 1200
