// YOUR CODE BELOW
// YOUR CODE BELOW
function rotateArray(orgArr, rotNum) {
  let newArr = [],
    val = 0;
  if (rotNum === 0) {
    return orgArr;
  }
  if (rotNum > 0) {
    val = orgArr.length - rotNum;
  } else {
    val = -rotNum;
  }

  for (let i = val; i < orgArr.length; i++) {
    newArr.push(orgArr[i]);
  }
  for (let k = 0; k < val; k++) {
    newArr.push(orgArr[k]);
  }

  return newArr;
}
