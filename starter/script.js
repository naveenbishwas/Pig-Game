'use strict';

// Selectig Items
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling the functionality
btnRoll.addEventListener('click', function () {
  // Generating a new dice Roll number.
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Displaying the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png `;

  if (dice !== 1) {
    // Check for rolled 1
  } else {
    //switch to another player
  }
});
