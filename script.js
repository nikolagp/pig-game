'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn-new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Setting starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// Dice roll



btnRoll.addEventListener('click', function () {
  // 1. Generating a random number between 1 and 6
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Checked for rolled 1
  // Add dice to current score
  // if (dice !== 1) {
  //   currentScore += dice;
  //   current0El.textContent = currentScore;
  // // Switch to next player
  // } else () {
  // };
});
