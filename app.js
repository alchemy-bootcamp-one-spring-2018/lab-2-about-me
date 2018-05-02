'use strict';

//start button
function startMe(){
    alert('GAME TIME!!!');
    console.log('User is ready to play!');
}
//question1
function namePrompt(){

    var nameGuess = prompt('Can you guess my name?').trim().toLocaleLowerCase();
    var nameAnswer = 'chris';
    console.log('guessed name: ', nameGuess);

    var nameP = document.getElementById('name-response');

    if(nameGuess === nameAnswer || nameGuess === 'Christopher'){
        nameP.textContent = 'Way to go!!! While I haven\'t travelled the seven seas, I DO love to travel';

    }
    else {
        nameP.textContent = 'BEEEEP!!! Try again!';
    }
}
//question2
function cityPrompt(){

    var cityGuess = prompt('Which city do I live in?').trim().toLowerCase();
    var cityAnswer = 'portland';
    console.log('guessed city: ', cityGuess);

    var cityP = document.getElementById('city-response');


    if(cityGuess === cityAnswer || cityGuess === 'pdx'){
        cityP.textContent = 'That\'s right!!! I live in Great city of portland! I moved here from the desert of Tucson, Arizona';
    }
    else {
        cityP.textContent = 'BEEEEP!!! Try again!';
    
    }
}
//question3
function beerPrompt(){

    var beerGuess = prompt('Which beer do i like?').trim().toLowerCase();
    var beerAnswer = 'ipa';
    console.log('guessed beer: ', beerGuess);

    var beerP = document.getElementById('beer-response');

    if(beerGuess === beerAnswer || beerGuess === 'india pale ale'){
        beerP.textContent = 'Nailed it!! I love a good IPA any time of year!';
    }
    else {
        beerP.textContent = 'BEEEEP!!! Try again!';
    }
}

//yes/no questions
//Question1
var scoreCount = 0;

function hobbyPrompt(){
    
    var hobbyGuess = prompt('I\'m afraid of heights, but rock climbing my favorite hobby!!' + 'Am I lying?').trim().toLowerCase();
    var hobbyAnswer = 'yes';
    console.log('guessed: ', hobbyGuess);
    
    var hobbyP = document.getElementById('hobby-response');
    
    if(hobbyGuess === hobbyAnswer || hobbyGuess === 'y'){
        hobbyP.textContent = 'THAT\'S RIGHT!! Although it terrifies me, I love it!';
        scoreCount++;
        document.getElementById('score').innerHTML = scoreCount + '/5';

    }
    else {
        hobbyP.textContent = 'Sorry, try again.....';
    }
}

//Question2..
function progPrompt(){

    var progGuess = prompt('Although I\'m in this beginning bootcamp, I\'m an experienced programmer.' + 'Am I lying?').trim().toLowerCase();
    var progAnswer = 'yes';
    console.log('guessed: ', progGuess);

    var progP = document.getElementById('prog-response');

    if(progGuess === progAnswer || progGuess === 'y'){
        progP.textContent = 'That\'s right, I LIED!!! MWUAHAHAH. Good job catching me.';
        scoreCount++;
        document.getElementById('score').innerHTML = scoreCount + '/5';

    }
    else {
        progP.textContent = 'Sorry, try again.....';
    }
}

//Question3..
function gamePrompt(){

    var gameGuess = prompt('Like the common favorite of the Elderly, I love the came of Cribbage!' + 'Am I lying?').trim().toLowerCase();
    var gameAnswer = 'no';
    console.log('guessed: ', gameGuess);

    var gameP = document.getElementById('game-response');

    if(gameGuess === gameAnswer || gameGuess === 'n'){
        gameP.textContent = 'Yes, it\'s true! I would play cribbage ANY time!';
        scoreCount++;
        document.getElementById('score').innerHTML = scoreCount + '/5';

    }
    else {
        gameP.textContent = 'Sorry, try again.....';
    }
}

//Question4..
function broPrompt(){

    var broGuess = prompt('I grew up always being 1 half of another. I have a twin brother! ' + 'Am i lying?').trim().toLowerCase();
    var broAnswer = 'no';
    console.log('guessed: ', broGuess);

    var broP = document.getElementById('bro-response');

    if(broGuess === broAnswer || broGuess === 'n'){
        broP.textContent = 'It\'s true! I have a twin brother who is two minutes younger than me!';
        scoreCount++;
        document.getElementById('score').innerHTML = scoreCount + '/5';

    }
    else {
        broP.textContent = 'Sorry, try again....';
    }
}

//Question5..
function opalPrompt(){

    var opalGuess = prompt('For the las two years, I lived in a cabin in the woods! ' + 'Am i lying?').trim().toLowerCase();
    var opalAnswer = 'no';
    console.log('guessed: ', opalGuess);

    var opalP = document.getElementById('opal-response');

    if(opalGuess === opalAnswer || opalGuess === 'n'){
        opalP.textContent = 'I\'m not lying! I lived in Opal Creek Ancient Forest, cooking for visitors for two years!';
        scoreCount ++;
        document.getElementById('score').innerHTML = scoreCount + '/5';
    }
    else {
        opalP.textContent = 'Sorry, try again....';
    }
}