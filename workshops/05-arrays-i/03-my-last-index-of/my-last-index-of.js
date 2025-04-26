// YOUR CODE BELOW
function myLastIndexOf(arr, searchValue, startIdx) {
  let i = startIdx !== undefined ? startIdx : arr.length - 1;

  for (i; i >= 0; i--) {
    if (arr[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

console.log(myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"));
console.log(myLastIndexOf(["Tiffany", "Sunny", "Yoona"], "Jessica"));
console.log(
  myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2)
);
