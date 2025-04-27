// YOUR CODE BELOW
function evenAndOdd(arr) {
  let neArr = [];
  let oddNUms = [];
  let evenNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNUms.push(arr[i]);
    } else {
      evenNums.push(arr[i]);
    }
  }
  neArr.push(evenNums, oddNUms);
  return neArr;
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
