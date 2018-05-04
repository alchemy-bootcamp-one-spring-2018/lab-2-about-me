'use strict';

document.getElementById('form1').onsubmit = function getScore(cat, hat, tub) {
    cat = parseInt(document.querySelector('input[name = "cat"]:checked').value);
    hat = parseInt(document.querySelector('input[name = "hat"]:checked').value);
    tub = parseInt(document.querySelector('input[name = "tub"]:checked').value);

    var result = cat + hat + tub;

    document.getElementById('score').innerHTML = result;
    console.log(result);
    return false;
};

var maxStateGuesses = 2;
  
function guessState() {
    
    var stateInput = document.getElementById('state');
    var response = document.getElementById('state-response');
    var state = stateInput.value.trim().toLowerCase();
    
    console.log(state);

    if(state === 'Michigan') {
        response.textContent = 'Yup yup!';
    }
    else if(state === 'Oregon' || 'oregon') {
        response.textContent = 'No, but I love it here!';
    }

    else if(maxStateGuesses === 0) {
        response.textContent = 'Sorry, you\'ve run out of guesses. Refresh page to try again.';
        document.getElementById('state-btn').disabled = true;
    }

    else {
        response.textContent = 'Nope!';
    }
}