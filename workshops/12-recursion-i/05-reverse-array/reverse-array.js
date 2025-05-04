// YOUR CODE BELOW
function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Recursive case: reverse the rest of the array and append the first element at the end
  let restReversed = reverseArray(arr.slice(1)); // Reverse the subarray without the first element
  return restReversed.concat(arr[0]); // Concatenate the first element at the end
}

let arr = [1, 2, 3, 4];
let reversedArr = reverseArray(arr);

console.log(reversedArr); // [4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4] (Original array remains unchanged)
