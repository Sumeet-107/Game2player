'use strict';

//Defination
let pScore1 = document.getElementById('score--0');
let pScore2 = document.getElementById('score--1');
// let current2 = document.getElementById('current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let eleDice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

let currentScore = 0;
let activeP = 0;
let currentP = 0;
let score = [0, 0];
// let playing = true;

//Manipulation;
pScore1.textContent = '0';
pScore2.textContent = '0';
eleDice.classList.add('hidden');

let switchPlayer = function () {
  currentScore = 0;
  activeP = activeP == 0 ? 1 : 0;
  currentP.textContent = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let btnRollFn = function () {
  let dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  //Dice appears on O/P screen
  eleDice.classList.remove('hidden');
  eleDice.src = `image/dice-${dice}.png`;

  //Switch when rolled dice is 1.

  if (dice !== 1) {
    currentScore += dice;
    currentP = document.getElementById(`current--${activeP}`);
    currentP.textContent = currentScore;
  } else {
    //currentScore = 0;
    // activeP = activeP == 0 ? 1 : 0;
    //currentP.textContent = '0';
    switchPlayer();
  }
};

let btnHoldfn = function () {
  score[activeP] += currentScore;
  console.log(score);
  let pScore = (document.getElementById(`score--${activeP}`).textContent =
    score[activeP]);

  //checking condition
  if (score[activeP] >= 20) {
    let player = document.querySelector(`.player--${activeP}`);
    console.log(activeP);
    player.classList.add('player--winner');

    player.classList.remove('player--active');

    eleDice.classList.add('hidden');
    btnHold.removeEventListener('click', btnHoldfn);
    btnRoll.removeEventListener('click', btnRollFn);
    return;
  }
  // console.log('Hi sumeet');
  switchPlayer();
};
let resetFn = function () {
  currentP.textContent = 0;
  currentScore = 0;
  // eleDice.classList.remove('hidden');
  pScore1.textContent = 0;
  pScore2.textContent = 0;
  score = [0, 0];
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  activeP = 0;
  btnHold.addEventListener('click', btnHoldfn);
  btnRoll.addEventListener('click', btnRollFn);
  // if (activep === 1) {
  //   console.log(`hi ${activeP}`);
  //switchPlayer();
};

//switching player

let player = document.querySelector(`.player--${activeP}`);

//Function
btnRoll.addEventListener('click', btnRollFn);
btnHold.addEventListener('click', btnHoldfn);
btnNew.addEventListener('click', resetFn);
