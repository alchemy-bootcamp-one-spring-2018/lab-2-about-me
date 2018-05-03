'use strict';

document.getElementById("form1").onsubmit = function getScore(cat, hat, tub) {
    cat = parseInt(document.querySelector('input[name = "cat"]:checked').value);
    hat = parseInt(document.querySelector('input[name = "hat"]:checked').value);
    tub = parseInt(document.querySelector('input[name = "tub"]:checked').value);

    var result = cat + hat + tub;

    document.getElementById("score").innerHTML = result;
    console.log(result);
    return false;
};



