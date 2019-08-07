'use strict';

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

// Five questions...

// Question 1
var answer1 = prompt('Q1').toUpperCase();
console.log(`type of answer1 = ${typeof answer1}; answer1 = ${answer1}`);
if (answer1.startsWith('Y')) {
  alert('response if Yes/Y');
} else {
  alert('response if No/N');
}

// Question 2
var answer2 = confirm('Q2');
console.log(`type of answer2 = ${typeof answer2}; answer2 = ${answer2}`);
if (answer2) {
  alert('response if confirmed');
} else {
  alert('response if not confirmed');
}
// Question 3
var answer3 = prompt('Q3').toUpperCase();
console.log(`type of answer3 = ${typeof answer3}; answer3 = ${answer3}`);
if (answer3.startsWith('Y')) {
  alert('response if Yes/Y');
} else {
  alert('response if No/N');
}

// Question 4
var answer4 = confirm('Q4');
console.log(`type of answer4 = ${typeof answer4}; answer4 = ${answer4}`);
if (answer4) {
  alert('response if confirmed');
} else {
  alert('response if not confirmed');
}

// Question 5
var answer5 = prompt('Q5').toUpperCase();
console.log(`type of answer5 = ${typeof answer5}; answer5 = ${answer5}`);
if (answer5.startsWith('Y')) {
  alert('response if Yes/Y');
} else {
  alert('response if No/N');
}
