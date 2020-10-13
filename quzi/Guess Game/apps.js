/**
 * Guess The Number Game
 * Done Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 *done Console whether the guess is too high, too low, or is correct inside playGame function
 * done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * done Complete the showYouWon, showNumberAbove, showNumberBelow
 * doneTODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * done Save the guess history in a variable called guess
 * done: Display the guess history using displayHistory() function
 * done: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
let guesses = [];

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)

}

/**
 * Functionality for playing the whole game
 */
function playGame() {
    let numberGuess = document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
    displayResult(numberGuess);
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
function displayResult(numberGuess) {
    if (numberGuess > correctNumber && numberGuess < 101 && numberGuess > 1) {
        showNumberAbove();
    } else if (numberGuess < correctNumber && numberGuess < 101 && numberGuess > 1) {
        showNumberBelow();
    } else if (numberGuess == correctNumber) {
        showYouWon();
    } else if (numberGuess > 100 || numberGuess < 1) {
        showMessage();
    }
}



/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
    document.getElementById('number-guess').value = "";
}
/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 
 */
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
    guesses.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
    let index = guesses.length - 1; // TODO
    let list = "<ul class='list-group'>";

    while (index >= 0) {
        list += "<li class='list-group-item'> " + "You Guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
        case "stop":
            dialog = "<div class='alert alert-danger' role='alert'>"
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}



function showYouWon() {

    alert("Awesome job, you got it and it only took " + guesses.length + " guesses");
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters 
     */

    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showMessage() {
    alert('Please pick a number between 1 and 100 ');
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */

    let dialog = getDialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}