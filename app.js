/* exported quizOne, quizTwo */
'use strict';
//  Global variables
const answersTwo = [['fargo', 'fargo, nd'], 'system of a down', 'tom waits', 'diphthong', ['the ocean', 'ocean']];
const questionsTwo = ['What is my birth city?', 'What is my favorite band?', 'Who is my fvorite artist?', 'What is my favorite word?', 'What is my favorite smell?'];
const questionsOne = ['My name ends with a "k".', 'I was born in North Dakota.', 'My obsession is music.', 'I have 2 middle names.', 'I\'m running Linux on my laptop.'];
var name = "";
var userAnswersOne = [];
var userAnswersTwo = [];

//  Ask user for their name
if (name === "") {
    while (name === "" || name === null) {
        name = prompt('Hello friend. What is your name?');
    }
}
console.log('Their name is ' + name);

//  Quiz 1
var quizOne = function() {
    //  Notify of instructions
    alert('Please type "y" or "yes" for true, and "n" or "no" for false.');

    //  Reset results message if there is one
    var message = document.getElementById('message');
    message.innerHTML = '';

    //  Hide bio info
    var bio = document.getElementById('main');
    bio.style.visibility = "hidden";
    console.log('Bio is hidden');

    //  Delay prompts so visibility stuff can be updated
    setTimeout(function() {
        //  Ask questions
        for (var i = 0; i < 5; i++) {
            askQuestionsOne(i);
            
            //  Log their answer result
            console.log(userAnswersOne[i]);
        }

        //  Check the results
        var results = 0;
        for (var i = 0; i < 5; i++) {
            if (checkResultsOne(i)) {
                results++;
            }
        }

        //  Tally up them results!
        tallyResults(results);
    }, 100);
}

//  Quiz 2
var quizTwo = function() {
    //  Reset results message if there is one
    var message = document.getElementById('message');
    message.innerHTML = '';

    //  Hide bio info
    var bio = document.getElementById('main');
    bio.style.visibility = "hidden";
    console.log('Bio is hidden');

    //  Delay prompts so visibility stuff can be updated
    setTimeout(function() {

        //  Ask questions
        for (var i = 0; i < 5; i++) {
            askQuestionsTwo(i);
            
            //  Log their answer result
            console.log(userAnswersTwo[i]);
        }

        //  Check results
        var results = 0;
        for (var i = 0; i < 5; i++) {
            console.log(checkResultsTwo(i));
            if (checkResultsTwo(i)) {
                results++;
            }
        }

        //  Tally up them results!
        tallyResults(results);
    }, 100);
}

//  Ask questions for quiz 1
var askQuestionsOne = function(index) {
    userAnswersOne[index] = prompt(questionsOne[index]);
    userAnswersOne[index] = userAnswersOne[index].trim().toLocaleLowerCase();
}

//  Check results for quiz 1
var checkResultsOne = function(index) {
    if (userAnswersOne[index] === 'y' || userAnswersOne[index] === 'yes') {
        return true;
    } else {
        return false;
    }
}

//  Ask questions for quiz 2
var askQuestionsTwo = function(index) {
    for (var j = 0; j < 3; j++) {
        userAnswersTwo[index] = prompt(questionsTwo[index]);
        userAnswersTwo[index] = userAnswersTwo[index].trim().toLocaleLowerCase();
        
        //  Check if answer is correct, if it is, break out of this for loop
        if (index === 0 || index === 4) {
            if (userAnswersTwo[index] === answersTwo[index][0] || userAnswersTwo[index] === answersTwo[index][1]) {
                alert('Correct!');
                break;
            }
        } else {
            if (userAnswersTwo[index] === answersTwo[index]) {
                alert('Correct!');
                break;
            }
        }
        if (j == 1) {
            alert('Incorrect answer! You have 1 attempt left');
        } else {
            alert('Incorrect answer! You have ' + (3 - (j + 1)) + ' attempts left.');
        }
    }
}

//  Check results for quiz 2
var checkResultsTwo = function(index) {

    //  Return false if they left it blank
    if (userAnswersTwo === null) {
        return false;
    }

    if (index === 0 || index === 4) {
        if (userAnswersTwo[index] === answersTwo[index][0] || userAnswersTwo[index] === answersTwo[index][1]) {
            return true;
        }
    } else {
        if (userAnswersTwo[index] === answersTwo[index]) {
            return true;
        }
    }
    return false;
}

//  Tally the result and display message
var tallyResults = function(res) {
    var message = document.getElementById('message');

    //  Show the results
    if (res === 5) {
        message.innerHTML = '<h1>Congratulations <span class="title">' + name + '</span>!<br>You scored <span class="shine">100%!!!</span></h1>'        
    } else {
        alert('You scored ' + res + ' out of 5. I think you can do better than that ' + name + '...');
        message.innerHTML = '<h1 class="fail">FAILURE!!!</h1>';
    }

    // Show the bio again
    var bio = document.getElementById('main');
    bio.style.visibility = "visible";
}