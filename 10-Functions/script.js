"use strict";
/***************************
 * Immediately Invoked Function Expressions (IIFE)
 ***************************/
(function () {
  console.log(`This will never run again`);
})();
//  /***************************
//  * THE CALL AND APPLY METHODS
//  ***************************/
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, "Yasser Abdulamksoud");
// lufthansa.book(555, "Richard Arnold");

// const book = lufthansa.book;

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };
// // /***************************
// //  * THE BIND METHODS
// //  ***************************/
// const bookEW = book.bind(eurowings);
// bookEW(23, "Mohamed Abdulmaksoud");

// //Specific Bind Parameters
// const bookEW376 = book.bind(eurowings, 376);
// bookEW376("Erik Ten Hag");
// bookEW376("Raphael Varane");

// //With Event Listener
// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// //remember that this in event handlers point to the element itself
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); //the function will not work
// //this should work after bind
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //Partial Application
// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23);

// //Regular fcn call, where this points to undefined in strict mode
// //book(23, "Sarah Wilcox"); //Does not work

// //Using call() to invoke a function and specifying the context for 'this'
// book.call(eurowings, 23, "Sarah Wilcox");
// console.log(eurowings);
// book.call(lufthansa, 431, "Ryan Manucho");

// //Apply Methods
// const flightData = [583, "George Michael"];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// //Apply no longer needed, can use call with spread operator instead
// book.call(eurowings, ...flightData);

// // /***************************
// //  * FUNCTIONS RETURNING FUNCTIONS
// //  ***************************/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");
// //Calling the function directly!
// greet("Hello")("Jonas");
// // Challenge: Rewritten using arrow functions
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr("Hi")("Jonas");

// // /***************************
// //  * HIGHER ORDER FUNCTIONS
// //  ***************************/
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("Javascript is the best!", upperFirstWord);
// // /***************************
// //  * REFERENCE VS. PRIMITAIVE
// //  ***************************/
// const flight = "LH123";
// const passenger = {
//   name: "Yasser",
//   passportNumber: "A27055694",
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH987";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passportNumber === "A27055694") alert("Checking In");
//   else alert("Wrong Passport!");
// };
// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// /***************************
//  * DEFAULT PARAMETERS
//  ***************************/
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);
// createBooking("LH123", undefined, 1000);
