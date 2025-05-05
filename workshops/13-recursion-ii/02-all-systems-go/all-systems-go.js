// YOUR CODE BELOW
function allSystemsGo(system) {
  for (let key in system) {
    const value = system[key];

    if (typeof value === "object") {
      if (!allSystemsGo(value)) return false;
    } else if (value !== true) {
      return false;
    }
  }
  return true;
}

console.log(allSystemsGo(systems));
