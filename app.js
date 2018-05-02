'use strict';

//to count correct answers
var correct = 0;

//Asks user if I like burritos
function likesBurritos() {
    var answer = prompt('Do I like burritos?');
    console.log('User answered', answer);

    var response = document.getElementById('response');

    /*if(answer.trim().toLowerCase() !== 'yes' || answer.trim().toLowerCase() !== 'y' || answer.trim().toLowerCase() !== 'no' || answer.trim().toLowerCase() !== 'n') {
        alert('Please answer yes or no.');
    }*/

    if(answer.trim().toLowerCase() === 'yes' || answer.trim().toLowerCase() === 'y') {
        alert('Correct!');
        response.textContent = 'That\'s right, I love burritos';
        correct++;
    }
    if(answer.trim().toLowerCase() === 'no' || answer.trim().toLowerCase() === 'n') {
        alert('Wrong!');
        response.textContent = 'Who doesn\'t like burritos?';
    }
}

//Asks user if I like beer
function likesBeer() {
    var answer1 = prompt('Do I like beer?');
    console.log('User answered', answer1);

    var response1 = document.getElementById('response-1');

    if(answer1.trim().toLowerCase() === 'yes' || answer1.trim().toLowerCase() === 'y') {
        alert('Correct!');
        response1.textContent = 'Oh yeah, I enjoy a good beer!';
        correct++;
    }
    if(answer1.trim().toLowerCase() === 'no' || answer1.trim().toLowerCase() === 'n') {
        alert('Wrong!');
        response1.textContent = 'I know it\'s an acquired taste, but I do like it.';
    }
}

//Asks user if I speak French
function speaksFrench() {
    var answer2 = prompt('Do I speak French?');
    console.log('User answered', answer2);

    var response2 = document.getElementById('response-2');

    if(answer2.trim().toLowerCase() === 'yes' || answer2.trim().toLowerCase() === 'y') {
        alert('Wrong!');
        response2.textContent = 'No, je ne parle pas français';
    }
    if(answer2.trim().toLowerCase() === 'no' || answer2.trim().toLowerCase() === 'n') {
        alert('Correct!');
        response2.textContent = 'That\'s right, maybe after I learn JavaScript.';
        correct++;
    }
}

//Asks user if I enjoy cruise ships
function cruiseShip() {
    var answer3 = prompt('Do I enjoy cruise ships?');
    console.log('User answered', answer3);

    var response3 = document.getElementById('response-3');

    if(answer3.trim().toLowerCase() === 'yes' || answer3.trim().toLowerCase() === 'y') {
        alert('Correct!');
        response3.textContent = 'Who wouldn\'t, right?';
        correct++;
    }
    if(answer3.trim().toLowerCase() === 'no' || answer3.trim().toLowerCase() === 'n') {
        alert('Wrong!');
        response3.textContent = 'I do in fact enjoy cruise ships. Weird, right?';
    }
}

//Asks user if I like video games
function likesVG() {
    var answer4 = prompt('Do I like video games?');
    console.log('User answered', answer4);

    var response4 = document.getElementById('response-4');

    if(answer4.trim().toLowerCase() === 'yes' || answer4.trim().toLowerCase() === 'y') {
        alert('Correct!');
        response4.textContent = 'Definitely';
        correct++;
    }
    if(answer4.trim().toLowerCase() === 'no' || answer4.trim().toLowerCase() === 'n') {
        alert('Wrong!');
        response4.textContent = 'That\'s right. I don\'t like \'em. No, I love them!';
    }
}

//Asks user to guess my age
function age() {
    var guess = prompt('Guess my age');
    console.log('User guessed', guess);
    var reply = document.getElementById('reply');
    for(var i = 2; i > 0; i--) {
        console.log('User guessed', guess);
        if(guess == 30){
            alert('Correct!');
            reply.textContent = 'You got it!';
            correct++;
            break;
        }
        else if(guess > 30) {
            guess = prompt('Try again, you have ' + i + ' guesses left.');
            reply.textContent = 'I look that old, huh? I gotta up my beauty regimen.';
        }
        else if(guess < 30) {
            guess = prompt('Try again, you have ' + i + ' guesses left.');
            reply.textContent = 'You\'re just trying to score points with your answer. Well, it\'s working!';
        }
    }
    //alerts user amount of correct answers
    alert('You got ' + correct + ' correct out of 6');
    console.log('Correct answers', correct);
}



