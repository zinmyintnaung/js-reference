/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});


// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    // Validate the input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if winning number
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct! YOU WIN!`)
    }else{
        // Wrong number
        guessesLeft = guessesLeft - 1;
        // Check if any guess left
        if(guessesLeft === 0){
            // Game over, say you lost
            gameOver(false, `Game Over! YOU LOST! The correct number was ${winningNum}`);
        }else{
            // Game continues - answer wrong
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
            //Clear the input
            guessInput.value = '';
        }
    }

});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg, color);

    // Playing Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    
    return Math.floor(Math.random() * (max-min+1)+min);
}