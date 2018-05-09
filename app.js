/* exported gameYesNo, gameLikes */
'use strict';
function gameLikes() {
    var maxGuesses = 6;
    console.log('beginning of likes game');
    var correctAnswer = 'san francisco';
    var answer;
    var correct = false;
    var p = document.getElementById('likes-response');

    for(var i = 1; i < maxGuesses; i++) {
        answer = prompt('Where was the subject "born"?  ATTEMPTS:' + (i - 1)).trim().toLowerCase();
        console.log('Answer: ', answer, '.' + ' Guess attempts = ', i);
        if(answer === null){
            p.textContent = ('INPUT ATTEMPTS: ' + (i - 1));
            break;
        }
        if(answer === correctAnswer) {
            correct = true;
            break;
        }
    }

    if(correct) {
        alert('CONFIRMED - SUBJECT INITIALIZED IN SAN FRANCISCO');
        console.log('answer attempts:', i, 'out of 5');
        p.textContent = ('INPUT ATTEMPTS: ' + i);

    }
    else {
        alert('INPUT ERROR - DATA INCORRECT - AUTHORITIES NOTIFIED - ...i left my heart in....');
    }
}

function gameYesNo() {
    var counter = 0;
    var p = document.getElementById('y-n-response');
    console.log('beginning of yes no game');
    var answer = prompt('INITIATE REPLICANT EVALUATION:  Is the Model a Nexus 6?');
    console.log('user guessed', answer);

    if(answer.trim().toLowerCase() === 'yes' || answer.trim().toLowerCase() === 'y') {
        counter++;
    }
    var answer2 = prompt('Is the replicants current location: Portland Oregon?');
    console.log('user guessed', answer2);
    if(answer2.trim().toLowerCase() === 'yes' || answer2.trim().toLowerCase() === 'y'){
        counter++;
    }
    var answer3 = prompt('Has the replicant assimilated the Helicopter.flying module?');
    console.log('user guessed', answer3);
    if(answer3.trim().toLowerCase() === 'no' || answer3.trim().toLowerCase() === 'n') {
        counter++;
    }
    var answer4 = prompt('Has the replicant began the Alchemy data module?');
    console.log('user guessed', answer4);
    if(answer4.trim().toLowerCase() === 'yes' || answer4.trim().toLowerCase() === 'y') {
        counter++;
    }
    var answer5 = prompt('If you discover the subject replicant in your sector, will you notify TYRELL CORP?');
    console.log('user guessed', answer5);
    if(answer5.trim().toLowerCase() === 'yes' || answer5.trim().toLowerCase() === 'y') {
        counter++;
    }
    p.textContent = ('TOTAL EVALUATION: ' + Math.floor((counter / 5) * 100) + '% CORRECT');
}