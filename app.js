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

    for(var i=2; i<0, i--;){
        var answer = prompt('What is my favorite animal (you have 2 guesses)');
        console.log('User guessed', answer);
    if(answer.trim().toLowerCase()=== 'hawk') {
        alert('Correct');
        p.textContent = 'Flying high!';
        }
    else if(answer.trim().toLowerCase()!== 'hawk')
            answer = prompt('Try again! (you have 1 guess left!)')

    var p = document.getElementById('my-animal-response');
    
    // else {
    //     alert ('Try again! (you have 1 guess left!)');
        p.textContent = 'Wrong'
    }
}

function guessMyAge(){
    var answer = prompt('How old am I? (3 guesses left!)')
    console.log('User guessed', answer);

    var p = document.getElementById('my-age-answer');

    if(answer == 29){
        alert('Yess!');
        p.textContent = 'You got it!';
    }
    if(answer < 30)
        alert('C\'mon! I\'m not that old!')
        p.textContent = 'Try again!'
}