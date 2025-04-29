// YOUR CODE BELOW
function dogBreeder(name = "Steve", age = 0) {
  if (typeof name === "number") {
    age = name;
    name = "Steve";
  }
  return {
    name: name,
    age: age,
  };
}
console.log(dogBreeder("Sam", 12));
console.log(dogBreeder(15));
console.log(dogBreeder());
