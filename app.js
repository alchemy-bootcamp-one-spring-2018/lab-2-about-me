'use strict';

/* exported guessYesNo lastName favoriteAnimal rockPaperScissors*/
//This is the code for a 5 question yes or no guessing game
function guessYesNo(){
    //variable i increases with every correct answer, score is displayed at end
    var i = 0;
    //all questions follow some basic premise. Prompt, console log, if else statement for correct and incorrect answers, responses with alert
    var mexicoAnswer = prompt('Do you think I\'ve been to Mexico?').trim().toLowerCase();
    console.log('user guessed', mexicoAnswer);
    if(mexicoAnswer === 'yes' || mexicoAnswer === 'y'){
        alert('You\'re right! I have been to Mexico!');
        i++;
    } else {
        alert('Sorry, but I have been to Mexico and if you haven\'t then you should!');
    }

    var broccoliAnswer = prompt('Is broccoli my favorite vegetable?').trim().toLowerCase();
    console.log('user guessed', broccoliAnswer);
    if(broccoliAnswer === 'yes' || broccoliAnswer === 'y'){
        alert('Right again! I love broccoli!');
        i++;
    } else {
        alert('Nope, broccoli definitely is my favorite vegetable!');
    }

    var driveAnswer = prompt('Do you think I like to drive?').trim().toLowerCase();
    console.log('user guessed', driveAnswer);
    if(driveAnswer === 'no' || driveAnswer === 'n'){
        alert('Correct! Driving is the worst!');
        i++;
    } else {
        alert('Incorrect! Driving is the worst!');
    }

    var petAnswer = prompt('Do I have any pets?').trim().toLowerCase();
    console.log('user guessed', petAnswer);
    if(petAnswer === 'no' || petAnswer === 'n'){
        alert('Correct! Although I love pets, I have none of my own.');
        i++;
    } else {
        alert('Wrong! Even though I love pets, I have none of my own!');
    }

    var codeAnswer = prompt('Do I know how to code?').trim().toLowerCase();
    console.log('user guessed', codeAnswer);
    if(codeAnswer === 'yes' || codeAnswer === 'y'){
        alert('I sure hope so!');
        i++;
    } else {
        alert('How do you think I made this?!');
    }
    //This displays the final score on the screen
    if(i > 1){
        p.textContent = 'You got ' + i + ' questions right! Good job!';
    } else if(i === 1){
        p.textContent = 'You got ' + i + ' question right! Not... the best...';
    } else if(i === 0){
        p.textContent = 'You got ' + i + ' questions right. Difficult to believe really.';
    }
}
//variable is later changed to display something different based upon answers
var p = document.getElementById('yes-no-response');
//simply game of guessing my last name. user has 5 chances, responses change at 1 and 0 chances left.
function lastName(){
    var p = document.getElementById('last-name-response');
    for(var i = 4; i >= 0; i--){
        var lastNameQ = prompt('What is my last name?').trim().toLowerCase();
        console.log('user guessed', lastNameQ);
        if(lastNameQ === 'thompson'){
            alert('You are a stalker');
            p.textContent = 'Seriously. Huge stalker.';
            break;
        } else if(i > 1){
            alert('Nope! Keep trying! You have ' + i + ' chances left! HINT: First letter T.');
        } else if(i === 1){
            alert('Nope! Keep trying! You have ' + i + ' chance left! HINT: Thomp..');
        } else if(i === 0){
            alert('Sorry, you are out of chances!');
            p.textContent = 'Better luck next time!';
            break;
        } else if(lastNameQ !== true){
            alert('Come one! Just guess!');
        }
    }
}
/* Admittedly, I did not get particularly creative with this one. This is largely similar to what Marty showed us in class. I figured typing it out and playing with it
a little would give me a better idea of how exactly it worked, and I have a fair grasp of how this game works now. But it;s not much different from what Marty showed us,
just a couple of extra steps and potential responses.*/
var animalGuesses = 3;
function favoriteAnimal(){
    var animalInput = document.getElementById('animal-input');
    var response = document.getElementById('animal-response');
    var animal = animalInput.value.trim().toLowerCase();

    animalGuesses--;

    if(animal === 'eagle'){
        response.textContent = 'Wow you\'re right! Great guess!';
        document.getElementById('animal-btn').disabled = true;
    } else if(animalGuesses === 2){
        response.textContent = 'Nope! Try something that flies!';
    } else if(animalGuesses === 1){
        response.textContent = 'Nah, try something BIG that flies!';
    } else if(animalGuesses === 0){
        response.textContent = 'No! Try refreshing the page to try again!';
        document.getElementById('animal-btn').disabled = true;
    }
}
var compScore = 0;
var userScore = 0;
function rockPaperScissors(entry){
    var choices = ['rock', 'paper', 'scissors'];
    var compSelection = function(){
        var compChoice = choices[Math.floor(Math.random() * 3)];
        return compChoice;
    };
    var choice = compSelection();
    console.log(choice);
    var response = document.getElementById('rps-display');
    if(entry === 'rock' && choice === 'scissors'){
        response.textContent = 'Scissors! You won!';
        userScore++;
    } else if(entry === 'rock' && choice === 'paper'){
        response.textContent = 'Paper! You lose!';
        compScore++;
    } else if(entry === 'rock' && choice === 'rock'){
        response.textContent = 'Rock! Draw!';
    } else if(entry === 'paper' && choice === 'scissors'){
        response.textContent = 'Scissors! You lose!';
        compScore++;
    } else if(entry === 'paper' && choice === 'paper'){
        response.textContent = 'Paper! Draw!';
    } else if(entry === 'paper' && choice === 'rock'){
        response.textContent = 'Rock! You win!';
        userScore++;
    } else if(entry === 'scissors' && choice === 'scissors'){
        response.textContent = 'Scissors! Draw!';
    } else if(entry === 'scissors' && choice === 'paper'){
        response.textContent = 'Paper! You win!';
        userScore++;
    } else if(entry === 'scissors' && choice === 'rock'){
        response.textContent = 'Rock! You lose!';
        compScore++;
    }
    var q = document.getElementById('score-card');
    q.textContent = 'You have ' + userScore + ' points and the computer has ' + compScore + ' points.';
}

