'use strict';


var quiz = [
    'Are you a citizen?',
    'Do you have loyalty to the human race?',
    'You see a turtle lying on its back in the hot sun, do you flip it over?',
    'There is am illegal replicant living next door to you, do you turn it in to the authorities?',
    'Do you approve of the Tyrell Corp. leadership?'
];


// eslint-disable-next-line
function reportReplicant() {
    var answer = prompt('Knowledge of Replicant: Verification Required. What model is the subject?');
    console.log('user guessed', answer);

    var p = document.getElementById('report-response');

    if(answer.trim().toLowerCase() === 'nexus 6') {
        p.textContent = 'Model Confirmed';
        var answer2 = prompt('Which planet colony was the subject assigned to?');
        console.log('user guessed', answer2);
        var p = document.getElementById('report-response');

        if(answer2.trim().toLowerCase() === 'titan') {
            p.textContent = 'Planet Confirmed';
            var answer3 = prompt('What is the name of the replicant para-military faction?');
            console.log('user guessed', answer3);
            var p = document.getElementById('report-response');

            if(answer3.trim().toLowerCase() === 'arm of titan') {
                p.textContent = 'Faction Confirmed';
                var answer4 = prompt('What is the name of the replicant martyr honored by this faction');
                console.log('user guessed', answer4);
                var p = document.getElementById('report-response');

                if(answer4.trim().toLowerCase() === 'roy batty') {
                    p.textContent = 'Martyr Confirmed';
                    var p = document.getElementById('report-response');
                    p.textContent = ' 4 of 4 correct. User faction knowledge sufficient. Proceed to Update.';
                }
                else {
                    p.textContent = 'Incorrect Input, 3 of 4 correct. User tagged for inspection.';
                }
            }
            else {
                p.textContent = 'Incorrect Input, 2 of 4 correct. User tagged for inspection.';
            }
        }
        else {
            p.textContent = 'Incorrect Input, 1 of 4 correct. User tagged for inspection.';
        }
    }
    else {
        p.textContent = 'Incorrect Input, 0 of 4 correct. User tagged for inspection.';
    }
}
// eslint-disable-next-line
function factionLocation() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction cannot be at this location. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation2() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction cannot be at this location. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation3() {
    var p = document.getElementById('location-response');
    p.textContent = 'Current telemetry indicates Arm of Titan faction cannot be at this location. User tagged for inspection.';
}
// eslint-disable-next-line
function factionLocation4() {
    var p = document.getElementById('location-response');
    p.textContent = 'POSSIBLE LOCATION RECORDED';
    alert('THANK YOU CITIZEN');
}


function connect() {
    for(var i = 0; i < 5; i++) {
        var test = confirm(quiz[i]);
        if(test !== true){
            alert('ANSWER NOT APPROVED');
            i = 10;}

    }
}
connect();