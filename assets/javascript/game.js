

var letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");
var guessesSoFarArray = []
var endGameText = document.getElementById("end-game")
// console.log(guessesSoFarArray)


function gameStart () {
        var computerLetterPick = letterBank[Math.floor(Math.random()*letterBank.length)];
        var guessesLeft = 10;
        console.log(computerLetterPick)


    document.onkeyup = function (letterGuess) {
        var userGuess = event.key;
        console.log (userGuess)

         if (userGuess === computerLetterPick) {
             wins++;
             gameStart();
         } else {
            guessesLeft--; 
            if (guessesLeft === 0) {
                losses++;
                gameStart();
            }
            


    //         for (i = 0; i < guessesSoFarArray.length; i++)
    //         console.log(guessesSoFarArray)
    //         var guessesSoFar = document.createElement("p");

    //   guessesSoFar.textContent = guessesSoFarArray[i];

    //   guessesSoFarText.appendChild(guessesSoFar);
             

}
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesLeftText.textContent = "Guesses left: " + guessesLeft;
guessesSoFar = "Guesses so far: ";
endGameText = "";
};
}