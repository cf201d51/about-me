'use strict';

var who = '';
var userScore = 0;
var totalQuestions = 0;

function intro() {
  who = prompt('What is you name?');
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
}

// ======================================================================
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

function yesNoQuestions() {
  for (var i = 0; i < questions.length; i++) {
    do {
      var response = prompt(`Please answer yes or no.\n\n${questions[i]}`);
      response = response.toUpperCase().substr(0, 1);
      var validResponse = (response === 'Y' || response === 'N');
      if (!validResponse) {
        alert('Please answer (Y/Yes) or (N/No).');
      }
    } while (!validResponse);

    if (correctAnswers[i] === (response === 'Y')) {
      alert(feedbackIfCorrect[i]);
      userScore++;
    } else {
      alert(feedbackIfIncorrect[i]);
    }
  }
}



// ======================================================================
// Question 6 - Guess a number.

function question6() {

  var guessesLeft;
  var messagePt1;
  var messagePt2;
  var messagePt3;
  var correct;

  prompt('I\'m thinking of a number.  Can you guess what it is?');
  prompt('Nope!  Guess again!');
  alert('Just kidding!  Now let\'s play the real game.  I will let you know if your guess is higher or lower...');

  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var higherThan = 0;
  var lowerThan = 11;

  guessesLeft = 4;
  messagePt1 = 'I\'m thinking of a number form 1 to 10';
  messagePt2 = `I'll give you ${guessesLeft} guesses.`;
  messagePt3 = 'What number would you like to try?';
  correct = false;

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
      break;
    } else if (guess > secretNumber) {
      if (guess >= lowerThan) {
        messagePt1 = `Oops! I already told you that ${lowerThan} is too high!`;
      } else {
        messagePt1 = `Your guess of ${guess} is too high.`;
        lowerThan = guess;
      }
    } else {
      if (guess <= higherThan) {
        messagePt1 = `Oops! I already told you that ${higherThan} is too low!`;
      } else {
        messagePt1 = `Your guess of ${guess} is too low.`;
        higherThan = guess;
      }
    }

    if (guessesLeft === 1) {
      messagePt2 = 'You now have just 1 guess remaining!';
    } else {
      messagePt2 = `You now have ${guessesLeft} guesses remaining.`;
    }

  }

  if (correct) {
    alert(`Congratulations! ${guess} was the number I was thinking of!`);
    userScore++;
  } else {
    alert(`Sorry.  The number I was thinking of was ${secretNumber}.`);
  }
  totalQuestions++;
}

// ======================================================================
// Question 7
function question7() {
  var guessesLeft;
  var messagePt1;
  var messagePt2;
  var messagePt3;
  var correct;

  guessesLeft = 6;
  messagePt1 = 'I have lived in three U.S. states and one Canadian province.';
  messagePt2 = `I'll give you ${guessesLeft} guesses.`;
  messagePt3 = 'Can you guess any of the states or provinces I have lived in?';
  correct = false;

  var question7Options = ['Washington', 'Maine', 'Illinois', 'British Columbia'];

  while (guessesLeft > 0) {

    do {
      var guess = prompt(`${messagePt1}\n\n${messagePt2}\n\n${messagePt3}`);
      var valid = !!guess;
      if (!valid) {
        messagePt1 = 'Please enter a a guess.';
      }
    } while (!valid);
    guessesLeft--;

    for (var i = 0; i < question7Options.length; i++) {
      if (guess.toUpperCase() === question7Options[i].toUpperCase()) {
        correct = true;
        // Remove correct guess from array so we list only the remaining options below.
        question7Options.splice(i, 1);
        break;
      }
    }

    if (correct) {
      break;
    } else {
      messagePt1 = `No, I have not lived in ${guess}. Sorry!`;
    }

    if (guessesLeft === 1) {
      messagePt2 = 'You now have just 1 guess remaining!';
    } else {
      messagePt2 = `You now have ${guessesLeft} guesses remaining.`;
    }

  }

  if (correct) {
    messagePt1 = `Congratulations! Yes, I have lived in ${guess}!`;
    messagePt2 = 'Other correct answers would have been: ';
    userScore++;
  } else {
    messagePt1 = 'Sorry.  You are out of guesses.';
    messagePt2 = 'Places I have lived are: ';
  }
  totalQuestions++;

  messagePt3 = '';
  for (var i = 0; i < question7Options.length; i++) {
    if (i > 0) {
      if (i === (question7Options.length - 1)) {
        messagePt3 += ', and ';
      } else {
        messagePt3 += ', ';
      }
    }
    messagePt3 += question7Options[i];
  }

  alert(`${messagePt1}\n\n${messagePt2}\n\n${messagePt3}.`);
}

// ======================================================================
// Summary

function summary() {
  var percentCorrect = userScore / totalQuestions;
  var messagePt1 = `You got ${userScore} out of ${totalQuestions} correct, ${who}!`;
  var messagePt2;
  if (percentCorrect < 0.67) {
    messagePt2 = 'Better luck next time!';
  } else if (percentCorrect < 0.90) {
    messagePt2 = 'Very good!';
  } else {
    messagePt2 = 'You must really know me!';
  }
  alert(`${messagePt1}\n\n${messagePt2}`);
}

if (confirm('Would you like to play a game?')) {
  intro();
  yesNoQuestions();
  question6();
  question7();
  summary();
}
