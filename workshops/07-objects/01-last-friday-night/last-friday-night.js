// YOUR CODE BELOW

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

function lastFridayNight(para) {
  let totalAmount = 0;
  for (let i = 0; i < para.length; i++) {
    totalAmount += para[i].amount;
  }
  return totalAmount;
}

console.log(lastFridayNight(transactions));
