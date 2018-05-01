'use strict';

var userName = prompt('Hi there and welcome! What\'s your name?');
console.log('user\'s name is', userName);
alert('Pleased to meet you, ' + userName + '! Please take a moment to read about me on the page below and play some fun games!');


function questionnaire() {
    var question1 = prompt('Have you read the text?').trim().toLowerCase();
    
    if(question1 === 'yes' || question1 === 'y') {

        confirm('Great! On to some questions!');

    }
    else {

        confirm('You better get to it then');
    }

    var question2 = prompt('Did I attend university in Lebanon?').trim().toLowerCase();

    if(question2 === 'yes' || question2 === 'y') {

        confirm('Correct! Next question!');

    }
    else {

        confirm('Wrong! How unfortunate!');
    }

    var question3 = prompt('Have I worked in more than 5 fields?').trim().toLowerCase();

    if(question3 === 'yes' || question3 === 'y') {

        confirm('Correct! Next question!')

    }
    else {

        confirm('Wrong! Might want to review real quick :P');
    }

    var question4 = prompt('Do I have an undergraduate degree in Physics?').trim().toLowerCase();

    if(question4 === 'no' || question4 === 'n') {

        confirm('Correct! Next question!');

    }
    else {

        confirm('Wrong! Do better!');
    }

    var question5 = prompt('Have I ever worked in a science-related field?').trim().toLowerCase();

    if(question5 === 'no' || question5 === 'n') {

        confirm('Correct! Well done!!');

    }
    else {

        confirm('Wrong! Are you new to reading?');
    }


}
