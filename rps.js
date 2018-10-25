function computerPlay() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let indice = Math.floor(Math.random() * Math.floor(3)); // Saves a random number between 0, 1, 2
  return choice[indice];
}
// Play a round , +1 if win, -1 if lose, 0 if tied

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      if (computerSelection == "Paper") {
        console.log("You lose! Paper beats Rock")
        return -1
      } else if (computerSelection == "Scissors") {
        console.log("You win!")
        return 1
      } else {
        return 0
      }
      break;
    
    case 'paper':
      if (computerSelection == "Scissors") {
        console.log("You lose! Scissors beats Paper")
        return -1
      } else if (computerSelection == "Rock") {
        console.log("You win")
        return 1
      } else {
        return 0
      }
      break;
    case 'scissors':
      if (computerSelection == 'Rock') {
        console.log("You lose! Rock beats Scissors")
        return -1
      } else if (computerSelection == "Paper") {
        console.log("You win")
        return 1
      } else {
        return 0
      }
      break;
  }
}
// Play 3 rounds and show the results
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 3; i++) {
    
    // Saves the score based on the return of playRound().
    let score = playRound(prompt("Rock, Paper or Scissors?"), computerPlay());
    switch (score) {
      case -1:
        console.log("Computer earned a point")
        computerScore += 1;
        break;
      case 1:
        console.log("You earned a point")
        playerScore += 1;
        break;
      case 0:
        console.log("Tied")
        break;
    }
  }

console.log("Game finished!")
console.log(`Scores: Computer: ${computerScore}, Player: ${playerScore}`);
}