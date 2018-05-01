'use strict';

//eslint-disable-next-line
function guessMyName() {
    //counter value started at 1
    var i = 1;
    //while loop giving user 3 "guesses" (counter less than 4)
    while(i < 4) {
        //prompts the user to input a "guess" when the function is called
        var answer = prompt('Guess my name?');
        //logs console with user's guess and returns current counter value
        console.log('User guessed:', answer);
        console.log('Counter at:', i);

        var p = document.getElementById('my-name-response');
        //after trimming white space and converting to lower case, validates user guess against correct answer
        if(answer.trim().toLowerCase() === 'kevin') {
            //if correct, displays winning message; breaks
            p.textContent = 'You\'re right! My name is Kevin!';
            break;
        }
        //else returns message/hint #1; increments counter value
        else {
            if(i === 1){
                alert('Sorry, not my name. Try again. Starts with a "K"!');
                i++;
            }
            //else returns message/hint #2; increments counter value
            else {
                if(i === 2) {
                    alert('Not quite! Starts with a "K", ends with an "N", and my name is 5 letters long...');
                    i++;
                }
                //maximum attempts (3) reached; displays losing message; breaks
                else {
                    p.textContent = 'You died! (you ran out of guesses)';
                    break;
                }
            }
        }
    }
}

//eslint-disable-next-line
function catLover() {
    var p = document.getElementById('cat-lover-response');
    p.textContent = 'Of course, everyone likes cats!';
}