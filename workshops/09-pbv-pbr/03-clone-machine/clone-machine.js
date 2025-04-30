// YOUR CODE BELOW
function cloneMachine(obj) {
  let dollyClone = {};
  for (let key in obj) {
    if (key === "name") {
      dollyClone[key] = obj[key] + "Clone";
    } else if (key === "offspring") {
      dollyClone[key] = [];
      obj[key].push(obj.name + "Clone");
    } else {
      dollyClone[key] = obj[key];
    }
  }
  console.log(dollyClone);
  return dollyClone;
}

let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};
console.log(cloneMachine(dolly));
console.log(dolly);
