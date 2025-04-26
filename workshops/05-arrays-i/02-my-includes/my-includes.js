// YOUR CODE BELOW
function myIncludes(arr, searchvalue) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "kkk");
    if (arr[i] === searchvalue) {
      return true;
    }
  }
  return false;
}
myIncludes([10, 20, 30], 20);
myIncludes(["apples", "bananas", "citrus"], "pears");
