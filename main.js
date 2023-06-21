let previousSelection = null;
function playGame(playerSelection) {
    const choices = ['rock' , 'paper' , 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    const result = playRound(playerSelection , computerSelection);
    document.getElementById('result').textContent = result;
    previousSelection = playerSelection;
}

function playRound(playerSelection , computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'Invalid selection. Please choose rock, paper, or scissors.';
      }

      if(previousSelection == playerSelection)
      {
        return 'Make a new choice!';
      }

      if(playerSelection == computerSelection)
      {
        return 'It is a tie! Computer Chose ' + computerSelection;
      }
      else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper'))
      {
        return 'You win! Computer Chose ' + computerSelection;
      }
      else
      {
        return 'You lose! Computer Chose ' + computerSelection;
      }
}