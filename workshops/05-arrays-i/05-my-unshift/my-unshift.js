// YOUR CODE BELOW
function myUnshift(arr, value) {
  let newArr = [value];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(myUnshift([1, 2, 3], 0));
