window.addEventListener("DOMContentLoaded", playGame);

const buttons = document.querySelectorAll("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
const player1 = document.querySelector("#player1.player");
const player2 = document.querySelector("#player2.player");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let player = "";
let computer = "";
let result = "";

function addTimeout(pick, time = 1800) {
  setTimeout(() => {
    player1.classList.remove("shake");
    player1.classList.add(pick);
  }, time);
}
function showComputerResult(pick) {
  player2.classList.remove("shake");
  player2.classList.add(pick);
}
function removeEventListener(element) {
  element.removeEventListener("click", () => {
    player1.classList.add("shake");
    player2.classList.add("shake");
  });
}
function restartGame(playerResult, computerResult) {
  setTimeout(() => {
    player1.classList.remove(playerResult);
    player2.classList.remove(computerResult);
    player1.removeEventListener("animationend", computerDecide);
    if (result === "win") {
      win.classList.add("hidden");
    } else if (result === "lose") {
      lose.classList.add("hidden");
    } else {
      draw.classList.add("hidden");
    }
    player = "";
    computer = "";
    result = "";
    toggleButtons("ENABLE");
    playGame();
  }, 1000);
}
function toggleButtons(action) {
  if (action === "DISABLE") {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
  }
}
function onClickButton() {
  const clickedButton = this.classList.value;
  player1.classList.add("shake");
  player2.classList.add("shake");
  if (clickedButton === "rock") {
    rockPick();
  } else if (clickedButton === "paper") {
    paperPick();
  } else if (clickedButton === "scissors") {
    scissorsPick();
  }
  toggleButtons("DISABLE");
}
function playGame() {
  rock.addEventListener("click", onClickButton);
  paper.addEventListener("click", onClickButton);
  scissors.addEventListener("click", onClickButton);
}

function rockPick() {
  console.log("rock is here");
  rock.removeEventListener("click", onClickButton);
  player = "rock";
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  addTimeout(player);
}

function paperPick() {
  console.log("paper is here");
  rock.removeEventListener("click", onClickButton);
  player = "paper";
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  addTimeout(player);
}

function scissorsPick() {
  console.log("scissors is here");
  rock.removeEventListener("click", onClickButton);
  player = "scissors";
  document
    .querySelector(".player.shake")
    .addEventListener("animationend", computerDecide);
  addTimeout(player);
}
function checkResults(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    win.classList.remove("hidden");
    result = "win";
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    lose.classList.remove("hidden");
    result = "lose";
  } else {
    draw.classList.remove("hidden");
    result = "draw";
  }
}

function computerDecide() {
  console.log("Player choice", player);
  console.log("computer is deciding");
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    computer = "rock";
    console.log("rockai");
    showComputerResult(computer);
  } else if (number == 1) {
    computer = "paper";
    console.log("paperai");
    showComputerResult(computer);
  } else if (number == 2) {
    computer = "scissors";
    console.log("scissorsai");
    showComputerResult(computer);
  }
  checkResults(player, computer);
  restartGame(player, computer);
}
