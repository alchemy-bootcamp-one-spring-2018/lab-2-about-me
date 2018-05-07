/* exported quizOne, quizTwo, quizColor palindromeCheck */
'use strict';
//  Global variables
const answersTwo = [['fargo', 'fargo, nd'], 'system of a down', 'tom waits', 'diphthong', ['the ocean', 'ocean']];
const questionsTwo = ['What is my birth city?', 'What is my favorite band?', 'Who is my fvorite artist?', 'What is my favorite word?', 'What is my favorite smell?'];
const questionsOne = ['My name ends with a "k".', 'I was born in North Dakota.', 'My obsession is music.', 'I have 2 middle names.', 'I\'m running Linux on my laptop.'];
/* eslint-disable-next-line */
var name = '';
var results = 0;
var userAnswersOne = [];
var userAnswersTwo = [];

// document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 27) {
//         console.log(results);
//         tallyResults(results);
//     }
// };


//  Goes to top of page
var toTop = function() {
//    window.location.href = '#top';
    scroll(0, 0);
    console.log('it works!');
};

//  Ask user for their name
if(name === '') {
    while(name === '' || name === null) {
        /* eslint-disable-next-line */
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
    bio.style.visibility = 'hidden';
    console.log('Bio is hidden');

    //  Delay prompts so visibility stuff can be updated
    setTimeout(function() {
        //  Ask questions
        for(var i = 0; i < 5; i++) {
            askQuestionsOne(i);

            //  Log their answer result
            console.log(userAnswersOne[i]);
        }

        //  Check the results
        results = 0;
        for(var j = 0; j < 5; j++) {
            if(checkResultsOne(j)) {
                results++;
            }
        }

        //  Tally up them results!
        tallyResults(results);
    }, 100);
};

//  Quiz 2
var quizTwo = function() {
    //  Reset results message if there is one
    var message = document.getElementById('message');
    message.innerHTML = '';

    //  Hide bio info
    var bio = document.getElementById('main');
    bio.style.visibility = 'hidden';
    console.log('Bio is hidden');

    //  Delay prompts so visibility stuff can be updated
    setTimeout(function() {

        //  Ask questions
        for(var i = 0; i < 5; i++) {
            askQuestionsTwo(i);

            //  Log their answer result
            console.log(userAnswersTwo[i]);
        }

        //  Check results
        results = 0;
        for(var k = 0; k < 5; k++) {
            console.log(checkResultsTwo(k));
            if(checkResultsTwo(k)) {
                results++;
            }
        }

        //  Tally up them results!
        tallyResults(results);
    }, 100);
};

//  Ask questions for quiz 1
var askQuestionsOne = function(index) {
    userAnswersOne[index] = prompt(questionsOne[index]);
    if(userAnswersOne[index] === null || userAnswersOne[index] === undefined) {
        userAnswersOne[index] = '';
        console.log('it is null : ', results);
        return;
    }
    userAnswersOne[index] = userAnswersOne[index].trim().toLocaleLowerCase();
};

//  Check results for quiz 1
var checkResultsOne = function(index) {
    if(userAnswersOne[index] === 'y' || userAnswersOne[index] === 'yes') {
        return true;
    } else {
        return false;
    }
};

//  Ask questions for quiz 2
var askQuestionsTwo = function(index) {
    for(var j = 0; j < 3; j++) {
        userAnswersTwo[index] = prompt(questionsTwo[index]);
        if(userAnswersTwo[index] === null || userAnswersTwo[index] === undefined) {
            userAnswersTwo[index] = '';
            console.log('it is null : ', results);
            return;
        }
        userAnswersTwo[index] = userAnswersTwo[index].trim().toLocaleLowerCase();

        //  Check if answer is correct, if it is, break out of this for loop
        if(index === 0 || index === 4) {
            if(userAnswersTwo[index] === answersTwo[index][0] || userAnswersTwo[index] === answersTwo[index][1]) {
                alert('Correct!');
                break;
            }
        } else {
            if(userAnswersTwo[index] === answersTwo[index]) {
                alert('Correct!');
                break;
            }
        }
        if(j === 1) {
            alert('Incorrect answer! You have 1 attempt left');
        } else {
            alert('Incorrect answer! You have ' + (3 - (j + 1)) + ' attempts left.');
        }
    }
};

//  Check results for quiz 2
var checkResultsTwo = function(index) {

    //  Return false ifthey left it blank
    if(userAnswersTwo === null) {
        return false;
    }

    if(index === 0 || index === 4) {
        if(userAnswersTwo[index] === answersTwo[index][0] || userAnswersTwo[index] === answersTwo[index][1]) {
            return true;
        }
    } else {
        if(userAnswersTwo[index] === answersTwo[index]) {
            return true;
        }
    }
    return false;
};

//  Tally the result and display message
var tallyResults = function(res) {
    var message = document.getElementById('message');

    //  Show the results
    if(res === 5) {
        message.innerHTML = '<h1>Congratulations <span class="title">' + name + '</span>!<br>You scored <span class="shine">100%!!!</span></h1>';
        toTop();
    } else {
        alert('You scored ' + res + ' out of 5. I think you can do better than that ' + name + '...');
        message.innerHTML = '<h1 class="fail">FAILURE!!!</h1>';
        toTop();
    }

    // Show the bio again
    var bio = document.getElementById('main');
    bio.style.visibility = 'visible';
};

//  Guess my favorite color
var attempts = 0;
var quizColor = function() {
    //  Grab some elements
    var output = document.getElementById('message');
    var colorBox = document.getElementById('color-box');
    var color = colorBox.value.trim().toLocaleLowerCase();

    console.log(attempts);
    console.log(color);

    //  Check ifthey can take this quiz
    if(attempts === 99) {
        output.innerHTML = '<h1 class="fail">YOU ALREADY GOT IT CORRECT!!!<br>MOVE ON!</h1> ';
        toTop();
        return;
    } else if(attempts > 4) {
        output.innerHTML = '<h1 class="fail">You guessed too many times.<br>Refresh page to try again.</h1>';
        toTop();
        return;
    }

    //  Check their guess
    if(color === 'green') {
        alert('Incorrect. You have ' + (5 - (attempts + 1)) + ' remaining.');
        output.innerHTML = '<h1 class="color-answer">Green yes, but which kind?</h1>';
        toTop();
    } else if(color === 'forestgreen') {
        output.innerHTML = '<h1 class="correct">CORRECT!!!</h1>';
        attempts = 99;
        toTop();
        return;
    } else {
        alert('Incorrect. You have ' + (5 - (attempts + 1)) + ' remaining.');
        output.innerHTML = '<h1 class="fail">Not even close...</h1>';
        toTop();
    }

    attempts++;
};

//  Check palindrome
var palindromeCheck = function() {
    var wordElement = document.getElementById('palindrome');
    var regExp = /[^a-zA-Z]+/;
    var word = wordElement.value;
    var checkWord = word.trim().replace(regExp, '');
    console.log(word);
    if(word === '' || word.length !== checkWord.length) {
        alert('Please enter a valid "word" to check.');
        return;
    }
    var newWord = word.trim().toLocaleLowerCase();
    console.log(word.split('').reverse().join(''));
    if(newWord === newWord.split('').reverse().join('')) {
        alert('Congratulations ' + name + '! It looks like "' + word + '" is a palindrome! Also, it contains ' + word.split('').length + ' characters.');
    } else {
        alert('Hey ' + name + '! It looks like "' + word + '" is not a palindrome. It\'s reverse is "' + word.split('').reverse().join('') + '" and it contains ' + word.split('').length + ' characters.');
    }
};
