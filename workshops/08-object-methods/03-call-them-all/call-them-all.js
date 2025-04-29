// YOUR CODE BELOW
function callThemAll(obj, value) {
  let results = [];

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      results.push(obj[key](value));
    }
  }

  return results;
}

let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

console.log(callThemAll(addsNums, 100));
