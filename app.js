'use strict';
// js for my version of yes/no game
document.getElementById('form1').onsubmit = function getScore(cat, hat, tub, music, ghost) {
    cat = parseInt(document.querySelector('input[name = "cat"]:checked').value);
    hat = parseInt(document.querySelector('input[name = "hat"]:checked').value);
    tub = parseInt(document.querySelector('input[name = "tub"]:checked').value);
    music = parseInt(document.querySelector('input[name = "music"]:checked').value);
    ghost = parseInt(document.querySelector('input[name = "ghost"]:checked').value);

    var result = cat + hat + tub + music + ghost;

    document.getElementById('score').innerHTML = result + ' out of 5!';
    console.log(result);
    return false;
};

// eslint-disable-next-line
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
    else if(state === 'california') {
        response.textContent = 'No, not Cali.';
    }
    else {
        response.textContent = 'Nope!';
    }
}