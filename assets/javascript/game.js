//Letter choices 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Orginal settings for all variables 
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

  //Allows computer to select a random letter from var computerChoices
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //Allows the user 9 guesses

  let updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
  };

  let updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  let updateGuessesSoFar = function() {
  // Guesses so far made are displayed 
  document.querySelector('#SoFar').innerHTML = "Your Guesses so far: " + guessedLetters;
  };
  // Calls function when everything is reset
  let reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
  //Key is typed as user's guess
  document.onkeyup = function(event) {
    guessesLeft--;
  let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;

                alert("Woah you really are Psychic!");

                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            alert("Womp your no Psychic, Try again?");

            reset();
        }
};



