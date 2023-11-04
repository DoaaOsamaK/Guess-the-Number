const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessSubmit = document.getElementById('guessSubmit');
const guessInput = document.getElementById('guessInput');
const message = document.querySelector('.message');

let attempts = 0;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessInput.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Try a higher number.';
    } else {
        message.textContent = 'Try a lower number.';
    }
}
