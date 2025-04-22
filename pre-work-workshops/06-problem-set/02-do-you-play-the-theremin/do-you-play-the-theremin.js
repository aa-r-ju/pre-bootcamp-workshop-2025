// YOUR CODE BELOW
function doYouPlayTheTheremin(str) {
  if (str[0] === "s" || str[0] === "S") {
    return true;
  } else {
    return false;
  }
}
console.log(doYouPlayTheTheremin("Griffin"));
console.log(doYouPlayTheTheremin("scott"));
console.log(doYouPlayTheTheremin("School"));

// Another way

function doYouPlayTheTheremin(str) {
  return str[0].toLowerCase() === "s";
}

console.log(doYouPlayTheTheremin("Griffin"));
console.log(doYouPlayTheTheremin("scott"));
console.log(doYouPlayTheTheremin("School"));
