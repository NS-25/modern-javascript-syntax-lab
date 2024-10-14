// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const newNums = nums.map((num) => {
  return num * 2;
});
// console.log(newNums);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
// console.log(firstTopping);
// console.log(secondTopping);
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const { make, model } = car;
// console.log(car.make);
// console.log(car.model);
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaaToppings];

// console.log(controversialPizzaToppings);


// Duplicate the following object and spread its values into a new variable `myCar`.
const carr = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCarr = { ...carr };
myCarr.model = "q7"

// Your code here
console.log(carr.model);
console.log(myCarr.model);
