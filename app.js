'use strict';

//game 1: Yes/No
function yesNoGame() {
    /*Question 1*/
    var answer = prompt('Do I like to go to Disneyland?');
    console.log('user guessed', answer);

    var p = document.getElementById('disneyland-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
    }

    /*Question 2*/
    var answer = prompt('Do I like French Toast?');
    console.log('user guessed', answer);

    var p = document.getElementById('french-toast-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
    }

    /*Question 3*/
    var answer = prompt('Did I live in Germany?');
    console.log('user guessed', answer);

    var p = document.getElementById('germany-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
    }

    /*Question 4*/
    var answer = prompt('Am I a good swimmer?');
    console.log('user guessed', answer);

    var p = document.getElementById('swimmer-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
    }

    /*Question 5*/
    var answer = prompt('Do I eat my vegetables?');
    console.log('user guessed', answer);

    var p = document.getElementById('my-vegetables-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
    }

    //ADD SCORE KEEPER!!!!
}

//game 2: Guess an Answer
function guessMyName() {
    var answer = prompt('Guess my name?');
    console.log('user guessed', answer);

    var p = document.getElementById('my-name-response');

    if(answer.trim().toLowerCase() ){

    }
    else {

    }
}

//game 3: Stretch 1
function somethingHere() {
    
}