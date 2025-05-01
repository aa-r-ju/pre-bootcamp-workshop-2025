// YOUR CODE BELOW
function whosASpecial(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i].name} the ${arr[i].species} is very special! `;
  }
  return result.trim();
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
