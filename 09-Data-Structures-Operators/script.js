"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
    );
  },
};
/***************************
 * REST OPERATOR: OBJECTS (LEFT SIDE)
 ***************************/
let [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//right side is an array of all menu items. left side is array destructing with REST
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

//Objects: use of {}
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3, 4, 5, 6, 7, 8, 9);

const x = [23, 5, 6];
add(...x);

// /***************************
//  * SPREAD OPERATOR: OBJECTS (RIGHT SIDE)
//  ***************************/
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// //New Variable Names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Set default values for properties that do not exist, NB: There is no menu in restauraunt object
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// a = 111;
// b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy ~= object.assign

// //Join 2 Arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log("fullMenu:", fullMenu);

// //Iterables
// const yasser = "Yasser";
// const letters = [...yasser];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 2022, ...restaurant, founder: "Yasser" };
// console.log(newRestaurant);
// /***************************
//  * DECONSTUCTING ARRAYS
//  ***************************/
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// //choose first and second items
// const [first, second] = restaurant.categories;
// console.log(first, second);

// //choose first and third
// let [element1, , element3] = restaurant.categories;
// console.log(element1, element3);

// //switch between two elements
// [element1, element3] = [element1, element3];
// console.log(element1, element3);
// console.log(restaurant.categories); // non-destructive operation

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Destruct nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
