'use strict';

var userScore = 0;
var totalQuestions = 0;

/*
var who = prompt('What is you name?');
console.log('who = ', who);
alert('Hello, ' + who + '!');

var where = prompt(who + ', what is your favorite city to visit?');
console.log('where = ', where);
alert('Cool ' + who + '! I also like to visit ' + where + '!');

var what = prompt('What do you like to do when visiting ' + where + ', ' + who + '?').toLowerCase();
console.log('what = ', what);
alert('Perhaps, ' + who + ', I might also like to ' + what + ' next time I\'m in ' + where + '.');

var when = prompt('When was the last time you did ' + what + ' while in ' + where + '?').toLowerCase();
console.log('when = ', when);
alert('So... ' + when + ' ' + who + ' did ' + what + ' while in ' + where + '!');


// Five Yes/No questions...

var questions = [];
var correctAnswers = [];
var feedbackIfCorrect = [];
var feedbackIfIncorrect = [];

questions[0] = 'Q0?';
correctAnswers[0] = true;
feedbackIfCorrect[0] = 'That\'s right!';
feedbackIfIncorrect[0] = 'Sorry.  Incorrect.';

questions[1] = 'Q1?';
correctAnswers[1] = false;
feedbackIfCorrect[1] = 'That\'s right!';
feedbackIfIncorrect[1] = 'Sorry.  Incorrect.';

questions[2] = 'Q2?';
correctAnswers[2] = true;
feedbackIfCorrect[2] = 'That\'s right!';
feedbackIfIncorrect[2] = 'Sorry.  Incorrect.';

questions[3] = 'Q3?';
correctAnswers[3] = false;
feedbackIfCorrect[3] = 'That\'s right!';
feedbackIfIncorrect[3] = 'Sorry.  Incorrect.';

questions[4] = 'Q4?';
correctAnswers[4] = true;
feedbackIfCorrect[4] = 'That\'s right!';
feedbackIfIncorrect[4] = 'Sorry.  Incorrect.';

totalQuestions += questions.length;

for (var i = 0; i < questions.length; i++) {
  do {
    var response = prompt(questions[i]).toUpperCase().substr(0, 1);
    var validResponse = (response === 'Y' || response === 'N');
    if (!validResponse) {
      alert('Please answer Y or N.');
    }
  } while (!validResponse);

  if (correctAnswers[i] === (response === 'Y')) {
    alert(feedbackIfCorrect[i]);
    userScore++;
  } else {
    alert(feedbackIfIncorrect[i]);
  }
}
*/

// Question 6 - Guess a number.

prompt('I\'m thinking of a number.  Can you guess what it is?');
prompt('Nope!  Guess again!');
alert('Just kidding!  Now let\'s play the real game.  I will let you know if your guess is higher or lower...');

var secretNumber = Math.floor(Math.random() * 10) + 1;
var guessesLeft = 4;
var messagePt1 = 'I\'m thinking of a number form 1 to 10';
var messagePt2 = `I'll give you ${guessesLeft} guesses.`;
var messagePt3 = 'What number would you like to try?';
var correct = false;

while (guessesLeft > 0) {
  do {
    var guess = parseInt(prompt(`${messagePt1}\n\n${messagePt2}\n\n${messagePt3}`));
    var valid = !isNaN(guess);
    if (!valid) {
      messagePt1 = 'Please enter a number.';
    }
  } while (!valid);
  guessesLeft--;
  if (guess === secretNumber) {
    correct = true;
    alert(`Congratulations! ${guess} was the number I was thinking of!`);
    break;
  } else if (guess > secretNumber) {
    messagePt1 = 'Your guess is too high.';
  } else {
    messagePt1 = 'Your guess is too low.';
  }
  if (guessesLeft === 1) {
    messagePt2 = 'You have just 1 guess remaining!';
  } else {
    messagePt2 = `You have ${guessesLeft} guesses remaining.`;
  }
}

if (!correct) {
  alert(`Sorry.  The number I was thinking of was ${secretNumber}.`);
}

