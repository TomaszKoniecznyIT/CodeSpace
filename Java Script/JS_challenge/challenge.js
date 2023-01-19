// selecting elements and assigning them to variables
const paperEL = document.querySelector(".btn-paper");
const rockEL = document.querySelector(".btn-rock");
const scissorsEL = document.querySelector(".btn-scissors");
const newGameEL = document.querySelector(".btn-new_game");
const chosenEl = document.querySelector(".chosen");
const winEl = document.querySelector(".win");
const playerPointEL = document.querySelector("#pla");
const computerPointEL = document.querySelector("#com");

// declaration of variables
let userChoice, compChoice, result, playerPoint, computerPoint;

// function to set all items to a new game
const startGame = () => {
  playerPoint = 0;
  computerPoint = 0;
  winEl.textContent = "START THE GAME";
  chosenEl.textContent = "choose one of the things";
  // calling the function displaying the points
  displayPoint(playerPoint, computerPoint);
};

// a function that randomizes the computer's choice
const drawForComputer = () => {
  const things = ["paper", "rock", "scissors"];
  //   draw from between (0, 1, 2)
  const drawNumber = Math.trunc(Math.random() * 3);
  // return the selected element of the array
  return things[drawNumber];
};

// a function that compares the choices and determines the winners
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

// the function displays the score
const displayPoint = (playerPoint, computerPoint) => {
  playerPointEL.textContent = playerPoint;
  computerPointEL.textContent = computerPoint;
};

// the function displays information about the result
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

const drawComparisonDisplay = () => {
  //   calling the random function and saving it to a variable
  compChoice = drawForComputer();
  // calling the result checking function
  result = comparisonResult(userChoice, compChoice);
  // calling the function displaying information about the result
  display(result);
};

// initial settings
startGame();

// check if a button has been pressed
paperEL.addEventListener("click", function () {
  userChoice = "paper";
  drawComparisonDisplay();
});

rockEL.addEventListener("click", function () {
  userChoice = "rock";
  drawComparisonDisplay();
});

scissorsEL.addEventListener("click", function () {
  userChoice = "scissors";
  drawComparisonDisplay();
});

newGameEL.addEventListener("click", function () {
  // initial settings
  startGame();
});
