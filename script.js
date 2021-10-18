"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerName0 = document.querySelector("#name--0");
const playerName1 = document.querySelector("#name--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// Setting starting conditions
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  playerName0.textContent = prompt(`Please enter your name for Player 1`);
  playerName1.textContent = prompt(`Please enter your name for Player 2`);

  // playerName0.textContent =
  //   prompt(`Please enter your name for Player 1`) != null || ""
  //     ? prompt(`Please enter your name for Player 1.1`)
  //     : `Player 1`;
  // playerName1.textContent =
  //   prompt(`Please enter your name for Player 2`) == null || ""
  //     ? `Player 2`
  //     : prompt(`Please enter your name for Player 2.1`);
};
init();

// Switching player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Dice roll
btnRoll.addEventListener("click", function () {
  // 1. Generating a random number between 1 and 6
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Checked for rolled 1
    // Add dice to current score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Switch to next player
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  // 1. Add score to the active player's score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      // currentScore = 0;
    } else {
      // Switch
      switchPlayer();
    }
  }
});

btnNew.addEventListener(
  "click",
  init

  // Another Solution:
  // function () {
  //   playing = true;
  //   // 1. Remove winner class from the winner
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove("player--winner");
  //   // 2. Switch back player--0 as active no matter who wins
  //   activePlayer = 0;
  //   player0El.classList.add("player--active");
  //   player1El.classList.remove("player--active");
  //   // 3. Switch to 0 all points and hide the dice
  //   currentScore = 0;
  //   scores[0] = currentScore;
  //   scores[1] = currentScore;
  //   diceEl.classList.add("hidden");
  //   // Print the results
  //   score0El.textContent = 0;
  //   score1El.textContent = 0;
  //   current0El.textContent = 0;
  //   current1El.textContent = 0;
  // }
);
