'use strict';


// Game One - Yes or No answers
// eslint-disable-next-line
var userName = 'Placeholder';
var score = 0;
var totalScore = '';
var message1 = '';

// eslint-disable-next-line
function gameOne(){

//Does Mark like Dogs better than Cats.  
    var q1 = confirm('Does Mark like Dogs better than Cats?');
    if(q1) {
        var a1 = 'correct';
        score ++;
    }
    else {
        a1 = 'wrong';
    }

    console.log('Mark likes Cats Better than Dogs. You got this one ' + a1 + '.');

    //Does Mark like Star Wars?
    var q2 = confirm('Does Mark like Star Wars?');
    if(q2) {
        var a2 = 'correct';
        score ++;
    }
    else {
        a2 = 'wrong';
    }

    console.log('Mark likes Star Wars. I was there in \'77! You got this one ' + a2 + '.');

    //Has Mark ever worked at McDonald's
    var q3 = confirm('Has Mark ever worked at McDonald\'s?');
    if(q3) {
        var a3 = 'correct';
        score ++;
    }
    else {
        a3 = 'wrong';
    }
    console.log('Mark\'s first job was at McDonald\'s. You got this one ' + a3 + '.');

    //Does Mark drink a crapload of Coffee?
    var q4 = confirm('Does Mark drink a crapload of Coffee?');
    if(q4) {
        var a4 = 'correct';
        score ++;
    }
    else {
        a4 = 'wrong';
    }
    console.log('Mark drinks coffee. Oh yes he does. You got this one ' + a4 + '.');

    //Would Mark like Sushi for lunch?
    var q5 = confirm('Would Mark like Sushi for lunch?');
    if(!q5) {
        var a5 = 'correct';
        score ++;
    }
    else {
        a5 = 'wrong';
    }
    console.log('Mark prefers his fish cooked. You got this one ' + a5 + '.');

    totalScore = (score / 5) * 100;

    //logs score to the console
    console.log('You got ' + score + ' out of 5 answers correct for a score of ' + totalScore + '%');

    //creates message to display on HTML page
    message1 = 'You got ' + score + ' out of 5 answers correct for a score of ' + totalScore + '%';

    //sends composed final message and score to the HTML page
    var p = document.getElementById('game-one-result');
    p.textContent = message1;
}

// **** BEGIN Game Two - Five Guesses ****
var totalGuesses = 5;
var actualGuesses = 0;
var remainingGuesses = totalGuesses - actualGuesses;
var userGuess; // this will be for the value the user enters to the prompt
var answer = false; //this triggers the break when true.
var message2; //this stores the HTML that is inserted into the empty div on index.html

//eslint-disable-next-line
function gameTwo(){
    userGuess = prompt('In which East Coast state was Mark born?');
    
    for(actualGuesses = 1; actualGuesses < 5; actualGuesses ++){
        if(userGuess.toLowerCase() === 'new jersey' || userGuess.toLowerCase() === 'nj'){
            
            alert('Great job! You guessed Right! And it only took ' + actualGuesses + ' tries!');

            message2 = ('<p>You guessed right! Mark was born in New Jersey! You guessed in only ' + actualGuesses + ' tries!</p>');
            
            answer = true;
            break;
        } else {
            remainingGuesses = totalGuesses - actualGuesses;
            userGuess = prompt('Sorry, that\'s not correct. Please Guess again. You have ' + remainingGuesses + ' left.');
        }
        //insert message if number of guesses is exhausted. However, must check for value of answer so this doesn't show everytime.
    }
    //console log results from Game Two
    if(answer === true) {
        console.log('Mark was born in New Jersey. User Correctly guessed this in ' + actualGuesses + ' tries.'); 
    } else {
        console.log('Mark was born in New Jersey. User took 5 guesses, but did not guess this correctly.');
    }

    //HTML message from Game Two
    if(answer === true) {
        message2 = 'Mark was born in New Jersey. User Correctly guessed this in ' + actualGuesses + ' tries.'; 
    } else {
        message2 = 'Mark was born in New Jersey. User took 5 guesses, but did not guess this correctly.';
    }
    var p = document.getElementById('game-two-result');
    p.textContent = message2;
}
