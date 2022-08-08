"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

/***************************
 * STRINGS
 ***************************/
// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");
// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));
// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, "gate"));
// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));

// /***************************
//  * ENHANCED OBJECT LITERAL
//  ***************************/
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// //compute property name instead of naming literally
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   //ES6 Enhanced Object Literal
//   openingHours,
//   //No need for function keyword
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`
//     );
//   },
// };

// /***************************
//  * MAPS: ITERATION
//  ***************************/
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again!"],
// ]);
// console.log(question);
// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// // Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));
// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// // Maps: Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));
// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// /***************************
//  * SETS
//  ***************************/
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);
// console.log(new Set("Jonas"));
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("jonasschmedtmann").size);

// /***************************
//  * LOOPING OBJECTS
//  ***************************/
// //property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// //property VALUES
// const values = Object.values(openingHours);
// console.log(values);

//Entire Objects
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);
// /***************************
//  * OPTIONAL CHAINING
//  ***************************/
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// //WITH optional chaining
// console.log(restaurant.openingHours?.mon?.open);

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisoto?.(0, 1) ?? "Method does not exist");

// //Arrays
// const users = [{ name: "Yasser", email: "mohamed@gmail.com" }];
// const use = [];
// console.log(users[0]?.name ?? "User array empty"); //Yasser
// console.log(use[0]?.name ?? "User array empty");

// /***************************
//  * FOR-OF LOOP
//  ***************************/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [item, element] of menu.entries())
//   console.log(`${item + 1}: ${element}`);

// /***************************
//  * LOGICAL ASSIGNMENT OPERATORS
//  ***************************/
// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };
// //OR assignment operator
// rest1.numGuests ||= 10; //rest1.numGuests = rest1.numGuests || 10; Output of numGuests: 20
// rest2.numGuests ||= 10; // Output of numGuests: 10

// //nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// /***************************
//  * NULLISH COALESCING OPERATOR (??)
//  ***************************/
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// /***************************
//  * SHORT CIRCUITING (&& ||)
//  ***************************/
// console.log(3 || "Yasser"); //3
// console.log("" || "Yasser"); //Yasser
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || "" || "Hello" || 23 || null); //first truthy value

// //Both guest1 and guest2 expressions are equal. DO NOT WORK when numGuests = 0
// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("------ AND ------");
// console.log(0 && "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
// /***************************
//  * REST OPERATOR: OBJECTS (LEFT SIDE)
//  ***************************/
// let [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //right side is an array of all menu items. left side is array destructing with REST
// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherfood);

// //Objects: use of {}
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3, 4, 5, 6, 7, 8, 9);

// const x = [23, 5, 6];
// add(...x);

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
