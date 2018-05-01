'use strict';


// Game One - Yes or No answers
// eslint-disable-next-line
function gameOne(){
    console.log('beginning of Game One');
}

 /* Confirm - question #3
 var seasonToGo = confirm("My favorite time to visit " + placeToGo + " is the Fall. Do you like to visit " + placeToGo + ' in the Fall?');
 if(seasonToGo) {
 alert('Oh! Cool, ' + userName + ' Fall is my favorite time to visit ' + placeToGo + ' too!');
     console.log(userName +' prefers to visit in the Fall');
 }
 else {
     alert('Well ' + userName + ', you should try to visit in the Fall. ' + placeToGo + ' is gorgeous in the Fall');
     console.log(userName +' prefers to NOT to visit in the Fall.');
 }
 */

//Does Mark like Dogs better than Cats.

//Does Mark like Star Wars?

//Has Mark ever worked at McDonald's

//Does Mark drink a crapload of Coffee?

//Would Mark like Sushi for lunch?



// Game Two - Five Guesses
var totalGuesses = 5;
var actualGuesses = 0;
var remainingGuesses = totalGuesses - actualGuesses;
var userGuess; // this will be for the value the user enters to the prompt
var answer = false; //this triggers the break when true.
var message; //this stores the HTML that is inserted into the empty div on index.html

function gameTwo(){
    console.log('beginning of Game Two');
    userGuess = prompt('In which East Coast state was Mark born?');
    
    for(actualGuesses = 1; actualGuesses < 5; actualGuesses ++){
        if(userGuess.toLowerCase() === 'new jersey' || userGuess.toLowerCase() === 'nj'){
            
            alert('Great job! You guessed Right! And it only took ' + actualGuesses + ' tries!');
            message = ('<p>You guessed right! Mark was born in New Jersey! You guessed in only ' + actualGuesses + ' tries!</p>');
            
            answer = true;
            break;
        } else {
            remainingGuesses = totalGuesses - actualGuesses;
            userGuess = prompt('Sorry, that\'s not correct. Please Guess again. You have ' + remainingGuesses + ' left.');
        }
    }
    //console log results from Game Two
    if(answer === true && actualGuesses < 3) {
        console.log('Mark was born in New Jersey. User Correctly guessed this in  ' + actualGuesses + ' tries.'); 
    } else {
        console.log('Mark was born in New Jersey. User took 5 guesses, but did not guess this correctly.');
    }
}

