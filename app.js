'use strict';

document.getElementById('form1').onsubmit = function getScore(cat, hat, tub) {
    cat = parseInt(document.querySelector('input[name = "cat"]:checked').value);
    hat = parseInt(document.querySelector('input[name = "hat"]:checked').value);
    tub = parseInt(document.querySelector('input[name = "tub"]:checked').value);

    var result = cat + hat + tub;

    document.getElementById('score').innerHTML = result + " out of 3!";
    console.log(result);
    return false;
};
  
function guessState() {
    
    var stateInput = document.getElementById('state');
    var response = document.getElementById('state-response');
    var state = stateInput.value.trim().toLowerCase();
    
    console.log(state);

    if(state === 'michigan') {
        response.textContent = 'Yup yup!';
    }
    else if(state === 'oregon') {
        response.textContent = 'No, but I love it here!';
    }

    else {
        response.textContent = 'Nope!';
    }

    
}