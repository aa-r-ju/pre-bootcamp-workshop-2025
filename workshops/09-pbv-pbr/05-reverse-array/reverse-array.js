// YOUR CODE BELOW
function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap the elements at left and right indices
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}
