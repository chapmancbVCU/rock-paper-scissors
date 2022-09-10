/******************************************************************************
 *         Name: game.js
 *       Author: Chad Chapman
 * Date Created: September 10, 2022
 *  Description: Implementation for Rock Paper Scissors game.
******************************************************************************/

/******************************************************************************
 *        Name: getComputerChoice
 * Description: Randomly sets choice for computer using a random number
 *              generator.
 *   Arguments: NONE
 *     Returns: A string that one of the following: "rock", "paper", 
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
        return "computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "player"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "player";
    } else {
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
function game()
{
    let tie = 0;
    let computerWinCount = 0;
    let playerWinCount = 0;
    // Number of rounds for this game.
    let rounds = 5;

    // Main execution loop for the 5 rounds.
    for(let i = 0; i < rounds; i++) {
        
        // Boolean flag to break out of loop once valid choice is selected.
        let isValidChoice = false;

        let playerSelection;
        // Determine if input is valid in this do while loop.
        do {
            // Ask user to enter a choice for the game.
            playerSelection = prompt(`Enter rock, paper, or scissors (all lower case) for round ${i + 1}:`, "");
            isValidChoice = validateChoice(playerSelection);
        } while (isValidChoice == false);

        // Once a valid choice is made we alert the user.
        let computerSelection = getComputerChoice();
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
        }      
    }

    //Report results and winner.
    alert(`Final Results\nNumber of tied games: ${tie}\nPlayer wins: ${playerWinCount}\nComputer Wins: ${computerWinCount}`);
}

/******************************************************************************
 * Main
 *****************************************************************************/
game();













/******************************************************************************
 *        Name:
 * Description:
 *   Arguments:
 *     Returns:
 *****************************************************************************/