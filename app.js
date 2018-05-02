'use strict';

var userName = prompt('Hi there and welcome! What\'s your name?');
console.log('user\'s name is', userName);
// Greeting
alert('Pleased to meet you, ' + userName + '! Please take a moment to read about me on the page below and play some fun games!');

// Yes/No Questionnaire
function game1() {
    var score = 0;
    var question1 = prompt('Have you read the text?').trim().toLowerCase();

    if(question1 === 'yes' || question1 === 'y') {

        confirm('Great! On to some questions!');
        score++;
    }
    else {

        confirm('You better get to it then');
    }

    var question2 = prompt('Did I attend university in Lebanon?').trim().toLowerCase();

    if(question2 === 'yes' || question2 === 'y') {

        confirm('Correct! Next question!');
        score++;
    }
    else {

        confirm('Wrong! How unfortunate!');
    }

    var question3 = prompt('Have I worked in more than 5 fields?').trim().toLowerCase();

    if(question3 === 'yes' || question3 === 'y') {

        confirm('Correct! Next question!');
        score++;
    }
    else {

        confirm('Wrong! Might want to review real quick :P');
    }

    var question4 = prompt('Do I have an undergraduate degree in Physics?').trim().toLowerCase();

    if(question4 === 'no' || question4 === 'n') {

        confirm('Correct! Next question!');
        score++;
    }
    else {

        confirm('Wrong! Do better!');
    }

    var question5 = prompt('Have I ever worked in a science-related field?').trim().toLowerCase();

    if(question5 === 'no' || question5 === 'n') {

        confirm('Correct! Well done!!');
        score++;
    }
    else {

        confirm('Wrong! Are you new to reading?');
    }

//Score total message
    var scoreTotal = document.getElementById('score');
    scoreTotal.textContent = 'Congratulations! You got ' + score + ' out of 5 correct!';

}
// Functions for declaration of results
function correctResult() {
    var p = document.getElementById('correct');
    p.textContent = 'Nice work! You got it!';
}

function incorrectResult() {
    var p = document.getElementById('correct');
    p.textContent = 'You\'ll get it next time!';
}

// First guessing game
function game2() {
    
    var tries = 5;
    while(tries > 0) {
        var guess1 = prompt('Guess my age! You\'ll start with 5 tries! Hint: I was born in the late 1980\'s').trim().toLowerCase();
        if(guess1 === '31' || guess1 === 'thirty one') {
    
            confirm('Correct! Well done!!');
            correctResult();
            break;
        }
        else {
            
            tries--;
            confirm('Guess again! You\'ve got '+ tries + ' tries left!');
            incorrectResult();
        }

    }

}

// Second guessing game
function game3() {

    var tries = 3;
    while(tries > 0) {
        var guess2 = prompt('Guess the year I was born! You already know too much, so! You\'ll start with 3 tries!').trim().toLowerCase();
        if(guess2 === '1987' || guess2 === 'nineteen eighty seven' || guess2 === '87') {

            confirm('You got it! Well done!!');
            correctResult();
            break;
        }
        else {

            tries--;
            confirm('Guess again! You\'ve got '+ tries + ' tries left!');
            incorrectResult();
        }

    }

}




