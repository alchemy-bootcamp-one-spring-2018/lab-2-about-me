function guessMyAnimal() {
    // this is where we will write a response to the user; reset it to blank.
    var p = document.getElementById('animal-answer');
    p.textContent = '';
    // get the user's guess
    var guess = prompt ('What is my favorite kind of animal?\nHint: They are llarge and llovely.', 'hedgehog?');
    // let the user know if they are correct.
    if(guess === null || guess.trim === '')
    {
        p.textContent = ('Ok, you don\'t have to play.');
    } else if(guess.toLowerCase === 'llama' || guess.toLowerCase === 'llamas'){
        p.textContent = ('You are correct!  I llove llamas.');
    } else {
        p.textContent = ('No, sorry.  I llove llamas.');
    }
}