// YOUR CODE BELOW

function getLongestName(family) {
  let longest = "";

  for (let name in family) {
    let childLongest = getLongestName(family[name] || {}); // safe recursive call
    if (name.length > longest.length) longest = name;
    if (childLongest.length > longest.length) longest = childLongest;
  }

  return longest;
}

console.log(getLongestName(family));
// => 'Sir Paddington the Fourth, of the county Wilstonshire'

let family = {
  "Beverly Marquez": {
    "Nina Rhone": {
      "William Rhodes": null,
      "Paul Nell": null,
      "Sir Paddington the Fourth, of the county Wilstonshire": null,
    },
  },
};

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
