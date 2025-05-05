// YOUR CODE BELOW
function searchParty(name, world) {
  for (let key in world) {
    const value = world[key];

    if (typeof value === "string") {
      if (value === name) {
        return [key];
      }
    } else if (Array.isArray(value)) {
      if (value.includes(name)) {
        return [key];
      }
    } else if (typeof value === "object" && value !== null) {
      const path = searchParty(name, value);
      if (path) {
        return [key, ...path];
      }
    }
  }

  return null;
}
