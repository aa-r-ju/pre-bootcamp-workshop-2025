// YOUR CODE BELOW
function myMnemonic(...arg) {
  let newval = "";

  for (let i = 0; i < arg.length; i++) {
    if (arg[i]) {
      newval += arg[i][0];
    }
  }

  return newval;
}

myMnemonic("Must", "Accept", "Sugar", "Happiness"); // => MASH
myMnemonic("Must", "Accept"); // => MASH
myMnemonic("We", "Eat", "Eggs"); // => WEE
