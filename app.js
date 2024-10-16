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
// console.log(carr.model);
// console.log(myCarr.model);

// Exercise-6
// Create an object named userProfile. 
const userProfile = {};
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
const propertyName = "username";
const propertyAge = "age";
const propertyEmail = "email"
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
userProfile[propertyName] = "George";
userProfile[propertyAge] = 30;
userProfile[propertyEmail] = "george@gmail.com";

// Your code here
// console.log(userProfile);

// Exercise-8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function sentence(noun, adjective) {
  return `This ${noun} is ${adjective}.`;
}


// console.log(sentence("cat", "white"));


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  // console.log('yum');
} else {
  // console.log('yuck');
}

// Your code here
let pizzaTernary = pizza === "tasty" ? "yum" : "yuck";
// console.log(pizzaTernary);


// const result1 = 'bar' && 'foo';
// const result2 = false || 243;
// const result3 = 42 && false;
// const result4 = undefined || 3000;

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);
// console.log('result4:', result4);
// Exercise-10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
const LANG = 'en';
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const result = localLangConfig || LANG;

// Log the result
console.log('Language setting:', LANG);
///////////////////////////////////
// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
const USER_THEME = "light";
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const theme = userSavedTheme || USER_THEME;

// Log the result
console.log('User theme setting:', USER_THEME);
///////////////////////
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
//

/// Exercise-11
const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.name; // Your code here

console.log(cat);
