'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guess = Number(document.querySelector('.guess').value);
// document.querySelector('.display').textContent = secretNumber;
let chance = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number!';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.display').textContent = secretNumber;
    document.querySelector('.display').style.width = '20rem';
    chance--;
    document.querySelector('.score').textContent = chance;
    if (chance > highscore) {
      highscore = chance;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (chance > 1) {
      // document.querySelector('.message').textContent = guess>secretNumber?'too high':'too low';
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      chance--;
      document.querySelector('.score').textContent = chance;
    } else {
      // document.querySelector('.message').textContent = 'YOU LOSE!';
      displayMessage('YOU LOSE!');
      document.querySelector('body').style.backgroundColor = '#dd2012';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (chance > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     chance--;
  //     document.querySelector('.score').textContent = chance;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOSE!';
  //     document.querySelector('body').style.backgroundColor = '#dd2012';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (chance > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     chance--;
  //     document.querySelector('.score').textContent = chance;
  //   } else {
  //     document.querySelector('.message').textContent = 'YOU LOSE!';
  //     document.querySelector('body').style.backgroundColor = '#dd2012';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  chance = 20;
  document.querySelector('.score').textContent = chance;
  document.querySelector('.guess').value = '';
  document.querySelector('.display').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
