// YOUR CODE BELOW
function greeting(name) {
  if (name) {
    return `Hello ${name}!`;
  } else if (!name) {
    return `Hello!`;
  }
}
console.log(greeting("Sadie"));
console.log(greeting());

//Another way
function greeting(name) {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return `Hello!`;
  }
}
console.log(greeting("Sadie"));
console.log(greeting());
