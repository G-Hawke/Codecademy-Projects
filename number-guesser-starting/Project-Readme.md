# Project Details

In this project, we are tasked with writing four functions in script.js. 
Some additional JavaScript code in game.js that will call the functions we created in script.js based on user interactions, but we didn't need to look at game.js or edit it if if we wanted our project to work as intended.
As we completed this project, we had to make sure that all of your functions are named exactly as specified so that they can be called correctly when the game is played.

## Tasks we had to complete.

* [x] Create a generateTarget() function (This function will be called at the start of each new round in order to generate the new secret target number). 
  * [x] This function should return a random integer between 0 and 9.
* [x] Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.
  * [x] Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
  * [x] Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
  * [x] Return true if the human player wins, and false if the computer player wins.
* [x] Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.
  * [x] Has a single parameter. This parameter will be a string value representing the winner.
  * [x] Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
  * [x] Does not need to return any value.
* [x] Create an advanceRound() function. This function will be used to update the round number after each round.
  * [x] advanceRound() should increase the value of currentRoundNumber by 1.

## BONUS TASKS

* [x] Create a getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
* [x] Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range.





