/* exported yesNoGame, guessMyHomeState */

'use strict';

/*Game 1: Yes/No*/
var score = 0;

//function asks 5 questions looking for the correct yes/no response. Total correct guesses given at the end.
function yesNoGame() {
    //Question 1
    var answer = prompt('Do I like to go to Disneyland?');
    console.log('user guessed', answer);

    var p = document.getElementById('disneyland-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 2
    var answer = prompt('Do I like French Toast?');
    console.log('user guessed', answer);

    var p = document.getElementById('french-toast-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 3
    var answer = prompt('Did I live in Germany?');
    console.log('user guessed', answer);

    var p = document.getElementById('germany-response');

    if(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes' || answer.trim().toUpperCase() === 'Y' || answer.trim().toUpperCase() === 'YES'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 4
    var answer = prompt('Am I a good swimmer?');
    console.log('user guessed', answer);

    var p = document.getElementById('swimmer-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //Question 5
    var answer = prompt('Do I eat my vegetables?');
    console.log('user guessed', answer);

    var p = document.getElementById('my-vegetables-response');

    if(answer.trim().toLowerCase() === 'n' || answer.trim().toLowerCase() === 'no' || answer.trim().toUpperCase() === 'N' || answer.trim().toUpperCase() === 'NO'){
        p.textContent = 'You got it!';
        score ++;
    }
    else {
        p.textContent = 'Sorry, that is incorrect.';
        score += 0;
    }

    //SCORE KEEPER
    var finalScore = document.getElementById('final-score');
    finalScore.textContent = 'Your final score was ' + score + '/5.';
   
}

/*Game 2: Guess the Answer*/ 
var remainingGuesses = 3;

//function asks user a question and allows 3 guesses to get it correct
function guessMyHomeState() {
    
    var p = document.getElementById('my-home-state-response');

    for(var i = 1; i < 4; i++) {
        //console.log('for loop started');  --> bug test

        var answer = prompt('Where am I from?');
        console.log('user guessed', answer);

        if(answer.trim().toLowerCase() === 'michigan'){
            alert('You got it! GO BLUE!!');
            p.textContent = 'You got it right. I am from Michigan.';
        break;
        }
        else {
            remainingGuesses--;
            if (remainingGuesses < 2) {
                var guess = ' guess';
            }
            else {
                guess = ' guesses'
            }
            alert('I\'m sorry that is not correct. You have ' + remainingGuesses + guess + ' remaining.');
            p.textContent = 'You did not complete the game. Try again (Hint: What do you wear on your hands to stay warm in winter?';
        }
    }
  
    
}


/*Game 3: Input*/

