"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number!";

    //when player wins
  } else if (guess === correctNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Answer!";
    document.querySelector(".number").textContent = correctNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== correctNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > correctNumber ? "🥴 Too High!" : "🥴 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " 🤯 You lost the game! ";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
