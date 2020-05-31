let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Create a function that returns a random integer between 0 and 9.
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Create a function that takes a guess number and a target number and find the absolute distance.
function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target);
}

// Compare the guesses of the computer and the human player
function compareGuesses(humanGuess, computerGuess, targetNumber) {
  // Calcualte the absolute distance for both the Human player and computer player
  humanGuess = getAbsoluteDistance(humanGuess, targetNumber);
  computerGuess = getAbsoluteDistance(computerGuess, target);

  // Check to see if the value the Human player entered was in the constraints given.
  if (humanGuess < 0 || humanGuess > 9) {
    alert('You need to enter a value between 0 and 9 to play. Try again Next round!');
  }
  
  // return true if the human guess is greater than or equal to the computer guess
 return humanGuess <= computerGuess;
}

// Update the score of the winner
function updateScore(winner) {
  winner === 'human' ? humanScore++ : computerScore++;
}

// advance the round.
function advanceRound() {
  currentRoundNumber++;
}
