// YOUR CODE BELOW
function myJoin(array, separator) {
  if (separator === undefined) {
    separator = ",";
  }

  let result = "";

  for (let i = 0; i < array.length; i++) {
    let value = array[i];

    if (value === undefined || value === null) {
      value = "";
    }

    result += value;

    if (i !== array.length - 1) {
      result += separator;
    }
  }

  return result;
}
console.log(myJoin(["let's", "make", "a", "list"], " "));

console.log(myJoin(["a", "b", "c"], "+"));

console.log(myJoin(["Peter", "Paul", "Mary"]));

console.log(myJoin(["hello", undefined, "world"], "-"));
