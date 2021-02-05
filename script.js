window.addEventListener("DOMContentLoaded", playGame);

const buttons = document.querySelector("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
const player1 = document.querySelector("#player1.player");
const player2 = document.querySelector("#player2.player");

function playGame() {
  rock.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    rockPick();
  });
  paper.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    paperPick();
  });
  scissors.addEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    scissorsPick();
  });
  setTimeout(computerDecide, 1800);
}

function rockPick() {
  console.log("rock is here");
  rock.removeEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    rockPick();
  });
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  document.querySelector.addEventListener("animationend", computerDecide());
}

function paperPick() {
  console.log("paper is here");
  rock.removeEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    paperPick();
  });
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  document.querySelector.addEventListener("animationend", computerDecide());
}

function scissorsPick() {
  console.log("scissors is here");
  rock.removeEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
    scissorsPick();
  });
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  document.querySelector.addEventListener("animationend", computerDecide());
}

let computer = "";
function computerDecide() {
  console.log("computer is deciding");
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    computer = "rock";
    console.log("rockai");
  } else if (number == 1) {
    computer = "paper";
    console.log("paperai");
  } else if (number == 2) {
    computer = "scissors";
    console.log("scissorsai");
  }
}
