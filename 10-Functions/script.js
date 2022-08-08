"use strict";
// /***************************
//  * REFERENCE VS. PRIMITAIVE
//  ***************************/
const flight = "LH123";
const passenger = {
  name: "Yasser",
  passportNumber: "A27055694",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH987";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passportNumber === "A27055694") alert("Checking In");
  else alert("Wrong Passport!");
};
checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

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
