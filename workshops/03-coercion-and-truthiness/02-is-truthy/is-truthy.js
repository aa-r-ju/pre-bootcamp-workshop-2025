// // YOUR CODE BELOW
// function isTruthy(para) {
//   if (para === false) {
//     return "The boolean value false is falsey";
//   } else if (para === null) {
//     return "The null value is falsey";
//   } else if (para === undefined) {
//     return "undefined is falsey";
//   } else if (para === 0) {
//     return "The number 0 is falsey (the only falsey number)";
//   } else if (para === "") {
//     return "The empty string is falsey (the only falsey string)";
//   } else {
//     return true;
//   }
// }
// console.log(isTruthy("I yearn for truth"));
// console.log(isTruthy(null));
function isTruthy(para) {
  let allFalsyValues = {
    false: "The boolean value false is falsey",
    null: "The null value is falsey",
    undefined: "undefined is falsey",
    0: "The number 0 is falsey (the only falsey number)",
    "": "The empty string is falsey (the only falsey string)",
  };
  return para ? true : allFalsyValues[String(para)];
}
