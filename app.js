'use strict';
/* exported startMe hobbyPrompt progPrompt gamePrompt broPrompt opalPrompt nameSubmit nameReverse*/

//name letter counter
function nameSubmit(){
    var nameInput = document.getElementById('name-input').value;
    console.log('user name: ', nameInput);
    var nResponse = document.getElementById('name-response');
    nResponse.textContent = 'Hey ' + nameInput + ' did you know you name has ' + nameInput.length + ' letters in it?';

}
//name revers button
function nameReverse(){
    var nameInput = document.getElementById('name-input').value;
    var nResponse = document.getElementById('name-response');
    console.log('name is :', nameInput);

    var splitLetters = nameInput.split('');
    console.log(splitLetters);

    var reverseLetters = splitLetters.reverse();
    console.log(reverseLetters);

    var joinLetters = reverseLetters.join('');

    nResponse.textContent = 'Reversed Name is: ' + joinLetters;
}
//start button
function startMe(){
    alert('GAME TIME!!!');
    console.log('User is ready to play!');
    var tries = 5;
    while(tries > 0){
        var qOne = prompt('Can you guess my name? I\'ll give you a hint: I share it with a famous explorer').trim().toLowerCase();
        var name = 'chris';
        if(qOne === name || qOne === 'christopher'){

            confirm('You guessed it! Onto the next one!');
            break;
        }
        else {
            tries--;
            confirm('BEEEP!!!! WRONG!!! you have ' + tries + ' attempts left...');
        }
    }
    while(tries > 0){
        var qTwo = prompt('Guess Which city I live in! Hint: It\'s the city of Roses!').trim().toLowerCase();
        var city = 'portland';
        if(qTwo === city || qTwo === 'pdx'){

            confirm('YUP!!! While I now live in portland, I grew up in the desert of Tucson, AZ.. Onto the next one!');
            break;
        }
        else {
            tries--;
            confirm('BEEEP!!!! WRONG!!! you have ' + tries + ' attempts left...');
        }
    }
    while(tries > 0){
        var qThree = prompt('Let\'s see if you can guess my beer of choice. Hint: It\'s one of the most HOPPY').trim().toLowerCase();
        var beer = 'india pale ale';
        if(qThree === beer || qThree === 'ipa'){

            confirm('That\'s RIGHT! I love me a good IPA, any day!');
            alert('You got them all right! Good job!');
            break;
        }
        else {
            tries--;
            confirm('BEEEP!!!! WRONG!!! you have ' + tries + ' attempts left...');
        }
    }
}

//yes/no questions
//Question1
var scoreCount = 0;

function hobbyPrompt(){

    var hobbyGuess = prompt('I\'m afraid of heights, but rock climbing my favorite hobby!!' + 'Am I telling the truth?').trim().toLowerCase();
    var hobbyAnswer = 'yes';
    console.log('guessed: ', hobbyGuess);

    var hobbyP = document.getElementById('hobby-response');

    if(hobbyGuess === hobbyAnswer || hobbyGuess === 'y'){
        hobbyP.textContent = 'THAT\'S RIGHT!! Although it terrifies me, I love it!';
        if(scoreCount === 5){
            document.getElementById('score').innerHTML = '5/5';
        }
        else {
            scoreCount++;
            console.log('score is now: ', scoreCount);
            document.getElementById('score').innerHTML = scoreCount + '/5';
        }
    }
    else {
        hobbyP.textContent = 'Sorry, try again.....';
    }
}

//Question2..
function progPrompt(){

    var progGuess = prompt('Although I\'m in this beginning boot camp, I\'m an experienced programmer.' + 'Am I lying?').trim().toLowerCase();
    var progAnswer = 'yes';

    console.log('guessed: ', progGuess);
    var progP = document.getElementById('prog-response');
    if(progGuess === progAnswer || progGuess === 'y'){
        progP.textContent = 'That\'s right, I LIED!!! MWUAHAHAH. Good job catching me.';
        if(scoreCount === 5){
            document.getElementById('score').innerHTML = '5/5';
        }
        else {
            scoreCount++;
            console.log('score is now: ', scoreCount);
            document.getElementById('score').innerHTML = scoreCount + '/5';
        }

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
        if(scoreCount === 5){
            document.getElementById('score').innerHTML = '5/5';
        }
        else {
            scoreCount++;
            console.log('score is now: ', scoreCount);
            document.getElementById('score').innerHTML = scoreCount + '/5';
        }

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
        if(scoreCount === 5){
            document.getElementById('score').innerHTML = '5/5';
        }
        else {
            scoreCount++;
            console.log('score is now: ', scoreCount);
            document.getElementById('score').innerHTML = scoreCount + '/5';
        }

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
        if(scoreCount === 5){
            document.getElementById('score').innerHTML = '5/5';
        }
        else {
            scoreCount++;
            console.log('score is now: ', scoreCount);
            document.getElementById('score').innerHTML = scoreCount + '/5';
        }
    }
    else {
        opalP.textContent = 'Sorry, try again....';
    }
}