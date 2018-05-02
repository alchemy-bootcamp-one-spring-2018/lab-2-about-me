'use strict';

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function generateQuiz(questions, quizContainer) {
    
    function showQuestions(questions, quizContainer) {
    
        }

    var output = [];
    var answers;
 

    for(var i=0; i<questions.length; i++) {
        answers = [];

        for(letter in questions[i].answers){

            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
            + '</label>'
        );
    }
    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
}
    quizContainer.innerHTML = output.join('');
}


var myQuestions = [
    {
        question: "Would I rather ",
        answers: { 
            a: 'Pet one dirty, stray cat',
            b: 'OR cuddle 10 freshly washed puppies'
        },
        correctAnswer: 'a'
    },

    {
        question: "Would I rather",
        answers: { 
            a: 'Wear a Tump MAGA hat',
            b: 'OR eat my hat'
        },
        correctAnswer: 'b'
    },
    {
        question: "Would I rather ",
        answers: { 
            a: 'Eat spaghetti in the bathtup',
            b: 'OR eat hone baked ham on the Hoover Dam'
        },
        correctAnswer: 'a'
    }
];


function showQuestions(questions, quizContainer) {
    var output = []
    var answers;

    for(var i=0; i<questions.length; i++) {
        answers = [];
    }
}

   


