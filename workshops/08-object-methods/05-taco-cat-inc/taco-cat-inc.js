let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,

  currentInventory: function () {
    let total = 0;

    for (let category in this) {
      if (
        category === "cash" ||
        category === "currentInventory" ||
        category === "sale"
      ) {
        continue;
      }

      let items = this[category];
      for (let item in items) {
        let product = items[item];
        total += product.cost * product.quantity;
      }
    }

    return total;
  },

  sale: function (order) {
    let totalPrice = 0;

    for (let category in order) {
      let itemName = order[category];
      let product = this[category][itemName];

      if (product && product.quantity > 0) {
        totalPrice += product.cost;
        product.quantity -= 1;
      } else {
        console.log("Item not available:", itemName);
      }
    }

    this.cash += totalPrice;

    return totalPrice;
  },
};
