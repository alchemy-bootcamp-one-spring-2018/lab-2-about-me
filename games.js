/* exported guessMyAnimal quiz guessMyNumber */
'use strict';

// this applies to all the guessing games
const MAX_GUESSES = 5;

var animalGuessCount = 0;
var animalSuccess = false;
function guessMyAnimal() {

    // if user has already used up all their guesses, just ignore.
    if(animalGuessCount === MAX_GUESSES) {
        return;
    }

    // get user's input
    var guess = document.getElementById('animal-guess').value;
    console.log ('user\'s guess:', guess);
    guess = guess.trim().toString().toLowerCase();
    console.log ('standardized guess:', guess);
    animalGuessCount ++;

    // check the user's answer and compose a message
    var message;
    if(guess === 'llama' || guess === 'llamas') {
        message = 'You are correct!  I llove llamas.';
        animalSuccess = true;
    } else {
        message = 'No, that animal is not my favorite.';
    }

    // respond to user
    var p = document.getElementById('animal-answer');
    if(animalSuccess) {
        p.textContent = message;
    } else {
        // switch based on remaining guesses
        switch(MAX_GUESSES - animalGuessCount) {
            case 0:
                p.textContent = 'No luck.  My favorite animal is a llama.';
                break;
            case 1:
                p.textContent = message + ' You have one more guess!  Hint: think llarge and llovely!';
                break;
            default:
                p.textContent = message + ' (You have ' + (MAX_GUESSES - animalGuessCount) + ' remaining.)';
        }
    }

}

function quiz() {

    var questions = [
        'Do I practice Scientology?',
        'Have I eaten a scorpion?',
        'Do I enjoy rubbing my face on my cat?',
        'Have I been to Taiwan?',
        'Am I a fan of pro football and college basketball?'
    ];
    var answers = [
        'no',
        'yes',
        'yes',
        'yes',
        'no'
    ];

    var qtyCorrect = 0;

    for(var i = 0; i < 5; i++) {

        // this is where we will write a response to the user; reset it to blank
        var p = document.getElementById('question-' + i);

        // get the user's guess
        var guess = prompt (questions[i]);

        // standardize the user's entry to either Y or N or 'unable to interpret'
        guess = guess.trim();
        if(guess.toLowerCase() === 'yes' || guess.toLowerCase() === 'y') {
            guess = 'yes';
        } else if(guess.toLowerCase() === 'no' || guess.toLowerCase() === 'n') {
            guess = 'no';
        } else {
            guess = 'unable to interpret';
        }

        // see if the user was correct
        if(guess === answers[i]) {
            p.textContent = ('Question ' + (i + 1) + ': ' + questions[i] + ' - ' + 'Your answer (' + guess + ') is correct!');
            qtyCorrect ++;
        } else {
            p.textContent = ('Question ' + (i + 1) + ': ' + questions[i] + ' - ' + 'Your answer (' + guess + ') is incorrect.');
        }

    }

    // write the user's score
    p = document.getElementById('quiz-score');
    p.textContent = ('You got ' + qtyCorrect + ' out of 5!');

}

/* ---------------------------
getRandomInt copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
(but I promise that I understand it)
used by guessMyNumber function */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// --------------------------

var numberTarget = getRandomInt(100);
var numberGuessCount = 0;
var numberSuccess = false;
function guessMyNumber() {

    // if user has already used up all their guesses, just ignore.
    if(numberGuessCount === MAX_GUESSES) {
        return;
    }

    // get user's input
    var guess = document.getElementById('number-guess').value;
    console.log ('user\'s guess:', guess);
    guess = guess.trim();
    numberGuessCount ++;

    // check the user's answer and compose a message
    var message;
    if(isNaN(guess)) {
        message = 'Please enter a number between 1 and 100 inclusive.';
    } else if(guess < 0 || guess > 100) {
        message = 'Please enter a number between 1 and 100 inclusive.';
    } else if(guess === numberTarget) {
        message = 'You got it!';
        numberSuccess = true;
    } else if(guess < numberTarget) {
        message = 'I\'m thinking of a number bigger than that.';
    } else {
        message = 'I\'m thinking of a number smaller than that.';
    }

    // respond to user
    var p = document.getElementById('number-answer');
    if(numberSuccess) {
        p.textContent = message;
    } else {
        // switch based on remaining guesses
        switch(MAX_GUESSES - numberGuessCount) {
            case 0:
                p.textContent = 'No luck.  I was thinking of number ' + numberTarget + '.  Refresh to try again.';
                break;
            case 1:
                p.textContent = message + ' You have one more guess!  Choose wisely!';
                break;
            default:
                p.textContent = message + ' (You have ' + (MAX_GUESSES - numberGuessCount) + ' remaining.)';
        }
    }

}