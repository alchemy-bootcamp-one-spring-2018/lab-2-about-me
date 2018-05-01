function guessYesNo(){
    var i = 0;

    var mexicoAnswer = prompt('Do you think I\'ve been to Mexico?').trim().toLowerCase();
    console.log('user guessed', mexicoAnswer);
    if(mexicoAnswer === 'yes' || mexicoAnswer === 'y'){
        alert('You\'re right! I have been to Mexico!');
        i++;
    } else {
        alert('Sorry, but I have been to Mexico and if you haven\'t then you should!');
    }

    var broccoliAnswer = prompt('Is broccoli my favorite vegetable?').trim().toLowerCase();
    console.log('user guessed', broccoliAnswer);
    if(broccoliAnswer === 'yes' || broccoliAnswer === 'y'){
        alert('Right again! I love broccoli!');
        i++
    } else {
        alert('Nope, broccoli definitely is my favorite vegetable!');
    }

    var driveAnswer = prompt('Do you think I like to drive?').trim().toLowerCase();
    console.log('user guessed', driveAnswer);
    if(driveAnswer === 'no' || driveAnswer === 'n'){
        alert("Correct! Driving is the worst!");
        i++;
    } else {
        alert("Incorrect! Driving is the worst!")
    }

    var petAnswer = prompt('Do I have any pets?').trim().toLowerCase();
    console.log('user guessed', petAnswer);
    if(petAnswer === 'no' || petAnswer === 'n'){
        alert('Correct! Although I love pets, I have none of my own.');
        i++;
    } else {
        alert('Wrong! Even though I love pets, I have none of my own!');
    }

    var codeAnswer = prompt('Do I know how to code?').trim().toLowerCase();
    console.log('user guessed', codeAnswer);
    if(codeAnswer === 'yes' || codeAnswer === 'y'){
        alert('I sure hope so!');
        i++;
    } else{
        alert('How do you think I made this?!');
    }

    p.textContent = 'You got ' + i + ' questions right! Good job!';
}

var p = document.getElementById('yes-no-response');


function lastName(){

    var lastNameQ = prompt('What is my last name?');
    console.log('user guessed', lastNameQ);
    if(lastNameQ === 'Thompson'){
        alert('You are a stalker');
    } else {
        alert('Nope! Keep trying');
    }
    var p = document.getElementById('last-name-response');
    p.textContent = 'Seriously. Huge stalker.';
}