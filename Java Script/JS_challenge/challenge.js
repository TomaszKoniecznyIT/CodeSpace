const paperEL = document.querySelector(".btn-paper");
const rockEL = document.querySelector(".btn-rock");
const scissorsEL = document.querySelector(".btn-scissors");
const newGameEL = document.querySelector(".btn-new_game");
const chosenEl = document.querySelector(".chosen");
const winEl = document.querySelector(".win");
const playerPointEL = document.querySelector("#pla");
const computerPointEL = document.querySelector("#com");

let userChoice, compChoice, result, playerPoint, computerPoint;

const startGame = () => {
  playerPoint = 0;
  computerPoint = 0;
  winEl.textContent = "START THE GAME";
  chosenEl.textContent = "choose one of the things";
  displayPoint(playerPoint, computerPoint);
};

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
    chosenEl.textContent = `player : ${userChoice} --- computer : ${compChoice}`;
    winEl.textContent = "THE PLAYER WON !!!";
    displayPoint(playerPoint, computerPoint);
  } else if (result === "computer") {
    computerPoint++;
    chosenEl.textContent = `computer : ${compChoice} --- player : ${userChoice}`;
    winEl.textContent = "THE COMPUTER WON !!!";
    displayPoint(playerPoint, computerPoint);
  } else {
    chosenEl.textContent = `everyone chose a draw ${userChoice} `;
    winEl.textContent = "!!!  DRAW  !!!";
  }
};

startGame();

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

newGameEL.addEventListener("click", function () {
  startGame();
});
