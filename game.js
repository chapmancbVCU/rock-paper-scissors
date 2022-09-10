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

}





/******************************************************************************
 *        Name: playRound
 * Description: Implements each round for the game.
 *   Arguments: playerSelection - selection for human player
 *   Arguments: computerSelection
 *     Returns:
 *****************************************************************************/
function playRound(playerSelection, computerSelection) {

}


/******************************************************************************
 *        Name: game
 * Description: Main execution section for the game Rock Paper Scissors
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

        let choice;
        // Determine if input is valid in this do while loop.
        do {
            // Ask user to enter a choice for the game.
            choice = prompt(`Enter rock, paper, or scissors (all lower case) for round ${i + 1}:`, "");

            // Verify choice and alert user if it is invalid.
            if(choice === "rock" || choice === "paper" || choice === "scissors") {
                isValidChoice = true;
            }
            else {
                alert("You entered an invalid choice!");
                isValidChoice = false;
            }
        } while (isValidChoice == false);

        // Once a valid choice is made we alert the user.
        alert(`You entered "${choice}"`);
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