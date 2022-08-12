"use strict";
/***************************
 * PROJECT
 ***************************/
///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

/***************************
 * LECTURES
 ***************************/
/***************************
 * SELECTING, CREATING AND DELETING ELEMENTS
 ***************************/
console.log("document.documentElement: \n", document.documentElement);
console.log("document.head: \n", document.head);
console.log("document.body: \n", document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log("document.querySelectorAll('.section'): \n", allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log("document.getElementsByTagName('button')", allButtons);

console.log(
  "document.getElementsByClassName('btn')",
  document.getElementsByClassName("btn")
);

//Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookied for improved functionality and analytics";
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true)); //when duplication needed
header.before(message);
//header.after(message);

//Deleting elements
document
  .querySelector("btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
