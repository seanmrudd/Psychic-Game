
// Choices computer can pick from
var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set wins and losses to zero when the page loads.  Doesn't get displayed until onkeyup function
var wins = 0;
var losses = 0;

// When button is clicked, gameStart function starts
function gameStart() {

    //After game is completed, it comes back to gameStart refreshing guessesLeft and guessesArray
    var guessesLeft = 13;
    var guessesArray = [];
    console.log(guessesArray);

    //Random letter is chosen from computer
    var computerLetterPick = letterBank[Math.floor(Math.random() * letterBank.length)];
    console.log(computerLetterPick);

    function restart() {
        guessesLeft = 13;
        guessesArray = [];
    }


    //keyup is stored as userGuess
    document.onkeyup = function () {
        if (event.keyCode > 64 && event.keyCode < 91) {
            var userGuess = event.key.toLowerCase();
            console.log(userGuess)

            // If the userGuess and computer random number are identical, then wins is added and it loops back to the top of the function with gameStart
            if (!guessesArray.includes(userGuess)) {
                if (userGuess === computerLetterPick) {
                    wins++;
                    restart();
                    gameStart();
                } else {
                    // if the userGuess doesn't match the computer random number, the amount of guesses left goes down
                    guessesLeft--;
                    // userGuess is also assigned to wrongGuess
                    var wrongGuess = userGuess;
                    // wrongGuess is then pushed to the guessesArray
                    guessesArray.push(wrongGuess)

                    // if the user runs out of guesses, a loss is added and the game will start over
                    if (guessesLeft == 0) {
                        losses++;
                        restart();
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

                // What gets displayed onto the page
                document.getElementById("wins-text").textContent = "Wins: " + wins;
                document.getElementById("losses-text").textContent = "Losses: " + losses;
                document.getElementById("guessesLeft-text").textContent = "Guesses left: " + guessesLeft;
                document.getElementById("guessesSoFar-text").textContent = "Guesses so far: " + guessesSoFar;

            }
        }
    }
}
// .push(userGuess);
//.textContent [joined-function]
//if(event.keyCode > 64 && event.keyCode < 91)
//if(event.key >= 'a' && event.key >= 'z')
//if(!guessedLetters.includes(userGuess)){}  ------- !=if not
//if(guessedLetters.indexOf(userGuess) = -1