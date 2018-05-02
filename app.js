/* exported yesOrNo, guessNumber, guessColor, checkPalindrome */
'use strict';

function yesOrNo() {
    var score = 0;
    var firstAnswer = prompt('Q1: Was I born in the US?');
    console.log('user guessed', firstAnswer);
    if(firstAnswer.toLowerCase() === 'no' || firstAnswer.toLowerCase() === 'n') {
        alert('Correct! I was NOT born in the US.');
        score++;
    }
    else {
        alert('Sorry, that\'s incorrect. I wasn\'t born in the US.');
    }

    var secondAnswer = prompt('Q2: Do I have a middle name?');
    console.log('user guessed', secondAnswer);
    if(secondAnswer.toLowerCase() === 'no' || secondAnswer.toLowerCase() === 'n') {
        alert('Correct! I do NOT have a middle name.');
        score++;
    }
    else {
        alert('Sorry, that\'s not right. I don\'t have a middle name.');
    }

    var thirdAnswer = prompt('Q3: Do I like cats?');
    console.log('user guessed', thirdAnswer);
    if(thirdAnswer.toLowerCase() === 'yes' || thirdAnswer.toLowerCase() === 'y') {
        alert('Yup. I love cats.');
        score++;
    }
    else {
        alert('Sorry, that\'s incorrect. I\'m a big fan of cats.');
    }

    var fourthAnswer = prompt('Q4: Do I like rainy weather?');
    console.log('user guessed', fourthAnswer);
    if(fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y') {
        alert('Correct! Why do you think I live here?');
        score++;
    }
    else {
        alert('Sorry, that\'s incorrect. I probably wouldn\'t be living in the PNW if that were true.');
    }

    var fifthAnswer = prompt('Q5: Am I currently obsessed with the video game God of War?');
    console.log('user guessed', fifthAnswer);
    if(fifthAnswer.toLowerCase() === 'yes' || fifthAnswer.toLowerCase() === 'y') {
        alert('You bet I am.');
        score++;
    }
    else {
        alert('Sorry, that\'s not correct - I\'m definitely obsessed with God of War. At least, for right now.');
    }
    var final = document.getElementById('final-score');
    final.textContent = 'Final score: ' + score + '/5';
}

var numberGuesses = 5;
var number = Math.floor(Math.random() * 100);
function guessNumber() {
    var userInput = document.getElementById('user-number');
    var userGuess = parseInt(userInput.value);
    var message = document.getElementById('number-hint');
    var secondMessage = document.getElementById('extra-message');

    if(isNaN(userGuess)) {
        message.textContent = 'Please enter a number. Invalid entries don\'t count against you. Guesses left: ' + numberGuesses;
    }
    else if(userGuess < number && numberGuesses > 1) {
        numberGuesses--;
        message.textContent = 'Try guessing higher! Guesses left: ' + numberGuesses;
    }
    else if(userGuess > number && numberGuesses > 1) {
        numberGuesses--;
        message.textContent = 'Try guessing lower! Guesses left: ' + numberGuesses;
    }
    else if(userGuess !== number && numberGuesses >= 0) {
        message.textContent = 'Sorry, but you lost. The number was ' + number + '.';
        secondMessage.textContent = 'Refresh to try again! (The number will change.)';
        document.getElementById('number-btn').disabled = true;
    }
    else {
        numberGuesses--;
        message.textContent = 'That\'s right! The number was ' + number + '. Guesses left: ' + numberGuesses + '.';
        secondMessage.textContent = 'Refresh to play again! (The number will change.)';
        document.getElementById('number-btn').disabled = true;
    }
}

var colorGuesses = 2;
function guessColor() {
    var userInput = document.getElementById('user-color');
    var userColor = userInput.value;
    var response = document.getElementById('color-response');
    var retry = document.getElementById('refresh');

    if(userColor === 'lightgreen') {
        response.textContent = 'That\'s correct! My favorite color is light green. (Guesses left: ' + colorGuesses + ')';
        document.getElementById('guess-btn').disabled = true;
        retry.textContent = 'Refresh to try again!';
    }
    else if(userColor === 'green' && colorGuesses !== 0) {
        response.textContent = 'Almost! What shade of green? (Guesses left: ' + colorGuesses + ')';
        colorGuesses--;
    }
    else if(colorGuesses === 0) {
        response.textContent = 'Sorry, but ' + userColor + 'isn\'t right. You ran out of guesses!';
        retry.textContent = 'Refresh to try again!';
        document.getElementById('guess-btn').disabled = true;
    }
    else {
        response.textContent = 'Sorry, but ' + userColor + ' isn\'t right. (Guesses left: ' + colorGuesses + ')';
        colorGuesses--;
    }
}

function checkPalindrome() {
    var userInput = document.getElementById('user-word');
    var userString = userInput.value;
    var response = document.getElementById('palindrome-response');

    var userArray = userString.split('');
    var reverseArray = userArray.reverse();
    var reverseString = reverseArray.join('');

    if(reverseString === userString) {
        response.textContent = 'Hey, looks like that word is a palindrome!';
    }
    else {
        response.textContent = 'Sorry, but it doesn\'t look like that word is a palindrome.';
    }
}