// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  for (let i = startIdx; i < source.length; i++) {
    let match = true;

    for (let j = 0; j < searchValue.length; j++) {
      if (source[i + j] !== searchValue[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
}

console.log(myIndexOf("hello", "e", 1));
console.log(myIndexOf("twice twice", "ice", 5));
