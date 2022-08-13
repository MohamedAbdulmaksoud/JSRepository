"use strict";
/***************************
 * PROJECT
 ***************************/
///////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
//Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log("section1.getBoundingClientRect():\n", s1coords);
  console.log(
    "e.target.getBoundingClientRect(): \n",
    e.target.getBoundingClientRect()
  );

  console.log("Current scroll (X/Y): ", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

/***************************
 * LECTURES
 ***************************/

/***************************
 * SELECTING, CREATING AND DELETING ELEMENTS
 ***************************/
// console.log("document.documentElement: \n", document.documentElement);
// console.log("document.head: \n", document.head);
// console.log("document.body: \n", document.body);

// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log("document.querySelectorAll('.section'): \n", allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log("document.getElementsByTagName('button')", allButtons);

// console.log(
//   "document.getElementsByClassName('btn')",
//   document.getElementsByClassName("btn")
// );

// //Creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookied for improved functionality and analytics";
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// //header.prepend(message);
// header.append(message);
// //header.append(message.cloneNode(true)); //when duplication needed
// header.before(message);
// //header.after(message);

// //Deleting elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

/***************************
 * STYLES, ATTRIBUTES AND CLASSES
 ***************************/
// //Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
// console.log("message.style.width = ", message.style.width);
// //does not return anything because not set as it is inline style
// console.log("message.style.height = ", message.style.height);
// //Get the non-fetchtable CSS styles
// console.log(
//   "getComputedStyle(message).color = ",
//   getComputedStyle(message).color
// );

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// //Attributes
// const logo = document.querySelector(".nav__logo");
// //Standard Attributes reading
// console.log("logo.alt = ", logo.alt);
// console.log("logo.src = ", logo.src);
// //Non-Standard Attributes Reading
// console.log(logo.getAttribute("designer"));

// const link = document.querySelector(".nav__link--btn");
// console.log("link.href = ", link.href); //output: http://127.0.0.1:8080/13-Advanced-DOM-Bankist/#
// console.log("link.getAttribute('href') = ", link.getAttribute("href")); //output: #

// //Data attributes
// console.log(logo.dataset.versionNumber);
/***************************
 * EVENTS
 ***************************/
// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");
// };
// h1.addEventListener("mouseenter", alertH1);
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };
/***************************
 * EVENTS: PROPAGATION
 ***************************/
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });
/***************************
 * DOM TRAVERSING
 ***************************/
// const h1 = document.querySelector("h1");
// // Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";
// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";
// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });
