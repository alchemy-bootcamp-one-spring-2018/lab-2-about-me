/* exported guessMyName, guessYesNo*/

'use strict';
// A function to play "Guess My Name!" in 3 guesses or less
// eslint-disable-next-line
function guessMyName() {
    var i;
    var answer;
    // eslint-disable-next-line
    var p = document.getElementById('my-name-response');
    for(i = 1; i < 4; i++) {
        answer = prompt('Guess my name!');
        console.log('User guessed:', answer);
        console.log('Counter at:', i);
        if(!answer) {
            alert('Come back to play later!');
            break;
        }
        if(answer.trim().toLowerCase() === 'kevin') {
            p.textContent = 'You\'re right! My name is Kevin';
            break;
        } else if(i === 1) {
            alert('Sorry, try again. My name starts with a "K"! Only ' + (3 - i) + ' guesses left!');
        } else if(i === 2) {
            alert('Not quite! My name starts with a "K", ends with an "N", and it is 5 letters long. Only ' + (3 - i) + ' guess left!');
        } else if(i === 3) {
            p.textContent = 'You died! (you ran out of guesses)';
            break;
        }
    }
}

/*  A function to play "Yes or No" game. The user is prompted to submit an answer.
    A correct response increments correctAnswers while an incorrect response does not.
    Answers are expected in the form of y/yes/n/no. */
// eslint-disable-next-line
function guessYesNo() {
    var i = 0;
    var correctAnswers = 0;
    var answers = [];
    // eslint-disable-next-line
    var p = document.getElementById('yes-no-response');

    // Question #1: Am I 33 years old? | Answer: NO
    answers.push(prompt('Am I 33 years old?').trim().toLowerCase());
    if(answers[i] === 'y' || answers[i] === 'yes') {
        alert('Incorrect!');
    } else if(answers[i] === 'n' || answers[i] === 'no') {
        alert('Correct!');
        correctAnswers++;
    }
    i++;
    console.log('User\'s answers: ', answers);
    console.log('Correct answers:', correctAnswers, 'out of 5');

    // Question #2: Is one of my favorite cities Tokyo? | Answer: YES
    answers.push(prompt('Is Tokyo one of my favorite cities?').trim().toLowerCase());
    if(answers[i] === 'y' || answers[i] === 'yes') {
        alert('Correct!');
        correctAnswers++;
    } else if(answers[i] === 'n' || answers[i] === 'no') {
        alert('Incorrect!');
    }
    i++;
    console.log('User\'s answers: ', answers);
    console.log('Correct answers:', correctAnswers, 'out of 5');

    // Question #3: Do I like motorcycles? | Answer: YES
    answers.push(prompt('Do I like motorcycles?').trim().toLowerCase());
    if(answers[i] === 'y' || answers[i] === 'yes') {
        alert('Correct!');
        correctAnswers++;
    } else if(answers[i] === 'n' || answers[i] === 'no') {
        alert('Incorrect!');
    }
    i++;
    console.log('User\'s answers: ', answers);
    console.log('Correct answers:', correctAnswers, 'out of 5');

    // Question #4: Have I ever worked in tech before? | Answer: NO
    answers.push(prompt('Have I ever worked in tech before?').trim().toLowerCase());
    if(answers[i] === 'y' || answers[i] === 'yes') {
        alert('Incorrect!');
    } else if(answers[i] === 'n' || answers[i] === 'no') {
        alert('Correct!');
        correctAnswers++;
    }
    i++;
    console.log('User\'s answers: ', answers);
    console.log('Correct answers:', correctAnswers, 'out of 5');

    // Question #5: Am I from Portland? | Answer: NO
    answers.push(prompt('Am I from Portland?').trim().toLowerCase());
    if(answers[i] === 'y' || answers[i] === 'yes') {
        alert('Incorrect!');
    } else if(answers[i] === 'n' || answers[i] === 'no') {
        alert('Correct!');
        correctAnswers++;
    }
    i++;
    console.log('User\'s answers: ', answers);
    console.log('Correct answers:', correctAnswers, 'out of 5');

    p.textContent = ('Overall, you scored: ' + correctAnswers + '/5' + ' (' + Math.floor((correctAnswers / 5) * 100) + '%)');
}