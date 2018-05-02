'use strict';

//game 1: Yes/No
var score = 0;

function yesNoGame() {
    /*Question 1*/
    var answer = prompt('Do I like to go to Disneyland?');
    console.log('user guessed', answer);

    var p = document.getElementById('disneyland-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    /*Question 2*/
    var answer = prompt('Do I like French Toast?');
    console.log('user guessed', answer);

    var p = document.getElementById('french-toast-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    /*Question 3*/
    var answer = prompt('Did I live in Germany?');
    console.log('user guessed', answer);

    var p = document.getElementById('germany-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    /*Question 4*/
    var answer = prompt('Am I a good swimmer?');
    console.log('user guessed', answer);

    var p = document.getElementById('swimmer-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    /*Question 5*/
    var answer = prompt('Do I eat my vegetables?');
    console.log('user guessed', answer);

    var p = document.getElementById('my-vegetables-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //SCORE KEEPER
    var finalScore = document.getElementById('final-score');
    finalScore.textContent = 'Your final score was ' + score + '/5.';
   
}

//game 2: Guess an Answer 
//function control flow then call function????
var totalGuesses = 3;

function guessMyHomeState() {
    var remainingGuesses = 3;

    var p = document.getElementById('my-home-state-response');

    for(var i = 1; i < 4; i++) {
        console.log('for loop started');

        var answer = prompt('Where am I from?');
        console.log('user guessed', answer);

        if(answer.trim().toLowerCase() === 'michigan'){
            alert('You got it! GO BLUE!!');
        break;
        }
        else {
            remainingGuesses--;
            alert('I\'m sorry that is not correct. You have ' + remainingGuesses + ' guesses remaining.');
        }
    }

    /*
        //gather info from the user via prompt
        var username = prompt(‘what is your name?’);
        //log out for us the dev to check
	    console.log(‘user\’s name is ’, username);
        //notice console.log take multiple arguments

	    //parot back to user what they said:
        alert(‘Hi’ +  username + ‘welcome to my webpage’);
    */    
    
}

//game 3: Stretch 1

