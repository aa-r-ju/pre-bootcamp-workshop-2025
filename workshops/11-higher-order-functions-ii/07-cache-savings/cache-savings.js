// YOUR CODE BELOW
function cacheSavings(callback) {
  const cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      const result = callback(arg);
      cache[arg] = result;
      return result;
    }
  };
}
