'use strict';
// functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 50) + 1;
};

// --------- main script ---------------
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

// event listener
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);
  console.log(userGuess, typeof userGuess);

  // no input
  if (!userGuess) {
    displayMessage('🚨 No Number was entered!');
  }
  // player wins
  else if (userGuess === secretNumber) {
    displayMessage("🥳 You're a Genius!!!");
    document.querySelector('.number').textContent = secretNumber;

    // styles manip
    document.querySelector('body').style.backgroundColor = '#72BF78';
    document.querySelector('.number').style.width = '30rem';

    // highest score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    // when guess is wrong
    if (score > 1) {
      displayMessage(userGuess > secretNumber ? '🤒 Too high!' : '🥲Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😩You lost the Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9B3922';
      document.querySelector(
        '.reveal'
      ).textContent = `The correct answer was ${secretNumber} 😭`;
    }
  }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateRandomNumber();

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.reveal').textContent = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#333';
});
