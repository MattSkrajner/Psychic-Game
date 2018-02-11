// Outline of things that need to be done
// make computer pick a random letter
// track what key user presses
// keep track of wins, losses, and user guesses
// reset variables if the game is won or lost
// put stats into the HTML document
// start guesses at 9


// Set the letters that the computer can choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Declare the variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null; // so userGuess does not have a value untila key is pressed

// Make computer randomly pick a letter from computerChoices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// start listening for events
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Put user's key press into userGuess variable and then decrease guessesLeft by 1
	if (guessesSoFar.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	// if computerGuess equals userGuess then it is a win, increase win count by 1
	if (computerGuess == userGuess) {
        wins++;
    // reset guessesLeft to 9, and make guessesSoFar empty again
		guessesLeft = 9;
        guessesSoFar = [];
    // make computer pick another letter
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	}

	// if guessesLeft equals 0 then it is a loss, increase loss count by 1
	if (guessesLeft == 0) {
		losses++;
	//  reset guessesLeft to 9, and empty the guessesSoFar array
		guessesLeft = 9;
        guessesSoFar = [];
    // make computer pick another letter
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	}

	// Print the stats to the HTML document
	var html = "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the empty tracker id that is in the html
	document.querySelector("#tracker").innerHTML = html;

}
