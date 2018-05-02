'use strict';

var quiz = [
    'Are you a citizen?',
    'Do you have loyalty to the human race?',
    'You see a turtle lying on its back in the hot sun, do you flip it over?',
    'There is an illegal replicant living next door to you, do you turn it in to the authorities?',
    'Do you approve of the Tyrell Corp. leadership?'
];

function connect() {
    for(var i = 0; i < 5; i++) {
        var test = confirm(quiz[i]);
        if(test !== true){
            alert('ANSWER NOT APPROVED');
            i = 10;}

    }
}
connect();
// eslint-disable-next-line
function reportReplicant() {
    var answer = prompt('Knowledge of Replicant: Verification Required. What model is the subject?');
    console.log('user guessed', answer);
    var p = document.getElementById('report-response');

    if(answer.trim().toLowerCase() === 'nexus 6') {
        answer = 1;
        var answer2 = prompt('Which planet colony was the subject assigned to?');
        console.log('user guessed', answer2);
        var p = document.getElementById('report-response');

        if(answer2.trim().toLowerCase() === 'titan') {
            answer = 2;
            var answer3 = prompt('What is the name of the replicant para-military faction?');
            console.log('user guessed', answer3);
            var p = document.getElementById('report-response');

            if(answer3.trim().toLowerCase() === 'arm of titan') {
                answer = 3;
                var answer4 = prompt('What is the name of the replicant martyr honored by this faction');
                console.log('user guessed', answer4);
                var p = document.getElementById('report-response');

                if(answer4.trim().toLowerCase() === 'roy batty') {
                    answer = 4;
                    var answer5 = prompt('What sector was the replicant last seen near?');
                    console.log('user guessed', answer5);
                    var p = document.getElementById('report-response');
                    
                    if(answer5.trim().toLowerCase() === 'ceres') {
                        answer = 5;
                        p.textContent = ('Total Evaluation: ' + answer + '/5' + ' (' + Math.floor((answer / 5) * 100) + '%)');
                    }
                }
                else {
                    p.textContent = ('INCORRECT INPUT: ' + answer + '/5' + ' (' + Math.floor((answer / 5) * 100) + '%)');
                }
            }
            else {
                p.textContent = ('INCORRECT INPUT: ' + answer + '/5' + ' (' + Math.floor((answer / 5) * 100) + '%)');
            }
        }
        else {
            p.textContent = ('INCORRECT INPUT: ' + answer + '/5' + ' (' + Math.floor((answer / 5) * 100) + '%)');
        }        
    }
    else {
        p.textContent = ('INCORRECT INPUT: ' + answer + '/5' + ' (' + Math.floor((answer / 5) * 100) + '%)');   
    }
}
// eslint-disable-next-line
function factionLocation() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction is not on Titan. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation2() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction is not on Sirius. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation3() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction is not on Europa. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation4() {
    var p = document.getElementById('location-response');
    p.textContent = 'POSSIBLE LOCATION RECORDED';
    alert('THANK YOU CITIZEN');
}