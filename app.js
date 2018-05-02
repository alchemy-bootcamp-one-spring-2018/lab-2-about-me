/* exported gameYesNo, gameLikes, guessFavoriteColor */
'use strict';

var maxGuesses = 5;

function gameLikes() {
    console.log('beginning of likes game');
    var correctAnswer = ('San Francisco');
    var answer;
    var correct = false;
    var p = document.getElementById('likes-response');
    // loop for guesses
    for(var i = 0; i < maxGuesses; i++) {
        answer = prompt('Where was the subject "born"?');
        console.log('Answer: ', answer, '.' + ' Guess attempts = ', i);
        if(answer === correctAnswer) {
            correct = true;
            break;
        }
        if(answer === null){
            break;
        }
    }

    if(correct) {
        alert('CONFIRMED - SUBJECT INITIALIZED IN SAN FRANCISCO');
        console.log('answer attempts:', i++, 'out of 5');
        p.textContent = ('INPUT ATTEMPTS: ', i++);

    }
    else {
        alert('INPUT ERROR - DATA INCORRECT - AUTHORITIES NOTIFIED');
    }
}

var counter = 0;

function gameYesNo() {
    var answer = prompt('Knowledge of Replicant: Verification Required. Is the Model a Nexus 6?');
    console.log('user guessed', answer);
    var p = document.getElementById('y-n-response');

    if(answer.trim().toLowerCase() === 'yes' || 'y') {
        counter++;
        var answer2 = prompt('Is the replicants current location: Portland Oregon?');
        console.log('user guessed', answer2);

        if(answer2.trim().toLowerCase() === 'yes' || 'y') {
            counter++;
            var answer3 = prompt('Has the replicant assimilated the Helicopter.flying module?');
            console.log('user guessed', answer3);

            if(answer3.trim().toLowerCase() === 'no' || 'n') {
                counter++;
                var answer4 = prompt('Has the replicant began the Alchemy data module?);
                console.log('user guessed', answer4);

                if(answer4.trim().toLowerCase() === 'yes' || 'y') {
                    counter++;
                    var answer5 = prompt('If you discover the subject replicant in your sector, will you notify TYRELL CORP?');
                    console.log('user guessed', answer5);

                    if(answer5.trim().toLowerCase() === 'yes' || 'y') {
                        counter++;
                        p.textContent = ('Total Evaluation: ' + Math.floor((counter / 5) * 100) + '%) CORRECT');
                    }
                }
                else {
                    p.textContent = ('INCORRECT INPUT: ' + Math.floor((counter / 5) * 100) + '%) CORRECT');
                }
            }
            else {
                p.textContent = ('INCORRECT INPUT: ' + Math.floor((counter / 5) * 100) + '%) CORRECT');
            }
        }
        else {
            p.textContent = ('INCORRECT INPUT: ' + Math.floor((counter / 5) * 100) + '%) CORRECT');
        }
    }
    else {
        p.textContent = ('INCORRECT INPUT: ' + Math.floor((counter / 5) * 100) + '%) CORRECT');
    }
}