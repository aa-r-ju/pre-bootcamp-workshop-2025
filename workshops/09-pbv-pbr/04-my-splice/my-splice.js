// YOUR CODE BELOW
function mySplice(arr, start, deleteCount, itemToAdd) {
  let removed = [];

  // Step 1: Remove the elements
  for (let i = start; i < start + deleteCount; i++) {
    if (i < arr.length) {
      removed.push(arr[i]);
    }
  }

  // Step 2: Build the new array
  let result = [];

  // Elements before the start index
  for (let i = 0; i < start; i++) {
    result.push(arr[i]);
  }

  // Add the new item (if any)
  if (arguments.length === 4) {
    result.push(itemToAdd);
  }

  // Elements after the deleted ones
  for (let i = start + deleteCount; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // Step 3: Mutate the original array
  arr.length = 0;
  for (let i = 0; i < result.length; i++) {
    arr.push(result[i]);
  }

  return removed;
}
