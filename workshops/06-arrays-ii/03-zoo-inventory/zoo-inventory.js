// YOUR CODE BELOW

let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];
function zooInventory(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let animalName = arr[i][0];
    let animalType = arr[i][1][0];
    let animalAge = arr[i][1][1];

    result.push(`${animalName} the ${animalType} is ${animalAge}.`);
  }
  return result;
}

console.log(zooInventory(myZoo));
