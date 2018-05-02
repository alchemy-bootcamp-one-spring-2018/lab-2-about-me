'use strict';
var guessesLeft = 3

// eslint-disable-next-line
function guessMyName(){
    var answer = prompt ('Guess my name?');
    console.log ('user guessed'. answer);

    var p = document.getElementById ('my-name-response');

    if (answer.trim().toLowerCase() === 'liz') {
         alert('You\'re right! My name is Liz');
         
    }
    else {
        p.textContent = 'Sorry,not my name. Try again';
        guessesLeft--


    }

    var answer = prompt ('Guess my name?' );
    console.log ('user guessed'. answer);

    if (answer.trim().toLowerCase()=== 'ann') {
         alert('You\'re right! My name is ann')
   
    }
    else {
       p.textContent = 'Sorry,not my name.Try again';
       guessesLeft--


    var answer = prompt ('Guess my name?');
    console.log ('user guessed'.answer);
    
    if (answer.trim().toLowerCase()=== 'webb'){
        alert('You\'re right! My name is webb')

    }
    else {
        p.textContent = 'Sorry,not my name.Try again';
        guessesLeft--


    var answer = prompt ('Guess my name?');
    console.log ('user guessed'.answer);

    if (answer.trim().toLocaleLowerCase()=== 'daisy'){
        alert('You\'re right! My name is daisy')

    }
    else {
        p.textContent = 'Sorry,not my name.Try again';
        guessesLeft--


    }


}

    function glitterLover (){


    