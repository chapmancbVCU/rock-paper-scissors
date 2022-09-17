/******************************************************************************
 *         Name: game.js
 *       Author: Chad Chapman
 * Date Created: September 10, 2022
 *  Description: Implementation for Rock Paper Scissors game.
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
let round = 1;
let tie = 0;
let computerWinCount = 0;
let playerWinCount = 0;
let isGameFinished = false;


/******************************************************************************
 *        Name: getComputerChoice
 * Description: Randomly sets choice for computer using a random number
 *              generator.
 *   Arguments: NONE
 *     Returns: A string that is one of the following: "rock", "paper", 
 *              or "scissors".
 *****************************************************************************/
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    /* We assign rock if random value is 1, paper if random value is 2, and 
       scissors when random value is 3 */
    if(randomNumber === 1) {
        return "rock";
    }
    else if(randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


/******************************************************************************
 *        Name: playRound
 * Description: Implements each round for the game.
 *   Arguments: playerSelection - Selection for human player.
 *   Arguments: computerSelection - The selection for the computer. 
 *     Returns: "Tie" if nobody wins, otherwise "computer" or "player" 
 *              depending on who the current round.
 *****************************************************************************/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerWinCount++;
        return "computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWinCount++;
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWinCount++;
        return "player"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWinCount++;
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWinCount++;
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWinCount++;
        return "player";
    } else {
        tie++;
        return "tie";
    }
}


/******************************************************************************
 *        Name: validateChoice
 * Description: Validates if choice is valid.  Returns result to caller.
 *   Arguments: playerSelection - The choice for the human player.
 *     Returns: True if valid, otherwise false.
 *****************************************************************************/
function validateChoice(playerSelection) {
    let selection = playerSelection.toLowerCase();

    // Verify choice and alert user if it is invalid.
    if(selection === "rock" || selection === "paper" || 
            selection === "scissors") {
        return true;
    }
    else {
        alert("You entered an invalid choice!");
        return false;
    }
}


/******************************************************************************
 *        Name: game
 * Description: Main execution section for the game Rock Paper Scissors.
 *   Arguments: NONE
 *     Returns: NONE
 *****************************************************************************/
