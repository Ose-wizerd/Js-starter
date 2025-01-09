'use strict';
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const img = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let current = 0;
let activePlayer = 0;
img.classList.add('hidden');
let score = [0, 0];
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  current = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    img.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    img.src = `dice-${dice}.png`;
    if (dice != 1) {
      current += dice;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += current;
    if (score[activePlayer] >= 100) {
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      img.classList.add('hidden');
      document
        .querySelector(`.win--${activePlayer}`)
        .classList.remove('hidden');
      playing = false;
    } else {
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  current = 0;
  score = [0, 0];
  img.classList.add('hidden');
  document.querySelector(`.win--${activePlayer}`).classList.add('hidden');
  document
    .getElementById(`player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  playing = true;
  player1.classList.add('player--active');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  if (player2.classList.contains('player--active')) {
    player2.classList.toggle('player--active');
  }
});
