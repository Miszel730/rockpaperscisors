window.addEventListener("DOMContentLoaded", playGame);

const buttons = document.querySelector("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
const player1 = document.querySelector("#plater1.player");
const player2 = document.querySelector("#plater2.player");

function playGame() {

