/* 
GAME FUNCTION:
* PLAYER MUST GUESS A NUMBER BETWEEN MIN & MAX
* PLAYER GET A CERTAIN AMOUNT OF GUESSES
* NOTIFY PLAYER OF GUESSES REMAINING
* NOTIFY THE PLAYER OF THE CORRECT ANSWER IF LOOSE
* LET PLAYER CHOOSE TO PLAY AGAIN
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validate
  if ( isNaN(guess) || guess < min || guess > max ){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } 
  
  // check if won
  if(guess === winningNum) {
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct. You WIN!`, 'green');
  } else {
    // change border color
    guessInput.style.borderColor = 'red';
    // set message
    setMessage(`${guess} is incorrect.Please try again.`, 'red');
  }
});

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


