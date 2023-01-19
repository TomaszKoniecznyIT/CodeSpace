const paperEL = document.querySelector(".btn-paper");
const rockEL = document.querySelector(".btn-rock");
const scissorsEL = document.querySelector(".btn-scissors");
const chosenEl = document.querySelector(".chosen");
const winEl = document.querySelector(".win");
const playerPointEL = document.querySelector("#pla");
const computerPointEL = document.querySelector("#com");

let userChoice, compChoice, result;
let playerPoint = 0;
let computerPoint = 0;

const drawForComputer = () => {
  const things = ["paper", "rock", "scissors"];
  const drawNumber = Math.trunc(Math.random() * 3);
  return things[drawNumber];
};

const comparisonResult = (player, computer) => {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    return "computer";
  } else return "draw";
};

const displayPoint = (playerPoint, computerPoint) => {
  playerPointEL.textContent = playerPoint;
  computerPointEL.textContent = computerPoint;
};

const display = (result) => {
  if (result === "player") {
    playerPoint++;
    console.log(playerPoint);
    chosenEl.textContent = `player : ${userChoice} --- computer : ${compChoice}`;
    winEl.textContent = "THE PLAYER WON !!!";
    displayPoint(playerPoint, computerPoint);
  } else if (result === "computer") {
    computerPoint++;
    console.log(computerPoint);
    chosenEl.textContent = `computer : ${compChoice} --- player : ${userChoice}`;
    winEl.textContent = "THE COMPUTER WON !!!";
    displayPoint(playerPoint, computerPoint);
  } else {
    chosenEl.textContent = `everyone chose a draw ${userChoice} `;
    winEl.textContent = "!!!  DRAW  !!!";
  }
};

paperEL.addEventListener("click", function () {
  userChoice = "paper";
  compChoice = drawForComputer();
  result = comparisonResult(userChoice, compChoice);
  display(result);
});

rockEL.addEventListener("click", function () {
  userChoice = "rock";
  compChoice = drawForComputer();
  result = comparisonResult(userChoice, compChoice);
  display(result);
});

scissorsEL.addEventListener("click", function () {
  userChoice = "scissors";
  compChoice = drawForComputer();
  result = comparisonResult(userChoice, compChoice);
  display(result);
});
