let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Create a function that returns a random integer between 0 and 9.
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  humanGuess = getAbsoluteDistance(humanGuess, targetNumber);
  computerGuess = getAbsoluteDistance(computerGuess, target);

  if (humanGuess < 0 || humanGuess > 9) {
    alert('You need to enter a value between 0 and 9 to play. Try again Next round!');
  }
  
 return humanGuess <= computerGuess;
}

function updateScore(winner) {
  winner === 'human' ? humanScore++ : computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}