let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
function leetTranslator(str) {
  let result = "";

  let obj = {};

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let leet = leetChars[i];
    obj[letter] = leet;
  }

  str = str.toLowerCase();
  for (let j = 0; j < str.length; j++) {
    let currentChart = str[j];

    if (obj[currentChart]) {
      result += obj[currentChart];
    } else {
      result += currentChart;
    }
  }
  return result;
}

console.log(leetTranslator("Fullstack"));
console.log(leetTranslator("Aarju"));
