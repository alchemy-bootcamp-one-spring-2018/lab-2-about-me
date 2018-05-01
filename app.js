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



