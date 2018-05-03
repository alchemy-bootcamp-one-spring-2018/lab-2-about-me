'use strict';
var guessesLeft = 3;

// eslint-disable-next-line
function guessMyName(){
    for(var i = 0; i < 3; i++) {

    }

    var answer = prompt ('Guess my name?');
    console.log ('user guessed', answer);

    var p = document.getElementById ('my-name-response');

    if(answer.trim().toLowerCase() === 'liz' || answer.trim().toLowerCase() === 'ann' || answer.trim().toLowerCase() === 'webb' || answer.trim().toLowerCase() === 'daisy'){
        alert('You\'re right! My name is Liz');

    }
    else {
        p.textContent = 'Sorry,not my name. Try again';
        guessesLeft--;


    }
}

function aboutliz() {
    var score = 0;
    var question1 = prompt ('do I have blue hair').trim().toLowerCase();
    console.log ('user guessed', question1);

    if(question1 === 'yes'){
        score++;
        console.log ('your score is', score);
        alert('Hells yeah!');

    }
    else {
        score--;
        alert('duh yeah I have blue hair');
    }
    console.log(score);

    var question2 = prompt ('am I married').trim().toLowerCase();
    console.log ('user guessed', question2);

    if(question2 === 'yes') {
        score++;
        alert('to my bestfriend!');

    }
    else {
        score--;
        alert('totally married!');
    }
    console.log(score);

    var question3 = prompt ('Am I allergic to peanuts').trim().toLowerCase();
    console.log ('user guessed', question3);

    if(question3 === 'yes') {
        score++;
        alert('My epi pen is in my bag!');

    }
    else {
        score--;
        alert('deathly allergic!');
    }
    console.log(score);

}








