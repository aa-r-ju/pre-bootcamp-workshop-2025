// YOUR CODE BELOW
function reverseArray(arr) {
  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  return arr;
}

let myArray = [1, 2, 3, 4];
let reversedArray = reverseArray(myArray);
console.log(reversedArray);
