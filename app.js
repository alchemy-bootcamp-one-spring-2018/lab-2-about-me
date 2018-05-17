/* exported yesNoGame, guessMyHomeState, guessMyFavoriteColor, travelBucketList */

'use strict';

/*Game 1: Yes/No*/
var score = 0;

//function asks 5 questions looking for the correct yes/no response. Total correct guesses given at the end.
function yesNoGame() {
    //Question 1
    var answerDisneyland = prompt('Do I like to go to Disneyland?');
    console.log('user guessed', answerDisneyland);

    var pDisneyland = document.getElementById('disneyland-response');

    if(!answerDisneyland) {
        alert('Field blank, please type a response.');
    }
    else if(answerDisneyland.trim().toLowerCase() === 'y' || answerDisneyland.trim().toLowerCase() === 'yes' || answerDisneyland.trim().toUpperCase() === 'Y' || answerDisneyland.trim().toUpperCase() === 'YES'){
        pDisneyland.textContent = 'You got it!';
        score ++;
    }
    else {
        pDisneyland.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 2
    var answerToast = prompt('Do I like French Toast?');
    console.log('user guessed', answerToast);

    var pToast = document.getElementById('french-toast-response');

    if(!answerToast) {
        alert('Field blank, please type a response.');
    }
    else if(answerToast.trim().toLowerCase() === 'y' || answerToast.trim().toLowerCase() === 'yes' || answerToast.trim().toUpperCase() === 'Y' || answerToast.trim().toUpperCase() === 'YES'){
        pToast.textContent = 'You got it!';
        score ++;
    }
    else {
        pToast.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 3
    var answerGermany = prompt('Did I live in Germany?');
    console.log('user guessed', answerGermany);

    var pGermany = document.getElementById('germany-response');

    if(!answerGermany) {
        alert('Field blank, please type a response.');
    }
    else if(answerGermany.trim().toLowerCase() === 'y' || answerGermany.trim().toLowerCase() === 'yes' || answerGermany.trim().toUpperCase() === 'Y' || answerGermany.trim().toUpperCase() === 'YES'){
        pGermany.textContent = 'You got it!';
        score ++;
    }
    else {
        pGermany.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 4
    var answerSwimmer = prompt('Am I a good swimmer?');
    console.log('user guessed', answerSwimmer);

    var pSwimmer = document.getElementById('swimmer-response');

    if(!answerSwimmer) {
        alert('Field blank, please type a response.');
    }
    else if(answerSwimmer.trim().toLowerCase() === 'n' || answerSwimmer.trim().toLowerCase() === 'no' || answerSwimmer.trim().toUpperCase() === 'N' || answerSwimmer.trim().toUpperCase() === 'NO'){
        pSwimmer.textContent = 'You got it!';
        score ++;
    }
    else {
        pSwimmer.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 5
    var answerVeggies = prompt('Do I eat my vegetables?');
    console.log('user guessed', answerVeggies);

    var responseVeggies = document.getElementById('my-vegetables-response');

    if(!answerVeggies) {
        alert('Field blank, please type a response.');
    }
    else if(answerVeggies.trim().toLowerCase() === 'n' || answerVeggies.trim().toLowerCase() === 'no' || answerVeggies.trim().toUpperCase() === 'N' || answerVeggies.trim().toUpperCase() === 'NO'){
        responseVeggies.textContent = 'You got it!';
        score ++;
    }
    else {
        responseVeggies.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //SCORE KEEPER
    var finalScore = document.getElementById('final-score');
    finalScore.textContent = 'Your final score is ' + score + '/5.';
   
}

/*Game 2: Guess the Answer*/ 
var g2remainingGuesses = 3;

//function asks user a question and allows 3 guesses to get it correct
function guessMyHomeState() {

    var responseHomeState = document.getElementById('my-home-state-response');

    for(var i = 1; i < 4; i++) {
        //console.log('for loop started');  --> bug test

        var answerHomeState = prompt('Where am I from?');
        console.log('user guessed', answerHomeState);

        if(!answerHomeState) {
            alert('Field blank, please type a response.');
        }
        else if(answerHomeState.trim().toLowerCase() === 'michigan'){
            alert('You got it! GO BLUE!!');
            responseHomeState.textContent = 'You got it right. I am from Michigan.';
            break;
        }
        else {
            g2remainingGuesses--;
            if(g2remainingGuesses < 2) {
                var guess = ' guess';
            }
            else {
                guess = ' guesses';
            }
            alert('I\'m sorry that is not correct. You have ' + g2remainingGuesses + guess + ' remaining.');
            responseHomeState.textContent = 'You did not complete the game. Try again (Hint: What do you wear on your hands to stay warm in winter?';
        }
    }
}


/*Game 3: Guess my Favorite Color*/
var g3remainingGuesses = 3;

//function accepts input from user to guess favorite color, 3 tries allowed before button is disabled
function guessMyFavoriteColor() {

    var userInput = document.getElementById('color-input');
    var response = document.getElementById('response-to-user');
    var color = userInput.value;

    g3remainingGuesses--;

    if(!color) {
        response.textContent = 'Field blank, please type a response.';
    }
    else if(color.trim().toLowerCase() === 'blue') {
        alert('You are getting warmer! What kind of blue?');
    }
    else if(color.trim().toLowerCase() === 'aquamarine') {
        alert('You know me so well!');
    }
    else if(g3remainingGuesses === 1) {
        alert('Hint: Think the third month of the year');
    }
    else if(g3remainingGuesses === 0) {
        alert('You are out of guesses. Please refresh page to play again.');
        document.getElementById('guessButton').disabled = true;
    }
    else {
        alert('Nope. Try again.');
    }
    
        
}

/* Game 4: Travel Bucket list */

//purpose of this function is to ask the user where they would like to go then give them 1/3 responses based on the letter count of their input
function travelBucketList() {

    var userInput = document.getElementById('users-destination');
    var response = document.getElementById('response-to-place');
    var place = userInput.value.length;
    //console.log('what is place', place);
    
    if(place < 1) {
        response.textContent = 'Field blank, please type a response.';
    }
    else if(place > 1 && place <= 6) {
        alert('You should go!');
    }
    else if(place > 6 && place <= 14) {
        alert('Pack your bags ;)');
    }
    else {
        alert('Adventure is out there!');
    }
    
}