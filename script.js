"use strict";
// Dice Game Script
// making the scores constant:
const totalScore0 = document.getElementById("score--0");
const totalScore1 = document.getElementById("score--1");

const winner = document.querySelector(".player--winner");

//making the current scores constants
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");

// defining the dice images as constants
const whiteDice = document.querySelector(".dice");

// Btn
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");

//defining variable for swapping active player color and font weight
const playerActive0 = document.querySelector(".player--0");
const playerActive1 = document.querySelector(".player--1");

//defining the player names as variables
let playerOne = "name--0";
let playerTwo = "name--1";

// defining the variable for random number generator
let randomNum;

//defining the variable for the calc of random numbers
let diceScore = 0;

//variable for active player number
let activePlayer = 0;

//storing the total score of both players in an array
let totalScores = [0, 0];

// making the scores to be default 0
totalScore0.textContent = 0;
totalScore1.textContent = 0;

// Using .classList property to hide the dice before game begin
whiteDice.classList.add("hidden");

//Creating a function to edit user name and Declearing the function name to change player name when page loads
window.onload = function () {
  editName();
};

function editName() {
  //creating a window prompt for new player name input
  playerOne = prompt("Player 1 input name");
  playerTwo = prompt("Player 2 input name");

  //for the name display
  document.getElementById("name--0").innerHTML = playerOne;
  document.getElementById("name--1").innerHTML = playerTwo;

  console.log(`player 1 : ${playerOne}`);
  console.log(`player 2 : ${playerTwo}`)
}

let gameActive = true;

// Else function for switching players
function switchPlayers() {
  diceScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerActive0.classList.toggle("player--active");
  playerActive1.classList.toggle("player--active");
}

//creating a function to display the hidden dice and random dices with values
rollBtn.onclick = function () {
  if (!gameActive) return;
  // Code to roll the dice
  whiteDice.classList.remove("hidden");
  randomNum = Math.floor(Math.random() * 6) + 1;
  whiteDice.src = `./images/dice-${randomNum}.png`;

  if (randomNum !== 1) {
    diceScore += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent = diceScore;
  } else {
    switchPlayers();
  }
};

holdBtn.onclick = function () {
  if (!gameActive) return;
  totalScores[activePlayer] += diceScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    totalScores[activePlayer];

  if (totalScores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    whiteDice.classList.add("hidden");
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    rollBtn.classList.add("hidden");
    holdBtn.classList.add("hidden");
  } else {
    switchPlayers();
  }
};

newGameBtn.onclick = function () {
  location.reload();
};
