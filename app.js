'use strict';

//eslint-disable-next-line
function guessMyName() {
    var i = 1;
    while(i < 4) {
        var answer = prompt('Guess my name?');
        console.log('User guessed:', answer);
        console.log('Counter at:', i);

        var p = document.getElementById('my-name-response');
    
        if(answer.trim().toLowerCase() === 'kevin') {
            p.textContent = 'You\'re right! My name is Kevin!';
            break;
        }
        else {
            if(i === 1) {
                p.textContent = 'Sorry, not my name. Try again. Starts with a \"K\"!';
            }
            i++;
        }
    }
}

//eslint-disable-next-line
function catLover() {
    var p = document.getElementById('cat-lover-response');
    p.textContent = 'Of course, everyone likes cats!';
}