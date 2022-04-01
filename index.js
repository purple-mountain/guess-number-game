'use strict';

const againBtn = document.getElementById('btn again');
const checkBtn = document.getElementById('btn check');
const input = document.getElementById('guess');
const questionMark = document.getElementById('number');
const message = document.getElementById('message');
const score = document.getElementById('score');
const highscore = document.getElementById('highscore');
const body = document.getElementById('body');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let guessed = false;
let score1 = 20;
let highscore1 = 0;
function subtractingScore() {
  score.textContent = score1;
}
function displayMessage (a) {
  message.textContent = a;
}

checkBtn.addEventListener('click', function () {
  if (!input.value) {
    displayMessage('No number!');
  } else {
    if (!guessed) {
      if (Number(input.value) === randomNumber) {
        displayMessage('Correct Number!');
        guessed = true;
        questionMark.textContent = randomNumber;
        body.style.backgroundColor = '#60b347';
        if (Number(highscore.textContent) < Number(score.textContent)) {
          highscore1 = score1;
          highscore.textContent = highscore1;
        }
      } else if (Number(input.value) !== randomNumber) {
        if (score1 >= 0) {
          score1--;
          displayMessage(Number(input.value) >= randomNumber ? 'Too high!'  : 'Too low!');
          subtractingScore();
        } else {
          displayMessage('You lost the game!');
          guessed = true;
        }
      }
    }
  }
});

againBtn.addEventListener('click', function () {
  guessed = false;
  displayMessage('Start guessing...');
  randomNumber = Math.floor(Math.random() * 21);
  input.value = '';
  score1 = 20;
  score.textContent = score1;
  body.style.backgroundColor = '#222';
  questionMark.textContent = '?';
});

// Linking elements to variables
// Making random number
// Checking if the guess is correct
// if correct: replacing ? with guess number
// Making background green
// Saving highscore
// If not correct:
// Subtracting 1 from score
// Checking input with guess number
// too low
// too high
// Again button
// clearing input value
// making score 20 again
// making background black
// making new random number
// replacing previous guessed number with ?

// Saving score as variable a
// if (Highscore < a)
//    highscore.textcontent = a
