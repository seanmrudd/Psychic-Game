
// Choices computer can pick from
var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;

// What gets displayed onto the page
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

// When button is clicked, gameStart function starts
function gameStart() {

    //After game is completed, it comes back to gameStart refreshing guessesLeft and guessesArray
    var guessesLeft = 13;
    var guessesArray = [];
    console.log(guessesArray);

    //Random letter is chosen from computer
    var computerLetterPick = letterBank[Math.floor(Math.random() * letterBank.length)];
    console.log(computerLetterPick);




    //keyup is stored as userGuess
    document.onkeyup = function () {
        var userGuess = event.key;
        console.log(userGuess)

        // If the userGuess and computer random number are identical, then wins is added and it loops back to the top of the function with gameStart
        if (userGuess === computerLetterPick) {
            wins++;
            guessesLeft = 13;
            guessesArray = [];
            gameStart();
        } else {
            // if the userGuess doesn't match the computer random number, the amount of guesses left goes down
            guessesLeft--;
            // userGuess is also assigned to wrongGuess
            var wrongGuess = userGuess;
            // wrongGuess is then pushed to the guessesArray
            guessesArray.push(wrongGuess)

            // if the user runs out of guesses, a loss is added and the game will start over
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 13;
                guessesArray = [];
                gameStart();
            }

        }

        // a value is added to string
        var guessesSoFar = ""
        // for loop for array
        for (i = 0; i < guessesArray.length; i++) {
            //the wrong guess that went into the array is assigned to variable wrong letter
            var wrongLetter = guessesArray[i];
            // the total guesses so far is assigned to the string that has the wrong letter plus all the other previous wrong guesses
            guessesSoFar += " " + wrongLetter;
            console.log(guessesSoFar)
        }


        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar;
        
    }
}