function game(playerSelection)
{
    const computerSelection = getComputerChoice();
 
    // Round selection report
    const roundMessage = document.createElement('p');
    roundMessage.classList.add('roundMessage');
    roundMessage.style.textAlign = "center";
    roundMessage.textContent = `Round ${round}`;

    const playerSelectionInfo = document.createElement('p');
    playerSelectionInfo.classList.add('playerSelectionInfo');
    playerSelectionInfo.textContent = `Player selected: ${playerSelection}`;

    const computerSelectionInfo = document.createElement('p');
    computerSelectionInfo.classList.add('computerSelectionInfo');
    computerSelectionInfo.textContent = `Computer selected: ${computerSelection}`;

    gameResultsContainer.appendChild(roundMessage);
    gameResultsContainer.appendChild(playerSelectionInfo);
    gameResultsContainer.appendChild(computerSelectionInfo);

    // Complete round and get results.
    results = playRound(playerSelection, computerSelection);
    
    // Generate report for current round.
    const roundResultsTitle = document.createElement('p');
    roundResultsTitle.classList.add('roundResultsTitle');
    roundResultsTitle.style.textAlign = 'center';
    roundResultsTitle.textContent = `Report for Round ${round}`;
    
    const winner = document.createElement('p');
    winner.classList.add('winner');
    winner.style.fontWeight = "bold";

    if(results == "player") {
        winner.textContent = "Player Wins!";
    } else if (results == "computer") {
        winner.textContent = "Computer Wins!  Good luck next time.";
    } else if (results == "tie") {
        winner.textContent= "Tie game!";
    }
    
    const numPlayerWins = document.createElement('p');
    numPlayerWins.classList.add('numPlayerWins');
    numPlayerWins.textContent = `Player has ${playerWinCount} wins.`;

    const numComputerWins = document.createElement('p');
    numComputerWins.classList.add('numComputerWins');
    numComputerWins.textContent = `Computer has ${computerWinCount} wins`;


    gameResultsContainer.appendChild(roundResultsTitle);
    gameResultsContainer.appendChild(winner);
    gameResultsContainer.appendChild(numPlayerWins);
    gameResultsContainer.appendChild(numComputerWins);

    gameResultsContainer.appendChild(document.createElement('hr'));

    // Increment for reporting purposes.
    round++;

    /**************************************************************************
     * No longer need this for now.
     **************************************************************************/
    // Number of rounds for this game.
    //let rounds = 5;

    // Main execution loop for the 5 rounds.
    //for(let i = 0; i < rounds; i++) {
        
        // Boolean flag to break out of loop once valid choice is selected.
        //let isValidChoice = false;

        //let playerSelection;
        // Determine if input is valid in this do while loop.
        /*do {
            // Ask user to enter a choice for the game.
            playerSelection = prompt(`Enter rock, paper, or scissors for round ${i + 1}:`, "");
            isValidChoice = validateChoice(playerSelection);
        } while (isValidChoice == false);*/

        // Once a valid choice is made we alert the user.
        /*let computerSelection = getComputerChoice();
        alert(`Player selection: ${playerSelection}\nComputer selection: ${computerSelection}`);

        let results = playRound(playerSelection, computerSelection);
        console.log(`Results: ${results}`);

        if(results == "computer") {
            computerWinCount++;
            alert("Results for this round: Computer wins!");
        } else if (results == "player") {
            playerWinCount++;
            alert("Results for this round: Player wins!");
        } else {
            tie++;
            alert("Results for this round: Tie game!");
        }  */    
    //}

    //Report results and winner.
    //alert(`Final Results\nNumber of tied games: ${tie}\nPlayer wins: ${playerWinCount}\nComputer Wins: ${computerWinCount}`);
}


/******************************************************************************
 * Main
 *****************************************************************************/
//game();

// Get info from button click and set value to string playerSelection.
const buttons = document.getElementById('rps-buttons');


const gameResultsContainer = document.querySelector('#gameResults');

// Header message
const gameResultsHeaderElement = document.createElement('h2');
gameResultsHeaderElement.classList.add('gameResultsHeaderElement');
gameResultsHeaderElement.textContent = "Running Game Summary!";
gameResultsHeaderElement.style.textAlign = "center";
gameResultsContainer.appendChild(gameResultsHeaderElement);

// Display text running score
const runningScore = document.createElement('h3');
runningScore.classList.add('runningScore');
runningScore.textContent = "Running Score";
runningScore.style.textAlign = "center";
gameResultsContainer.appendChild(runningScore);

// Create border below description text.
gameResultsContainer.appendChild(document.createElement('hr'));

// Event listener for clicks.
buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton) {
        return;
    }

    const playerSelection = event.target.id;

    // Begin setup of final winner message.
    const finalWinner = document.createElement('h2');
    finalWinner.classList.add('finalWinner');
    finalWinner.style.textAlign = 'center';

    // Play until a player get 5 wins
    if(playerWinCount < 5 && computerWinCount < 5) {
        game(playerSelection);
    } else if (playerWinCount == 5) {
        finalWinner.textContent = "Player wins the game!";
        isGameFinished = true;
    } else if (computerWinCount == 5) {
        finalWinner.textContent = "Computer wins the game!";
        isGameFinished = true;
    } else {
        alert("Refresh to start new game");
    }
    
    // Reveal final winner.
    if(isGameFinished) {
        gameResultsContainer.appendChild(finalWinner);
        const rockButton = document.querySelector('#rock').disabled = true;
        const paperButton = document.querySelector('#paper').disabled = true;
        const scissorsButton = document.querySelector('#scissors').disabled = true;
    }
});