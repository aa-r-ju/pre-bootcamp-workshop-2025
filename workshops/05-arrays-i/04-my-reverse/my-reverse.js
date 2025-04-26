// YOUR CODE BELOW
function myReverse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(myReverse([1, 2, 3]));
