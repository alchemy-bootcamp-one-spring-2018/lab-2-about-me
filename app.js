'use strict';

// eslint-disable-next-line
function AboutCarmen() {
    var countryAnswer = prompt('Is my country of origin Japan?');
    console.log('user answer to Question1', countryAnswer);

    var p = document.getElementById('about-carmen-response');
    var correctCounter = 0;

    if(countryAnswer.trim().toLowerCase() === 'no' || countryAnswer.trim().toLowerCase () === 'n') {
        alert ('You\'re right! My country of origin is the Philippines');
        correctCounter ++;
    }
    else {
        alert ('Sorry, please click OK for next question');
    }

    var siblingAnswer = prompt('Do I have a brother?');
    console.log('user answer to Sibling question', siblingAnswer);

    if(siblingAnswer.trim().toLowerCase() === 'yes' || siblingAnswer.trim().toLowerCase() === 'y'){
        alert ('Yes! I have a brother.');
        correctCounter ++;
    }
    else {
        alert ('Bummer! Click OK for next question');
    }

    var musicAnswer = prompt('Do I know how to play the violin?');
    console.log('user answer to Music question', musicAnswer);

    if(musicAnswer.trim().toLowerCase() === 'yes' || musicAnswer.trim().toLowerCase() === 'y'){
        alert ('That is correct! I know how to play the violin');
        correctCounter ++;
    }
    else {
        alert ('Sorry, Click OK for the question');
    }

    var majorAnswer = prompt('Did I study Chemistry in college?');
    console.log('user answer to Major of study question', majorAnswer);

    if(majorAnswer.trim().toLowerCase() === 'no' || majorAnswer.trim().toLowerCase() === 'n'){
        alert ('That is correct! I studied Mathematics');
        correctCounter ++;
    }
    else {
        alert ('Sorry, Click OK for the question');
    }

    var langAnswer = prompt('Is my first job a COBOL programmer?');
    console.log('user answer to Programming Language question', langAnswer);

    if(langAnswer.trim().toLowerCase() === 'yes' || langAnswer.trim().toLowerCase() === 'y') {

        correctCounter ++;
        p.textContent = 'Your answer is correct! You scored  a total of ' + correctCounter + ' correct answers';
    }
    else {
        p.textContent = 'Last question is not correct! You scored ' + correctCounter + ' correct answers';
    }
}


function MoreAboutCarmen() {

    var p = document.getElementById('about-carmen-response');
    var attempt = 1;

    for(var tries = 2; tries > -1; tries--) {
        var passionAnswer = prompt('Can you guess what I am passionate about?');
        console.log('user answer to passion Question1', passionAnswer);
        if(passionAnswer.trim().toLowerCase() === 'real foods') {
            alert ('Congratulations! You got it right in ' + attempt + ' times');
            break;
        }
        else {
            alert ('You have ' + tries + ' more attempt!');
            attempt++;
        }
    }
}
