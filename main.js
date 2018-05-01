'use strict';

// eslint-disable-next-line
function guessMyName(){
    var answer = prompt ('Guess my name?');
    console.log ('user guessed'. answer);

    var p = document.getElementById ('my-name-response');

    if (answer.trim().toLowerCase() = = = 'liz') {
         p.textContent = 'You\'re right! My name is Liz';
    }
    else {
        p.textContent = 'Sorry,not my name. Try again';
        
    }

}