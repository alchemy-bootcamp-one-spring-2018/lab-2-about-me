'use strict';

function guessMyName(){
    var answer = prompt('What is my name?');
    console.log('User guessed', answer);

    var p = document.getElementById('my-name-response');

    if(answer.trim().toLowerCase() === 'zack') {
        alert('Correct');
        p.textContent = 'You\'re right! My name is Zack';
    }
    else {
        alert ('Sorry, not my name.');
        p.textContent = 'Wrong!'
    }
}

function guessMyAnimal(){
    newFunction();
    var answer = prompt('What is my favorite animal (you have 2 guesses)');
    console.log('User guessed', answer);

    var p = document.getElementById('my-animal-response');

    if(answer.trim().toLowerCase()=== 'hawk') {
        alert('Correct');
        p.textContent = 'Flying high!';
    }
    else {
        alert ('Try again!');
        p.textContent = 'Wrong'
    }
}