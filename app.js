//eslint-disable-next-line
function isMyName() {
    var answer = prompt('Is my name Marty?');
    console.log('user guessed', answer);
    var p = document.getElementById('my-name-response');

    if(answer.trim().toLowerCase() === 'marty')
        p.textContent = "You\'re right! My name is Marty";
    }
    else {
        p.textContent = "Sorry, not my name. Try again.";
    }

function catLover() {
    var p = document.getElementById('cat-lover-response');
    p.textContent = 'Of course, everyone likes cats!';
}

}