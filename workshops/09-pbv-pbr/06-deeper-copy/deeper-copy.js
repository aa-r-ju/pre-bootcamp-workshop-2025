// YOUR CODE BELOW
function deeperCopy(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(deeperCopy(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
