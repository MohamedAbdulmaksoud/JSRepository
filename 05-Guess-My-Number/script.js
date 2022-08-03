"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent);

document.querySelector(".number").textContent =
  Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
const correctNumber = Number(document.querySelector(".number").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number!";
  } else if (guess === correctNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Answer!";
    if (score < highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > correctNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "🥴 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 🤯 You lost the game! ";
    }
  } else if (guess < correctNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "🥴 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 🤯 You lost the game! ";
    }
  }
});
