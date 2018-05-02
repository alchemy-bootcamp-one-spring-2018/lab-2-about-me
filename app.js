'use strict';
var guessesLeft = 3

// eslint-disable-next-line
function guessMyName(){
    for (var i = 0; i < 3; i++) {

    }

    var answer = prompt ('Guess my name?');
    console.log ('user guessed', answer);

    var p = document.getElementById ('my-name-response');

    if (answer.trim().toLowerCase()=== 'liz'|| answer.trim().toLowerCase()==='ann'|| answer.trim().toLowerCase()==='webb'|| answer.trim().toLowerCase()==='daisy'){
         alert('You\'re right! My name is Liz');
         
    }
    else {
        p.textContent = 'Sorry,not my name. Try again';
        guessesLeft--


    }
}

function glitterLover () {
    var question = prompt ('Are you a glitter lover?');
    console.log ('user guessed',answer);

    var p = document.getElementById ('glitter-lover-response');

    if (answer.trim().toLowerCase()=== 'yes');{
        alert ('Sparkle on! I love glitter too');
    }



