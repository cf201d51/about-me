var who = prompt('What is you name?');
console.log('who = ', who);
alert('Hello, ' + who + '!');

var where = prompt(who + ', what is your favorite city to visit?');
console.log('where = ', where);
alert('Cool ' + who + '! I also like to visit ' + where + '!');

var what = prompt('What do you like to do when visiting ' + where + ', ' + who + '?').toLowerCase();
console.log('what = ', what);
alert("Perhaps, " + who + ", I might also like to " + what + " next time I'm in " + where + ".");

var when = prompt('When was the last time you did ' + what + ' while in ' + where + '?').toLowerCase();
console.log('when = ', when);
alert('So... ' + when + ' ' + who + ' did ' + what + ' while in ' + where + '!');
