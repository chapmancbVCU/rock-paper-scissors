/******************************************************************************
 *         Name: game.js
 *       Author: Chad Chapman
 * Date Created: September 10, 2022
 *  Description: Implementation for Rock Paper Scissors game.
******************************************************************************/

/******************************************************************************
 *        Name: getComputerChoice
 * Description: Randomly sets choice for computer.
 *   Arguments:
 *     Returns:
 *****************************************************************************/
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
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
 *     Returns:
 *****************************************************************************/
function playRound(playerSelection, computerSelection) {
    
}


/******************************************************************************
 *        Name: validateChoice
 * Description: Validates if choice is valid.  Returns result to caller.
 *   Arguments: playerSelection - The choice for the human player.
 *     Returns: True if valid, otherwise false.
 *****************************************************************************/
function validateChoice(playerSelection) {
    // Verify choice and alert user if it is invalid.
    if(playerSelection === "rock" || playerSelection === "paper" || 
            playerSelection === "scissors") {
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


    }
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