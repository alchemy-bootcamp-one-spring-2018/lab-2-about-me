/* exported catLover, myQuestions, generateQuiz, showQuestions, show results */

'use strict';

function catLover() {
    var p = document.getElementById('cat-lover-response');
    p.textContent = 'yep';
    console.log('user guessed', p);
}

function 
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
            a: 'Eat spaghetti in the bathtub==',
            b: 'OR eat hone baked ham on the Hoover Dam'
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;

        for(var i = 0; i < questions.length; i++) {
        
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
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


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i = 0; i < questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i +']:checked')||{}).value;
        
            // if correct
            if(userAnswer === questions[i].correctAnswer){
            // add points
                numCorrect++;
            
                answerContainers[i].style.color = 'blue';
            }
            // if wrong or empty
            else {
                answerContainers[i].style.color = 'red';
            }
        }

        // number points out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // for now show questions right away FIX LATER
    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    };

    

    
}





