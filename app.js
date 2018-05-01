function guessMyName() {
    var answer = prompt('Guess my name?');
    console.log('user guessed', answer);

    var p = document.getElementById('my-name-response');

    if(answer.trim().toLowerCase() === 'marty') {
        p.textContent = 'You\'re right! My name is Marty';
    }
    else {
        p.textContent = 'Sorry, not my name. Try again';
    }
}