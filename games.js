'use strict';
/* exported guessMyAnimal, quiz */

function guessMyAnimal() {

    // this is where we will write a response to the user; reset it to blank
    var p = document.getElementById('animal-answer');
    p.textContent = '-'; // this has no effect for some reason

    // let user guess multiple times
    const MAX_GUESSES = 3;
    for(var guessCount = 1; guessCount <= MAX_GUESSES; guessCount ++) {

        // get the user's guess
        var guess = prompt ('What is my favorite kind of animal?\nHint: They are llarge and llovely.', 'hedgehog');
        console.log ('User\'s guess:', guess);

        // let the user know if they are correct
        if(guess === null || guess.trim() === '')
        {
            p.textContent = ('Ok, you don\'t have to play.');
            break; // if they cancel, no need to continue
        } else if(guess.toLowerCase() === 'llama' || guess.toLowerCase() === 'llamas') {
            p.textContent = ('You are correct!  I llove llamas.');
            break; // if they get it right, no need to continue
        } else {
            if(MAX_GUESSES - guessCount === 1) {
                alert('No, sorry.  You get one last chance!');
            } else if(guessCount < MAX_GUESSES) {
                alert('No, sorry.  You have ' + (MAX_GUESSES - guessCount) + ' more chances.');
            } else {
                p.textContent = ('Nice try, but I\'ll just tell you.  I llove llamas.');
            }
        }

        console.log ('guesses remaining:', MAX_GUESSES - guessCount);

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
        console.log ('User\'s guess:', guess);

        // standardize the user's entry to either Y or N or 'unable to interpret'
        guess = guess.trim();
        if(guess.toLowerCase() === 'yes' || guess.toLowerCase() === 'y') {
            guess = 'yes';
        } else if(guess.toLowerCase() === 'no' || guess.toLowerCase() === 'n') {
            guess = 'no';
        } else {
            guess = 'unable to interpret';
        }
        console.log ('Standardized guess:', guess);

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