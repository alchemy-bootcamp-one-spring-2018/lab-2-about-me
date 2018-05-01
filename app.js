'use strict';
var name = "";

var takeQuiz = function() {
    //  Hide bio info
    var bio = document.getElementById('main');
    bio.style.visibility = "hidden";

    //  Delay prompts so visibility stuff can be updated
    setTimeout(function() {
    //  Ask user for their name
    if (name === "") {
        while (name === "" || name === null) {
            name = prompt('Hello friend. What is your name?');
        }
    }

    //  Ask question until an answer is given
    //  Birth city
    var birth = "";
        while (birth === "" || birth === null) {
            birth = prompt('What is Erik\'s birth city?');
        }
        // Band
        var band = "";
        while (band === "" || band === null) {
            band = prompt('What is Erik\'s favorite band?');
        }
        //  Artist
        var artist = "";
        while (artist === "" || artist === null) {
            artist = prompt('What is Erik\'s fvorite artist?');
        }
        //  Word
        var word = "";
        while (word === "" || word === null) {
            word = prompt('What is Erik\'s favorite word?');
        }
        //  Smell
        var smell = "";
        while (smell === "" || smell === null) {
            smell = prompt('What is Erik\'s favorite smell?');
        }

        //  Check results
        var result = 0;
        //  Birth city
        if (birth.trim().toLocaleLowerCase() === "fargo" || birth.trim().toLocaleLowerCase() === "fargo, nd") {
            result++;
        }
        //  Band
        if (band.trim().toLocaleLowerCase() === 'system of a down') {
            result++;
        }
        //  Artist
        if (artist.trim().toLocaleLowerCase() === 'tom waits') {
            result++;
        }
        //  Word
        if (word.trim().toLocaleLowerCase() === 'diphthong') {
            result++;
        }
        //  Smell
        if (smell.trim().toLocaleLowerCase() === 'the ocean' || smell.trim().toLocaleLowerCase() === "ocean") {
            result++;
        }

        console.log(result);
        //  Alert the results
        if (result === 5) {
            var message = document.getElementById('message');
            message.innerHTML = '<h1>Congratulations ' + name + '! You scored <span class="shine">100%</span></h1>'        
        } else {
            alert('You scored ' + result + ' out of 5. I think you can do better than that ' + name + '...');
            // Show the bio again
            bio.style.visibility = "visible";
        }
    }, 10);
}