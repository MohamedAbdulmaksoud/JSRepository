"use strict";
// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
let score0 = 0;
let score1 = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
diceEl.classList.add("hidden");

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
const showScore = function (activePlayer) {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};
//Rolling Dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //2. Display Dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    //3. Check if Dice is 1
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      //display new score
      showScore(activePlayer);
    } else {
      switchPlayer();
    }
  }
});

//User holds score
btnHold.addEventListener("click", function () {
  if (playing) {
    if (activePlayer) {
      score1 += currentScore;
      score1El.textContent = score1;
    } else {
      score0 += currentScore;
      score0El.textContent = score0;
    }
    if (score0 >= 100) {
      document.querySelector(`.player--0`).classList.add("player--winner");
      document.querySelector(`.player--0`).classList.remove("player--active");
      playing = false;
    } else if (score1 >= 100) {
      document.querySelector(`.player--1`).classList.add("player--winner");
      document.querySelector(`.player--1`).classList.remove("player--active");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
//User resets game
btnNew.addEventListener("click", function () {
  document.location.reload(true);
});
