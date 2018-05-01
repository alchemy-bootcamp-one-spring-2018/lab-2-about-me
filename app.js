'use strict';

//Asks user if I like burritos
function likesBurritos() {
    var answer = prompt('Do I like burritos?');
    console.log('User answered', answer);

    var response = document.getElementById('response');

    /*if(answer.trim().toLowerCase() !== 'yes' || answer.trim().toLowerCase() !== 'y' || answer.trim().toLowerCase() !== 'no' || answer.trim().toLowerCase() !== 'n') {
        alert('Please answer yes or no.');
    }*/

    if(answer.trim().toLowerCase() === 'yes' || answer.trim().toLowerCase() === 'y') {
        response.textContent = 'That\'s right, I love burritos';
    }
    if(answer.trim().toLowerCase() === 'no' || answer.trim().toLowerCase() === 'n') {
        response.textContent = 'Who doesn\'t like burritos?';
    }
}

//Asks user if I like beer
function likesBeer() {
    var answer1 = prompt('Do I like beer?');
    console.log('User answered', answer1);

    var response1 = document.getElementById('response-1');

    if(answer1.trim().toLowerCase() === 'yes' || answer1.trim().toLowerCase() === 'y') {
        response1.textContent = 'Oh yeah, I enjoy a good beer!';
    }
    if(answer1.trim().toLowerCase() === 'no' || answer1.trim().toLowerCase() === 'n') {
        response1.textContent = 'I know it\'s an acquired taste, but I do like it.';
    }
}

//Asks user if I speak French
function speaksFrench() {
    var answer2 = prompt('Do I speak French?');
    console.log('User answered', answer2);

    var response2 = document.getElementById('response-2');

    if(answer2.trim().toLowerCase() === 'yes' || answer2.trim().toLowerCase() === 'y') {
        response2.textContent = 'No, je ne parle pas français';
    }
    if(answer2.trim().toLowerCase() === 'no' || answer2.trim().toLowerCase() === 'n') {
        response2.textContent = 'That\'s right, maybe after I learn JavaScript';
    }
}

//Asks user if I enjoy cruise ships
function cruiseShip() {
    var answer3 = prompt('Do I enjoy cruise ships?');
    console.log('User answered', answer3);

    var response3 = document.getElementById('response-3');

    if(answer3.trim().toLowerCase() === 'yes' || answer3.trim().toLowerCase() === 'y') {
        response3.textContent = 'Who wouldn\'t, right?';
    }
    if(answer3.trim().toLowerCase() === 'no' || answer3.trim().toLowerCase() === 'n') {
        response3.textContent = 'I do in fact enjoy cruise ships. Weird, right?';
    }
}

//Asks user if I like video games
function likesVG() {
    var answer4 = prompt('Do I like video games?');
    console.log('User answered', answer4);

    var response4 = document.getElementById('response-4');

    if(answer4.trim().toLowerCase() === 'yes' || answer4.trim().toLowerCase() === 'y') {
        response4.textContent = 'Definitely';
    }
    if(answer4.trim().toLowerCase() === 'no' || answer4.trim().toLowerCase() === 'n') {
        response4.textContent = 'That\'s right. I don\'t like \'em. No, I love them!';
    }
}