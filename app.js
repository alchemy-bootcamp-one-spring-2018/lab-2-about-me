'use strict';
//eslint-disable-next-line
function guessMyName() {
    var answer = prompt('guess my name');
    console.log('user guessed', answer);

    var p = document.getElementById('my-name-response');

    if(answer.toLowerCase().trim() === 'antreo') {
        p.textContent = 'You\'re right! My name is Antreo';
    }
    else {
        p.textContent = 'Nope. Try again';
    }
}
//eslint-disable-next-line
function guessMyState() {
    var answerState = prompt('guess my state');
    console.log('user guessed', answerState);

    var p = document.getElementById('my-state-response');

    if(answerState.toLowerCase().trim() === 'Florida') {
        p.textContent = 'You\'re right! I\'m from Florida';
    }
    else {
        p.textContent = 'Nope. Try again';
    }
}

//eslint-disable-next-line
function yesOrNo() {
    var score = 0;
    //Did I learn to swim before walk?
    var answerSwimWalk = prompt('Did I learn to swim before I could walk?').trim().toLowerCase();
    console.log('user guessed', answerSwimWalk);

    var questionOne = document.getElementById('swim-walk-response');
    if(answerSwimWalk === 'yes' || answerSwimWalk === 'y') {
        questionOne.textContent = 'Correct';
        score++;
    }
    else {
        questionOne.textContent = 'False';
    }
    //Can I play any musical instruments?
    var answerMusicalInstrument = prompt('Can I play any musical instruments?').trim().toLowerCase();
    console.log('user guessed', answerMusicalInstrument);

    var questionTwo = document.getElementById('play-instrument-response');
    if(answerMusicalInstrument === 'yes' || answerMusicalInstrument === 'y') {
        questionTwo.textContent = 'Correct';
        score++;

    }
    else {
        questionTwo.textContent = 'False';
    }
    //DO I like seafood?
    var answerLikeSeafood = prompt('Do I like seafood?').trim().toLowerCase();
    console.log('user guessed', answerLikeSeafood);

    var questionThree = document.getElementById('like-seafood-response');
    if(answerLikeSeafood === 'yes' || answerLikeSeafood === 'y') {
        questionThree.textContent = 'Correct';
        score++;

    }
    else {
        questionThree.textContent = 'False';
    }
    //Do I like skydiving?
    var answerGoneSkydiving = prompt('Have I ever gone skydiving?').trim().toLowerCase();
    console.log('user guessed', answerGoneSkydiving);

    var questionFour = document.getElementById('sky-diving-response');
    if(answerGoneSkydiving === 'yes' || answerGoneSkydiving === 'y') {
        questionFour.textContent = 'Correct';
        score++;

    }
    else {
        questionFour.textContent = 'False';
    }
    //Ever traveled outside the US?
    var answerOutsideUS = prompt('Have I ever traveled outside of the US?').trim().toLowerCase();
    console.log('user guessed', answerOutsideUS);

    var questionFive = document.getElementById('outside-US-response');
    if(answerOutsideUS === 'yes' || answerOutsideUS === 'y') {
        questionFive.textContent = 'Correct';
        score++;

    }
    else {
        questionFive.textContent = 'False';
    }
    var userScore = document.getElementById('score');
    userScore.textContent = 'You got ' + score + ' out of 5!';

}



