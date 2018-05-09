/* exported guessMyName */
/* exported guessMyAnimal */
/* exported guessMyAge */
/* exported guessMyCity */
/* exported guessMyShow*/
'use strict';

function guessMyName(){
    var answer = prompt('What is my name?');
    console.log('User guessed', answer);

    var p = document.getElementById('my-name-response');

    if(answer.trim().toLowerCase() === 'zack'){
        alert('Correct');
        p.textContent = 'You\'re right! My name is Zack';
    }
    else {
        alert ('Sorry, not my name.');
        p.textContent = 'Wrong';
    }
}

function guessMyAnimal(){
    for(var int = 2; answer < 1, int--;){
        var answer = prompt('What is my favorite animal? (you have ' + int + ' guesses)');
        console.log('User guessed', answer);

        var p = document.getElementById('my-animal-response');
        while(answer > 0) {

            if(answer.trim().toLowerCase() === 'hawk'){
                alert('Correct');
                p.textContent = 'Flying high!';
                break;
            }
            else if(answer.trim().toLowerCase() !== 'hawk'){
                answer = prompt('Try again! (you have ' + int + ' guess left!)');
                p.textContent = 'Wrong';
            }
        }
    }
}

function guessMyAge(){
    for(var i = 4; i < 0, i--;){
        var answer = prompt('How old am I? (3 guesses left!)');
        console.log('User guessed', answer);

        var p = document.getElementById('my-age-answer');

        if(answer === 29){
            alert('Yess!');
            p.textContent = 'You got it!';
            break;
        }
        if(answer > 30){
            alert('C\'mon! I\'m not that old!');
            p.textContent = 'Try again!';
        }
        if(answer < 29){
            alert('Nope, go higher.');
        }
    }
}


function guessMyCity(){
    var answer = prompt('What city was I born in?');
    console.log('User guessed', answer);

    var p = document.getElementById('my-city-response');

    if(answer.trim().toLowerCase() === 'seattle'){
        alert('Right!');
        p.textContent = 'Rock on!';
    }
    else {
        alert('Nope!');
    }
}

function guessMyShow() {
    var answer = prompt('What do you think my favorite show is?');
    console.log('User guessed', answer);

    var p = document.getElementById('my-show-response');


    if(answer.trim().toLowerCase() === 'rick and morty'){
        alert('Oh yeah! Get schwifty!');
        p.textContent = 'Wubbalubba dub dub!';
    }
    else {
        alert('Never heard of it. Try again!');
    }
}

function tattoos() {
    var answer = prompt('Do I have more than one tattoo? Please type yes or no.');
    console.log('User answered', answer);
}