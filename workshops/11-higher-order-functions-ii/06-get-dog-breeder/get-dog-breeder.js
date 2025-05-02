// YOUR CODE BELOW
function getDogBreeder(defaultName = "Steve", defaultAge = 0) {
  return function (arg1, arg2) {
    let name = defaultName;
    let age = defaultAge;

    if (typeof arg1 === "string") {
      name = arg1;
    } else if (typeof arg1 === "number") {
      age = arg1;
    }

    if (typeof arg2 === "number") {
      age = arg2;
    }

    return { name, age };
  };
}

let puppyFarm = getDogBreeder("Snoopy", 0);
console.log(puppyFarm());
let rescueShelter = getDogBreeder("Odie", 3);

console.log(puppyFarm("Olaf", 3)); // => {name: 'Olaf', age: 3};
puppyFarm(2); // => {name: 'Snoopy', age: 2}

rescueShelter(); // => {'Odie', 3}
