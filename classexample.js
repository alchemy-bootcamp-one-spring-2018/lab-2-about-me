'use strict';

var maxGuesses = 3;

function guessWithWhile() {
    console.log('game is running with for while');

    var correctAnswer = 'while';
    var correct = false;
       

    while(i > 0) {
        var answer = prompt('what is my favorite loop?');
        console.log('user guessed', answer);

        if(answer === correctAnswer) {
            correct = true;
            break;
        }

        i--;
    }

    console.log('last answer', answer);

    if(correct) {
        alert('you got it!');
    }
    else {
        alert('try again _while_ you\'re at it!');
    }
}

function guessWithFor() {
    console.log('game is running with for loop');
    var correctAnswer = 'for';

    // setup
    // what variables "transcend" the loop?
    var answer;
    var correct = false;

    // loop for guesses
    for(var i = 0; i < maxGuesses; i++) {
        answer = prompt('what my favorite loop?');
        console.log(answer);

        if(answer === correctAnswer) {
            correct = true;
            break;
        }
    }

    if(correct) {
        alert('yes, while is my favorite loop');
    }
    else {
        alert('Sorry, my favorite loop is while');
    }
}


*/  <section>
<h2>Guess my favorite color</h2>
<input id="color">
<button id="color-btn" onclick="guessFavoriteColor()">Guess</button>
<p id="color-response"></p>
</section> */

            <section>
                <h2>Guess what state I'm from</h2>
                <input id="state">
                <button id="state-btn" onclick="guessState()">Guess</button>
                <p id="state-response"></p>
            </section>

            function guessState() {
                    var stateInput = document.getElementById('state');
                    var response = document.getElementById('state-response');
                    var state = stateInput.value;
            }
var colorGuesses = 3;
            var stateGuesses = 2;
            stateGuesses--;

            if(state === 'Michigan') {
                response.textContent = 'Yup yup!'
            }
            else if(state === 'Oregon') {
                response.textContent = 'No, but I love it here!';
            }
            else if(stateGuesses === 0) {
                response.textContent = 'Sorry, you\'ve run out of guesses. Refresh page to try again.'
                documentGetElementById('state-btn').disabled = true;
            }

            else {
                response.textContent = 'Nope!';
            }
        }
                                function guessFavoriteColor() {
                                    var colorInput = document.getElementById('color');
                                    var response = document.getElementById('color-response');
                                    var color = colorInput.value;

    colorGuesses--;

    if(color === 'blue') {
        response.textContent = 'Close, but what blue?';
    }
    else if(color === 'steelblue') {
        response.textContent = 'OMG, how did you know? (Did you peek at source code?)';
    }
    else if(colorGuesses === 0) {
        response.textContent = 'Sorry you didn\'t get it, refresh page to try again';
        document.getElementById('color-btn').disabled = true;
    }
    else {
        response.textContent = 'Not even close';
    }
}